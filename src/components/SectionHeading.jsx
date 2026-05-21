import React from "react";
import { motion } from "framer-motion";

/**
 * titleStyle: "solid" (default) | "ombre" — full heading uses one treatment, never split words
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  center = false,
  titleStyle = "solid",
}) {
  const titleClasses = [
    "section-title",
    light && "!text-white",
    !light && titleStyle === "ombre" && "title-ombre",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 sm:mb-12 ${center ? "text-center" : ""}`}
    >
      <h2 className={titleClasses}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            center ? "mx-auto" : ""
          } ${light ? "text-blue-100" : "text-ink-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
