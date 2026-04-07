"use client";

import { useState } from "react";
import Image from "next/image";
import { ATHLETE_QUOTES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { Reveal } from "@/components/ui-custom/reveal";
import { cn } from "@/lib/utils";

export function AthleteQuotes() {
  const [active, setActive] = useState(0);
  const quote = ATHLETE_QUOTES[active];

  return (
    <section id="athlete-quotes" className="py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <SectionLabel>Athlete Voices</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#e5e2e1] mb-4 leading-none max-w-2xl">
            The Athletes
            <br />
            <em className="not-italic text-[#e7c090]">Speak for Themselves</em>
          </h2>
          <p className="font-body text-[#d2c4b7]/50 text-sm md:text-base mb-16 max-w-lg leading-relaxed">
            Real endorsements from pro athletes. This is the content ecosystem we build for footwear brands.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Featured quote image */}
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <Image
                key={quote.id}
                src={quote.src}
                alt={quote.alt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          {/* Quote text + selector */}
          <Reveal delay={100} className="lg:col-span-7 flex flex-col justify-center">
            {quote.quote ? (
              <>
                {/* Giant quote mark */}
                <span
                  className="font-display text-[100px] leading-none text-[#e7c090]/8 select-none -mb-8 block"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-display text-xl md:text-3xl lg:text-4xl font-light italic leading-snug text-[#e5e2e1] mb-6">
                  &ldquo;{quote.quote}&rdquo;
                </p>
                {quote.emotionalBenefit && (
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-5 h-px bg-[#e7c090]/50" />
                    <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#e7c090]/70">
                      {quote.emotionalBenefit}
                    </span>
                  </div>
                )}
              </>
            ) : (
              /* Visual mosaic for athletes without quote text */
              <div className="grid grid-cols-2 gap-3 mb-10">
                {ATHLETE_QUOTES.filter((q) => q.id !== quote.id)
                  .slice(0, 4)
                  .map((q) => (
                    <div
                      key={q.id}
                      className="relative aspect-square rounded-xl overflow-hidden opacity-60"
                    >
                      <Image
                        src={q.src}
                        alt={q.alt}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 60%)",
                        }}
                      />
                    </div>
                  ))}
              </div>
            )}

            <div className="mb-10">
              <span className="font-body font-bold text-[#e5e2e1] text-base block">
                {quote.name}
              </span>
              <span className="font-body text-[#d2c4b7]/50 text-xs uppercase tracking-widest">
                {quote.title}
              </span>
            </div>

            {/* Athlete selector pills */}
            <div className="flex flex-wrap gap-2">
              {ATHLETE_QUOTES.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "font-body text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-all duration-300",
                    i === active
                      ? "bg-gradient-to-r from-[#e7c090] to-[#c5a073] text-[#432b08]"
                      : "ghost-border text-[#e5e2e1]/40 hover:text-[#e7c090] hover:border-[#e7c090]/20"
                  )}
                >
                  {q.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Quote cards strip */}
        <Reveal delay={150}>
          <div
            className="mt-20 pt-12"
            style={{ borderTop: "1px solid rgba(78,69,59,0.15)" }}
          >
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#e5e2e1]/20 block mb-8">
              All Endorsements
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {ATHLETE_QUOTES.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative aspect-square rounded-lg overflow-hidden transition-all duration-300",
                    i === active
                      ? "ring-2 ring-[#e7c090] scale-[1.02]"
                      : "opacity-50 hover:opacity-80"
                  )}
                >
                  <Image
                    src={q.src}
                    alt={q.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
