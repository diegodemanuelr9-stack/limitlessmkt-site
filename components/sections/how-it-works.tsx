import { PROCESS_STEPS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { Reveal } from "@/components/ui-custom/reveal";
import { Calendar, Layers, TrendingUp } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  calendar: <Calendar className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  "trending-up": <TrendingUp className="w-5 h-5" />,
};

export function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#e5e2e1] mb-4 leading-none">
            Three Steps to
          </h2>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-none mb-20">
            <em className="not-italic text-[#e7c090]">Limitless Content</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 relative">
          {/* Connecting line on desktop */}
          <div
            className="absolute top-16 left-[16.67%] right-[16.67%] h-px hidden md:block"
            style={{ background: "rgba(231,192,144,0.12)" }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div
                className="relative p-8 md:p-10 bg-[#1c1b1b] rounded-xl md:rounded-none md:rounded-xl md:mx-2"
                style={{
                  border: "1px solid rgba(78,69,59,0.15)",
                  marginBottom: i < PROCESS_STEPS.length - 1 ? "1rem" : 0,
                }}
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-5xl font-bold text-[#e7c090]/20 leading-none">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#e7c090]/10 flex items-center justify-center text-[#e7c090]">
                    {ICONS[step.icon]}
                  </div>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1] mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="font-body text-[#d2c4b7]/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <Reveal delay={300}>
          <div className="mt-16 text-center">
            <a
              href="#book-call"
              className="font-body text-[#e7c090] text-xs uppercase tracking-[0.3em] hover:text-white transition-colors duration-300 inline-flex items-center gap-3"
            >
              Start with a discovery call
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
