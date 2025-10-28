"use client"

import styled from "styled-components";
import '@fontsource/prompt/500.css';
import { FaPlay, FaPause } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const Pulsante = styled.button`
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const PlayButton = styled(Pulsante)`
  background-color: #2d1e2f;
  color: #a9e5bb;

  &:hover {
    background-color: #E2E2B6;
    color: #000000;
  }
`;

const FullScreenButton = styled(Pulsante)`
  background-color: #2d1e2f;
  color: #a9e5bb;

  &:hover {
    background-color: #E2E2B6;
    color: #000000;
  }
`;

const TimeDisplay = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: white;
  white-space: nowrap;
`;

const SeekBarContainer = styled.div`
  position: relative;
  flex: 1;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
`;

interface SeekBarProgressProps {
  $progress?: number;
}

export const SeekBarProgress = styled.div.attrs<SeekBarProgressProps>(
  (props) => ({
    style: {
      width: `${props.$progress ?? 0}%`,
    },
  })
)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #a9e5bb;
  border-radius: 8px;
  transition: width 0.1s linear;
`;

interface VideoPlayerProps {
  src: string;
}

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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

  const showControlsTemporarily = () => {
    setShowOverlay(true);
    setHideCursor(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowOverlay(false);
      setHideCursor(true);
    }, 2000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseMove = () => showControlsTemporarily();
    const handleClick = () => showControlsTemporarily();

    video.addEventListener("mousemove", handleMouseMove);
    video.addEventListener("click", handleClick);

    return () => {
      video.removeEventListener("mousemove", handleMouseMove);
      video.removeEventListener("click", handleClick);
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

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const handleFullScreen = async () => {
    const container = overlayRef.current;
    if (!container) return;

    try {
      if (document.fullscreenElement) {
        // Esci da fullscreen e prova a sbloccare l'orientamento (se supportato)
        if (typeof document.exitFullscreen === "function") {
          await document.exitFullscreen();
        }
        try {
          if ("orientation" in screen && typeof (screen as any).orientation.unlock === "function") {
            await (screen as any).orientation.unlock();
          }
        } catch {
          // ignore: unlock non supportato o fallito
        }
        setIsFullScreen(false);
      } else {
        // Entra in fullscreen e poi prova a lockare l'orientamento (se supportato)
        if (typeof container.requestFullscreen === "function") {
          await container.requestFullscreen();
        }
        try {
          if ("orientation" in screen && typeof (screen as any).orientation.lock === "function") {
            await (screen as any).orientation.lock("landscape");
          }
        } catch {
          // ignore: lock non supportato o rifiutato
        }
        setIsFullScreen(true);
      }
    } catch (err) {
      console.warn("Fullscreen/orientation operation failed:", err);
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
    <div
      ref={overlayRef}
      className={`relative w-full h-full flex items-center justify-center bg-black transition-[cursor] duration-300 ${hideCursor ? "cursor-none" : "cursor-default"}`}
    >
      {/* Overlay controlli */}
      <div className={`absolute inset-0 flex flex-col justify-stretch bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${showOverlay ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Back button */}
        {/* <div className="p-2">
          <IoChevronBackOutline size={50} color="white" />
        </div> */}

        {/* Play */}
        <div className="opacity-40 h-full"></div>

        {/* Play - Seek Bar - Time Display */}
        <div className="flex items-center justify-center gap-4 p-2 flex-nowrap z-50 pointer-events-auto">
          {/* Play Button */}
          <PlayButton onClick={togglePlay} >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </PlayButton>

          {/* Seek Bar */}
          <SeekBarContainer onClick={handleSeek}>
            <SeekBarProgress $progress={progress} />
          </SeekBarContainer>

          {/* Time Display */}
          <TimeDisplay>
            {/* {formatTime(currentTime)} / {formatTime(duration)} */}
            {formatTime(currentTime)}
          </TimeDisplay>
          
          {/* Full Screen Button */}
          <FullScreenButton onClick={handleFullScreen} >
            {isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
          </FullScreenButton>

        </div>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        className="object-contain w-full h-[100vh]"
        // onClick={togglePlay}
        onDoubleClick={handleFullScreen}
      />
    </div>
  );
}