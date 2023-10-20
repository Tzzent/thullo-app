"use client";

import { ChangeEvent, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function NewCardForm() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const maxLength = 80;

  const handleInput = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(ev.target.value);

    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${ev.target.scrollHeight - 1}px`;
    }
  };

  return (
    <Card className="overflow-hidden p-3 focus-within:ring-1 focus-within:ring-primary">
      <textarea
        id="new-card-form"
        name=""
        ref={inputRef}
        maxLength={maxLength}
        onChange={handleInput}
        placeholder="Enter a title for this card..."
        className="resize-none w-full outline-none overflow-hidden"
      />
      <div className="flex items-end justify-between">
        <Button
          size="xs"
          variant="success"
        >
          Save
        </Button>
        <span className="text-secondary-foreground text-xs">
          {value?.length}/{maxLength}
        </span>
      </div>
    </Card>
  )
}
