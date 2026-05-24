import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Plane, ShieldCheck, ThumbsUp } from "../components/Icons";
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

const pillars = [
  {
    title: "Mission",
    text: mission,
    image: images.travel,
    color: "border-blue-700",
  },
  {
    title: "Vision",
    text: vision,
    image: images.incentive,
    color: "border-emerald-600",
  },
  {
    title: "Company Goals",
    text: usp,
    image: images.office,
    color: "border-indigo-700",
  },
];

const whyChooseDetails = [
  {
    title: "Strategic Planning",
    desc: "Program-first planning that aligns travel and events with business outcomes, budgets, and timelines.",
    icon: Sparkles,
    color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "Execution Excellence",
    desc: "On-ground precision across logistics, venue coordination, vendor management, and delegate experience.",
    icon: Plane,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Personalized Experiences",
    desc: "Custom journeys and event formats tailored to audience profile, purpose, and brand tone.",
    icon: ShieldCheck,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Measurable Impact",
    desc: "Clear post-event reporting and insights to track engagement, outcomes, and ROI.",
    icon: ThumbsUp,
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
];

export default function About() {
  const introLeadClass =
    "!text-lg !text-ink-900 !font-semibold border-l-4 border-orange-500 pl-4";

  return (
    <div>
      <PageBanner
        image={images.heroAbout}
        title="About Us"
        subtitle="MICEkart Pvt. Ltd. — trusted corporate travel and event partner since 2019."
      />

      {/* 1. About MICEkart */}
      <section className="section-pad bg-white">
        <div className="page-container">
          <SectionHeading
            label="Corporate Overview"
            title="Integrated Corporate Travel & Events"
          />
          <div className="grid items-start gap-12 lg:grid-cols-2 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="photo-frame relative group overflow-hidden"
            >
              <SafeImage
                src={images.conference}
                alt="MICEkart events"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
            </motion.div>
            <div className="space-y-6 text-ink-600 leading-relaxed">
              <p className={introLeadClass}>{about.intro[0]}</p>
              <p className={introLeadClass}>{about.intro[1]}</p>
              {about.offerings.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p>{about.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leadership & Team */}
      <section className="surface-dark section-pad">
        <div className="page-container">
          <SectionHeading
            label="Our Team"
            title="Leadership & Team"
            light
            center
          />
          <div>
            {/* First row: up to 3 cards (left aligned) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.slice(0, 3).map((member, i) => (
                <div key={member.name} className="w-full">
                  <TeamCard
                    member={member}
                    image={getTeamImage(member)}
                    index={i}
                  />
                </div>
              ))}
            </div>

            {/* Second row: center any remaining cards (e.g., 2 cards centered) */}
            {team.length > 3 && (
              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:justify-center">
                {team.slice(3).map((member, i) => (
                  <div
                    key={member.name}
                    className="w-full sm:w-1/2 lg:w-[360px]"
                  >
                    <TeamCard
                      member={member}
                      image={getTeamImage(member)}
                      index={3 + i}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission, USP */}
      <section className="section-pad bg-ink-50">
        <div className="page-container">
          <SectionHeading
            label="Core Principles"
            title="Our vision and mission"
            center
          />
          <div className="grid gap-8 lg:grid-cols-3 mt-8">
            {pillars.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative group overflow-hidden rounded-3xl border border-ink-100 bg-white hover:border-orange-500/20 hover:shadow-xl transition-all duration-400 p-6"
              >
                <div
                  className={`absolute left-4 top-6 bottom-6 w-1.5 ${v.color} rounded-sm`}
                />
                <div className="pl-6">
                  <h3 className="font-display text-2xl font-bold text-ink-950 leading-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {v.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose MICEkart */}
      <section className="section-pad bg-white">
        <div className="page-container">
          <SectionHeading
            label="What Sets Us Apart"
            title="What Sets Us Apart"
            center
          />
          <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-ink-600">
            We provide seamless corporate travel and MICE solutions, combining
            strategic planning, flawless event execution, and personalized
            experiences to create impactful business events, conferences,
            incentives, and corporate journeys that drive engagement and growth.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 mt-10">
            {whyChooseDetails.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex gap-5 rounded-3xl border border-ink-100 bg-ink-50/50 p-6 sm:p-8 hover:bg-white hover:border-orange-500/20 hover:shadow-card-hover transition-all duration-300"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${item.color} transition duration-500 group-hover:scale-110`}
                  >
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-950 transition duration-300 group-hover:text-orange-500">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-pad">
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
