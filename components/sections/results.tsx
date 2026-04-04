import { STATS, TESTIMONIAL, CLIENT_LOGOS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { Counter } from "@/components/ui-custom/counter";
import { Reveal } from "@/components/ui-custom/reveal";
import Image from "next/image";

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

        {/* Divider */}
        <div
          className="w-full h-px mb-24"
          style={{ background: "rgba(78,69,59,0.15)" }}
        />

        {/* Testimonial — Patrick Copen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Quote */}
          <Reveal className="lg:col-span-7">
            <div className="relative">
              {/* Giant quote mark */}
              <span
                className="absolute -top-8 -left-4 font-display text-[120px] md:text-[180px] leading-none text-[#e7c090]/5 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative z-10">
                <p className="font-display text-2xl md:text-4xl lg:text-5xl font-light italic leading-tight text-[#e5e2e1] mb-8">
                  &ldquo;Elite performers start with a{" "}
                  <strong className="not-italic font-bold text-[#e7c090]">
                    stable foundation
                  </strong>
                  . That&apos;s why I use Blumaka NonSlip insoles every time I
                  train.&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-body font-bold text-[#e5e2e1] text-base block">
                      {TESTIMONIAL.name}
                    </span>
                    <span className="font-body text-[#d2c4b7]/50 text-xs uppercase tracking-widest">
                      {TESTIMONIAL.title}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </Reveal>

          {/* Patrick image */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl aspect-square max-w-sm mx-auto lg:mx-0">
              <Image
                src={TESTIMONIAL.imageSrc}
                alt={`${TESTIMONIAL.name} — ${TESTIMONIAL.title}`}
                width={1080}
                height={1080}
                className="w-full h-full object-cover"
              />
              {/* Vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(28,27,27,0.6) 0%, transparent 50%)",
                }}
              />
            </div>
          </Reveal>
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
