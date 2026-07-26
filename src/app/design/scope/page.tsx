import PageShell from "@/components/PageShell";
import ScopeWizard from "@/components/ScopeWizard";
import Link from "next/link";

export default function ScopePage() {
  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 md:py-20">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-2 h-2 bg-neon" />[ Design · Build · Deploy ]
              </span>
              <h1 className="font-anybody font-extrabold uppercase tracking-tight leading-[0.93] text-4xl sm:text-6xl lg:text-7xl mb-6">
                Tell us about your site.
                <br />
                We&apos;ll tell you what it takes.
              </h1>
              <p className="text-lg md:text-xl text-slate/75 max-w-3xl leading-relaxed">
                A short questionnaire that returns a real preliminary load model — facility load, utility service,
                rack count, battery sizing, heat rejection, footprint — with every assumption printed next to the
                number so your own engineer can check the arithmetic. No sales call required to get an answer.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  ["Time", "≈ 3 min"],
                  ["Output", "Scope sheet"],
                  ["Cost", "$0"],
                  ["Commitment", "None"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="font-space-mono text-[10px] uppercase tracking-widest text-slate/55">{k}</div>
                    <div className="font-anybody font-extrabold text-xl tracking-tight mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        <ScopeWizard />

        <hr className="border-border w-full opacity-30" />

        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="font-anybody font-extrabold uppercase tracking-tight text-lg mb-2">Why we show the math</h2>
              <p className="text-slate/70 leading-relaxed text-[15px]">
                Every figure on the scope sheet carries the formula and assumption that produced it. If you disagree
                with our PUE target or our depth-of-discharge margin, you can see exactly where to argue. A number you
                cannot audit is a number you should not plan around.
              </p>
            </div>
            <div>
              <h2 className="font-anybody font-extrabold uppercase tracking-tight text-lg mb-2">What this is not</h2>
              <p className="text-slate/70 leading-relaxed text-[15px]">
                It is not a design and not a quote. Real requirements come out of a site survey, a utility study, AHJ
                review, equipment selection, and a measured load profile. Nothing generated here is valid for
                construction or procurement without licensed PE sign-off.
              </p>
            </div>
            <div>
              <h2 className="font-anybody font-extrabold uppercase tracking-tight text-lg mb-2">What happens next</h2>
              <p className="text-slate/70 leading-relaxed text-[15px]">
                We read what you sent and come back with a written response — what we would question, what we would
                need to see, and which engagement level fits.{" "}
                <Link href="/design/process" className="underline hover:text-greptile-green">
                  See how we work →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
