import Image from "next/image";
import { CtaButton } from "@/components/ui-custom/cta-button";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Watermark logo — large, low opacity, behind everything */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          width={900}
          height={260}
          aria-hidden="true"
          className="w-[70vw] max-w-4xl h-auto select-none animate-scale-in"
          style={{ opacity: 0 }} // animation sets to 0.12
          priority
        />
      </div>

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(231,192,144,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <span
          className="font-body text-[#e7c090]/70 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-8 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          {HERO.eyebrow}
        </span>

        {/* Headline */}
        <h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-tight text-[#e5e2e1] animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          {HERO.headline}
          <br />
          <em className="not-italic text-[#e7c090]">{HERO.headlineAccent}</em>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-[#d2c4b7]/70 text-base md:text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          {HERO.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 mt-12 justify-center animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
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
        style={{ animationDelay: "900ms" }}
      >
        <span className="font-body text-[#e5e2e1]/20 text-[9px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#e7c090]/20 to-transparent" />
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, #131313)",
        }}
      />
    </header>
  );
}
