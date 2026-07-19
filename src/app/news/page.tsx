import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAllNews, NewsItem, COMPANY_NEWS } from "@/lib/news";
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

        {/* Pinned company milestones */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pt-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 bg-greptile-green" />
              <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ SMARTTEC UPDATES ]</span>
              <span className="flex-1 border-t border-dashed border-slate/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMPANY_NEWS.slice(0, 6).map((n) => (
                <Link key={n.title} href={n.href ?? "/news"} className="group border-2 border-slate bg-white p-5 hover:border-greptile-green transition-colors block">
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50">{n.date}</div>
                  <div className="font-anybody font-extrabold text-lg text-slate mt-2 leading-snug">{n.title}</div>
                  <p className="text-sm text-slate/70 mt-2 leading-relaxed">{n.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
        {/* FAQ */}
        <section className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ FAQ ]</span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-dashed border-slate/40 bg-fog/40 p-5">
              <div className="font-anybody font-bold text-lg text-slate mb-2">What is the SmartTec news page?</div>
              <p className="text-sm text-slate/75 leading-relaxed">A live, hourly-refreshed feed of AI infrastructure news — data centers, GPU compute, power, batteries, and the grid — aggregated from ten primary industry sources, alongside pinned SmartTec company milestones. Every external headline links directly to the original publisher.</p>
            </div>
            <div className="border border-dashed border-slate/40 bg-fog/40 p-5">
              <div className="font-anybody font-bold text-lg text-slate mb-2">How often is the news feed updated?</div>
              <p className="text-sm text-slate/75 leading-relaxed">The feed re-fetches its sources every hour and shows items from the last 30 days, grouped by day. The last-refresh time is displayed at the top of the page.</p>
            </div>
            <div className="border border-dashed border-slate/40 bg-fog/40 p-5">
              <div className="font-anybody font-bold text-lg text-slate mb-2">Which sources does the feed aggregate?</div>
              <p className="text-sm text-slate/75 leading-relaxed">Primary industry publications including The Next Platform, Data Center Dynamics, Data Center Knowledge, ServeTheHome, HPCwire, IEEE Spectrum, Utility Dive, Canary Media, Energy-Storage.news, and TechCrunch AI. SmartTec does not edit or endorse third-party items; headlines link to the publishers.</p>
            </div>
            <div className="border border-dashed border-slate/40 bg-fog/40 p-5">
              <div className="font-anybody font-bold text-lg text-slate mb-2">Is SmartTec affiliated with the publications in the feed?</div>
              <p className="text-sm text-slate/75 leading-relaxed">No. The feed is an unedited aggregation for readers tracking AI infrastructure. SmartTec company announcements appear separately in the pinned SmartTec Updates section, clearly labeled.</p>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [{"@type": "Question", "name": "What is the SmartTec news page?", "acceptedAnswer": {"@type": "Answer", "text": "A live, hourly-refreshed feed of AI infrastructure news — data centers, GPU compute, power, batteries, and the grid — aggregated from ten primary industry sources, alongside pinned SmartTec company milestones. Every external headline links directly to the original publisher."}}, {"@type": "Question", "name": "How often is the news feed updated?", "acceptedAnswer": {"@type": "Answer", "text": "The feed re-fetches its sources every hour and shows items from the last 30 days, grouped by day. The last-refresh time is displayed at the top of the page."}}, {"@type": "Question", "name": "Which sources does the feed aggregate?", "acceptedAnswer": {"@type": "Answer", "text": "Primary industry publications including The Next Platform, Data Center Dynamics, Data Center Knowledge, ServeTheHome, HPCwire, IEEE Spectrum, Utility Dive, Canary Media, Energy-Storage.news, and TechCrunch AI. SmartTec does not edit or endorse third-party items; headlines link to the publishers."}}, {"@type": "Question", "name": "Is SmartTec affiliated with the publications in the feed?", "acceptedAnswer": {"@type": "Answer", "text": "No. The feed is an unedited aggregation for readers tracking AI infrastructure. SmartTec company announcements appear separately in the pinned SmartTec Updates section, clearly labeled."}}],
            }),
          }}
        />
    </PageShell>
  );
}