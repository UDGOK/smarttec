import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smarttec.dev";
  const routes = [
    "", "/mead", "/site", "/oklahoma-data-centers", "/compare", "/compute", "/power", "/aura", "/pricing", "/market", "/customers", "/enterprise",
    "/features", "/inference", "/amd-instinct", "/dgx-spark", "/deployments", "/calculator", "/about",
    "/design", "/design/scope", "/design/process",
    "/legal", "/legal/terms", "/legal/privacy", "/legal/engineering-disclaimer",
    "/legal/forward-looking-statements", "/legal/acceptable-use",
    "/investors", "/blog", "/contact", "/security", "/status",
  ];
  const REVIEWED = new Date("2026-07-25");
  const staticEntries = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: REVIEWED,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const blogEntries = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticEntries, ...blogEntries];
}
