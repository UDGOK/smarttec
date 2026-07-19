"use client";

import { useEffect, useState } from "react";

type SystemState = "normal" | "grid-down" | "high-load" | "solar-peak";

interface CellState {
  pct: number; // 0-100
  active: boolean;
}

interface PowerReading {
  bessCharge: number; // %
  bessPowerKw: number;
  gridDrawKw: number;
  solarKw: number;
  tokensPerWatt: number;
}

const initialReading: PowerReading = {
  bessCharge: 84,
  bessPowerKw: 1200,
  gridDrawKw: 380,
  solarKw: 220,
  tokensPerWatt: 0.81,
};

export function TopologyDiagram() {
  const [state, setState] = useState<SystemState>("normal");
  const [reading, setReading] = useState<PowerReading>(initialReading);
  const [hover, setHover] = useState<string | null>(null);
  const [cells, setCells] = useState<CellState[]>([
    { pct: 88, active: true },
    { pct: 82, active: true },
    { pct: 84, active: true },
  ]);

  // Animate readings on a 4s cycle. Grid-down cycles every ~30s for 8s.
  useEffect(() => {
    let raf = 0;
    const start = Date.now();
    let cycleState: SystemState = "normal";
    const tick = () => {
      const t = (Date.now() - start) / 1000;

      // Cycle: 24s normal → 8s grid-down → 18s high-load → 8s solar-peak
      let s: SystemState = "normal";
      let p = t % 58;
      if (p < 24) s = "normal";
      else if (p < 32) s = "grid-down";
      else if (p < 50) s = "high-load";
      else s = "solar-peak";

      if (s !== cycleState) {
        cycleState = s;
        setState(s);
      }

      // Compute live readings
      let bessCharge = 84 + Math.sin(t / 6) * 6;
      let bessPowerKw = 1180 + Math.sin(t / 3) * 60;
      let gridDrawKw = 380 + Math.sin(t / 7) * 80;
      let solarKw = 220 + Math.sin(t / 5) * 90;
      let tokensPerWatt = 0.78 + Math.sin(t / 4) * 0.06;

      if (s === "grid-down") {
        gridDrawKw = 0;
        bessPowerKw = 1480;
        bessCharge = Math.max(72, bessCharge - (t % 58 - 24) * 1.2);
        solarKw = 0;
        tokensPerWatt = 0.62;
      } else if (s === "high-load") {
        bessPowerKw = 1800;
        gridDrawKw = 200;
        bessCharge = Math.max(60, bessCharge - 8);
        tokensPerWatt = 0.91;
      } else if (s === "solar-peak") {
        solarKw = 580;
        gridDrawKw = 80;
        bessCharge = Math.min(99, bessCharge + 4);
        tokensPerWatt = 0.95;
      }

      setReading({
        bessCharge: Math.round(bessCharge),
        bessPowerKw: Math.round(bessPowerKw),
        gridDrawKw: Math.round(Math.max(0, gridDrawKw)),
        solarKw: Math.round(Math.max(0, solarKw)),
        tokensPerWatt: Math.round(tokensPerWatt * 100) / 100,
      });

      // Update cell states — rotate which cell is "active" (discharging)
      const activeIdx = Math.floor(t / 2) % 3;
      setCells([
        { pct: Math.max(60, Math.min(99, bessCharge + Math.sin(t) * 3)), active: activeIdx === 0 },
        { pct: Math.max(60, Math.min(99, bessCharge - 2 + Math.sin(t + 1) * 3)), active: activeIdx === 1 },
        { pct: Math.max(60, Math.min(99, bessCharge - 4 + Math.sin(t + 2) * 3)), active: activeIdx === 2 },
      ]);

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const isGridDown = state === "grid-down";
  const isHighLoad = state === "high-load";
  const isSolarPeak = state === "solar-peak";

  // State-driven copy at the top of the diagram
  const stateLabel = {
    normal: { text: "GRID + BESS + SOLAR · ALL ONLINE", color: "bg-greptile-green", text_color: "text-slate" },
    "grid-down": { text: "GRID FAULT · ISLANDING ON BESS", color: "bg-red-500", text_color: "text-fog" },
    "high-load": { text: "PEAK LOAD · BESS DISCHARGING", color: "bg-amber-400", text_color: "text-slate" },
    "solar-peak": { text: "SOLAR PEAK · CHARGING BESS", color: "bg-greptile-green", text_color: "text-slate" },
  }[state];

  return (
    <div className="relative aspect-[5/4] bg-slate border border-dashed border-slate/40 overflow-hidden">
      {/* ruled paper bg */}
      <div className="absolute inset-0 bg-paper-plus-ruled opacity-40 pointer-events-none" />

      {/* status bar at top */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2 bg-slate/85 backdrop-blur border-b border-slate/30">
        <div className="flex items-center gap-2 font-space-mono text-[10px] uppercase tracking-wider">
          <span className={`inline-block w-2 h-2 rounded-full animate-pulse ${isGridDown ? "bg-red-400" : "bg-greptile-green"}`} />
          <span className="text-fog">AURA · live</span>
          <span className="text-fog/40 ml-2">t:{Math.round(reading.tokensPerWatt * 100) / 100} tok/W</span>
        </div>
        <div className={`font-space-mono text-[9px] uppercase tracking-wider px-2 py-1 ${stateLabel.color} ${stateLabel.text_color}`}>
          {stateLabel.text}
        </div>
      </div>

      <svg viewBox="0 0 600 480" className="relative w-full h-full pt-9">
        <defs>
          {/* Arrow markers */}
          <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#28E99F" />
          </marker>
          <marker id="arrow-yellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#DAFF01" />
          </marker>
          <marker id="arrow-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#71ADFF" />
          </marker>

          {/* Pulsing glow filter */}
          <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ─────── ON-SITE SOLAR ─────── */}
        <g
          onMouseEnter={() => setHover("solar")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
        >
          <rect
            x="20" y="60" width="110" height="44"
            fill={isSolarPeak ? "#FFF8B0" : "#FDFCF9"}
            stroke="#DAFF01"
            strokeWidth={isSolarPeak ? "2" : "1.5"}
            className="transition-all duration-300"
          />
          <text x="75" y="79" fill="#3D3B4F" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">ON-SITE</text>
          <text x="75" y="93" fill="#3D3B4F" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">SOLAR</text>
          {/* Sun icon pulsing */}
          <circle cx="35" cy="100" r="2.5" fill="#DAFF01" className="animate-pulse" />
          <text x="75" y="118" fill="#DAFF01" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">{reading.solarKw} kW</text>
        </g>

        {/* ─────── UTILITY GRID (backup) ─────── */}
        <g
          onMouseEnter={() => setHover("grid")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
        >
          <rect
            x="20" y="218" width="110" height="60"
            fill={isGridDown ? "#5a1f1f" : "#3D3B4F"}
            stroke={isGridDown ? "#FF5050" : "#5a5666"}
            strokeWidth={isGridDown ? "2" : "1"}
            className="transition-all duration-300"
          />
          <text x="75" y="246" fill="#EEEEEE" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">UTILITY GRID</text>
          <text x="75" y="262" fill={isGridDown ? "#FF5050" : "#28E99F"} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            {isGridDown ? "⚠ OFFLINE" : "(BACKUP)"}
          </text>
          <text x="75" y="295" fill="#71ADFF" fontSize="8" fontFamily="monospace" textAnchor="middle">{reading.gridDrawKw} kW</text>
        </g>

        {/* ─────── z1power BESS ─────── */}
        <g
          onMouseEnter={() => setHover("bess")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
          filter={isHighLoad ? "url(#glow-green)" : ""}
        >
          <rect x="190" y="80" width="120" height="260" fill="#28E99F" className="transition-all" />
          <text x="250" y="105" fill="#000" fontSize="13" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">z1power</text>
          <text x="250" y="121" fill="#000" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">BESS</text>

          {/* Charge indicator */}
          <text x="250" y="140" fill="#000" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            ⚡ {reading.bessCharge}% · {reading.bessPowerKw} kW
          </text>

          {/* 3 LFP cells with charge fill */}
          {cells.map((cell, i) => (
            <g key={i}>
              <rect x="200" y="155 + i * 35" width="100" height="28" fill="#3D3B4F" />
              {/* Charge fill — animated width */}
              <rect
                x="200"
                y="155 + i * 35"
                width={cell.pct}
                height="28"
                fill={cell.active ? "#DAFF01" : "#28E99F"}
                opacity={cell.active ? "0.85" : "0.6"}
                className="transition-all duration-700"
              />
              {/* Active indicator pulse */}
              {cell.active && (
                <circle
                  cx={200 + cell.pct}
                  cy={169 + i * 35}
                  r="3"
                  fill="#fff"
                  className="animate-pulse"
                />
              )}
              <text x="250" y="174 + i * 35" fill={cell.active ? "#000" : "#28E99F"} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                LFP {i + 1} · {Math.round(cell.pct)}%
              </text>
            </g>
          ))}

          <text x="250" y="270" fill="#000" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TRIPLE-REDUNDANT</text>
          <text x="250" y="285" fill="#000" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SUB-10MS FAILOVER</text>
          <text x="250" y="310" fill="#000" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.7">
            MEAD · OK
          </text>
          <text x="250" y="325" fill="#000" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.7">
            US-ENGINEERED
          </text>
        </g>

        {/* ─────── SWITCHGEAR ─────── */}
        <g
          onMouseEnter={() => setHover("switch")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
        >
          <rect x="350" y="225" width="60" height="40" fill="#EEEEEE" stroke="#3D3B4F" strokeWidth="1.5" />
          <text x="380" y="244" fill="#3D3B4F" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SWITCH</text>
          <text x="380" y="257" fill="#28E99F" fontSize="7" fontFamily="monospace" textAnchor="middle">400V DC</text>
        </g>

        {/* ─────── NVIDIA GPU HALL ─────── */}
        <g
          onMouseEnter={() => setHover("nvidia")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
        >
          <rect x="450" y="135" width="130" height="90" fill="#3D3B4F" stroke="#76B900" strokeWidth="1.5" />
          <text x="515" y="160" fill="#76B900" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">NVIDIA</text>
          <text x="515" y="178" fill="#EEEEEE" fontSize="9" fontFamily="monospace" textAnchor="middle">GPU HALL</text>

          {/* "POWERED" badge with pulse */}
          <rect x="465" y="188" width="50" height="14" fill="#28E99F" />
          <text x="490" y="198" fill="#000" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">[ POWERED ]</text>
          {/* Pulse ring */}
          <circle cx="490" cy="195" r="9" fill="none" stroke="#28E99F" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" from="9" to="20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>

          <text x="525" y="215" fill="#EEEEEE" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.7">H100/H200/B200</text>
        </g>

        {/* ─────── CEREBRAS INFERENCE ─────── */}
        <g
          onMouseEnter={() => setHover("cerebras")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
        >
          <rect x="450" y="245" width="130" height="90" fill="#3D3B4F" stroke="#FFBCB3" strokeWidth="1.5" />
          <text x="515" y="270" fill="#FFBCB3" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">CEREBRAS</text>
          <text x="515" y="288" fill="#EEEEEE" fontSize="9" fontFamily="monospace" textAnchor="middle">INFERENCE</text>

          <rect x="465" y="298" width="50" height="14" fill="#28E99F" />
          <text x="490" y="308" fill="#000" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">[ POWERED ]</text>
          <circle cx="490" cy="305" r="9" fill="none" stroke="#28E99F" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" from="9" to="20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>

          <text x="525" y="325" fill="#EEEEEE" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.7">CS-3 · wafer</text>
        </g>

        {/* ─────── AURA ORCHESTRATOR ─────── */}
        <g
          onMouseEnter={() => setHover("aura")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
        >
          <rect x="190" y="380" width="220" height="60" fill="#3D3B4F" stroke="#28E99F" strokeWidth="2" />
          <text x="300" y="408" fill="#28E99F" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">AURA</text>
          <text x="300" y="424" fill="#EEEEEE" fontSize="9" fontFamily="monospace" textAnchor="middle">ORCHESTRATION + TOKENS/WATT</text>

          {/* Animated dots in the AURA box */}
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={210 + i * 12} cy={433} r="1.5" fill="#28E99F">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* ─────── POWER FLOW LINES + ANIMATED DOTS ─────── */}

        {/* Solar → BESS (yellow, animated dashed) */}
        <line x1="130" y1="82" x2="195" y2="100" stroke="#DAFF01" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow-yellow)" />
        <line x1="195" y1="100" x2="195" y2="100" stroke="#DAFF01" strokeWidth="6" strokeDasharray="2 200" opacity="0.9">
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2.5s" repeatCount="indefinite" />
        </line>

        {/* Solar → also goes to BESS via dashed curve */}
        <path d="M 130 104 Q 165 120 195 130" stroke="#DAFF01" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />

        {/* Grid → BESS (green, animated) */}
        <line x1="130" y1="248" x2="190" y2="248" stroke={isGridDown ? "#FF5050" : "#28E99F"} strokeWidth="2.5" markerEnd="url(#arrow-green)" />
        {!isGridDown && (
          <line x1="130" y1="248" x2="190" y2="248" stroke="#fff" strokeWidth="3" strokeDasharray="4 8" opacity="0.9">
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1s" repeatCount="indefinite" />
          </line>
        )}

        {/* BESS → Switch (green animated) */}
        <line x1="310" y1="200" x2="355" y2="245" stroke="#28E99F" strokeWidth="2.5" markerEnd="url(#arrow-green)" />
        <line x1="310" y1="200" x2="355" y2="245" stroke="#fff" strokeWidth="3" strokeDasharray="4 8" opacity="0.9">
          <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="0.8s" repeatCount="indefinite" />
        </line>

        {/* Switch → NVIDIA (green animated, branching up) */}
        <path d="M 410 240 Q 425 240 430 200 L 450 180" stroke="#28E99F" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-green)" />
        <path d="M 410 240 Q 425 240 430 200 L 450 180" stroke="#fff" strokeWidth="3" fill="none" strokeDasharray="4 8" opacity="0.9">
          <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="0.9s" repeatCount="indefinite" />
        </path>

        {/* Switch → Cerebras (green animated, branching down) */}
        <path d="M 410 250 Q 425 250 430 270 L 450 290" stroke="#28E99F" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-green)" />
        <path d="M 410 250 Q 425 250 430 270 L 450 290" stroke="#fff" strokeWidth="3" fill="none" strokeDasharray="4 8" opacity="0.9">
          <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="0.9s" repeatCount="indefinite" />
        </path>

        {/* AURA → BESS (green dashed, bidirectional telemetry) */}
        <line x1="300" y1="340" x2="300" y2="380" stroke="#28E99F" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="300" cy="350" r="2" fill="#28E99F">
          <animate attributeName="cy" values="350;370;350" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="370" r="2" fill="#DAFF01">
          <animate attributeName="cy" values="370;350;370" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* AURA → Switch (small control line) */}
        <path d="M 410 410 Q 480 410 380 250" stroke="#28E99F" strokeWidth="1" strokeDasharray="2 4" fill="none" opacity="0.5" />

        {/* ─────── LIQUID COOLING LOOP ─────── */}
        <path d="M 580 170 Q 605 170 605 250 Q 605 350 580 350" stroke="#71ADFF" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        {/* Animated coolant flowing */}
        <path d="M 580 170 Q 605 170 605 250 Q 605 350 580 350" stroke="#71ADFF" strokeWidth="3" fill="none" strokeDasharray="3 7" opacity="0.9">
          <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="605" y="263" fill="#71ADFF" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">LIQUID</text>
        <text x="605" y="273" fill="#71ADFF" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">COOL</text>

        {/* ─────── HOVER TOOLTIPS ─────── */}
        {hover && (
          <g>
            <rect x="160" y="450" width="320" height="24" fill="#3D3B4F" stroke="#28E99F" strokeWidth="1" rx="2" />
            <text x="320" y="466" fill="#28E99F" fontSize="9" fontFamily="monospace" textAnchor="middle">
              {hover === "solar" && `☀  On-site PV array · ${reading.solarKw} kW · feeds BESS during day`}
              {hover === "grid" && `⚡  Utility feed · ${isGridDown ? "OFFLINE — islanded on BESS" : `${reading.gridDrawKw} kW · backup-only`}`}
              {hover === "bess" && `🔋  z1power LFP · ${reading.bessCharge}% · ${reading.bessPowerKw} kW · triple-redundant`}
              {hover === "switch" && `⚡  400V DC bus · auto-transfer <10ms on grid fault`}
              {hover === "nvidia" && `🟢  NVIDIA GPU hall · H100/H200/B200/GB200 · AURA-routed`}
              {hover === "cerebras" && `🟠  Cerebras CS-3 · wafer-scale · lowest-latency inference`}
              {hover === "aura" && `🧠  AURA · ${reading.tokensPerWatt} tok/W · routes + forecasts + islanding`}
            </text>
          </g>
        )}

        {/* ─────── FAILOVER FLASH ─────── */}
        {isGridDown && (
          <rect x="0" y="0" width="600" height="480" fill="#FF5050" opacity="0">
            <animate attributeName="opacity" values="0;0.04;0;0;0;0.04;0" dur="2s" repeatCount="indefinite" />
          </rect>
        )}
      </svg>

      {/* legend bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2 bg-slate/85 backdrop-blur border-t border-slate/30 text-fog/70">
        <div className="font-space-mono text-[9px] uppercase tracking-wider flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-px bg-greptile-green" /> Power
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-px" style={{ background: "repeating-linear-gradient(90deg, #DAFF01 0 3px, transparent 3px 6px)" }} /> Solar
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-px" style={{ background: "repeating-linear-gradient(90deg, #71ADFF 0 3px, transparent 3px 6px)" }} /> Coolant
          </span>
        </div>
        <div className="font-space-mono text-[9px] uppercase tracking-wider text-fog/40">
          Hover any block · Demo cycles every ~58s
        </div>
      </div>
    </div>
  );
}

export default TopologyDiagram;
