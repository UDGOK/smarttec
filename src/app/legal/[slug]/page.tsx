import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { LEGAL_DOCS, getLegalDoc } from "@/lib/legal";

export function generateStaticParams() {
  return LEGAL_DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};
  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: { canonical: `/legal/${doc.slug}` },
    openGraph: {
      title: doc.metaTitle,
      description: doc.metaDescription,
      url: `https://smarttec.dev/legal/${doc.slug}`,
      type: "article",
    },
  };
}

export default async function LegalDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <PageShell>
      <div className="bg-background">
        <section className="relative bg-paper-plus-ruled border-b border-dashed border-slate/25">
          <div className="relative mx-auto w-full max-w-[900px] px-5 sm:px-8 py-14 md:py-20">
            <Link
              href="/legal"
              className="font-space-mono text-[11px] uppercase tracking-widest text-slate/55 hover:text-slate"
            >
              ← All legal documents
            </Link>
            <h1 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-5xl mt-5 mb-4">
              {doc.title}
            </h1>
            <p className="text-slate/75 text-lg leading-relaxed max-w-[62ch]">{doc.summary}</p>
            <p className="font-space-mono text-[11px] uppercase tracking-widest text-slate/55 mt-6">
              Effective {doc.effective} · SmartTec, Inc. · Tulsa, Oklahoma
            </p>
          </div>
        </section>

        <article className="mx-auto w-full max-w-[900px] px-5 sm:px-8 py-12 md:py-16">
          {doc.blocks.map((b, i) => {
            if (b.type === "h2")
              return (
                <h2
                  key={i}
                  className="font-anybody font-extrabold uppercase tracking-tight text-xl sm:text-2xl mt-11 mb-4 first:mt-0 leading-tight"
                >
                  {b.text}
                </h2>
              );
            if (b.type === "h3")
              return (
                <h3
                  key={i}
                  className="font-space-mono text-[12px] uppercase tracking-widest text-slate/70 mt-7 mb-3"
                >
                  {b.text}
                </h3>
              );
            if (b.type === "p")
              return (
                <p key={i} className="text-slate/80 leading-[1.75] mb-4 text-[15px] sm:text-base">
                  {b.text}
                </p>
              );
            if (b.type === "ul")
              return (
                <ul key={i} className="list-none m-0 mb-5 space-y-2.5">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-3 text-slate/80 leading-[1.7] text-[15px] sm:text-base">
                      <span className="font-space-mono text-greptile-green shrink-0 select-none">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            if (b.type === "callout")
              return (
                <aside key={i} className="border border-dashed border-slate/50 bg-neon/15 p-5 my-8">
                  <div className="font-space-mono text-[10px] uppercase tracking-widest text-slate/70 mb-2">
                    {b.title}
                  </div>
                  <p className="text-slate leading-[1.65] text-[15px] font-medium m-0">{b.body}</p>
                </aside>
              );
            // caps — all-caps statutory-style block
            return (
              <section key={i} className="my-9">
                <h2 className="font-anybody font-extrabold uppercase tracking-tight text-xl sm:text-2xl mb-4 leading-tight">
                  {b.title}
                </h2>
                <p className="border-l-2 border-slate pl-5 font-space-mono text-[11.5px] sm:text-[12px] leading-[1.85] text-slate/85 m-0">
                  {b.body}
                </p>
              </section>
            );
          })}

          <div className="mt-14 pt-8 border-t border-dashed border-slate/30">
            <div className="font-space-mono text-[10px] uppercase tracking-widest text-slate/55 mb-4">
              Related documents
            </div>
            <div className="flex flex-wrap gap-2.5">
              {LEGAL_DOCS.filter((d) => d.slug !== doc.slug).map((d) => (
                <Link
                  key={d.slug}
                  href={`/legal/${d.slug}`}
                  className="border border-dashed border-slate/40 px-3.5 py-2 font-space-mono text-[11px] uppercase tracking-wider text-slate hover:bg-neon hover:border-slate transition-colors"
                >
                  {d.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
