import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[#FAF7F2]">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, #F0EBE1 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, #5C6B5215 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.2}>
          <span className="section-label">AVORRIA HOSPITALITY</span>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-display text-brand-stone leading-[1.1] mb-8">
            Your property deserves<br />a presence to match.
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="w-24 h-px bg-brand-stone/20 mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-lg md:text-xl text-brand-stone/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            We build direct booking platforms and digital experiences for independent boutique hotels. 
            Beautiful websites, your own booking engine, zero OTA commission.
          </p>
        </FadeIn>

        <FadeIn delay={1.0}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-none px-8 py-6 h-auto text-base">
              See the Demo
            </Button>
            <Button variant="outline" className="border-brand-stone text-brand-stone rounded-none px-8 py-6 h-auto text-base hover:bg-brand-stone hover:text-white">
              View Packages
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
