"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-stone/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="text-xl font-display font-semibold tracking-tight text-brand-stone">
            Avorria Hospitality
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Features", "Packages", "Demo", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-brand-stone/70 hover:text-brand-stone transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <Button
            variant="outline"
            className="rounded-none border-brand-stone text-brand-stone hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-300 font-sans px-6"
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </nav>
  );
}
