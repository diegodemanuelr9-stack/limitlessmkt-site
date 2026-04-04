import { PRE_CTA } from "@/lib/constants";
import { Reveal } from "@/components/ui-custom/reveal";

export function PreCta() {
  return (
    <section className="py-24 md:py-40 bg-black infinity-bg overflow-hidden relative">
      {/* Gradient fade in/out */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #131313 0%, transparent 30%, transparent 70%, #000000 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <h2 className="font-display font-bold tracking-tight leading-[0.9] text-5xl md:text-7xl lg:text-8xl xl:text-[100px] uppercase">
            <span className="text-[#e5e2e1]">{PRE_CTA.headline}</span>
            <br />
            <em className="not-italic text-[#e7c090]">{PRE_CTA.headlineAccent}</em>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-body text-[#d2c4b7]/40 text-sm uppercase tracking-[0.4em] mt-8">
            {PRE_CTA.subtext}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
