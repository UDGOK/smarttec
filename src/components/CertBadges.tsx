"use client";

/* ============================================================
   CERTIFICATION BADGES

   IP NOTE — deliberate design decision, do not "fix" by swapping in the
   official artwork. These are SmartTec-drawn badges, not reproductions of
   the Google Cloud, PMI or NVIDIA marks. Naming a credential a team member
   holds is nominative fair use; reproducing the issuer's logo or the
   Credly badge image is not — Credly badges are licensed to the individual
   holder, and PMI restricts use of the PMP mark. Keep the credential names
   accurate and the artwork ours.

   PERFORMANCE: pure SVG + CSS, transform/opacity only. Off under
   prefers-reduced-motion.
   ============================================================ */

type Cert = {
  name: string;
  issuer: string;
  short: string;
  accent: string;
  mark: "network" | "layers" | "schedule" | "spark" | "die";
};

const CERTS: Cert[] = [
  {
    name: "Professional Cloud Network Engineer",
    issuer: "Google Cloud",
    short: "PCNE",
    accent: "#28E99F",
    mark: "network",
  },
  {
    name: "Professional Cloud Architect",
    issuer: "Google Cloud",
    short: "PCA",
    accent: "#71ADFF",
    mark: "layers",
  },
  {
    name: "NVIDIA-Certified Professional: AI Infrastructure",
    issuer: "NVIDIA · NCP-AII",
    short: "NCP",
    accent: "#DAFF01",
    mark: "die",
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    short: "PMP",
    accent: "#C5FFD6",
    mark: "schedule",
  },
  {
    name: "Generative AI Overview for Project Managers",
    issuer: "Project Management Institute",
    short: "GenAI",
    accent: "#FFBCB3",
    mark: "spark",
  },
];

function Mark({ kind }: { kind: Cert["mark"] }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "network":
      return (
        <g {...s}>
          <circle cx="24" cy="14" r="3.2" />
          <circle cx="13" cy="32" r="3.2" />
          <circle cx="35" cy="32" r="3.2" />
          <path d="M24 17.2 L14.6 28.9 M24 17.2 L33.4 28.9 M16.2 32 H31.8" />
        </g>
      );
    case "layers":
      return (
        <g {...s}>
          <path d="M24 10 L37 17 L24 24 L11 17 Z" />
          <path d="M11 24 L24 31 L37 24" />
          <path d="M11 31 L24 38 L37 31" />
        </g>
      );
    case "die":
      return (
        <g {...s}>
          <rect x="14" y="14" width="20" height="20" rx="2" />
          <rect x="20" y="20" width="8" height="8" rx="1" />
          <path d="M18 14 V9 M24 14 V9 M30 14 V9 M18 34 V39 M24 34 V39 M30 34 V39 M14 18 H9 M14 24 H9 M14 30 H9 M34 18 H39 M34 24 H39 M34 30 H39" />
        </g>
      );
    case "schedule":
      return (
        <g {...s}>
          <rect x="10" y="12" width="28" height="24" rx="2" />
          <path d="M10 19 H38 M16 12 V8 M32 12 V8" />
          <path d="M15 26 H23 M15 31 H28" />
        </g>
      );
    case "spark":
      return (
        <g {...s}>
          <path d="M24 8 L27 19 L38 22 L27 25 L24 36 L21 25 L10 22 L21 19 Z" />
        </g>
      );
  }
}

export default function CertBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-slate/20">
      {CERTS.map((c, i) => (
        <div
          key={c.name}
          className="group bg-background p-5 flex flex-col items-center text-center transition-colors hover:bg-fog"
        >
          <svg
            viewBox="0 0 48 60"
            className="cert w-16 h-20 mb-3"
            role="img"
            aria-label={`${c.name} — ${c.issuer}`}
            style={{ ["--ct-accent" as string]: c.accent, ["--ct-delay" as string]: `${i * 0.45}s` }}
          >
            {/* hex-notched shield, house style */}
            <path
              d="M6 6 H42 V38 L24 50 L6 38 Z"
              fill="#EEEEEE"
              stroke="#3D3B4F"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M6 6 H42 V13 H6 Z" fill="var(--ct-accent)" />
            <g className="cert-mark" style={{ color: "#3D3B4F" }} transform="translate(0,6)">
              <Mark kind={c.mark} />
            </g>
            <circle cx="24" cy="45" r="2" fill="var(--ct-accent)" className="cert-pulse" />
          </svg>

          <div className="font-space-mono text-[10px] uppercase tracking-widest text-slate/45 mb-1.5">{c.short}</div>
          <div className="font-anybody font-bold text-[13px] leading-tight text-slate mb-1.5">{c.name}</div>
          <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/55">{c.issuer}</div>
        </div>
      ))}
    </div>
  );
}
