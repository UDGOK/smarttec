"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const sections = [
  {
    title: "Hosting and Architecture",
    items: [
      {
        h: "Cloud-based (hosted) services",
        p: "SmartTec infrastructure is hosted on AWS GovCloud and Microsoft Azure for Government. Customer telemetry, control plane, and operational data live in SOC 2 Type II environments with FedRAMP Moderate authorization in process.",
      },
      {
        h: "On-premises (self-hosted) services",
        p: "For self-hosted SmartTec deployments, the full AURA control plane runs on your infrastructure — your data center, your VPC, your hardware. No telemetry ever leaves your environment.",
      },
      {
        h: "Battery cell supply chain",
        p: "All cells are manufactured in our Arizona facility. We do not source from foreign suppliers. Full chain-of-custody audit available to federal customers.",
      },
      {
        h: "Storage of customer telemetry",
        p: "Operational data is stored on encrypted filesystems. Access is tightly controlled, audited, and revoked automatically when GitHub/GitLab access is revoked. Vector embeddings are stored separately and can be disabled per-customer.",
      },
    ],
  },
  {
    title: "Confidentiality and Security Controls",
    items: [
      {
        h: "Personnel",
        p: "All SmartTec employees undergo background checks before employment and receive security training during onboarding and ongoing. All employees sign our information security policy covering confidentiality.",
      },
      {
        h: "Access controls",
        p: "Role-based access with least-privilege defaults. Production access requires MFA + hardware key. All access is logged and audited quarterly.",
      },
      {
        h: "Encryption",
        p: "TLS 1.3 in transit. AES-256-GCM at rest. Customer-managed keys (CMK) available for Enterprise and Federal customers.",
      },
      {
        h: "Return and deletion of data",
        p: "Customer data can be returned within 30 days of termination. Customer-initiated hard delete removes data from production systems within 24 hours. Backups destroyed within 30 days.",
      },
    ],
  },
  {
    title: "Monitoring and Validation",
    items: [
      {
        h: "Certificates",
        p: "SOC 2 Type II compliant. ITAR registered. HIPAA-ready. FedRAMP Moderate in process. Customer-facing trust center at trust.smarttec.io.",
      },
      {
        h: "Penetration testing",
        p: "Annual third-party pen tests by a CREST-accredited firm. All findings remediated within 30 days. Executive summary available under NDA.",
      },
      {
        h: "Continuous scanning",
        p: "24/7 hybrid automated vulnerability scanning. CVE monitoring with automated patch deployment for non-breaking security updates.",
      },
      {
        h: "Incident response",
        p: "Documented IR plan with 1-hour acknowledgment SLA for P1 incidents. Status page at status.smarttec.io.",
      },
    ],
  },
];

const quickLinks = [
  { label: "Trust Center", href: "https://trust.smarttec.io", external: true },
  { label: "Terms of Service", href: "/security/terms" },
  { label: "Privacy Policy", href: "/security/privacy" },
  { label: "Subprocessors", href: "/security/subprocessors" },
];

const sectionIds: Record<string, string> = {
  "Hosting and Architecture": "hosting-and-architecture",
  "Confidentiality and Security Controls": "confidentiality-and-security-controls",
  "Monitoring and Validation": "monitoring-and-validation",
};

export default function SecurityPage() {
  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ SECURITY ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                Security practices.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-4">
                SmartTec&apos;s administrative, technical, and physical controls. SOC 2 Type II. ITAR. FedRAMP Moderate (in process).
              </p>
              <p className="font-space-mono text-xs text-slate/60 uppercase tracking-wider">
                Last updated: June 2026
              </p>
              <div className="mt-8 border border-dashed border-slate/30 bg-fog/50 p-5 max-w-2xl">
                <p className="text-sm text-slate/70 leading-relaxed">
                  We take the security of customer data seriously at SmartTec. If you have additional questions, please email <Link href="mailto:security@smarttec.io" className="font-bold text-slate underline">security@smarttec.io</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Quick Links — greptile-style: h2 + bulleted list, inline. No heavy boxed container. */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ QUICK LINKS ]
            </span>
            <h2 id="quick-links" className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight mb-6 scroll-mt-24">
              Quick Links.
            </h2>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-slate underline underline-offset-4 decoration-slate/40 hover:decoration-greptile-green hover:text-slate transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-sm text-slate/70 leading-relaxed">
              <strong className="font-anybody font-bold text-slate">Data Processing Agreement (DPA):</strong>{" "}
              Available on request. Contact{" "}
              <a href="mailto:security@smarttec.io" className="underline underline-offset-4 decoration-slate/40 hover:decoration-greptile-green text-slate">
                security@smarttec.io
              </a>{" "}
              to obtain a copy.
            </p>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Content sections */}
        {sections.map((section, sidx) => (
          <section key={section.title} className="bg-background">
            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                  [ {section.title.toUpperCase()} ]
                </span>
                <h2 id={sectionIds[section.title]} className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight scroll-mt-24">
                  {section.title}.
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {section.items.map((item, i) => (
                  <motion.div
                    key={item.h}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="border border-dashed border-slate/30 bg-fog/50 p-6 md:p-7"
                  >
                    <h3 className="text-lg font-anybody font-bold text-slate mb-3">{item.h}</h3>
                    <p className="text-sm text-slate/70 leading-relaxed">{item.p}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {sidx < sections.length - 1 && <hr className="border-border w-full opacity-20" />}
          </section>
        ))}

        <hr className="border-border w-full opacity-30" />

        {/* Contact */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight mb-4">
              Questions about security?
            </h2>
            <p className="text-slate/80 mb-8 max-w-xl mx-auto">
              Reach out to <Link href="mailto:security@smarttec.io" className="font-bold underline">security@smarttec.io</Link>. We&apos;ll respond within 24 hours.
            </p>
            <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate inline-flex">
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}