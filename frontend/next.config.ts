import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.134.128.12"],
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default nextConfig;
