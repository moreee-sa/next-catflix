"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
}

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Quando cambia il tempo
    const updateTime = () => setCurrentTime(video.currentTime);
    // Quando vengono caricate le info del video
    const setMeta = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setMeta);

    // Cleanup
    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  if (error) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center bg-black text-white">
        Errore: il video non è disponibile.
      </div>
    );
  }

  return (
    <div className="relative w-full h-[100vh] bg-black">
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
      />

      {/* Overlay controlli */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
        <div className="flex items-center justify-center gap-4 pb-6">
          <button
            onClick={togglePlay}
            className="bg-white/20 text-white rounded-full px-4 py-2 hover:bg-white/40 transition"
          >
            {isPlaying ? "⏸ Pausa" : "▶️ Play"}
          </button>
          <div className="rounded-full bg-white/20 text-white px-4 py-2">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
}