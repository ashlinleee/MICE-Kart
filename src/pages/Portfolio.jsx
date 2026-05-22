import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Sparkles } from "../components/Icons";
import PageHero from "../components/PageHero";

const projects = [
  { title: "Corporate Conference", tag: "Strategy / AV / Hospitality" },
  { title: "Annual Day Celebration", tag: "Entertainment / Stage / Decor" },
  {
    title: "Hybrid Leadership Summit",
    tag: "Broadcast / Virtual / Live Audience",
  },
  { title: "Product Launch", tag: "Brand Story / Media / VIP Hosting" },
  { title: "Team Retreat", tag: "Offsite / Activities / Logistics" },
  { title: "Awards Night", tag: "Gala / Experience / Production" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Portfolio() {
  return (
    <div className="w-full">
      <PageHero
        badge="Our work"
        badgeIcon={Camera}
        title={
          <>
            A portfolio of moments designed to{" "}
            <span className="gradient-text-static">last</span>
          </>
        }
        subtitle="A curated collection of corporate experiences, celebrations, launches, and hybrid productions."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => {
              const CardContent = (
                <motion.article
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card transition hover:shadow-card-hover"
                >
                  <div className="relative h-44 overflow-hidden sm:h-52 lg:h-56">
                    <motion.div
                      className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.25),rgba(15,23,42,0.85)),url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop')] bg-cover bg-center"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="relative z-10 flex h-full items-end p-6">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-300">
                        <Sparkles size={14} /> Featured
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-bold">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {project.tag}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition group-hover:text-glow-600">
                      View details{" "}
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              );

              return index === 0 ? (
                <Link
                  key={project.title}
                  to="/corporate-conference"
                  className="no-underline"
                >
                  {CardContent}
                </Link>
              ) : (
                <div key={project.title}>{CardContent}</div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
