import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deployments & Roadmap | SmartTec",
  description: "Phase 1: 30x B200 in Mead, OK (Q4 2026). Phase 2-3: expansion across owned buildings and on-site solar.",
  alternates: { canonical: "/deployments" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
