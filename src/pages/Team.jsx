import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import PageHero from "../components/PageHero";

const team = [
  {
    name: "Aarav Mehta",
    role: "Creative Director",
    bio: "Shapes the visual language, content tone, and overall event narrative.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=faces",
  },
  {
    name: "Nisha Rao",
    role: "Operations Lead",
    bio: "Keeps vendor coordination, schedules, and approvals moving smoothly.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop&crop=faces",
  },
  {
    name: "Rahul Sethi",
    role: "Production Manager",
    bio: "Oversees staging, AV, and technical delivery across formats.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&crop=faces",
  },
  {
    name: "Meera Iyer",
    role: "Client Partnerships",
    bio: "Works with stakeholders to align objectives, budgets, and delivery milestones.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=faces",
  },
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

export default function Team() {
  return (
    <div className="w-full">
      <PageHero
        badge="The people behind the process"
        badgeIcon={Users}
        title={
          <>
            Meet the team that turns briefs into{" "}
            <span className="gradient-text-static">experiences</span>
          </>
        }
        subtitle="This page uses dummy profiles for demo purposes. Replace the bios, images, and titles with your real team information when ready."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2"
          >
            {team.map((member) => (
              <motion.article
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card transition hover:shadow-card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-[280px] w-full bg-gradient-to-br from-brand-50 to-accent-50 object-cover object-top transition duration-500 group-hover:scale-105 sm:h-[340px] lg:h-[380px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-bold">
                    {member.name}
                  </h2>
                  <p className="mt-1 font-semibold text-brand-600">
                    {member.role}
                  </p>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
