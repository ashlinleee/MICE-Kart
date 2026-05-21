import React from "react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

export default function PhotoCollage({ images: photos, className = "" }) {
  if (!photos?.length) return null;

  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${className}`}>
      {photos.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
          className={`overflow-hidden rounded-2xl border border-ink-200/80 shadow-card ${
            i === 0
              ? "col-span-2 row-span-2 aspect-square sm:aspect-auto sm:min-h-[240px] lg:min-h-[280px]"
              : "aspect-square"
          }`}
        >
          <SafeImage src={src} alt="" className="h-full w-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
}
