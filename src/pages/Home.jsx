import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Plane,
  Users,
  ShieldCheck,
} from "../components/Icons";
import PageBanner, { BannerCTA } from "../components/PageBanner";
import heroPic from "/hero-image.png";
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
  const servicesScrollRef = useRef(null);
  const isAdjustingRef = useRef(false);
  const whyChoosePoints = [
    { icon: BadgeCheck, text: whyChooseUs[0] },
    { icon: Plane, text: whyChooseUs[1] },
    { icon: Users, text: whyChooseUs[2] },
    { icon: ShieldCheck, text: whyChooseUs[3] },
  ];

  const adjustServicesLoop = () => {
    const container = servicesScrollRef.current;
    if (!container || isAdjustingRef.current) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    const edge = 40;
    if (
      container.scrollLeft <= edge ||
      container.scrollLeft >= maxScroll - edge
    ) {
      isAdjustingRef.current = true;
      container.scrollLeft = maxScroll / 2;
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    }
  };

  useEffect(() => {
    if (!servicesScrollRef.current) return;
    const container = servicesScrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      container.scrollLeft = maxScroll / 2;
    }
  }, []);

  const handleServicesScroll = (direction) => {
    if (!servicesScrollRef.current) return;
    const delta = direction === "left" ? -320 : 320;
    servicesScrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
    window.setTimeout(adjustServicesLoop, 350);
  };

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
          image={heroPic}
          title={company.slogan}
          subtitle="Integrated corporate travel solutions and events across India and internationally."
          tall
        >
          <BannerCTA to="/contact" label="Plan Your Event" />
          <BannerCTA to="/services" label="Our Services" variant="outline" />
        </PageBanner>

        <Marquee />

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

        <section className="overflow-hidden backdrop-blur-sm">
          <GalleryMarquee
            images={collageImages.slice(0, 6)}
            className="rounded-none border-0 shadow-none"
          />
        </section>

        <section className="relative overflow-hidden py-10 sm:py-12 bg-ink-950/70 backdrop-blur-[1px]">
          <div className="page-container relative z-10">
            <SectionHeading
              label="Why Choose Us"
              title="Why Choose Us"
              light
              center
            />
            <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {whyChoosePoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={`${item.text}-${i}`}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <Icon
                      size={40}
                      className="text-orange-400"
                      strokeWidth={1.7}
                    />
                    <span className="mt-4 max-w-[18rem] text-lg font-semibold leading-8 text-blue-50">
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section-pad !pt-0 !pb-12 sm:!pb-14 bg-ink-950/55 backdrop-blur-[1px]">
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
                  extraSpins={s.extraSpins ?? 0}
                  className="text-white"
                />
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-200">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-8 sm:py-20 bg-white/80 backdrop-blur-sm">
          <div className="page-container">
            <SectionHeading
              label="What We Do"
              title="Our Services"
              subtitle="End-to-end MICE, corporate travel and event solutions to make every business trip and gathering seamless and impactful."
              center
            />
          </div>
          <div className="relative mt-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-24" />

            <button
              type="button"
              onClick={() => handleServicesScroll("left")}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-ink-200 bg-white/90 p-2 text-ink-700 shadow-card transition hover:bg-white sm:left-4"
              aria-label="Scroll services left"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => handleServicesScroll("right")}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-ink-200 bg-white/90 p-2 text-ink-700 shadow-card transition hover:bg-white sm:right-4"
              aria-label="Scroll services right"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>

            <div
              ref={servicesScrollRef}
              onScroll={adjustServicesLoop}
              className="flex items-stretch gap-4 overflow-x-auto px-4 pb-4 scroll-smooth sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max items-stretch gap-4">
                {[...services, ...services, ...services].map((s, i) => (
                  <div
                    key={`${s.title}-${i}`}
                    custom={i}
                    variants={fadeUp}
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
                          loading="eager"
                          decoding="sync"
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
                  </div>
                ))}
              </div>
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
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
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
