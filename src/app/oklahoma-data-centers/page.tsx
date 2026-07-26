import Link from "next/link";
import PageShell from "@/components/PageShell";
import { Breadcrumbs, JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oklahoma Data Center Tracker — Every Announced Project (2026)",
  alternates: { canonical: "/oklahoma-data-centers" },
  openGraph: {
    title: "Oklahoma Data Center Tracker — Every Announced Project (2026)",
    description:
      "Google's $9B Stillwater + Pryor build, Meta's $1B+ Tulsa groundbreaking, 300 MW under construction — every announced Oklahoma data center project in one sourced table, updated as announcements land.",
    url: "https://smarttec.dev/oklahoma-data-centers",
    type: "website",
  
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
  description:
    "Every announced Oklahoma data center project in one sourced table: Google's $9B Stillwater and Pryor investment, Meta's $1B+ Tulsa AI data center, Core Scientific, CloudBurst, Cerebras, and more — including the smallest project on the list, ours.",
};

const AS_OF = "July 25, 2026";

type Status = "Announced" | "Under construction" | "Operating" | "Approved" | "Pre-launch build";

const projects: {
  op: string; loc: string; invest: string; scale: string; status: Status; date: string; src: string; srcLabel: string; mine?: boolean;
}[] = [
  { op: "Google", loc: "Stillwater (new campus) + Pryor (expansion)", invest: "$9,000M", scale: "New Stillwater campus; 8 buildings already operating in Pryor", status: "Announced", date: "Aug 2025", src: "https://blog.google/company-news/inside-google/company-announcements/google-american-innovation-oklahoma/", srcLabel: "Google" },
  { op: "Meta", loc: "Tulsa (Fair Oaks)", invest: "$1,000M+", scale: "AI-optimized DC — Meta's 28th in the US; ~1,000 construction jobs, ~100 operational", status: "Under construction", date: "Broke ground Apr 2026", src: "https://about.fb.com/news/2026/04/breaking-ground-new-ai-optimized-data-center-tulsa-oklahoma/", srcLabel: "Meta" },
  { op: "CloudBurst", loc: "Oklahoma City", invest: "—", scale: "~200 MW across three data centers", status: "Under construction", date: "2026", src: "https://www.newson6.com/tulsa-oklahoma-news/where-are-data-centers-are-being-built-oklahoma-list", srcLabel: "NewsOn6" },
  { op: "Core Scientific", loc: "Muskogee", invest: "—", scale: "~100 MW", status: "Under construction", date: "Scheduled 2026", src: "https://www.newson6.com/tulsa-oklahoma-news/where-are-data-centers-are-being-built-oklahoma-list", srcLabel: "NewsOn6" },
  { op: "Beale Infrastructure", loc: "Claremore + Owasso", invest: "—", scale: "Multi-building campuses (~200,000 sqft per phase in Owasso)", status: "Approved", date: "2026", src: "https://www.newson6.com/tulsa-oklahoma-news/where-are-data-centers-are-being-built-oklahoma-list", srcLabel: "NewsOn6" },
  { op: "Northern Data", loc: "Pryor — MidAmerica Industrial Park", invest: "—", scale: "North American operational headquarters", status: "Announced", date: "Mar 2022", src: "https://www.okcommerce.gov/northern-data-to-build-north-american-headquarters-at-midamerica-industrial-park/", srcLabel: "OK Commerce" },
  { op: "Cerebras Systems", loc: "Oklahoma City", invest: "—", scale: "~10 MW wafer-scale AI compute", status: "Operating", date: "—", src: "https://www.newson6.com/tulsa-oklahoma-news/where-are-data-centers-are-being-built-oklahoma-list", srcLabel: "NewsOn6" },
  { op: "SmartTec (us)", loc: "Mead — Bryan County, US-70", invest: "$4.6M", scale: "114 kW · 8× HGX B200 (64 GPUs) behind z1power LFP batteries", status: "Pre-launch build", date: "Power-on target Q4 2026", src: "/site", srcLabel: "The site", mine: true },
];

const faq = [
  { q: "Which companies are building data centers in Oklahoma?", a: "As of July 2026 the announced and active builders include Google (a $9 billion commitment covering a new Stillwater campus and expansion of its eight-building Pryor site), Meta (a $1 billion+ AI-optimized data center in Tulsa that broke ground in April 2026), CloudBurst (~200 MW across three Oklahoma City data centers), Core Scientific (~100 MW in Muskogee), Beale Infrastructure (approved campuses in Claremore and Owasso), and Northern Data (North American operational headquarters at MidAmerica Industrial Park in Pryor). Roughly twenty smaller commercial facilities already operate across Oklahoma City and Tulsa, and SmartTec — the smallest project on this tracker — is building a 114 kW battery-backed GPU site in Mead, Bryan County, targeting power-on in Q4 2026." },
  { q: "How much is Google investing in Oklahoma data centers?", a: "Google announced an additional $9 billion for Oklahoma over two years on August 13, 2025 — funding a new data center campus in Stillwater and expansion of its existing Pryor campus at MidAmerica Industrial Park, where Google already operates eight buildings. The announcement also funds workforce programs, including no-cost Google Career Certificates at OU and OSU and an electrical-training program intended to grow Oklahoma's electrical workforce by 135%." },
  { q: "Why are data centers coming to Oklahoma?", a: "Four structural reasons: power that is cheap by national standards (commercial rates around $0.08/kWh in much of the state), abundant land with existing industrial infrastructure at sites like MidAmerica Industrial Park, comparatively fast interconnection through the Southwest Power Pool relative to coastal queues, and an aggressive state economic-development posture. The same economics that attracted Google's billions to Pryor scale all the way down — they are why SmartTec's battery-backed site sits on 30 owned acres in Mead with a 3 MVA transformer and no interconnection queue." },
  { q: "What is the smallest data center project in Oklahoma?", a: "Almost certainly SmartTec's Phase 1A in Mead, Bryan County — about 114 kW of IT load from eight HGX B200 servers (64 GPUs) behind z1power LFP battery storage, on 30 owned acres with an on-site 3 MVA transformer, targeting power-on in Q4 2026. It is roughly one ten-thousandth the scale of Google's Oklahoma commitment, which is exactly the point of listing it on the same table: Oklahoma's data-center economics work at every scale, and SmartTec publishes its real numbers — 64 GPUs, $4.6M all-in — rather than borrowing the boom's." },
];

const statusStyle: Record<Status, string> = {
  "Announced": "text-slate/70",
  "Under construction": "text-dark-green font-bold",
  "Operating": "text-slate font-bold",
  "Approved": "text-slate/70",
  "Pre-launch build": "text-slate/70",
};

// Structured data is derived from the arrays above — nothing is asserted here
// that is not already stated and sourced on the page itself.
const REVIEWED = "2026-07-26";

export default function OklahomaTrackerPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const datasetLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Oklahoma Data Center Tracker",
    description:
      "Every announced, approved, under-construction and operating data center project in Oklahoma, with operator, location, investment, scale, status and a primary source for each entry.",
    url: "https://smarttec.dev/oklahoma-data-centers",
    creator: { "@id": "https://smarttec.dev/#org" },
    isAccessibleForFree: true,
    dateModified: REVIEWED,
    spatialCoverage: { "@type": "Place", name: "Oklahoma, United States" },
    keywords: ["Oklahoma data centers", "data center construction", "megawatts", "AI data center", "interconnection"],
  };

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Oklahoma data center projects",
    numberOfItems: projects.length,
    itemListElement: projects.map((pr, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Project",
        name: `${pr.op} — ${pr.loc}`,
        location: { "@type": "Place", name: `${pr.loc}, Oklahoma, United States` },
        description: `${pr.scale}. Status: ${pr.status} (${pr.date}).`,
        url: pr.src,
      },
    })),
  };

  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Oklahoma Data Center Tracker", path: "/oklahoma-data-centers" }]} />
      <JsonLd data={faqLd} />
      <JsonLd data={datasetLd} />
      <JsonLd data={listLd} />

      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-12">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ OKLAHOMA DATA CENTER TRACKER · UPDATED {AS_OF.toUpperCase()} ]
            </span>
            <h1 className="text-4xl md:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-4xl">
              Oklahoma is quietly<br />becoming AI country.
            </h1>
            <p className="text-lg md:text-xl text-slate/70 mt-6 max-w-2xl">
              Google committed $9 billion. Meta broke ground on a billion-dollar AI hall in Tulsa.
              Three hundred megawatts are under construction in Oklahoma City and Muskogee. Here is
              every announced project in one sourced table — including the smallest one, which is ours.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { v: "$9B", l: "Google's Oklahoma commitment — new Stillwater campus + Pryor expansion (Aug 2025)" },
                { v: "$1B+", l: "Meta's AI-optimized Tulsa data center — broke ground April 2026" },
                { v: "~300 MW", l: "Under construction now: CloudBurst OKC (~200 MW) + Core Scientific Muskogee (~100 MW)" },
                { v: "114 kW", l: "The smallest tracked project — SmartTec's battery-backed B200 site in Mead, Q4 2026" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-greptile-green pl-4">
                  <div className="font-anybody font-extrabold text-3xl md:text-4xl text-slate leading-none">{s.v}</div>
                  <p className="text-sm text-slate/70 mt-2 leading-relaxed">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracker table */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ THE TRACKER · SOURCED PROJECT BY PROJECT ]</span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-sm">
              <thead>
                <tr className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 text-left">
                  <th className="py-3 pr-4 border-b-2 border-slate w-[15%]">Operator</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[20%]">Location</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[10%] text-right">Investment</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[29%]">Scale</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[16%]">Status</th>
                  <th className="py-3 pl-3 border-b-2 border-slate w-[10%]">Source</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.op + p.loc} className={`align-top border-b border-dashed border-slate/20 ${p.mine ? "bg-greptile-green/10" : ""}`}>
                    <td className="py-3.5 pr-4 font-anybody font-bold text-slate">
                      {p.mine && <span className="font-space-mono text-[10px] text-greptile-green mr-1">[✓]</span>}
                      {p.op}
                    </td>
                    <td className="py-3.5 px-3 text-slate/75">{p.loc}</td>
                    <td className="py-3.5 px-3 text-right font-anybody font-bold tabular-nums text-slate/90">{p.invest}</td>
                    <td className="py-3.5 px-3 text-slate/75">{p.scale}</td>
                    <td className="py-3.5 px-3">
                      <span className={`font-space-mono text-[11px] uppercase tracking-wider ${statusStyle[p.status]}`}>{p.status}</span>
                      <span className="block text-[11px] text-slate/50 mt-0.5">{p.date}</span>
                    </td>
                    <td className="py-3.5 pl-3">
                      {p.src.startsWith("/") ? (
                        <Link href={p.src} className="font-space-mono text-[11px] underline decoration-greptile-green underline-offset-4 text-slate/70">{p.srcLabel}</Link>
                      ) : (
                        <a href={p.src} target="_blank" rel="noopener noreferrer" className="font-space-mono text-[11px] underline decoration-greptile-green underline-offset-4 text-slate/70">{p.srcLabel}</a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-space-mono text-[11px] text-slate/50 mt-4 leading-relaxed">
            Investment figures only where publicly stated by the operator or the State of Oklahoma; &ldquo;—&rdquo; means
            undisclosed, not zero. Roughly twenty additional commercial colocation facilities operate across Oklahoma
            City and Tulsa (TierPoint, RACK59, ValorC3, TulsaConnect and others) and several early-stage proposals in
            Pawhuska, Sand Springs and Pittsburg/Atoka counties are not yet firm enough to list. Updated as
            announcements land; last reviewed {AS_OF}.
          </p>
        </section>

        {/* Why Oklahoma */}
        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-start">
              <div>
                <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ WHY HERE ]</span>
                <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight mt-3">
                  The same physics,<br />at every scale.
                </h2>
              </div>
              <div className="space-y-4 text-slate/80 leading-relaxed">
                <p>
                  The boom has one driver: power economics. Oklahoma commercial electricity runs around
                  $0.08/kWh against $0.12–0.25 in the markets data centers are fleeing, land is measured in
                  affordable acres rather than premium square feet, and Southwest Power Pool interconnection
                  moves faster than the coastal queues where roughly 1,500 GW of projects sit waiting.
                </p>
                <p>
                  Those economics do not care how big you are. They pulled $9 billion from Google to Pryor and
                  Stillwater, a billion from Meta to Tulsa — and they are why our own 114 kW Phase 1A sits on
                  30 owned acres in Mead with an on-site 3 MVA transformer, z1power batteries behind the meter,
                  and no interconnection queue at all. Smallest row on the table, same thesis as the biggest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ + sources + disclaimer */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ FAQ ]</span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faq.map((f) => (
              <div key={f.q} className="border border-dashed border-slate/40 bg-fog/40 p-5">
                <div className="font-anybody font-bold text-lg text-slate mb-2">{f.q}</div>
                <p className="text-sm text-slate/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t-2 border-slate pt-5">
            <div className="font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">[ SOURCES ]</div>
            <ul className="space-y-2 text-sm text-slate/70">
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://blog.google/company-news/inside-google/company-announcements/google-american-innovation-oklahoma/" target="_blank" rel="noopener noreferrer">Google — $9 billion Oklahoma announcement (Aug 13, 2025)</a></li>
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://about.fb.com/news/2026/04/breaking-ground-new-ai-optimized-data-center-tulsa-oklahoma/" target="_blank" rel="noopener noreferrer">Meta — Breaking ground on the Tulsa AI-optimized data center (Apr 21, 2026)</a></li>
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://www.newson6.com/tulsa-oklahoma-news/where-are-data-centers-are-being-built-oklahoma-list" target="_blank" rel="noopener noreferrer">NewsOn6 — Where data centers are being built across Oklahoma (2026)</a></li>
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://www.okcommerce.gov/northern-data-to-build-north-american-headquarters-at-midamerica-industrial-park/" target="_blank" rel="noopener noreferrer">Oklahoma Department of Commerce — Northern Data at MidAmerica Industrial Park</a></li>
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://www.okcommerce.gov/meta-breaks-ground-on-data-center-in-tulsa/" target="_blank" rel="noopener noreferrer">Oklahoma Department of Commerce — Meta breaks ground in Tulsa</a></li>
            </ul>
            <p className="font-space-mono text-[11px] text-slate/50 mt-5 leading-relaxed max-w-3xl">
              This page is market analysis, not investment advice and not an offer or solicitation of securities.
              Figures are as published by the named operators and outlets on the dates shown; announced investments
              are commitments, not completed spending. SmartTec&apos;s own figures describe a pre-launch build and are
              design targets until power-on.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/site" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
              See the Mead site
            </Link>
            <Link href="/mead" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              Why Mead, OK
            </Link>
            <Link href="/market" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              B200 market rates
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
