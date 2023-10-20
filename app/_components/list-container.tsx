"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Plus, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import TaskCard from "./task-card";
import NewCardForm from "./new-card-form";

interface ListContainerProps {
  id: string,
  items: any,
}

export default function ListContainer({
  id,
  items,
}: ListContainerProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className="p-2 flex-1 space-y-5"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-poppins font-[500] text-sm text-[#333]">
            In Progress 📚
          </h3>
          <MoreHorizontal className="w-4 h-4" />
        </div>
        {items.map((id: any) => (
          <TaskCard
            key={id}
            id={id}
          />
        ))}
        <NewCardForm />
        {items.length === 0 ? (
          <Button variant="soft">
            Add another list <Plus />
          </Button>
        ) : (
          <Button variant="soft">
            Add another card <Plus />
          </Button>
        )}
      </div>
    </SortableContext>
  )
}
