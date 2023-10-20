"use client";

import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1 px-4 pt-5">
        {children}
      </main>
      <Footer />
    </div>
  )
}
