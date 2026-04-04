// ─── Site constants — all copy, image paths, stats ───────────────────────────

export const SITE = {
  name: "LimitlessMKT",
  tagline: "Authority Content for Footwear Brands",
  description:
    "Done-for-you authority content that makes footwear brands famous.",
  url: "https://limitlessmkt.com",
  email: "hello@limitlessmkt.com",
  instagram: "https://instagram.com/limitlessmkt",
  linkedin: "https://linkedin.com/company/limitlessmkt",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "limitlessmkt/discovery",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#book-call" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "Authority Content for Footwear Brands",
  headline: "We Don't Market Footwear.",
  headlineAccent: "We Make It Famous.",
  subheadline:
    "Done-for-you content systems that build authority, drive performance, and make your brand impossible to ignore.",
  ctaPrimary: "Book a Discovery Call",
  ctaSecondary: "See Our Work",
};

// ─── Content Showcase (Blumaka Case Study) ───────────────────────────────────

export type ContentCategory = "special" | "action" | "ads" | "quotes";

export interface ContentItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  category: ContentCategory;
  span?: "wide" | "tall" | "normal"; // grid sizing hint
}

export const BLUMAKA_CONTENT: ContentItem[] = [
  {
    id: "ghost-monster",
    src: "/images/ghost-monster.png",
    alt: "Creative ad: Ghost wearing sneaker — Don't let the monster live inside your shoes. Step into real comfort. Step into Blumaka.",
    width: 1080,
    height: 1080,
    label: "The Monster Inside",
    category: "special",
    span: "wide",
  },
  {
    id: "in-shoe-slip",
    src: "/images/in-shoe-slip.png",
    alt: "Basketball player action shot — In-shoe slip increases your risk of injury (and slows you down) — Blumaka",
    width: 1080,
    height: 1350,
    label: "In-Shoe Slip Awareness",
    category: "action",
    span: "wide",
  },
  {
    id: "increase-stability",
    src: "/images/increase-stability.png",
    alt: "Product ad: How NonSlip Insoles Increase Your Stability — Blumaka",
    width: 1080,
    height: 1080,
    label: "NonSlip Technology",
    category: "ads",
    span: "normal",
  },
  {
    id: "baseball-nonslip",
    src: "/images/baseball-nonslip.png",
    alt: "NonSlip Technology — pitcher action shot with performance stats. 93.7% improved performance.",
    width: 1080,
    height: 1350,
    label: "Trusted by Pro Athletes",
    category: "ads",
    span: "wide",
  },
  {
    id: "patrick-quote",
    src: "/images/patrick-quote.png",
    alt: "Patrick Copen testimonial — LA Dodgers pitcher: Elite performers start with a stable foundation. That's why I use Blumaka NonSlip insoles every time I train.",
    width: 1080,
    height: 1080,
    label: "Patrick Copen — LA Dodgers",
    category: "quotes",
    span: "normal",
  },
  {
    id: "hero-square",
    src: "/images/hero-square.png",
    alt: "Trusted by Pro Athletes — baseball players montage with Blumaka branding",
    width: 1080,
    height: 1080,
    label: "250+ Pro Athletes Trust Blumaka",
    category: "special",
    span: "normal",
  },
  {
    id: "hero-pickleball",
    src: "/images/hero-pickleball.png",
    alt: "Precision Performance for Pickleball — nonslip grip for fast cuts, pivots, and balance",
    width: 1920,
    height: 1080,
    label: "Precision Performance",
    category: "action",
    span: "wide",
  },
];

export const CONTENT_CATEGORIES: { id: ContentCategory; label: string }[] = [
  { id: "special", label: "Special Content" },
  { id: "action", label: "Action" },
  { id: "ads", label: "Ads" },
  { id: "quotes", label: "Quotes" },
];

// Supplementary hero images (used in results/manifesto sections)
export const SUPPLEMENTARY_IMAGES = {
  trust250: {
    src: "/images/250-trust.jpg",
    alt: "250+ Pro-Athletes Trust Blumaka — insole features and technology breakdown",
    width: 1920,
    height: 1080,
  },
};

// ─── Results / Social Proof ──────────────────────────────────────────────────

export const STATS = [
  { value: 250, suffix: "+", label: "Pro Athletes Trust Blumaka" },
  { value: 93.7, suffix: "%", label: "Improved Performance Reported" },
  { value: 80, suffix: "%", label: "Increased Stability" },
  { value: 10, suffix: "M+", label: "Content Impressions Generated" },
];

export const TESTIMONIAL = {
  quote:
    "Elite performers start with a stable foundation. That's why I use Blumaka NonSlip insoles every time I train.",
  name: "Patrick Copen",
  title: "Pitcher, LA Dodgers",
  imageSrc: "/images/patrick-quote.png",
};

export const CLIENT_LOGOS = [
  { name: "Blumaka", placeholder: true },
  { name: "Coming Soon", placeholder: true },
  { name: "Coming Soon", placeholder: true },
];

// ─── How It Works ─────────────────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "A focused 15-minute call to understand your brand, audience, and goals. No fluff — just strategy. We identify exactly what content your brand is missing.",
    icon: "calendar",
  },
  {
    number: "02",
    title: "Strategy & Creation",
    description:
      "We build your content engine: editorial direction, athlete partnerships, photoshoots, ad creatives, and social content — all done for you.",
    icon: "layers",
  },
  {
    number: "03",
    title: "Launch & Scale",
    description:
      "Content goes live across your channels. We track performance, iterate fast, and keep building authority month after month.",
    icon: "trending-up",
  },
];

// ─── Manifesto ────────────────────────────────────────────────────────────────

export const MANIFESTO = {
  eyebrow: "Why It Matters",
  headline: "Your Brand Deserves More Than Posts.",
  headlineAccent: "It Deserves a Legacy.",
  pullQuote: "Luxury is the absence of noise.",
  body: [
    "Most footwear brands are stuck posting product shots and sale announcements. They're creating noise, not authority. The brands that win — the ones athletes trust and consumers obsess over — have something different: a content identity.",
    "At LimitlessMKT, we don't just produce content. We architect the narrative that makes your brand the reference point in its category. Authority content that educates, inspires, and converts — built on strategy, executed with precision.",
  ],
};

// ─── Pre-CTA ──────────────────────────────────────────────────────────────────

export const PRE_CTA = {
  headline: "Ready to Build",
  headlineAccent: "Something Limitless?",
  subtext: "We take on a limited number of brands each quarter.",
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  description:
    "An elite authority content agency dedicated exclusively to the footwear industry. We build icons, not just brands.",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "Book a Call", href: "#book-call" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
