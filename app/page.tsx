import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ContentShowcase } from "@/components/sections/content-showcase";
import { Results } from "@/components/sections/results";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Manifesto } from "@/components/sections/manifesto";
import { PreCta } from "@/components/sections/pre-cta";
import { BookCall } from "@/components/sections/book-call";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ContentShowcase />
        <Results />
        <HowItWorks />
        <Manifesto />
        <PreCta />
        <BookCall />
      </main>
      <Footer />
    </>
  );
}
