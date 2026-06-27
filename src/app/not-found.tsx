"use client";

import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";

const quickLinks = [
  { label: "Compute", desc: "NVIDIA + Cerebras GPUs", href: "/compute" },
  { label: "Power", desc: "z1power battery story", href: "/power" },
  { label: "AURA", desc: "Orchestration layer", href: "/aura" },
  { label: "Pricing", desc: "GPU-hour + reserved tiers", href: "/pricing" },
  { label: "Deployments", desc: "Design partner program", href: "/deployments" },
  { label: "Status", desc: "Live system health", href: "/status" },
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="bg-background">
        <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <Image
                  src="/lizard-mobile.svg"
                  alt="SmartTec Sparky mascot looking lost"
                  width={900}
                  height={900}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mt-4">
                Meet Sparky. He couldn&apos;t find your page.
              </p>
            </div>

            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ ERROR · 404 ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-6">
                This page isn&apos;t on the grid.
              </h1>
              <p className="text-lg md:text-xl text-slate/70 leading-relaxed mb-8">
                We looked. We even asked AURA. The page you wanted either moved, never existed, or got caught in an interconnection queue. Here&apos;s where you probably wanted to go.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                  Take me home
                </Link>
                <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
                  Report a broken link
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border w-full opacity-30" />

        {/* Helpful links */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ QUICK LINKS ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                Or try one of these.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-slate/30 border border-dashed border-slate/30">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="group bg-background p-5 hover:bg-greptile-green/10 transition-colors"
                >
                  <div className="font-anybody font-bold text-base text-slate mb-1 group-hover:text-slate">
                    {l.label}
                  </div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 leading-relaxed">
                    {l.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Search suggestion */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-2xl px-6 md:px-12 py-16 md:py-20 text-center">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ OR EMAIL US ]
            </span>
            <p className="text-lg text-slate/70 leading-relaxed">
              If you got here from a link on our site, that&apos;s a bug — please email{" "}
              <Link href="mailto:team@smarttec.io" className="font-anybody font-bold text-slate underline underline-offset-4 decoration-slate/40 hover:decoration-greptile-green">
                team@smarttec.io
              </Link>{" "}
              and we&apos;ll fix it.
            </p>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
