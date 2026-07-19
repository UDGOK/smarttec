import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SmartTec",
  description: "Founded by Syed Hussain and Yasir Jahangir. Battery-backed AI compute on an owned 30-acre site in Mead, Oklahoma, built on the z1power LFP platform.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
