import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/chat": ["./knowledge/*.md"],
  },
};

export default nextConfig;
