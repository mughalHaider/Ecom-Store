import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pappyneedles.co.uk",
      },
      {
        protocol: "http",
        hostname: "pappyneedles.co.uk",
      },
      {
        protocol: "https",
        hostname: "*.pappyneedles.co.uk",
      },
      {
        protocol: "http",
        hostname: "*.pappyneedles.co.uk",
      },
    ],
  },
};

export default nextConfig;
