import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SmartTec",
  description: "Talk to sales, engineering, partnerships, or press. Scope call, sizing with checkable math, fixed quote.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
