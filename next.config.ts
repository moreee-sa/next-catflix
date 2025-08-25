import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "0.0.0.0",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: [
    "http://192.168.1.221:3000",
    "http://localhost:3000",
  ],
};

export default nextConfig;