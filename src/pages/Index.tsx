import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "@/components/ChatMessage";
import MessageInput from "@/components/MessageInput";
import { getLunaInitialMessage, getLunaResponse } from "@/services/lunaService";
import { Message } from "@/types/chat";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart } from "lucide-react";
import LunaAvatar from "@/components/LunaAvatar";

const IndexPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLunaTyping, setIsLunaTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([getLunaInitialMessage()]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLunaTyping(true);

    // Simulate Luna's thinking time
    setTimeout(() => {
      const lunaMessage = getLunaResponse(text);
      setMessages((prevMessages) => [...prevMessages, lunaMessage]);
      setIsLunaTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay for realism
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100">
      <header className="p-4 bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="container mx-auto flex items-center gap-2">
          <Heart className="h-8 w-8 text-pink-500" />
          <h1 className="text-2xl font-bold text-purple-700">Chat with Luna</h1>
        </div>
      </header>

      <ScrollArea className="flex-grow p-4 container mx-auto">
        <div className="max-w-2xl mx-auto">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLunaTyping && (
            <div className="flex items-center justify-start my-3">
              <div className="flex items-end gap-2 animate-fade-in">
                  <LunaAvatar isLuna={true} />
                  <div className="max-w-[70%] p-3 rounded-xl shadow-md bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-bl-none">
                    <p className="text-sm italic">Luna is typing...</p>
                  </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <MessageInput onSendMessage={handleSendMessage} isSending={isLunaTyping} />
    </div>
  );
};

export default IndexPage;
