import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppinsDisplay = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
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
      className={`${poppins.variable} ${poppinsDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-[#e5e2e1]">{children}</body>
    </html>
  );
}
