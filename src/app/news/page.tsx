import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAllNews, NewsItem } from "@/lib/news";
import { NewsList, CategoryFilter } from "./NewsList";

// Revalidate hourly — fresh items every hour
export const revalidate = 3600;

function formatRefreshTime(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams;
  const VALID_CATS: NewsItem["category"][] = ["Data Center", "AI Compute", "Power", "Batteries", "Grid", "Industry"];
  const activeCategory = (cat && VALID_CATS.includes(cat as NewsItem["category"])) ? (cat as NewsItem["category"]) : null;

  const { items, fetchedAt, sources } = await getAllNews();
  const filtered = activeCategory ? items.filter((i) => i.category === activeCategory) : items;
  const okSources = sources.filter((s) => s.ok).length;

  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
                [ NEWS · LIVE FEED ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                What&apos;s happening<br />in AI infrastructure.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-6">
                Aggregated from primary sources across AI compute, data centers, power, batteries, and the grid. Refreshed hourly. Every link goes to the publisher.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-xs font-space-mono text-slate/60">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
                  LIVE · last refresh {formatRefreshTime(fetchedAt)}
                </span>
                <span>·</span>
                <span>{items.length} items · last 30 days</span>
                <span>·</span>
                <span>{okSources}/{sources.length} sources responding</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Category filter */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60">[ FILTER ]</span>
            </div>
            <CategoryFilter items={items} activeCategory={activeCategory} />
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Feed */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="font-anybody text-2xl text-slate mb-2">No items match this filter.</div>
                <div className="font-space-mono text-sm text-slate/60">Try a different category or check back in an hour.</div>
              </div>
            ) : (
              <NewsList items={filtered} activeCategory={activeCategory} />
            )}
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Sources footer */}
        <section className="bg-fog border-t border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60">[ SOURCES ]</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {sources.map((s) => (
                <div key={s.name} className="border border-dashed border-slate/30 bg-background p-4">
                  <div className="font-anybody font-bold text-sm text-slate mb-1">{s.name}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">
                    {s.count > 0 ? `${s.count} items · last 30d` : "no recent items"}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 font-space-mono text-[11px] uppercase tracking-wider text-slate/50">
              [ FEED AGGREGATED FROM PRIMARY SOURCES · REFRESHED HOURLY · HEADLINES SUMMARIZED, NOT QUOTED ]
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}