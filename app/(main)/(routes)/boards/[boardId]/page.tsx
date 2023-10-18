"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function BoardIdPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button>
            Private
          </Button>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1780"
              alt="user-avatar"
            />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1780"
              alt="user-avatar"
            />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1780"
              alt="user-avatar"
            />
          </Avatar>
        </div>

        <Button>
          Show Menu
        </Button>
      </div>
    </div>
  )
}
