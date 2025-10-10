"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
}

export default function VideoPlayer({ src, autoplay }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setError(false);

    if (Hls.isSupported() && src.endsWith(".m3u8")) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, () => setError(true));
      return () => hls.destroy();
    } else {
      video.src = src;
      video.onerror = () => setError(true);
    }
  }, [src]);

  if (error) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center bg-black text-white">
        Errore: il video non è disponibile.
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      controls
      autoPlay={autoplay}
      className="w-full h-[100vh]"
    />
  );
}