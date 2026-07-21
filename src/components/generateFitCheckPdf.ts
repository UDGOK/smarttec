import jsPDF from "jspdf";
import type { ModelSpec, GpuSpec, FleetOption } from "@/lib/models";

export interface FitCheckExport {
  model: ModelSpec;
  gpu: GpuSpec;
  quantLabel: string;
  seqLen: number;
  batchSize: number;
  weightsGB: number;
  kvGB: number;
  totalGB: number;
  fits: boolean;
  maxSeq: number;
  tps: number;
  fleet: FleetOption[];
  cmd: string;
}

const SLATE: [number, number, number] = [61, 59, 79];
const GREEN: [number, number, number] = [40, 233, 159];
const GRAY: [number, number, number] = [130, 128, 145];

export function generateFitCheckPdf(x: FitCheckExport): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210;
  let y = 0;

  // Header band
  doc.setFillColor(...SLATE);
  doc.rect(0, 0, W, 26, "F");
  doc.setFillColor(...GREEN);
  doc.rect(0, 0, 3, 26, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("courier", "bold");
  doc.setFontSize(9);
  doc.text("SMARTTEC.DEV  ·  INFERENCE FIT-CHECK", 10, 10);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(`${x.model.family} ${x.model.name}`, 10, 20);
  doc.setFont("courier", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...GREEN);
  doc.text(new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }), W - 10, 10, { align: "right" });
  y = 36;

  const label = (t: string) => {
    doc.setFont("courier", "bold"); doc.setFontSize(8); doc.setTextColor(...GRAY);
    doc.text(`[ ${t.toUpperCase()} ]`, 10, y); y += 6;
  };
  const row = (k: string, v: string, strong = false) => {
    doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...SLATE);
    doc.text(k, 10, y);
    doc.setFont("helvetica", strong ? "bold" : "normal");
    doc.text(v, W - 10, y, { align: "right" });
    doc.setDrawColor(210, 210, 216); doc.setLineDashPattern([1, 1.5], 0);
    doc.line(10, y + 2, W - 10, y + 2);
    y += 7;
  };

  label("Configuration");
  row("Model", `${x.model.family} ${x.model.name} — ${x.model.params_b}B params${x.model.active_params_b ? ` (${x.model.active_params_b}B active MoE)` : ""}`);
  row("Selected GPU", x.gpu.label);
  row("Quantization", x.quantLabel);
  row("Context x batch", `${x.seqLen.toLocaleString()} tokens x ${x.batchSize} seq`);
  y += 3;

  label("Memory");
  row("Model weights", `${x.weightsGB.toFixed(1)} GB`);
  row("KV cache", `${x.kvGB.toFixed(1)} GB`);
  row("Total required", `${x.totalGB.toFixed(1)} GB`, true);
  row(`Fits on 1x ${x.gpu.id}`, x.fits ? `YES — up to ${x.maxSeq} concurrent seq, ~${Math.round(x.tps)} tok/s` : "NO — see configurations below", true);
  y += 3;

  label("Recommended configurations (cheapest first)");
  x.fleet.forEach((o, i) => {
    if (i === 0) {
      doc.setFillColor(234, 252, 244);
      doc.rect(8, y - 4.5, W - 16, 7, "F");
      doc.setFillColor(...GREEN); doc.rect(8, y - 4.5, 1.5, 7, "F");
    }
    doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...SLATE);
    doc.text(`${o.count}x ${o.gpu.id}${i === 0 ? "   [BEST VALUE]" : ""}`, 10, y);
    doc.setFont("courier", "normal"); doc.setFontSize(8.5);
    doc.text(`$${o.monthly.toLocaleString()}/mo  ·  ~${Math.round(o.tps).toLocaleString()} tok/s  ·  ${Math.round(o.capacityGB)} GB`, W - 10, y, { align: "right" });
    y += 7;
  });
  doc.setFont("courier", "normal"); doc.setFontSize(7); doc.setTextColor(...GRAY);
  doc.text("Counts rounded to deployable tensor-parallel sizes. GB200 NVL72 for scale reference. Cerebras CS-3 billed per token.", 10, y);
  y += 8;

  label("Deploy command (vLLM)");
  doc.setFillColor(...SLATE);
  const cmdLines = doc.splitTextToSize(x.cmd, 180);
  const boxH = cmdLines.length * 3.6 + 6;
  doc.rect(10, y - 3, W - 20, boxH, "F");
  doc.setFont("courier", "normal"); doc.setFontSize(7.5); doc.setTextColor(220, 255, 240);
  doc.text(cmdLines, 13, y + 1.5);
  y += boxH + 6;

  // Footer
  doc.setDrawColor(...SLATE); doc.setLineDashPattern([], 0); doc.setLineWidth(0.6);
  doc.line(10, 275, W - 10, 275);
  doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(...SLATE);
  doc.text("SmartTec — battery-backed AI compute · Mead, Oklahoma", 10, 281);
  doc.setFont("courier", "normal"); doc.setFontSize(7.5); doc.setTextColor(...GRAY);
  doc.text("hello@smarttec.dev  ·  smarttec.dev/pricing  ·  Estimates, not a quote — real quote in 48h from a scope call.", 10, 286);
  return doc;
}
