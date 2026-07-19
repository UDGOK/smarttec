"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const quickLinks = [
  { label: "Trust Center", href: "#trust-center", accent: "bg-greptile-green" },
  { label: "Subprocessors", href: "#subprocessors", accent: "bg-seafoam" },
  { label: "Privacy Policy", href: "#privacy-policy", accent: "bg-ice" },
  { label: "Terms of Service", href: "#terms-of-service", accent: "bg-lavender" },
  { label: "Data Processing Agreement", href: "#dpa", accent: "bg-peach" },
  { label: "Hosting & Architecture", href: "#hosting-and-architecture", accent: "bg-pink" },
  { label: "Security Controls", href: "#confidentiality-and-security-controls", accent: "bg-greptile-green" },
  { label: "Monitoring & Validation", href: "#monitoring-and-validation", accent: "bg-seafoam" },
];

const trustCenterDocs = [
  { name: "SOC 2 Type II report", status: "Available", note: "Current period: Jan–Dec 2025. Renewed annually." },
  { name: "NDAA §889 compliance attestation", status: "Available", note: "No covered telecommunications or video surveillance equipment from named foreign entities." },
  { name: "FedRAMP Moderate", status: "In process", note: "3PAO engaged. Target authorization: Q4 2026." },
  { name: "HIPAA Business Associate Agreement", status: "Template available", note: "Counter-signed on request for covered entities." },
  { name: "Penetration test executive summary", status: "Available under NDA", note: "Annual third-party test by CREST-accredited firm." },
  { name: "Cyber insurance certificate", status: "Available under NDA", note: "$10M aggregate. Carrier and limits on request." },
  { name: "Subprocessor list", status: "Live", note: "See Subprocessors section below." },
  { name: "Vulnerability disclosure policy", status: "Published", note: "See /security or coordinated disclosure on request." },
];

const subprocessors = [
  { name: "Amazon Web Services", service: "Cloud hosting (GovCloud)", location: "US — GovCloud regions", data: "Compute, storage, control plane" },
  { name: "Microsoft Azure", service: "Cloud hosting (Government)", location: "US — Azure Gov regions", data: "Compute, storage, control plane" },
  { name: "NVIDIA", service: "Fleet telemetry & firmware", location: "US", data: "GPU hardware telemetry, firmware updates" },
  { name: "Cerebras Systems", service: "Fleet telemetry & firmware", location: "US", data: "CS-3 hardware telemetry, firmware updates" },
  { name: "Cloudflare", service: "DDoS protection, edge routing", location: "Global edge", data: "Network metadata only — no customer data" },
  { name: "Stripe", service: "Payment processing", location: "US", data: "Billing details only — card data never touches SmartTec" },
  { name: "HubSpot", service: "CRM & customer support", location: "US", data: "Contact details, support tickets" },
  { name: "Linear", service: "Internal issue tracking", location: "US", data: "Engineering tickets — no customer data" },
  { name: "Datadog", service: "Infrastructure observability", location: "US", data: "Aggregated metrics — no customer content" },
  { name: "PagerDuty", service: "Incident response paging", location: "US", data: "Service health alerts — no customer content" },
];

const privacyPolicy = [
  { h: "What we collect", p: "Account information (name, email, billing), operational telemetry from your SmartTec resources (instance IDs, region, GPU type, runtime metrics), and support correspondence. We do not inspect customer workloads, model weights, or inference inputs/outputs." },
  { h: "How we use it", p: "To provide and improve the service, bill for usage, respond to support requests, send service notifications, and meet legal obligations. We do not use customer data to train third-party models." },
  { h: "Cookies & analytics", p: "Strictly necessary cookies for authentication. Optional analytics cookies only with consent (off by default). We do not sell or share behavioral data with advertisers." },
  { h: "Data retention", p: "Account data is retained while your account is active and for 30 days after termination for recovery. Operational telemetry is retained for 90 days, then aggregated and anonymized. Backups destroyed within 30 days of termination." },
  { h: "Your rights (GDPR / CCPA)", p: "Access, correction, deletion, portability, restriction of processing, objection to processing. Email privacy@smarttec.io to exercise any right. We respond within 30 days. EU/UK representative on request." },
  { h: "International transfers", p: "Customer data is stored in US regions by default. For EU customers, we offer EU data residency (Frankfurt) on Enterprise plans. Standard Contractual Clauses apply for any cross-border transfer." },
  { h: "Subprocessors", p: "See the Subprocessors section below. We notify customers 30 days before adding a new subprocessor that handles customer data." },
  { h: "Security", p: "See Hosting & Architecture, Security Controls, and Monitoring & Validation above for the technical and organizational measures protecting your data." },
  { h: "Children's privacy", p: "SmartTec is a B2B service not directed at children under 16. We do not knowingly collect data from children." },
  { h: "Contact our DPO", p: "Email privacy@smarttec.io, Attn: Data Protection Officer — SmartTec, Inc., Tulsa, OK, USA." },
];

const terms = [
  { h: "1. Acceptance", p: "By creating an account or using SmartTec, you agree to these Terms of Service. If you are entering into them on behalf of a company, you represent that you have authority to bind that company." },
  { h: "2. Service description", p: "SmartTec provides on-demand and reserved access to NVIDIA and Cerebras compute running on SmartTec's battery-backed power infrastructure. The grid is backup; SmartTec's z1power LFP stacks are the primary source, with sub-10ms island-mode failover. Specific features, GPU types, and SLAs are described on the Compute, Pricing, and Status pages." },
  { h: "3. Acceptable use", p: "You may not use SmartTec for illegal activity, to deploy malware, to attempt unauthorized access to other customers' resources, or to violate export control laws. Cryptographic mining is permitted on dedicated bare-metal reservations only." },
  { h: "4. Fees & payment", p: "Fees are billed monthly in arrears based on usage, or in advance for reservations. Payment is due net-30 for Enterprise contracts. Late payment may suspend service after 15 days written notice." },
  { h: "5. Intellectual property", p: "You retain all rights to your data, models, and workloads. We retain all rights to the SmartTec platform, AURA orchestration layer, and z1power hardware designs. We may use aggregated, anonymized operational metrics to improve the service." },
  { h: "6. Confidentiality", p: "Each party will protect the other's confidential information with the same care it uses for its own (no less than reasonable care). Obligations survive termination for 3 years." },
  { h: "7. Warranties & disclaimers", p: "We warrant that the service will perform materially in accordance with the documentation and the SLA on /status. Except as expressly stated, the service is provided \"as is\" and we disclaim all other warranties to the maximum extent permitted by law." },
  { h: "8. Limitation of liability", p: "Neither party's aggregate liability exceeds the fees paid by you in the 12 months preceding the claim. Neither party is liable for indirect, consequential, or punitive damages. These limits do not apply to breach of confidentiality, indemnification obligations, or gross negligence." },
  { h: "9. Indemnification", p: "We will defend you against any third-party claim that the service infringes a US patent, copyright, or trademark, and pay damages awarded. You will defend us against claims arising from your data or your use of the service in violation of these terms." },
  { h: "10. Termination", p: "Either party may terminate for convenience on 30 days written notice (on-demand accounts may terminate any time). Either party may terminate immediately for material breach uncured after 30 days notice. Upon termination, we will return or delete your data per the Privacy Policy." },
  { h: "11. Governing law & disputes", p: "These terms are governed by the laws of the State of Oklahoma, USA, without regard to conflict of laws principles. Disputes are resolved exclusively in the state or federal courts located in Tulsa County, Oklahoma." },
  { h: "12. Changes to terms", p: "We may update these terms. Material changes will be notified 30 days in advance by email to your account contact. Continued use after the effective date constitutes acceptance." },
];

const sections = [
  {
    title: "Hosting and Architecture",
    id: "hosting-and-architecture",
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
        p: "Federal deployments receive single-tenant physical isolation, US-based operations and personnel, and supply-chain documentation scoped per contract under NDA. Restricted-sourcing configurations are quoted per engagement.",
      },
      {
        h: "Storage of customer telemetry",
        p: "Operational data is stored on encrypted filesystems. Access is tightly controlled, audited, and revoked automatically when employee access is terminated. Vector embeddings are stored separately and can be disabled per-customer.",
      },
    ],
  },
  {
    title: "Confidentiality and Security Controls",
    id: "confidentiality-and-security-controls",
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
    id: "monitoring-and-validation",
    items: [
      {
        h: "Certificates",
        p: "SOC 2 Type II compliant. NDAA §889 / FEOC restricted supply chain. HIPAA-ready. FedRAMP Moderate in process. Customer-facing trust center at trust.smarttec.io.",
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
                SmartTec&apos;s administrative, technical, and physical controls — plus the trust, privacy, and legal docs a procurement team needs.
              </p>
              <p className="font-space-mono text-xs text-slate/60 uppercase tracking-wider">
                Last updated: June 2026
              </p>
              <div className="mt-8 border border-dashed border-slate/30 bg-fog/50 p-5 max-w-2xl">
                <p className="text-sm text-slate/70 leading-relaxed">
                  We take the security of customer data seriously at SmartTec. If you have additional questions, please email{" "}
                  <Link href="mailto:security@smarttec.io" className="font-bold text-slate underline">security@smarttec.io</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Quick Links — anchor nav that jumps to populated sections on this same page */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-10 md:py-12">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60">[ QUICK LINKS ]</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {quickLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="group inline-flex items-center gap-2.5 border border-dashed border-slate/40 bg-background hover:border-slate hover:bg-greptile-green/10 transition-colors px-4 py-2.5"
                >
                  <span className={`w-2 h-2 ${l.accent} shrink-0`} />
                  <span className="font-anybody font-bold text-sm text-slate group-hover:text-slate">
                    {l.label}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="h-3 w-3 text-slate/40 group-hover:text-slate transition-colors">
                    <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32-11.32L188.69,144H40a8,8,0,0,1,0-16H188.69L122.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,205.66,149.66Z" transform="rotate(90 128 128)" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Hosting / Confidentiality / Monitoring — existing content */}
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
                <h2 id={section.id} className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight scroll-mt-24">
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
            <hr className="border-border w-full opacity-20" />
          </section>
        ))}

        {/* Trust Center */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ TRUST CENTER ]
              </span>
              <h2 id="trust-center" className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight scroll-mt-24 mb-4">
                Trust Center.
              </h2>
              <p className="text-lg text-slate/70 max-w-3xl">
                Compliance documents, certifications, and security artifacts available to prospects, customers, and procurement teams. Request access at <Link href="mailto:security@smarttec.io" className="font-bold text-slate underline">security@smarttec.io</Link>.
              </p>
            </motion.div>

            <div className="border border-dashed border-slate/30 bg-background overflow-hidden">
              <div className="grid grid-cols-12 bg-fog border-b border-dashed border-slate/30 px-5 py-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                <div className="col-span-5">Document</div>
                <div className="col-span-3">Status</div>
                <div className="col-span-4">Notes</div>
              </div>
              {trustCenterDocs.map((d, i) => (
                <div key={d.name} className={`grid grid-cols-12 items-start px-5 py-4 ${i !== trustCenterDocs.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/5`}>
                  <div className="col-span-5 font-anybody font-bold text-slate">{d.name}</div>
                  <div className="col-span-3">
                    <span className={`inline-flex items-center gap-1.5 font-space-mono text-[10px] uppercase tracking-wider px-2 py-1 ${
                      d.status === "Available" ? "bg-greptile-green/20 text-slate" :
                      d.status === "In process" ? "bg-peach/30 text-slate" :
                      d.status === "Live" ? "bg-seafoam/30 text-slate" :
                      "bg-fog text-slate/70 border border-dashed border-slate/30"
                    }`}>
                      <span className={`w-1.5 h-1.5 ${
                        d.status === "Available" || d.status === "Live" ? "bg-greptile-green" :
                        d.status === "In process" ? "bg-peach" : "bg-slate/50"
                      } rounded-full`} />
                      {d.status}
                    </span>
                  </div>
                  <div className="col-span-4 font-space-mono text-xs text-slate/70 leading-relaxed">{d.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                Request documents
              </Link>
              <Link href="mailto:security@smarttec.io" className="font-anybody font-bold text-sm text-slate underline underline-offset-4 decoration-slate/40 hover:decoration-greptile-green">
                security@smarttec.io →
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Subprocessors */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ SUBPROCESSORS ]
              </span>
              <h2 id="subprocessors" className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight scroll-mt-24 mb-4">
                Subprocessors.
              </h2>
              <p className="text-lg text-slate/70 max-w-3xl">
                Third parties that process customer data on SmartTec&apos;s behalf. We notify customers 30 days before adding a new subprocessor.
              </p>
            </motion.div>

            <div className="border border-dashed border-slate/30 overflow-hidden">
              <div className="grid grid-cols-12 bg-fog border-b border-dashed border-slate/30 px-5 py-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                <div className="col-span-4">Subprocessor</div>
                <div className="col-span-3">Service</div>
                <div className="col-span-2">Location</div>
                <div className="col-span-3">Data processed</div>
              </div>
              {subprocessors.map((s, i) => (
                <div key={s.name} className={`grid grid-cols-12 items-start px-5 py-4 ${i !== subprocessors.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/5`}>
                  <div className="col-span-4 font-anybody font-bold text-slate">{s.name}</div>
                  <div className="col-span-3 text-sm text-slate/80">{s.service}</div>
                  <div className="col-span-2 font-space-mono text-xs text-slate/60">{s.location}</div>
                  <div className="col-span-3 font-space-mono text-xs text-slate/70 leading-relaxed">{s.data}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Privacy Policy */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ PRIVACY POLICY ]
              </span>
              <h2 id="privacy-policy" className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight scroll-mt-24 mb-4">
                Privacy Policy.
              </h2>
              <p className="text-lg text-slate/70">
                Effective June 2026. Plain-English summary of how SmartTec handles personal data.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {privacyPolicy.map((item, i) => (
                <motion.div
                  key={item.h}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="bg-background border border-dashed border-slate/30 p-6"
                >
                  <h3 className="text-base font-anybody font-bold text-slate mb-2">{item.h}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{item.p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Terms of Service */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ TERMS OF SERVICE ]
              </span>
              <h2 id="terms-of-service" className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight scroll-mt-24 mb-4">
                Terms of Service.
              </h2>
              <p className="text-lg text-slate/70">
                Effective June 2026. Master terms for using SmartTec. Enterprise contracts may supersede these via order form.
              </p>
            </motion.div>

            <div className="space-y-4 max-w-4xl">
              {terms.map((t, i) => (
                <motion.div
                  key={t.h}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="border border-dashed border-slate/30 bg-fog/50 p-6"
                >
                  <h3 className="text-base font-anybody font-bold text-slate mb-2">{t.h}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{t.p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* DPA */}
        <section className="bg-slate text-fog">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-greptile-green mb-3">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                  [ DATA PROCESSING AGREEMENT ]
                </span>
                <h2 id="dpa" className="text-4xl md:text-5xl font-anybody font-extrabold mb-4 scroll-mt-24">
                  DPA.
                </h2>
                <p className="text-fog/70 leading-relaxed mb-6">
                  Our Data Processing Agreement covers GDPR Article 28, UK GDPR, and the standard contractual clauses for international transfers. Available as a counter-signed PDF on request.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3"><span className="font-space-mono text-greptile-green">→</span><span className="text-fog/80">GDPR Art 28-compliant processor terms</span></div>
                  <div className="flex gap-3"><span className="font-space-mono text-greptile-green">→</span><span className="text-fog/80">Standard Contractual Clauses (2021 modules) included</span></div>
                  <div className="flex gap-3"><span className="font-space-mono text-greptile-green">→</span><span className="text-fog/80">Subprocessor change notification (30 days)</span></div>
                  <div className="flex gap-3"><span className="font-space-mono text-greptile-green">→</span><span className="text-fog/80">Data subject request assistance</span></div>
                  <div className="flex gap-3"><span className="font-space-mono text-greptile-green">→</span><span className="text-fog/80">Audit rights with reasonable notice</span></div>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <Link href="/contact" className="btn-hex-outline btn-hex-md !border-greptile-green !bg-greptile-green !text-slate">
                    Request a signed DPA
                  </Link>
                  <Link href="mailto:privacy@smarttec.io" className="font-anybody font-bold text-sm text-fog underline underline-offset-4 decoration-fog/30 hover:decoration-greptile-green">
                    privacy@smarttec.io →
                  </Link>
                </div>
              </div>
              <div>
                <div className="border border-dashed border-fog/30 p-6">
                  <div className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green mb-3">[ REQUEST A COPY ]</div>
                  <div className="space-y-4">
                    {[
                      { q: "Is the DPA free?", a: "Yes — included for all paid plans." },
                      { q: "Can you accept our customer DPA?", a: "On Enterprise contracts, yes. We mark up redlines within 5 business days." },
                      { q: "What's the turnaround?", a: "Self-service PDF: same-day. Negotiation: typically 1–2 weeks." },
                      { q: "Who signs?", a: "Our CEO or General Counsel. We accept DocuSign, Adobe Sign, and wet-ink." },
                    ].map((f) => (
                      <div key={f.q}>
                        <div className="font-anybody font-bold text-sm text-fog mb-1">{f.q}</div>
                        <div className="text-sm text-fog/70 leading-relaxed">{f.a}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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