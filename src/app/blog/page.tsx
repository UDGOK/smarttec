"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import PageShell from "@/components/PageShell";

interface Post {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  featured?: boolean;
}

const featured: Post = {
  title: "Introducing AURA: Predictive load AI for data center power",
  excerpt: "AURA combines thermal sensing, cell-level telemetry, and 72-hour forecasting to predict failures days before they happen. Here's how we built it, what it caught in the first 30 days, and why traditional threshold-based alerting is dead.",
  category: "Engineering",
  author: "Daksh Gupta",
  date: "Jun 22, 2026",
  featured: true,
};

const posts: Post[] = [
  {
    title: "Why we refreshed SmartTec's brand",
    excerpt: "We gave SmartTec a brand refresh, entirely in-house. Not just a visual update — a way to give a technical product a clearer shape.",
    category: "Announcement",
    author: "Soohoon Choi",
    date: "Jun 12, 2026",
  },
  {
    title: "A statistical study of grid events across 40+ deployments",
    excerpt: "ERCOT, PJM, CAISO, MISO — what actually happens during a grid event? We pulled 18 months of telemetry across 40+ sites to find out.",
    category: "Engineering",
    author: "Rahul Bathija",
    date: "May 28, 2026",
  },
  {
    title: "The rise of grid-independent AI infrastructure",
    excerpt: "AI workloads need 10x the power of traditional compute. The grid can't keep up. What comes next isn't bigger substations — it's local generation.",
    category: "Industry",
    author: "Daksh Gupta",
    date: "May 15, 2026",
  },
  {
    title: "Frontier PUE at lower cost: thermal AI vs. chilled water",
    excerpt: "We tested our liquid cooling + thermal AI stack against a traditional chilled-water plant at a 5MW deployment. The results surprised us.",
    category: "Engineering",
    author: "Chun-Wei Yang",
    date: "May 4, 2026",
  },
  {
    title: "Why ITAR matters for grid-independent data centers",
    excerpt: "Federal customers can't deploy battery stacks with foreign-made cells. Here's how we designed SmartTec to be 100% ITAR-compliant.",
    category: "Federal",
    author: "Everett Butler",
    date: "Apr 22, 2026",
  },
  {
    title: "There is a battery energy storage bubble",
    excerpt: "Today everyone is selling BESS. Here's how SmartTec's viewpoint is differentiated — independent cells, predictive AI, and a financially-backed SLA.",
    category: "Industry",
    author: "Soohoon Choi",
    date: "Apr 8, 2026",
  },
  {
    title: "Sub-second telemetry: what we measure at every cell",
    excerpt: "Voltage, current, temperature, impedance, gas evolution — what we measure at every cell, why, and what we do with it.",
    category: "Engineering",
    author: "Vaishant Kameswaran",
    date: "Mar 24, 2026",
  },
  {
    title: "Cell-level anomaly detection: catching failure 14 days early",
    excerpt: "We rebuilt our anomaly detection from scratch. Here's how it works, what it caught in the first 30 days, and why threshold-based alerting is fundamentally broken.",
    category: "Product",
    author: "Daksh Gupta",
    date: "Mar 11, 2026",
  },
  {
    title: "Building a 5MW data center in 90 days",
    excerpt: "From signed contract to live operations in 90 days. Here's how we actually do it, and the 14 things that almost stopped us.",
    category: "Case Study",
    author: "Marcus Thompson",
    date: "Feb 27, 2026",
  },
  {
    title: "Slop is not necessarily the future",
    excerpt: "Everyone's worried about bad code and bad deployments. But good infrastructure will prevail — not only because we want it to.",
    category: "Industry",
    author: "Daksh Gupta",
    date: "Feb 14, 2026",
  },
  {
    title: "Grid independence isn't a feature, it's a business model",
    excerpt: "When your data center can run on its own power, everything changes — siting, sizing, sales cycles, even your CFO's risk model.",
    category: "Business",
    author: "Daksh Gupta",
    date: "Jan 28, 2026",
  },
  {
    title: "Introducing SmartTec v2: AURA + thermal AI",
    excerpt: "SmartTec's biggest update yet. AURA predictive layer, thermal AI, and 30% lower TCO. Launching today.",
    category: "Product",
    author: "Vaishant Kameswaran",
    date: "Jan 12, 2026",
  },
];

const categories = ["All", "Engineering", "Product", "Industry", "Announcement", "Federal", "Case Study", "Business"];

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
                Engineering, product, and industry deep-dives from the SmartTec team. Updated weekly.
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-7">
                <div className="border border-dashed border-slate/30 bg-fog/50 aspect-[16/10] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-greptile-green/30 via-seafoam/20 to-lavender/30" />
                  <div className="absolute inset-0 bg-halftone opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-anybody text-8xl font-extrabold text-slate/20 text-center px-8">AURA</div>
                  </div>
                </div>
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
                <Link href="#" className="btn-hex btn-hex-sm !border-greptile-green !bg-greptile-green !text-black">
                  Read article
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
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="group flex flex-col border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
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
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}