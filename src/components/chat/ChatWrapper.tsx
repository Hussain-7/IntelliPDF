"use client";

import { ChevronLeft, Loader2, XCircle } from "lucide-react";
import React from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { trpc } from "@/app/_trpc/client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ChatStatus from "./ChatStatus";
import { ChatContextProvider } from "@/context/ChatContext";

type Props = {
  isSubscribed: Boolean;
  fileId: string;
};

const ChatWrapper = ({ fileId }: Props) => {
  const { data, isLoading } = trpc.getFileUploadStatus.useQuery(
    {
      fileId,
    },
    {
      refetchInterval: (data) => {
        const status = data?.status;
        return status === "SUCCESS" || status === "FAILED" ? false : 500;
      },
    }
  );

  if (isLoading)
    return (
      <ChatStatus
        status="Loading..."
        message="We're preparing your PDF."
        Icon={Loader2}
      />
    );

  if (data?.status === "PROCESSING")
    return (
      <ChatStatus
        status="Processing PDF..."
        message="This won't take long."
        Icon={Loader2}
      />
    );

  if (data?.status === "FAILED")
    return (
      <ChatStatus
        status="Too many pages in PDF"
        message="  Your can have only at max 5 pages per PDF."
        Icon={XCircle}
        link="/dashboard"
      />
    );

  return (
    <ChatContextProvider fileId={fileId}>
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 justify-between flex flex-col mb-28">
          <Messages fileId={fileId} />
        </div>
        <ChatInput isDisabled={false} />
      </div>
    </ChatContextProvider>
  );
};

export default ChatWrapper;
