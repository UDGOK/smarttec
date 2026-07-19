import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingIncludes: {
    "/invest/files/[file]": ["./protected-files/**"],
  },
};

export default nextConfig;
