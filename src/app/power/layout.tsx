import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battery-Backed Data Center Power: BESS vs UPS vs Diesel | SmartTec",
  description: "z1power LFP battery systems engineered by SmartTec: sub-10ms grid-to-battery failover, behind-the-meter design, no diesel, ~$0.08/kWh Oklahoma power.",
  alternates: { canonical: "/power" },
  openGraph: {
    title: 'Battery-Backed Data Center Power: BESS vs UPS vs Diesel | SmartTec',
    description: 'Sub-10ms grid-to-battery failover on z1power LFP — behind the meter, no diesel, ~$0.08/kWh Oklahoma power.',
    url: "https://smarttec.dev/power",
    type: "website",
  
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
