import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Users,
  BadgeCheck,
  Quote,
} from "../components/Icons";
import PageBanner from "../components/PageBanner";
import GlowCard from "../components/ui/GlowCard";
import { images, company } from "../data/siteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  return (
    <div>
      <PageBanner
        image={images.heroContact}
        title="Contact Us"
        subtitle="Plan your next corporate travel program or event with our Mumbai team."
      />

      <section className="relative section-pad bg-[#e8effa]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(30,58,138,0.14),transparent_70%)]" />
        <div className="page-container grid items-start gap-10 sm:gap-12 md:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="space-y-6 text-center md:text-left">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-xl font-display text-3xl font-bold text-ink-950 sm:text-4xl md:mx-0"
            >
              Get Your Instant Free Quote Now
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              custom={1}
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-lg text-sm leading-relaxed text-ink-700 sm:text-base md:mx-0"
            >
              Tell us what you are planning and our specialists will respond
              with a tailored proposal, timelines, and budget guidance for your
              next MICE program.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              custom={2}
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-lg text-sm leading-relaxed text-ink-600 sm:text-base md:mx-0"
            >
              Prefer to talk now? We can quickly align on your goals,
              destinations, and expected delegate count.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              custom={3}
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto flex w-full max-w-md items-center justify-start gap-4 text-left md:mx-0"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-white shadow-md sm:h-12 sm:w-12">
                <PhoneCall size={20} />
              </span>
              <a
                href={`tel:${company.phoneTel}`}
                className="text-base font-semibold tracking-wide text-ink-900"
              >
                {company.phone}
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              custom={4}
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto flex w-full max-w-md items-center justify-start gap-4 text-left md:mx-0"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-white shadow-md sm:h-12 sm:w-12">
                <Mail size={20} />
              </span>
              <a
                href={`mailto:${company.email}`}
                className="text-base font-semibold tracking-wide text-ink-900"
              >
                {company.email}
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              custom={5}
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto flex w-full max-w-md items-center justify-start gap-4 text-left md:mx-0"
            >
              <span className="hidden h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-white shadow-md sm:flex sm:h-16 sm:w-16">
                <MapPin size={20} />
              </span>
              <div className="text-left">
                <p className="text-base font-semibold tracking-wide text-ink-900">
                  Office Address
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-600 md:hidden">
                  Neelkanth Business Park, A-704, Vidyavihar station skywalk,
                  Sadguru Nagar, Neelkanth Kingdom, Vidyavihar West, Vidyavihar,
                  Mumbai, Maharashtra 400086
                </p>
              </div>
              <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 hidden w-[min(20rem,90vw)] -translate-x-1/2 opacity-0 transition duration-200 ease-out group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:translate-y-1 group-focus-within:opacity-100 md:block md:left-16 md:translate-x-0">
                <div className="rounded-2xl border border-white/60 bg-white/90 px-4 py-3 text-xs leading-relaxed text-ink-700 shadow-lg shadow-ink-900/10 backdrop-blur">
                  Neelkanth Business Park, A-704, Vidyavihar station skywalk,
                  Sadguru Nagar, Neelkanth Kingdom, Vidyavihar West, Vidyavihar,
                  Mumbai, Maharashtra 400086
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <GlowCard className="rounded-[28px] bg-white/95 p-6 shadow-xl shadow-ink-900/10 sm:p-8">
              <form
                action={`https://formsubmit.co/${company.email}`}
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Enquiry from MICEkart website"
                />
                <input type="hidden" name="_captcha" value="false" />

                {[
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
                ].map((field, index) => (
                  <motion.label
                    key={field.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + index * 0.04 }}
                    className="flex items-center gap-3 border-b border-ink-200 pb-3"
                  >
                    <span className="text-ink-400">
                      <field.Icon size={18} />
                    </span>
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="w-full border-none bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400"
                    />
                  </motion.label>
                ))}

                <motion.label
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 }}
                  className="flex items-start gap-3 border-b border-ink-200 pb-3"
                >
                  <span className="pt-1 text-ink-400">
                    <Quote size={18} />
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we help you? Feel free to get in touch!"
                    className="w-full resize-none border-none bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400"
                  />
                </motion.label>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.34 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full rounded-full"
                >
                  Submit Query
                </motion.button>
              </form>
            </GlowCard>

            <a
              href="https://maps.app.goo.gl/up9ZcW8259ASDguHA"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-semibold tracking-wide text-ink-900"
            >
              MICE KART - Corporate Travel & Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
