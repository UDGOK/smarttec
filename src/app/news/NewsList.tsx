"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { NewsItem } from "@/lib/news";

const accentByCategory: Record<NewsItem["category"], string> = {
  "Data Center": "bg-greptile-green",
  "AI Compute": "bg-peach",
  "Power": "bg-seafoam",
  "Batteries": "bg-lavender",
  "Grid": "bg-ice",
  "Industry": "bg-pink",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function relTime(iso: string): string {
  const d = new Date(iso).getTime();
  if (isNaN(d)) return "";
  const diff = Date.now() - d;
  const hours = Math.floor(diff / 3_600_000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return formatDate(iso);
}

function dayLabel(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "Earlier";
  const today = new Date(); today.setHours(0,0,0,0);
  const day = new Date(d); day.setHours(0,0,0,0);
  const diff = Math.round((today.getTime() - day.getTime()) / 86_400_000);
  if (diff <= 0) return "Today";
  if (diff === 1) return "Yesterday";
  return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
}

export function NewsList({ items, activeCategory }: { items: NewsItem[]; activeCategory: NewsItem["category"] | null }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const label = dayLabel(item.publishedAt);
        const prevLabel = i > 0 ? dayLabel(items[i - 1].publishedAt) : null;
        const showHeader = label !== prevLabel;
        return (
        <div key={item.id}>
        {showHeader && (
          <div className="flex items-center gap-3 pt-8 pb-3 first:pt-0">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ {label} ]</span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>
        )}
        <motion.a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.04 }}
          className="group block border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/5 hover:border-slate transition-colors"
        >
          <div className="grid grid-cols-12 gap-4 items-start p-5 md:p-6">
            <div className="col-span-12 md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 ${accentByCategory[item.category]} shrink-0`} />
                <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">
                  [ {item.category} ]
                </span>
              </div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50">
                {relTime(item.publishedAt)}
              </div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40 mt-0.5">
                {formatDate(item.publishedAt)}
              </div>
            </div>
            <div className="col-span-12 md:col-span-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-anybody font-bold text-slate leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate/70 leading-relaxed mb-2">
                    {item.summary}
                  </p>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50">
                    [ SOURCE · {item.source} ]
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="h-4 w-4 text-slate/40 group-hover:text-greptile-green shrink-0 mt-1 transition-colors">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L188.69,144H40a8,8,0,0,1,0-16H188.69L122.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" transform="rotate(-45 128 128)" />
                </svg>
              </div>
            </div>
          </div>
        </motion.a>
        </div>
        );
      })}
    </div>
  );
}

export function CategoryFilter({ items, activeCategory }: { items: NewsItem[]; activeCategory: NewsItem["category"] | null }) {
  const ALL_CATEGORIES: NewsItem["category"][] = [
    "Data Center", "AI Compute", "Power", "Batteries", "Grid", "Industry",
  ];
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/news"
        className={`font-space-mono text-xs uppercase tracking-wider px-4 py-2 border border-dashed transition-colors ${!activeCategory ? "bg-greptile-green border-greptile-green text-black" : "border-slate/30 text-slate/70 hover:bg-greptile-green/10"}`}
      >
        All <span className="ml-2 opacity-60">{items.length}</span>
      </Link>
      {ALL_CATEGORIES.map((c) => {
        const count = items.filter((i) => i.category === c).length;
        const isActive = activeCategory === c;
        return (
          <Link
            key={c}
            href={`/news?cat=${c}`}
            className={`font-space-mono text-xs uppercase tracking-wider px-4 py-2 border border-dashed transition-colors ${isActive ? "bg-greptile-green border-greptile-green text-black" : "border-slate/30 text-slate/70 hover:bg-greptile-green/10"}`}
          >
            {c} <span className="ml-2 opacity-60">{count}</span>
          </Link>
        );
      })}
    </div>
  );
}