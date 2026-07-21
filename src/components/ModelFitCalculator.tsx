"use client";

import { useMemo, useState } from "react";
import { generateFitCheckPdf } from "@/components/generateFitCheckPdf";
import {
  fleetRecommendations,
  type FleetOption,
  MODELS,
  GPUS,
  QUANTS,
  ModelSpec,
  GpuSpec,
  QuantId,
  modelVRAM,
  kvCacheGB,
  totalVRAM,
  maxConcurrentSeqs,
  estimatedTokensPerSec,
  recommendedTensorParallel,
  generateDeployCommand,
  usableVRAM,
} from "@/lib/models";

// Sparky mini — same mascot style as the homepage
function SparkyMini({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect x="6" y="6" width="46" height="52" rx="6" stroke="currentColor" strokeWidth="3" fill="#3D3B4F" />
      <rect x="14" y="14" width="30" height="36" rx="2" fill="#28E99F" />
      <path d="M22 22 L26 32 L22 32 L30 46 L26 36 L30 36 Z" fill="#3D3B4F" />
      <rect x="38" y="22" width="8" height="14" rx="1" fill="#28E99F" />
    </svg>
  );
}

// Label chip — same mono green style as elsewhere
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green">
      <span className="inline-block w-2 h-2 bg-greptile-green" />
      {children}
    </div>
  );
}

// Field wrapper
function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">{label}</span>
        {hint && <span className="font-space-mono text-[9px] text-slate/40">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

// Custom dropdown that matches the calculator's tone
function Select<T extends string>({
  value,
  options,
  onChange,
  formatLabel,
}: {
  value: T;
  options: { id: T; label: string }[];
  onChange: (v: T) => void;
  formatLabel?: (opt: { id: T; label: string }) => string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full appearance-none bg-background border border-dashed border-slate/40 px-3 py-2.5 pr-8 font-anybody font-bold text-slate focus:outline-none focus:border-greptile-green cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {formatLabel ? formatLabel(o) : o.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate/60 font-space-mono text-xs">▼</span>
    </div>
  );
}

// Slider with live value display
function NumSlider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  unit,
  formatValue,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  unit?: string;
  formatValue?: (v: number) => string;
}) {
  const display = formatValue ? formatValue(value) : `${value}${unit || ""}`;
  return (
    <Field label={label}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-anybody font-bold text-2xl text-slate tracking-tight">{display}</span>
        {unit && <span className="font-space-mono text-[10px] text-slate/50">{unit}</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-slate/20 appearance-none cursor-pointer accent-greptile-green"
      />
      <div className="flex justify-between mt-1 font-space-mono text-[9px] text-slate/40">
        <span>{formatValue ? formatValue(min) : `${min}${unit || ""}`}</span>
        <span>{formatValue ? formatValue(max) : `${max}${unit || ""}`}</span>
      </div>
    </Field>
  );
}

export default function ModelFitCalculator() {
  const [modelId, setModelId] = useState("llama-3.1-70b");
  const [gpuId, setGpuId] = useState("H100");
  const [quantId, setQuantId] = useState<QuantId>("fp8");
  const [seqLen, setSeqLen] = useState(4096);
  const [batchSize, setBatchSize] = useState(4);
  const [copied, setCopied] = useState(false);
  const [exportEmail, setExportEmail] = useState("");
  const [exportStatus, setExportStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const model = useMemo(() => MODELS.find((m) => m.id === modelId)!, [modelId]);
  const gpu = useMemo(() => GPUS.find((g) => g.id === gpuId)!, [gpuId]);
  const quant = useMemo(() => QUANTS.find((q) => q.id === quantId)!, [quantId]);

  const result = useMemo(() => {
    const weightsGB = modelVRAM(model, quant.bytesPerParam);
    const kvGB = kvCacheGB(model, seqLen, batchSize, 2);
    const totalGB = totalVRAM(model, quant.bytesPerParam, seqLen, batchSize);
    const usable = usableVRAM(gpu.vram_gb);
    // Fit: at least one sequence + weights must fit within utilization headroom.
    const minFor1Seq = weightsGB + kvCacheGB(model, seqLen, 1, 2);
    const fits = minFor1Seq <= usable;
    const maxSeq = maxConcurrentSeqs(model, quant.bytesPerParam, gpu.vram_gb, seqLen);
    const tps = estimatedTokensPerSec(model, gpu, batchSize, seqLen);
    const tp = recommendedTensorParallel(model, quant.bytesPerParam, gpu, seqLen);
    const fleet = fleetRecommendations(model, quant.bytesPerParam, seqLen, batchSize);
    const cmd = generateDeployCommand(model, gpu, quant.bytesPerParam, tp, seqLen);
    return { weightsGB, kvGB, totalGB, fits, usable, minFor1Seq, maxSeq, tps, tp, cmd, fleet };
  }, [model, gpu, quant, seqLen, batchSize]);

  const onCopy = () => {
    navigator.clipboard.writeText(result.cmd).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="grid lg:grid-cols-[420px_1fr] gap-0 border border-dashed border-slate/30 bg-background">
      {/* ───── LEFT: Inputs ───── */}
      <div className="p-6 md:p-8 space-y-7 border-b lg:border-b-0 lg:border-r border-dashed border-slate/30">
        <div className="space-y-2">
          <SectionLabel>1 · Pick your model</SectionLabel>
          <Select
            value={modelId}
            onChange={setModelId}
            options={MODELS.map((m) => ({ id: m.id, label: `${m.family} ${m.name}` }))}
            formatLabel={(o) => {
              const m = MODELS.find((x) => x.id === o.id)!;
              return `${m.family} ${m.name} (${m.params_b}B${m.is_moe ? " MoE" : ""})`;
            }}
          />
          <p className="font-space-mono text-[10px] text-slate/50 leading-relaxed pt-1">
            {model.blurb}
          </p>
        </div>

        <div className="space-y-2">
          <SectionLabel>2 · Pick your GPU</SectionLabel>
          <Select
            value={gpuId}
            onChange={setGpuId}
            options={GPUS.map((g) => ({ id: g.id, label: g.label }))}
          />
          <p className="font-space-mono text-[10px] text-slate/50 leading-relaxed pt-1">
            {gpu.notes} · {gpu.vram_gb} GB VRAM · {gpu.bf16_tflops.toLocaleString()} BF16 TFLOPS · {gpu.mem_bw_gbps.toLocaleString()} GB/s BW
          </p>
        </div>

        <div className="space-y-2">
          <SectionLabel>3 · Quantization</SectionLabel>
          <Select
            value={quantId}
            onChange={(v) => setQuantId(v as QuantId)}
            options={QUANTS.map((q) => ({ id: q.id, label: q.label }))}
          />
          <p className="font-space-mono text-[10px] text-slate/50 leading-relaxed pt-1">
            {quant.blurb}
          </p>
        </div>

        <div className="space-y-4">
          <SectionLabel>4 · Sequence length & batch</SectionLabel>
          <NumSlider
            label="Context length"
            min={512}
            max={Math.min(model.context_window, 131072)}
            step={512}
            value={seqLen}
            onChange={setSeqLen}
            formatValue={(v) => v >= 1024 ? `${(v / 1024).toFixed(0)}k` : `${v}`}
          />
          <NumSlider
            label="Concurrent sequences"
            min={1}
            max={Math.max(result.maxSeq || 1, 64)}
            step={1}
            value={Math.min(batchSize, result.maxSeq || 1)}
            onChange={setBatchSize}
            unit="seq"
          />
        </div>
      </div>

      {/* ───── RIGHT: Output ───── */}
      <div className="p-6 md:p-8 space-y-8 bg-fog/40">
        {/* Fit status hero */}
        <div className={`border ${result.fits ? "border-greptile-green bg-greptile-green/10" : "border-red-400 bg-red-50"} p-6`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-1">
                VRAM fit
              </div>
              <div className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight">
                {result.fits ? "✓ Fits on 1 GPU" : "✗ Doesn't fit on 1 GPU"}
              </div>
              <div className="font-space-mono text-[11px] text-slate/70 mt-1">
                {result.totalGB.toFixed(1)} GB used ({result.minFor1Seq.toFixed(1)} GB at 1 seq) of {gpu.vram_gb} GB total · {result.usable.toFixed(1)} GB usable
              </div>
            </div>
            <SparkyMini size={48} />
          </div>

          {/* VRAM bar */}
          <div className="mt-4 h-2 bg-slate/15 relative overflow-hidden">
            <div
              className={`h-full ${result.fits ? "bg-greptile-green" : "bg-red-400"} transition-all duration-300`}
              style={{ width: `${Math.min((result.minFor1Seq / gpu.vram_gb) * 100, 100)}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 font-space-mono text-[10px] text-slate/50">
            <span>0 GB</span>
            <span className="text-greptile-green">{result.usable.toFixed(0)} GB usable</span>
            <span>{gpu.vram_gb} GB ({gpu.id})</span>
          </div>
        </div>

        {/* Memory breakdown */}
        <div className="space-y-3">
          <SectionLabel>Memory breakdown</SectionLabel>
          <div className="space-y-2">
            <div className="flex items-baseline justify-between border-b border-dashed border-slate/15 pb-2">
              <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Model weights ({quant.label.split(" ")[0]})</span>
              <span className="font-anybody font-bold text-lg text-slate">{result.weightsGB.toFixed(1)} GB</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-dashed border-slate/15 pb-2">
              <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">KV cache ({batchSize} × {seqLen >= 1024 ? `${(seqLen / 1024).toFixed(0)}k` : seqLen})</span>
              <span className="font-anybody font-bold text-lg text-slate">{result.kvGB.toFixed(1)} GB</span>
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <span className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green">Total</span>
              <span className="font-anybody font-extrabold text-2xl text-greptile-green">{result.totalGB.toFixed(1)} GB</span>
            </div>
          </div>
        </div>

        {/* Performance stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-dashed border-slate/30 p-4 bg-background">
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-1">Est. throughput</div>
            <div className="font-anybody font-extrabold text-2xl text-slate">{result.fits ? Math.round(result.tps).toLocaleString() : "—"}</div>
            <div className="font-space-mono text-[9px] text-slate/50">tokens / sec</div>
          </div>
          <div className="border border-dashed border-slate/30 p-4 bg-background">
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-1">Max concurrent</div>
            <div className="font-anybody font-extrabold text-2xl text-slate">{result.maxSeq}</div>
            <div className="font-space-mono text-[9px] text-slate/50">sequences @ {seqLen >= 1024 ? `${(seqLen / 1024).toFixed(0)}k` : seqLen} ctx</div>
          </div>
        </div>

        {/* Fleet auto-config: best deployable configuration across all GPUs */}
        <div className="border border-dashed border-greptile-green/60 bg-greptile-green/5 p-4">
          <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mb-2">
            Auto-config · best way to run this model
          </div>
          <div className="space-y-1.5">
            {result.fleet.map((o: FleetOption, i: number) => {
              const fastest = result.fleet.reduce((a: FleetOption, b: FleetOption) => (b.tps > a.tps ? b : a));
              return (
                <div key={o.gpu.id} className={`flex flex-wrap items-baseline justify-between gap-x-3 px-3 py-2 ${i === 0 ? "bg-greptile-green/15 border border-greptile-green/50" : "bg-background/60 border border-dashed border-slate/20"}`}>
                  <div className="font-anybody font-bold text-slate text-sm">
                    {o.count}× {o.gpu.id}
                    {i === 0 && <span className="font-space-mono text-[9px] text-greptile-green ml-2">[✓ BEST VALUE]</span>}
                    {o.gpu.id === fastest.gpu.id && i !== 0 && <span className="font-space-mono text-[9px] text-slate/50 ml-2">[FASTEST]</span>}
                  </div>
                  <div className="font-space-mono text-[10px] text-slate/70">
                    ${o.monthly.toLocaleString()}/mo · ~{Math.round(o.tps).toLocaleString()} tok/s · {Math.round(o.capacityGB)} GB capacity
                  </div>
                </div>
              );
            })}
          </div>
          <div className="font-space-mono text-[9px] text-slate/50 mt-2">
            Counts rounded to deployable tensor-parallel sizes (2/4/8 per node, then whole nodes). GB200 NVL72 shown for scale reference (Phase-1 fleet: B200 / H-class + CS-3). Cerebras CS-3 billed per token. AMD MI455X selectable above for Phase 2/3 fit exploration — priced configs publish at OEM availability.
          </div>
        </div>

        {/* Deploy command */}
        <div className="space-y-2">
          <SectionLabel>Deploy command</SectionLabel>
          <div className="relative">
            <pre className="bg-slate text-fog p-4 font-mono text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap break-all">
              {result.cmd}
            </pre>
            <button
              onClick={onCopy}
              className="absolute top-2 right-2 bg-greptile-green text-slate font-space-mono text-[10px] uppercase tracking-wider px-3 py-1.5 hover:bg-greptile-green/80 transition-colors"
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <p className="font-space-mono text-[10px] text-slate/50">
            Tensor-parallel = {result.tp}. Adjust {`--max-model-len`} and {`--gpu-memory-utilization`} for your batch / latency tradeoff.
          </p>
        </div>

        {/* Export: print / save PDF + email */}
        <div className="border border-dashed border-slate/40 bg-fog/50 p-4">
          <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-3">
            [ Export this fit-check ]
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                const doc = generateFitCheckPdf({
                  model, gpu, quantLabel: quant.label, seqLen, batchSize,
                  weightsGB: result.weightsGB, kvGB: result.kvGB, totalGB: result.totalGB,
                  fits: result.fits, maxSeq: result.maxSeq, tps: result.tps,
                  fleet: result.fleet, cmd: result.cmd,
                });
                doc.save(`smarttec-fit-${model.id}.pdf`);
              }}
              className="inline-flex items-center justify-center gap-2 bg-slate text-fog font-space-mono text-[11px] uppercase tracking-wider px-4 py-2.5 hover:bg-slate/85 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-greptile-green" /> Download / Print PDF
            </button>
            <div className="flex flex-1 gap-2">
              <input
                type="email"
                value={exportEmail}
                onChange={(e) => { setExportEmail(e.target.value); if (exportStatus !== "idle") setExportStatus("idle"); }}
                placeholder="you@company.com"
                className="flex-1 min-w-0 bg-background border border-dashed border-slate/40 px-3 py-2 font-space-mono text-[11px] text-slate focus:outline-none focus:border-greptile-green"
              />
              <button
                disabled={exportStatus === "sending" || !exportEmail.includes("@")}
                onClick={async () => {
                  setExportStatus("sending");
                  try {
                    const doc = generateFitCheckPdf({
                      model, gpu, quantLabel: quant.label, seqLen, batchSize,
                      weightsGB: result.weightsGB, kvGB: result.kvGB, totalGB: result.totalGB,
                      fits: result.fits, maxSeq: result.maxSeq, tps: result.tps,
                      fleet: result.fleet, cmd: result.cmd,
                    });
                    const pdfBase64 = doc.output("datauristring").split(",")[1];
                    const best = result.fleet[0];
                    const text = `Your SmartTec fit-check\n\nModel: ${model.family} ${model.name} (${model.params_b}B)\nQuantization: ${quant.label}\nContext x batch: ${seqLen} x ${batchSize}\nTotal memory: ${result.totalGB.toFixed(1)} GB\nBest configuration: ${best.count}x ${best.gpu.id} — $${best.monthly.toLocaleString()}/mo, ~${Math.round(best.tps).toLocaleString()} tok/s\n\nFull one-pager attached.`;
                    const r = await fetch("/api/email-config", {
                      method: "POST", headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: exportEmail, subject: `SmartTec fit-check: ${model.family} ${model.name}`, text, pdfBase64 }),
                    });
                    setExportStatus(r.ok ? "sent" : "error");
                  } catch { setExportStatus("error"); }
                }}
                className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-4 py-2.5 hover:bg-greptile-green/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {exportStatus === "sending" ? "Sending…" : "Email me this"}
              </button>
            </div>
          </div>
          {exportStatus === "sent" && (
            <p className="font-space-mono text-[10px] text-greptile-green mt-2">[ Sent — check your inbox. PDF attached. ]</p>
          )}
          {exportStatus === "error" && (
            <p className="font-space-mono text-[10px] text-bloom mt-2">[ Couldn&apos;t send — download the PDF above or email hello@smarttec.dev ]</p>
          )}
        </div>
      </div>
    </div>
  );
}
