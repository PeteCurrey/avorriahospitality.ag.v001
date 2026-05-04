import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { PillarsSection } from "@/components/PillarsSection";
import { DeepDive } from "@/components/DeepDive";
import { DemoShowcase } from "@/components/DemoShowcase";
import { PricingSection } from "@/components/PricingSection";
import { TrustSection } from "@/components/TrustSection";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProblemSection />
      <PillarsSection />
      <DeepDive />
      <DemoShowcase />
      <PricingSection />
      <TrustSection />
      <FooterCTA />
      <Footer />
    </main>
  );
}

