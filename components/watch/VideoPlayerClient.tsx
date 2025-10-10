"use client";
import VideoPlayer from "./VideoPlayer";

export default function WatchSlugClient({ src }: { src: string }) {
  return (
    <div className="bg-black">
      <VideoPlayer src={src} />
    </div>
  );
}