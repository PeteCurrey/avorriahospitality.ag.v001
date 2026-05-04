import { FadeIn } from "./FadeIn";

interface FeatureProps {
  title: string;
  items: string[];
  isReversed?: boolean;
  bgClass: string;
}

function Feature({ title, items, isReversed, bgClass }: FeatureProps) {

  return (
    <div className={`${bgClass} py-24 md:py-32 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 md:gap-24 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
          <div className={isReversed ? 'md:order-2' : ''}>
            <FadeIn delay={0.2} direction={isReversed ? "left" : "right"}>
              <h3 className="text-3xl md:text-4xl font-display text-brand-stone mb-8">{title}</h3>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-brand-stone/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div className={`relative aspect-[4/3] w-full bg-[#FAF7F2] rounded-lg overflow-hidden border border-brand-stone/5 shadow-sm ${isReversed ? 'md:order-1' : ''}`}>
             <FadeIn delay={0.4} direction="none">
               <img 
                 src={image} 
                 alt={`${title} Interface Preview`} 
                 className="w-full h-full object-cover absolute inset-0"
               />
               <div className="absolute inset-0 bg-brand-stone/10 mix-blend-multiply" />
             </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}

export function DeepDive() {
  const features = [
    {
      title: "Booking Engine",
      items: [
        "Room availability calendar",
        "Rate management",
        "Custom packages & offers",
        "Secure deposit handling",
        "Automated confirmation emails"
      ],
      image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2000&auto=format&fit=crop",
      bgClass: "bg-brand-parchment"
    },
    {
      title: "Guest Portal",
      items: [
        "Pre-arrival information",
        "Add extras & upgrades",
        "Dining reservations",
        "Post-stay reviews",
        "Digital guest directory"
      ],
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop",
      isReversed: true,
      bgClass: "bg-brand-white"
    },
    {
      title: "Property Dashboard",
      items: [
        "Reservation management",
        "Live room status",
        "Revenue reporting",
        "Occupancy rate tracking",
        "Guest record management"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
      bgClass: "bg-brand-parchment"
    },
    {
      title: "Restaurant & Dining",
      items: [
        "Online table booking",
        "Interactive digital menus",
        "Private dining enquiries",
        "Event space management",
        "Dietary requirement tracking"
      ],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop",
      isReversed: true,
      bgClass: "bg-brand-white"
    }
  ];

  return (
    <section>
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </section>
  );
}
