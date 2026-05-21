import React from "react";
import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-900/30 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 14, repeat: Infinity, delay: 3 }}
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
      />
    </div>
  );
}
