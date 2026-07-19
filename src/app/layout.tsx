import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Anybody, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nanumPenScript = Nanum_Pen_Script({
  subsets: ["latin"],
  variable: "--font-nanum-pen-script",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smarttec.dev"),
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
                  url: "https://smarttec.dev",
                  logo: "https://smarttec.dev/logo.svg",
                  description:
                    "Battery-backed AI compute. NVIDIA and Cerebras systems behind z1power LFP battery storage with sub-10ms failover, at an owned site in Mead, Oklahoma.",
                  foundingDate: "2025",
                  address: { "@type": "PostalAddress", addressRegion: "OK", addressCountry: "US" },
                  founders: [
                    { "@type": "Person", name: "Syed Hussain" },
                    { "@type": "Person", name: "Yasir Jahangir" },
                  ],
                  sameAs: ["https://z1power.com"],
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
                  name: "GPU cloud and AI compute hosting",
                  provider: { "@id": "https://smarttec.dev/#org" },
                  areaServed: "US",
                  description:
                    "Reserved and on-demand NVIDIA GPU compute and Cerebras inference, colocation, and behind-the-meter battery-backed power for AI workloads.",
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