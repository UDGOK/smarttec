import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battery-Backed Power for AI | SmartTec",
  description: "z1power LFP battery systems engineered by SmartTec: sub-10ms grid-to-battery failover, behind-the-meter design, ~$0.08/kWh Oklahoma power.",
  alternates: { canonical: "/power" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
