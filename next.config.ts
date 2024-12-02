import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['3.125.43.204'], 
    unoptimized: true,
  },
};

export default nextConfig;
