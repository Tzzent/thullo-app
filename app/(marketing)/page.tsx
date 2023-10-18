"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export default function Home() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div>
        <Image
          src="/marketing.svg"
          alt="Thullo-Marketing"
          height={300}
          width={300}
        />
      </div>
      {isLoading && (
        <Spinner size="lg" />
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/boards">
            My boards
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Sign in
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}
