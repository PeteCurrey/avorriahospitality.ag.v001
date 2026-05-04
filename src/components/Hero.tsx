"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { AnimatePresence, motion } from "framer-motion";

export function Hero() {
  const words = ["property", "restaurant", "hotel", "pub"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fine Dining Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
          alt="Fine Dining Restaurant Setting" 
          className="w-full h-full object-cover"
        />
        {/* Warm Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-brand-stone/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.2}>
          <span className="section-label text-brand-bg">AVORRIA HOSPITALITY</span>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-display text-brand-bg leading-[1.1] mb-8">
            Your{" "}
            <span className="inline-grid text-brand-accent italic font-medium">
              <AnimatePresence>
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="col-start-1 row-start-1"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            deserves<br />a presence to match.
          </h1>
        </FadeIn>


        <FadeIn delay={0.6}>
          <div className="w-24 h-px bg-brand-bg/40 mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-lg md:text-xl text-brand-bg/90 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            We build direct booking platforms and digital experiences for independent boutique hotels. 
            Beautiful websites, your own booking engine, zero OTA commission.
          </p>
        </FadeIn>

        <FadeIn delay={1.0}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-none px-8 py-6 h-auto text-base border-none">
              See the Demo
            </Button>
            <Button variant="outline" className="border-brand-bg text-brand-bg rounded-none px-8 py-6 h-auto text-base hover:bg-brand-bg hover:text-brand-stone bg-transparent">
              View Packages
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
