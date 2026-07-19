import jsPDF from "jspdf";

interface CalculatorConfig {
  workload: "training" | "inference";
  chip: string;
  qty: number;
  util: number;
  hrsPerDay: number;
  region: string;
  strategy: "smarttec" | "grid";
}

interface CalculatorResults {
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
  smarttecOnlyPowerMonthly: number;
  gridOnlyPowerMonthly: number;
}

const CHIP_BLURBS: Record<string, string> = {
  H100: "Hopper · 80GB HBM3 · workhorse training/inference",
  H200: "Hopper refresh · 141GB HBM3e · dense inference",
  B200: "Blackwell · 192GB HBM3e · next-gen training",
  GB200: "Grace Blackwell · rack-scale supercomputer",
  "CS-3": "Cerebras CS-3 · wafer-scale · fastest inference",
};

const REGION_NAMES: Record<string, string> = {
  "us-avg": "US average",
  pjm: "PJM (Mid-Atlantic)",
  ercot: "ERCOT (Texas)",
  caiso: "CAISO (California)",
};

const COLORS = {
  slate: "#3D3B4F",
  fog: "#EEEEEE",
  greptileGreen: "#28E99F",
  white: "#FFFFFF",
  text: "#3D3B4F",
  textMuted: "#6B6A78",
  divider: "#D4D4D4",
};

export function generateCalculatorPdf(config: CalculatorConfig, results: CalculatorResults) {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;

  // ===== PAGE 1 =====

  // Header band (greptile-green)
  doc.setFillColor(COLORS.greptileGreen);
  doc.rect(0, 0, pageWidth, 8, "F");

  // Logo wordmark (manual text since SVG can't be embedded easily)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(COLORS.slate);
  doc.text("Smart", margin, 50);
  doc.setTextColor(COLORS.greptileGreen);
  doc.text("Tec", margin + doc.getTextWidth("Smart"), 50);

  // Battery mark to the right of wordmark
  doc.setFillColor(COLORS.slate);
  doc.roundedRect(margin + 92, 34, 18, 22, 2, 2, "F");
  doc.setFillColor(COLORS.greptileGreen);
  doc.roundedRect(margin + 95, 37, 12, 16, 1.5, 1.5, "F");
  doc.setFillColor(COLORS.slate);
  doc.rect(margin + 99, 39, 4, 12, "F");

  // Subtitle: "Compute economics · generated ..."
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(COLORS.textMuted);
  const generated = new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" });
  doc.text(`COMPUTE ECONOMICS · GENERATED ${generated.toUpperCase()}`, margin + 120, 50);

  // Headline
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(COLORS.slate);
  doc.text("Your compute economics.", margin, 100);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(COLORS.textMuted);
  doc.text(
    `${config.qty} × ${config.chip} running ${config.hrsPerDay}h/day at ${config.util}% utilization, in ${REGION_NAMES[config.region] || config.region}, on ${config.strategy === "smarttec" ? "SmartTec (behind-the-meter)" : "grid-tied"} power.`,
    margin,
    122,
    { maxWidth: contentWidth }
  );

  // ===== Configuration block =====
  let y = 156;
  drawSectionHeader(doc, margin, y, "CONFIGURATION");
  y += 22;

  const configRows: [string, string][] = [
    ["Workload", config.workload === "training" ? "Training" : "Inference"],
    ["GPU / chip", `${config.chip} — ${CHIP_BLURBS[config.chip] || ""}`],
    ["Quantity", `${config.qty} units`],
    ["Utilization", `${config.util}%`],
    ["Hours per day", `${config.hrsPerDay} h`],
    ["Region", `${REGION_NAMES[config.region] || config.region}`],
    ["Power strategy", config.strategy === "smarttec" ? "SmartTec (behind-the-meter)" : "Grid-tied (retail electricity)"],
  ];
  y = drawKeyValueRows(doc, margin, y, contentWidth, configRows);

  // ===== Compute output =====
  y += 24;
  drawSectionHeader(doc, margin, y, "COMPUTE OUTPUT");
  y += 22;
  const computeRows: [string, string][] = [
    ["GPU-hours / month", formatNum(results.gpuHours) + " hr"],
    [config.workload === "training" ? "Training throughput" : "Inference throughput", config.workload === "inference" ? formatNum(results.tokens / (config.hrsPerDay * 30 * 3600)) + " tok/s" : formatNum(results.gpuHours / 170) + " T-tokens / mo"],
    [config.workload === "inference" ? "Total tokens served" : "Effective training tokens", config.workload === "inference" ? (results.tokens / 1e9).toFixed(2) + "B tok" : (results.gpuHours / 170).toFixed(1) + "T tok"],
  ];
  y = drawKeyValueRows(doc, margin, y, contentWidth, computeRows);

  // ===== Power =====
  y += 24;
  drawSectionHeader(doc, margin, y, "POWER");
  y += 22;
  const powerRows: [string, string][] = [
    ["Average draw", formatMw(results.avgPowerMW)],
    ["Peak draw", formatMw(results.peakPowerMW)],
    ["z1power battery needed", formatMw(results.batteryMW)],
    ["Battery autonomy at peak", results.batteryAutonomyHrs.toFixed(1) + " hrs"],
  ];
  y = drawKeyValueRows(doc, margin, y, contentWidth, powerRows);

  // ===== Economics =====
  y += 24;
  drawSectionHeader(doc, margin, y, "ECONOMICS");
  y += 22;

  // Highlighted revenue + margin box
  doc.setFillColor(COLORS.slate);
  doc.rect(margin, y, contentWidth, 76, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(COLORS.greptileGreen);
  doc.text("REVENUE / MONTH", margin + 16, y + 20);
  doc.setFontSize(20);
  doc.setTextColor(COLORS.white);
  doc.text("$" + formatNum(results.revenueMonthly), margin + 16, y + 46);

  doc.setFontSize(10);
  doc.setTextColor(COLORS.greptileGreen);
  doc.text("MARGIN / MONTH", margin + 16 + contentWidth / 2, y + 20);
  doc.setFontSize(20);
  doc.setTextColor(COLORS.white);
  doc.text("$" + formatNum(results.marginMonthly), margin + 16 + contentWidth / 2, y + 46);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(COLORS.fog);
  doc.text("Power cost / month: $" + formatNum(results.powerMonthly) + " · Margin: " + results.marginPct.toFixed(1) + "%", margin + 16, y + 66);
  y += 92;

  // ===== Resilience =====
  drawSectionHeader(doc, margin, y, "RESILIENCE & SUSTAINABILITY");
  y += 22;
  const resilienceRows: [string, string][] = [
    ["Outage hours protected / yr", results.outagesProtected.toFixed(1) + " hrs"],
    ["CO₂ avoided / yr", results.co2AvoidedTons.toFixed(0) + " tons"],
    ["Tokens per watt", formatNum(results.tokensPerWatt)],
  ];
  y = drawKeyValueRows(doc, margin, y, contentWidth, resilienceRows);

  // ===== Footer (page 1) =====
  drawFooter(doc, pageWidth, pageHeight, 1);

  // ===== PAGE 2 — SmartTec Advantage + Assumptions =====
  doc.addPage();
  y = margin + 16;

  // THE BIG COMPARISON
  doc.setFillColor(225, 248, 237);
  doc.setDrawColor(COLORS.greptileGreen);
  doc.setLineWidth(2);
  doc.rect(margin, y, contentWidth, 130, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(COLORS.greptileGreen);
  doc.text("THE SMARTTEC ADVANTAGE", margin + 14, y + 22);

  doc.setFontSize(20);
  doc.setTextColor(COLORS.slate);
  doc.text("What you'd save going behind the meter.", margin + 14, y + 46);

  // 3 mini stat boxes
  const boxW = (contentWidth - 28 - 16) / 3;
  const boxY = y + 70;
  drawMiniStat(doc, margin + 14, boxY, boxW, "SmartTec", "$" + formatNum(results.smarttecOnlyPowerMonthly) + " / mo", "behind-the-meter");
  drawMiniStat(doc, margin + 14 + boxW + 8, boxY, boxW, "Grid-tied", "$" + formatNum(results.gridOnlyPowerMonthly) + " / mo", "retail electricity");
  drawMiniStat(doc, margin + 14 + (boxW + 8) * 2, boxY, boxW, "Annual savings", "$" + formatNum(results.annualSavings, true), "by switching", true);

  y += 152;

  drawSectionHeader(doc, margin, y, "ASSUMPTIONS & METHODOLOGY");
  y += 26;

  const assumptions = [
    {
      title: "Compute rates",
      body: "GPU-hour rates reflect June 2026 retail market rates across major cloud providers (CoreWeave, Lambda, AWS, GCP range). Cerebras CS-3 inference is billed per 1K tokens at Cerebras Cloud list rate. SmartTec design-partner pricing is typically 20–40% below list — contact partners@smarttec.dev for locked launch pricing on your specific configuration.",
    },
    {
      title: "Power consumption",
      body: "TDP values are spec-sheet, not measured. Server overhead includes cooling, networking, and auxiliary loads at industry typical 30–35% (Cerebras CS-3 is closer to 10% due to integrated design). SmartTec power cost assumes 55% off-peak / 45% on-peak charging arbitrage plus ~15% demand-charge savings versus a grid-tied baseline.",
    },
    {
      title: "Resilience",
      body: "Outage hours per year per region are estimates from public ISO/RTO reliability reports. 'Outage hours protected' assumes SmartTec sub-10ms battery failover prevents any customer-visible downtime. Real-world incident counts vary; SmartTec commits to a 99.997% power-availability SLA at power-on.",
    },
    {
      title: "Environmental",
      body: "CO₂ figures use regional grid mix emissions factors (EPA eGRID / IEA equivalents). SmartTec charging from the grid still has some carbon; we model ~30% reduction via arbitrage away from peak gas peakers. Specific emissions factors for your region available on request.",
    },
    {
      title: "Cerebras throughput",
      body: "CS-3 inference throughput (~50,000 tok/s at 70B FP16) is from Cerebras published benchmarks on dense transformer models. Real-world throughput depends on model architecture, batch size, and sequence length.",
    },
  ];

  for (const a of assumptions) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(COLORS.slate);
    doc.text(a.title, margin, y);
    y += 14;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(COLORS.textMuted);
    const lines = doc.splitTextToSize(a.body, contentWidth);
    doc.text(lines, margin, y + 4);
    y += lines.length * 12 + 18;
  }

  // Next steps box
  y += 8;
  doc.setFillColor(225, 248, 237); // same light green tint
  doc.setDrawColor(COLORS.greptileGreen);
  doc.setLineWidth(1);
  doc.rect(margin, y, contentWidth, 100, "FD");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(COLORS.greptileGreen);
  doc.text("NEXT STEPS", margin + 14, y + 22);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(COLORS.slate);
  doc.text("1. Send this PDF to partners@smarttec.dev to lock launch pricing for this exact configuration.", margin + 14, y + 44);
  doc.text("2. We'll scope the z1power battery build, GPU allocation, and network requirements.", margin + 14, y + 60);
  doc.text("3. Power-on target: Q4 2026. Three design-partner slots open.", margin + 14, y + 76);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.greptileGreen);
  doc.text("smarttec.io/contact →", margin + 14, y + 92);

  drawFooter(doc, pageWidth, pageHeight, 2);

  // Save
  const filename = `smarttec-compute-economics-${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(filename);
}

// ===== helper functions =====

function drawSectionHeader(doc: jsPDF, x: number, y: number, label: string) {
  // Small accent square + label
  doc.setFillColor(COLORS.greptileGreen);
  doc.rect(x, y - 8, 6, 6, "F");
  doc.setFont("courier", "bold");
  doc.setFontSize(9);
  doc.setTextColor(COLORS.textMuted);
  doc.text(`[ ${label} ]`, x + 12, y - 2);
}

function drawKeyValueRows(doc: jsPDF, x: number, y: number, w: number, rows: [string, string][]): number {
  for (const [key, value] of rows) {
    // Divider line above
    doc.setDrawColor(COLORS.divider);
    doc.setLineWidth(0.3);
    doc.line(x, y, x + w, y);
    y += 16;

    // Key (left, small mono uppercase)
    doc.setFont("courier", "bold");
    doc.setFontSize(8);
    doc.setTextColor(COLORS.textMuted);
    doc.text(key.toUpperCase(), x, y);

    // Value (right, big bold)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(COLORS.slate);
    const valueWidth = doc.getTextWidth(value);
    doc.text(value, x + w - valueWidth, y);

    y += 6;
  }
  return y + 6;
}

function drawMiniStat(doc: jsPDF, x: number, y: number, w: number, label: string, value: string, sub: string, highlight = false) {
  // Box background
  if (highlight) {
    doc.setFillColor(COLORS.greptileGreen);
    doc.setDrawColor(COLORS.greptileGreen);
  } else {
    doc.setFillColor(COLORS.white);
    doc.setDrawColor(COLORS.divider);
  }
  doc.setLineWidth(0.5);
  doc.rect(x, y, w, 44, "FD");

  // Label
  doc.setFont("courier", "bold");
  doc.setFontSize(8);
  doc.setTextColor(highlight ? COLORS.slate : COLORS.textMuted);
  doc.text(label.toUpperCase(), x + 8, y + 12);

  // Value
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(highlight ? COLORS.slate : COLORS.slate);
  doc.text(value, x + 8, y + 28);

  // Sub
  doc.setFont("courier", "bold");
  doc.setFontSize(7);
  doc.setTextColor(highlight ? COLORS.slate : COLORS.textMuted);
  doc.text(sub.toUpperCase(), x + 8, y + 38);
}

function drawFooter(doc: jsPDF, pageWidth: number, pageHeight: number, pageNum: number) {
  const footerY = pageHeight - 28;
  doc.setDrawColor(COLORS.divider);
  doc.setLineWidth(0.3);
  doc.line(48, footerY - 8, pageWidth - 48, footerY - 8);

  doc.setFont("courier", "bold");
  doc.setFontSize(8);
  doc.setTextColor(COLORS.textMuted);
  doc.text("SMARTTEC.IO/CALCULATOR · NOT A QUOTE · CONFIRM PRICING WITH PARTNERS@SMARTTEC.IO", 48, footerY);
  doc.text(`PAGE ${pageNum} OF 2`, pageWidth - 48 - 40, footerY);
}

function formatNum(n: number, abbr = false): string {
  if (!isFinite(n)) return "—";
  if (abbr) {
    if (Math.abs(n) >= 1e9) return (n / 1e9).toFixed(1) + "B";
    if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(1) + "M";
    if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(1) + "K";
    return n.toFixed(0);
  }
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function formatMw(n: number): string {
  if (!isFinite(n)) return "—";
  if (n >= 1) return n.toFixed(1) + " MW";
  return (n * 1000).toFixed(0) + " kW";
}
