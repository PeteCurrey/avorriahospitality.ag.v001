import { FadeIn } from "./FadeIn";

export function ProblemSection() {
  const stats = [
    { value: "18%", label: "Average OTA commission on every booking" },
    { value: "£12,400", label: "Average annual commission paid by a 10-room property" },
    { value: "67%", label: "Guests who would book direct if given the option" },
  ];

  return (
    <section className="bg-brand-parchment py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <FadeIn>
              <span className="section-label">THE CHALLENGE</span>
              <h2 className="text-4xl md:text-5xl font-display text-brand-stone leading-tight mb-8">
                Booking.com takes 18%. Your guests deserve better. So do you.
              </h2>
              <p className="text-lg text-brand-stone/80 leading-relaxed max-w-lg">
                Independent properties deliver exceptional experiences — handpicked rooms, personal service, local knowledge — yet hand a fifth of every booking to a platform that treats them as inventory.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-16">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="border-l border-brand-stone/10 pl-8">
                  <div className="text-4xl md:text-5xl font-display text-brand-stone mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-brand-stone/60 font-sans tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
