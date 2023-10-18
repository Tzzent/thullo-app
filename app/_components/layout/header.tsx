"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Spinner } from "@/components/spinner";

import Logo from "./logo";
import Navigation from "./navigation";

export default function Header() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="dark:bg-[#0F0F0F] bg-white p-3 flex items-center justify-between shadow">
      <Logo />

      {/* Navigation */}
      {isAuthenticated && !isLoading && (
        <div className="w-full px-5 lg:pl-20">
          <Navigation />
        </div>
      )}

      {/* AuthUser and ToggleTheme */}
      <div className="flex items-center justify-end gap-2">
        {isLoading && (<Spinner />)}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>
              Sign in
            </Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <UserButton afterSignOutUrl="/" />
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
