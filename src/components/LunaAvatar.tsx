
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";

interface LunaAvatarProps {
  isLuna: boolean;
}

const LunaAvatar: React.FC<LunaAvatarProps> = ({ isLuna }) => {
  if (!isLuna) {
    // Simple user avatar placeholder or could be an actual image
    return (
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-slate-300 text-slate-700">U</AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Avatar className="h-10 w-10">
      {/* You can replace AvatarImage with an actual image if you upload one for Luna */}
      {/* <AvatarImage src="path/to/luna-avatar.png" alt="Luna" /> */}
      <AvatarFallback className="bg-pink-400 text-white flex items-center justify-center">
        <Heart size={20} />
      </AvatarFallback>
    </Avatar>
  );
};

export default LunaAvatar;

