"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex-shrink-0">
      {/* Mobile */}
      <Image
        src="/Logo-small.svg"
        height={40}
        width={40}
        alt="Logo"
        className="block dark:hidden md:hidden"
      />
      <Image
        src="/Logo-small-dark.svg"
        height={40}
        width={40}
        alt="Logo"
        className="hidden dark:block md:dark:hidden"
      />

      {/* Desktop */}
      <Image
        src="/Logo.svg"
        height={120}
        width={120}
        alt="Logo"
        className="hidden md:block md:dark:hidden"
      />
      <Image
        src="/Logo-dark.svg"
        height={120}
        width={120}
        alt="Logo"
        className="hidden md:dark:block"
      />
    </Link>
  )
}
