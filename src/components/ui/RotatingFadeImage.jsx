import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

export default function RotatingFadeImage({
  images = [],
  alt = "",
  intervalMs = 3000,
  className = "",
  imageClassName = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  if (!images.length) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((imageSrc, index) => {
        const isActive = index === activeIndex % images.length;

        return (
          <motion.div
            key={imageSrc}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 1.02,
            }}
            transition={{ duration: 1.15, ease: "easeInOut" }}
          >
            <SafeImage
              src={imageSrc}
              alt={alt}
              className={`h-full w-full object-cover ${imageClassName}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
