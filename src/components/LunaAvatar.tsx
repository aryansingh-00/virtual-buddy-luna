
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// Removed Heart import as it's replaced by the 3D avatar for Luna
import Luna3DAvatar from "./Luna3DAvatar";

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
    // Use a div to wrap the 3D avatar, ensuring it fits well.
    // The size of the 3D avatar is primarily controlled within Luna3DAvatar's Canvas style.
    // This div helps align it within the chat message.
    <div className="h-10 w-10 flex items-center justify-center rounded-full overflow-hidden bg-pink-100">
      <Luna3DAvatar />
    </div>
  );
};

export default LunaAvatar;
