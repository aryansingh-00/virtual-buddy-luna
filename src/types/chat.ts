
export interface Message {
  id: string;
  text: string;
  sender: "user" | "luna";
  timestamp: Date;
  avatar?: string;
  name?: string;
}

