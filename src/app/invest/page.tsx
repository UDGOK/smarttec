import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import PageShell from "@/components/PageShell";
import { isAuthed, verifyPassword, expectedToken, INVEST_COOKIE } from "@/lib/investAuth";

export const metadata: Metadata = {
  title: "Investor data room · SmartTec",
  description: "Private investor materials. Access by invitation only.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

async function login(formData: FormData) {
  "use server";
  const pw = String(formData.get("password") ?? "");
  if (verifyPassword(pw)) {
    const token = expectedToken();
    if (token) {
      const jar = await cookies();
      jar.set(INVEST_COOKIE, token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/invest",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }
    redirect("/invest");
  }
  redirect("/invest?e=1");
}

async function logout() {
  "use server";
  const jar = await cookies();
  jar.delete({ name: INVEST_COOKIE, path: "/invest" });
  redirect("/invest");
}

const stats = [
  { v: "30×", l: "NVIDIA B200 GPUs" },
  { v: "100%", l: "Capacity pre-committed · 6 anchors" },
  { v: "100G", l: "Symmetrical DIA fiber (signed quote)" },
  { v: "$2.0M", l: "Raise · CAPEX $1.99M w/ contingency" },
  { v: "34%", l: "Modeled Year-1 cash yield" },
];

const files = [
  {
    name: "Mead-Data-Center-Investor-Memorandum.pdf",
    title: "Investor Memorandum",
    kind: "PDF · 8 pages",
    desc: "The full case: the asset, audited build, unit economics, five-year model priced for rate decline, investment tiers, risks stated plainly.",
  },
  {
    name: "Mead-Data-Center-Investor-FAQ.pdf",
    title: "Investor FAQ — 20 hard questions",
    kind: "PDF · 4 pages",
    desc: "The questions you should be asking, answered with the same audited numbers — including the bear case, straight.",
  },
  {
    name: "SmartTec-Mead-DC-Model.xlsx",
    title: "Live Financial Model",
    kind: "Excel workbook · 120 formulas",
    desc: "Fully formula-driven. Edit the rate, decay, and CAPEX levers; payback, MOIC, and IRR recalculate live. Includes the levered debt option.",
  },
];

function Gate({ error, configured }: { error: boolean; configured: boolean }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 bg-slate">
      <div className="w-full max-w-md">
        <p className="font-space-mono text-[11px] tracking-[0.15em] uppercase text-greptile-green mb-3">
          [ Private · Investor access ]
        </p>
        <h1 className="font-anybody font-black uppercase text-4xl leading-none text-background mb-4">
          Mead Data
          <br />
          Center
        </h1>
        <p className="text-sm text-silver mb-6 leading-relaxed">
          This data room is for invited investors only. Enter the access phrase
          you received from SmartTec.
        </p>
        {!configured ? (
          <div className="border border-dashed border-silver/40 p-4 text-sm text-silver">
            Portal not yet configured. Set the{" "}
            <code className="font-space-mono text-greptile-green">INVEST_PASSWORD</code>{" "}
            environment variable in Vercel and redeploy.
          </div>
        ) : (
          <form action={login} className="flex flex-col gap-3">
            <input
              type="password"
              name="password"
              autoComplete="off"
              autoFocus
              placeholder="Access phrase"
              className="w-full bg-transparent border-2 border-silver/50 focus:border-greptile-green outline-none px-4 py-3 text-background font-space-mono text-sm placeholder:text-silver/50"
            />
            {error && (
              <p className="font-space-mono text-[11px] text-bloom">
                [ Incorrect phrase — try again ]
              </p>
            )}
            <button
              type="submit"
              className="self-start bg-greptile-green text-slate font-space-mono font-bold text-xs tracking-[0.1em] uppercase px-6 py-3 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] hover:bg-neon transition-colors"
            >
              Enter data room →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Portal() {
  return (
    <>
      <section className="px-6 sm:px-10 max-w-5xl mx-auto pt-10 pb-6">
        <p className="font-space-mono text-[11px] tracking-[0.15em] uppercase text-slate/60 mb-3">
          [ Confidential · Investor data room · July 2026 ]
        </p>
        <h1 className="font-anybody font-black uppercase text-5xl sm:text-6xl leading-[0.95] text-slate">
          Mead Data Center
        </h1>
        <p className="mt-4 max-w-2xl text-slate/80 leading-relaxed">
          A 30-GPU NVIDIA B200 cluster on land, power, and buildings we already
          own — six anchor tenants committing 100% of capacity, a signed-quote
          fiber path, and batteries from our own company behind the meter.
        </p>
      </section>

      <section className="px-6 sm:px-10 max-w-5xl mx-auto pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {stats.map((s) => (
            <div
              key={s.l}
              className="border-2 border-slate bg-custom-white p-4 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
            >
              <div className="font-anybody font-black text-2xl text-slate">{s.v}</div>
              <div className="font-space-mono text-[9px] tracking-wide uppercase text-slate/60 mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 max-w-5xl mx-auto pb-10">
        <p className="font-space-mono text-[11px] tracking-[0.15em] uppercase text-slate/60 mb-4">
          [ Documents ]
        </p>
        <div className="flex flex-col gap-4">
          {files.map((f) => (
            <a
              key={f.name}
              href={`/invest/files/${f.name}`}
              className="group border-[1.5px] border-dashed border-slate/40 bg-fog hover:border-greptile-green transition-colors p-5 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex-1">
                <div className="font-anybody font-extrabold uppercase text-lg text-slate">
                  {f.title}
                </div>
                <div className="font-space-mono text-[10px] uppercase tracking-wide text-slate/50 mt-0.5">
                  {f.kind}
                </div>
                <p className="text-sm text-slate/75 mt-2 leading-relaxed">{f.desc}</p>
              </div>
              <span className="shrink-0 self-start sm:self-center bg-greptile-green text-slate font-space-mono font-bold text-[11px] tracking-wider uppercase px-5 py-2.5 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] group-hover:bg-neon transition-colors">
                Download ↓
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 border-2 border-slate bg-custom-white p-5">
          <p className="font-space-mono text-[10px] tracking-[0.12em] uppercase text-slate/60 mb-2">
            [ Verify, don&apos;t trust ]
          </p>
          <p className="text-sm text-slate/80 leading-relaxed">
            Six signed reservation agreements, the Dobson Fiber quote, land
            title, transformer nameplate, and z1Power cost invoices are
            available for inspection on request. Everything in these documents
            is checkable in an afternoon.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[11px] text-slate/50 leading-relaxed max-w-xl">
            Confidential. Not an offer to sell or a solicitation to buy
            securities; illustrative economics only. Final terms prepared by
            counsel. Projections are estimates and actual results will differ.
          </p>
          <form action={logout}>
            <button
              type="submit"
              className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 underline underline-offset-4 hover:text-slate"
            >
              Sign out
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default async function InvestPage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>;
}) {
  const authed = await isAuthed();
  const { e } = await searchParams;
  const configured = Boolean(process.env.INVEST_PASSWORD);

  return (
    <PageShell>
      {authed ? <Portal /> : <Gate error={e === "1"} configured={configured} />}
    </PageShell>
  );
}
