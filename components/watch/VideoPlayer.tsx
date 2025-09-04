"use client";

import React, { useRef, useEffect } from "react";
import Plyr, { PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
}

export default function VideoPlayer({ src, autoplay }: VideoPlayerProps) {
  const ref = useRef<any>(null);

  const source = {
    type: "video" as const,
    sources: [
      {
        src,
        type: "video/mp4",
        provider: "html5" as "html5",
      },
    ],
  };

  const options: PlyrProps["options"] = {
    autoplay,
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      // "mute",
      // "volume",
      "fullscreen",
    ],
  };

  useEffect(() => {
    if (ref.current?.plyr) {
      // No-op
    }
  }, []);

  return (
    <Plyr
      ref={ref}
      source={source}
      options={options}
      style={{
        width: "100%"
      }}
    />
  );
}