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

export type ContentCategory = "action" | "ads" | "quotes" | "product" | "brand";

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
  // ── Action ──
  {
    id: "hero-square",
    src: "/images/hero/hero-square.png",
    alt: "Trusted by Pro Athletes — baseball players montage with Blumaka branding",
    width: 1080,
    height: 1080,
    label: "250+ Pro Athletes Trust Blumaka",
    category: "action",
    span: "wide",
  },
  {
    id: "hero-pickleball",
    src: "/images/hero/hero-pickleball.png",
    alt: "Precision Performance for Pickleball — nonslip grip for fast cuts, pivots, and balance",
    width: 1920,
    height: 1080,
    label: "Precision Performance",
    category: "action",
    span: "wide",
  },
  {
    id: "in-shoe-slip-v2",
    src: "/images/product/in-shoe-slip-v2.png",
    alt: "NBA basketball player action — In-shoe slip increases your risk of injury and slows you down — Blumaka dark version",
    width: 1080,
    height: 1350,
    label: "In-Shoe Slip — Dark",
    category: "action",
    span: "wide",
  },
  {
    id: "explosive-first-step",
    src: "/images/product/explosive-first-step.png",
    alt: "Explosive First Step — athlete action shot with Blumaka insole performance",
    width: 1080,
    height: 1080,
    label: "Explosive First Step",
    category: "action",
    span: "normal",
  },
  {
    id: "locked-in-swing",
    src: "/images/product/locked-in-swing.png",
    alt: "Locked-In Swing — baseball batter with Blumaka stability technology",
    width: 1080,
    height: 1080,
    label: "Locked-In Swing",
    category: "action",
    span: "normal",
  },
  {
    id: "pitching-plant-foot",
    src: "/images/product/pitching-plant-foot.png",
    alt: "Pitching Plant Foot — pitcher stability with Blumaka nonslip insoles",
    width: 1080,
    height: 1080,
    label: "Pitching Plant Foot",
    category: "action",
    span: "normal",
  },
  {
    id: "quick-cuts-pickleball",
    src: "/images/product/quick-cuts-pickleball.png",
    alt: "Quick Cuts — Pickleball player making sharp court movements with Blumaka",
    width: 1080,
    height: 1080,
    label: "Quick Cuts — Pickleball",
    category: "action",
    span: "normal",
  },
  {
    id: "speed-and-reaction",
    src: "/images/product/speed-and-reaction.png",
    alt: "Speed & Reaction — athlete performance with Blumaka insoles",
    width: 1080,
    height: 1080,
    label: "Speed & Reaction",
    category: "action",
    span: "normal",
  },
  {
    id: "stability-every-shot",
    src: "/images/product/stability-every-shot.png",
    alt: "Stability on Every Shot — athlete action with Blumaka stability technology",
    width: 1080,
    height: 1080,
    label: "Stability on Every Shot",
    category: "action",
    span: "normal",
  },

  // ── Ads ──
  {
    id: "blumaka-ad-2",
    src: "/images/ads/blumaka-ad-2.png",
    alt: "#1 Way To Improve Your Nike Cleats — Change the Insoles — Blumaka vs standard comparison",
    width: 1080,
    height: 1080,
    label: "#1 Way To Improve Your Nike Cleats",
    category: "ads",
    span: "wide",
  },
  {
    id: "blumaka-ad-2b",
    src: "/images/ads/blumaka-ad-2b.png",
    alt: "The NFL's Secret Weapon to stop turf toe — Carbon plate tech — Game Changer — Blumaka",
    width: 1080,
    height: 1080,
    label: "NFL Secret Weapon — Turf Toe",
    category: "ads",
    span: "normal",
  },
  {
    id: "blumaka-ad-3b",
    src: "/images/ads/blumaka-ad-3b.png",
    alt: "Worn by 10+ NFL Teams — NonSlip FoamLock Top Cover — Carbitex Carbon Fiber Plate — Blumaka Carbon Elite",
    width: 1080,
    height: 1080,
    label: "Worn by 10+ NFL Teams",
    category: "ads",
    span: "normal",
  },
  {
    id: "blumaka-ad-diff-2",
    src: "/images/ads/blumaka-ad-diff-2.png",
    alt: "Recycled Comfort — Allbirds trusted Blumaka to recycle waste foam into everyday shoes",
    width: 1080,
    height: 1350,
    label: "Allbirds — Recycled Comfort",
    category: "ads",
    span: "normal",
  },
  {
    id: "blumaka-ad-diff-3",
    src: "/images/ads/blumaka-ad-diff-3.png",
    alt: "Confidence on the Court — DAPS trusted Blumaka to create an insole designed to boost performance, cushioning, and confidence",
    width: 1080,
    height: 1350,
    label: "DAPS — Confidence on the Court",
    category: "ads",
    span: "normal",
  },
  {
    id: "blumaka-ad-diff-4",
    src: "/images/ads/blumaka-ad-diff-4.png",
    alt: "The Future Runs on Blumaka — recycled foam is the solution — Who's next?",
    width: 1080,
    height: 1350,
    label: "The Future Runs on Blumaka",
    category: "ads",
    span: "normal",
  },
  {
    id: "ghost-monster",
    src: "/images/product/ghost-monster.png",
    alt: "Creative ad: Ghost wearing sneaker — Don't let the monster live inside your shoes. Step into real comfort. Step into Blumaka.",
    width: 1080,
    height: 1080,
    label: "The Monster Inside",
    category: "ads",
    span: "wide",
  },
  {
    id: "increase-stability",
    src: "/images/product/increase-stability.png",
    alt: "Product ad: How NonSlip Insoles Increase Your Stability — Blumaka",
    width: 1080,
    height: 1080,
    label: "NonSlip Technology",
    category: "ads",
    span: "normal",
  },
  {
    id: "baseball-nonslip",
    src: "/images/product/baseball-nonslip.png",
    alt: "NonSlip Technology — pitcher action shot with performance stats. 93.7% improved performance.",
    width: 1080,
    height: 1350,
    label: "Trusted by Pro Athletes",
    category: "ads",
    span: "wide",
  },
  {
    id: "blumaka-ad-1",
    src: "/images/ads/blumaka-ad-1.png",
    alt: "The #1 Way To Improve Your Hokas — Blumaka vs standard insole comparison ad",
    width: 1080,
    height: 1080,
    label: "#1 Way To Improve Your Hokas",
    category: "ads",
    span: "wide",
  },
  {
    id: "soccer-ad-final",
    src: "/images/ads/soccer-ad-final.png",
    alt: "Soccer Is A Game Of Inches — Stay locked in all game long with Blumaka Nonslip Performance Insoles",
    width: 1080,
    height: 1080,
    label: "Soccer — Game of Inches",
    category: "ads",
    span: "normal",
  },
  {
    id: "sr-max-secret-ingredient",
    src: "/images/ads/sr-max-secret-ingredient.png",
    alt: "The Secret Ingredient — SR Max trusted Blumaka to create a work boot midsole",
    width: 1080,
    height: 1350,
    label: "SR Max — The Secret Ingredient",
    category: "ads",
    span: "normal",
  },
  {
    id: "us-vs-them-nonslip",
    src: "/images/product/us-vs-them-nonslip.jpg",
    alt: "US vs Them — Blumaka vs other insoles comparison: trusted by 250+ pro athletes, nonslip foamlock, 1000 mile guarantee",
    width: 1080,
    height: 1080,
    label: "Blumaka vs The Competition",
    category: "ads",
    span: "wide",
  },
  {
    id: "us-vs-them-comfort",
    src: "/images/product/us-vs-them-comfort.png",
    alt: "US vs Them — Blumaka comfort vs other insoles comparison",
    width: 1080,
    height: 1080,
    label: "Comfort Comparison",
    category: "ads",
    span: "normal",
  },
  {
    id: "all-day-play-comfort",
    src: "/images/product/all-day-play-comfort.png",
    alt: "All-Day Play Comfort — Blumaka insole comfort technology for all-day performance",
    width: 1080,
    height: 1080,
    label: "All-Day Play Comfort",
    category: "ads",
    span: "normal",
  },

  // ── Quotes ──
  {
    id: "patrick-quote",
    src: "/images/quotes/patrick-quote.png",
    alt: "Patrick Copen testimonial — LA Dodgers pitcher: Elite performers start with a stable foundation. That's why I use Blumaka NonSlip insoles every time I train.",
    width: 1080,
    height: 1080,
    label: "Patrick Copen — LA Dodgers",
    category: "quotes",
    span: "normal",
  },
  {
    id: "connor-oliver-quote",
    src: "/images/quotes/connor-oliver-quote.png",
    alt: "Connor Oliver testimonial — Pittsburgh Pirates Pitcher: Blumaka insoles have been an absolute game changer for me.",
    width: 1080,
    height: 1350,
    label: "Connor Oliver — Pittsburgh Pirates",
    category: "quotes",
    span: "wide",
  },
  {
    id: "cooper-goff-quote",
    src: "/images/quotes/cooper-goff-quote.png",
    alt: "Cooper Goff testimonial — TCU Baseball: I love the durability they offer and I have noticed quicker recovery when using them.",
    width: 1080,
    height: 1350,
    label: "Cooper Goff — TCU Baseball",
    category: "quotes",
    span: "wide",
  },
  {
    id: "donovan-quote",
    src: "/images/quotes/donovan-quote.png",
    alt: "Brendan Donovan testimonial — Cardinals 2025 All-Star: A game-changing product. I won't play without them.",
    width: 1080,
    height: 1080,
    label: "Brendan Donovan — Cardinals All-Star",
    category: "quotes",
    span: "normal",
  },
  {
    id: "dallas-quote",
    src: "/images/quotes/dallas-quote.png",
    alt: "Dallas athlete testimonial — Blumaka performance quote",
    width: 1080,
    height: 1080,
    label: "Dallas — Athlete Testimonial",
    category: "quotes",
    span: "normal",
  },
  {
    id: "landon-quote",
    src: "/images/quotes/landon-quote.png",
    alt: "Landon athlete testimonial — Blumaka performance quote",
    width: 1080,
    height: 1080,
    label: "Landon — Athlete Testimonial",
    category: "quotes",
    span: "normal",
  },
  {
    id: "trevor-quote",
    src: "/images/quotes/trevor-quote.png",
    alt: "Trevor athlete testimonial — Blumaka performance quote",
    width: 1080,
    height: 1080,
    label: "Trevor — Athlete Testimonial",
    category: "quotes",
    span: "normal",
  },

  // ── Product / Education ──
  {
    id: "250-trust-v2",
    src: "/images/product/250-trust-v2.jpg",
    alt: "250+ Pro-Athletes Trust Blumaka — NonSlip FoamLock Top Cover, Molded Orthotic Shell, Best Clean Foam — detailed spec breakdown",
    width: 1920,
    height: 1080,
    label: "250+ Athletes — Full Specs",
    category: "product",
    span: "wide",
  },
  {
    id: "non-slip-top-cover",
    src: "/images/product/non-slip-top-cover.jpg",
    alt: "Non-Slip Top Cover — Increase Performance, Prevent Slip — 1000 Mile Warranty — Blumaka Clean Foam 85% recycled",
    width: 1080,
    height: 1080,
    label: "Non-Slip Top Cover",
    category: "product",
    span: "normal",
  },
  {
    id: "slip-no2",
    src: "/images/product/slip-no2.jpg",
    alt: "SLIP crossed out → WIN — Blumaka insoles eliminating in-shoe foot movement",
    width: 1080,
    height: 1080,
    label: "Slip → Win",
    category: "product",
    span: "normal",
  },
  {
    id: "insole-3",
    src: "/images/product/insole-3.jpg",
    alt: "Non-Slip Low Profile Cushion — One pair, all grip, no waste — Blumaka",
    width: 1080,
    height: 1080,
    label: "Low Profile Cushion",
    category: "product",
    span: "normal",
  },
  {
    id: "product-high-arch-comfort",
    src: "/images/product/product-high-arch-comfort.png",
    alt: "Blumaka High Arch Comfort Max Cushion insole — product shot with packaging",
    width: 1080,
    height: 1080,
    label: "High Arch — Max Cushion",
    category: "product",
    span: "normal",
  },
  {
    id: "find-right-insole-comfort",
    src: "/images/product/find-right-insole-comfort.jpg",
    alt: "Find The Right Insole Comfort version — Arch Type guide showing three Blumaka insole models",
    width: 1080,
    height: 1080,
    label: "Find Your Arch — Comfort",
    category: "product",
    span: "normal",
  },
  {
    id: "blumaka-sustainability",
    src: "/images/brand/blumaka-sustainability.png",
    alt: "The Best Foam For You And Our Planet — 85% recycled foam, 99% less water used, 65% less carbon generated",
    width: 1080,
    height: 1080,
    label: "Sustainability — Best Foam",
    category: "brand",
    span: "wide",
  },
  {
    id: "thanksgiving",
    src: "/images/brand/thanksgiving.png",
    alt: "Happy Thanksgiving — Because of customers like you, we keep striving for more. Thank you! — Blumaka",
    width: 1080,
    height: 1080,
    label: "Happy Thanksgiving",
    category: "brand",
    span: "normal",
  },
  {
    id: "arch-support-system",
    src: "/images/product/arch-support-system.jpg",
    alt: "Arch Support System — Blumaka comfort insole with arch support technology",
    width: 1080,
    height: 1080,
    label: "Arch Support System",
    category: "product",
    span: "normal",
  },
  {
    id: "max-cushion",
    src: "/images/product/max-cushion.jpg",
    alt: "Max Cushion — Blumaka maximum cushioning technology for all-day comfort",
    width: 1080,
    height: 1080,
    label: "Max Cushion Technology",
    category: "product",
    span: "normal",
  },
  {
    id: "nonslip-tech",
    src: "/images/product/nonslip-tech.png",
    alt: "NonSlip Tech — Blumaka nonslip top cover technology eliminating in-shoe foot movement",
    width: 1080,
    height: 1080,
    label: "NonSlip Tech",
    category: "product",
    span: "normal",
  },
];

export const CONTENT_CATEGORIES: { id: ContentCategory; label: string }[] = [
  { id: "action", label: "Action" },
  { id: "ads", label: "Ads" },
  { id: "quotes", label: "Quotes" },
  { id: "product", label: "Product" },
  { id: "brand", label: "Brand" },
];

// ─── Post Series (Instagram carousel campaigns) ───────────────────────────────

export interface PostSlide {
  src: string;
  alt: string;
}

export interface PostSeries {
  id: string;
  title: string;
  subtitle: string;
  slides: PostSlide[];
}

export const POST_SERIES: PostSeries[] = [
  {
    id: "brendan-donovan",
    title: "Brendan Donovan",
    subtitle: "How I kept competing when turf toe tried to shut me down",
    slides: [
      { src: "/images/posts/brendan-donovan/1-kept-competing.png", alt: "How I kept competing when turf toe tried to shut me down — Brendan Donovan holds Blumaka insole" },
      { src: "/images/posts/brendan-donovan/2-turf-toe-quote.png", alt: "Earlier this season I was dealing with turf toe — Brendan Donovan, Cardinals 2nd Baseman 2025 All-Star" },
      { src: "/images/posts/brendan-donovan/3-make-a-decision.png", alt: "That's when I had to make a decision — either sit out or find a real solution" },
      { src: "/images/posts/brendan-donovan/4-carbon-elite-sent.png", alt: "Then my friends at Blumaka sent me their new Carbon Elite insoles — pitcher throwing action shot" },
      { src: "/images/posts/brendan-donovan/5-missed-few-games.png", alt: "I only missed a handful of games. I wouldn't have been in the lineup without the Carbon Elite." },
      { src: "/images/posts/brendan-donovan/6-game-changing-quote.png", alt: "Blumaka insoles are a subtle yet game-changing product. I won't play another game without them." },
    ],
  },
  {
    id: "ghost-monster",
    title: "The Monster Inside",
    subtitle: "The monster hiding under tired athlete's feet",
    slides: [
      { src: "/images/posts/ghost-monster/1-monster-hiding.png", alt: "The monster hiding under tired athlete's feet — ghost wearing sneaker" },
      { src: "/images/posts/ghost-monster/2-pain-part-of-training.png", alt: "Some athletes think pain is just part of training — old worn insole" },
      { src: "/images/posts/ghost-monster/3-feeds-the-monster.png", alt: "But every workout feeds a monster hiding inside their shoe — an old, tired insole" },
      { src: "/images/posts/ghost-monster/4-right-insole.png", alt: "With the right insole — Comfort returns. Recovery begins. — Blumaka Carbon Elite" },
      { src: "/images/posts/ghost-monster/5-step-into-blumaka.png", alt: "Don't let the monster live inside your shoes. Step into real comfort. Step into Blumaka." },
    ],
  },
  {
    id: "performance-2026",
    title: "What Performance Means in 2026",
    subtitle: "Performance is about what lasts — not what's new",
    slides: [
      { src: "/images/posts/performance-2026/1-what-performance-means.png", alt: "What performance actually means in 2026 — Blumaka" },
      { src: "/images/posts/performance-2026/2-buying-more.png", alt: "For a long time, performance meant buying more. That cycle is slowing down." },
      { src: "/images/posts/performance-2026/3-what-lasts.png", alt: "In 2026, performance is about what lasts. What holds up day after day." },
      { src: "/images/posts/performance-2026/4-foundation-matters.png", alt: "That's why the foundation matters. If support doesn't last, your body pays later." },
      { src: "/images/posts/performance-2026/5-blumaka-focuses.png", alt: "Blumaka focuses on the part most people neglect — eliminates foot slip, improves foot health, 1000 miles" },
      { src: "/images/posts/performance-2026/6-send-dm.png", alt: "Performance starts with your foundation. Want to know which Blumaka fits your training? Send us a DM." },
    ],
  },
  {
    id: "stuart-jenkins",
    title: "Stuart Jenkins",
    subtitle: "The day 4 seconds changed everything — the Blumaka founder story",
    slides: [
      { src: "/images/posts/stuart-jenkins/1-four-seconds.png", alt: "The day 4 seconds changed everything — qualifying for the Olympic trials" },
      { src: "/images/posts/stuart-jenkins/2-26083-miles.png", alt: "Before that race he had already run 26,083 miles. 8 years without missing a day. Not talent. Repetition." },
      { src: "/images/posts/stuart-jenkins/3-stuart-jenkins.png", alt: "His name is Stuart Jenkins — a runner obsessed with doing things right every single day" },
      { src: "/images/posts/stuart-jenkins/4-olympic-qualifier.png", alt: "To qualify he needed 2:19:04. He ran 2:19. Four seconds. Which day could he have skipped?" },
      { src: "/images/posts/stuart-jenkins/5-performance-built.png", alt: "Performance doesn't happen on race day. It's built long before." },
      { src: "/images/posts/stuart-jenkins/6-blumaka-mindset.png", alt: "That mindset didn't stop at running. It shaped everything he built after: Blumaka." },
    ],
  },
];

// Supplementary hero images (used in results/manifesto sections)
export const SUPPLEMENTARY_IMAGES = {
  trust250: {
    src: "/images/product/250-trust.jpg",
    alt: "250+ Pro-Athletes Trust Blumaka — insole features and technology breakdown",
    width: 1920,
    height: 1080,
  },
  trust250lightBlue: {
    src: "/images/product/250-trust-light-blue.jpg",
    alt: "250+ Pro-Athletes Trust Blumaka — light blue variant",
    width: 1920,
    height: 1080,
  },
};

// ─── Athlete Quotes ───────────────────────────────────────────────────────────

export interface AthleteQuote {
  id: string;
  src: string;
  alt: string;
  name: string;
  title: string;
  quote?: string;
  emotionalBenefit?: string;
}

export const ATHLETE_QUOTES: AthleteQuote[] = [
  {
    id: "brendan-donovan",
    src: "/images/quotes/donovan-quote.png",
    alt: "Brendan Donovan — Cardinals 2025 All-Star testimonial",
    name: "Brendan Donovan",
    title: "Cardinals Outfielder, 2025 All-Star",
    quote: "A game-changing product. I won't play without them.",
    emotionalBenefit: "The insole that kept a career alive.",
  },
  {
    id: "connor-oliver",
    src: "/images/quotes/connor-oliver-quote.png",
    alt: "Connor Oliver — Pittsburgh Pirates Pitcher testimonial",
    name: "Connor Oliver",
    title: "Pittsburgh Pirates Pitcher",
    quote: "Blumaka insoles have been an absolute game changer for me. With the grip and comfort they provide, I no longer worry about my foot sliding around inside my cleat.",
    emotionalBenefit: "Zero distraction. Total focus on the mound.",
  },
  {
    id: "cooper-goff",
    src: "/images/quotes/cooper-goff-quote.png",
    alt: "Cooper Goff — TCU Baseball testimonial",
    name: "Cooper Goff",
    title: "TCU Baseball",
    quote: "I love the durability they offer and I have noticed quicker recovery when using them.",
    emotionalBenefit: "Train harder. Recover faster.",
  },
  {
    id: "dallas",
    src: "/images/quotes/dallas-quote.png",
    alt: "Dallas Young — South Alabama Defensive Back testimonial",
    name: "Dallas Young",
    title: "Defensive Back, South Alabama",
    quote: "My foot feels more locked in, which gives me better grip and helps prevent slipping during cuts and transitions.",
    emotionalBenefit: "Pure confidence on every cut.",
  },
  {
    id: "landon",
    src: "/images/quotes/landon-quote.png",
    alt: "Landon Schutte — Georgia Pitcher testimonial",
    name: "Landon Schutte",
    title: "Pitcher, Georgia",
    quote: "Blumaka insoles help me stay stable on the mound and gain a competitive advantage on my opponents.",
    emotionalBenefit: "Stability that turns into dominance.",
  },
  {
    id: "trevor",
    src: "/images/quotes/trevor-quote.png",
    alt: "Trevor Baptiste — San Diego Seals (Lacrosse) testimonial",
    name: "Trevor Baptiste",
    title: "San Diego Seals, Pro Lacrosse",
    quote: "For me, Blumaka just felt more secure. I could focus on the play instead of worrying about what my feet were doing.",
    emotionalBenefit: "Freedom to play — not manage your gear.",
  },
];

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
  imageSrc: "/images/quotes/patrick-quote.png",
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
