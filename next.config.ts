import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "0.0.0.0",
        port: "8000",
        pathname: "/**", // Permette tutte le immagini (poster, backdrop, ecc.)
      },
    ],
  },
};

export default nextConfig;