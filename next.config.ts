import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.221",
        port: "8000",
        pathname: "/**", // Permette tutte le immagini (poster, backdrop, ecc.)
      },
    ],
  },
};

export default nextConfig;