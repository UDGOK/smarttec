"use client";

import { useMemo, useState } from "react";
import { GPUS } from "@/lib/models";

interface FleetRow {
  id: string;
  gpuId: string;
  qty: number;
}

// Per-GPU smartTec launch pricing (the price SmartTec charges for on-demand
// capacity). These track the GPU market on-demand rate but apply a
// design-partner discount of ~25% baked in. So the "cost to rent from
// SmartTec" line reflects what a customer pays, not SmartTec's own cost.
const SMARTEC_HOURLY: Record<string, number> = {
  H100: 1.80, // SmartTec launch rate (vs market $2.40)
  H200: 2.40, // vs market $3.20
  B200: 3.60, // vs market $4.80
  GB200: 4.80, // vs market $6.40
  "CS-3": 0.03, // per 1K tokens, but expressed as $/hr-equivalent for inference fleet
};

// What SmartTec charges customers per GPU-hour on the customer side.
// This is the "you could rent it for" number — what the customer
// pays for SmartTec compute.
const CUSTOMER_HOURLY: Record<string, number> = {
  H100: 2.40,
  H200: 3.20,
  B200: 4.80,
  GB200: 6.40,
  "CS-3": 0.04,
};

// Power draw per GPU when running inference at typical load (~70% TDP).
const POWER_KW: Record<string, number> = {
  H100: 0.70,
  H200: 0.70,
  B200: 1.20,
  GB200: 1.20,
  "CS-3": 25.0, // entire CS-3 system at 25 kW
};

// Approximate tokens/sec per GPU at typical inference (FP8 batch 8, 4k ctx).
const TOKENS_PER_SEC: Record<string, number> = {
  H100: 1800,
  H200: 2800,
  B200: 5500,
  GB200: 18000, // per rack (NVL72)
  "CS-3": 18000, // per system
};

// Suggested end-customer billing if you resell compute on SmartTec's fabric.
// Modeled as SmartTec launch + 25% margin = ~1.33x of base.
const RESELLER_HOURLY: Record<string, number> = {
  H100: 2.40, // sell at SmartTec's market rate
  H200: 3.20,
  B200: 4.80,
  GB200: 6.40,
  "CS-3": 0.04,
};

const fmtMoney = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 10_000) return `$${(n / 1000).toFixed(1)}K`;
  return `$${Math.round(n).toLocaleString()}`;
};

const fmtNum = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 10_000) return `${(n / 1000).toFixed(1)}K`;
  return Math.round(n).toLocaleString();
};

export function FleetBuilder() {
  const [rows, setRows] = useState<FleetRow[]>([
    { id: "1", gpuId: "H100", qty: 8 },
    { id: "2", gpuId: "H200", qty: 8 },
  ]);
  const [hoursPerMonth, setHoursPerMonth] = useState(730); // 24/7 default

  const addRow = () => {
    const newId = String(rows.length + 1);
    setRows((r) => [...r, { id: newId, gpuId: "B200", qty: 1 }]);
  };

  const removeRow = (id: string) => {
    setRows((r) => r.filter((row) => row.id !== id));
  };

  const updateRow = (id: string, field: keyof FleetRow, value: string | number) => {
    setRows((r) => r.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const totals = useMemo(() => {
    let totalGpus = 0;
    let totalVram = 0;
    let totalPowerKw = 0;
    let totalTokensPerSec = 0;
    let smarttecCostPerMonth = 0;
    let customerRevenuePerMonth = 0;
    let resellerRevenuePerMonth = 0;

    rows.forEach((row) => {
      const gpu = GPUS.find((g) => g.id === row.gpuId);
      if (!gpu) return;
      const qty = row.qty;
      totalGpus += qty;
      totalVram += gpu.vram_gb * qty;
      totalPowerKw += (POWER_KW[gpu.id] || 1) * qty;
      totalTokensPerSec += (TOKENS_PER_SEC[gpu.id] || 0) * qty;
      const smartecHr = SMARTEC_HOURLY[gpu.id] || 0;
      const customerHr = CUSTOMER_HOURLY[gpu.id] || 0;
      const resellerHr = RESELLER_HOURLY[gpu.id] || 0;
      smarttecCostPerMonth += smartecHr * qty * hoursPerMonth;
      customerRevenuePerMonth += customerHr * qty * hoursPerMonth;
      resellerRevenuePerMonth += resellerHr * qty * hoursPerMonth;
    });

    const margin = customerRevenuePerMonth - smarttecCostPerMonth;
    const marginPct = customerRevenuePerMonth > 0 ? (margin / customerRevenuePerMonth) * 100 : 0;
    const tokensPerMonth = totalTokensPerSec * 3600 * hoursPerMonth;

    return {
      totalGpus,
      totalVram,
      totalPowerKw,
      totalTokensPerSec,
      smarttecCostPerMonth,
      customerRevenuePerMonth,
      resellerRevenuePerMonth,
      margin,
      marginPct,
      tokensPerMonth,
    };
  }, [rows, hoursPerMonth]);

  return (
    <div className="border border-dashed border-slate/30 bg-background">
      {/* Header */}
      <div className="border-b border-dashed border-slate/30 px-5 md:px-7 py-4 flex items-center justify-between gap-4 bg-fog/30">
        <div className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green">
          [ FLEET BUILDER · MULTI-SERVER COST ]
        </div>
        <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/55 hidden md:block">
          {rows.length} {rows.length === 1 ? "row" : "rows"} · {fmtNum(totals.totalGpus)} GPUs · {fmtNum(totals.totalPowerKw)} kW
        </div>
      </div>

      {/* Hours slider */}
      <div className="px-5 md:px-7 py-4 border-b border-dashed border-slate/30 bg-fog/10">
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">
            Hours / month
          </span>
          <span className="font-anybody font-extrabold text-2xl text-slate tabular-nums">
            {hoursPerMonth}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={730}
          step={1}
          value={hoursPerMonth}
          onChange={(e) => setHoursPerMonth(Number(e.target.value))}
          className="w-full h-1 bg-slate/20 appearance-none cursor-pointer accent-greptile-green"
        />
        <div className="flex justify-between mt-1 font-space-mono text-[9px] uppercase tracking-wider text-slate/45">
          <span>1 hr burst</span>
          <span>24/7 (730)</span>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-dashed divide-slate/20">
        {rows.map((row) => {
          const gpu = GPUS.find((g) => g.id === row.gpuId);
          if (!gpu) return null;
          const rowCost = (SMARTEC_HOURLY[gpu.id] || 0) * row.qty * hoursPerMonth;
          const rowRev = (CUSTOMER_HOURLY[gpu.id] || 0) * row.qty * hoursPerMonth;
          const rowMargin = rowRev - rowCost;
          const rowTokensPerSec = (TOKENS_PER_SEC[gpu.id] || 0) * row.qty;
          const rowPowerKw = (POWER_KW[gpu.id] || 0) * row.qty;
          return (
            <div key={row.id} className="px-5 md:px-7 py-4 grid grid-cols-12 gap-3 items-center hover:bg-fog/30">
              <div className="col-span-12 md:col-span-3">
                <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
                  GPU
                </div>
                <select
                  value={row.gpuId}
                  onChange={(e) => updateRow(row.id, "gpuId", e.target.value)}
                  className="w-full appearance-none bg-background border border-dashed border-slate/40 px-3 py-2 font-anybody font-bold text-sm text-slate focus:outline-none focus:border-greptile-green cursor-pointer"
                >
                  {GPUS.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-4 md:col-span-2">
                <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
                  Quantity
                </div>
                <input
                  type="number"
                  min={1}
                  max={999}
                  value={row.qty}
                  onChange={(e) => updateRow(row.id, "qty", Math.max(1, Number(e.target.value) || 1))}
                  className="w-full bg-background border border-dashed border-slate/40 px-3 py-2 font-anybody font-bold text-lg text-slate focus:outline-none focus:border-greptile-green tabular-nums"
                />
              </div>

              <div className="col-span-4 md:col-span-2">
                <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
                  VRAM total
                </div>
                <div className="font-anybody font-bold text-lg text-slate tabular-nums">
                  {fmtNum(gpu.vram_gb * row.qty)} GB
                </div>
              </div>

              <div className="col-span-4 md:col-span-2">
                <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
                  tok/s
                </div>
                <div className="font-anybody font-bold text-lg text-slate tabular-nums">
                  {fmtNum(rowTokensPerSec)}
                </div>
              </div>

              <div className="col-span-8 md:col-span-2">
                <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
                  Run cost · {hoursPerMonth}h
                </div>
                <div className="font-anybody font-bold text-lg text-slate tabular-nums">
                  {fmtMoney(rowCost)}
                </div>
              </div>

              <div className="col-span-3 md:col-span-1 flex justify-end">
                <button
                  onClick={() => removeRow(row.id)}
                  disabled={rows.length === 1}
                  className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Remove row"
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add row */}
      <div className="px-5 md:px-7 py-3 border-t border-dashed border-slate/30 bg-fog/20">
        <button
          onClick={addRow}
          className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green hover:text-slate hover:bg-greptile-green transition-colors border border-dashed border-greptile-green px-3 py-2"
        >
          + Add server row
        </button>
      </div>

      {/* Totals + Rent-it-for */}
      <div className="border-t-4 border-dashed border-slate/40 bg-fog/40 px-5 md:px-7 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Run cost */}
          <div className="border border-dashed border-slate/30 bg-background p-5">
            <div className="flex items-center gap-2 font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2">
              <span className="inline-block w-1.5 h-1.5 bg-slate" />
              Cost to run on SmartTec
            </div>
            <div className="font-anybody font-extrabold text-4xl md:text-5xl text-slate tracking-tight tabular-nums">
              {fmtMoney(totals.smarttecCostPerMonth)}
            </div>
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/55 mt-2">
              {hoursPerMonth}h × {fmtNum(totals.totalGpus)} GPUs · SmartTec launch
            </div>
          </div>

          {/* Rent it for (customer revenue) */}
          <div className="border border-dashed border-slate/30 bg-background p-5">
            <div className="flex items-center gap-2 font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2">
              <span className="inline-block w-1.5 h-1.5 bg-greptile-green" />
              You could rent it for
            </div>
            <div className="font-anybody font-extrabold text-4xl md:text-5xl text-greptile-green tracking-tight tabular-nums">
              {fmtMoney(totals.customerRevenuePerMonth)}
            </div>
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/55 mt-2">
              On-demand retail · {fmtNum(totals.tokensPerMonth)} tok/mo
            </div>
          </div>

          {/* Margin */}
          <div className="border border-dashed border-greptile-green bg-greptile-green/10 p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-1 bg-greptile-green text-slate font-space-mono text-[9px] uppercase tracking-wider font-bold">
              MARGIN
            </div>
            <div className="flex items-center gap-2 font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mb-2">
              <span className="inline-block w-1.5 h-1.5 bg-greptile-green" />
              Gross margin
            </div>
            <div className="font-anybody font-extrabold text-4xl md:text-5xl text-slate tracking-tight tabular-nums">
              {fmtMoney(totals.margin)}
            </div>
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mt-2 font-bold">
              {totals.marginPct.toFixed(1)}% margin · {fmtNum(totals.totalPowerKw)} kW
            </div>
          </div>
        </div>

        {/* Detail strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-dashed border-slate/30">
          <div>
            <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/55 mb-1">
              Total GPUs
            </div>
            <div className="font-anybody font-bold text-lg text-slate tabular-nums">{fmtNum(totals.totalGpus)}</div>
          </div>
          <div>
            <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/55 mb-1">
              Total VRAM
            </div>
            <div className="font-anybody font-bold text-lg text-slate tabular-nums">{fmtNum(totals.totalVram)} GB</div>
          </div>
          <div>
            <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/55 mb-1">
              Peak power
            </div>
            <div className="font-anybody font-bold text-lg text-slate tabular-nums">{fmtNum(totals.totalPowerKw)} kW</div>
          </div>
          <div>
            <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/55 mb-1">
              Tokens / sec
            </div>
            <div className="font-anybody font-bold text-lg text-slate tabular-nums">{fmtNum(totals.totalTokensPerSec)}</div>
          </div>
        </div>
      </div>

      {/* Use case hints */}
      <div className="border-t border-dashed border-slate/30 px-5 md:px-7 py-5 bg-background">
        <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/55 mb-3">
          What this fleet fits
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border border-dashed border-slate/30 bg-fog/30 p-3">
            <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
              Training jobs
            </div>
            <div className="font-anybody text-sm text-slate/80">
              {totals.totalVram >= 500_000
                ? "✓ Frontier-scale (Llama 405B, DeepSeek V3 full)"
                : totals.totalVram >= 80_000
                ? "✓ Mid-scale (Llama 70B class)"
                : "✓ Small / fine-tuning workloads"}
            </div>
          </div>
          <div className="border border-dashed border-slate/30 bg-fog/30 p-3">
            <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
              Concurrent users
            </div>
            <div className="font-anybody text-sm text-slate/80">
              {fmtNum(Math.floor(totals.totalTokensPerSec / 30))} sustained users
              <span className="block text-[10px] text-slate/50 font-space-mono uppercase tracking-wider mt-0.5">
                ~30 tok/s per user
              </span>
            </div>
          </div>
          <div className="border border-dashed border-slate/30 bg-fog/30 p-3">
            <div className="font-space-mono text-[9px] uppercase tracking-wider text-slate/50 mb-1">
              Power
            </div>
            <div className="font-anybody text-sm text-slate/80">
              {fmtNum(totals.totalPowerKw)} kW · behind-the-meter
              <span className="block text-[10px] text-slate/50 font-space-mono uppercase tracking-wider mt-0.5">
                Sub-10ms failover · no grid queue
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-dashed border-slate/30 px-5 md:px-7 py-5 bg-fog/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/55">
          Design-partner pricing locks launch rates 12 months · Q4 2026 power-on
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-greptile-green/85 transition-colors whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 bg-slate" />
          Get fixed quote →
        </a>
      </div>
    </div>
  );
}

export default FleetBuilder;
