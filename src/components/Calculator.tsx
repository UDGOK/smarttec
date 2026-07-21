"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { generateCalculatorPdf } from "./generateCalculatorPdf";

type Chip = "H100" | "H200" | "B200" | "GB200" | "CS-3";
type Workload = "training" | "inference";
type PowerStrategy = "smarttec" | "grid";
type Region = "us-avg" | "pjm" | "ercot" | "caiso";

interface ChipSpec {
  label: Chip;
  // Per-unit retail market rate ($/GPU-hr or $/1K tokens for CS-3)
  rate: number;
  // TDP per unit (W) — single GPU for NVIDIA, whole system for CS-3
  tdpW: number;
  // Units per "server" (for NVIDIA: 8 GPUs / server; for CS-3: 1 system)
  unitsPerServer: number;
  // Per-server overhead (cooling + networking + aux)
  overheadPct: number;
  // Inference tokens/sec per server at 70B FP16 (CS-3 different)
  tokPerSec: number;
  // Training throughput proxy: GPU-hours per 1T tokens trained
  gpuHrPer1T: number;
  // Highlight / pitch
  blurb: string;
}

const CHIPS: Record<Chip, ChipSpec> = {
  "H100": {
    label: "H100",
    rate: 2.40,
    tdpW: 700,
    unitsPerServer: 8,
    overheadPct: 0.30,
    tokPerSec: 3500,
    gpuHrPer1T: 240,
    blurb: "Hopper. Workhorse. 80GB HBM3.",
  },
  "H200": {
    label: "H200",
    rate: 3.20,
    tdpW: 700,
    unitsPerServer: 8,
    overheadPct: 0.30,
    tokPerSec: 5000,
    gpuHrPer1T: 170,
    blurb: "Hopper refresh. 141GB HBM3e.",
  },
  "B200": {
    label: "B200",
    rate: 4.80,
    tdpW: 1000,
    unitsPerServer: 8,
    overheadPct: 0.32,
    tokPerSec: 7500,
    gpuHrPer1T: 110,
    blurb: "Blackwell. 192GB HBM3e.",
  },
  "GB200": {
    label: "GB200",
    rate: 6.40,
    tdpW: 1200,
    unitsPerServer: 8,
    overheadPct: 0.35,
    tokPerSec: 15000,
    gpuHrPer1T: 65,
    blurb: "Grace Blackwell. 1 rack = a supercomputer.",
  },
  "CS-3": {
    label: "CS-3",
    rate: 0.04,
    tdpW: 25000,
    unitsPerServer: 1,
    overheadPct: 0.10,
    tokPerSec: 50000,
    gpuHrPer1T: 0,
    blurb: "Cerebras CS-3 · wafer-scale. Fastest tokens on earth.",
  },
};

const REGIONS: Record<Region, { name: string; ratePerKwh: number; peakMultiplier: number; outagesPerYear: number; co2gPerKwh: number }> = {
  "us-avg": { name: "US average",       ratePerKwh: 0.085, peakMultiplier: 1.4, outagesPerYear: 18, co2gPerKwh: 380 },
  "pjm":    { name: "PJM (Mid-Atlantic)", ratePerKwh: 0.095, peakMultiplier: 1.6, outagesPerYear: 24, co2gPerKwh: 410 },
  "ercot":  { name: "ERCOT (Texas)",     ratePerKwh: 0.078, peakMultiplier: 1.5, outagesPerYear: 36, co2gPerKwh: 380 },
  "caiso":  { name: "CAISO (California)", ratePerKwh: 0.180, peakMultiplier: 1.8, outagesPerYear: 22, co2gPerKwh: 220 },
};

function fmtMoney(n: number, abbr = false): string {
  if (!isFinite(n)) return "—";
  if (abbr) {
    if (Math.abs(n) >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
    if (Math.abs(n) >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
    if (Math.abs(n) >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
    return `$${n.toFixed(0)}`;
  }
  return `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}
function fmtNum(n: number): string {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
function fmtMw(n: number): string {
  if (!isFinite(n)) return "—";
  if (n >= 1) return `${n.toFixed(1)} MW`;
  return `${(n * 1000).toFixed(0)} kW`;
}

interface CalcResult {
  gpuHours: number;
  tokens: number;
  avgPowerMW: number;
  peakPowerMW: number;
  batteryMW: number;
  batteryAutonomyHrs: number;
  revenueMonthly: number;
  powerMonthly: number;
  marginMonthly: number;
  marginPct: number;
  outagesProtected: number;
  co2AvoidedTons: number;
  tokensPerWatt: number;
  annualSavings: number;
}

export function Calculator() {
  const [exportEmail, setExportEmail] = useState("");
  const [exportStatus, setExportStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [workload, setWorkload] = useState<Workload>("inference");
  const [chip, setChip] = useState<Chip>("H100");
  const [qty, setQty] = useState(8);
  const [util, setUtil] = useState(75);
  const [hrsPerDay, setHrsPerDay] = useState(24);
  const [region, setRegion] = useState<Region>("us-avg");
  const [strategy, setStrategy] = useState<PowerStrategy>("smarttec");

  // Animation: bump a number when input changes
  const [bumpKey, setBumpKey] = useState(0);
  useEffect(() => {
    setBumpKey((k) => k + 1);
  }, [workload, chip, qty, util, hrsPerDay, region, strategy]);

  const result: CalcResult = useMemo(() => {
    const spec = CHIPS[chip];
    const reg = REGIONS[region];
    const hours = hrsPerDay * 30; // monthly hours
    const servers = qty / spec.unitsPerServer;
    const gpuHrs = qty * hours * (util / 100);
    const tokens = spec.tokPerSec * servers * hours * 3600 * (util / 100);

    const perServerPowerW = spec.tdpW * spec.unitsPerServer * (1 + spec.overheadPct);
    const totalPowerW = perServerPowerW * servers;
    const avgPowerMW = (totalPowerW / 1e6);
    const peakPowerMW = avgPowerMW * 1.25; // 25% peak headroom
    const batteryMW = peakPowerMW * 1.5; // oversize for redundancy
    const batteryAutonomyHrs = batteryMW > 0 ? (batteryMW * 4) / peakPowerMW : 0; // 4 MWh per MW

    // Revenue
    let revenueMonthly = 0;
    if (chip === "CS-3") {
      // Cerebras billed per 1K tokens
      revenueMonthly = (tokens / 1000) * spec.rate;
    } else {
      revenueMonthly = gpuHrs * spec.rate;
    }

    // Power cost
    const powerKwhMonthly = totalPowerW / 1000 * hours;
    let powerMonthly = 0;
    if (strategy === "smarttec") {
      // SmartTec: charge off-peak (~60% rate), discharge on-peak (~140% rate), no demand charges
      const offPeakShare = 0.55;
      const onPeakShare = 0.45;
      const blendedRate =
        reg.ratePerKwh * 0.7 * offPeakShare +
        reg.ratePerKwh * reg.peakMultiplier * onPeakShare;
      const smarttecUplift = 0.85; // SmartTec also captures demand-charge savings
      powerMonthly = powerKwhMonthly * blendedRate * smarttecUplift;
    } else {
      // Grid: full rate + demand charges (~25% uplift typical)
      powerMonthly = powerKwhMonthly * reg.ratePerKwh * reg.peakMultiplier * 1.25;
    }

    const marginMonthly = revenueMonthly - powerMonthly;
    const marginPct = revenueMonthly > 0 ? (marginMonthly / revenueMonthly) * 100 : 0;
    const annualSavings = strategy === "smarttec" ? 0 : 0;
    // Compute the SmartTec savings (if user picked grid, show what they'd save switching)
    const smarttecPower = (() => {
      const offPeakShare = 0.55;
      const onPeakShare = 0.45;
      const blendedRate = reg.ratePerKwh * 0.7 * offPeakShare + reg.ratePerKwh * reg.peakMultiplier * onPeakShare;
      const smarttecUplift = 0.85;
      return powerKwhMonthly * blendedRate * smarttecUplift;
    })();
    const gridPower = powerKwhMonthly * reg.ratePerKwh * reg.peakMultiplier * 1.25;
    const savings = (gridPower - smarttecPower) * 12;

    const outagesProtected = reg.outagesPerYear * hrsPerDay * 0.05; // avg ~3min × daily hours
    // CO2: grid-tied coal/gas baseline; SmartTec uses cleaner mix (battery charged from grid avg)
    const baselineCO2 = powerKwhMonthly * 12 * reg.co2gPerKwh / 1e6; // tons/year
    const smarttecCO2 = powerKwhMonthly * 12 * (reg.co2gPerKwh * 0.7) / 1e6;
    const co2AvoidedTons = strategy === "smarttec" ? baselineCO2 - smarttecCO2 : 0;
    const tokensPerWatt = totalPowerW > 0 ? tokens / totalPowerW : 0;

    return {
      gpuHours: gpuHrs,
      tokens,
      avgPowerMW,
      peakPowerMW,
      batteryMW,
      batteryAutonomyHrs,
      revenueMonthly,
      powerMonthly,
      marginMonthly,
      marginPct,
      outagesProtected,
      co2AvoidedTons,
      tokensPerWatt,
      annualSavings: Math.max(savings, 0),
    };
  }, [workload, chip, qty, util, hrsPerDay, region, strategy]);

  // For comparison when "grid" is selected
  const gridOnlyPowerMonthly = useMemo(() => {
    const spec = CHIPS[chip];
    const reg = REGIONS[region];
    const hours = hrsPerDay * 30;
    const servers = qty / spec.unitsPerServer;
    const perServerPowerW = spec.tdpW * spec.unitsPerServer * (1 + spec.overheadPct);
    const totalPowerW = perServerPowerW * servers;
    const powerKwhMonthly = totalPowerW / 1000 * hours;
    return powerKwhMonthly * reg.ratePerKwh * reg.peakMultiplier * 1.25;
  }, [chip, qty, hrsPerDay, region]);

  const smarttecOnlyPowerMonthly = useMemo(() => {
    const spec = CHIPS[chip];
    const reg = REGIONS[region];
    const hours = hrsPerDay * 30;
    const servers = qty / spec.unitsPerServer;
    const perServerPowerW = spec.tdpW * spec.unitsPerServer * (1 + spec.overheadPct);
    const totalPowerW = perServerPowerW * servers;
    const powerKwhMonthly = totalPowerW / 1000 * hours;
    const offPeakShare = 0.55;
    const onPeakShare = 0.45;
    const blendedRate = reg.ratePerKwh * 0.7 * offPeakShare + reg.ratePerKwh * reg.peakMultiplier * onPeakShare;
    const smarttecUplift = 0.85;
    return powerKwhMonthly * blendedRate * smarttecUplift;
  }, [chip, qty, hrsPerDay, region]);

  return (
    <div className="space-y-8">
      {/* Download PDF + reset row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border border-dashed border-slate/30 bg-fog/30 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
          <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">[ LIVE · UPDATES AS YOU TYPE ]</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => generateCalculatorPdf(
              { workload, chip, qty, util, hrsPerDay, region, strategy },
              { ...result, smarttecOnlyPowerMonthly, gridOnlyPowerMonthly }
            )}
            className="btn-hex btn-hex-sm !border-slate !bg-slate !text-fog inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="h-3 w-3">
              <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM120,40V136L86.34,102.34a8,8,0,0,0-11.32,11.32l48,48a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,136V40a8,8,0,0,0-16,0Z" />
            </svg>
            Download / Print PDF
          </button>
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={exportEmail}
              onChange={(e) => { setExportEmail(e.target.value); if (exportStatus !== "idle") setExportStatus("idle"); }}
              placeholder="you@company.com"
              className="w-40 sm:w-48 bg-background border border-dashed border-slate/40 px-3 py-2 font-space-mono text-[11px] text-slate focus:outline-none focus:border-greptile-green"
            />
            <button
              type="button"
              disabled={exportStatus === "sending" || !exportEmail.includes("@")}
              onClick={async () => {
                setExportStatus("sending");
                try {
                  const doc = generateCalculatorPdf(
                    { workload, chip, qty, util, hrsPerDay, region, strategy },
                    { ...result, smarttecOnlyPowerMonthly, gridOnlyPowerMonthly },
                    false
                  );
                  const pdfBase64 = doc.output("datauristring").split(",")[1];
                  const text = `Your SmartTec TCO estimate\n\nWorkload: ${workload} · ${qty}× ${chip} · ${util}% util · ${hrsPerDay}h/day\nMonthly power on SmartTec (behind-the-meter): $${Math.round(smarttecOnlyPowerMonthly).toLocaleString()}\nMonthly power grid-tied: $${Math.round(gridOnlyPowerMonthly).toLocaleString()}\nEstimated annual savings: $${Math.round(result.annualSavings).toLocaleString()}\n\nFull one-pager attached.`;
                  const r = await fetch("/api/email-config", {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: exportEmail, subject: `SmartTec TCO estimate: ${qty}× ${chip}`, text, pdfBase64 }),
                  });
                  setExportStatus(r.ok ? "sent" : "error");
                } catch { setExportStatus("error"); }
              }}
              className="btn-hex btn-hex-sm !border-greptile-green !bg-greptile-green !text-black inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {exportStatus === "sending" ? "Sending…" : "Email me this"}
            </button>
          </div>
        </div>
        {exportStatus === "sent" && (
          <p className="w-full font-space-mono text-[10px] text-greptile-green">[ Sent — check your inbox. PDF attached. ]</p>
        )}
        {exportStatus === "error" && (
          <p className="w-full font-space-mono text-[10px] text-bloom">[ Couldn&apos;t send — use Download above or email hello@smarttec.dev ]</p>
        )}
      </div>
      {/* Inputs panel */}
      <div className="border border-dashed border-slate/30 bg-fog/30 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
          <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60">[ INPUTS ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Workload */}
          <div>
            <label className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2 block">[ WORKLOAD ]</label>
            <div className="flex gap-1.5 border border-dashed border-slate/40 p-1 bg-background">
              {(["training", "inference"] as Workload[]).map((w) => (
                <button
                  key={w}
                  onClick={() => setWorkload(w)}
                  className={`flex-1 font-anybody font-bold text-xs uppercase tracking-wider py-2 px-2 transition-colors ${workload === w ? "bg-greptile-green text-black" : "text-slate/70 hover:bg-greptile-green/10"}`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Chip selector */}
          <div>
            <label className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2 block">[ GPU / CHIP ]</label>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(CHIPS) as Chip[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setChip(c)}
                  className={`font-anybody font-bold text-xs uppercase tracking-wider py-2 px-3 border border-dashed transition-colors ${chip === c ? "bg-greptile-green border-greptile-green text-black" : "border-slate/40 text-slate/70 bg-background hover:bg-greptile-green/10"}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="mt-2 font-space-mono text-[10px] uppercase tracking-wider text-slate/50">
              {CHIPS[chip].blurb}
            </div>
          </div>

          {/* Region */}
          <div>
            <label className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2 block">[ REGION ]</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="w-full font-anybody font-bold text-sm border border-dashed border-slate/40 bg-background text-slate px-3 py-2 focus:outline-none focus:border-greptile-green"
            >
              {(Object.keys(REGIONS) as Region[]).map((r) => (
                <option key={r} value={r}>{REGIONS[r].name}</option>
              ))}
            </select>
            <div className="mt-2 font-space-mono text-[10px] uppercase tracking-wider text-slate/50">
              ${REGIONS[region].ratePerKwh.toFixed(3)}/kWh · {REGIONS[region].outagesPerYear} outages/yr
            </div>
          </div>

          {/* Power strategy */}
          <div>
            <label className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2 block">[ POWER STRATEGY ]</label>
            <div className="flex gap-1.5 border border-dashed border-slate/40 p-1 bg-background">
              {(["smarttec", "grid"] as PowerStrategy[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setStrategy(s)}
                  className={`flex-1 font-anybody font-bold text-xs uppercase tracking-wider py-2 px-2 transition-colors ${strategy === s ? "bg-greptile-green text-black" : "text-slate/70 hover:bg-greptile-green/10"}`}
                >
                  {s === "smarttec" ? "SmartTec" : "Grid-tied"}
                </button>
              ))}
            </div>
            <div className="mt-2 font-space-mono text-[10px] uppercase tracking-wider text-slate/50">
              {strategy === "smarttec" ? "behind-the-meter" : "retail electricity"}
            </div>
          </div>
        </div>

        {/* Sliders row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <SliderField
            label="Quantity"
            unit="units"
            value={qty}
            min={1}
            max={500}
            step={1}
            onChange={setQty}
            formatter={fmtNum}
          />
          <SliderField
            label="Utilization"
            unit="%"
            value={util}
            min={10}
            max={100}
            step={1}
            onChange={(v) => setUtil(v)}
            formatter={(v) => v.toFixed(0)}
          />
          <SliderField
            label="Hours per day"
            unit="hrs"
            value={hrsPerDay}
            min={1}
            max={24}
            step={1}
            onChange={setHrsPerDay}
            formatter={(v) => v.toFixed(0)}
          />
        </div>
      </div>

      {/* Results panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Output 1: Compute */}
        <ResultsCard title="Compute output" accent="bg-greptile-green">
          <StatRow label={`${workload === "training" ? "GPU-hours" : "GPU-hours"} / month`} value={fmtNum(result.gpuHours)} unit="hr" />
          <StatRow label={workload === "training" ? "Training throughput (70B model)" : "Inference throughput (70B model)"} value={workload === "inference" ? `${fmtNum(result.tokens / (hrsPerDay * 30 * 3600))} tok/s` : `${fmtNum(result.gpuHours / 170)} T-tokens/mo`} />
          <StatRow label={workload === "inference" ? "Total tokens served" : "Effective training tokens"} value={workload === "inference" ? `${(result.tokens / 1e9).toFixed(2)}B tok` : `${(result.gpuHours / 170).toFixed(1)}T tok`} />
        </ResultsCard>

        {/* Output 2: Power */}
        <ResultsCard title="Power" accent="bg-seafoam">
          <StatRow label="Average draw" value={fmtMw(result.avgPowerMW)} />
          <StatRow label="Peak draw" value={fmtMw(result.peakPowerMW)} />
          <StatRow label="z1power battery needed" value={fmtMw(result.batteryMW)} />
          <StatRow label="Battery autonomy at peak" value={`${result.batteryAutonomyHrs.toFixed(1)} hrs`} />
        </ResultsCard>

        {/* Output 3: Economics */}
        <ResultsCard title="Economics" accent="bg-peach" highlight>
          <BigStat label="Revenue / month" value={fmtMoney(result.revenueMonthly)} accent />
          <StatRow label="Power cost / month" value={fmtMoney(result.powerMonthly)} inverted />
          <BigStat label="Margin / month" value={fmtMoney(result.marginMonthly)} accent />
          <StatRow label="Margin %" value={`${result.marginPct.toFixed(1)}%`} inverted />
        </ResultsCard>

        {/* Output 4: Resilience */}
        <ResultsCard title="Resilience & sustainability" accent="bg-lavender">
          <StatRow label="Outage hours protected / yr" value={`${result.outagesProtected.toFixed(1)} hrs`} />
          <StatRow label="CO₂ avoided / yr" value={`${result.co2AvoidedTons.toFixed(0)} tons`} />
          <StatRow label="Tokens per watt" value={fmtNum(result.tokensPerWatt)} />
          <StatRow label="Carbon avoided (lifetime)" value={`${(result.co2AvoidedTons * 3).toFixed(0)} tons (3-yr)`} />
        </ResultsCard>
      </div>

      {/* The big comparison: SmartTec vs Grid */}
      <div className="border-2 border-greptile-green bg-greptile-green/5 p-6 md:p-10">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-12 h-12 bg-greptile-green shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-halftone opacity-30" />
          </div>
          <div>
            <span className="font-space-mono text-[11px] uppercase tracking-widest text-greptile-green">[ THE SMARTTEC ADVANTAGE ]</span>
            <h3 className="text-2xl md:text-3xl font-anybody font-extrabold text-slate tracking-tight mt-1">
              What you'd save going behind the meter.
            </h3>
            <p className="text-sm text-slate/70 mt-1">
              {qty} × {chip} running {hrsPerDay}h/day at {util}% util, in {REGIONS[region].name}.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <CompareBar
            label="SmartTec"
            value={fmtMoney(smarttecOnlyPowerMonthly)}
            barPct={Math.min((smarttecOnlyPowerMonthly / Math.max(gridOnlyPowerMonthly, 1)) * 100, 100)}
            barColor="bg-greptile-green"
            sub="behind-the-meter"
          />
          <CompareBar
            label="Grid-tied"
            value={fmtMoney(gridOnlyPowerMonthly)}
            barPct={100}
            barColor="bg-slate"
            sub="retail electricity"
          />
          <CompareBar
            label="Annual savings"
            value={fmtMoney(result.annualSavings, true)}
            barPct={100}
            barColor="bg-peach"
            sub="by switching to SmartTec"
            highlight
          />
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-between pt-6 border-t border-dashed border-greptile-green/40">
          <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">
            [ ASSUMPTIONS · 2026 RETAIL MARKET RATES · CONFIRM WITH SMARTEC FOR DESIGN-PARTNER PRICING ]
          </div>
          <Link href="/contact" className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-slate">
            Lock launch pricing →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper subcomponents
function SliderField({ label, unit, value, min, max, step, onChange, formatter }: {
  label: string; unit: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; formatter: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">[ {label.toUpperCase()} ]</label>
        <span className="font-anybody font-bold text-base text-slate">
          {formatter(value)}<span className="font-space-mono text-[10px] text-slate/50 ml-1">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-slate/20 appearance-none cursor-pointer accent-greptile-green"
        style={{
          background: `linear-gradient(to right, #28E99F 0%, #28E99F ${((value - min) / (max - min)) * 100}%, #3D3B4F33 ${((value - min) / (max - min)) * 100}%, #3D3B4F33 100%)`,
        }}
      />
      <div className="flex justify-between mt-1 font-space-mono text-[9px] text-slate/40">
        <span>{formatter(min)}</span>
        <span>{formatter(max)}</span>
      </div>
    </div>
  );
}

function ResultsCard({ title, accent, children, highlight }: { title: string; accent: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`border border-dashed border-slate/30 ${highlight ? "bg-slate text-fog" : "bg-background"} p-6`}>
      <div className="flex items-center gap-2 mb-5">
        <span className={`w-2 h-2 ${accent}`} />
        <span className={`font-space-mono text-[11px] uppercase tracking-widest ${highlight ? "text-greptile-green" : "text-slate/60"}`}>[ {title.toUpperCase()} ]</span>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function StatRow({ label, value, unit, inverted }: { label: string; value: string; unit?: string; inverted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-slate/15 pb-2">
      <span className={`font-space-mono text-[10px] uppercase tracking-wider truncate ${inverted ? "text-fog/60" : "text-slate/60"}`}>{label}</span>
      <span className={`font-anybody font-bold text-lg shrink-0 ${inverted ? "text-fog" : "text-slate"}`}>
        {value}
        {unit && <span className={`font-space-mono text-[10px] ml-1 ${inverted ? "text-fog/50" : "text-slate/50"}`}>{unit}</span>}
      </span>
    </div>
  );
}

function BigStat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 ${accent ? "py-2" : "border-b border-dashed border-slate/15 pb-2"}`}>
      <span className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green">{label}</span>
      <span className={`font-anybody font-extrabold text-3xl md:text-4xl tracking-tight ${accent ? "text-fog" : "text-slate"}`}>{value}</span>
    </div>
  );
}

function CompareBar({ label, value, barPct, barColor, sub, highlight }: { label: string; value: string; barPct: number; barColor: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`p-5 ${highlight ? "bg-greptile-green/15 border-2 border-greptile-green" : "border border-dashed border-slate/30 bg-background"}`}>
      <div className="flex items-baseline justify-between mb-2">
        <span className={`font-space-mono text-[10px] uppercase tracking-wider ${highlight ? "text-greptile-green" : "text-slate/60"}`}>{label}</span>
        <span className={`font-anybody font-extrabold text-2xl ${highlight ? "text-greptile-green" : "text-slate"} tracking-tight`}>{value}</span>
      </div>
      <div className="h-3 bg-slate/15 mb-2">
        <div className={`h-full ${barColor}`} style={{ width: `${barPct}%` }} />
      </div>
      {sub && <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">{sub}</div>}
    </div>
  );
}

export default Calculator;
