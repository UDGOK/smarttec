import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who SmartTec Is For | Customers",
  description: "AI product teams, inference-heavy SaaS, research labs, and federal workloads. Design-partner slots open ahead of Q4 2026 power-on in Mead, OK.",
  alternates: { canonical: "/customers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
