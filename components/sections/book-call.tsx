"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui-custom/section-label";
import { CtaButton } from "@/components/ui-custom/cta-button";
import { Reveal } from "@/components/ui-custom/reveal";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

export function BookCall() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
    } catch {
      setState("error");
    }
  };

  const inputBase =
    "w-full bg-transparent font-body text-[#e5e2e1] text-sm py-4 px-0 border-0 border-b outline-none placeholder-[#e5e2e1]/20 transition-all duration-300 focus:border-[#e7c090]";

  return (
    <section id="book-call" className="py-24 md:py-32 bg-[#0e0e0e]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — Cal.com CTA */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Let&apos;s Talk</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="text-[#e5e2e1]">Book Your</span>
                <br />
                <em className="not-italic text-[#e7c090]">Discovery Call</em>
              </h2>
              <p className="font-body text-[#d2c4b7]/60 text-base leading-relaxed mb-10">
                15 minutes with Nacho. No pitch, no pressure — just an honest
                conversation about your brand and what authority content can do
                for it.
              </p>

              {/* Cal.com CTA button */}
              <CtaButton
                href={`https://cal.com/${SITE.calLink}`}
                target="_blank"
                size="lg"
                className="w-full md:w-auto justify-center"
              >
                Schedule on Cal.com
              </CtaButton>

              <p className="font-body text-[#e5e2e1]/20 text-[10px] uppercase tracking-[0.3em] mt-6">
                Limited quarterly availability
              </p>

              {/* Social proof mini */}
              <div
                className="mt-12 pt-8"
                style={{ borderTop: "1px solid rgba(78,69,59,0.15)" }}
              >
                <div className="space-y-3">
                  {[
                    "15-minute strategy session",
                    "No commitment required",
                    "Specific recommendations for your brand",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-[#e7c090] text-sm">✓</span>
                      <span className="font-body text-[#d2c4b7]/60 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Contact form fallback */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={150}>
              <div
                className="p-8 md:p-10 rounded-xl"
                style={{ background: "rgba(28,27,27,0.6)", border: "1px solid rgba(78,69,59,0.15)" }}
              >
                <h3 className="font-body text-xs uppercase tracking-[0.3em] text-[#e7c090] font-bold mb-8">
                  Or send a message
                </h3>

                {state === "success" ? (
                  <div className="text-center py-10">
                    <div className="font-display text-4xl text-[#e7c090] mb-4">✓</div>
                    <p className="font-display text-xl font-bold text-[#e5e2e1] mb-2">
                      Message received.
                    </p>
                    <p className="font-body text-[#d2c4b7]/60 text-sm">
                      Nacho will be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="font-body text-[10px] uppercase tracking-[0.2em] text-[#e5e2e1]/30 block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Nacho Cachaza"
                        className={cn(
                          inputBase,
                          "border-[rgba(78,69,59,0.3)]"
                        )}
                      />
                    </div>
                    <div>
                      <label className="font-body text-[10px] uppercase tracking-[0.2em] text-[#e5e2e1]/30 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@brand.com"
                        className={cn(
                          inputBase,
                          "border-[rgba(78,69,59,0.3)]"
                        )}
                      />
                    </div>
                    <div>
                      <label className="font-body text-[10px] uppercase tracking-[0.2em] text-[#e5e2e1]/30 block mb-2">
                        Your Footwear Brand
                      </label>
                      <input
                        type="text"
                        value={form.brand}
                        onChange={(e) =>
                          setForm({ ...form, brand: e.target.value })
                        }
                        placeholder="Brand name (optional)"
                        className={cn(
                          inputBase,
                          "border-[rgba(78,69,59,0.3)]"
                        )}
                      />
                    </div>
                    <div>
                      <label className="font-body text-[10px] uppercase tracking-[0.2em] text-[#e5e2e1]/30 block mb-2">
                        What Are You Working On?
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell us about your brand and goals..."
                        rows={3}
                        className={cn(
                          inputBase,
                          "border-[rgba(78,69,59,0.3)] resize-none"
                        )}
                      />
                    </div>

                    {state === "error" && (
                      <p className="font-body text-[#e25c5c] text-xs">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    )}

                    <CtaButton
                      type="submit"
                      disabled={state === "loading"}
                      className="w-full justify-center"
                    >
                      {state === "loading" ? "Sending..." : "Send Message"}
                    </CtaButton>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
