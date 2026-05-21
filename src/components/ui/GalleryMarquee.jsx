import React from "react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

export default function GalleryMarquee({ images = [], className = "" }) {
  if (!images.length) return null;

  const doubled = [...images, ...images];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl 5 py-14 shadow-card ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32" />
      <div className="flex w-max animate-marquee items-center gap-5 whitespace-nowrap px-4">
        {doubled.map((src, index) => (
          <motion.div
            key={`${src}-${index}`}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            whileHover={{ rotateX: 6, rotateY: -6, y: -8, scale: 1.02 }}
            className="perspective-1000"
          >
            <div className="h-56 w-56 shrink-0 overflow-hidden rounded-3xl bg-ink-50 shadow-sm [transform-style:preserve-3d] sm:h-52 sm:w-72 lg:h-56 lg:w-[24rem] xl:h-64 xl:w-[32rem]">
              <SafeImage
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
