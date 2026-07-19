import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise & Federal | SmartTec",
  description: "Single-tenant isolation, US-based operations, design-partner program, and compliance scoped per contract.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
