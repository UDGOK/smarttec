import PageShell from "@/components/PageShell";
import Link from "next/link";
import { Breadcrumbs } from "@/components/JsonLd";

const TIERS = [
  {
    tag: "01",
    name: "Design only",
    color: "bg-neon",
    body: "Load model, single-line diagrams, rack and cooling layout, redundancy architecture, equipment specifications, and bill of materials. You take the package to your own contractors.",
    items: ["Power and thermal load model", "Single-line and layout drawings", "Redundancy architecture + FMEA", "Equipment specs and BOM"],
  },
  {
    tag: "02",
    name: "Design + procurement",
    color: "bg-greptile-green",
    body: "Everything in the design package, plus sourcing, negotiation, and lead-time management on the equipment that actually sets your schedule.",
    items: ["Everything in Design only", "Vendor sourcing and evaluation", "Commercial negotiation support", "Long-lead tracking: transformers, switchgear, CDUs, BESS"],
  },
  {
    tag: "03",
    name: "Full turnkey",
    color: "bg-seafoam",
    body: "Design, build, commission, hand over keys. We own the schedule and the integration risk; you take delivery of a facility that runs.",
    items: ["Everything in Design + procurement", "Trade coordination and site management", "Integration and commissioning", "As-built documentation and handover"],
  },
];

const GATES = [
  ["Requirements traceability", "Every design element traces back to a stated requirement, and every requirement traces forward to what satisfies and verifies it. No orphan parts, no untraceable requirements."],
  ["FMEA — assume every part fails", "For each component: how it can fail, what happens, how likely, how detectable, how severe. High-severity failures get prevented or caught by design, not by hope."],
  ["No single point of failure", "Anything whose failure takes down the system gets redundancy, sized by criticality class rather than by habit."],
  ["Defense in depth", "Independent layered safeguards. No single barrier is catastrophic on its own."],
  ["Independent verification", "The designer does not sign off their own work. Fresh, adversarial review against the requirements."],
  ["Quantify, never hand-wave", "“N+1 cooling at worst-case 62 kW per rack,” not “should be fine.” Every margin is a number with its worst-case assumption stated."],
];

const FAQ = [
  {
    q: "How much power does a GPU data center actually need?",
    a: "Facility load is IT load multiplied by PUE, and PUE is largely set by your cooling approach — roughly 1.50 for conventional air, 1.35 for rear-door heat exchangers, and 1.18 for direct-to-chip liquid as design targets. A 1,800 kW IT load on direct-to-chip liquid therefore models to about 2,124 kW facility load, which at N+1 redundancy and 0.9 power factor implies roughly 2.95 MVA of utility service. SmartTec's scope tool at smarttec.dev/design/scope runs this calculation live and prints every assumption next to the result.",
  },
  {
    q: "At what rack density does air cooling stop working?",
    a: "In practice, conventional air with hot-aisle containment is comfortable below about 20 kW per rack. Between roughly 20 and 40 kW per rack, rear-door heat exchangers bridge the gap without plumbing the servers themselves. Above roughly 40 kW per rack — which is where dense NVIDIA B200 and GB200 deployments sit — direct-to-chip liquid becomes the practical floor. SmartTec designs to these thresholds and will push back in a design review when a stated cooling choice does not match a stated density.",
  },
  {
    q: "How much battery energy is needed to ride through a grid outage?",
    a: "Battery energy equals facility load multiplied by ride-through hours, divided by inverter efficiency and by usable depth of discharge. SmartTec designs to 0.9 for each, so a 2,124 kW facility riding through 20 minutes needs approximately 874 kWh of installed LFP capacity. Longer ride-through is linear in energy, which is why most operators size batteries for orderly checkpointing and add generators for extended outages rather than buying hours of battery.",
  },
  {
    q: "What is the longest lead item on a data center build?",
    a: "For greenfield sites it is almost always the utility interconnect study, which sits outside the owner's control and does not compress with money. Behind it sit transformers and medium-voltage switchgear. SmartTec flags the interconnect as critical path whenever a scoping response reports no application filed at a load above 1 MW, because that single fact usually governs the whole schedule.",
  },
  {
    q: "Does SmartTec provide licensed engineering sign-off?",
    a: "No. SmartTec models redundancy, thermal and power budgets, and reliability architecture, and organizes the evidence behind those models. Code compliance and the professional engineering stamp belong to a licensed PE of record. Every figure SmartTec publishes from its scoping tool is labeled an indicative planning estimate requiring engineering validation before use.",
  },
];

export default function DesignPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data center design, build and deployment",
    serviceType: "Data center design and construction",
    provider: { "@type": "Organization", name: "SmartTec", url: "https://smarttec.dev" },
    areaServed: "US",
    description:
      "Design, procurement, and turnkey delivery of high-density AI compute facilities — load modeling, redundancy architecture, cooling design, battery-backed power, and commissioning.",
    url: "https://smarttec.dev/design",
  };

  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Design & Build", path: "/design" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="bg-background">
        {/* HERO */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 md:py-24">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-2 h-2 bg-neon" />[ Design · Build · Deploy ]
              </span>
              <h1 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.93] text-4xl sm:text-6xl lg:text-7xl mb-6">
                We design and deploy
                <br />
                <span className="text-slate/45">the sites other people</span>
                <br />
                only draw.
              </h1>
              <p className="text-lg md:text-xl text-slate/75 max-w-3xl leading-relaxed">
                High-density AI compute facilities — load modeling, redundancy architecture, liquid cooling, and
                battery-backed power. Take the drawings and build it yourself, or hand us the whole thing and take
                delivery of a facility that runs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/design/scope" className="btn-hex btn-hex-lg !bg-neon !border-neon !text-slate">
                  Scope your site →
                </Link>
                <Link href="/design/process" className="btn-hex-outline btn-hex-lg !border-slate">
                  How we work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* HONESTY BLOCK */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-start">
            <div>
              <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-2 h-2 bg-neon" />[ Where we stand ]
              </span>
              <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl">
                No logos.
                <br />
                No case studies.
                <br />
                Just the method.
              </h2>
            </div>
            <div className="space-y-5 text-slate/80 text-[16px] md:text-[17px] leading-relaxed">
              <p>
                This is a new practice. We are not going to show you a wall of client logos we do not have, or a
                delivered-megawatt count we cannot document. Every other page on this site is held to the same
                standard, and this one is no exception.
              </p>
              <p>
                What we can put in front of you is the discipline the work runs on — the gates below, which every
                design has to clear before it ships, and which you are welcome to hold us to. Most firms will not
                publish theirs. And you can watch the method operate before you speak to anyone: the{" "}
                <Link href="/design/scope" className="underline decoration-neon decoration-2 underline-offset-2 hover:text-greptile-green">
                  scoping tool
                </Link>{" "}
                returns a real load model from your own numbers, shows every assumption behind it, and tells you when
                your inputs contradict each other — including when you have over-specified and should spend less.
              </p>
              <p className="font-space-mono text-[12px] leading-relaxed text-slate/60 border-l-2 border-neon pl-4">
                Hard stop, stated up front: we model redundancy, thermal and power budgets, and reliability
                architecture. We do not replace licensed PE sign-off or code compliance. The stamp belongs to a
                professional engineer of record.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* TIERS */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-2 h-2 bg-neon" />[ Three ways to engage ]
          </span>
          <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl mb-10 max-w-3xl">
            Take the drawings, or take the keys.
          </h2>
          <div className="grid gap-px bg-slate/20 md:grid-cols-3">
            {TIERS.map((t) => (
              <div key={t.name} className="bg-background p-6 lg:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${t.color} font-space-mono text-[11px] font-bold px-2 py-1 text-slate`}>{t.tag}</span>
                  <h3 className="font-anybody font-extrabold uppercase tracking-tight text-xl">{t.name}</h3>
                </div>
                <p className="text-slate/75 leading-relaxed text-[15px] mb-6">{t.body}</p>
                <ul className="list-none m-0 space-y-2 mt-auto">
                  {t.items.map((i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] text-slate/80">
                      <span className="font-space-mono text-greptile-green shrink-0">[✓]</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 font-space-mono text-[11px] uppercase tracking-widest text-slate/50">
            Not sure which? Pick &ldquo;advise me&rdquo; in the scoping tool and we will recommend one.
          </p>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* GATES */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-2 h-2 bg-neon" />[ The design gates ]
          </span>
          <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-3xl">
            Every design clears all six.
          </h2>
          <p className="text-slate/70 max-w-[68ch] leading-relaxed mb-10">
            No method delivers literally zero defects. These drive defects toward zero by construction and catch the
            rest before they ship. They are published here so you can hold us to them.
          </p>
          <div className="grid gap-px bg-slate/20 sm:grid-cols-2 lg:grid-cols-3">
            {GATES.map(([title, body], i) => (
              <div key={title} className="bg-background p-6 lg:p-7">
                <div className="font-space-mono text-[10px] tracking-widest text-slate/45 mb-3">
                  GATE {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-anybody font-extrabold uppercase tracking-tight text-lg mb-2.5 leading-tight">{title}</h3>
                <p className="text-slate/70 text-[14px] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* FAQ */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-2 h-2 bg-neon" />[ Common questions ]
          </span>
          <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl lg:text-5xl mb-10 max-w-3xl">
            The numbers people ask us for.
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {FAQ.map((f) => (
              <div key={f.q} className="border-t border-dashed border-slate/30 pt-6">
                <h3 className="font-anybody font-extrabold uppercase tracking-tight text-lg mb-3 leading-tight">{f.q}</h3>
                <p className="text-slate/75 text-[15px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate text-fog">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 md:py-20">
            <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-neon mb-5">
              <span className="w-2 h-2 bg-neon" />[ Start here ]
            </span>
            <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-5xl lg:text-6xl mb-5 max-w-4xl">
              Three minutes gets you a load model.
            </h2>
            <p className="text-fog/70 max-w-2xl text-lg leading-relaxed mb-8">
              Answer a short questionnaire and watch the scope sheet build itself. Free, no signup, and every number
              shows the assumption it came from.
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
