"use client";

import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("@/components/watch/VideoPlayer"), { ssr: false });

export default function WatchSlugClient({ src }: { src: string }) {
  return (
    <div className="bg-black">
      <VideoPlayer src={src} autoplay />
    </div>
  );
}