"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/Logo.svg"
        height={120}
        width={120}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/Logo-dark.svg"
        height={120}
        width={120}
        alt="Logo"
        className="hidden dark:block"
      />
    </Link>
  )
}
