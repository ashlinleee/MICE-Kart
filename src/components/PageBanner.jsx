import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SafeImage from "./ui/SafeImage";

export default function PageBanner({
  image,
  title,
  subtitle,
  children,
  tall = false,
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-blue-950 ${
        tall
          ? "min-h-[70vh] sm:min-h-[78vh] lg:min-h-[92vh]"
          : "min-h-[52vh] sm:min-h-[60vh] lg:min-h-[68vh]"
      }`}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <SafeImage src={image} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="overlay-hero absolute inset-0" />
      <div className="absolute inset-0 bg-blue-950/20" />

      <div className="page-container relative z-10 w-full pb-12 pt-24 sm:pb-20 sm:pt-32 lg:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-[36rem] font-display text-3xl font-bold leading-[1.08] text-white sm:max-w-4xl sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-base text-blue-100 sm:mt-5 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function BannerCTA({ to, label, variant = "orange" }) {
  const cls =
    variant === "outline"
      ? "btn-outline"
      : variant === "primary"
        ? "btn-primary"
        : "btn-orange";
  return (
    <Link to={to} className={cls}>
      {label}
    </Link>
  );
}
