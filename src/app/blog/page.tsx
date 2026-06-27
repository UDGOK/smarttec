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
  title: "Why we're building a grid-independent AI cloud",
  excerpt: "AI workloads need 10x the power of traditional compute. The grid can't keep up — interconnection queues are 4 to 7 years long. We bet that owning the power layer is the only way to ship AI compute at the pace the market needs.",
  category: "Industry",
  author: "Daksh Gupta",
  date: "Jun 22, 2026",
  featured: true,
};

const posts: Post[] = [
  {
    title: "Announcing our design partner program",
    excerpt: "Three slots, locked pricing for 12 months, direct engineering access, named case study at power-on. Here's how we're picking our first three production customers.",
    category: "Announcement",
    author: "Soohoon Choi",
    date: "Jun 12, 2026",
  },
  {
    title: "Cerebras vs. NVIDIA H200: when to use which",
    excerpt: "A practical guide for inference teams choosing between NVIDIA H200 and Cerebras CS-3. The answer is rarely \"one or the other\" — most workloads benefit from running both.",
    category: "Engineering",
    author: "Rahul Bathija",
    date: "May 28, 2026",
  },
  {
    title: "How AURA predicts grid events 48 hours in advance",
    excerpt: "AURA watches ISO/RTO load forecasts, weather, and historical event patterns to predict grid instability before it happens. Here's how the model works and what it caught in our first 90 days.",
    category: "Engineering",
    author: "Vaishant Kameswaran",
    date: "May 15, 2026",
  },
  {
    title: "Inside z1power: building megawatt BESS in Tulsa",
    excerpt: "Why we chose Tulsa, why we manufacture cells in-house, and what it takes to ship a 5 MW battery stack that the federal government will accept under ITAR.",
    category: "Engineering",
    author: "Marcus Thompson",
    date: "May 4, 2026",
  },
  {
    title: "ITAR, FedRAMP, and the long road to federal AI",
    excerpt: "Federal customers can't deploy AI on foreign-made silicon. Here's how we designed SmartTec to be ITAR-clean across the full stack — power, compute, networking, and firmware.",
    category: "Federal",
    author: "Everett Butler",
    date: "Apr 22, 2026",
  },
  {
    title: "The AI infrastructure build-out is bottlenecked on power, not chips",
    excerpt: "Everyone is talking about GPU shortages. The real bottleneck is megawatt-scale power delivery. We pulled 18 months of data on interconnection queues and the picture is grim.",
    category: "Industry",
    author: "Daksh Gupta",
    date: "Apr 8, 2026",
  },
  {
    title: "What a 5 MW AI compute hall actually costs",
    excerpt: "Capex, opex, PPA, lease — we break down the real numbers for a 5 MW AI compute deployment running NVIDIA H100s on z1power battery-backed power.",
    category: "Business",
    author: "Soohoon Choi",
    date: "Mar 24, 2026",
  },
  {
    title: "Sub-10ms failover: how we keep GPUs running through grid events",
    excerpt: "When the grid drops, our batteries take over in under 10 milliseconds. Here's the switchgear, the controls, and the load-shedding logic that makes it work without interrupting your training job.",
    category: "Engineering",
    author: "Chun-Wei Yang",
    date: "Mar 11, 2026",
  },
  {
    title: "Behind the scenes: building the SmartTec brand",
    excerpt: "Why we refreshed the brand, what we kept, what we threw away, and how the design system ended up looking like a battery manufacturer's spec sheet (in the best way).",
    category: "Announcement",
    author: "Soohoon Choi",
    date: "Feb 27, 2026",
  },
  {
    title: "The economics of behind-the-meter AI compute",
    excerpt: "When you own the power, your cost structure changes. We model out five years of TCO for grid-tied vs. behind-the-meter AI compute at 1 MW, 5 MW, and 50 MW scales.",
    category: "Business",
    author: "Daksh Gupta",
    date: "Feb 14, 2026",
  },
  {
    title: "Why we're starting with NVIDIA Cloud Partner architecture",
    excerpt: "Reference architectures aren't glamorous, but they save months of integration work. Here's why we picked NVIDIA's NCP framework for our base deployment and what it unlocks for customers.",
    category: "Product",
    author: "Vaishant Kameswaran",
    date: "Jan 28, 2026",
  },
  {
    title: "Announcing SmartTec: the grid-independent AI cloud",
    excerpt: "Today we're announcing SmartTec. NVIDIA and Cerebras compute on megawatt batteries we build ourselves. Q4 2026 power-on. Three design-partner slots now open.",
    category: "Product",
    author: "Daksh Gupta",
    date: "Jan 12, 2026",
  },
];

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
                  animate={{ opacity: 1, y: 0 }}
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