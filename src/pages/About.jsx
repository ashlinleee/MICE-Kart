import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Headphones } from "lucide-react";
import {
  Sparkles,
  Plane,
  ShieldCheck,
  ThumbsUp,
  Users,
  Eye,
  Target,
} from "../components/Icons";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/ui/TeamCard";
import SafeImage from "../components/ui/SafeImage";
import { images, about, vision, mission, usp, team } from "../data/siteContent";
import gavinImage from "../../gavin.jpeg";
import abhishekImage from "../../abhiskek.png";

const localPhotos = {
  gavin: gavinImage,
  abhishek: abhishekImage,
};

function getTeamImage(member) {
  if (member.imageKey && localPhotos[member.imageKey])
    return localPhotos[member.imageKey];
  return member.image;
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

const pillars = [
  {
    title: "Our Vision",
    text: vision,
    Icon: Eye,
  },
  {
    title: "Our Mission",
    text: mission,
    Icon: Target,
  },
];

const whyChooseDetails = [
  {
    title: "Strategic Planning",
    desc: "Program-first planning that aligns travel and events with business outcomes, budgets, and timelines.",
    icon: Sparkles,
    color: "#FF8A1E",
  },
  {
    title: "Execution Excellence",
    desc: "On-ground precision across logistics, venue coordination, vendor management, and delegate experience.",
    icon: Plane,
    color: "#355DA8",
  },
  {
    title: "Personalized Experiences",
    desc: "Custom journeys and event formats tailored to audience profile, purpose, and brand tone.",
    icon: Users,
    color: "#FF8A1E",
  },
  {
    title: "Measurable Impact",
    desc: "Clear post-event reporting and insights to track engagement, outcomes, and ROI.",
    icon: BarChart3,
    color: "#355DA8",
  },
  {
    title: "End-to-End Support",
    desc: "A dedicated team committed to seamless communication and 24/7 support.",
    icon: Headphones,
    color: "#FF8A1E",
  },
];

export default function About() {
  const introTextClass = "text-lg leading-8 text-ink-600";

  return (
    <div>
      <PageBanner
        image={images.heroAbout}
        title="About Us"
        subtitle="MICEkart Pvt. Ltd. a trusted corporate travel and event partner since 2019."
      />

      {/* 1. Who we are */}
      <section className="section-pad py-[120px] bg-white">
        <div className="page-container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ x: -12 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="photo-frame relative group overflow-hidden rounded-3xl"
            >
              <SafeImage
                src={images.office}
                alt="MICEKART office"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 rounded-2xl"
              />
            </motion.div>

            <div>
              <div className="mb-4">
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-blue-700 leading-tight">
                Your Trusted Partner in Corporate Travel &amp; Events
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-600 max-w-none">
                MICEkart is an integrated corporate travel solutions and event
                management company, helping businesses plan seamless travel
                experiences, meetings, conferences, exhibitions, incentive
                programs, and corporate events across India and internationally.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3">
                {[
                  { label: "Corporate Travel", Icon: Plane },
                  { label: "Conferences and Meetings", Icon: Users },
                  { label: "Incentive Program", Icon: Sparkles },
                  { label: "Event Management", Icon: ShieldCheck },
                ].map(({ label, Icon }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-500 border border-blue-100">
                      <Icon size={14} className="text-blue-500" />
                    </span>
                    <span className="text-base leading-6 text-ink-800">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 lg:mt-10">
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "#1B4DBA",
                  boxShadow: "0_22px_60px_rgba(27,77,186,0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-[30px] border border-slate-200/70 bg-[linear-gradient(180deg,#ffffff_0%,#f3f8ff_100%)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] flex items-center"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1B4DBA] shadow-sm">
                    <Eye size={36} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#10245A]">
                      Our Vision
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-700">
                      {vision}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Center Logo Connector */}
              <div className="relative flex items-center justify-center py-6 lg:py-0">
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex items-center justify-center"
                >
                  {/* removed extra backdrop circle to avoid duplicate ring */}
                  <div
                    className="relative flex items-center justify-center rounded-full"
                    style={{ width: 280, height: 280 }}
                  >
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 280,
                        height: 280,
                        background:
                          "conic-gradient(from 200deg, #1B4DBA 0deg 120deg, rgba(200,200,200,0.35) 120deg 210deg, #FF7A1A 210deg 360deg)",
                        WebkitMask:
                          "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 12px))",
                        mask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 12px))",
                        boxShadow:
                          "inset 0 14px 30px rgba(255,255,255,0.35), 0 18px 28px rgba(15,23,42,0.06)",
                      }}
                    />
                    <span className="absolute left-[-8px] top-1/2 z-10 h-5 w-5 -translate-y-1/2 rounded-full bg-[#1B4DBA] shadow-[0_0_0_8px_rgba(27,77,186,0.06)]" />
                    <span className="absolute right-[-8px] top-1/2 z-10 h-5 w-5 -translate-y-1/2 rounded-full bg-[#FF7A1A] shadow-[0_0_0_8px_rgba(255,122,26,0.06)]" />
                    <div className="relative z-20 flex h-[220px] w-[220px] items-center justify-center rounded-full bg-white/72 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.12)] ring-1 ring-white/60 backdrop-blur-md">
                      <SafeImage
                        src="/micekart-logo.png"
                        alt="MICEkart logo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "#FF7A1A",
                  boxShadow: "0_22px_60px_rgba(255,122,26,0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-[30px] border border-slate-200/70 bg-[linear-gradient(180deg,#fffaf5_0%,#ffffff_100%)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] flex items-center"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF7A1A] shadow-sm">
                    <Target size={36} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#FF7A1A]">
                      Our Mission
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-700">
                      {mission}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Leadership & Team */}
      <section className="section-pad pt-4 pb-10 bg-white">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <h2 className="font-display text-3xl font-bold text-[#10245A] sm:text-4xl lg:text-5xl">
              Meet The Team
            </h2>
            <span className="mx-auto mt-4 block h-1 w-16 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#FF8A1E] to-[#F5A000] transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </motion.div>
          <div>
            {/* All team members in one row */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {team.map((member, i) => (
                <div key={member.name} className="w-full">
                  <TeamCard
                    member={member}
                    image={getTeamImage(member)}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose MICEkart */}
      <section className="section-pad py-16 bg-white">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <h2 className="font-display text-3xl font-bold text-[#10245A] sm:text-4xl lg:text-5xl">
              What Sets Us Apart
            </h2>
            <span className="mx-auto mt-4 block h-1 w-16 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#FF8A1E] to-[#F5A000] transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyChooseDetails.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative flex h-full flex-col items-center overflow-hidden rounded-[28px] border border-slate-100 bg-white px-6 py-8 text-center shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--card-accent)] hover:shadow-[0_24px_50px_rgba(15,23,42,0.08)]"
                  style={{ "--card-accent": item.color }}
                >
                  <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: hexToRgba(item.color, 0.08) }}
                  />
                  <span
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/80 text-white shadow-[0_14px_24px_rgba(15,23,42,0.12)] transition duration-500 group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={34} strokeWidth={1.9} />
                  </span>
                  <h3 className="relative z-10 mt-6 font-display text-[1.05rem] font-bold leading-tight text-slate-900 transition duration-300 group-hover:text-[#10245A]">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-sm leading-7 text-slate-500 transition duration-300 group-hover:text-slate-700">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-pad py-16">
        <SafeImage
          src={images.gala}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="page-container relative z-10 text-center">
          <SectionHeading
            label="Partner With Us"
            title="Engineered for Impact"
            titleStyle="ombre"
            light
            center
            subtitle="Corporate travel and events, delivered with precision."
          />
          <Link to="/contact" className="btn-orange mt-4 inline-flex">
            Work With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
