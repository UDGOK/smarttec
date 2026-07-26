import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { LEGAL_DOCS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal — Terms, Privacy & Disclaimers | SmartTec",
  description:
    "SmartTec's legal documents: Terms of Use, Privacy Policy, Engineering & Scope Tool Disclaimer, Forward-Looking Statements notice, and Acceptable Use Policy.",
  alternates: { canonical: "/legal" },
  openGraph: {
    title: "Legal — Terms, Privacy & Disclaimers | SmartTec",
    description: "Terms of Use, Privacy Policy, engineering disclaimers, and acceptable use for smarttec.dev.",
    url: "https://smarttec.dev/legal",
    type: "website",
  },
};

export default function LegalIndex() {
  return (
    <PageShell>
      <div className="bg-background">
        <section className="relative bg-paper-plus-ruled border-b border-dashed border-slate/25">
          <div className="relative mx-auto w-full max-w-[1000px] px-5 sm:px-8 py-16 md:py-24">
            <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-5">
              <span className="w-2 h-2 bg-neon" />[ Legal ]
            </span>
            <h1 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.93] text-4xl sm:text-6xl mb-6">
              The terms this
              <br />
              site runs on.
            </h1>
            <p className="text-lg text-slate/75 max-w-[64ch] leading-relaxed">
              Plainly written, and shorter than they could be. If something here is unclear or you think it is
              unreasonable, email us and say so — we would rather fix a term than argue about one later.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1000px] px-5 sm:px-8 py-12 md:py-16">
          <div className="grid gap-px bg-slate/20 sm:grid-cols-2">
            {LEGAL_DOCS.map((d) => (
              <Link
                key={d.slug}
                href={`/legal/${d.slug}`}
                className="bg-background p-6 lg:p-8 group hover:bg-fog transition-colors flex flex-col"
              >
                <h2 className="font-anybody font-extrabold uppercase tracking-tight text-xl mb-3 leading-tight group-hover:text-dark-green">
                  {d.title}
                </h2>
                <p className="text-slate/70 text-[15px] leading-relaxed mb-5">{d.summary}</p>
                <span className="font-space-mono text-[10px] uppercase tracking-widest text-slate/50 mt-auto">
                  Effective {d.effective} →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 border border-dashed border-slate/50 bg-neon/12 p-5 font-space-mono text-[11px] leading-relaxed">
            <strong>WHERE TO START.</strong> If you are evaluating our design and build services, read the{" "}
            <Link href="/legal/engineering-disclaimer" className="underline">
              Engineering &amp; Scope Tool Disclaimer
            </Link>{" "}
            first — it governs everything the scoping tool produces. If you are reviewing investment materials, read
            the{" "}
            <Link href="/legal/forward-looking-statements" className="underline">
              Forward-Looking Statements notice
            </Link>
            .
          </div>
        </section>
      </div>
    </PageShell>
  );
}
