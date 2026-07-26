import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Center Design, Build & Deploy — AI Compute Facilities | SmartTec",
  description:
    "SmartTec designs and deploys high-density AI compute facilities: load modeling, redundancy architecture, liquid cooling, and battery-backed power. Design-only, design plus procurement, or full turnkey.",
  alternates: { canonical: "/design" },
  openGraph: {
    title: "Data Center Design, Build & Deploy — AI Compute Facilities | SmartTec",
    description:
      "Load modeling, redundancy architecture, liquid cooling, battery-backed power. Take the drawings, or take the keys.",
    url: "https://smarttec.dev/design",
    type: "website",
  
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
