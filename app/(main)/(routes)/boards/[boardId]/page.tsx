"use client";

import React, { useCallback, useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { LockKeyhole, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import ListContainer from "@/app/_components/list-container";
import TaskCard from "@/app/_components/task-card";
import ParticipantsHeading from "@/app/_components/participants-heading";

export default function BoardIdPage() {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [items, setItems] = useState<any>({
    root: ["1", "2"],
    container1: ["3", "4"],
    container2: ["5"],
    container3: ["6", "7"],
    container4: ["8", "9", "10"],
    container5: []
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const findContainer = useCallback((id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  }, [items]);

  const handleDragStart = useCallback((ev: DragStartEvent) => {
    const { active } = ev;
    const { id } = active;

    setActiveId(id);
  }, []);

  const handleDragOver = useCallback((ev: DragOverEvent) => {
    const { active, over } = ev;
    const { id } = active;

    if (!over) return;

    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) return;

    setItems((prev: any) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId);

      let newIndex;

      if (overId in prev) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = (
          over && overIndex === overItems.length - 1
          // ...
        );

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item: any) => item !== active.id)
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length)
        ]
      };
    });

  }, [
    findContainer,
    items,
  ]);

  const handleDragEnd = useCallback((ev: DragEndEvent) => {
    const { active, over } = ev;
    const { id } = active;

    if (!over) return;

    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) return;

    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((items: any) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
      }));
    }

    setActiveId(null);
  }, [
    findContainer,
    items,
  ]);

  return (
    <div className="flex flex-col">
      {/* Heading */}

      <div className="flex items-center justify-between w-full mb-5">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <LockKeyhole className="w-4 h-4" />
                <p className="ml-2 hidden md:block">
                  Private
                </p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              Actions will be here...
            </DropdownMenuContent>
          </DropdownMenu>
          <ParticipantsHeading />
        </div>
        <Button variant="secondary">
          <MoreHorizontal className="w-5 h-5" />
          <p className="ml-2 hidden md:block">
            Show Menu
          </p>
        </Button>
      </div>

      {/* Main */}
      <div className="flex bg-[#F8F9FD] rounded-3xl p-2 max-h-[calc(100vh-200px)] overflow-auto scrollbar scrollbar-thumb-primary scrollbar-track-gray-300 scrollbar-w-2 scrollbar-h-2 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scroll-smooth">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <ListContainer id="root" items={items.root} />
          <ListContainer id="container1" items={items.container1} />
          <ListContainer id="container2" items={items.container2} />
          <ListContainer id="container3" items={items.container3} />
          <ListContainer id="container4" items={items.container4} />
          <ListContainer id="container5" items={items.container5} />
          <DragOverlay>
            {activeId ? <TaskCard id={activeId} /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  )
}