import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SmartTec — The Grid-Independent Data Center",
  description:
    "SmartTec designs, deploys, and operates data centers powered by proprietary battery energy stacks. USA-based R&D and manufacturing.",
  keywords: [
    "data center",
    "battery energy storage",
    "grid-independent",
    "edge computing",
    "modular data center",
  ],
  openGraph: {
    title: "SmartTec — The Grid-Independent Data Center",
    description:
      "SmartTec designs, deploys, and operates data centers powered by proprietary battery energy stacks. USA-based R&D and manufacturing.",
    type: "website",
    locale: "en_US",
    siteName: "SmartTec",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartTec — The Grid-Independent Data Center",
    description:
      "SmartTec designs, deploys, and operates data centers powered by proprietary battery energy stacks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="bg-bg-primary text-txt-primary antialiased">{children}</body>
    </html>
  );
}