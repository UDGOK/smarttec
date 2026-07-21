import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import ModelFitCalculator from "@/components/ModelFitCalculator";
import FleetBuilder from "@/components/FleetBuilder";

function HardwareCard({
  src,
  tag,
  productName,
  stat1,
  stat2,
  stat3,
  blurb,
  wide,
}: {
  src: string;
  tag: string;
  productName: string;
  stat1: { label: string; value: string };
  stat2: { label: string; value: string };
  stat3: { label: string; value: string };
  blurb: string;
  wide?: boolean;
}) {
  return (
    <article className="border border-dashed border-slate/30 bg-background">
      <div className={`relative w-full ${wide ? "aspect-[2/1]" : "aspect-[16/9]"} bg-slate/95 overflow-hidden`}>
        <Image
          src={src}
          alt={`${tag} ${productName}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 640px"
          priority
          unoptimized
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-slate/20 pb-3">
          <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-greptile-green">
            [ {tag.toUpperCase()} ]
          </div>
          <h3 className="font-anybody font-bold text-base md:text-lg text-slate tracking-tight text-right">
            {productName}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[stat1, stat2, stat3].map((s, i) => (
            <div key={i}>
              <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-0.5">
                {s.label}
              </div>
              <div className="font-anybody font-extrabold text-lg md:text-xl text-slate tracking-tight">
                {s.value}
              </div>
            </div>
          ))}
        </div>
        <p className="font-anybody text-slate/70 text-sm leading-relaxed pt-1">
          {blurb}
        </p>
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  title: "Inference fit-check — SmartTec",
  description: "Pick your model + GPU + quantization. See VRAM fit, throughput, and a ready-to-run vLLM deploy command for SmartTec compute.",
};

export default function InferencePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 pb-8 md:pt-20 md:pb-12 border-b border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ INFERENCE FIT-CHECK ]</span>
          </div>
          <h1 className="font-anybody font-extrabold text-5xl md:text-6xl lg:text-7xl text-slate tracking-tight max-w-3xl">
            Will your model run on SmartTec?
          </h1>
          <p className="font-anybody text-xl md:text-2xl text-slate/70 mt-6 max-w-2xl leading-relaxed">
            Pick a model and a GPU. Get VRAM fit, throughput, max concurrent sequences, and a ready-to-run {`vLLM`} command.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-greptile-green/85 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-slate" />
              Run the fit-check
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 border border-dashed border-slate/40 text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:border-greptile-green hover:text-greptile-green transition-colors"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto">
          <ModelFitCalculator />
        </div>
      </section>

      {/* ───────────────  FLEET BUILDER  ─────────────── */}
      <section id="fleet" className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ FLEET BUILDER · MULTI-SERVER COST ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-3">
            Stack as many servers as you need.
          </h2>
          <p className="font-anybody text-slate/70 text-lg leading-relaxed max-w-2xl mb-10">
            Pick H100s, H200s, B200s, GB200 racks, and Cerebras CS-3 systems in any combination. See the run cost on SmartTec, what you could rent it for, and your gross margin — all live. Phase-2 cost-alternative track: AMD Instinct MI455X (432 GB HBM4, 19.6 TB/s — 2.4× the memory bandwidth of B200) is now selectable in the fit-check for planning; priced configurations publish once OEM availability and ROCm serving mature.
          </p>
          <FleetBuilder />
        </div>
      </section>

      {/* ───────────────  HARDWARE  ─────────────── */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ THE HARDWARE ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-2xl mb-3">
            Five systems. One fabric.
          </h2>
          <p className="font-anybody text-slate/70 text-lg leading-relaxed max-w-2xl mb-12">
            What you see below is what SmartTec actually runs. Three NVIDIA systems + one wafer-scale engine, on the same power fabric.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ─── NVIDIA STACK ─── */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-dashed border-slate/30 pb-3">
                <span className="inline-block w-2 h-2 bg-greptile-green" />
                <span className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green">
                  [ NVIDIA STACK · HOPPER + BLACKWELL ]
                </span>
              </div>

              {/* H200 SXM5 */}
              <HardwareCard
                src="/hardware/nvidia-h200-tensor-core.jpg"
                tag="NVIDIA"
                productName="H200 SXM5 · 141 GB"
                stat1={{ label: "BF16 TFLOPS", value: "989" }}
                stat2={{ label: "MEM BW", value: "4.8 TB/s" }}
                stat3={{ label: "VRAM", value: "141 GB" }}
                blurb="The Hopper refresh. Same compute, 76% more memory bandwidth than H100. The sweet spot for 70B / 8B-class models at 8k–128k context."
              />

              {/* HGX B200 */}
              <HardwareCard
                src="/hardware/nvidia-hgx-b200-baseboard.jpg"
                tag="NVIDIA"
                productName="HGX B200 · 8× Blackwell"
                stat1={{ label: "BF16 TFLOPS", value: "18,000" }}
                stat2={{ label: "PER-GPU VRAM", value: "192 GB" }}
                stat3={{ label: "BASEBOARD VRAM", value: "1.5 TB" }}
                blurb="The Blackwell baseboard. 8× B200 SXM, 1.5 TB total HBM3e per board. Where most frontier inference starts."
              />

              {/* GB200 NVL72 */}
              <HardwareCard
                src="/hardware/nvidia-gb200-nvl72-rack.jpg"
                tag="NVIDIA"
                productName="GB200 NVL72 · exascale rack"
                stat1={{ label: "BF16 TFLOPS", value: "1.4 exaFLOPS" }}
                stat2={{ label: "GRACE + BLACKWELL", value: "36 + 72" }}
                stat3={{ label: "NVLINK DOMAIN", value: "130 TB/s" }}
                blurb="A single rack. 36 Grace CPUs, 72 Blackwell GPUs, one NVLink domain. What trillion-parameter inference runs on."
              />
            </div>

            {/* ─── CEREBRAS STACK ─── */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-dashed border-slate/30 pb-3">
                <span className="inline-block w-2 h-2 bg-greptile-green" />
                <span className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green">
                  [ CEREBRAS STACK · WAFER-SCALE ]
                </span>
              </div>

              {/* CS-3 system */}
              <HardwareCard
                src="/hardware/cerebras-cs3-system.png"
                tag="Cerebras"
                productName="CS-3 system · 1× WSE-3"
                stat1={{ label: "BF16 TFLOPS", value: "125,000" }}
                stat2={{ label: "ON-CHIP SRAM", value: "44 GB" }}
                stat3={{ label: "MEM BW", value: "21 PB/s" }}
                blurb="One chip, one wafer, one system. The largest silicon ever built. Per-1K-token billing, not per-hour."
              />

              {/* CS-3 in datacenter */}
              <HardwareCard
                src="/hardware/cerebras-cs3-datacenter.jpg"
                tag="Cerebras"
                productName="CS-3 in production"
                stat1={{ label: "POWER DRAW", value: "25 kW" }}
                stat2={{ label: "CORES", value: "900,000" }}
                stat3={{ label: "TRANSISTORS", value: "4 trillion" }}
                blurb="What a CS-3 actually looks like in a rack. Pink fiber = wafer-scale fabric. Front mesh = the cooling intake."
              />

              {/* Scale comparison */}
              <HardwareCard
                src="/hardware/cerebras-vs-b200-size.png"
                tag="Scale"
                productName="WSE-3 vs B200 · at-scale"
                stat1={{ label: "WSE-3 AREA", value: "46,225 mm²" }}
                stat2={{ label: "B200 DIE", value: "~ 800 mm²" }}
                stat3={{ label: "RATIO", value: "56× larger" }}
                blurb="The wafer on the left holds one die. The wafer on the right is the entire NVIDIA B200 chip, scaled up for visibility."
                wide
              />
            </div>
          </div>

          <div className="mt-10 border border-dashed border-slate/30 bg-fog/50 p-5 md:p-6">
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mb-2">[ IMAGES · SOURCE ]</div>
            <p className="font-anybody text-slate/70 text-sm leading-relaxed">
              NVIDIA hardware photography sourced from{" "}
              <a className="text-greptile-green underline" href="https://www.nvidia.com/en-us/data-center/" target="_blank" rel="noopener">nvidia.com/data-center</a>{" "}
              (NVIDIA press kit, public marketing assets). Cerebras hardware photography sourced from{" "}
              <a className="text-greptile-green underline" href="https://www.cerebras.ai/" target="_blank" rel="noopener">cerebras.ai</a>{" "}
              (CS-3 product page, public marketing assets). The wafer-vs-B200 scale comparison is from the Cerebras WSE-3 announcement. These exact systems deploy at our Mead, OK facility at Q4 2026 power-on.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ HOW THE MATH WORKS ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-2xl mb-12">
            Three numbers, all open.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-dashed border-slate/30 bg-background p-6">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mb-2">1 · Weights</div>
              <div className="font-anybody font-extrabold text-2xl text-slate mb-2">params × bytes-per-param</div>
              <p className="font-anybody text-slate/70 leading-relaxed text-sm">
                Llama 3 70B at FP16 = 70B × 2 bytes = 140 GB. Quantized to FP8 = 70 GB. We add a 5% buffer for activations and CUDA kernels.
              </p>
            </div>
            <div className="border border-dashed border-slate/30 bg-background p-6">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mb-2">2 · KV cache</div>
              <div className="font-anybody font-extrabold text-2xl text-slate mb-2">2 × L × H<sub>k</sub> × d × ℓ × B</div>
              <p className="font-anybody text-slate/70 leading-relaxed text-sm">
                Per sequence at seq_len ℓ and batch B. Llama 3 70B at 8k context, batch 8 = ~10 GB. Linear in batch size.
              </p>
            </div>
            <div className="border border-dashed border-slate/30 bg-background p-6">
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mb-2">3 · Throughput</div>
              <div className="font-anybody font-extrabold text-2xl text-slate mb-2">roofline of memory & compute</div>
              <p className="font-anybody text-slate/70 leading-relaxed text-sm">
                Decode is memory-bound: tokens/s ≈ BW / (params × bytes). Prefill is compute-bound: tokens/s ≈ TFLOPS / (2 × params). We take the minimum.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-dashed border-slate/30 bg-background p-6">
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mb-3">Sources & assumptions</div>
            <ul className="font-anybody text-slate/70 leading-relaxed text-sm space-y-2 list-disc pl-5">
              <li>Model architecture (layers, KV heads, head dim) sourced from each model's published <code className="font-mono text-xs bg-fog px-1">config.json</code> on HuggingFace.</li>
              <li>GPU specs (VRAM, BF16 TFLOPS, memory bandwidth) from NVIDIA / Cerebras datasheets — Blackwell numbers per vendor release notes.</li>
              <li>Pricing reflects June 2026 on-demand retail market rates (CoreWeave, Lambda, AWS p5, GCP a3 ranges). Subject to change.</li>
              <li>Throughput is a roofline estimate — actual achieved tokens/sec depends on scheduling, batching policy, attention impl (FlashAttention-2 vs 3), and KV cache compression.</li>
              <li>Recommendation: always benchmark your specific workload. This calculator tells you what fits; <em>how fast</em> is the next 10% engineering.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next step CTA */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="border border-dashed border-greptile-green bg-greptile-green/10 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-4">
                <span className="inline-block w-2 h-2 bg-greptile-green" />
                <span>[ NEXT STEP ]</span>
              </div>
              <h3 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight">
                Fit confirmed. Now scope the build.
              </h3>
              <p className="font-anybody text-slate/70 text-lg leading-relaxed mt-3 max-w-2xl">
                Send this fit-check to <span className="text-slate font-bold">partners@smarttec.io</span>. We'll send back a deployment plan, Q4 2026 power-on target, and design-partner pricing locked for 12 months.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-6 py-4 hover:bg-greptile-green/85 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-slate" />
              Reserve compute
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
