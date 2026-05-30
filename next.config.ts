import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/arenaclash",
  images: { unoptimized: true },
};

export default nextConfig;
