import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 800, 1280],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.arlenespools.co.za",
      },
    ],
  },
};

export default nextConfig;
