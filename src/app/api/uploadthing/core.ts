import { db } from "@/db";
import { pinecone } from "@/lib/pinecone";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: { maxFileSize: "16MB" },
    image: { maxFileSize: "4MB" },
  })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = await getUser();
      if (!user || !user.id) throw new Error("Unauthorized");
      return {
        userId: user.id,
      };
    })
    // This is triggered via an webhook on uploaded
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await db.file.create({
        data: {
          key: file.key,
          userId: metadata.userId,
          name: file.name,
          // https://utfs.io/f/
          // url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
          url: `https://utfs.io/f/${file.key}`,
          uploadStatus: "PROCESSING",
        },
      });
      // Index the file into vector database then update the loading state.
      try {
        const response = await fetch(`https://utfs.io/f/${file.key}`);
        const blob = await response.blob();
        const loader = new PDFLoader(blob);

        // To load all the text from the pdf. Each array element will contain text for page in the pdf
        const pageLevelDocs = await loader.load();

        // page count in pdf
        const pagesAmt = pageLevelDocs.length;

        // vectorize and index entire document so getting the index
        const pineconeIndex = pinecone.index("intelli-pdf");
        console.log("Index found");
        // To take the text and convert into vectors. It is mapping for the text to vectors
        // This is instance is used to converty text into vector embeddings using openai's models
        const embeddings = new OpenAIEmbeddings({
          openAIApiKey: process.env.OPEN_AI_API_KEY!,
        });
        
        console.log("embedding created", embeddings);
        // It converts texxt from the each page of pdf in pageLevelDocs into vectors using the embeddings
        // which are then indexed into the pinecone vector database
        await PineconeStore.fromDocuments(pageLevelDocs, embeddings, {
          pineconeIndex,
          namespace: createdFile.id,
        });

        // Update the file status to ready

        await db.file.update({
          where: {
            id: createdFile.id,
          },
          data: {
            uploadStatus: "SUCCESS",
          },
        });
      } catch (error) {
        await db.file.update({
          where: {
            id: createdFile.id,
          },
          data: {
            uploadStatus: "FAILED",
          },
        });
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
