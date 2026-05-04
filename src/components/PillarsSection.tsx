import { FadeIn } from "./FadeIn";
import { Calendar, Layout, BarChart3 } from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      icon: <Calendar className="w-6 h-6 stroke-[1px]" />,
      title: "Your Own Booking Engine",
      description: "Commission-free direct bookings. Room availability, rates and packages — all managed by you. Guests book on your site, money goes straight to you.",
    },
    {
      icon: <Layout className="w-6 h-6 stroke-[1px]" />,
      title: "A Website That Reflects Your Property",
      description: "Cinematic, editorial design built around your rooms, your story, your guests. Not a template. Not a theme.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 stroke-[1px]" />,
      title: "Property Management Dashboard",
      description: "Reservations, room management, guest records, revenue reporting. Everything in one place, built for hospitality not accountants.",
    },
  ];

  return (
    <section className="bg-white py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <FadeIn>
            <span className="section-label">THE PLATFORM</span>
            <h2 className="text-4xl md:text-5xl font-display text-brand-stone">
              Everything your property needs. Nothing it doesn&apos;t.
            </h2>

          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="pt-8 border-t border-brand-stone/10">
                <div className="text-brand-accent mb-8">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-display text-brand-stone mb-6">
                  {pillar.title}
                </h3>
                <p className="text-brand-stone/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
