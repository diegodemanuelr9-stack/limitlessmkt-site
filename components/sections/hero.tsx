import Image from "next/image";
import { CtaButton } from "@/components/ui-custom/cta-button";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-28"
    >
      {/* Full-bleed background — blurred sports photography for depth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pickleball.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover select-none"
          style={{ opacity: 0.17, filter: "blur(11px) saturate(0.65)" }}
          priority
        />
      </div>

      {/* Deep radial vignette — pulls focus to center */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Ambient gold glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 46%, rgba(231,192,144,0.08) 0%, transparent 68%)",
        }}
      />

      {/* CSS grain — premium editorial texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          opacity: 0.035,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-5xl mx-auto">
        {/* Gold accent line — luxury editorial detail */}
        <div
          className="w-10 h-px bg-[#e7c090]/50 mb-7 animate-fade-in"
          style={{ animationDelay: "0ms" }}
        />

        {/* Eyebrow */}
        <span
          className="font-body text-[#e7c090]/70 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-8 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          {HERO.eyebrow}
        </span>

        {/* Headline */}
        <h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-tight text-[#e5e2e1] animate-fade-in-up"
          style={{ animationDelay: "250ms" }}
        >
          {HERO.headline}
          <br />
          <em className="not-italic text-[#e7c090]">{HERO.headlineAccent}</em>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-[#d2c4b7]/70 text-base md:text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          {HERO.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 mt-12 justify-center animate-fade-in-up"
          style={{ animationDelay: "550ms" }}
        >
          <CtaButton href="#book-call" size="lg">
            {HERO.ctaPrimary}
          </CtaButton>
          <CtaButton href="#work" variant="ghost" size="lg">
            {HERO.ctaSecondary}
          </CtaButton>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1000ms" }}
      >
        <span className="font-body text-[#e5e2e1]/20 text-[9px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#e7c090]/20 to-transparent" />
      </div>

      {/* Bottom fade — matched to page background */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />
    </header>
  );
}
