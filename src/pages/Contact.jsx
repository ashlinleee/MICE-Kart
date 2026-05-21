import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import GlowCard from "../components/ui/GlowCard";
import SafeImage from "../components/ui/SafeImage";
import { images, company } from "../data/siteContent";

export default function Contact() {
  return (
    <div>
      <PageBanner
        image={images.heroContact}
        title="Contact Us"
        subtitle="Plan your next corporate travel program or event with our Mumbai team."
      />

      <section className="section-pad bg-ink-50">
        <div className="page-container grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-6">
            <SectionHeading label="Reach Us" title="Get in Touch" />
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
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Tag
                      href={item.href || undefined}
                      className="glass-card flex items-start gap-4 p-5 transition hover:shadow-card-hover"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
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
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-700 transition hover:border-blue-900 hover:bg-blue-900 hover:text-white"
                  aria-label={label}
                >
                  <Icon size={20} />
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
                  <div key={field.name}>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-600">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <button type="submit" className="btn-orange w-full">
                  Submit Enquiry
                </button>
              </form>
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
}
