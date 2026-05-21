import React from "react";
import SafeImage from "./SafeImage";

export default function GalleryMarquee({ images = [], className = "" }) {
  if (!images.length) return null;

  const doubled = [...images, ...images];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-ink-200 bg-white/85 py-6 shadow-card ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />
      <div className="flex w-max animate-marquee items-center gap-5 whitespace-nowrap px-4">
        {doubled.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="h-40 w-72 shrink-0 overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 shadow-sm sm:h-52 sm:w-[24rem] lg:h-64 lg:w-[32rem]"
          >
            <SafeImage
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
