"use client";

import {
  Search,
  Grip,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import InputSearch from "./input-search";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <h1 className="line-clamp-1">
                Devchallenges Board
              </h1>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/boards">
                  <Grip className="mr-2 h-4 w-4" />
                  <span>All Boards</span>
                </Link>
              </DropdownMenuItem>
              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(ev) => ev.preventDefault()}>
                    <Search className="mr-2 h-4 w-4" />
                    <span>Search</span>
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="p-0 top-24 w-full max-w-xs">
                  <InputSearch />
                </DialogContent>
              </Dialog>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <h1 className="font-poppins text-[#333333] dark:text-white font-[500] text-sm line-clamp-1">
            Devchallenges Board
          </h1>
          <div className="w-[1px] h-9 bg-[#E0E0E0]" />
          <Button
            variant="secondary"
            className="flex-shrink-0"
            asChild
          >
            <Link href="/boards">
              <Grip className="w-4 h-4 mr-2" />
              All board
            </Link>
          </Button>
        </div>
        <InputSearch />
      </div>
    </>
  )
}