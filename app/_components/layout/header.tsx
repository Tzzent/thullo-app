"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Spinner } from "@/components/spinner";

import Logo from "./logo";
import InputSearch from "./input-search";

export default function Header() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="dark:bg-[#0F0F0F] bg-white p-4 flex items-center shadow">
      <Logo />
      <div className="w-full flex items-center justify-end gap-2">
        {isAuthenticated && !isLoading && (
          <InputSearch />
        )}
        {isLoading && (<Spinner />)}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>
                Sign in
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <UserButton
            afterSignOutUrl="/"
          />
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
