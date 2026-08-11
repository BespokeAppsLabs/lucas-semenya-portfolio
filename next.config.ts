import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 treats 127.0.0.1 as a different origin from localhost and blocks
  // dev-only resources (including the HMR socket) unless the host is listed.
  // Without this the page server-renders but never hydrates, which looks like
  // a dead site rather than a blocked request. Dev-only; no production effect.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
