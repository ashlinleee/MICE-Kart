import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  Lightbulb,
  MessageCircle,
  Settings,
  TrendingUp,
  Workflow,
  Headphones,
} from "lucide-react";
import {
  Sparkles,
  Plane,
  ShieldCheck,
  ThumbsUp,
  Users,
  Eye,
  Target,
} from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import TeamCard from "../components/ui/TeamCard";
import SafeImage from "../components/ui/SafeImage";
import RotatingFadeImage from "../components/ui/RotatingFadeImage";
import { images, about, vision, mission, usp, team } from "../data/siteContent";
import gavinImage from "../../Images/Team_images/gavin.jpeg";
import abhishekImage from "../../Images/Team_images/abhishek.jpeg";
import latishImage from "../../Images/Team_images/latish.png";
import aboutBannerBg from "../../Images/Banner_images/aboutbanner_bg.png";

const localPhotos = {
  gavin: gavinImage,
  abhishek: abhishekImage,
  latish: latishImage,
};

const aboutSectionImages = Object.entries(
  import.meta.glob("/Images/about_img/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([, src]) => src);

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
    desc: "From concept to completion. Turning plans into flawless experiences through precision and excellence.",
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
    title: "Innovation & Reliability",
    desc: "Driving exceptional outcomes through innovation, expertise, and unwavering reliability.",
    icon: BarChart3,
    color: "#355DA8",
  },
  {
    title: "One - Stop MICE Solutions",
    desc: "End-to-End services under one roof, simplifying the planning process and delivering complete peace of mind.",
    icon: Headphones,
    color: "#FF8A1E",
  },
];

const ourPromise = [
  {
    text: "Client-first approach in everything we do.",
    icon: Users,
  },
  {
    text: "Seamless end-to-end event management solutions.",
    icon: Workflow,
  },
  {
    text: "Consistent service excellence and operational efficiency.",
    icon: Settings,
  },
  {
    text: "Innovative and customized event experiences.",
    icon: Lightbulb,
  },
  {
    text: "Transparent communication and dependable execution.",
    icon: MessageCircle,
  },
  {
    text: "Measurable value and exceptional client satisfaction.",
    icon: TrendingUp,
  },
];

const impactStats = [
  {
    value: 600,
    suffix: "+",
    label: "Domestic events",
  },
  {
    value: 400,
    suffix: "+",
    label: "Abroad international events",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client retention",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of industry experience",
  },
];

function AboutHeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#071c4a] text-white">
      <div className="absolute inset-0">
        <SafeImage
          src={aboutBannerBg}
          alt=""
          className="h-full w-full object-cover opacity-100 blur-[1px] scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,37,84,0.88)_0%,rgba(10,10,10,0.75)_100%)]" />

      <div className="page-container relative z-10 flex min-h-[60vh] items-center pb-8 pt-16 sm:min-h-[64vh] sm:pb-10 sm:pt-20 lg:min-h-[68vh] lg:pb-12 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
            ABOUT MICEKART
          </div>
          <h1 className="max-w-[20ch] font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            <span className="block text-white">We Plan. We Manage.</span>
            <span className="block text-orange-500">We Deliver Impact.</span>
          </h1>
          <p className="mt-6 max-w-[36rem] text-base leading-7 text-blue-100">
            <span className="block">
              MICEkart simplifies corporate travel and event management
            </span>
            <span className="block">
              through strategic planning, precision execution, and
            </span>
            <span className="block">personalized experiences.</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/services" className="btn-orange">
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  const introTextClass = "text-lg leading-8 text-ink-600";

  return (
    <div>
      <AboutHeroBanner />

      <section className="relative z-20 -mt-6 px-4 sm:-mt-20">
        <div className="page-container">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,27,72,0.98)_0%,rgba(11,45,104,0.96)_100%)] px-5 py-4 shadow-[0_24px_80px_rgba(7,20,49,0.3)] backdrop-blur-xl sm:px-8 sm:py-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,122,26,0.16),transparent_18%),radial-gradient(circle_at_88%_18%,rgba(255,122,26,0.12),transparent_16%)]" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4 xl:gap-5">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-h-[96px] rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.06)_38%,rgba(7,27,72,0.18)_100%)] px-3 py-3 text-center shadow-[0_10px_24px_rgba(7,20,49,0.14)] sm:min-h-0 sm:px-5 sm:py-5"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="scale-90 text-orange-400 sm:scale-100 sm:text-3xl"
                  />
                  <p className="mt-2 text-[11px] font-semibold leading-4 text-white/85 sm:text-sm sm:leading-6">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Who we are */}
      <section className="pt-[80px] pb-[30px] bg-white">
        <div className="page-container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ x: -12 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="photo-frame group aspect-[4/3]"
            >
              <RotatingFadeImage
                images={
                  aboutSectionImages.length
                    ? aboutSectionImages
                    : [images.office]
                }
                alt="MICEKART office"
                className="h-full w-full"
                imageClassName="transition duration-700 group-hover:scale-105"
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

          <div className="mt-12 lg:mt-16">
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
      {/* Our Promise - cards (inserted above Leadership & Team) */}
      <section className="section-pad py-8 bg-white">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <h2 className="font-display text-3xl font-bold text-[#10245A] sm:text-4xl lg:text-5xl">
              Our Promise
            </h2>
            <span className="mx-auto mt-4 block h-1 w-16 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#FF8A1E] to-[#F5A000] transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {ourPromise.map(({ text, icon: Icon }, i) => (
              <motion.div
                key={`promise-${i}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative flex h-full min-w-0 items-start gap-3 overflow-hidden rounded-[28px] border border-slate-100 bg-white px-4 py-5 text-left shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#355DA8] hover:shadow-[0_20px_40px_rgba(27,77,186,0.08)] hover:bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] sm:gap-4 sm:px-6 sm:py-6"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(53,93,168,0.03),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-[#355DA8] text-white shadow-[0_10px_24px_rgba(53,93,168,0.22)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_14px_30px_rgba(53,93,168,0.3)] sm:h-12 sm:w-12">
                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="text-white sm:size-5"
                  />
                </span>
                <p className="relative z-10 mt-0.5 text-sm leading-6 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 sm:text-base">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership & Team */}
      <section className="section-pad py-12 bg-white">
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
      <section className="section-pad py-12 bg-white">
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
