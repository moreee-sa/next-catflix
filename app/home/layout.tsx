import { Suspense } from "react"
import Loading from "./loading"
import Navbar from "@/components/Navbar"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar showVersion={false} />
      {children}
    </Suspense>
  )
}