import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import SafeImage from "../components/ui/SafeImage";
import { ChevronRight } from "../components/Icons";
import { images, services } from "../data/siteContent";

const faqs = [
  {
    question: "What types of services do you offer?",
    answer:
      "We cover corporate travel, meetings, conferences, incentive travel, team-building, artist management, merchandising, hybrid solutions, and complete event packages.",
  },
  {
    question: "Can you handle both domestic and international programs?",
    answer:
      "Yes. We manage travel and event execution across India and for international corporate programs as well.",
  },
  {
    question: "Do you offer customized packages?",
    answer:
      "Every program is tailored to your budget, goals, audience profile, and execution requirements.",
  },
  {
    question: "Can you support end-to-end execution?",
    answer:
      "Yes. We manage planning, logistics, vendors, on-ground coordination, and reporting so you have a single point of contact.",
  },
  {
    question: "Do you handle hybrid or tech-enabled events?",
    answer:
      "We provide virtual and hybrid event support, including streaming, event apps, and measurement tools.",
  },
  {
    question: "How do I request a proposal?",
    answer:
      "Use the contact form or request a quote from the services page with your program details and preferred dates.",
  },
];

export default function Services() {
  return (
    <div>
      <PageBanner
        image={images.heroProducts}
        title="Services"
        subtitle="End-to-end MICE, corporate travel and event solutions to make every business trip and gathering seamless and impactful."
      />

      <section className="section-pad bg-ink-50">
        <div className="page-container">
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.04,
                  ease: "easeOut",
                }}
                className="group h-full overflow-hidden rounded-3xl border border-ink-200/80 bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
              >
                <div className="relative min-h-[240px] overflow-hidden">
                  <SafeImage
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Service
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold text-ink-950">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-600">
                    {s.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-container">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services and process."
            center
          />
          <div className="mt-10 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-ink-200 bg-ink-50 p-5 shadow-card transition hover:border-orange-500/30 hover:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-bold text-ink-950">
                  <span>{faq.question}</span>
                  <ChevronRight
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 rotate-90 text-orange-500"
                  />
                </summary>
                <p className="mt-4 text-sm leading-7 text-ink-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[420px] overflow-hidden py-24">
        <SafeImage
          src={images.heroContact}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="page-container relative z-10 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Need a custom package?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            We'll tailor scope, travel, venue and production to your goals.
          </p>
          <Link to="/contact" className="btn-orange mt-8 inline-flex">
            Request Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
