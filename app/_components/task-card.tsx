"use client";

import Image from "next/image";

import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Plus, Paperclip, MessageSquare } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Avatar from "./avatar";

interface TaskCardProps {
  id: UniqueIdentifier,
}

export default function TaskCard({
  id,
}: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-2 space-y-3 min-w-60"
    >
      <div className="relative w-full h-32 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cover-task"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-noto_sans text-base font-[400]">
        🖐🏼 Move anything &apos;ready&apos; here {id}
      </h3>
      <div className="flex items-center gap-2">
        <Badge className="bg-[#D5E6FB]">
          Technical
        </Badge>
        <Badge className="bg-[#9B51E0]">
          Design
        </Badge>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Avatar />
          <Avatar />
          <Button size="xs">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <MessageSquare className="w-3 h-3" /> 2
          <Paperclip className="w-3 h-3" /> 1
        </div>
      </div>
    </Card>
  )
}
