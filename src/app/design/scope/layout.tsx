import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scope Your Data Center — Free Load, Power & Cooling Model | SmartTec",
  description:
    "Answer a short questionnaire and get a preliminary data center scope: facility load, utility service in MVA, rack count, BESS sizing, heat rejection, and footprint — every assumption shown. Indicative planning estimate, not a quote.",
  alternates: { canonical: "/design/scope" },
  openGraph: {
    title: "Scope Your Data Center — Free Load, Power & Cooling Model | SmartTec",
    description:
      "A short questionnaire that returns a real preliminary load model, with every assumption printed next to the number.",
    url: "https://smarttec.dev/design/scope",
    type: "website",
  
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
