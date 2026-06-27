"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const faqs = [
  {
    q: "Can SmartTec be deployed on-prem?",
    a: "Yes. We deliver the full SmartTec compute + AURA stack to your data center or federal facility, with z1power BESS sized to your load. Air-gapped options for classified workloads.",
  },
  {
    q: "What compliance frameworks do you support?",
    a: "SOC 2 Type II, NDAA §889 compliant, FEOC restricted supply chain, FedRAMP Moderate (in process), FIPS 140-3, HIPAA-ready. Customer-led audits welcomed. See /security for the full Trust Center inventory.",
  },
  {
    q: "How does procurement work for federal customers?",
    a: "GSA Schedule pending. Direct sales today via OTA (Other Transaction Authority) agreements or standard procurement. Typical CGS cycle 6–10 weeks for federal awards. We counter-sign DPAs and redline MSAs.",
  },
  {
    q: "Can we run on our own cloud?",
    a: "Yes — SmartTec can be deployed on AWS GovCloud, Azure Government, or your existing GovCloud tenancy. You control the cloud account; we deliver and operate the compute + power stack.",
  },
  {
    q: "What about colocation on a customer site?",
    a: "We deliver the full SmartTec stack (compute, BESS, controls) to your facility. You provide the floor space and network. We run operations through your SOC.",
  },
  {
    q: "Do you offer volume discounts?",
    a: "Yes. Reserved capacity tiers, multi-year prepay, and customer-specific fleet builds all carry volume discounts. See /pricing for the standard tiers.",
  },
];

const securityFeatures = [
  {
    n: "01",
    title: "Federal-ready compliance",
    desc: "SOC 2 Type II. NDAA §889 compliant. FEOC restricted supply chain. FedRAMP Moderate in process. FIPS 140-3 modules available. Customer-led audits and redlines welcome.",
  },
  {
    n: "02",
    title: "Single-tenant isolation",
    desc: "Dedicated nodes, dedicated fabric, dedicated BESS. No noisy neighbors. Bring your own KMS keys for encryption-at-rest.",
  },
  {
    n: "03",
    title: "Predictable economics",
    desc: "Reserved capacity contracts, multi-year prepay, and customer-specific fleet builds. No surprise overage charges. Net-30 billing.",
  },
];

const integrations = [
  {
    n: "01",
    title: "AWS GovCloud / Azure Government",
    desc: "Deploy SmartTec on the cloud you already use. We deliver the compute + power layer; you control the cloud account and the data plane.",
  },
  {
    n: "02",
    title: "Customer-managed keys",
    desc: "BYO-KMS via AWS KMS, Azure Key Vault, or HashiCorp Vault. We never see plaintext. Key rotation honored without service interruption.",
  },
  {
    n: "03",
    title: "Direct connect & private peering",
    desc: "AWS Direct Connect, Azure ExpressRoute, or dedicated cross-connect for low-latency, high-throughput paths to your existing infrastructure.",
  },
];

const designPartners = [
  { role: "AI training team", note: "Reserved 16 nodes for continued pretraining. Locked pricing 12 months." },
  { role: "Inference provider", note: "Reserved Cerebras CS-3 capacity for low-latency serving. Co-published case study at power-on." },
  { role: "Federal integrator", note: "Reserved 2 MW for NDAA §889-compliant on-prem delivery Q4 2026." },
];

export default function EnterprisePage() {
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
                [ ENTERPRISE ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                Grid-independence <br />for the enterprise.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl">
                Reserved NVIDIA + Cerebras capacity on z1power megawatt batteries. Designed for the security, procurement, and predictability that enterprise IT demands.
              </p>
              <div className="flex flex-wrap gap-4 items-center mt-8">
                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                  Talk to enterprise sales
                </Link>
                <Link href="/deployments" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
                  See design partner program
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Security / Compliance */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ SECURITY & COMPLIANCE ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                Built for procurement.
              </h2>
              <p className="text-lg text-slate/70 mt-4">
                The certifications, audit packages, and redline-ready contracts your security team needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {securityFeatures.map((f) => (
                <div key={f.n} className="border border-dashed border-slate/30 bg-fog/50 p-6 md:p-7">
                  <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/40 font-bold mb-3">[{f.n}]</div>
                  <h3 className="text-2xl font-anybody font-bold text-slate mb-3">{f.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["SOC 2 Type II", "NDAA §889 compliant", "FEOC restricted", "FedRAMP Moderate (in process)", "FIPS 140-3", "HIPAA-ready"].map((c) => (
                <span key={c} className="font-space-mono text-[11px] uppercase tracking-wider px-3 py-1.5 border border-dashed border-slate/40 bg-fog/50 text-slate/80">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Design partner program */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                  [ DESIGN PARTNER PROGRAM ]
                </span>
                <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight mb-4">
                  Three slots. Q4 2026 power-on.
                </h2>
                <p className="text-slate/70 leading-relaxed mb-6">
                  We&apos;re reserving the first wave of capacity for three design-partner teams. Launch pricing locked 12 months, direct engineering access, named case study at power-on.
                </p>
                <Link href="/deployments" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog">
                  Apply for design partner
                </Link>
              </div>
              <div className="space-y-3">
                {designPartners.map((d, i) => (
                  <div key={i} className="border border-dashed border-slate/30 bg-background p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green">[ SLOT {String(i + 1).padStart(2, "0")} ]</span>
                      <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
                    </div>
                    <div className="font-anybody font-bold text-base text-slate">{d.role}</div>
                    <div className="text-sm text-slate/70 leading-relaxed mt-1">{d.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Integrations */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ INTEGRATIONS ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                Drops into your environment.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {integrations.map((i) => (
                <div key={i.n} className="border border-dashed border-slate/30 bg-fog/50 p-6 md:p-7">
                  <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/40 font-bold mb-3">[{i.n}]</div>
                  <h3 className="text-xl font-anybody font-bold text-slate mb-3">{i.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* FAQ */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-3xl px-6 md:px-12 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ FAQ ]
              </span>
              <h2 className="text-4xl sm:text-5xl font-anybody font-extrabold text-slate tracking-tight">
                Enterprise questions.
              </h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group border border-dashed border-slate/30 bg-fog/50">
                  <summary className="cursor-pointer px-5 py-4 flex items-center justify-between gap-4 hover:bg-greptile-green/10">
                    <div className="flex items-center gap-4">
                      <span className="font-space-mono text-[11px] text-slate/40 font-bold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-anybody font-bold text-slate">{f.q}</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate/60 transition-transform group-open:rotate-180">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pl-12 md:pl-14 text-slate/70 leading-relaxed text-sm border-t border-dashed border-slate/20 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              Reserve enterprise capacity.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Talk to enterprise sales
              </Link>
              <Link href="/security" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                View Trust Center
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}