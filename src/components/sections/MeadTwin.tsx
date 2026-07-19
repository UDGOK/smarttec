// Animated "digital twin" schematic of the Mead, OK Phase 1 site.
// Pure SVG + CSS — ~12KB, no JS timers, reduced-motion safe.
// Every 16s the grid faults (red flicker) and the battery path catches the
// load (bright green) — the <10ms failover pitch as ambient animation.

export function MeadTwin() {
  return (
    <div className="mt-twin select-none" aria-hidden="true">
      <svg viewBox="0 0 640 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* ---------- ground plane ---------- */}
        <path d="M60 400 L340 260 L620 400 L340 480 Z" stroke="#3D3B4F" strokeOpacity="0.25" strokeDasharray="6 6" strokeWidth="1.5" />

        {/* ---------- GRID feed (top-left) ---------- */}
        <g className="mt-gridgrp">
          <path d="M40 120 L60 90 L80 120 M60 90 L60 150" stroke="#3D3B4F" strokeWidth="2" />
          <path d="M45 135 L75 135" stroke="#3D3B4F" strokeWidth="2" />
          <text x="30" y="78" className="mt-lbl">GRID</text>
        </g>
        {/* grid -> transformer feed */}
        <path id="mtA" className="mt-wire" d="M60 150 L60 220 L150 268" />
        <path className="mt-flow mt-flowA" d="M60 150 L60 220 L150 268" />

        {/* ---------- transformer ---------- */}
        <g>
          <path d="M150 250 L200 225 L250 250 L200 275 Z" fill="#EEEEEE" stroke="#3D3B4F" strokeWidth="2" />
          <path d="M150 250 L150 292 L200 318 L200 275 Z" fill="#FFFFFF" stroke="#3D3B4F" strokeWidth="2" />
          <path d="M250 250 L250 292 L200 318 L200 275 Z" fill="#D6D6D6" stroke="#3D3B4F" strokeWidth="2" />
          <text x="160" y="306" className="mt-lbl">3 MVA XFMR</text>
        </g>

        {/* transformer -> building */}
        <path className="mt-wire" d="M250 285 L360 340" />
        <path className="mt-flow mt-flowB" d="M250 285 L360 340" />

        {/* transformer -> battery (charge) */}
        <path className="mt-wire" d="M185 310 L185 360" />

        {/* ---------- z1power battery bank ---------- */}
        <g>
          <path d="M130 380 L185 352 L240 380 L185 408 Z" fill="#EEEEEE" stroke="#3D3B4F" strokeWidth="2" />
          <path d="M130 380 L130 412 L185 440 L185 408 Z" fill="#FFFFFF" stroke="#3D3B4F" strokeWidth="2" />
          <path d="M240 380 L240 412 L185 440 L185 408 Z" fill="#D6D6D6" stroke="#3D3B4F" strokeWidth="2" />
          {/* cells */}
          <rect x="146" y="392" width="10" height="16" fill="#28E99F" transform="skewY(27)" style={{ transformOrigin: "146px 392px" }} className="mt-cell" />
          <rect x="162" y="392" width="10" height="16" fill="#28E99F" transform="skewY(27)" style={{ transformOrigin: "162px 392px" }} className="mt-cell mt-d1" />
          <rect x="178" y="392" width="10" height="16" fill="#28E99F" transform="skewY(27)" style={{ transformOrigin: "178px 392px" }} className="mt-cell mt-d2" />
          <text x="128" y="372" className="mt-lbl">z1POWER LFP</text>
        </g>

        {/* battery -> building (failover path) */}
        <path className="mt-wire" d="M240 402 L370 366" strokeDasharray="4 5" />
        <path className="mt-flow mt-flowD" d="M240 402 L370 366" />

        {/* ---------- Building 1 with racks ---------- */}
        <g>
          {/* shell */}
          <path d="M360 260 L470 205 L600 270 L490 325 Z" fill="#EEEEEE" stroke="#3D3B4F" strokeWidth="2.5" />
          <path d="M360 260 L360 372 L490 437 L490 325 Z" fill="#FFFFFF" stroke="#3D3B4F" strokeWidth="2.5" />
          <path d="M600 270 L600 382 L490 437 L490 325 Z" fill="#D6D6D6" stroke="#3D3B4F" strokeWidth="2.5" />
          <text x="380" y="252" className="mt-lbl">BUILDING 1 · 30× B200</text>
          {/* rack row on front face (isometric-ish rects) */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${378 + i * 26} ${300 + i * 13})`}>
              <rect width="18" height="52" fill="#3D3B4F" transform="skewY(27)" />
              <circle cx="5" cy="14" r="2.2" className={`mt-led mt-l${i}`} transform="skewY(27)" />
              <circle cx="12" cy="14" r="2.2" className={`mt-led mt-l${(i + 2) % 4}`} transform="skewY(27)" />
              <circle cx="5" cy="24" r="2.2" className={`mt-led mt-l${(i + 1) % 4}`} transform="skewY(27)" />
              <circle cx="12" cy="24" r="2.2" className={`mt-led mt-l${(i + 3) % 4}`} transform="skewY(27)" />
            </g>
          ))}
        </g>

        {/* ---------- fiber ---------- */}
        <path className="mt-fiber" d="M620 440 L520 420 L470 430" />
        <text x="522" y="458" className="mt-lbl">100G FIBER</text>

        {/* ---------- failover badge (appears during fault) ---------- */}
        <g className="mt-badge">
          <rect x="258" y="330" width="118" height="26" fill="#E9E9E9" stroke="#28E99F" strokeWidth="1.5" />
          <text x="268" y="347" className="mt-lbl" fill="#0aa96e" fillOpacity="1" fontWeight="bold">&lt;10ms FAILOVER</text>
        </g>
      </svg>
      <div className="mt-cap font-space-mono">[ MEAD, OK · PHASE 1 DIGITAL TWIN — SCHEMATIC, NOT A PHOTO ]</div>

      <style>{`
        .mt-twin .mt-lbl { font-family: 'Space Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 1px; fill: #3D3B4F; fill-opacity: 0.6; }
        .mt-twin .mt-cap { font-size: 9px; letter-spacing: 1.5px; color: rgba(61,59,79,0.45); text-transform: uppercase; text-align: right; padding-right: 8px; margin-top: -6px; }
        .mt-twin .mt-wire { stroke: #3D3B4F; stroke-width: 2; stroke-opacity: 0.45; }
        .mt-twin .mt-fiber { stroke: #3D3B4F; stroke-width: 2; stroke-dasharray: 3 5; stroke-opacity: 0.5; animation: mt-dash 1.2s linear infinite; }
        .mt-twin .mt-flow { stroke: #28E99F; stroke-width: 2.5; stroke-opacity: 0.75; stroke-linecap: round; stroke-dasharray: 6 14; animation: mt-dash 1.8s linear infinite; }
        .mt-twin .mt-flowD { stroke-opacity: 0; animation: mt-dash 1s linear infinite, mt-catch 30s linear infinite; }
        .mt-twin .mt-flowA { animation: mt-dash 1.8s linear infinite, mt-gridout 30s linear infinite; }
        .mt-twin .mt-gridgrp { animation: mt-gridflicker 30s linear infinite; }
        .mt-twin .mt-led { fill: #28E99F; animation: mt-blink 3.6s ease-in-out infinite; }
        .mt-twin .mt-l1 { animation-delay: 0.5s; } .mt-twin .mt-l2 { animation-delay: 1.1s; } .mt-twin .mt-l3 { animation-delay: 1.7s; }
        .mt-twin .mt-cell { animation: mt-blink 4.5s ease-in-out infinite; }
        .mt-twin .mt-d1 { animation-delay: 0.8s; } .mt-twin .mt-d2 { animation-delay: 1.6s; }
        .mt-twin .mt-badge { opacity: 0; animation: mt-badgein 30s linear infinite; }

        @keyframes mt-dash { to { stroke-dashoffset: -20; } }
        @keyframes mt-blink { 0%,100% { opacity: 0.95; } 50% { opacity: 0.55; } }
        /* the 16s incident timeline: 70%–82% = grid fault window */
        @keyframes mt-gridout { 0%,77% { stroke-opacity: 0.75; } 78.5%,86% { stroke-opacity: 0.1; } 88%,100% { stroke-opacity: 0.75; } }
        @keyframes mt-gridflicker { 0%,77% { opacity: 1; } 79%,85% { opacity: 0.35; } 88%,100% { opacity: 1; } }
        @keyframes mt-catch { 0%,77% { stroke-opacity: 0; } 79%,86% { stroke-opacity: 0.85; } 89%,100% { stroke-opacity: 0; } }
        @keyframes mt-badgein { 0%,78% { opacity: 0; } 80%,86% { opacity: 0.9; } 89%,100% { opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          .mt-twin * { animation: none !important; }
          .mt-twin .mt-flowD { stroke-opacity: 0; }
          .mt-twin .mt-badge { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
