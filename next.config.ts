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
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST!,
        port: process.env.NEXT_PUBLIC_IMAGE_PORT!,
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: [
    process.env.NEXT_PUBLIC_DEV_ORIGIN!,
    process.env.NEXT_PUBLIC_LOCALHOST!,
  ],
};

export default nextConfig;