import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";

export function FooterCTA() {
  return (
    <section className="bg-brand-stone py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display text-brand-bg mb-6">
            Ready to take back your bookings?
          </h2>
          <p className="text-lg text-brand-bg/70 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. We'll show you exactly what your property could look like.
          </p>
          <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-none px-10 py-7 h-auto text-lg transition-all duration-300">
            Book Your Call
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
