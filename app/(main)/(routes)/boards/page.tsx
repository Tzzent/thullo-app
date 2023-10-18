"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import BoardCard from "@/app/_components/board-card";

export default function BoardsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[#333333] text-lg font-[500] font-poppins">
          All boards
        </h1>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Add
        </Button>
      </div>
      <div className="grid gap-5 mt-10 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </div>
    </div>
  )
}
