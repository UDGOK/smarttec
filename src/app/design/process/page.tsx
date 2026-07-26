import PageShell from "@/components/PageShell";
import Link from "next/link";
import { Breadcrumbs } from "@/components/JsonLd";

const PHASES = [
  {
    n: "01",
    name: "Discovery",
    lead: "Understand the site before proposing anything for it.",
    body: "Site survey, utility position, structural and envelope constraints, water and climate, workload profile, tenant and SLA obligations, permitting authority. We write down what we do not yet know as explicitly as what we do.",
    out: ["Site condition report", "Constraint register", "Open-questions log"],
  },
  {
    n: "02",
    name: "Load model",
    lead: "Every downstream number scales from this one.",
    body: "IT load, rack density and count, PUE target by cooling approach, facility load, heat rejection, redundancy factor, utility service requirement, and battery energy. Each figure carries its worst-case assumption in writing.",
    out: ["Power and thermal load model", "Redundancy basis of design", "Utility service requirement"],
  },
  {
    n: "03",
    name: "Single-line and layout",
    lead: "Where everything physically goes, and how power reaches it.",
    body: "Electrical single-line from service entrance to rack PDU, cooling loop schematic, white-space and support-space layout, battery and switchgear siting, cable and pipe routing, service access and clearances.",
    out: ["Electrical single-line", "Mechanical schematic", "Floor and site layout"],
  },
  {
    n: "04",
    name: "Redundancy and FMEA",
    lead: "Assume every part fails, then see what survives.",
    body: "Component-level failure mode and effects analysis: how each part fails, what happens when it does, how likely, how detectable, how severe. Single points of failure get designed out or explicitly accepted in writing, never discovered later.",
    out: ["FMEA workbook", "Single-point-of-failure register", "Independent design review"],
  },
  {
    n: "05",
    name: "Procurement",
    lead: "The schedule is set by whatever has the longest lead time.",
    body: "Specification and sourcing of transformers, switchgear, UPS and battery systems, CDUs and cooling plant, racks and PDUs. Vendor evaluation against the specification rather than against the sales deck, plus lead-time tracking against the critical path.",
    out: ["Bill of materials", "Vendor evaluation matrix", "Long-lead schedule"],
  },
  {
    n: "06",
    name: "Build and commissioning",
    lead: "Nothing is proven until it is measured under load.",
    body: "Trade coordination, integration, and a commissioning sequence that tests the failure modes rather than assuming them: transfer events, thermal performance at design load, alarm and monitoring verification. Measured results, not design intent.",
    out: ["Commissioning scripts and results", "As-built documentation", "Operations handover pack"],
  },
];

export default function ProcessPage() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Design & Build", path: "/design" }, { name: "Process", path: "/design/process" }]} />
      <div className="bg-background">
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 md:py-24">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-2 h-2 bg-neon" />[ How we work ]
              </span>
              <h1 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.93] text-4xl sm:text-6xl lg:text-7xl mb-6">
                Six phases.
                <br />
                Named deliverables
                <br />
                at every one.
              </h1>
              <p className="text-lg md:text-xl text-slate/75 max-w-3xl leading-relaxed">
                You should know what lands on your desk at the end of each phase before you sign anything. Here is the
                sequence, and what comes out of it.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
          <div className="space-y-px bg-slate/20">
            {PHASES.map((p) => (
              <div key={p.n} className="bg-background grid gap-6 lg:grid-cols-[auto_minmax(0,1.6fr)_minmax(0,1fr)] p-6 lg:p-8">
                <div className="font-anybody font-extrabold text-5xl lg:text-6xl tracking-tight text-slate/20 leading-none lg:w-24">
                  {p.n}
                </div>
                <div>
                  <h2 className="font-anybody font-extrabold uppercase tracking-tight text-2xl mb-2">{p.name}</h2>
                  <p className="font-space-mono text-[11px] uppercase tracking-widest text-slate/55 mb-4">{p.lead}</p>
                  <p className="text-slate/75 text-[15px] leading-relaxed">{p.body}</p>
                </div>
                <div className="border-l-2 border-neon pl-5">
                  <div className="font-space-mono text-[10px] uppercase tracking-widest text-slate/50 mb-3">
                    You receive
                  </div>
                  <ul className="list-none m-0 space-y-2">
                    {p.out.map((o) => (
                      <li key={o} className="flex gap-2.5 text-[14px] text-slate/80">
                        <span className="font-space-mono text-greptile-green shrink-0">[✓]</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-dashed border-slate/50 bg-neon/12 p-5 font-space-mono text-[11px] leading-relaxed max-w-4xl">
            <strong>SCOPE OF RESPONSIBILITY.</strong> SmartTec models redundancy, thermal and power budgets, and
            reliability architecture, and organizes the evidence behind those models. It does not replace licensed
            professional engineering sign-off or code compliance review. The stamp belongs to a PE of record, and
            construction proceeds on stamped drawings — never on a planning model.
          </div>
        </section>

        <section className="bg-slate text-fog">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16">
            <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-5xl mb-5 max-w-3xl">
              Phase one starts with a questionnaire.
            </h2>
            <p className="text-fog/70 max-w-2xl text-lg leading-relaxed mb-8">
              Three minutes, and you get the first cut of the load model back immediately.
            </p>
            <Link href="/design/scope" className="btn-hex btn-hex-lg !bg-neon !border-neon !text-slate">
              Scope your site →
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
