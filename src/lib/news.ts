// Live RSS feed aggregator for SmartTec news page.
// Fetches from primary sources at build time + revalidates every hour.
// Sources: The Next Platform, Canary Media, IEEE Spectrum, Utility Dive, TechCrunch.

export type NewsItem = {
  id: string;
  title: string;
  url: string;
  source: string;
  sourceShort: string;
  category: "Data Center" | "Power" | "Batteries" | "AI Compute" | "Grid" | "Industry";
  publishedAt: string; // ISO
  summary: string; // 1-2 sentence human summary, no quotes from source
};

export type FeedSource = {
  name: string;
  short: string;
  url: string;
  category: NewsItem["category"];
};


export interface CompanyNewsItem {
  date: string;
  title: string;
  body: string;
  href?: string;
}

// Curated SmartTec milestones — pinned above the live feed.
export const COMPANY_NEWS: CompanyNewsItem[] = [
  {
    date: "Jul 21, 2026",
    title: "Multi-vendor track opened: evaluating AMD Instinct for Phase-2 inference",
    body: "Following Microsoft\u2019s at-scale Helios commitment, SmartTec opened a formal Phase-2 evaluation of MI455X-class inference \u2014 gated on OEM availability at our scale, ROCm serving maturity, and measured $/token vs B200. Phase 1 remains 30\u00d7 NVIDIA B200.",
    href: "/blog/amd-s-helios-moment-what-microsoft-s-rack-scale-bet-means-for-a-30-gpu-operator",
  },
  {
    date: "Jul 19, 2026",
    title: "Research series: five papers-to-practice articles published",
    body: "Five new engineering articles grounded in 2025–26 peer-reviewed research — battery-layered AI data centers, the thermal wall, PUE economics, and lessons from subsea and Asian deployments — each with infographics, FAQs, and cited sources.",
    href: "/blog",
  },
  {
    date: "Jul 19, 2026",
    title: "Investor data room goes live",
    body: "A password-protected data room is now available for invited investors, covering the Mead, Oklahoma Phase 1 build: memorandum, FAQ, and a live financial model.",
    href: "/invest",
  },
  {
    date: "Jul 19, 2026",
    title: "100 Gbps symmetrical fiber quote secured for the Mead site",
    body: "Carrier quote in hand for dedicated 100 Gbps symmetrical internet access at the Phase 1 site — symmetrical matters, because tenants pull checkpoints out as fast as they push data in.",
  },
  {
    date: "Jul 18, 2026",
    title: "Mead, Oklahoma confirmed as Phase 1 site",
    body: "Phase 1 (30× NVIDIA B200, ~110 kW IT load) deploys on 30 owned acres with three buildings and a 3 MVA on-site transformer. Batteries remain manufactured by partner z1power; power-on target Q4 2026.",
    href: "/deployments",
  },
  {
    date: "Jun 22, 2026",
    title: "Design-partner program open — three slots",
    body: "Three design-partner slots for launch tenants: locked launch pricing, direct engineering access, and co-published case studies at power-on.",
    href: "/customers",
  },
];

export const FEED_SOURCES: FeedSource[] = [
  { name: "The Next Platform", short: "Next Platform", url: "https://www.nextplatform.com/feed/", category: "Data Center" },
  { name: "Canary Media", short: "Canary", url: "https://www.canarymedia.com/rss.rss", category: "Power" },
  { name: "IEEE Spectrum", short: "IEEE", url: "https://spectrum.ieee.org/feeds/feed.rss", category: "Grid" },
  { name: "Utility Dive", short: "Utility Dive", url: "https://www.utilitydive.com/feeds/news/", category: "Grid" },
  { name: "TechCrunch", short: "TechCrunch", url: "https://techcrunch.com/category/artificial-intelligence/feed/", category: "AI Compute" },
  { name: "Data Center Dynamics", short: "DCD", url: "https://www.datacenterdynamics.com/rss/", category: "Data Center" },
  { name: "Data Center Knowledge", short: "DCK", url: "https://www.datacenterknowledge.com/rss.xml", category: "Data Center" },
  { name: "ServeTheHome", short: "STH", url: "https://www.servethehome.com/feed/", category: "AI Compute" },
  { name: "HPCwire", short: "HPCwire", url: "https://www.hpcwire.com/feed/", category: "AI Compute" },
  { name: "Energy-Storage.news", short: "ES News", url: "https://www.energy-storage.news/feed/", category: "Batteries" },
];

const UA = "Mozilla/5.0 (compatible; SmartTec-News/1.0; +https://smarttec.io/news)";

const KEYWORDS_TO_CATEGORY: { match: RegExp; category: NewsItem["category"] }[] = [
  { match: /\b(battery|bess|energy stor|lithium|iron phosphate|lfp|grid-?forming|state of charge)\b/i, category: "Batteries" },
  { match: /\b(grid|pjm|ercot|miso|caiso|ferc|interconnect|pue|utility|demand charge|substation)\b/i, category: "Grid" },
  { match: /\b(power|generat|turbine|gas|solar|wind|nuclear|nuclear|sustainability|behind.the.meter|on-site power)\b/i, category: "Power" },
  { match: /\b(nvidia|blackwell|gb200|h100|h200|b200|cerebras|groq|amd|hopper|hopper|compute|gpu|inference|tpu|hyperscale)\b/i, category: "AI Compute" },
  { match: /\b(data center|data centre|colocation|colo|hyperscale|edge|cooling|liquid cool|cdu)\b/i, category: "Data Center" },
];

function categorize(title: string, summary: string): NewsItem["category"] {
  const text = `${title} ${summary}`;
  for (const k of KEYWORDS_TO_CATEGORY) {
    if (k.match.test(text)) return k.category;
  }
  return "Industry";
}

function htmlToText(html: string): string {
  return html
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#0?39;/g, "'")
    .replace(/&#0?8211;/g, "—")
    .replace(/&#0?8212;/g, "—")
    .replace(/&#0?8216;/g, "'")
    .replace(/&#0?8217;/g, "'")
    .replace(/&#0?8220;/g, '"')
    .replace(/&#0?8221;/g, '"')
    .replace(/&#0?8230;/g, "…")
    .replace(/&#0?\d+;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function summarize(title: string, body: string): string {
  const cleaned = body.replace(new RegExp(`^${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\.,:!?-]*`, "i"), "").trim();
  const first = cleaned.split(/(?<=[.!?])\s+/)[0] || cleaned;
  const truncated = first.length > 240 ? first.slice(0, 237).trimEnd() + "…" : first;
  return truncated || title;
}

function extractRssItems(xml: string): { title: string; url: string; publishedAt: string; description: string }[] {
  const items: { title: string; url: string; publishedAt: string; description: string }[] = [];
  // Match <item> ... </item> blocks
  const itemRe = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const title = htmlToText((block.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1]);
    const link = ((block.match(/<link\b[^>]*>([\s\S]*?)<\/link>/i) || [, ""])[1]).trim();
    const pubDate = ((block.match(/<pubDate\b[^>]*>([\s\S]*?)<\/pubDate>/i) || [, ""])[1]).trim();
    const desc = htmlToText((block.match(/<description\b[^>]*>([\s\S]*?)<\/description>/i) || [, ""])[1]);
    if (title && link) {
      items.push({ title, url: link, publishedAt: pubDate, description: desc });
    }
  }
  return items;
}

async function fetchFeed(source: FeedSource): Promise<{ source: FeedSource; items: NewsItem[] }> {
  try {
    const res = await fetch(source.url, {
      headers: { "User-Agent": UA, Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { source, items: [] };
    const xml = await res.text();
    const rawItems = extractRssItems(xml);
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000; // last 30 days
    const items: NewsItem[] = [];
    for (const r of rawItems) {
      const ts = new Date(r.publishedAt).getTime();
      if (isNaN(ts)) continue;
      if (ts < cutoff) continue;
      const summary = summarize(r.title, r.description);
      items.push({
        id: `${source.short}-${ts}-${r.url.slice(-32)}`,
        title: r.title,
        url: r.url,
        source: source.name,
        sourceShort: source.short,
        category: source.category, // default to feed's category
        publishedAt: r.publishedAt,
        summary,
      });
      // Override category from keyword match
      items[items.length - 1].category = categorize(r.title, summary);
    }
    return { source, items };
  } catch (e) {
    return { source, items: [] };
  }
}

export async function getAllNews(): Promise<{ items: NewsItem[]; fetchedAt: string; sources: { name: string; count: number; ok: boolean }[] }> {
  const results = await Promise.all(FEED_SOURCES.map(fetchFeed));
  const items: NewsItem[] = [];
  const sourcesMeta: { name: string; count: number; ok: boolean }[] = [];
  for (const r of results) {
    sourcesMeta.push({ name: r.source.name, count: r.items.length, ok: true });
    items.push(...r.items);
  }
  // Dedupe by URL
  const seen = new Set<string>();
  const deduped = items.filter((i) => {
    if (seen.has(i.url)) return false;
    seen.add(i.url);
    return true;
  });
  // Sort newest first
  deduped.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return { items: deduped, fetchedAt: new Date().toISOString(), sources: sourcesMeta };
}

export const ALL_CATEGORIES: NewsItem["category"][] = [
  "Data Center",
  "AI Compute",
  "Power",
  "Batteries",
  "Grid",
  "Industry",
];
