import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "whiteee.space", "*-whiteee-space.vercel.app"],
    },
    optimizePackageImports: ["framer-motion", "@ark-ui/react"],
  },
};

export default nextConfig;
