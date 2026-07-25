import Link from "next/link";
import PageShell from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMD Instinct MI355X & MI455X vs NVIDIA B200 — Inference Reference",
  alternates: { canonical: "/amd-instinct" },
  description:
    "A vendor-neutral reference on AMD Instinct for AI inference: MI355X versus B200 on measured MLPerf Inference 6.0 results, and Helios (72× MI455X, 432 GB HBM4, 19.6 TB/s) versus GB200 NVL72 at rack scale. Primary-source figures, sparsity conventions flagged.",
};

const AS_OF = "July 25, 2026";

const stats = [
  { v: "288 GB", l: "HBM3E per MI355X today — 50% more memory per GPU than the B200's 192 GB" },
  { v: "97%", l: "MI355X throughput versus B200 on Llama 2 70B, MLPerf Inference 6.0 — measured, not vendor peak" },
  { v: "111–115%", l: "MI355X versus B200 on GPT-OSS-120B offline and server, same MLPerf round" },
  { v: "31 TB", l: "HBM4 in one Helios rack — 72× MI455X at 432 GB each, volume 2H 2026" },
];

const today = [
  { spec: "Architecture", amd: "CDNA 4", nv: "Blackwell" },
  { spec: "Memory", amd: "288 GB HBM3E", nv: "192 GB HBM3e", edge: "amd" },
  { spec: "Memory bandwidth", amd: "8 TB/s", nv: "8 TB/s" },
  { spec: "FP16 / BF16 tensor (peak)", amd: "5.0 PFLOPS", nv: "~4.5 PFLOPS" },
  { spec: "FP8 tensor (peak)", amd: "10.1 PFLOPS", nv: "~9 PFLOPS" },
  { spec: "FP4 / MXFP4 (peak)", amd: "10.1 PFLOPS", nv: "~9 PFLOPS" },
  { spec: "FP64 vector/matrix", amd: "78.6 TFLOPS", nv: "~40 TFLOPS", edge: "amd" },
  { spec: "Compute units", amd: "256 CUs", nv: "—" },
  { spec: "Scale-up fabric", amd: "Infinity Fabric", nv: "NVLink 5 · 1.8 TB/s", edge: "nv" },
  { spec: "Serving stack", amd: "ROCm · vLLM, SGLang, PyTorch, HF", nv: "CUDA · TensorRT-LLM, vLLM, SGLang", edge: "nv" },
];

const mlperf = [
  { bench: "Llama 2 70B — single node, FP4", result: "100,282 tokens/sec", rel: "97% of B200 · 93% of B300" },
  { bench: "Llama 2 70B — 11 nodes, 87 GPUs, offline", result: "1,042,110 tokens/sec", rel: "3.1× the prior MI325X generation" },
  { bench: "GPT-OSS-120B — 12 nodes, 94 GPUs, offline", result: "1,031,070 tokens/sec", rel: "111% of B200" },
  { bench: "GPT-OSS-120B — 12 nodes, 94 GPUs, server", result: "900,054 tokens/sec", rel: "115% of B200" },
  { bench: "Wan-2.2-t2v — text-to-video, single stream", result: "Official submission", rel: "93% of B200 · 108% after post-deadline tuning" },
];

const rack = [
  { spec: "Accelerators per rack", amd: "72× Instinct MI455X", nv: "72× Blackwell + 36 Grace CPUs" },
  { spec: "HBM per accelerator", amd: "432 GB HBM4", nv: "~186 GB HBM3E", edge: "amd" },
  { spec: "Total HBM per rack", amd: "31 TB", nv: "13.4 TB", edge: "amd" },
  { spec: "Memory bandwidth per GPU", amd: "19.6 TB/s", nv: "~8 TB/s", edge: "amd" },
  { spec: "FP4 compute", amd: "2.9 EF (convention unstated)", nv: "1,440 PFLOPS (sparse)" },
  { spec: "FP8 compute", amd: "1.4 EF (convention unstated)", nv: "720 PFLOPS (dense)" },
  { spec: "Scale-up bandwidth", amd: "260 TB/s", nv: "130 TB/s", edge: "amd" },
  { spec: "Scale-out networking", amd: "43 TB/s · Pensando Vulcano 800G NICs", nv: "ConnectX / BlueField" },
  { spec: "Host CPU", amd: "6th-gen EPYC Venice · up to 256 cores", nv: "Grace (Arm Neoverse)" },
  { spec: "Availability", amd: "Volume deployments 2H 2026", nv: "Shipping", edge: "nv" },
];

const faq = [
  {
    q: "How does the AMD Instinct MI355X compare to the NVIDIA B200 for inference?",
    a: "On measured MLPerf Inference 6.0 results the two are close enough that workload matters more than badge. AMD's MI355X delivered 100,282 tokens per second on single-node Llama 2 70B in FP4, which is 97% of the NVIDIA B200 result and 93% of the B300. On GPT-OSS-120B at multi-node scale the ordering reverses: MI355X reached 1,031,070 tokens per second offline and 900,054 in server mode, or 111% and 115% of B200 respectively. The MI355X also carries 288 GB of HBM3E against the B200's 192 GB — 50% more memory per GPU, which matters when a model must fit in as few accelerators as possible.",
  },
  {
    q: "What is AMD Helios and how does it compare to NVIDIA GB200 NVL72?",
    a: "Helios is AMD's rack-scale answer to NVIDIA's NVL72: 72 Instinct MI455X accelerators paired with 6th-generation EPYC Venice CPUs in a single rack, with volume deployments expected in the second half of 2026. AMD publishes 432 GB of HBM4 per GPU for 31 TB per rack and 19.6 TB/s of bandwidth per GPU, against 13.4 TB of HBM3E per rack for GB200 NVL72. Scale-up bandwidth is 260 TB/s on Helios versus 130 TB/s of NVLink on NVL72, and Helios adds 43 TB/s of scale-out through AMD Pensando Vulcano 800G NICs. The compute headline figures — 2.9 exaFLOPS FP4 for Helios against 1,440 PFLOPS sparse FP4 for NVL72 — are not directly comparable, because the two vendors do not state sparsity conventions the same way.",
  },
  {
    q: "Why can't you compare AMD and NVIDIA peak FLOPS directly?",
    a: "Because the published numbers use different conventions. NVIDIA labels GB200 NVL72 as 1,440 PFLOPS FP4 sparse and 720 PFLOPS FP8 dense, making the convention explicit. AMD's Helios figures of 2.9 exaFLOPS FP4 and 1.4 exaFLOPS FP8 do not state whether structured sparsity is included. A 2:1 sparse figure is exactly double its dense equivalent, so a reader comparing one vendor's sparse number to another's dense number can be off by 100% without noticing. This is why MLPerf submissions — run on identical models and datasets under audited rules — are the only apples-to-apples comparison available, and why peak FLOPS should be treated as a marketing ceiling rather than a procurement input.",
  },
  {
    q: "Is ROCm mature enough to serve production inference?",
    a: "For mainstream inference serving, largely yes. AMD's ROCm stack now supports PyTorch, Hugging Face, vLLM and SGLang, which covers the majority of production LLM serving deployments, and AMD's MLPerf Inference 6.0 submissions were produced on that stack rather than on custom research code. The remaining gap is breadth rather than capability: CUDA has a decade-plus lead in long-tail kernels, profiling tooling, and third-party library support, so bespoke or research workloads are more likely to hit friction on ROCm than a standard vLLM deployment is.",
  },
  {
    q: "Does more HBM per GPU actually matter for inference?",
    a: "It changes how many accelerators a model needs, which changes the economics. A model and its KV cache must fit in aggregate GPU memory, so 288 GB per GPU against 192 GB means roughly a third fewer GPUs to hold the same working set, and at the MI455X's 432 GB it is a factor of more than two against a 192 GB B200. Fewer GPUs per replica means less tensor-parallel communication, better utilization, and lower cost per served token — which is why memory capacity per accelerator, not peak FLOPS, is frequently the binding constraint in large-model inference.",
  },
];

const sources = [
  { label: "AMD — Helios rack-scale solution, official specifications", url: "https://www.amd.com/en/products/rackscale-solutions/helios.html" },
  { label: "AMD — Instinct MI350 series (MI350X / MI355X) specifications", url: "https://www.amd.com/en/products/accelerators/instinct/mi350.html" },
  { label: "AMD — MLPerf Inference 6.0 results", url: "https://www.amd.com/en/blogs/2026/amd-delivers-breakthrough-mlperf-inference-6-0-results.html" },
  { label: "AMD Investor Relations — Advancing AI 2026 announcements", url: "https://ir.amd.com/news-events/press-releases/detail/1294/aai-2026-amd-delivers-full-stack-compute-for-the-agentic-ai-era" },
  { label: "NVIDIA — GB200 NVL72 rack specifications", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" },
];

function CompareTable({
  rows, leftLabel, rightLabel,
}: {
  rows: { spec: string; amd: string; nv: string; edge?: string }[];
  leftLabel: string;
  rightLabel: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 text-left">
            <th className="py-3 pr-4 border-b-2 border-slate w-[26%]">Specification</th>
            <th className="py-3 px-3 border-b-2 border-slate w-[37%]">{leftLabel}</th>
            <th className="py-3 px-3 border-b-2 border-slate w-[37%]">{rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.spec} className="align-top border-b border-dashed border-slate/20">
              <td className="py-3 pr-4 font-anybody font-bold text-slate">{r.spec}</td>
              <td className={`py-3 px-3 ${r.edge === "amd" ? "bg-greptile-green/10 text-slate font-medium" : "text-slate/75"}`}>
                {r.edge === "amd" && <span className="font-space-mono text-[10px] text-greptile-green mr-1">[✓]</span>}
                {r.amd}
              </td>
              <td className={`py-3 px-3 ${r.edge === "nv" ? "bg-greptile-green/10 text-slate font-medium" : "text-slate/75"}`}>
                {r.edge === "nv" && <span className="font-space-mono text-[10px] text-greptile-green mr-1">[✓]</span>}
                {r.nv}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-2 h-2 bg-greptile-green" />
      <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">{children}</span>
      <span className="flex-1 border-t border-dashed border-slate/20" />
    </div>
  );
}

export default function AmdInstinctPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-12">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ REFERENCE · AMD INSTINCT · JULY 2026 ]
            </span>
            <h1 className="text-4xl md:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-4xl">
              There is a<br />second rack now.
            </h1>
            <p className="text-lg md:text-xl text-slate/70 mt-6 max-w-2xl">
              For three years, buying AI infrastructure meant buying NVIDIA and the only question was allocation.
              AMD Instinct has closed enough of the gap that the question is now a real one. Here is the reference
              sheet — measured results where they exist, vendor claims labelled as vendor claims.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.v} className="border-l-2 border-greptile-green pl-4">
                  <div className="font-anybody font-extrabold text-3xl md:text-4xl text-slate leading-none">{s.v}</div>
                  <p className="text-sm text-slate/70 mt-2 leading-relaxed">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping today */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <Kicker>[ SHIPPING TODAY · PER ACCELERATOR ]</Kicker>
          <CompareTable rows={today} leftLabel="AMD Instinct MI355X" rightLabel="NVIDIA B200 SXM" />
          <p className="font-space-mono text-[11px] text-slate/50 mt-4 leading-relaxed">
            Peak figures as published by each vendor. AMD MI350-series numbers from AMD&apos;s own product page;
            B200 figures are the commonly published SXM specifications. Peak FLOPS across vendors are not
            directly comparable — see the sparsity note below. Compiled {AS_OF}.
          </p>
        </section>

        {/* MLPerf */}
        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
            <Kicker>[ WHAT WAS ACTUALLY MEASURED · MLPERF INFERENCE 6.0 ]</Kicker>
            <p className="text-slate/75 max-w-3xl mb-6 leading-relaxed">
              Spec sheets are written by marketing departments. MLPerf submissions are run on identical models and
              datasets under audited rules, which makes them the only apples-to-apples comparison available. AMD
              submitted on MI355X; the relative figures below are against NVIDIA submissions in the same round.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 text-left">
                    <th className="py-3 pr-4 border-b-2 border-slate w-[40%]">Benchmark</th>
                    <th className="py-3 px-3 border-b-2 border-slate w-[27%]">MI355X result</th>
                    <th className="py-3 px-3 border-b-2 border-slate w-[33%]">Relative</th>
                  </tr>
                </thead>
                <tbody>
                  {mlperf.map((m) => (
                    <tr key={m.bench} className="align-top border-b border-dashed border-slate/20">
                      <td className="py-3 pr-4 font-anybody font-bold text-slate">{m.bench}</td>
                      <td className="py-3 px-3 text-slate/90 font-anybody font-bold tabular-nums">{m.result}</td>
                      <td className="py-3 px-3 text-slate/75">{m.rel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-space-mono text-[11px] text-slate/50 mt-4">
              Source: AMD MLPerf Inference 6.0 results blog. Partner submissions in the same round also covered
              MI300X, MI325X and MI350X.
            </p>
          </div>
        </section>

        {/* Rack scale */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <Kicker>[ RACK SCALE · 2H 2026 ]</Kicker>
          <CompareTable rows={rack} leftLabel="AMD Helios · 72× MI455X" rightLabel="NVIDIA GB200 NVL72" />

          <div className="mt-6 border-2 border-slate bg-white p-6 max-w-3xl">
            <div className="font-anybody font-extrabold text-lg text-slate mb-2">
              Why the FLOPS rows have no winner marked
            </div>
            <p className="text-sm text-slate/75 leading-relaxed">
              NVIDIA states GB200 NVL72 as 1,440 PFLOPS FP4 <em>sparse</em> and 720 PFLOPS FP8 <em>dense</em> —
              the convention is explicit. AMD publishes Helios at 2.9 EF FP4 and 1.4 EF FP8 without saying whether
              structured sparsity is included. A 2:1 sparse figure is exactly double its dense equivalent, so
              comparing one vendor&apos;s sparse number against another&apos;s dense number can be wrong by 100% while
              looking perfectly precise. We are not going to mark a winner on a row we cannot verify, and neither
              should anyone&apos;s procurement model.
            </p>
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pb-4">
          <blockquote className="border-l-4 border-greptile-green pl-6 py-2 max-w-3xl">
            <p className="text-xl md:text-2xl font-anybody font-bold text-slate italic leading-snug">
              &ldquo;A credible second supplier changes procurement math everywhere — even for operators who never
              buy the second one. Single-vendor risk was the industry&apos;s quietest line item.&rdquo;
            </p>
            <cite className="block mt-3 font-space-mono text-xs uppercase tracking-wider text-slate/60 not-italic">
              — SmartTec Engineering
            </cite>
          </blockquote>
        </section>

        {/* Scope disclaimer */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="border-2 border-dashed border-slate bg-fog/60 p-6 md:p-8">
            <div className="font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
              [ WHAT THIS PAGE IS, AND IS NOT ]
            </div>
            <p className="text-slate/80 leading-relaxed max-w-3xl">
              This is vendor-neutral reference material, not a product page.{" "}
              <strong className="font-anybody font-bold text-slate">
                SmartTec does not offer AMD Instinct capacity, and none is scheduled.
              </strong>{" "}
              Phase 1A at Mead is 8× HGX B200 — 64 GPUs installed, 60 rentable — behind battery storage, and
              unchanged by anything on this page. AMD Instinct sits on our open multi-vendor evaluation track for
              Phase 2/3 — you can already model MI455X fit in our{" "}
              <Link href="/calculator" className="underline decoration-greptile-green underline-offset-4">calculator</Link>,
              where it is deliberately fit-checkable but not priced, because no street pricing exists yet. We publish
              this because buyers deserve to know what the alternatives actually measure, including the ones we do not sell.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pb-14">
          <Kicker>[ FAQ ]</Kicker>
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
              {sources.map((s) => (
                <li key={s.url}>
                  <a className="underline decoration-greptile-green underline-offset-4" href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-space-mono text-[11px] text-slate/50 mt-4">
              All figures from vendor primary sources and published MLPerf results. Last reviewed {AS_OF}.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/calculator" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
              Model MI455X fit
            </Link>
            <Link href="/compute" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              What we actually run
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
