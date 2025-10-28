import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  compiler: {
    styledComponents: true,
  },
  images: {
    // Permette immagini da IP privati.
    // dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    // ⚠️ Usare solo in sviluppo o reti interne, mai in produzione pubblica
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.221",
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