"use client";

import Image from "next/image";

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

interface BoardCardProps {

}

export default function BoardCard({

}: BoardCardProps) {
  return (
    <Link href="/boards/2">
      <Card className="overflow-hidden rounded-xl p-3 transition duration-100 hover:ring-2 hover:ring-primary">
        <CardContent className="relative h-32 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
            alt="Cover-Board-Image"
            fill
            className="object-cover"
          />
        </CardContent>
        <CardTitle className="font-noto_sans font-[500] my-2 text-base">
          Devchallenges Board
        </CardTitle>
        <CardFooter className="p-0 gap-2 mt-5">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1780"
              alt="user-avatar"
            />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1780"
              alt="user-avatar"
            />
          </Avatar>
          <p className="text-[#BDBDBD] text-xs font-noto_sans font-[500]">
            + 5 others
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
