import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Anybody, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

// Only the weights actually used in the codebase are requested. Every
// declared weight is a separate preloaded woff2 competing with LCP.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

// 400 is required — 49 elements use font-anybody with no weight class.
// 500 and 600 are never used and are dropped.
const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

// Used in a single decorative accent — never preload it against the LCP text.
const nanumPenScript = Nanum_Pen_Script({
  subsets: ["latin"],
  variable: "--font-nanum-pen-script",
  weight: ["400"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smarttec.dev"),
  alternates: { canonical: "/" },
  title: "SmartTec | Resilient AI Cloud — Stay Online When the Grid Goes Down",
  description:
    "Battery-backed AI compute on z1power LFP storage. AURA islands your cluster in <10ms when the grid faults. NVIDIA + Cerebras at our owned Mead, OK site.",
  keywords: [
    "data center",
    "battery energy storage",
    "grid resilience",
    "behind the meter",
    "AI cooling",
    "modular data center",
    "PUE optimization",
    "islanded operation",
  ],
  openGraph: {
    title: "SmartTec | Battery-Backed AI Compute",
    description:
      "NVIDIA + Cerebras compute behind z1power LFP storage. Sub-10ms failover, behind-the-meter power, Mead, Oklahoma. Q4 2026.",
    type: "website",
    locale: "en_US",
    siteName: "SmartTec",
    url: "https://smarttec.dev",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@smarttec_io",
    title: "SmartTec | Battery-Backed AI Compute",
    description:
      "NVIDIA + Cerebras compute behind z1power LFP storage. Sub-10ms failover, Mead, Oklahoma.",
    images: ["/og.png"],
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
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable} ${anybody.variable} ${nanumPenScript.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background bg-noise font-sans text-slate antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://smarttec.dev/#org",
                  name: "SmartTec",
                  legalName: "SmartTec, Inc.",
                  alternateName: ["SmartTec.dev", "SmartTec — Mead, Oklahoma", "SmartTec battery-backed AI compute"],
                  url: "https://smarttec.dev",
                  logo: "https://smarttec.dev/logo.svg",
                  description:
                    "Battery-backed AI compute. NVIDIA and Cerebras systems behind z1power LFP battery storage with sub-10ms failover, at an owned site in Mead, Oklahoma.",
                  foundingDate: "2025",
                  address: { "@type": "PostalAddress", addressLocality: "Tulsa", addressRegion: "OK", addressCountry: "US" },
                  knowsAbout: [
                    "data center design",
                    "battery energy storage",
                    "behind-the-meter power",
                    "GPU compute",
                    "liquid cooling",
                    "grid resilience",
                  ],
                  founders: [
                    { "@type": "Person", name: "Syed Hussain", jobTitle: "Co-founder & CEO", worksFor: { "@id": "https://smarttec.dev/#org" }, sameAs: ["https://www.linkedin.com/in/syed-hussain-033661230/"] },
                    { "@type": "Person", name: "Yasir Jahangir", jobTitle: "Co-founder", worksFor: { "@id": "https://smarttec.dev/#org" }, sameAs: ["https://www.linkedin.com/in/hyasir/"] },
                  ],
                  // sameAs must only list profiles that resolve. A 404 here actively
                  // weakens entity resolution. Re-add each URL as the profile goes live.
                  sameAs: ["https://z1power.com", "https://github.com/UDGOK/smarttec"],
                  employee: [
                    { "@type": "Person", name: "Muhammad Siddiqui", jobTitle: "Chief Operating Officer", worksFor: { "@id": "https://smarttec.dev/#org" } },
                  ],
                  contactPoint: { "@type": "ContactPoint", email: "hello@smarttec.dev", contactType: "sales" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://smarttec.dev/#site",
                  url: "https://smarttec.dev",
                  name: "SmartTec",
                  publisher: { "@id": "https://smarttec.dev/#org" },
                },
                {
                  "@type": "Service",
                  "@id": "https://smarttec.dev/#service-compute",
                  name: "GPU cloud and AI compute hosting",
                  provider: { "@id": "https://smarttec.dev/#org" },
                  areaServed: "US",
                  description:
                    "Reserved and on-demand NVIDIA GPU compute and Cerebras inference, colocation, and behind-the-meter battery-backed power for AI workloads.",
                },
                {
                  "@type": "Service",
                  "@id": "https://smarttec.dev/#service-designbuild",
                  name: "Data center design, build and deployment",
                  serviceType: "Data center design and construction",
                  provider: { "@id": "https://smarttec.dev/#org" },
                  areaServed: "US",
                  url: "https://smarttec.dev/design",
                  description:
                    "Design, procurement, and turnkey delivery of high-density AI compute facilities — load modeling, redundancy architecture, cooling design, battery-backed power, and commissioning.",
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}