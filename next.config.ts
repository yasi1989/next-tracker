import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: false,
    ppr: 'incremental',
  }
};

export default nextConfig;
