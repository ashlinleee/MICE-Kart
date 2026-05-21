import React from "react";
import { Sparkles } from "lucide-react";

const defaultItems = [
  "Corporate Conferences",
  "Product Launches",
  "Hybrid Summits",
  "Team Retreats",
  "Award Galas",
  "Destination Events",
  "Brand Activations",
  "Leadership Meets",
];

export default function MarqueeStrip({ items = defaultItems, className = "" }) {
  const doubled = [...items, ...items];

  return (
    <div className={`relative overflow-hidden border-y border-brand-100/60 bg-gradient-to-r from-brand-50/80 via-white/90 to-accent-50/80 py-4 ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#faf8f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#faf8f5] to-transparent" />
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-brand-700/80"
          >
            <Sparkles size={14} className="text-glow-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
