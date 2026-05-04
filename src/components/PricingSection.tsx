import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "ESSENTIALS",
      price: "89",
      features: [
        "Hotel website",
        "Restaurant & dining section",
        "Local SEO setup",
        "Custom domain & hosting",
        "1 admin account"
      ]
    },
    {
      name: "PRO",
      price: "169",
      popular: true,
      features: [
        "Everything in Essentials",
        "Direct booking engine (commission-free)",
        "Guest portal",
        "Property management dashboard",
        "3 staff accounts",
        "Monthly support"
      ]
    },
    {
      name: "PREMIER",
      price: "279",
      features: [
        "Everything in Pro",
        "Channel manager integration",
        "Unlimited staff accounts",
        "Priority support",
        "Custom integrations"
      ]
    }
  ];

  return (
    <section className="bg-brand-white py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display text-brand-stone">
              Transparent pricing. No commission. Ever.
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className={`relative h-full border border-brand-stone/10 p-10 flex flex-col ${plan.popular ? 'bg-brand-bg shadow-sm' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-[0.6rem] uppercase tracking-widest px-4 py-1.5 font-sans font-medium">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-sm font-sans font-medium tracking-[0.2em] text-brand-accent mb-8">
                  {plan.name}
                </h3>
                
                <div className="mb-10">
                  <span className="text-5xl font-display text-brand-stone">£{plan.price}</span>
                  <span className="text-brand-stone/50 text-sm font-sans ml-2">/mo</span>
                </div>
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-brand-stone/70 text-sm">
                      <Check className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full rounded-none border-brand-stone text-brand-stone hover:bg-brand-stone hover:text-white transition-all duration-300 py-6 h-auto">
                  Get Started
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
