"use client";

import dynamic from "next/dynamic";

const VideoPlayer = dynamic(
  () => import("@/components/watch/VideoPlayer"),
  { ssr: false }
);

interface WatchSlugClientProps {
  src: string;
}

export default function WatchSlugClient({ src }: WatchSlugClientProps) {
  return (
    <div className="bg-black">
      <VideoPlayer src={src} autoplay />
    </div>
  );
}