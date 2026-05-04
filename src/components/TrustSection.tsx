import { FadeIn } from "./FadeIn";

export function TrustSection() {
  const points = [
    "UK-based team",
    "Setup in 4 weeks",
    "Zero OTA commission",
    "No lock-in contracts"
  ];

  const testimonials = [
    {
      quote: "The direct booking engine has completely changed our business. We've saved thousands in commission in the first few months alone.",
      author: "Owner, The Old Rectory, Somerset"
    },
    {
      quote: "Finally, a website that feels as premium as our rooms. Our guests frequently comment on how beautiful and easy to use the booking process is.",
      author: "General Manager, Coastal Retreats, Cornwall"
    }
  ];

  return (
    <section className="bg-brand-parchment py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-brand-stone/10 py-12">
          {points.map((point, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center md:text-left">
                <span className="text-xs md:text-sm font-sans font-medium uppercase tracking-widest text-brand-stone/60">
                  {point}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.2}>
              <div className="max-w-lg">
                <p className="text-2xl font-display text-brand-stone leading-relaxed mb-8 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                <p className="text-sm font-sans font-medium tracking-wider text-brand-accent uppercase">
                  {testimonial.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
