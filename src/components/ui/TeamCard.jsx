import React from "react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

export default function TeamCard({ member, image, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group h-[420px] w-full perspective-1000 cursor-pointer"
    >
      <div className="relative h-full w-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Face: Picture, Name, Designation */}
        <div className="absolute inset-0 h-full w-full rounded-3xl border border-white/10 bg-ink-950/40 shadow-card backdrop-blur-sm overflow-hidden backface-hidden flex flex-col">
          <div className="relative flex-1 overflow-hidden">
            <SafeImage
              src={image}
              alt={member.name}
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          </div>
          <div className="p-6 shrink-0 bg-ink-950/90 text-center border-t border-white/5">
            <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-orange-400">
              {member.role}
            </p>
          </div>
        </div>

        {/* Back Face: Details/Bio */}
        <div className="absolute inset-0 h-full w-full rounded-3xl border border-white/10 shadow-card backdrop-blur-md overflow-hidden backface-hidden [transform:rotateY(180deg)] flex flex-col p-6 sm:p-8 text-center bg-gradient-to-br from-blue-950 via-blue-900 to-ink-950">
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-400 border border-orange-500/30">
              {member.name}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <p className="text-sm leading-relaxed text-blue-100/90">
              {member.bio}
            </p>
          </div>

          <div className="flex justify-center">
            <p className="text-xs font-semibold text-white/50 tracking-wider">
              {member.role}
            </p>
          </div>
        </div>

      </div>
    </motion.article>
  );
}
