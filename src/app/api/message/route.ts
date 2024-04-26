import { db } from "@/db";
import { pinecone } from "@/lib/pinecone";
import { SendMessageValidator } from "@/lib/validators/sendMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { NextRequest } from "next/server";
import { openai } from "@/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { w2FormContext } from "@/constants/data";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("usr", user);
  if (!user || !user?.id)
    return new Response("Unauthorized", {
      status: 401,
    });

  const { message, fileId } = SendMessageValidator.parse(body);

  const file = await db.file.findFirst({
    where: {
      id: fileId,
      userId: user.id,
    },
  });
  if (!file || !file?.id)
    return new Response("Not Found", {
      status: 404,
    });

  await db.message.create({
    data: {
      fileId,
      text: message,
      userId: user.id,
      isUserMessage: true,
    },
  });

  // Use some LLM here for answering the question

  const pineconeIndex = pinecone.index("intelli-pdf");
  console.log("Index found");

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPEN_AI_API_KEY!,
  });

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: file.id,
  });

  // Checking for 4 closest results to the message
  const results = await vectorStore.similaritySearch(message, 4);

  console.log("Search results from vector db", results);

  // also pass previous messages to the llm
  const previousMessages = await db.message.findMany({
    where: {
      fileId,
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 6,
  });

  // send to open ai for completion and format the messages.

  const formattedPrevMessages = previousMessages.map((msg) => ({
    role: msg.isUserMessage ? ("user" as const) : ("assistant" as const),
    content: msg.text,
  }));

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.",
      },
      {
        role: "user",
				content: `Use the following pieces of context (It is basically w-2 form known as the Wage and Tax Statement) (or previous conversaton if needed) 
				to answer the users question in markdown format. The user will ask question regarding this w-2 form. Here is some context that how to read that form\n
				 
				${w2FormContext}
				
				\nIf you don't know the answer, just say that you don't know, don't try to make up an answer.
        
  \n----------------\n
  
  PREVIOUS CONVERSATION:
  ${formattedPrevMessages.map((message) => {
    if (message.role === "user") return `User: ${message.content}\n`;
    return `Assistant: ${message.content}\n`;
  })}
  
  \n----------------\n
  
  CONTEXT:
  ${results.map((r) => r.pageContent).join("\n\n")}
  
  USER INPUT: ${message}`,
      },
    ],
  });

  const stream = OpenAIStream(response, {
    async onCompletion(completion) {
      await db.message.create({
        data: {
          text: completion,
          isUserMessage: false,
          fileId,
          userId: user.id,
        },
      });
    },
  });

  return new StreamingTextResponse(stream);
};
