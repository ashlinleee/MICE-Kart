import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", className = "", animate: shouldAnimate = true }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!shouldAnimate) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        animate(motionValue, parseInt(value.replace(/\D/g, ""), 10), {
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        });
      }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, motionValue, started, shouldAnimate]);

  const isLight = className.includes("text-white");

  if (!shouldAnimate) {
    return (
      <span className={`font-display text-3xl font-bold sm:text-4xl ${isLight ? "text-white" : "text-white"} ${className}`}>
        {value}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={`font-display text-3xl font-bold sm:text-4xl ${isLight ? "text-white" : "text-orange-500"} ${className}`}
    >
      {display}
    </motion.span>
  );
}
