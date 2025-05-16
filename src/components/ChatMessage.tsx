
import { Message } from "@/types/chat";
import LunaAvatar from "./LunaAvatar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isLuna = message.sender === "luna";

  return (
    <div
      className={cn(
        "flex items-end gap-2 my-3 animate-fade-in",
        isLuna ? "justify-start" : "justify-end"
      )}
    >
      {isLuna && <LunaAvatar isLuna={true} />}
      <div
        className={cn(
          "max-w-[70%] p-3 rounded-xl shadow-md",
          isLuna
            ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-bl-none"
            : "bg-slate-100 text-slate-800 rounded-br-none"
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        <p
          className={cn(
            "text-xs mt-1",
            isLuna ? "text-purple-200 text-right" : "text-slate-400 text-right"
          )}
        >
          {format(message.timestamp, "p")}
        </p>
      </div>
      {!isLuna && <LunaAvatar isLuna={false} />}
    </div>
  );
};

export default ChatMessage;

