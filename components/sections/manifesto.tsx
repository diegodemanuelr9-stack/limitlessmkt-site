import Image from "next/image";
import { MANIFESTO, SUPPLEMENTARY_IMAGES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { Reveal } from "@/components/ui-custom/reveal";

export function Manifesto() {
  return (
    <section className="py-24 md:py-32 bg-[#1c1b1b] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — Copy */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <SectionLabel>{MANIFESTO.eyebrow}</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-10">
                <span className="text-[#e5e2e1]">{MANIFESTO.headline}</span>
                <br />
                <em className="not-italic text-[#e7c090]">
                  {MANIFESTO.headlineAccent}
                </em>
              </h2>
            </Reveal>

            {MANIFESTO.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="font-body text-[#d2c4b7]/60 text-base leading-relaxed mb-6">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            {/* Pull quote */}
            <Reveal delay={200}>
              <div
                className="mt-10 pl-6 py-2"
                style={{ borderLeft: "2px solid rgba(231,192,144,0.4)" }}
              >
                <p className="font-display text-xl md:text-2xl italic text-[#e7c090] font-light">
                  &ldquo;{MANIFESTO.pullQuote}&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={SUPPLEMENTARY_IMAGES.trust250.src}
                  alt={SUPPLEMENTARY_IMAGES.trust250.alt}
                  width={SUPPLEMENTARY_IMAGES.trust250.width}
                  height={SUPPLEMENTARY_IMAGES.trust250.height}
                  className="w-full h-auto object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                {/* Top overlay for depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(28,27,27,0.3) 0%, transparent 50%)",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
