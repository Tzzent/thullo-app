"use client";

import { Button } from "@/components/ui/button";

export default function InputSearch() {
  return (
    <div className="shadow-md relative rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-primary w-full max-w-xs">
      <input
        type="text"
        placeholder="Keyword..."
        className="px-5 py-3 outline-none w-full"
      />
      <div className="absolute right-1 inset-y-0 flex items-center">
        <Button>
          Search
        </Button>
      </div>
    </div>
  )
}
