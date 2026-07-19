import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smarttec.dev";
  const routes = [
    "", "/compute", "/power", "/aura", "/pricing", "/customers", "/enterprise",
    "/features", "/inference", "/dgx-spark", "/deployments", "/about",
    "/investors", "/blog", "/contact", "/security", "/status",
  ];
  const staticEntries = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const blogEntries = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticEntries, ...blogEntries];
}
