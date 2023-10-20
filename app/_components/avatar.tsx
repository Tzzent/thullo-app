"use client";

import { Avatar as AvatarUI, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
  src?: string,
  name?: string,
}

export default function Avatar({
  src,
  name,
}: AvatarProps) {
  return (
    <AvatarUI>
      <AvatarImage
        src={src || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt={name || "default-user"}
      />
    </AvatarUI>
  )
}
