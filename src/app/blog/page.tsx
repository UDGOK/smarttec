"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import PageShell from "@/components/PageShell";
import { posts as allPosts } from "@/lib/posts";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime?: string;
  featured?: boolean;
}

const featuredPost = allPosts.find((p) => p.featured) || allPosts[0];
const featured: Post = {
  slug: featuredPost.slug,
  title: featuredPost.title,
  excerpt: featuredPost.excerpt,
  category: featuredPost.category,
  author: featuredPost.author,
  date: featuredPost.date,
};

const posts: Post[] = allPosts
  .filter((p) => p.slug !== featured.slug)
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    author: p.author,
    date: p.date,
  }));

const categories = ["All", "Engineering", "Product", "Industry", "Announcement", "Federal", "Business"];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ THE SMARTTEC BLOG ]
              </span>
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-anybody font-extrabold tracking-tight leading-[0.9] mb-8 max-w-5xl">
                Notes from the<br />grid frontier.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-2xl">
                Engineering, product, and industry deep-dives from the SmartTec team.
              </p>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Featured post */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-7">
                <Link href={`/blog/${featured.slug}`} className="block border border-dashed border-slate/30 bg-fog/50 aspect-[16/10] relative overflow-hidden hover:border-greptile-green transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-greptile-green/30 via-seafoam/20 to-lavender/30" />
                  <div className="absolute inset-0 bg-halftone opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-anybody text-8xl font-extrabold text-slate/20 text-center px-8">AURA</div>
                  </div>
                </Link>
              </div>
              <div className="md:col-span-5">
                <span className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green mb-4 block">[ FEATURED · {featured.category.toUpperCase()} ]</span>
                <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-slate/70 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-3 font-space-mono text-xs text-slate/60 mb-6">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="btn-hex btn-hex-sm !border-greptile-green !bg-greptile-green !text-black">
                  Read article →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Category filter + posts */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-12">
              <h2 className="font-anybody text-2xl md:text-3xl font-extrabold text-slate tracking-tight mb-6">All posts</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`font-space-mono text-xs uppercase tracking-wider px-4 py-2 border border-dashed transition-colors ${filter === c ? "bg-greptile-green border-greptile-green text-black" : "border-slate/30 text-slate/70 hover:bg-greptile-green/10"}`}
                  >
                    {c}
                    {c !== "All" && <span className="ml-2 opacity-60">{posts.filter((p) => p.category === c).length}</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filtered.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    className="flex flex-col flex-1"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate/10 to-slate/5 relative overflow-hidden border-b border-dashed border-slate/30">
                      <div className="absolute inset-0 bg-halftone opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-anybody text-5xl font-extrabold text-slate/15">
                          {post.category[0]}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                      <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">
                        [ {post.category.toUpperCase()} ]
                      </span>
                      <h3 className="text-lg md:text-xl font-anybody font-bold text-slate leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate/70 leading-relaxed flex-1">{post.excerpt}</p>
                      <div className="flex items-center gap-2 font-space-mono text-[10px] uppercase tracking-wider text-slate/50 pt-3 border-t border-dashed border-slate/20">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.author}</span>
                        <span className="ml-auto text-greptile-green group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}