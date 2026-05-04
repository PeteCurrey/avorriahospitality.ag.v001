import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";

export function DemoShowcase() {
  return (
    <section className="bg-brand-parchment py-32 md:py-48 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="section-label">LIVE DEMO</span>
          <h2 className="text-4xl md:text-5xl font-display text-brand-stone mb-6">
            This is what your property could look like online.
          </h2>
          <p className="text-lg text-brand-stone/70 max-w-2xl mx-auto mb-12">
            Grasmere Hall is our showcase — a fully-built boutique hotel website with direct booking engine, guest portal and property management dashboard. Experience it as a guest or as the owner.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-none px-8 py-6 h-auto text-base">
              Visit Grasmere Hall →
            </Button>
            <Button variant="outline" className="border-brand-stone text-brand-stone rounded-none px-8 py-6 h-auto text-base hover:bg-brand-stone hover:text-white">
              View Admin Demo →
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="relative aspect-video w-full bg-[#FAF7F2] rounded-xl overflow-hidden border border-brand-stone/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2000&auto=format&fit=crop" 
              alt="Grasmere Hall Showcase" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-stone/10 mix-blend-multiply" />
          </div>
        </FadeIn>


      </div>
    </section>
  );
}
