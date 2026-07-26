"use client";

import { useMemo, useState } from "react";

/* ============================================================
   SCOPE WIZARD — /design/scope
   Layout C: questions left, live scope sheet right.
   Every derived number renders the assumption it was built from.
   Nothing here is a quote. See <ScopeDisclaimer />.
   ============================================================ */

type Opt = { v: string; t: string; d: string };
type Field = { id: string; label: string; type: "text" | "select"; ph?: string; opts?: string[] };

type Question = {
  id: string;
  kicker: string;
  topic: string;
  title: string;
  sub?: string;
  type: "radio" | "chips" | "fields" | "slider" | "result";
  cols?: 1 | 2;
  options?: Opt[];
  chips?: string[];
  fields?: Field[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  def?: number;
  ticks?: string[];
  /** Only shown when the Step-01 path is one of these. */
  paths?: string[];
};

const QUESTIONS: Question[] = [
  {
    id: "path",
    kicker: "Step 01 — Starting point",
    topic: "Starting point",
    title: "Which one is you?",
    sub: "This changes what we ask next. There are no wrong answers, including the last one.",
    type: "radio",
    cols: 1,
    options: [
      { v: "land", t: "I have land or power and want to monetize it", d: "Acreage, an interconnect, a substation, or stranded generation — and no settled plan for what to build on it." },
      { v: "private", t: "I need a private AI cluster for my own company", d: "You are buying GPUs and need the room, power, and cooling designed around them." },
      { v: "retrofit", t: "I have a building to convert", d: "Warehouse, industrial, or legacy telco space that could become high-density compute." },
      { v: "explore", t: "Still figuring it out", d: "You want to understand what is involved before committing to a direction." },
    ],
  },
  {
    id: "tier",
    kicker: "Step 02 — Engagement",
    topic: "Engagement",
    title: "How much of it should we own?",
    sub: "You can change this later. It does not change the scope sheet you get at the end.",
    type: "radio",
    cols: 1,
    options: [
      { v: "design", t: "Design only", d: "Load model, single-line diagrams, rack and cooling layout, redundancy architecture, equipment specs, BOM. You take it to your own contractors." },
      { v: "procure", t: "Design + procurement", d: "Everything above, plus vendor sourcing, negotiation, and lead-time management on the long-pole equipment." },
      { v: "turnkey", t: "Full turnkey", d: "Design, build, commission, hand over keys. We own schedule and integration; you get a running facility." },
      { v: "advise", t: "Advise me", d: "Recommend the right level once we understand the site." },
    ],
  },
  {
    id: "site",
    kicker: "Step 03 — Site",
    topic: "Site",
    title: "Where is it, and do you have it?",
    type: "fields",
    fields: [
      { id: "state", label: "State / region", type: "text", ph: "e.g. Oklahoma" },
      { id: "control", label: "Site control", type: "select", opts: ["Own it outright", "Under contract", "In negotiation", "Still searching"] },
      { id: "shell", label: "Structure", type: "select", opts: ["Greenfield — bare land", "Existing shell, empty", "Operating building", "Not determined"] },
      { id: "area", label: "Usable area (sq ft)", type: "text", ph: "e.g. 12,000" },
      { id: "height", label: "Clear height (ft)", type: "text", ph: "e.g. 22" },
      { id: "water", label: "Water available", type: "select", opts: ["Municipal supply", "Well / on-site", "None", "Unknown"] },
    ],
  },
  {
    id: "structural",
    kicker: "Step 03 — Site",
    topic: "Site",
    title: "What is the existing building working with?",
    sub: "Retrofits live or die on floor loading and floor-to-deck height. Rough numbers are fine.",
    type: "fields",
    paths: ["retrofit"],
    fields: [
      { id: "floorload", label: "Floor loading (lb/sq ft)", type: "text", ph: "e.g. 250 — or 'unknown'" },
      { id: "deck", label: "Floor-to-deck height (ft)", type: "text", ph: "e.g. 18" },
      { id: "existingmep", label: "Existing electrical service", type: "select", opts: ["None usable", "Under 500 kW", "500 kW – 2 MW", "Over 2 MW", "Unknown"] },
      { id: "roof", label: "Roof condition / age", type: "text", ph: "e.g. replaced 2021" },
    ],
  },
  {
    id: "acreage",
    kicker: "Step 03 — Site",
    topic: "Site",
    title: "What do you have on the power side?",
    sub: "For land and power owners, the interconnect is usually the whole schedule.",
    type: "fields",
    paths: ["land"],
    fields: [
      { id: "acres", label: "Acreage", type: "text", ph: "e.g. 30" },
      { id: "interconnect", label: "Interconnect capacity available", type: "select", opts: ["Under 1 MVA", "1 – 5 MVA", "5 – 20 MVA", "Over 20 MVA", "Unknown"] },
      { id: "substation", label: "Distance to substation", type: "text", ph: "e.g. 0.5 miles" },
      { id: "onsitegen", label: "On-site generation", type: "select", opts: ["None", "Solar", "Gas / turbine", "Wind", "Other"] },
    ],
  },
  {
    id: "load",
    kicker: "Step 04 — Power",
    topic: "Power",
    title: "How much IT load are you targeting?",
    sub: "Best guess is fine. This is the single number everything else scales from.",
    type: "slider",
    min: 50,
    max: 20000,
    step: 50,
    def: 1200,
    unit: "kW IT",
    ticks: ["50 kW", "5 MW", "10 MW", "20 MW"],
  },
  {
    id: "utility",
    kicker: "Step 04 — Power",
    topic: "Power",
    title: "What does the utility situation look like?",
    type: "radio",
    cols: 2,
    options: [
      { v: "energized", t: "Energized at capacity", d: "Service already exists at or above the load you need." },
      { v: "partial", t: "Partial service on site", d: "Power is there, but not enough of it." },
      { v: "applied", t: "Application submitted", d: "In the interconnect queue, awaiting study or approval." },
      { v: "none", t: "Nothing yet", d: "No application, no study, no service." },
    ],
  },
  {
    id: "redundancy",
    kicker: "Step 04 — Power",
    topic: "Power",
    title: "How much redundancy do you need?",
    sub: "Redundancy is the biggest single driver of cost. Being honest here saves you money.",
    type: "radio",
    cols: 2,
    options: [
      { v: "n", t: "N — no redundancy", d: "Cheapest. Any failure is an outage. Workable for interruptible batch training." },
      { v: "n1", t: "N+1", d: "One spare of each critical component. Concurrently maintainable. The common choice." },
      { v: "2n", t: "2N — fault tolerant", d: "Two independent everything. Highest cost, highest availability." },
      { v: "advise", t: "Advise me", d: "Recommend based on workload and tenant requirements." },
    ],
  },
  {
    id: "backup",
    kicker: "Step 04 — Power",
    topic: "Power",
    title: "What carries the load when the grid drops?",
    type: "radio",
    cols: 2,
    options: [
      { v: "bess", t: "Battery only", d: "LFP battery energy storage carrying full IT load long enough for orderly checkpointing." },
      { v: "gen", t: "Generator only", d: "Traditional diesel or gas standby with automatic transfer gear." },
      { v: "both", t: "Battery + generator", d: "Batteries bridge the transfer gap; generators carry extended outages." },
      { v: "advise", t: "Advise me", d: "Recommend based on grid quality, workload, and outage tolerance." },
    ],
  },
  {
    id: "ride",
    kicker: "Step 04 — Power",
    topic: "Power",
    title: "How long must you ride through on batteries?",
    sub: "Enough time to checkpoint and shut down gracefully, or enough to keep running?",
    type: "slider",
    min: 5,
    max: 240,
    step: 5,
    def: 15,
    unit: "minutes",
    ticks: ["5 min", "1 hr", "2 hr", "4 hr"],
  },
  {
    id: "density",
    kicker: "Step 05 — Compute",
    topic: "Compute",
    title: "How dense are your racks?",
    sub: "This single number determines whether you can cool with air at all.",
    type: "slider",
    min: 5,
    max: 140,
    step: 5,
    def: 40,
    unit: "kW per rack",
    ticks: ["5 kW", "50 kW", "100 kW", "140 kW"],
  },
  {
    id: "platform",
    kicker: "Step 05 — Compute",
    topic: "Compute",
    title: "What are you putting in them?",
    sub: "Select everything you expect to run. Not decided is a valid answer.",
    type: "chips",
    chips: ["NVIDIA B200", "GB200 NVL72", "H200", "H100", "AMD MI355X", "Cerebras", "Mixed fleet", "Not decided"],
  },
  {
    id: "workload",
    kicker: "Step 05 — Compute",
    topic: "Compute",
    title: "What runs on it?",
    type: "radio",
    cols: 2,
    options: [
      { v: "training", t: "Training", d: "Long jobs, checkpointable, tolerant of scheduled interruption." },
      { v: "inference", t: "Inference / serving", d: "Latency-sensitive, always-on, unforgiving of outages." },
      { v: "mixed", t: "Mixed", d: "Both, on shared infrastructure." },
      { v: "unsure", t: "Not sure yet", d: "Still deciding what the cluster is for." },
    ],
  },
  {
    id: "cooling",
    kicker: "Step 06 — Cooling",
    topic: "Cooling",
    title: "Cooling preference?",
    sub: "If you are not sure, pick advise — we size it from your density.",
    type: "radio",
    cols: 2,
    options: [
      { v: "air", t: "Air cooled", d: "CRAC/CRAH with hot-aisle containment. Practical below roughly 20 kW per rack." },
      { v: "rdhx", t: "Rear-door heat exchangers", d: "Liquid at the rack door. Bridges roughly 20–40 kW per rack without plumbing servers." },
      { v: "dlc", t: "Direct-to-chip liquid", d: "Cold plates on the accelerators. Required in practice above roughly 40 kW per rack." },
      { v: "advise", t: "Advise me", d: "Size it from density, climate, and water availability." },
    ],
  },
  {
    id: "uptime",
    kicker: "Step 07 — Reliability",
    topic: "Reliability",
    title: "What uptime are you committing to?",
    sub: "Committing to an external SLA is a different building than running your own workloads.",
    type: "radio",
    cols: 2,
    options: [
      { v: "best", t: "Best effort", d: "Internal workloads, no external SLA." },
      { v: "999", t: "99.9%", d: "Roughly 8.8 hours of downtime per year." },
      { v: "9998", t: "99.98%", d: "Roughly 1.6 hours per year. Concurrently maintainable." },
      { v: "99995", t: "99.995%", d: "Roughly 26 minutes per year. Fault tolerant." },
    ],
  },
  {
    id: "compliance",
    kicker: "Step 07 — Reliability",
    topic: "Reliability",
    title: "Any compliance or security requirements?",
    sub: "Select all that apply. These change the design early, not late.",
    type: "chips",
    chips: ["SOC 2", "ISO 27001", "HIPAA", "FedRAMP", "NDAA supply chain", "Physical security / mantrap", "None yet"],
  },
  {
    id: "timeline",
    kicker: "Step 08 — Timeline",
    topic: "Timeline",
    title: "When do you need power on?",
    type: "radio",
    cols: 2,
    options: [
      { v: "6", t: "Within 6 months", d: "Aggressive. Realistic only with existing service and a standing building." },
      { v: "12", t: "6–12 months", d: "Tight but achievable on a retrofit with power already in place." },
      { v: "24", t: "12–24 months", d: "Typical for greenfield with an interconnect in progress." },
      { v: "open", t: "No fixed date", d: "Planning ahead, or waiting on funding or offtake." },
    ],
  },
  {
    id: "contact",
    kicker: "Step 09 — Send it",
    topic: "Send it",
    title: "Where do we send your scope sheet?",
    sub: "We send the scope sheet and a short written read on your site. No drip sequence.",
    type: "fields",
    fields: [
      { id: "name", label: "Name", type: "text", ph: "" },
      { id: "company", label: "Company", type: "text", ph: "" },
      { id: "email", label: "Work email", type: "text", ph: "" },
      { id: "phone", label: "Phone (optional)", type: "text", ph: "" },
      { id: "notes", label: "Anything else we should know", type: "text", ph: "Optional" },
    ],
  },
  {
    id: "done",
    kicker: "Complete",
    topic: "Scope sheet",
    title: "Your preliminary scope",
    type: "result",
  },
];

/* ---------------- derivation ---------------- */

const PUE: Record<string, number> = { air: 1.5, rdhx: 1.35, dlc: 1.18 };
const COOL_NAME: Record<string, string> = {
  air: "Air + containment",
  rdhx: "Rear-door HX",
  dlc: "Direct-to-chip liquid",
};
const RED_FACTOR: Record<string, number> = { n: 1.0, n1: 1.25, "2n": 2.0, advise: 1.25 };
const TIER_NAME: Record<string, string> = {
  design: "Design only",
  procure: "Design + procurement",
  turnkey: "Full turnkey",
  advise: "To be recommended",
};

type Answers = Record<string, string | string[] | number | undefined>;

function num(a: Answers, k: string): number | null {
  const v = a[k];
  return typeof v === "number" ? v : null;
}
function str(a: Answers, k: string): string | null {
  const v = a[k];
  return typeof v === "string" && v ? v : null;
}

export type Derived = ReturnType<typeof derive>;

function derive(a: Answers) {
  const it = num(a, "load");
  const density = num(a, "density");
  const ride = num(a, "ride");

  const chosenCooling = str(a, "cooling");
  let cooling: string | null = chosenCooling && chosenCooling !== "advise" ? chosenCooling : null;
  let coolingDerived = false;
  if (!cooling && density) {
    cooling = density < 20 ? "air" : density < 40 ? "rdhx" : "dlc";
    coolingDerived = true;
  }

  const pue = cooling ? PUE[cooling] : null;
  const facility = it && pue ? it * pue : null;

  const redKey = str(a, "redundancy");
  const redundancy = redKey ? RED_FACTOR[redKey] : null;
  const mva = facility && redundancy ? (facility * redundancy) / 0.9 / 1000 : null;

  const racks = it && density ? Math.ceil(it / density) : null;
  const whiteSpace = racks ? racks * 35 : null;
  const footprint = whiteSpace ? Math.round((whiteSpace * 1.9) / 50) * 50 : null;

  const backup = str(a, "backup");
  const usesBess = !backup || backup === "bess" || backup === "both" || backup === "advise";
  const bessKwh = facility && ride && usesBess ? (facility * (ride / 60)) / 0.9 / 0.9 : null;

  const tons = it ? it * 0.2843 : null;

  return { it, density, ride, cooling, coolingDerived, pue, facility, redundancy, mva, racks, footprint, bessKwh, tons };
}

function notes(a: Answers, d: Derived): string[] {
  const out: string[] = [];
  if (d.density) {
    if (d.density >= 40) {
      out.push(
        `At ${d.density} kW per rack, air cooling is not viable. Direct-to-chip liquid with a CDU loop is the practical floor — plan facility water or a dry-cooler loop early, because it drives the site layout rather than following it.`
      );
    } else if (d.density >= 20) {
      out.push(
        `At ${d.density} kW per rack you are past comfortable air. Rear-door heat exchangers keep you under the air ceiling without plumbing the servers themselves.`
      );
    } else {
      out.push(
        `At ${d.density} kW per rack, conventional air with hot-aisle containment is sufficient. Keep a liquid-ready path in the layout if you expect to densify later — retrofitting it costs far more than allowing for it now.`
      );
    }
  }
  if (str(a, "utility") === "none" && d.it && d.it >= 1000) {
    out.push(
      `With no interconnect application filed at ${d.it.toLocaleString("en-US")} kW, the utility study is your critical path. It is routinely the longest lead item on the whole schedule and it does not compress with money.`
    );
  }
  if (str(a, "redundancy") === "2n" && str(a, "uptime") === "best") {
    out.push(
      `You selected 2N redundancy against a best-effort uptime target. That combination is usually overspent — 2N roughly doubles the electrical plant to protect workloads you have said can tolerate interruption. Worth revisiting before it is designed in.`
    );
  }
  if (str(a, "workload") === "inference" && str(a, "redundancy") === "n") {
    out.push(
      `Latency-sensitive serving on an N topology means any single component failure is a customer-visible outage. If you are committing to an external SLA, N+1 is the honest floor.`
    );
  }
  if (str(a, "timeline") === "6" && str(a, "utility") !== "energized") {
    out.push(
      `A six-month power-on target without energized service at capacity is very unlikely. Utility work, long-lead switchgear, and transformer lead times all sit outside anyone's control.`
    );
  }
  if (str(a, "cooling") === "air" && d.density && d.density >= 30) {
    out.push(
      `You selected air cooling at ${d.density} kW per rack. We would push back on that in a design review — the airflow required becomes impractical well before this density.`
    );
  }
  return out;
}

/* ---------------- small helpers ---------------- */

const fmt = (n: number | null, dp = 0) =>
  n == null ? null : n.toLocaleString("en-US", { minimumFractionDigits: dp, maximumFractionDigits: dp });

function loadLabel(v: number) {
  return v >= 1000 ? `${(v / 1000).toFixed(2).replace(/\.00$/, "")} MW IT` : `${fmt(v)} kW IT`;
}

/* ============================================================
   COMPONENT
   ============================================================ */

export default function ScopeWizard() {
  const [answers, setAnswers] = useState<Answers>({});
  const [cur, setCur] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<"idle" | "ok" | "fail">("idle");

  const path = str(answers, "path");
  const steps = useMemo(
    () => QUESTIONS.filter((q) => !q.paths || (path ? q.paths.includes(path) : false)),
    [path]
  );
  const d = derive(answers);
  const advice = notes(answers, d);
  const idx = Math.min(cur, steps.length - 1);
  const q = steps[idx];

  const set = (k: string, v: string | string[] | number) => setAnswers((a) => ({ ...a, [k]: v }));

  const go = (i: number) => {
    setCur(Math.max(0, Math.min(steps.length - 1, i)));
    if (typeof window !== "undefined") {
      const el = document.getElementById("scope-top");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const choose = (id: string, v: string) => {
    set(id, v);
    const here = steps.findIndex((s) => s.id === id);
    window.setTimeout(() => go(here + 1), 140);
  };

  const toggleChip = (id: string, v: string) => {
    const cursel = (answers[id] as string[] | undefined) ?? [];
    set(id, cursel.includes(v) ? cursel.filter((x) => x !== v) : [...cursel, v]);
  };

  const scopeSummary = () => {
    const lines: string[] = [];
    lines.push(`ENGAGEMENT: ${TIER_NAME[str(answers, "tier") ?? ""] ?? "—"}`);
    lines.push(`STARTING POINT: ${str(answers, "path") ?? "—"}`);
    lines.push("");
    lines.push("--- INPUTS ---");
    steps.forEach((s) => {
      if (s.type === "result") return;
      if (s.type === "fields" && s.fields) {
        s.fields.forEach((f) => {
          const v = answers[`${s.id}_${f.id}`];
          if (v) lines.push(`${f.label}: ${v}`);
        });
      } else {
        const v = answers[s.id];
        if (v === undefined) return;
        const label = Array.isArray(v)
          ? v.join(", ")
          : s.type === "radio"
            ? (s.options?.find((o) => o.v === v)?.t ?? String(v))
            : s.type === "slider"
              ? `${v} ${s.unit}`
              : String(v);
        lines.push(`${s.title} ${label}`);
      }
    });
    lines.push("");
    lines.push("--- DERIVED (indicative, not a quote) ---");
    lines.push(`IT load: ${fmt(d.it) ?? "—"} kW`);
    lines.push(`Cooling: ${d.cooling ? COOL_NAME[d.cooling] : "—"}${d.coolingDerived ? " (derived)" : ""}`);
    lines.push(`Facility load: ${fmt(d.facility) ?? "—"} kW at PUE ${d.pue?.toFixed(2) ?? "—"}`);
    lines.push(`Utility service: ${fmt(d.mva, 2) ?? "—"} MVA`);
    lines.push(`Racks: ${fmt(d.racks) ?? "—"}`);
    lines.push(`Heat rejection: ${fmt(d.tons) ?? "—"} tons`);
    lines.push(`BESS energy: ${fmt(d.bessKwh) ?? "—"} kWh`);
    lines.push(`Footprint: ${fmt(d.footprint) ?? "—"} sq ft`);
    if (advice.length) {
      lines.push("");
      lines.push("--- NOTES ---");
      advice.forEach((n) => lines.push(`• ${n}`));
    }
    return lines.join("\n");
  };

  const submit = async () => {
    const name = String(answers["contact_name"] ?? "").trim();
    const email = String(answers["contact_email"] ?? "").trim();
    if (!name || !email.includes("@")) {
      setSent("fail");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: String(answers["contact_company"] ?? ""),
          power: d.it ? `${d.it} kW IT` : "",
          team: "design-build",
          message: `${scopeSummary()}\n\nPhone: ${answers["contact_phone"] ?? "—"}\nNotes: ${answers["contact_notes"] ?? "—"}`,
        }),
      });
      setSent(res.ok ? "ok" : "fail");
    } catch {
      setSent("fail");
    } finally {
      setSending(false);
    }
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent(
      `Design-build scope — ${String(answers["contact_company"] ?? answers["contact_name"] ?? "site")}`
    );
    const body = encodeURIComponent(`${scopeSummary()}\n\n---\nGenerated on smarttec.dev/design/scope\n`);
    return `mailto:hello@smarttec.dev?subject=${subject}&body=${body}`;
  };

  /* ------------- spec rows ------------- */
  const rows: { k: string; v: string | null; a: string }[] = [
    { k: "IT load", v: d.it ? `${fmt(d.it)} kW` : null, a: "your input" },
    {
      k: "Cooling approach",
      v: d.cooling ? COOL_NAME[d.cooling] : null,
      a: d.coolingDerived ? `derived from ${d.density} kW/rack` : "your input",
    },
    { k: "Facility load", v: d.facility ? `${fmt(d.facility)} kW` : null, a: d.pue ? `IT × PUE ${d.pue.toFixed(2)} (design target)` : "" },
    { k: "Utility service", v: d.mva ? `${fmt(d.mva, 2)} MVA` : null, a: d.redundancy ? `facility × ${d.redundancy} redundancy ÷ 0.9 pf` : "" },
    { k: "Rack count", v: d.racks ? `${fmt(d.racks)} racks` : null, a: d.density ? `at ${d.density} kW per rack` : "" },
    { k: "Heat rejection", v: d.tons ? `${fmt(d.tons)} tons` : null, a: "IT kW × 3,412 BTU ÷ 12,000" },
    { k: "BESS energy", v: d.bessKwh ? `${fmt(d.bessKwh)} kWh` : null, a: d.ride ? `${d.ride} min ÷ 0.9 inverter ÷ 0.9 usable DoD` : "" },
    { k: "Footprint", v: d.footprint ? `${fmt(d.footprint)} sq ft` : null, a: d.racks ? "35 sf/rack white space × 1.9 support" : "" },
  ];

  /* ============================================================ */

  return (
    <div id="scope-top" className="relative">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
        {/* ---------------- questions ---------------- */}
        <div className="px-5 sm:px-8 lg:px-12 py-10 lg:py-14 pb-32 lg:pb-20 lg:border-r border-dashed border-slate/25">
          {/* progress spine */}
          <ol className="hidden md:flex flex-wrap gap-x-5 gap-y-2 mb-10 list-none">
            {steps.map((s, i) => {
              const first = steps.findIndex((x) => x.topic === s.topic);
              if (first !== i) return null;
              const last = steps.map((x) => x.topic).lastIndexOf(s.topic);
              const on = idx >= first && idx <= last;
              const done = idx > last;
              return (
                <li key={s.topic}>
                  <button
                    type="button"
                    onClick={() => go(first)}
                    className={`font-space-mono text-[10px] uppercase tracking-widest transition-colors ${
                      on ? "text-slate font-bold border-b-2 border-neon" : done ? "text-slate/55" : "text-slate/30"
                    }`}
                  >
                    {s.topic}
                    {done ? " [✓]" : ""}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* every step stays in the DOM — visibility is CSS only, so crawlers see the whole flow */}
          {steps.map((s, i) => (
            <section key={s.id} className={i === idx ? "block" : "hidden"} aria-hidden={i !== idx}>
              <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-2 h-2 bg-neon" />[ {s.kicker} ]
              </span>
              <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl mb-3">
                {s.title}
              </h2>
              {s.sub && <p className="text-base sm:text-lg text-slate/70 max-w-[62ch] leading-relaxed">{s.sub}</p>}

              <div className="mt-8">
                {/* RADIO */}
                {s.type === "radio" && (
                  <div className={`grid gap-3 ${s.cols === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                    {s.options?.map((o) => {
                      const on = answers[s.id] === o.v;
                      return (
                        <button
                          key={o.v}
                          type="button"
                          onClick={() => choose(s.id, o.v)}
                          className={`text-left border border-dashed p-4 sm:p-5 flex gap-3 items-start transition-colors ${
                            on
                              ? "bg-custom-white border-solid border-slate shadow-[-4px_0_0_0_#DAFF01]"
                              : "bg-fog/60 border-slate/30 hover:bg-custom-white hover:border-slate/60"
                          }`}
                        >
                          <span className="font-space-mono text-xs text-greptile-green shrink-0 pt-0.5">
                            {on ? "[✓]" : "[ ]"}
                          </span>
                          <span>
                            <span className="block font-bold text-[15px] sm:text-base mb-1">{o.t}</span>
                            <span className="block text-[13px] sm:text-sm text-slate/70 leading-relaxed">{o.d}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* CHIPS */}
                {s.type === "chips" && (
                  <div className="flex flex-wrap gap-2.5">
                    {s.chips?.map((c) => {
                      const on = ((answers[s.id] as string[] | undefined) ?? []).includes(c);
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => toggleChip(s.id, c)}
                          className={`font-space-mono text-[11px] uppercase tracking-wider px-4 py-2.5 border transition-colors ${
                            on ? "bg-neon border-slate text-slate font-bold" : "border-dashed border-slate/30 bg-fog/60 text-slate hover:bg-custom-white"
                          }`}
                        >
                          {on ? "✓ " : ""}
                          {c}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* FIELDS */}
                {s.type === "fields" && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {s.fields?.map((f) => {
                      const key = `${s.id}_${f.id}`;
                      const val = String(answers[key] ?? "");
                      return (
                        <div key={f.id}>
                          <label htmlFor={key} className="block font-space-mono text-[10px] uppercase tracking-widest text-slate/65 mb-2">
                            {f.label}
                          </label>
                          {f.type === "select" ? (
                            <select
                              id={key}
                              value={val}
                              onChange={(e) => set(key, e.target.value)}
                              className="w-full px-3.5 py-3 border border-dashed border-slate/30 bg-custom-white text-slate text-[15px] focus:outline-none focus:border-solid focus:border-slate"
                            >
                              <option value="">—</option>
                              {f.opts?.map((o) => (
                                <option key={o} value={o}>
                                  {o}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              id={key}
                              value={val}
                              placeholder={f.ph}
                              onChange={(e) => set(key, e.target.value)}
                              className="w-full px-3.5 py-3 border border-dashed border-slate/30 bg-custom-white text-slate text-[15px] focus:outline-none focus:border-solid focus:border-slate"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* SLIDER */}
                {s.type === "slider" && (
                  <div>
                    <div className="font-anybody font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-none">
                      {s.unit === "kW IT"
                        ? loadLabel(Number(answers[s.id] ?? s.def))
                        : `${fmt(Number(answers[s.id] ?? s.def))} `}
                      {s.unit !== "kW IT" && (
                        <span className="font-space-mono text-sm tracking-widest text-slate/55 align-middle">{s.unit}</span>
                      )}
                    </div>
                    <input
                      type="range"
                      aria-label={s.title}
                      min={s.min}
                      max={s.max}
                      step={s.step}
                      value={Number(answers[s.id] ?? s.def)}
                      onChange={(e) => set(s.id, Number(e.target.value))}
                      className="w-full mt-6 accent-[#0aa96e]"
                    />
                    <div className="flex justify-between font-space-mono text-[10px] text-slate/45 mt-2">
                      {s.ticks?.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* RESULT */}
                {s.type === "result" && (
                  <ScopeResult
                    d={d}
                    advice={advice}
                    tier={TIER_NAME[str(answers, "tier") ?? ""] ?? "—"}
                    sending={sending}
                    sent={sent}
                    onSubmit={submit}
                    mailto={mailtoHref()}
                    onRestart={() => {
                      setAnswers({});
                      setSent("idle");
                      go(0);
                    }}
                  />
                )}
              </div>

              {s.type !== "result" && (
                <div className="flex flex-wrap gap-3 items-center mt-10">
                  {i > 0 && (
                    <button type="button" onClick={() => go(i - 1)} className="btn-hex-outline btn-hex-md !border-slate">
                      ← Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => go(i + 1)}
                    className="btn-hex btn-hex-md !bg-neon !border-neon !text-slate"
                  >
                    {i === steps.length - 2 ? "Generate my scope sheet" : "Continue"} →
                  </button>
                  <span className="font-space-mono text-[11px] tracking-widest text-slate/45 ml-auto">
                    {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                  </span>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* ---------------- live scope sheet ---------------- */}
        <aside
          className={`bg-slate text-fog z-40 lg:sticky lg:top-[6.75rem] lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto
            fixed bottom-0 left-0 right-0 lg:static border-t-2 lg:border-t-0 border-neon
            ${panelOpen ? "max-h-[70vh] overflow-auto" : "max-h-[3.25rem] overflow-hidden"} lg:max-h-none`}
        >
          {/* mobile toggle bar */}
          <button
            type="button"
            onClick={() => setPanelOpen((v) => !v)}
            className="lg:hidden w-full flex items-center gap-3 px-4 h-[3.25rem] text-left"
            aria-expanded={panelOpen}
          >
            <span className="font-space-mono text-[10px] uppercase tracking-widest text-fog/60">Live scope</span>
            <span className="font-anybody font-bold text-base">{d.facility ? `${fmt(d.facility)} kW facility` : "— kW"}</span>
            <span className="ml-auto font-space-mono text-[10px] text-neon">{panelOpen ? "[ CLOSE ]" : "[ OPEN ]"}</span>
          </button>

          <div className="px-5 lg:px-6 pb-7 pt-1 lg:pt-7">
            <span className="hidden lg:inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-neon mb-3">
              <span className="w-2 h-2 bg-neon" />[ Preliminary scope ]
            </span>
            <h2 className="hidden lg:block font-anybody font-extrabold uppercase tracking-tight text-base mb-1">Live scope sheet</h2>
            <p className="hidden lg:block font-space-mono text-[10px] text-fog/45 leading-relaxed mb-5">
              Updates as you answer. Nothing here is a quote.
            </p>

            <dl className="m-0">
              {rows.map((r) => (
                <div key={r.k} className="flex justify-between items-baseline gap-3 py-2.5 border-b border-dashed border-fog/15">
                  <dt className="font-space-mono text-[10px] uppercase tracking-widest text-fog/55">{r.k}</dt>
                  <dd className="text-right m-0">
                    <span className={r.v ? "font-anybody font-bold text-lg" : "font-space-mono text-[11px] text-fog/25"}>
                      {r.v ?? "awaiting input"}
                    </span>
                    {r.v && r.a && (
                      <span className="block font-space-mono text-[9px] text-fog/40 leading-snug mt-0.5">{r.a}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {advice.length > 0 && (
              <div className="mt-5 bg-fog/[0.07] border-l-2 border-neon p-3.5">
                <div className="font-space-mono text-[10px] uppercase tracking-widest text-fog/55 mb-2">Notes on your inputs</div>
                {advice.map((n) => (
                  <p key={n} className="text-[13px] leading-relaxed text-fog/90 mb-2 last:mb-0">
                    {n}
                  </p>
                ))}
              </div>
            )}

            <p className="mt-5 border border-dashed border-neon/50 p-3 font-space-mono text-[10px] leading-relaxed text-neon">
              Indicative planning estimate. Not a quote, not a design.
              <br />
              Requires engineering validation and licensed PE sign-off before use.
              <br />
              <a href="/legal/engineering-disclaimer" className="underline">
                Full disclaimer →
              </a>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ============================================================
   RESULT
   ============================================================ */

function ScopeResult({
  d,
  advice,
  tier,
  sending,
  sent,
  onSubmit,
  mailto,
  onRestart,
}: {
  d: Derived;
  advice: string[];
  tier: string;
  sending: boolean;
  sent: "idle" | "ok" | "fail";
  onSubmit: () => void;
  mailto: string;
  onRestart: () => void;
}) {
  const cells: { k: string; v: string }[] = [
    { k: "Utility service", v: d.mva ? `${fmt(d.mva, 2)} MVA` : "—" },
    { k: "BESS energy", v: d.bessKwh ? `${fmt(d.bessKwh)} kWh` : "—" },
    { k: "Heat rejection", v: d.tons ? `${fmt(d.tons)} tons` : "—" },
    { k: "Cooling", v: d.cooling ? COOL_NAME[d.cooling] : "—" },
    { k: "Footprint", v: d.footprint ? `${fmt(d.footprint)} sq ft` : "—" },
    { k: "Design PUE", v: d.pue ? d.pue.toFixed(2) : "—" },
  ];

  return (
    <div className="border border-dashed border-slate/50 bg-custom-white p-6 sm:p-8">
      <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
        <span className="w-2 h-2 bg-greptile-green" />[ Preliminary · not a quote ]
      </span>
      <h3 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-2xl sm:text-3xl mb-3">
        {d.facility ? `${fmt(d.facility)} kW facility load` : "Scope"}
        {d.racks ? ` · ${d.racks} racks` : ""}
      </h3>
      <p className="text-slate/75 max-w-[62ch] leading-relaxed">
        Engagement: <strong>{tier}</strong>. Every figure below is derived from your inputs using the assumption printed
        next to it. Hand it to your engineer and check our arithmetic — that is the point of showing it.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate/20 mt-7">
        {cells.map((c) => (
          <div key={c.k} className="bg-custom-white p-4">
            <div className="font-space-mono text-[10px] uppercase tracking-widest text-slate/55 mb-1.5">{c.k}</div>
            <div className="font-anybody font-extrabold text-xl sm:text-2xl tracking-tight">{c.v}</div>
          </div>
        ))}
      </div>

      {advice.length > 0 && (
        <div className="mt-7">
          <div className="font-space-mono text-[10px] uppercase tracking-widest text-slate/55 mb-3">
            What we would raise in a design review
          </div>
          <ul className="list-none m-0 space-y-3">
            {advice.map((n) => (
              <li key={n} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="font-space-mono text-greptile-green shrink-0">[!]</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-7 border border-dashed border-slate bg-neon/15 p-4 font-space-mono text-[11px] leading-relaxed">
        <strong>WHAT THIS IS NOT.</strong> This is an indicative planning estimate generated from a short questionnaire.
        It is not a design, not a quote, and not an engineering deliverable. Actual requirements depend on site survey,
        utility study, AHJ review, equipment selection, and real load profile. Nothing here is valid for construction or
        procurement without licensed PE sign-off. Your use of this tool is governed by our{" "}
        <a href="/legal/engineering-disclaimer" className="underline">
          Engineering &amp; Scope Tool Disclaimer
        </a>{" "}
        and{" "}
        <a href="/legal/terms" className="underline">
          Terms of Use
        </a>
        .
      </div>

      <div className="flex flex-wrap gap-3 items-center mt-7">
        <button
          type="button"
          onClick={onSubmit}
          disabled={sending || sent === "ok"}
          className="btn-hex btn-hex-md !bg-neon !border-neon !text-slate disabled:opacity-50"
        >
          {sent === "ok" ? "Sent ✓" : sending ? "Sending…" : "Send me this scope sheet"}
        </button>
        <a href={mailto} className="btn-hex-outline btn-hex-md !border-slate">
          Email it to us instead
        </a>
        <button type="button" onClick={onRestart} className="btn-hex-outline btn-hex-md !border-slate">
          Start over
        </button>
      </div>

      {sent === "ok" && (
        <p className="mt-4 font-space-mono text-[11px] text-greptile-green">
          Received. We will come back with a written read on your site.
        </p>
      )}
      {sent === "fail" && (
        <p className="mt-4 font-space-mono text-[11px] text-bloom">
          That did not send. Check your name and work email above, or use{" "}
          <a href={mailto} className="underline">
            email it to us instead
          </a>
          .
        </p>
      )}
    </div>
  );
}
