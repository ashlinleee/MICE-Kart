import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "../components/Icons";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    title: "Business Conferences",
    desc: "Plan and execute professional, large-scale business conferences that enable knowledge exchange, networking, and thought leadership.",
    includes: ["Conference theme & agenda planning", "Speaker management & coordination", "Venue sourcing & setup", "Stage design, AV & technical production", "Registration & attendee management"],
  },
  {
    title: "All-Hands Meetings",
    desc: "Bring your entire organization together with seamless all-hands meetings that foster transparency, alignment, and motivation.",
    includes: ["Leadership updates", "Company milestones", "Strategy rollouts", "Hybrid & in-person formats"],
  },
  {
    title: "Kick-Off Events",
    desc: "Start new financial years, product cycles, or major initiatives with high-energy kick-off events that set the tone for success.",
    includes: ["Vision alignment", "Team engagement", "Leadership messaging", "Interactive experiences"],
  },
  {
    title: "Corporate Summits",
    desc: "Manage executive-level and industry-focused corporate summits that position your organization as a market leader.",
    includes: ["Curated content flow", "Premium delegate experience", "Sponsor & partner integrations", "Brand storytelling through design"],
  },
  {
    title: "Investor Forums",
    desc: "Host high-credibility investor forums that reflect professionalism, trust, and strategic intent.",
    includes: ["Confidential planning & logistics", "High-end venue management", "Presentation & stage aesthetics", "VIP guest handling"],
  },
  {
    title: "Annual General Meetings",
    desc: "Ensure AGMs are conducted smoothly, compliantly, and professionally, whether physical, virtual, or hybrid.",
    includes: ["End-to-end AGM logistics", "Shareholder experience", "Technical & voting support", "Compliance-friendly execution"],
  },
];

const whyChoosePoints = [
  {
    title: "Strategy-First Approach",
    desc: "We don't just execute events, we design experiences aligned with your business objectives, audience psychology, and brand narrative.",
  },
  {
    title: "Proven Corporate Expertise",
    desc: "With extensive experience across IT, startups, enterprises, and MNCs, we understand corporate expectations, timelines, and governance.",
  },
  {
    title: "End-to-End Ownership",
    desc: "From concept to closure, one dedicated team manages planning, vendors, production, and on-ground execution.",
  },
  {
    title: "Flawless Execution",
    desc: "Deep local expertise across venues, vendors, permissions, and logistics ensures reliability and speed.",
  },
  {
    title: "Measurable Outcomes",
    desc: "We focus on engagement, attendance, satisfaction, and brand recall, not just aesthetics.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Strategic Discovery & Requirement Mapping",
    desc: "Deep understanding of business objectives, audience profile, and success metrics before planning anything.",
  },
  {
    number: "02",
    title: "Concept Development & Experience Design",
    desc: "Craft cohesive event concept that aligns messaging, flow, and visual identity with your brand.",
  },
  {
    number: "03",
    title: "Detailed Planning & Vendor Coordination",
    desc: "Single point of accountability handling venue, AV, logistics, speaker coordination, and risk management.",
  },
  {
    number: "04",
    title: "On-Ground Execution & Live Event Management",
    desc: "Our experienced team takes full control on event day, ensuring flawless execution and stress-free experience.",
  },
  {
    number: "05",
    title: "Post-Event Closure & Insights",
    desc: "Event closure, feedback analysis, reporting, and strategic recommendations for future events.",
  },
];

const industries = [
  { title: "Information Technology & Tech", items: ["Annual conferences", "Leadership offsites", "All-hands meetings", "Product showcases"] },
  { title: "Startups & Scale-Ups", items: ["Kick-off events", "Investor forums", "Town halls", "Brand positioning events"] },
  { title: "BFSI & Financial Services", items: ["Investor meets", "AGMs", "Compliance-driven events", "Leadership summits"] },
  { title: "Manufacturing & Engineering", items: ["Corporate conferences", "Partner meets", "Annual business reviews", "Leadership forums"] },
  { title: "Healthcare & Pharma", items: ["Corporate summits", "Leadership meetings", "Stakeholder conferences", "Knowledge-sharing forums"] },
  { title: "Enterprise & Corporate", items: ["Town halls", "Strategy meets", "Executive summits", "High-stake events"] },
];

export default function CorporateConferenceDetail() {
  return (
    <div className="w-full">
      <PageHero
        badge="Corporate Event Management"
        badgeIcon={Sparkles}
        title={<>End-to-End Corporate Event Solutions That <span className="gradient-text-static">Drive Impact</span></>}
        subtitle="From high-stake business conferences to investor forums and all-hands meetings, we manage every detail with precision."
      />

      {/* Services Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Our Corporate Event Management Services</h2>
              <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                We offer end-to-end planning, production, and execution for a wide range of corporate events, tailored to your objectives, audience, and brand positioning.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <motion.div key={service.title} variants={itemVariants} whileHover={{ y: -8 }} className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card transition hover:border-brand-200 hover:shadow-card-hover">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700 font-semibold">Includes</p>
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-900 text-center sm:text-5xl mb-16">
              Why Choose MICEkart for Corporate Event Management
            </motion.h2>

            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {whyChoosePoints.map((point) => (
                <motion.div key={point.title} variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-accent-300/60 transition shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">
              Our Corporate Event Management Process
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
              Built to deliver clarity, control, and consistency at every stage. We follow a structured yet flexible approach that ensures on-time delivery, budget discipline, and exceptional attendee experience.
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {processSteps.map((step) => (
                <motion.div key={step.number} variants={itemVariants} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left shadow-sm">
                  <div className="text-sm font-bold tracking-[0.35em] text-brand-700 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-900 text-center sm:text-5xl mb-16">
              Industries We Serve
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <motion.div key={industry.title} variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{industry.title}</h3>
                  <ul className="space-y-2">
                    {industry.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-accent-500 mt-1 flex-shrink-0">•</span>
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-glow-500 to-accent-500" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-extrabold text-white mb-6">Planning a Corporate Event?</h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              Partner with MICEkart for seamless corporate event management that delivers real business impact.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-4 text-lg font-bold text-brand-700 shadow-xl transition hover:shadow-2xl"
              >
                Get a Custom Proposal <ArrowRight size={20} />
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
