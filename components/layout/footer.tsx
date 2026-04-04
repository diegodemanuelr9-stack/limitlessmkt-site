import Image from "next/image";
import { FOOTER, SITE } from "@/lib/constants";
// Social icons as inline SVGs (lucide version doesn't export Instagram/Linkedin)
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10">
      {/* Ghost top border */}
      <div
        className="w-full h-px mb-16"
        style={{ background: "rgba(78,69,59,0.15)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="LimitlessMKT"
                width={140}
                height={40}
                className="h-8 w-auto opacity-80"
              />
            </div>
            <p className="font-body text-[#d2c4b7]/60 max-w-sm text-sm leading-relaxed mb-10">
              {FOOTER.description}
            </p>
            <div className="flex gap-6 items-center">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e5e2e1]/30 hover:text-[#e7c090] transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e5e2e1]/30 hover:text-[#e7c090] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Right — Nav */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h6 className="font-body text-[#e7c090] text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">
                Navigation
              </h6>
              <ul className="space-y-4">
                {FOOTER.navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-[#e5e2e1]/50 hover:text-white text-sm uppercase tracking-wide transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-body text-[#e7c090] text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">
                Contact
              </h6>
              <a
                href={`mailto:${SITE.email}`}
                className="font-body text-[#e5e2e1]/50 hover:text-white text-sm transition-colors duration-300"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(78,69,59,0.10)" }}
        >
          <span className="font-body text-[#e5e2e1]/30 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} LimitlessMKT. All Rights Reserved.
          </span>
          <div className="flex gap-8">
            {FOOTER.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[#e5e2e1]/30 hover:text-white text-xs uppercase tracking-widest transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
