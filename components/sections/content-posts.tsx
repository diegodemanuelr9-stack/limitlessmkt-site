import { POST_SERIES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { PostCarousel } from "@/components/ui-custom/post-carousel";
import { Reveal } from "@/components/ui-custom/reveal";

export function ContentPosts() {
  return (
    <section id="posts" className="py-24 md:py-32 bg-[#131313]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <SectionLabel>Content Series</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#e5e2e1] leading-none">
                Posts That
                <br />
                <em className="not-italic text-[#e7c090]">Build Authority</em>
              </h2>
              <p className="font-body text-[#d2c4b7]/60 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
                Storytelling carousels that educate, build trust, and convert — the exact content systems we create for footwear brands.
              </p>
            </div>
            <span className="font-body text-[#e5e2e1]/20 text-xs uppercase tracking-widest whitespace-nowrap">
              {POST_SERIES.length} series
            </span>
          </div>
        </Reveal>

        {/* Carousel grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {POST_SERIES.map((series, i) => (
            <Reveal key={series.id} delay={i * 80}>
              <PostCarousel series={series} />
            </Reveal>
          ))}
        </div>

        {/* Bottom divider */}
        <Reveal delay={200}>
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px flex-1" style={{ background: "rgba(78,69,59,0.15)" }} />
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#e5e2e1]/20">
              Built for footwear brands
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(78,69,59,0.15)" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
