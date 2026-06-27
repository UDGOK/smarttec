import { Calculator } from "@/components/Calculator";
import PageShell from "@/components/PageShell";
import Link from "next/link";

export default function CalculatorPage() {
  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ CALCULATOR · BETA · JUNE 2026 ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                What would your<br />compute cost?<br />
                <span className="text-greptile-green">On our side of the meter.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl">
                Pick a chip, set your workload, see the real economics — including what grid-tied power would cost you vs. running behind the meter on SmartTec.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/50">
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />5 chips</span>
                <span>·</span>
                <span>4 regions</span>
                <span>·</span>
                <span>live recalc</span>
                <span>·</span>
                <span>no signup</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Calculator */}
        <section className="bg-background">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <Calculator />
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Disclaimer */}
        <section className="bg-fog border-t border-dashed border-silver">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-slate/40 rounded-full" />
              <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60">[ ASSUMPTIONS & DISCLOSURES ]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-space-mono text-[11px] uppercase tracking-wider text-slate/60 leading-relaxed">
              <div>
                [ RATES ] GPU-hours reflect June 2026 retail market rates (CoreWeave, Lambda, AWS, GCP range).
                Cerebras CS-3 inference billed per 1K tokens at Cerebras Cloud list rate. SmartTec design-partner pricing typically 20-40% below list — contact us.
              </div>
              <div>
                [ POWER ] TDP values are spec-sheet, not measured. Server overhead includes cooling + networking at industry typical 30-35%. SmartTec power cost assumes 55% off-peak / 45% on-peak charging arbitrage + ~15% demand-charge savings vs grid baseline.
              </div>
              <div>
                [ RESILIENCE ] Outage hours/yr per region are estimates from public ISO/RTO reliability reports. &quot;Protected&quot; assumes SmartTec sub-10ms failover prevents any customer-visible downtime.
              </div>
              <div>
                [ ENVIRONMENTAL ] CO₂ figures use regional grid mix emissions factors. SmartTec charging from grid still has some carbon; we model ~30% reduction via arbitrage away from peak gas peakers. [ RESULTS NOT A QUOTE ]
              </div>
            </div>

            {/* Handoff to inference fit-check */}
            <div className="mt-8 border border-dashed border-greptile-green bg-greptile-green/10 p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-2">
                  <span className="inline-block w-2 h-2 bg-greptile-green" />
                  <span>[ NEXT STEP ]</span>
                </div>
                <h3 className="font-anybody font-extrabold text-2xl md:text-3xl text-slate tracking-tight">
                  Economics confirmed. Now: will your model fit?
                </h3>
                <p className="font-anybody text-slate/70 mt-2 max-w-2xl">
                  Use the inference fit-check to pick a model and GPU. You get VRAM fit, throughput, and a ready-to-run vLLM deploy command for SmartTec compute.
                </p>
              </div>
              <Link
                href="/inference"
                className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-greptile-green/85 transition-colors whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 bg-slate" />
                Run fit-check
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
