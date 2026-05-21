import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageBanner, { BannerCTA } from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/ui/Marquee";
import GalleryMarquee from "../components/ui/GalleryMarquee";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import TestimonialCarousel from "../components/ui/TestimonialCarousel";
import SafeImage from "../components/ui/SafeImage";
import {
  images,
  stats,
  services,
  serviceHighlights,
  company,
  about,
  whyChooseUs,
  collageImages,
  testimonials,
} from "../data/siteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <SafeImage
          src={images.hero}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/70" />
      </div>

      <div className="relative z-10">
        <PageBanner
          image={images.hero}
          title={company.slogan}
          subtitle="Integrated corporate travel solutions and events across India and internationally."
          tall
        >
          <BannerCTA to="/contact" label="Plan Your Event" />
          <BannerCTA to="/services" label="Our Services" variant="outline" />
        </PageBanner>

        <Marquee />

        <section className="overflow-hidden bg-white/80 py-10 backdrop-blur-sm sm:py-14 lg:py-16">
          <GalleryMarquee
            images={collageImages.slice(0, 6)}
            className="rounded-none border-x-0 border-y border-ink-200 bg-white/90 shadow-none"
          />
        </section>

        <section className="section-pad !py-12 sm:!py-14 bg-ink-950/55 backdrop-blur-[1px]">
          <div className="page-container grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm"
              >
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  animate={s.animate}
                  className="text-white"
                />
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-200">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-pad bg-white/75 backdrop-blur-sm">
          <div className="page-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="photo-frame"
            >
              <SafeImage
                src={images.heroAbout}
                alt="MICEkart corporate events"
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
            <div>
              <SectionHeading
                label="About MICEkart"
                title="Integrated Corporate Travel & Events"
                subtitle={about.intro[0]}
              />
              <p className="mt-4 text-ink-600 leading-relaxed">
                {about.intro[1]}
              </p>
              <Link to="/about" className="btn-primary mt-8">
                About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden section-pad bg-ink-950/70 backdrop-blur-[1px]">
          <div className="page-container relative z-10">
            <SectionHeading
              label="Why Choose Us"
              title="Why Choose MICEkart"
              light
              center
            />
            <ul className="mx-auto grid max-w-3xl gap-3">
              {whyChooseUs.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
                >
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />
                  <span className="text-blue-50">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-pad bg-white/80 backdrop-blur-sm">
          <div className="page-container">
            <SectionHeading
              label="What We Do"
              title="Services"
              subtitle="End-to-end MICE, corporate travel and event solutions to make every business trip and gathering seamless and impactful."
              center
            />
            <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none]">
              <div className="flex min-w-max gap-4">
                {services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-[82vw] max-w-[360px] shrink-0 snap-start sm:w-[420px]"
                  >
                    <Link
                      to="/services"
                      className="group block h-full overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <SafeImage
                          src={s.image}
                          alt={s.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                          Service
                        </span>
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="font-display text-xl font-bold text-ink-950">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-ink-600">
                          {s.desc}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Link to="/services" className="btn-primary">
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink-950/60 backdrop-blur-[1px]">
          <div className="page-container grid items-start gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:gap-14">
            <div>
              <SectionHeading
                label="Testimonials"
                title="What clients say"
                subtitle="A short rotation of client feedback, shown one testimonial at a time and updated softly on a five-second timer."
                light
              />
            </div>
            <TestimonialCarousel testimonials={testimonials} interval={5000} />
          </div>
        </section>

        <section className="relative min-h-[280px] overflow-hidden py-12 lg:py-16 bg-ink-950/70 backdrop-blur-[1px]">
          <div className="page-container relative z-10 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Let's plan your next corporate journey
            </h2>
            <p className="mt-4 text-blue-100">Speak with our team in Mumbai.</p>
            <Link to="/contact" className="btn-orange mt-8 inline-flex">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
