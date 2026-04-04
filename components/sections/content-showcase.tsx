"use client";

import { useState } from "react";
import {
  BLUMAKA_CONTENT,
  CONTENT_CATEGORIES,
  ContentCategory,
  ContentItem,
} from "@/lib/constants";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { ContentCard } from "@/components/ui-custom/content-card";
import { Lightbox } from "@/components/ui-custom/lightbox";
import { Reveal } from "@/components/ui-custom/reveal";
import { cn } from "@/lib/utils";

// Placeholder card for future content
function MockCard({ label }: { label: string }) {
  return (
    <div className="aspect-square bg-[#1c1b1b] rounded-xl ghost-border flex flex-col items-center justify-center gap-3 text-center p-6">
      <div className="w-8 h-8 rounded-full border border-[#4e453b]/30 flex items-center justify-center">
        <span className="text-[#e7c090]/30 text-lg">+</span>
      </div>
      <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#e5e2e1]/20">
        {label}
      </span>
    </div>
  );
}

export function ContentShowcase() {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>("special");
  const [lightbox, setLightbox] = useState<ContentItem | null>(null);

  const filtered = BLUMAKA_CONTENT.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="work" className="py-24 md:py-32 bg-[#131313]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <SectionLabel>Case Study</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1] leading-none">
                Blumaka
              </h2>
              <p className="font-body text-[#d2c4b7]/60 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
                How we built a premium authority content ecosystem for a
                pro-athlete insole brand — across ads, action content, athlete
                endorsements, and brand storytelling.
              </p>
            </div>
            <span className="font-body text-[#e5e2e1]/20 text-xs uppercase tracking-widest whitespace-nowrap">
              2024 — 2025
            </span>
          </div>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-12">
            {CONTENT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "font-body text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#e7c090] to-[#c5a073] text-[#432b08]"
                    : "ghost-border text-[#e5e2e1]/50 hover:text-[#e7c090] hover:border-[#e7c090]/20"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px] md:auto-rows-[320px]">
          {filtered.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 80}
              className={cn(
                item.span === "wide"
                  ? "md:col-span-8"
                  : "md:col-span-4"
              )}
            >
              <ContentCard
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                label={item.label}
                category={item.category}
                onClick={() => setLightbox(item)}
                className="h-full"
              />
            </Reveal>
          ))}

          {/* Fill with mocks if fewer than 3 items */}
          {filtered.length < 2 && (
            <>
              <Reveal
                delay={filtered.length * 80}
                className="md:col-span-4"
              >
                <MockCard label="More content coming soon" />
              </Reveal>
              <Reveal
                delay={(filtered.length + 1) * 80}
                className="md:col-span-4"
              >
                <MockCard label="More content coming soon" />
              </Reveal>
            </>
          )}
          {filtered.length === 2 && (
            <Reveal
              delay={filtered.length * 80}
              className="md:col-span-4"
            >
              <MockCard label="More content coming soon" />
            </Reveal>
          )}
        </div>

        {/* Bottom tagline */}
        <Reveal delay={200}>
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px flex-1" style={{ background: "rgba(78,69,59,0.15)" }} />
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#e5e2e1]/20">
              More clients coming soon
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(78,69,59,0.15)" }} />
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          width={lightbox.width}
          height={lightbox.height}
          isOpen={!!lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
