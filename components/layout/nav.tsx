"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CtaButton } from "@/components/ui-custom/cta-button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled ? "glass-nav" : "bg-transparent"
        )}
        style={{ borderBottom: scrolled ? "1px solid rgba(231,192,144,0.05)" : "none" }}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-6 md:px-12 py-5">
          {/* Logo + brand name */}
          <a href="#" aria-label="LimitlessMKT Home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="LimitlessMKT"
              width={140}
              height={40}
              className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity"
              priority
            />
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-[#e5e2e1]/70 hover:text-[#e7c090] transition-colors duration-300">
              LimitlessMKT
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-10 font-body tracking-[0.15em] uppercase text-[10px] font-bold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#e5e2e1]/60 hover:text-[#e7c090] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <CtaButton
              href="#book-call"
              size="sm"
              className="hidden md:inline-flex"
            >
              Book a Call
            </CtaButton>
            <button
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold text-white hover:text-[#e7c090] transition-colors duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transition:
                  "color 0.3s, transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {link.label}
            </a>
          ))}
          <CtaButton href="#book-call" onClick={() => setMobileOpen(false)}>
            Book a Call
          </CtaButton>
        </nav>
        <p className="absolute bottom-8 text-[#e5e2e1]/20 text-xs tracking-widest uppercase font-body">
          {SITE.name}
        </p>
      </div>
    </>
  );
}
