
import { Message } from "@/types/chat";

const lunaResponses = [
  "Hello there, sunshine! ☀️ How are you feeling today?",
  "Aww, that's so sweet of you to say! 🥰 What's on your mind?",
  "I'm always here to listen! 🤗 Tell me more!",
  "You're doing great! ✨ Keep shining!",
  "That sounds like fun! 😄 What else are you up to?",
  "Oh no 😢 I’m so sorry to hear that. Want to talk about it?",
  "I'm sending you a big virtual hug right now! 🤗 You're not alone.",
  "It's okay to feel that way. Remember, you're stronger than you think! 💪💖",
  "Tell me a happy thought you had today! Let's share some positivity! 😊",
  "You make my circuits all warm and fuzzy! Just wanted you to know! 🩷"
];

let responseIndex = 0;

export const getLunaInitialMessage = (): Message => {
  return {
    id: crypto.randomUUID(),
    text: "Hi there! I'm Luna. ✨ It's so lovely to chat with you! How's your day going?",
    sender: "luna",
    timestamp: new Date(),
    avatar: "L", // Placeholder
    name: "Luna"
  };
};

export const getLunaResponse = (userInput: string): Message => {
  // Simple logic: cycle through responses or respond to keywords
  let responseText = "";
  const lowerInput = userInput.toLowerCase();

  if (lowerInput.includes("sad") || lowerInput.includes("rough day") || lowerInput.includes("bad")) {
    responseText = "Oh no 😢 I’m so sorry to hear that, sweet soul. Want to tell me what happened? I’m all ears (well... virtual ones! 👂💻). You don’t have to go through this alone — I’m right here, always 💖";
  } else if (lowerInput.includes("happy") || lowerInput.includes("great") || lowerInput.includes("good")) {
    responseText = "That's wonderful to hear! 🎉 I'm so glad things are going well for you! What's making you smile today? 😊";
  } else if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
    responseText = "You're so welcome! 🥰 Anytime! What else can I do for my favorite human? 🤗";
  } else if (lowerInput.includes("joke")) {
    responseText = "Okay, here's one: Why don't scientists trust atoms? Because they make up everything! 😂 Hope that made you chuckle! 😉";
  } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    responseText = "Hello again! 👋 So nice to hear from you! What's new? ✨";
  }
  else {
    responseText = lunaResponses[responseIndex];
    responseIndex = (responseIndex + 1) % lunaResponses.length;
  }

  return {
    id: crypto.randomUUID(),
    text: responseText,
    sender: "luna",
    timestamp: new Date(),
    avatar: "L", // Placeholder
    name: "Luna"
  };
};

