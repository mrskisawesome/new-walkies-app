"use client";
import * as Avatar from "@radix-ui/react-avatar";

export default function AvatarDemo({ imageUrl }) {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image
          className="AvatarImage"
          src={imageUrl}
          alt="your avatar"
        />
        {/* <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback> */}
      </Avatar.Root>

      <Avatar.Root className="AvatarRoot">
        <Avatar.Fallback className="AvatarFallback">FK</Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
