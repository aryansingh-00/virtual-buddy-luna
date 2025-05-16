
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  isSending: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isSending }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && !isSending) {
      onSendMessage(inputText.trim());
      setInputText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 left-0 right-0 flex items-center gap-2 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200"
    >
      <Input
        type="text"
        placeholder="Talk to Luna..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="flex-grow bg-slate-50 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
        disabled={isSending}
      />
      <Button type="submit" size="icon" className="bg-purple-500 hover:bg-purple-600" disabled={isSending || !inputText.trim()}>
        <SendHorizontal className="h-5 w-5 text-white" />
      </Button>
    </form>
  );
};

export default MessageInput;

