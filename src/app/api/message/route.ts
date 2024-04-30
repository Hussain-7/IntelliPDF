import { db } from "@/db";
import { pinecone } from "@/lib/pinecone";
import { SendMessageValidator } from "@/lib/validators/sendMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { NextRequest } from "next/server";
import { openai } from "@/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { w2FormContext } from "@/config/training-data";

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

  // const pineconeIndex = pinecone.index("intelli-pdf");
  // console.log("Index found");

  // const embeddings = new OpenAIEmbeddings({
  //   openAIApiKey: process.env.OPEN_AI_API_KEY!,
  // });

  // const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
  //   pineconeIndex,
  //   namespace: file.id,
  // });

  // // Checking for 4 closest results to the message
  // const results = await vectorStore.similaritySearch(message, 2);

  // console.log(
  //   "Search results from vector db",
  //   results.map((r) => r.pageContent).join("\n\n")
  // );

  // also pass previous messages to the llm
  // Search from content from pdf in vector json and result
  const responseFromServer = await fetch(
    "http://localhost:4000/search_similar_data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        namespace: file.id,
      }),
    }
  );

  const results = await responseFromServer.json();
  console.log("Results from server", results);
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
          "Your are a tax form summarizer. Use the following pieces of context (w2-forms) (or previous conversaton if needed) to answer the users question in markdown format.",
      },
      {
        role: "user",
        content: `
  PREVIOUS CONVERSATION:
  ${formattedPrevMessages.map((message) => {
    if (message.role === "user") return `User: ${message.content}\n`;
    return `Assistant: ${message.content}\n`;
  })}

  \n----------------\n

  ${w2FormContext}

  CONTEXT FROM DATA:
  ${results?.data.join("\n\n")}

  USER INPUT: ${message}`,
      },
    ],
  });
  console.log("Response from openai", response);
  const stream = OpenAIStream(response, {
    async onCompletion(completion) {
      console.log("Completion from response", completion);
      await db.message.create({
        data: {
          text: completion,
          isUserMessage: false,
          fileId,
          userId: user.id,
        },
      });
      console.log("Saved message from response in database");
    },
  });

  return new StreamingTextResponse(stream);
};
