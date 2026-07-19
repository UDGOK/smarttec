import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "DGX Spark alternatives — production-scale AI · SmartTec",
  description: "NVIDIA's DGX Spark is a $3K GB10 dev box for prototyping. SmartTec is what you deploy at scale — same GB10 architecture, megawatt-scale power, behind-the-meter.",
};

const comparison = [
  {
    dimension: "Scale",
    dgx: "1 chip · 1 PFLOPS FP4 · 128 GB unified",
    smarttec: "1,000+ GPUs · 1.4 exaFLOPS/rack (GB200 NVL72) · 13.5 TB/rack HBM3e",
  },
  {
    dimension: "Form factor",
    dgx: "Sits on your desk",
    smarttec: "Sits in our Mead, OK AI factory",
  },
  {
    dimension: "Power",
    dgx: "Standard wall outlet (240W)",
    smarttec: "Megawatt-scale LFP batteries + grid fallback, no wait",
  },
  {
    dimension: "Max model size",
    dgx: "Up to 200B params solo · 405B with two linked",
    smarttec: "Any model. Llama 405B, DeepSeek V3, your custom — all fit",
  },
  {
    dimension: "Concurrent users",
    dgx: "1 developer · 1 model",
    smarttec: "Production fleet · hundreds of concurrent requests",
  },
  {
    dimension: "Uptime",
    dgx: "Until your power goes out, or you restart",
    smarttec: "99.9% SLA · battery-backed · sub-10ms failover",
  },
  {
    dimension: "Cost",
    dgx: "$3,000–$4,000 one-time + electricity",
    smarttec: "From $2.40/GPU-hr or $48K/mo flat for a CS-3",
  },
];

const tokensPerWatt = {
  gridPowered: 0.62, // tokens/watt, typical hyperscaler grid-powered AI cluster
  smarttec: 0.81, // tokens/watt with BESS arbitrage (off-peak charging, on-peak compute)
};

export default function DgxSparkPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 pb-8 md:pt-20 md:pb-12 border-b border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ DGX SPARK · THE DEV BOX · THE DEPLOY ]</span>
          </div>
          <h1 className="font-anybody font-extrabold text-5xl md:text-6xl lg:text-7xl text-slate tracking-tight max-w-3xl">
            NVIDIA gave you a $3K desk box.<br />
            <span className="text-greptile-green">We give you the AI factory.</span>
          </h1>
          <p className="font-anybody text-xl md:text-2xl text-slate/70 mt-6 max-w-2xl leading-relaxed">
            The DGX Spark is the most exciting dev box of the year. It&apos;s also where SmartTec starts. Same GB10 architecture. Production scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-greptile-green/85 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-slate" />
              See side-by-side
            </a>
            <Link
              href="/inference"
              className="inline-flex items-center gap-2 border border-dashed border-slate/40 text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:border-greptile-green hover:text-greptile-green transition-colors"
            >
              Run fit-check
            </Link>
          </div>
        </div>
      </section>

      {/* The two products, side-by-side */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-6">
          {/* DGX Spark */}
          <div className="border border-dashed border-slate/30 bg-fog/50 overflow-hidden">
            <div className="relative w-full aspect-[16/10] bg-slate overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hardware/nvidia-dgx-spark-desktop.jpg"
                alt="NVIDIA DGX Spark desktop supercomputer on a desk"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-slate/20 pb-3">
                <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-greptile-green">[ NVIDIA ]</div>
                <div className="font-anybody font-bold text-base md:text-lg text-slate tracking-tight">DGX Spark · GB10</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-0.5">PRICE</div>
                  <div className="font-anybody font-extrabold text-xl text-slate">$3,000</div>
                  <div className="font-space-mono text-[9px] text-slate/50">one-time</div>
                </div>
                <div>
                  <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-0.5">FORM FACTOR</div>
                  <div className="font-anybody font-extrabold text-xl text-slate">Desktop</div>
                  <div className="font-space-mono text-[9px] text-slate/50">240 W</div>
                </div>
                <div>
                  <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-0.5">MEMORY</div>
                  <div className="font-anybody font-extrabold text-xl text-slate">128 GB</div>
                  <div className="font-space-mono text-[9px] text-slate/50">unified</div>
                </div>
              </div>
              <p className="font-anybody text-slate/70 text-sm leading-relaxed">
                Best-in-class for prototyping. 200B params at your desk, 405B with two linked over ConnectX-7. But it&apos;s one developer, one model, one power outlet.
              </p>
            </div>
          </div>

          {/* SmartTec AI factory */}
          <div className="border border-dashed border-slate/30 bg-fog/50 overflow-hidden">
            <div className="relative w-full aspect-[16/10] bg-slate overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hardware/nvidia-gb200-nvl72-rack.jpg"
                alt="NVIDIA GB200 NVL72 rack-scale system at SmartTec"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-slate/20 pb-3">
                <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-greptile-green">[ SMARTTEC AI FACTORY ]</div>
                <div className="font-anybody font-bold text-base md:text-lg text-slate tracking-tight">GB200 · CS-3 · H200</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-0.5">PRICE</div>
                  <div className="font-anybody font-extrabold text-xl text-slate">$2.40+</div>
                  <div className="font-space-mono text-[9px] text-slate/50">/GPU-hr</div>
                </div>
                <div>
                  <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-0.5">FORM FACTOR</div>
                  <div className="font-anybody font-extrabold text-xl text-slate">Rack → farm</div>
                  <div className="font-space-mono text-[9px] text-slate/50">120 kW/rack</div>
                </div>
                <div>
                  <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-0.5">MEMORY</div>
                  <div className="font-anybody font-extrabold text-xl text-slate">13.5 TB</div>
                  <div className="font-space-mono text-[9px] text-slate/50">/rack HBM3e</div>
                </div>
              </div>
              <p className="font-anybody text-slate/70 text-sm leading-relaxed">
                Same NVIDIA silicon, deployed behind megawatt-scale batteries we built. Hundreds of concurrent users. Sub-10ms failover. SLA-backed. Token-billed or reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-side comparison table */}
      <section id="comparison" className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ SIDE-BY-SIDE ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-2xl mb-3">
            Same silicon. Different scope.
          </h2>
          <p className="font-anybody text-slate/70 text-lg leading-relaxed max-w-2xl mb-12">
            Both run NVIDIA. Both run Grace Blackwell. Only one is an AI factory.
          </p>

          <div className="border border-dashed border-slate/30 overflow-hidden bg-background">
            {/* Header */}
            <div className="grid grid-cols-12 bg-fog border-b border-dashed border-slate/30 px-5 py-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
              <div className="col-span-3">Dimension</div>
              <div className="col-span-4">DGX Spark</div>
              <div className="col-span-5">SmartTec</div>
            </div>
            {comparison.map((c, i) => (
              <div key={c.dimension} className={`grid grid-cols-12 items-center px-5 py-4 ${i !== comparison.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/5`}>
                <div className="col-span-3 font-space-mono text-[10px] uppercase tracking-wider text-slate/60">{c.dimension}</div>
                <div className="col-span-4 font-anybody text-sm text-slate/80 pr-3">{c.dgx}</div>
                <div className="col-span-5 font-anybody font-bold text-sm text-slate">{c.smarttec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokens per watt — Jensen's new metric */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ TOKENS PER WATT ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-2xl mb-3">
            The metric Jensen just made the headline.
          </h2>
          <p className="font-anybody text-slate/70 text-lg leading-relaxed max-w-2xl mb-12">
            At GTC 2026, NVIDIA said &ldquo;tokens per watt&rdquo; is the new efficiency benchmark. We agree. SmartTec scores higher because our power comes from a battery that arbitrage-charges off-peak — we don&apos;t run on the gas peakers your cluster hits during a hot summer afternoon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grid-powered competitor */}
            <div className="border border-dashed border-slate/30 bg-fog/50 p-8">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2">[ GRID-POWERED ]</div>
              <div className="font-anybody font-extrabold text-5xl md:text-6xl text-slate/60 tracking-tight">
                {tokensPerWatt.gridPowered}
              </div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mt-2">
                TOKENS / WATT · 24×7 MIXED LOAD
              </div>
              <p className="font-anybody text-slate/70 text-sm leading-relaxed mt-4">
                Typical hyperscaler running on retail grid. Hits dirty peakers during peak. Average emissions intensity ~0.4 kg CO₂/kWh.
              </p>
            </div>

            {/* SmartTec */}
            <div className="border border-dashed border-greptile-green bg-greptile-green/10 p-8 relative overflow-hidden">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mb-2">[ SMARTTEC ]</div>
              <div className="font-anybody font-extrabold text-5xl md:text-6xl text-greptile-green tracking-tight">
                {tokensPerWatt.smarttec}
              </div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mt-2">
                TOKENS / WATT · +30% VS GRID
              </div>
              <p className="font-anybody text-slate/70 text-sm leading-relaxed mt-4">
                Behind-the-meter BESS charges off-peak (cheapest, cleanest hours), discharges during compute bursts. Same silicon, 30% more tokens per joule.
              </p>
            </div>
          </div>

          <div className="mt-8 border border-dashed border-slate/30 bg-background p-6">
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mb-2">[ WHY THIS MATTERS ]</div>
            <p className="font-anybody text-slate/70 leading-relaxed">
              At 1 GW of sustained AI load, the difference between 0.62 and 0.81 tokens/watt is roughly <strong className="text-slate">$140M/year in power cost</strong> and <strong className="text-slate">~600,000 tons of CO₂</strong> — for the same inference output. We&apos;re not chasing the metric; we&apos;re already winning it.
            </p>
          </div>
        </div>
      </section>

      {/* The actual workflow: develop on Spark, deploy on SmartTec */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ THE WORKFLOW ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-2xl mb-3">
            Build on the desk. Deploy on the floor.
          </h2>
          <p className="font-anybody text-slate/70 text-lg leading-relaxed max-w-2xl mb-12">
            This is how the next generation of AI teams ship. Prototype locally. Production at scale. Same models, same toolchain, zero rewrite.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-dashed border-slate/30 bg-background p-6">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mb-3">[ 01 · DEVELOP ]</div>
              <h3 className="font-anybody font-bold text-xl text-slate mb-2">On your DGX Spark</h3>
              <p className="font-anybody text-slate/70 text-sm leading-relaxed">
                Run a 70B or 200B model at your desk. Fine-tune. Eval. Iterate in seconds. vLLM and the NVIDIA stack work identically to SmartTec — same commands, same containers.
              </p>
            </div>
            <div className="border border-dashed border-slate/30 bg-background p-6">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mb-3">[ 02 · FIT-CHECK ]</div>
              <h3 className="font-anybody font-bold text-xl text-slate mb-2">On SmartTec /inference</h3>
              <p className="font-anybody text-slate/70 text-sm leading-relaxed">
                Plug in your model + target throughput. We show VRAM fit, max concurrent sequences, tokens/sec, and a copy-pasteable vLLM deploy command. 30 seconds.
              </p>
            </div>
            <div className="border border-dashed border-slate/30 bg-background p-6">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mb-3">[ 03 · SHIP ]</div>
              <h3 className="font-anybody font-bold text-xl text-slate mb-2">On SmartTec compute</h3>
              <p className="font-anybody text-slate/70 text-sm leading-relaxed">
                Same model, same command. Now running on a GB200 NVL72 rack behind 25 kW of LFP batteries per CS-3. SLA-backed. Sub-10ms failover. Priced per token.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Handoff CTA */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="border border-dashed border-greptile-green bg-greptile-green/10 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-4">
                <span className="inline-block w-2 h-2 bg-greptile-green" />
                <span>[ READY TO SHIP ]</span>
              </div>
              <h3 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight">
                From prototype to production in one deploy.
              </h3>
              <p className="font-anybody text-slate/70 text-lg leading-relaxed mt-3 max-w-2xl">
                Run the fit-check on your model. We&apos;ll show you the exact vLLM command, the rack you&apos;d land on, and the per-token cost. Q4 2026 power-on for design partners.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/inference"
                className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-6 py-4 hover:bg-greptile-green/85 transition-colors whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 bg-slate" />
                Run fit-check →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-dashed border-slate/40 text-slate font-space-mono text-[11px] uppercase tracking-wider px-6 py-4 hover:border-greptile-green hover:text-greptile-green transition-colors whitespace-nowrap"
              >
                Talk to engineering →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
