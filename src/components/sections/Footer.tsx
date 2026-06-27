"use client";

import Image from "next/image";

const productLinks = [
  { label: "Battery Energy Stack", href: "#features" },
  { label: "Modular Deployments", href: "#integrations" },
  { label: "AURA Load AI", href: "#aura" },
  { label: "Thermal AI", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "API Documentation", href: "#docs" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Press", href: "#press" },
  { label: "Partners", href: "#partners" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
];

const resourceLinks = [
  { label: "Technical Documentation", href: "#docs" },
  { label: "Compliance & Security", href: "#security" },
  { label: "ROI Calculator", href: "#calculator" },
  { label: "Capacity Planner", href: "#planner" },
  { label: "Status Page", href: "#status" },
  { label: "Changelog", href: "#changelog" },
];

const contactLinks = [
  { label: "Sales", href: "#sales" },
  { label: "Support", href: "#support" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Press Inquiries", href: "#press-contact" },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate text-fog">
      {/* Top section */}
      <div className="mx-auto max-w-[1550px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center mb-5">
              <Image src="/logo-green.svg" alt="SmartTec" width={180} height={50} className="h-9 w-auto" />
            </a>
            <p className="text-fog/60 text-sm leading-relaxed mb-6 max-w-sm">
              Infrastructure that doesn&apos;t fail when the grid does. Built in the USA. Deployed in 90 days.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 border border-dashed border-fog/30 hover:bg-greptile-green hover:text-black flex items-center justify-center text-fog/70 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-wider text-fog/60">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
            <FooterColumn title="Contact" links={contactLinks} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dashed border-fog/20 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-space-mono text-[11px] uppercase tracking-wider text-fog/60">
            © {year} SmartTec, Inc. · Made in Arizona
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a href="#privacy" className="font-space-mono text-[11px] uppercase tracking-wider text-fog/60 hover:text-fog">
              Privacy
            </a>
            <a href="#terms" className="font-space-mono text-[11px] uppercase tracking-wider text-fog/60 hover:text-fog">
              Terms
            </a>
            <a href="#cookies" className="font-space-mono text-[11px] uppercase tracking-wider text-fog/60 hover:text-fog">
              Cookies
            </a>
            <a href="#security" className="font-space-mono text-[11px] uppercase tracking-wider text-fog/60 hover:text-fog">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green mb-4">
        [ {title} ]
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-fog/70 text-sm hover:text-greptile-green transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;