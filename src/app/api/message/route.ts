import { db } from "@/db";
import { SendMessageValidator } from "@/lib/validators/sendMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user?.id)
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
  if (!file)
    new Response("Not Found", {
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
};
