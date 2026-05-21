import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import SafeImage from "../components/ui/SafeImage";
import GlowCard from "../components/ui/GlowCard";
import { images, clientLogos, usp } from "../data/siteContent";

const clientRows = [
  clientLogos.filter((_, index) => index % 2 === 0),
  clientLogos.filter((_, index) => index % 2 === 1),
];

const uspTopics = [
  {
    title: "Strategic Planning",
    desc: "Program-first planning that aligns travel and events with business outcomes, budgets, and timelines.",
  },
  {
    title: "Execution Excellence",
    desc: "On-ground precision across logistics, venue coordination, vendor management, and delegate experience.",
  },
  {
    title: "Personalized Experiences",
    desc: "Custom journeys and event formats tailored to audience profile, purpose, and brand tone.",
  },
  {
    title: "Measurable Impact",
    desc: "Clear post-event reporting and insights to track engagement, outcomes, and ROI.",
  },
];

export default function Clients() {
  return (
    <div>
      <PageBanner
        image={images.heroClients}
        title="Our Clients"
        subtitle="Trusted by leading enterprises across financial services and corporate India."
      />

      <section className="bg-white pb-16 pt-2 sm:pb-20 lg:pb-24">
        {/* Full-bleed marquee of client logos */}
        <div className="space-y-5">
          {clientRows.map((row, rowIndex) => (
            <div
              key={`client-row-${rowIndex}`}
              className="relative overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

              <div className="w-full overflow-hidden bg-ink-50/80 py-4">
                <div
                  className="flex w-max items-center gap-4 px-6 animate-marquee"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: rowIndex === 0 ? "34s" : "42s",
                  }}
                >
                  {[...row, ...row].map((client, index) => (
                    <motion.div
                      key={`${client.name}-${index}`}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="flex h-[90px] w-[180px] shrink-0 items-center justify-center rounded-3xl border border-white bg-white px-4 shadow-card sm:h-[110px] sm:w-[220px]"
                      title={client.name}
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className="h-full w-full object-contain p-3"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-ink-50">
        <div className="page-container">
          <div>
            <SectionHeading
              label="Our Promise"
              title="What Sets Us Apart"
              subtitle={usp}
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {uspTopics.map((topic, index) => (
              <GlowCard
                key={topic.title}
                delay={index * 0.08}
                className="h-full"
              >
                <h3 className="font-display text-xl text-ink-950">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {topic.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-pad">
        <SafeImage
          src={images.conference}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="page-container relative z-10 text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Partner with MICEkart
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-blue-100">
            Corporate travel and events - Engineered for impact.
          </p>
          <Link to="/contact" className="btn-orange mt-8 inline-flex">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
