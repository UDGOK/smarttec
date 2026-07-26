import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status — Platform, Power & Network | SmartTec",
  description:
    "Live status for SmartTec platform services, battery-backed power, and network. Pre-launch: the Mead, Oklahoma site targets power-on Q4 2026, and measured availability telemetry publishes from commissioning onward.",
  alternates: { canonical: "/status" },
  openGraph: {
    title: "System Status — Platform, Power & Network | SmartTec",
    description: "Live status for SmartTec platform services, battery-backed power, and network.",
    url: "https://smarttec.dev/status",
    type: "website",
  
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
