import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Data Center Design Process — Six Phases, Named Deliverables | SmartTec",
  description:
    "How SmartTec runs a data center design-build: discovery, load model, single-line and layout, redundancy and FMEA, procurement, build and commissioning — with the deliverables you receive at each phase.",
  alternates: { canonical: "/design/process" },
  openGraph: {
    title: "Our Data Center Design Process — Six Phases, Named Deliverables | SmartTec",
    description: "Discovery, load model, single-line, FMEA, procurement, commissioning — and what you receive at each gate.",
    url: "https://smarttec.dev/design/process",
    type: "website",
  
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
