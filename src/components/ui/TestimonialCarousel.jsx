import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "../Icons";

export default function TestimonialCarousel({
  testimonials = [],
  interval = 5000,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, testimonials.length]);

  if (!testimonials.length) return null;

  const current = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-ink-200 bg-gradient-to-br from-blue-950 via-blue-900 to-ink-950 p-6 shadow-card sm:p-8 lg:p-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Quote className="absolute -top-2 left-0 h-10 w-10 text-orange-300/40" />
          <p className="pt-7 text-base leading-7 text-blue-50 sm:pt-8 sm:text-xl sm:leading-9">
            {current.quote}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/12 ring-1 ring-white/15" />
            <div>
              <p className="font-semibold text-white">{current.name}</p>
              <p className="text-sm text-blue-200">{current.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex gap-2">
        {testimonials.map((item, dotIndex) => (
          <span
            key={`${item.name}-${dotIndex}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              dotIndex === index ? "w-10 bg-orange-400" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
