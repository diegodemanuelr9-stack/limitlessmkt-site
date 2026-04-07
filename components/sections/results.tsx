import { STATS, CLIENT_LOGOS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { Counter } from "@/components/ui-custom/counter";
import { Reveal } from "@/components/ui-custom/reveal";

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-[#1c1b1b] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <SectionLabel>Results</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#e5e2e1] mb-20 leading-none max-w-2xl">
            Numbers That
            <br />
            <em className="not-italic text-[#e7c090]">Don&apos;t Lie</em>
          </h2>
        </Reveal>

        {/* Stats counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <Counter
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </Reveal>
          ))}
        </div>

        {/* Brand logos — clients strip */}
        <Reveal delay={100}>
          <div
            className="mt-24 pt-12"
            style={{ borderTop: "1px solid rgba(78,69,59,0.15)" }}
          >
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#e5e2e1]/20 block mb-8 text-center">
              Brands We&apos;ve Built Authority For
            </span>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {CLIENT_LOGOS.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-10 px-4 ghost-border rounded-lg opacity-40"
                >
                  {logo.placeholder ? (
                    <span className="font-body text-[10px] tracking-widest uppercase text-[#e5e2e1]/40 font-bold">
                      {logo.name}
                    </span>
                  ) : (
                    <span className="font-body text-sm font-bold text-[#e5e2e1]/40">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
