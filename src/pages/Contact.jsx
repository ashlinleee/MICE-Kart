import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  Instagram,
  Facebook,
  Linkedin,
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

const contactHighlights = [
  {
    icon: Phone,
    title: "Direct contact",
    desc: company.phone,
  },
  {
    icon: Clock3,
    title: "Quick response",
    desc: "Usually replies within one business day.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate support",
    desc: "Travel, events, and vendor coordination in one place.",
  },
];

export default function Contact() {
  return (
    <div>
      <PageBanner
        image={images.heroContact}
        title="Contact Us"
        subtitle="Plan your next corporate travel program or event with our Mumbai team."
      />

      <section className="relative section-pad bg-ink-50">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.14),transparent_70%)]" />
        <div className="page-container -mt-10 mb-8 grid gap-4 md:grid-cols-3">
          {contactHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                custom={index}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-2xl border border-white/70 bg-white/90 p-5 shadow-card backdrop-blur-sm transition will-change-transform"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-white shadow-lg shadow-blue-950/20 transition duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-950">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="page-container grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: company.phone,
                  href: `tel:${company.phoneTel}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: company.email,
                  href: `mailto:${company.email}`,
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: company.address,
                  href: null,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                const Tag = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    initial="hidden"
                    custom={i}
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <Tag
                      href={item.href || undefined}
                      className="group glass-card flex items-start gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white shadow-md shadow-blue-950/20 transition duration-300 group-hover:scale-110 group-hover:bg-blue-800">
                        <Icon size={22} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-ink-500">
                          {item.label}
                        </p>
                        <p className="mt-1 font-medium leading-relaxed text-ink-900">
                          {item.value}
                        </p>
                      </div>
                    </Tag>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {[
                {
                  href: company.social.instagram,
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: company.social.facebook,
                  Icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: company.social.linkedin,
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-700 transition duration-300 hover:-translate-y-1 hover:border-blue-900 hover:bg-blue-900 hover:text-white"
                  aria-label={label}
                >
                  <Icon
                    size={20}
                    className="transition duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            {/* Map moved to footer */}
          </div>

          <div className="space-y-6">
            <GlowCard>
              <h3 className="font-display text-2xl font-bold text-ink-950">
                Send an Enquiry
              </h3>
              <form
                action={`https://formsubmit.co/${company.email}`}
                method="POST"
                className="mt-8 space-y-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Enquiry from MICEkart website"
                />
                <input type="hidden" name="_captcha" value="false" />
                {[
                  { name: "name", type: "text", label: "Name" },
                  { name: "email", type: "email", label: "Email" },
                  { name: "phone", type: "tel", label: "Phone" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 }}
                  >
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-600">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 outline-none transition duration-300 focus:border-blue-900 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.12)]"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 outline-none transition duration-300 focus:border-blue-900 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.12)]"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-orange w-full shadow-lg shadow-orange-500/20"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
}
