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
import heroPic from "/hero-image.png";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/ui/Marquee";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import TestimonialCarousel from "../components/ui/TestimonialCarousel";
import SafeImage from "../components/ui/SafeImage";
import RotatingFadeImage from "../components/ui/RotatingFadeImage";
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
  clientLogos,
} from "../data/siteContent";

const homeSectionImages = Object.entries(
  import.meta.glob("/home_img/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([, src]) => src);

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
        <section className="relative overflow-hidden bg-[#071c4a] text-white">
          <div className="absolute inset-0">
            <SafeImage
              src={heroPic}
              alt=""
              className="h-full w-full object-cover opacity-100 blur-[1px] scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,37,84,0.88)_0%,rgba(10,10,10,0.75)_100%)]" />

          <div className="page-container relative z-10 flex min-h-[82vh] items-end pb-8 pt-28 sm:pb-12 sm:pt-32 lg:pb-12 lg:pt-36">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
                STRATEGY MEETS EXECUTION
              </div>
              <h1 className="max-w-[40ch] font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                <span className="block text-white">
                  Corporate Travel &amp; Events
                </span>
                <span className="block text-orange-500">
                  Engineered for Impact
                </span>
              </h1>
              <p className="mt-6 max-w-[36rem] text-base leading-7 text-blue-100">
                Delivering integrated corporate travel, meetings, conferences,
                and experiential solutions across India and around the world
                with precision and excellence.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-orange">
                  Plan Your Event
                </Link>
                <Link
                  to="/services"
                  className="btn-outline !border-blue-300/40 !bg-blue-500/10 !text-white hover:!-translate-y-0.5 hover:!border-blue-300 hover:!bg-blue-500/20"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Marquee />

        <section className="py-[50px] bg-white/75 backdrop-blur-sm">
          <div className="page-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="photo-frame group aspect-[4/3]"
            >
              <RotatingFadeImage
                images={
                  homeSectionImages.length
                    ? homeSectionImages
                    : [images.heroAbout]
                }
                alt="MICEkart corporate events"
                className="h-full w-full"
                imageClassName="transition duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight text-black-700 lg:text-4xl">
                Integrated Corporate Travel &amp; Events
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-ink-600">
                {about.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link to="/about" className="btn-primary mt-8">
                About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="overflow-hidden backdrop-blur-sm">
          <div className="page-container mt-14">
            <SectionHeading
              label="Clients"
              title="Clients We Have Worked With"
              light
              center
            />
          </div>

          {/* Clients marquee (reused from Clients page) */}
          <div className="py-6">
            <div className="space-y-5">
              {[0, 1].map((rowIndex) => {
                const row =
                  rowIndex === 0
                    ? clientLogos.filter((_, i) => i % 2 === 0)
                    : clientLogos.filter((_, i) => i % 2 === 1);
                return (
                  <div
                    key={`home-client-row-${rowIndex}`}
                    className="relative overflow-hidden"
                  >
                    <div className="w-full overflow-hidden py-4">
                      <div
                        className="flex w-max items-center gap-4 px-6 animate-marquee"
                        style={{
                          animationDirection:
                            rowIndex === 0 ? "reverse" : undefined,
                          animationDuration: rowIndex === 0 ? "34s" : "42s",
                        }}
                      >
                        {[...row, ...row].map((client, index) => (
                          <div
                            key={`${client.name}-${index}`}
                            className="flex h-[90px] w-[180px] shrink-0 items-center justify-center rounded-3xl border border-orange-500 bg-white px-4 shadow-card sm:h-[110px] sm:w-[220px]"
                            title={client.name}
                          >
                            <img
                              src={client.src}
                              alt={client.name}
                              className="h-full w-full object-contain p-3"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="page-container text-center mt-6">
            <Link
              to="/clients"
              className="btn-primary inline-flex items-center gap-2"
            >
              See our clients <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden py-10 sm:py-12 mt-10 bg-ink-950/70 backdrop-blur-[1px]">
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
                      className="group block h-full overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-br from-blue-950 via-blue-900 to-ink-950 shadow-card transition hover:-translate-y-1 hover:border-orange-300/70 hover:shadow-[0_20px_48px_rgba(249,115,22,0.22)]"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <SafeImage
                          src={s.image}
                          alt={s.title}
                          loading="eager"
                          decoding="sync"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-orange-200">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-blue-100/90">
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
