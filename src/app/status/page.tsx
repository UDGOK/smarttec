import Link from "next/link";
import PageShell from "@/components/PageShell";
import StatusConsole from "@/components/StatusConsole";

const services = [
  { name: "z1power battery platform", note: "Partner hardware — shipping US-wide since 2021", state: "shipping" },
  { name: "Site · Mead, Oklahoma", note: "Land, buildings, and 3 MVA transformer owned outright", state: "secured" },
  { name: "AURA orchestration", note: "Power and workload control plane", state: "in build" },
  { name: "Compute fleet", note: "30× NVIDIA B200 · Phase 1", state: "in build" },
  { name: "Network · 100G fibre", note: "Dobson dedicated symmetrical — signed quote", state: "contracted" },
  { name: "Customer API & dashboard", note: "Reservation, telemetry, and billing surfaces", state: "in build" },
];

const STATE_STYLE: Record<string, string> = {
  shipping: "bg-greptile-green text-black",
  secured: "bg-greptile-green text-black",
  contracted: "bg-seafoam text-black",
  "in build": "bg-neon text-slate",
};

const upcoming = [
  {
    date: "Q4 2026",
    title: "Mead site power-on",
    body: "Phase 1 energised. This page switches from preview to live telemetry on the same day, and the numbers stop being simulated.",
  },
  {
    date: "Q4 2026",
    title: "First measured PUE and failover data",
    body: "Commissioning results published as measured values, replacing every design target quoted on this site.",
  },
  {
    date: "Q1 2027",
    title: "Public status API",
    body: "The same feed this console renders, exposed as JSON for customer monitoring.",
  },
];

export default function StatusPage() {
  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled border-b border-dashed border-slate/25">
          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
            <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-5">
              <span className="w-2 h-2 bg-neon" />[ System status ]
            </span>
            <h1 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.93] text-4xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl">
              Nothing is live yet.
              <br />
              <span className="text-slate/45">Here is exactly what</span>
              <br />
              you&apos;ll see when it is.
            </h1>
            <p className="text-lg md:text-xl text-slate/75 max-w-3xl leading-relaxed">
              Most pre-launch companies publish a wall of green ticks that measure nothing. We would rather show you the
              real console, running on simulated data and labelled as such, so you can judge the instrumentation before
              you judge the numbers. At power-on this page starts telling the truth automatically.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#console" className="btn-hex btn-hex-md !bg-neon !border-neon !text-slate">
                Watch the failover cycle →
              </Link>
              <Link href="/power" className="btn-hex-outline btn-hex-md !border-slate">
                How the power path works
              </Link>
            </div>
          </div>
        </section>

        {/* Console */}
        <div id="console" className="scroll-mt-32">
          <StatusConsole />
        </div>

        {/* Build state */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-2 h-2 bg-neon" />[ Where each system actually stands ]
          </span>
          <h2 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.95] text-3xl sm:text-4xl mb-10 max-w-3xl">
            No green ticks for things that don&apos;t exist.
          </h2>
          <div className="grid gap-px bg-slate/20 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="bg-background p-6">
                <span
                  className={`inline-block font-space-mono text-[10px] uppercase tracking-widest px-2 py-1 mb-4 ${STATE_STYLE[s.state]}`}
                >
                  {s.state}
                </span>
                <h3 className="font-anybody font-extrabold uppercase tracking-tight text-lg mb-2 leading-tight">{s.name}</h3>
                <p className="text-slate/70 text-[14px] leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Incidents */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-14">
          <div className="border border-dashed border-slate/40 p-8 bg-fog/50">
            <span className="font-space-mono text-[10px] uppercase tracking-widest text-slate/55">[ Incident history ]</span>
            <p className="font-anybody font-extrabold uppercase tracking-tight text-xl mt-3 mb-2">No incidents to report.</p>
            <p className="text-slate/70 text-[15px] leading-relaxed max-w-[62ch]">
              There is no operating history because there is nothing operating. Every incident from power-on forward will
              be posted here with a timestamp, an impact statement, and a written root cause — including the ones that
              make us look bad.
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-16 md:pb-24">
          <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-2 h-2 bg-neon" />[ What turns this page on ]
          </span>
          <div className="space-y-px bg-slate/20 mt-6">
            {upcoming.map((u) => (
              <div key={u.title} className="bg-background grid gap-4 md:grid-cols-[130px_minmax(0,1fr)] p-6">
                <span className="font-space-mono text-[11px] uppercase tracking-widest text-dark-green pt-1">{u.date}</span>
                <div>
                  <h3 className="font-anybody font-extrabold uppercase tracking-tight text-lg mb-2">{u.title}</h3>
                  <p className="text-slate/70 text-[15px] leading-relaxed max-w-[70ch]">{u.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-dashed border-slate/50 bg-neon/12 p-5 font-space-mono text-[11px] leading-relaxed max-w-4xl">
            <strong>ABOUT THE PREVIEW.</strong> Every figure in the console above is synthetic, generated in your
            browser to demonstrate the instrumentation. It is not a measurement, not a forecast, and not a service level
            commitment. Design targets shown — including the sub-10 ms transfer and the 1.18 PUE — are engineering
            objectives to be validated at commissioning. See our{" "}
            <Link href="/legal/engineering-disclaimer" className="underline">
              Engineering Disclaimer
            </Link>
            .
          </div>
        </section>
      </div>
    </PageShell>
  );
}
