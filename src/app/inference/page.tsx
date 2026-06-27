import type { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import ModelFitCalculator from "@/components/ModelFitCalculator";

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
