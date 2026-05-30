import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SafeImage from "../components/ui/SafeImage";
import servicesBanner from "../../Images/Banner_images/services_banner.png";
import {
  ArrowRight,
  BadgeCheck,
  Mail,
  Phone,
  Quote,
  Users,
} from "../components/Icons";
import { company, services } from "../data/siteContent";

const formFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    Icon: Users,
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Phone",
    Icon: Phone,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    Icon: Mail,
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    Icon: BadgeCheck,
  },
];

// Removed unused helper `getServiceHighlights` and its fallback data.

function ServiceFormModal({ serviceTitle, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close service enquiry form"
        className="absolute inset-0 bg-[#06142f]/25 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[28px] border border-white/15 bg-[linear-gradient(180deg,rgba(7,28,74,0.62)_0%,rgba(10,45,104,0.5)_52%,rgba(7,20,49,0.62)_100%)] shadow-[0_30px_90px_rgba(7,28,74,0.28)] backdrop-blur-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,30,0.2),transparent_38%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(59,130,246,0.05)_0%,rgba(7,28,74,0.01)_100%)]" />
        <div className="relative flex items-start justify-between gap-6 border-b border-white/10 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">
              Service Enquiry
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              {serviceTitle || "Tell us about your project"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-blue-950/35 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-900/50"
          >
            Close
          </button>
        </div>

        <div className="relative px-6 py-6 sm:px-8 sm:py-8">
          <form
            action={`https://formsubmit.co/${company.email}`}
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value={
                serviceTitle
                  ? `Enquiry for ${serviceTitle}`
                  : "Enquiry from MICEkart website"
              }
            />
            <input type="hidden" name="_captcha" value="false" />

            {formFields.map((field, index) => (
              <motion.label
                key={field.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.04 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-blue-950/30 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <span className="text-orange-300/95">
                  <field.Icon size={18} />
                </span>
                <input
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full border-none bg-transparent text-sm text-white outline-none placeholder:text-white/55"
                />
              </motion.label>
            ))}

            <motion.label
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-blue-950/30 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <span className="pt-1 text-orange-300/95">
                <Quote size={18} />
              </span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="How can we help you? Feel free to get in touch!"
                className="w-full resize-none border-none bg-transparent text-sm text-white outline-none placeholder:text-white/55"
              />
            </motion.label>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="btn-orange w-full rounded-full"
            >
              Submit Query
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="bg-[linear-gradient(180deg,#06142f_0%,#0b2d66_42%,#071a3a_100%)]">
      <section className="relative overflow-hidden bg-[#071c4a] text-white">
        <div className="absolute inset-0">
          <SafeImage
            src={servicesBanner}
            alt=""
            className="h-full w-full object-cover opacity-100 blur-[1px] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,37,84,0.88)_0%,rgba(10,10,10,0.75)_100%)]" />

        <div className="page-container relative z-10 flex min-h-[60vh] items-end pb-4 pt-16 sm:min-h-[64vh] sm:pb-6 sm:pt-20 lg:min-h-[68vh] lg:pb-8 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
              OUR SERVICES
            </div>
            <h1 className="max-w-[40ch] font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              <span className="block text-white">
                Built for Corporate Experiences
              </span>
              <span className="block text-orange-500">
                Planned to Perfection
              </span>
            </h1>
            <p className="mt-6 max-w-[36rem] text-base leading-7 text-blue-100">
              From business travel and conferences to incentive journeys and
              large-scale events, we create seamless experiences that drive
              engagement and results.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-orange">
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services-list"
        className="py-[50px] bg-white/85 backdrop-blur-sm"
      >
        <div className="page-container">
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.button
                key={s.title}
                type="button"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.04,
                  ease: "easeOut",
                }}
                onClick={() => setActiveService(s.title)}
                className="group relative h-full overflow-hidden rounded-[30px] border border-blue-300/20 bg-gradient-to-br from-blue-950 via-blue-900 to-ink-950 text-left text-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-orange-300/70 hover:shadow-[0_20px_48px_rgba(249,115,22,0.22)]"
              >
                <div className="relative h-[280px] overflow-hidden border-b border-blue-200/15">
                  <SafeImage
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="relative flex h-full flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-bold leading-tight text-white transition-colors group-hover:text-orange-200 sm:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-blue-100/85">
                    {s.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {activeService ? (
        <ServiceFormModal
          serviceTitle={activeService}
          onClose={() => setActiveService(null)}
        />
      ) : null}
    </div>
  );
}
