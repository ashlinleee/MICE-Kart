import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "../Icons";
import SafeImage from "./SafeImage";

export default function BentoCard({
  to,
  image,
  title,
  tag,
  className = "",
  minHeight = "min-h-[220px]",
}) {
  const content = (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={`group relative overflow-hidden rounded-3xl border border-ink-200/80 bg-ink-950 shadow-card card-hover ${minHeight} ${className}`}
    >
      <SafeImage
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-blue-950/55 to-blue-950/10 transition duration-500 group-hover:via-blue-950/45" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <div>
          {tag && (
            <span className="inline-block rounded-full bg-orange-500/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              {tag}
            </span>
          )}
          <h3 className="mt-2 font-display text-lg font-bold leading-tight text-white sm:text-xl">
            {title}
          </h3>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur-md transition group-hover:bg-orange-500 group-hover:border-orange-400">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.div>
  );

  if (to)
    return (
      <Link to={to} className="block no-underline">
        {content}
      </Link>
    );
  return content;
}
