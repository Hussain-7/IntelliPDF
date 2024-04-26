import { ChevronLeft, Loader2, LucideIcon } from "lucide-react";
import React from "react";
import ChatInput from "./ChatInput";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {
  Icon: LucideIcon;
  status: string;
  message: string;
  link?: string;
};

const ChatStatus = ({ Icon, status, message, link }: Props) => {
  return (
    <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
      <div className="flex-1 flex justify-center items-center flex-col mb-28">
        <div className="flex flex-col items-center gap-2">
          <Icon
            className={`h-8 w-8 ${
              link ? "text-red-500" : "text-blue-500 animate-spin"
            }`}
          />
          <h3 className="font-semibold text-xl">{status}</h3>
          <p className="text-zinc-500 text-sm">{message}</p>
        </div>
        {link && (
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "secondary",
              className: "mt-4",
            })}
          >
            <ChevronLeft className="h-3 w-3 mr-1.5" />
            Back
          </Link>
        )}
      </div>
      <ChatInput isDisabled />
    </div>
  );
};

export default ChatStatus;
