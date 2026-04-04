import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LimitlessMKT — Authority Content for Footwear Brands",
  description:
    "Done-for-you authority content that makes footwear brands famous. Content strategy, editorial production, and brand storytelling for performance and lifestyle footwear.",
  openGraph: {
    title: "LimitlessMKT — Authority Content for Footwear Brands",
    description:
      "Done-for-you authority content that makes footwear brands famous.",
    type: "website",
    url: "https://limitlessmkt.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LimitlessMKT — Authority Content for Footwear Brands",
    description:
      "Done-for-you authority content that makes footwear brands famous.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-[#e5e2e1]">{children}</body>
    </html>
  );
}
