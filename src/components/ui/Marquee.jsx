import React from "react";
import { marqueeItems } from "../../data/siteContent";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-[#001f47]-100/50 bg-orange-500/45 py-4 backdrop-blur-[2px]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff8a00]/38 via-[#ffb13b]/30 to-[#ff7a00]/38" />
      <div className="pointer-events-none absolute inset-0 bg-[#ff9f2a]/20" />

      <div className="relative flex animate-marquee whitespace-nowrap [animation-duration:18s] sm:[animation-duration:30s]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 text-xs font-semibold uppercase tracking-widest text-orange-50 sm:mx-8 sm:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
