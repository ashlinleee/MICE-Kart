import React from "react";
import { motion } from "framer-motion";

export default function GlowCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`glass-card card-hover p-6 sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
