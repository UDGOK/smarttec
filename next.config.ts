import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/invest/files/[file]": ["./protected-files/**"],
  },

  images: {
    // Serve AVIF where supported, WebP otherwise — typically 60-80% smaller
    // than the source JPEG/PNG at equivalent visual quality.
    formats: ["image/avif", "image/webp"],
    // Optimized variants are derived from build-immutable sources.
    minimumCacheTTL: 31536000,
  },

  // Ship less JavaScript: tree-shake per-import rather than pulling the
  // whole package into every route that touches it.
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },

  async rewrites() {
    return [
      // Password-gated 3D visualization (static, AES-encrypted client-side)
      {
        source: "/z1power-sugarland-bess",
        destination: "/z1power-sugarland-bess/index.html",
      },
    ];
  },

  async headers() {
    return [
      {
        // Hashed filenames — safe to cache forever.
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.(jpg|jpeg|png|svg|webp|avif|ico|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
