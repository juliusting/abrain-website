import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static marketing site — export to plain HTML so it can be hosted on Netlify
  // (Git-connected) and served statically over Tailscale from the same build.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["100.114.88.104", "localhost"],
};

export default nextConfig;
