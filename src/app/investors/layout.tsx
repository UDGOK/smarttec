import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors | SmartTec",
  description: "Pre-launch battery-backed AI compute: owned Mead, OK site, 3 MVA transformer, signed 100G fiber quote, Q4 2026 power-on target.",
  alternates: { canonical: "/investors" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
