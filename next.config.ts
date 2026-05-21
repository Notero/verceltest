import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  productionBrowserSourceMaps: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1366, 1600, 1920],
    formats: ["image/avif", "image/webp"],
    qualities: [65, 75],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
