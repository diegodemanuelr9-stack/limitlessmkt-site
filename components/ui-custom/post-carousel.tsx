"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { PostSeries } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PostCarouselProps {
  series: PostSeries;
}

export function PostCarousel({ series }: PostCarouselProps) {
  const [active, setActive] = useState(0);

  const prev = useCallback(() =>
    setActive((i) => (i === 0 ? series.slides.length - 1 : i - 1)),
    [series.slides.length]
  );
  const next = useCallback(() =>
    setActive((i) => (i === series.slides.length - 1 ? 0 : i + 1)),
    [series.slides.length]
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Slide image */}
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#131313]">
        {series.slides.map((slide, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}

        {/* Nav arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#e5e2e1]/70 hover:text-[#e7c090] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#e5e2e1]/70 hover:text-[#e7c090] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Slide counter badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
          <span className="font-body text-[9px] tracking-widest text-[#e5e2e1]/60">
            {active + 1} / {series.slides.length}
          </span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5">
        {series.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "rounded-full transition-all duration-300",
              i === active
                ? "w-4 h-1.5 bg-[#e7c090]"
                : "w-1.5 h-1.5 bg-[#e5e2e1]/20 hover:bg-[#e5e2e1]/40"
            )}
          />
        ))}
      </div>

      {/* Title */}
      <div className="px-1">
        <p className="font-body text-[9px] tracking-[0.25em] uppercase text-[#e7c090]/60 mb-1">
          {series.slides.length}-slide series
        </p>
        <h3 className="font-display text-lg font-bold text-[#e5e2e1] leading-snug">
          {series.title}
        </h3>
        <p className="font-body text-[11px] text-[#d2c4b7]/50 mt-1 leading-relaxed line-clamp-2">
          {series.subtitle}
        </p>
      </div>
    </div>
  );
}
