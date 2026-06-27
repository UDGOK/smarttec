"use client";

export function MarqueeCTA() {
  const items = [
    "DEPLOY · POWER · SCALE",
    "DEPLOY · POWER · SCALE",
    "DEPLOY · POWER · SCALE",
    "DEPLOY · POWER · SCALE",
    "DEPLOY · POWER · SCALE",
    "DEPLOY · POWER · SCALE",
    "DEPLOY · POWER · SCALE",
    "DEPLOY · POWER · SCALE",
  ];

  return (
    <section className="relative bg-greptile-green border-y border-slate/20 overflow-hidden">
      {/* Marquee strip */}
      <div className="overflow-hidden py-6 md:py-10 border-b border-slate/30">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((text, i) => (
            <span
              key={i}
              className="font-anybody font-extrabold text-5xl md:text-7xl lg:text-8xl text-slate tracking-tight mx-6"
            >
              {text}
              <span className="mx-6 text-slate/40">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-8">
            Ready to go<br />grid-independent?
          </h2>
          <p className="text-lg text-slate/80 mb-10 max-w-xl mx-auto">
            Get a fixed-price proposal in 14 days. No surprises, no scope creep, no quarterly renegotiations.
          </p>
          <div className="btn-hex-group justify-center">
            <a href="#contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
              Contact Sales
            </a>
            <a href="#specs" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
              See live specs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarqueeCTA;