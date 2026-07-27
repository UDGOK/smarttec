"use client";

/* ============================================================
   ROBOT AVATAR
   A deterministic animated SVG "unit" per person — used instead of
   stock portraits until real photography exists.

   Traits (head shape, eye type, antenna, accent colour) are derived from
   a hash of the person's name, so each person always gets the same robot
   and no two adjacent cards look alike.

   PERFORMANCE: pure SVG + CSS. Every animation is transform or opacity,
   so it runs on the compositor. No JS, no timers, no layout.
   Fully disabled under prefers-reduced-motion.
   ============================================================ */

const ACCENTS = ["#28E99F", "#DAFF01", "#C5FFD6", "#D1E5FF", "#FFBCB3", "#71ADFF"];

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/** Avalanche finalizer. Without it, similar names share low bits and end up
 *  with identical robots — each trait needs an independently mixed value. */
function mix(h: number, salt: number) {
  let x = (h ^ Math.imul(salt + 1, 0x9e3779b1)) >>> 0;
  x ^= x >>> 16;
  x = Math.imul(x, 0x7feb352d) >>> 0;
  x ^= x >>> 15;
  x = Math.imul(x, 0x846ca68b) >>> 0;
  x ^= x >>> 16;
  return x >>> 0;
}

export type RobotAvatarProps = {
  /** Person's name — seeds the robot's appearance. */
  name: string;
  /** Two-letter fallback shown on the chest plate. */
  initials: string;
  /** Position in its grid. Drives the accent colour so neighbouring cards
   *  never share one — hashing alone collides badly at small team sizes. */
  index?: number;
  className?: string;
};

export default function RobotAvatar({ name, initials, index = 0, className = "" }: RobotAvatarProps) {
  const h = hash(name);
  const accent = ACCENTS[index % ACCENTS.length];
  const head = mix(h, 1) % 3; // 0 rounded · 1 hex-notched · 2 visor-dome
  const eyes = mix(h, 2) % 3; // 0 round · 1 square · 2 slit
  const antenna = mix(h, 3) % 3; // 0 centre · 1 twin · 2 bar
  const delay = (mix(h, 4) % 5) * 0.7; // stagger blinks between cards
  const uid = `r${h.toString(36)}`;

  return (
    <svg
      viewBox="0 0 120 120"
      className={`robot ${className}`}
      role="img"
      aria-label={`Illustrated avatar for ${name}`}
      style={{ ["--rb-accent" as string]: accent, ["--rb-delay" as string]: `${delay}s` }}
    >
      <defs>
        <clipPath id={`${uid}-visor`}>
          <rect x="30" y="46" width="60" height="22" rx="4" />
        </clipPath>
      </defs>

      <g className="robot-float">
        {/* ---- antenna ---- */}
        {antenna === 0 && (
          <>
            <line x1="60" y1="20" x2="60" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.55" />
            <circle cx="60" cy="17" r="4" fill="var(--rb-accent)" className="robot-pulse" />
          </>
        )}
        {antenna === 1 && (
          <>
            <line x1="40" y1="24" x2="44" y2="33" stroke="currentColor" strokeWidth="2" opacity="0.55" />
            <line x1="80" y1="24" x2="76" y2="33" stroke="currentColor" strokeWidth="2" opacity="0.55" />
            <circle cx="39" cy="21" r="3.4" fill="var(--rb-accent)" className="robot-pulse" />
            <circle cx="81" cy="21" r="3.4" fill="var(--rb-accent)" className="robot-pulse robot-pulse-b" />
          </>
        )}
        {antenna === 2 && <rect x="46" y="22" width="28" height="5" rx="2.5" fill="var(--rb-accent)" className="robot-pulse" />}

        {/* ---- head ---- */}
        {head === 0 && <rect x="26" y="32" width="68" height="56" rx="14" fill="#EEEEEE" stroke="currentColor" strokeWidth="2.5" />}
        {head === 1 && (
          <path
            d="M36 32 H84 L94 42 V78 L84 88 H36 L26 78 V42 Z"
            fill="#EEEEEE"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        )}
        {head === 2 && (
          <path
            d="M26 62 a34 30 0 0 1 68 0 V78 a10 10 0 0 1 -10 10 H36 a10 10 0 0 1 -10 -10 Z"
            fill="#EEEEEE"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        )}

        {/* ---- visor + scan line ---- */}
        <rect x="30" y="46" width="60" height="22" rx="4" fill="#3D3B4F" />
        <g clipPath={`url(#${uid}-visor)`}>
          <rect x="30" y="44" width="60" height="2.5" fill="var(--rb-accent)" opacity="0.9" className="robot-scan" />
        </g>

        {/* ---- eyes ---- */}
        <g className="robot-blink">
          {eyes === 0 && (
            <>
              <circle cx="47" cy="57" r="6" fill="var(--rb-accent)" />
              <circle cx="73" cy="57" r="6" fill="var(--rb-accent)" />
            </>
          )}
          {eyes === 1 && (
            <>
              <rect x="41" y="51" width="12" height="12" rx="2" fill="var(--rb-accent)" />
              <rect x="67" y="51" width="12" height="12" rx="2" fill="var(--rb-accent)" />
            </>
          )}
          {eyes === 2 && (
            <>
              <rect x="39" y="54" width="16" height="6" rx="3" fill="var(--rb-accent)" />
              <rect x="65" y="54" width="16" height="6" rx="3" fill="var(--rb-accent)" />
            </>
          )}
        </g>

        {/* ---- jaw vents ---- */}
        <g opacity="0.4">
          <line x1="48" y1="78" x2="72" y2="78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="52" y1="83" x2="68" y2="83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ---- chest plate with initials ---- */}
        <rect x="44" y="96" width="32" height="18" rx="3" fill="#EEEEEE" stroke="currentColor" strokeWidth="2" opacity="0.75" />
        <text
          x="60"
          y="109"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.9"
          fontFamily="Space Mono, monospace"
          fontSize="11"
          letterSpacing="0.1em"
        >
          {initials}
        </text>
        <circle cx="36" cy="105" r="2.6" fill="var(--rb-accent)" className="robot-pulse robot-pulse-b" />
        <circle cx="84" cy="105" r="2.6" fill="currentColor" opacity="0.35" />
      </g>
    </svg>
  );
}
