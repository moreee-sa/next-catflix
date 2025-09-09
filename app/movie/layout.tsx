import { Suspense } from "react";
import { TITLE } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: TITLE,
  description: "Il tuo cinema online",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}