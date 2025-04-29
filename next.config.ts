import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 800, 1280],
    domains: ["wordpress.arlenespools.co.za"],
  },
};

export default nextConfig;
