"use client";

import { Plus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Avatar from "./avatar";

export default function ParticipantsHeading() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button
            variant="secondary"
            className="md:hidden"
          >
            <Users className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          All participants will be here!
        </DialogContent>
      </Dialog>
      <div className="items-center gap-1 hidden md:flex">
        <Avatar />
        <Avatar />
        <Avatar />
        <Button>
          <Plus />
        </Button>
      </div>
    </>
  )
}
