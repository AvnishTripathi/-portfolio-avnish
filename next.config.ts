import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  // Remove the floating ⓝ Next.js dev indicator
  devIndicators: false,
};

export default nextConfig;
