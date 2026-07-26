"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ============================================================
   STATUS CONSOLE — /status
   A full operations console for the Mead site.

   TRUTH NOTE: SmartTec is pre-power-on. There is no live telemetry to
   show and we will not invent any. This console runs in PREVIEW mode on
   synthetic data, labelled as such everywhere it could possibly be
   mistaken for real, and it doubles as a demonstration of what AURA
   will publish from commissioning onward. LIVE mode is deliberately
   empty until the site is energised.

   PERFORMANCE: one 1000 ms interval drives every number on the page.
   The interval is suspended when the tab is hidden and never starts
   under prefers-reduced-motion. All continuous motion is CSS on
   transform / stroke-dashoffset.
   ============================================================ */

/* 30-second demonstration cycle. Weighted so the failover is long enough
   to actually watch: 14 s normal, 8 s on battery, 4 s retransfer, 4 s normal. */
const CYCLE = 30;
const FAULT_AT = 14;
const RESTORE_AT = 22;
const NORMAL_AT = 26;

type Phase = "normal" | "fault" | "restored";
function phaseAt(t: number): Phase {
  const s = t % CYCLE;
  if (s < FAULT_AT) return "normal";
  if (s < RESTORE_AT) return "fault";
  if (s < NORMAL_AT) return "restored";
  return "normal";
}

/* deterministic pseudo-noise so first paint matches on server and client */
function noise(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x); // 0..1
}

type Metric = {
  id: string;
  group: string;
  label: string;
  unit: string;
  base: number;
  swing: number;
  decimals?: number;
  /** value while the grid is down */
  faultValue?: (base: number) => number;
  /** subsystem goes amber/red during the fault window */
  faultState?: "degraded" | "offline";
  detail: string;
};

const METRICS: Metric[] = [
  { id: "grid", group: "Utility", label: "Grid feed", unit: "kV", base: 12.47, swing: 0.06, decimals: 2, faultValue: () => 0, faultState: "offline", detail: "12.47 kV primary · 3 MVA on-site transformer" },
  { id: "xfmr", group: "Utility", label: "Transformer load", unit: "%", base: 4.3, swing: 0.4, decimals: 1, faultValue: () => 0, faultState: "offline", detail: "Phase 1 draws a fraction of installed capacity" },
  { id: "soc", group: "Storage", label: "BESS state of charge", unit: "%", base: 97.4, swing: 0.35, decimals: 1, faultValue: (b) => b - 1.6, detail: "z1power LFP · float-charged from grid" },
  { id: "bessOut", group: "Storage", label: "BESS output", unit: "kW", base: 0, swing: 0, faultValue: () => 131, detail: "Zero during normal operation · carries full load on fault" },
  { id: "cell", group: "Storage", label: "Cell temperature", unit: "°C", base: 24.6, swing: 0.5, decimals: 1, detail: "Max cell delta held under 2 °C by design" },
  { id: "ups", group: "Power path", label: "UPS output", unit: "kW", base: 131, swing: 2.4, detail: "Double-conversion · no break on transfer" },
  { id: "pdu", group: "Power path", label: "PDU A / B balance", unit: "%", base: 50.2, swing: 1.1, decimals: 1, detail: "Dual-corded racks · balanced across both feeds" },
  { id: "pf", group: "Utility", label: "Power factor", unit: "", base: 0.98, swing: 0.01, decimals: 2, detail: "Measured at the service entrance" },
  { id: "it", group: "Compute", label: "IT load", unit: "kW", base: 110, swing: 3.5, detail: "30× NVIDIA B200 · Phase 1 design load" },
  { id: "gpu", group: "Compute", label: "GPU utilisation", unit: "%", base: 78, swing: 9, detail: "Fleet mean across all allocated nodes" },
  { id: "nodes", group: "Compute", label: "Nodes healthy", unit: "/ 4", base: 4, swing: 0, detail: "8-GPU HGX nodes reporting healthy" },
  { id: "supply", group: "Thermal", label: "Coolant supply", unit: "°C", base: 18.2, swing: 0.4, decimals: 1, detail: "Direct-to-chip loop · CDU controlled" },
  { id: "return", group: "Thermal", label: "Coolant return", unit: "°C", base: 31.8, swing: 0.7, decimals: 1, detail: "Delta-T held in band by CDU modulation" },
  { id: "pue", group: "Thermal", label: "PUE (rolling)", unit: "", base: 1.19, swing: 0.02, decimals: 2, detail: "Design target 1.18 · validated at commissioning" },
  { id: "fiber", group: "Network & control", label: "Fibre throughput", unit: "Gbps", base: 41.6, swing: 12, decimals: 1, detail: "100G symmetrical dedicated · Dobson" },
  { id: "latency", group: "Network & control", label: "Edge latency", unit: "ms", base: 7.4, swing: 1.2, decimals: 1, detail: "To nearest peering point" },
  { id: "aura", group: "Network & control", label: "AURA decisions", unit: "/ min", base: 340, swing: 60, detail: "Power and workload orchestration events" },
  { id: "transfer", group: "Power path", label: "Last transfer time", unit: "ms", base: 8.4, swing: 1.1, decimals: 1, detail: "Grid-to-battery · design target under 10 ms" },
];

const GROUPS = ["Utility", "Storage", "Power path", "Compute", "Thermal", "Network & control"];

const HISTORY = 34;

export default function StatusConsole() {
  const [mode, setMode] = useState<"preview" | "live">("preview");
  const [tick, setTick] = useState(0);
  const [offset, setOffset] = useState(0);
  const [reduced, setReduced] = useState(false);
  const seriesRef = useRef<Record<string, number[]>>({});

  /* one timer for the whole page */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    let id: number | undefined;
    const start = () => {
      if (id === undefined) id = window.setInterval(() => setTick((t) => t + 1), 1000);
    };
    const stop = () => {
      if (id !== undefined) {
        window.clearInterval(id);
        id = undefined;
      }
    };
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    start();
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const clock = tick + offset;
  const phase: Phase = reduced ? "normal" : phaseAt(clock);
  const live = mode === "live";

  /* jump the demonstration clock to the start of the fault window */
  const replayFailover = () => setOffset((o) => o + ((FAULT_AT - ((tick + o) % CYCLE) + CYCLE) % CYCLE));
  const secondsToFault = (FAULT_AT - (clock % CYCLE) + CYCLE) % CYCLE;

  /* compute current values + push history */
  const values = useMemo(() => {
    const out: Record<string, number> = {};
    METRICS.forEach((m, i) => {
      let v: number;
      if (phase === "fault" && m.faultValue) v = m.faultValue(m.base);
      else v = m.base + (noise(clock * 3.7 + i * 11.3) - 0.5) * 2 * m.swing;
      out[m.id] = v;
      const s = seriesRef.current[m.id] ?? Array.from({ length: HISTORY }, (_, k) => m.base + (noise(k * 5.1 + i * 7.7) - 0.5) * 2 * m.swing);
      s.push(v);
      if (s.length > HISTORY) s.shift();
      seriesRef.current[m.id] = s;
    });
    return out;
  }, [clock, phase]);

  const fmt = (m: Metric, v: number) => (m.decimals ? v.toFixed(m.decimals) : Math.round(v).toLocaleString("en-US"));

  return (
    <div className="bg-slate text-fog">
      {/* ---------- mode banner ---------- */}
      <div className="border-b-2 border-neon">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2.5 font-space-mono text-[11px] uppercase tracking-widest text-neon">
            <span className="w-2 h-2 bg-neon status-blink" />
            {live ? "[ Live telemetry ]" : "[ Preview · simulated data ]"}
          </span>
          <p className="font-space-mono text-[11px] text-fog/60 leading-relaxed max-w-[70ch]">
            {live
              ? "No live telemetry yet. The Mead site is not energised. This view populates at power-on."
              : "This is a demonstration running on synthetic data, not a live feed. It shows exactly what this page will publish once the Mead site is energised — target Q4 2026."}
          </p>
          <div className="ml-auto flex border border-fog/25">
            {(["preview", "live"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`font-space-mono text-[10px] uppercase tracking-widest px-3.5 py-2 transition-colors ${
                  mode === m ? "bg-neon text-slate font-bold" : "text-fog/70 hover:text-fog"
                }`}
              >
                {m === "preview" ? "Preview" : "Live"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {live ? <LiveEmpty /> : (
        <>
          <PowerFlow phase={phase} reduced={reduced} onReplay={replayFailover} secondsToFault={secondsToFault} />

          {/* ---------- subsystem tiles ---------- */}
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-14">
            {GROUPS.map((g) => (
              <section key={g} className="mt-10 first:mt-0">
                <h3 className="font-space-mono text-[10px] uppercase tracking-widest text-fog/45 mb-3 flex items-center gap-3">
                  <span>{g}</span>
                  <span className="flex-1 h-px bg-fog/15" />
                </h3>
                <div className="grid gap-px bg-fog/10 sm:grid-cols-2 lg:grid-cols-3">
                  {METRICS.filter((m) => m.group === g).map((m) => {
                    const bad = phase === "fault" && m.faultState;
                    return (
                      <div key={m.id} className="bg-slate p-5 relative overflow-hidden">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <span className="font-space-mono text-[10px] uppercase tracking-widest text-fog/55">{m.label}</span>
                          <span
                            className={`w-2 h-2 shrink-0 mt-0.5 ${
                              bad === "offline" ? "bg-bloom" : bad === "degraded" ? "bg-neon" : "bg-greptile-green status-blink"
                            }`}
                          />
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className={`font-anybody font-extrabold text-3xl tracking-tight tabular-nums ${
                              bad === "offline" ? "text-bloom" : m.id === "bessOut" && phase === "fault" ? "text-neon" : "text-fog"
                            }`}
                          >
                            {fmt(m, values[m.id] ?? m.base)}
                          </span>
                          {m.unit && <span className="font-space-mono text-[11px] text-fog/45">{m.unit}</span>}
                        </div>
                        <Spark points={seriesRef.current[m.id] ?? []} bad={!!bad} />
                        <p className="font-space-mono text-[9.5px] text-fog/35 leading-relaxed mt-2">{m.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <TelemetryFeed tick={clock} phase={phase} />
        </>
      )}
    </div>
  );
}

/* ============================================================
   SPARKLINE
   ============================================================ */
function Spark({ points, bad }: { points: number[]; bad: boolean }) {
  if (points.length < 2) return <div className="h-8 mt-2" />;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const d = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${28 - ((p - min) / range) * 24 - 2}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="w-full h-8 mt-2 overflow-visible" aria-hidden="true">
      <polyline
        points={d}
        fill="none"
        stroke={bad ? "#FF6D6D" : "#28E99F"}
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   POWER FLOW — animated single-line
   ============================================================ */
function PowerFlow({
  phase,
  reduced,
  onReplay,
  secondsToFault,
}: {
  phase: Phase;
  reduced: boolean;
  onReplay: () => void;
  secondsToFault: number;
}) {
  const gridDown = phase === "fault";
  const onBattery = phase === "fault";
  const restoring = phase === "restored";

  const flow = (active: boolean, reverse = false, speed = "1.6s") =>
    ({
      strokeDasharray: "7 9",
      animation: reduced || !active ? "none" : `flow ${speed} linear infinite${reverse ? " reverse" : ""}`,
      opacity: active ? 1 : 0.18,
    }) as React.CSSProperties;

  const NODES: { x: number; y: number; w: number; label: string; sub: string; state: "ok" | "down" | "hot" }[] = [
    { x: 20, y: 118, w: 128, label: "GRID", sub: "12.47 kV", state: gridDown ? "down" : "ok" },
    { x: 196, y: 118, w: 140, label: "TRANSFORMER", sub: "3 MVA", state: gridDown ? "down" : "ok" },
    { x: 384, y: 118, w: 118, label: "ATS", sub: onBattery ? "ON BATTERY" : restoring ? "TRANSFER" : "UTILITY", state: onBattery ? "hot" : "ok" },
    { x: 550, y: 118, w: 118, label: "UPS", sub: "131 kW", state: "ok" },
    { x: 716, y: 118, w: 128, label: "PDU A / B", sub: "dual feed", state: "ok" },
    { x: 892, y: 118, w: 168, label: "GPU RACKS", sub: "30× B200 · 110 kW", state: "ok" },
    { x: 355, y: 268, w: 176, label: "z1power BESS", sub: onBattery ? "DISCHARGING" : "FLOAT", state: onBattery ? "hot" : "ok" },
  ];

  return (
    <div className="border-b border-fog/15">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <span className="font-space-mono text-[10px] uppercase tracking-widest text-neon">[ Single-line · live power path ]</span>
            <h2 className="font-anybody font-extrabold uppercase tracking-tight text-2xl sm:text-3xl mt-2">
              Where the power is right now.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onReplay}
              className="px-4 py-2.5 border border-fog/30 font-space-mono text-[10px] uppercase tracking-widest text-fog/75 hover:bg-neon hover:text-slate hover:border-neon transition-colors"
            >
              ▶ Replay failover
              {!gridDown && !restoring && secondsToFault > 0 && (
                <span className="text-fog/40 ml-2 tabular-nums">· next in {secondsToFault}s</span>
              )}
            </button>
            <div
              className={`px-4 py-2.5 border-2 font-space-mono text-[11px] uppercase tracking-widest transition-colors ${
                gridDown
                  ? "border-bloom text-bloom"
                  : restoring
                    ? "border-neon text-neon"
                    : "border-greptile-green text-greptile-green"
              }`}
            >
              {gridDown
                ? "◆ Grid fault · load on battery"
                : restoring
                  ? "◆ Utility restored · transferring"
                  : "◆ Utility normal · battery float"}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 102 1080 240" className="w-full min-w-[760px]" role="img" aria-label="Single-line diagram of the Mead site power path">
            {/* conductors */}
            <g fill="none" strokeWidth="2.5" strokeLinecap="round">
              {/* grid -> transformer */}
              <path d="M148 143 H196" stroke={gridDown ? "#FF6D6D" : "#28E99F"} style={flow(!gridDown)} />
              {/* transformer -> ATS */}
              <path d="M336 143 H384" stroke={gridDown ? "#FF6D6D" : "#28E99F"} style={flow(!gridDown)} />
              {/* ATS -> UPS -> PDU -> racks : always energised */}
              <path d="M502 143 H550" stroke={onBattery ? "#DAFF01" : "#28E99F"} style={flow(true)} />
              <path d="M668 143 H716" stroke={onBattery ? "#DAFF01" : "#28E99F"} style={flow(true)} />
              <path d="M844 143 H892" stroke={onBattery ? "#DAFF01" : "#28E99F"} style={flow(true)} />
              {/* BESS <-> ATS */}
              <path
                d="M443 268 V143"
                stroke={onBattery ? "#DAFF01" : "#28E99F"}
                style={flow(true, !onBattery, onBattery ? "1.1s" : "3.4s")}
              />
            </g>

            {/* fault marker */}
            {gridDown && (
              <g>
                <line x1="352" y1="122" x2="376" y2="164" stroke="#FF6D6D" strokeWidth="3" />
                <line x1="376" y1="122" x2="352" y2="164" stroke="#FF6D6D" strokeWidth="3" />
              </g>
            )}

            {/* nodes */}
            {NODES.map((n) => {
              const stroke = n.state === "down" ? "#FF6D6D" : n.state === "hot" ? "#DAFF01" : "#28E99F";
              return (
                <g key={n.label}>
                  <rect
                    x={n.x}
                    y={n.y}
                    width={n.w}
                    height={50}
                    fill="#3D3B4F"
                    stroke={stroke}
                    strokeWidth="1.5"
                    strokeDasharray={n.state === "down" ? "4 4" : "0"}
                  />
                  <text x={n.x + n.w / 2} y={n.y + 21} textAnchor="middle" fill="#EEEEEE" fontFamily="Anybody, sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.02em">
                    {n.label}
                  </text>
                  <text x={n.x + n.w / 2} y={n.y + 38} textAnchor="middle" fill={stroke} fontFamily="Space Mono, monospace" fontSize="9.5" letterSpacing="0.08em">
                    {n.sub}
                  </text>
                </g>
              );
            })}

            {/* transfer badge */}
            {onBattery && (
              <g>
                <rect x="676" y="246" width="268" height="52" fill="#DAFF01" />
                <text x="810" y="267" textAnchor="middle" fill="#3D3B4F" fontFamily="Space Mono, monospace" fontSize="9" letterSpacing="0.14em">
                  TRANSFER COMPLETE
                </text>
                <text x="810" y="287" textAnchor="middle" fill="#3D3B4F" fontFamily="Anybody, sans-serif" fontWeight="900" fontSize="15">
                  8.4 ms · NO LOAD DROP
                </text>
              </g>
            )}

            <text x="20" y="326" fill="#EEEEEE" opacity="0.35" fontFamily="Space Mono, monospace" fontSize="9" letterSpacing="0.1em">
              SCHEMATIC · SIMULATED · NOT A MEASURED RESULT · 30-SECOND DEMONSTRATION CYCLE
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   TELEMETRY FEED
   ============================================================ */
const EVENTS_NORMAL = [
  "AURA · workload scheduler rebalanced 3 pods across nodes 2–4",
  "BESS · cell balancing pass complete, max delta 0.008 V",
  "CDU · supply setpoint held, valve position 41%",
  "PDU-B · phase current within 1.2% of PDU-A",
  "NET · BGP session with Dobson stable, no flaps in 24h",
  "AURA · predictive model updated from 15-minute grid signal",
  "UPS · self-test passed, no battery string alarms",
  "THERM · rack inlet spread 0.6 °C across the row",
];
const EVENTS_FAULT = [
  "GRID · undervoltage detected on phase B — 12.47 kV feed lost",
  "ATS · transfer initiated",
  "BESS · discharge commanded, 131 kW picked up",
  "ATS · transfer complete in 8.4 ms — zero load drop",
  "AURA · checkpoint hint issued to all training jobs",
];
const EVENTS_RESTORE = [
  "GRID · utility voltage stable for 3 consecutive cycles",
  "ATS · retransfer to utility complete",
  "BESS · returning to float charge",
  "AURA · checkpoint hint cleared, jobs continue uninterrupted",
];

function TelemetryFeed({ tick, phase }: { tick: number; phase: Phase }) {
  const lines = useMemo(() => {
    const pool = phase === "fault" ? EVENTS_FAULT : phase === "restored" ? EVENTS_RESTORE : EVENTS_NORMAL;
    return Array.from({ length: 7 }, (_, i) => {
      const idx = Math.floor(noise((tick - i) * 2.3) * pool.length);
      const s = (tick - i * 3) % CYCLE;
      const mm = String(Math.floor(s / 10)).padStart(2, "0");
      const ss = String(Math.floor(s % 10) * 6).padStart(2, "0");
      return { t: `T−00:${mm}:${ss}`, msg: pool[idx] ?? pool[0], hot: phase !== "normal" };
    });
  }, [tick, phase]);

  return (
    <div className="border-t border-fog/15 bg-slate">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10">
        <h3 className="font-space-mono text-[10px] uppercase tracking-widest text-fog/45 mb-4 flex items-center gap-3">
          <span>Event stream</span>
          <span className="flex-1 h-px bg-fog/15" />
          <span className="text-fog/30">simulated</span>
        </h3>
        <div className="border border-dashed border-fog/20 divide-y divide-fog/10">
          {lines.map((l, i) => (
            <div key={i} className="flex gap-4 px-4 py-2.5 font-space-mono text-[11px]" style={{ opacity: 1 - i * 0.1 }}>
              <span className="text-fog/35 shrink-0 tabular-nums">{l.t}</span>
              <span className={l.hot ? "text-neon" : "text-fog/75"}>{l.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   LIVE MODE — deliberately empty
   ============================================================ */
function LiveEmpty() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-24 text-center">
      <div className="inline-flex items-center gap-2.5 font-space-mono text-[11px] uppercase tracking-widest text-fog/50 mb-6">
        <span className="w-2 h-2 bg-fog/30" />[ No data ]
      </div>
      <h2 className="font-anybody font-extrabold uppercase tracking-tight text-3xl sm:text-5xl mb-5 max-w-3xl mx-auto leading-[0.95]">
        There is nothing to report yet.
      </h2>
      <p className="text-fog/65 max-w-[58ch] mx-auto leading-relaxed text-lg">
        The Mead site is not energised. Rather than publish a green dashboard that means nothing, we leave this empty
        until there is a real measurement behind it. First telemetry publishes at power-on — target Q4 2026.
      </p>
      <p className="font-space-mono text-[11px] uppercase tracking-widest text-neon mt-8">
        Switch to preview to see what this page will show →
      </p>
    </div>
  );
}
