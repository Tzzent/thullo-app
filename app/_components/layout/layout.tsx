"use client";

import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="flex flex-col h-full bg-[#F8F9FD] dark:bg-[#040303] border border-cyan-400">
      <Header />
      <main className="flex-1 h-full px-4 py-5">
        {children}
      </main>
      <Footer />
    </div>
  )
}
