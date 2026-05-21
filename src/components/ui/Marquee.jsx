import React from "react";
import { marqueeItems } from "../../data/siteContent";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-ink-200 bg-ink-50 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-8 text-sm font-semibold uppercase tracking-widest text-ink-600">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
