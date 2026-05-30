import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SafeImage from "../components/ui/SafeImage";
import { Quote } from "../components/Icons";
import { ChevronLeft, ChevronRight } from "../components/Icons";
import clientBanner from "../../Images/Banner_images/client_banner.png";
import { images, clientLogos, testimonials } from "../data/siteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Clients() {
  const testimonialsScrollRef = useRef(null);

  const scrollTestimonials = (direction) => {
    const container = testimonialsScrollRef.current;
    if (!container) return;

    const amount = Math.min(container.clientWidth * 0.8, 420);
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <SafeImage
          src={images.heroClients}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/70" />
      </div>

      <div className="relative z-10">
        <section className="relative overflow-hidden bg-[#071c4a] text-white">
          <div className="absolute inset-0">
            <SafeImage
              src={clientBanner}
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
                OUR CLIENTS
              </div>
              <h1 className="max-w-[40ch] font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                <span className="block text-white">
                  Driving Success Together
                </span>
                <span className="block text-orange-500">
                  Across Industries &amp; Experiences
                </span>
              </h1>
              <p className="mt-6 max-w-[36rem] text-base leading-7 text-blue-100">
                Trusted by businesses across multiple sectors, MICEkart creates
                seamless experiences through strategic planning, personalized
                solutions, and flawless execution that help organizations
                achieve their goals.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-orange">
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="page-container">
            <div className="mt-0 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center rounded-xl bg-white p-6 shadow-card transition hover:scale-105"
                  title={client.name}
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-20 w-full object-contain transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden section-pad bg-ink-950/60 backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="page-container relative z-10">
            <SectionHeading
              label="Testimonials"
              title="What clients say"
              light
              center
            />
          </div>

          <div className="relative z-10 mt-10 w-full pb-4">
            <button
              type="button"
              onClick={() => scrollTestimonials("left")}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-blue-950/80 text-orange-300 shadow-card backdrop-blur-sm transition hover:bg-blue-900"
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft size={22} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => scrollTestimonials("right")}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-blue-950/80 text-orange-300 shadow-card backdrop-blur-sm transition hover:bg-blue-900"
              aria-label="Scroll testimonials right"
            >
              <ChevronRight size={22} strokeWidth={1.8} />
            </button>

            <div
              ref={testimonialsScrollRef}
              className="flex w-full items-stretch gap-6 overflow-x-auto px-14 sm:px-16 lg:px-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="group w-[min(88vw,420px)] shrink-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950 via-blue-900 to-ink-950 p-6 shadow-card sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(249,115,22,0.12)] hover:ring-1 hover:ring-orange-300/20"
                >
                  <div className="relative">
                    <Quote className="absolute -top-2 left-0 h-10 w-10 text-orange-300/40 transition-colors group-hover:text-orange-300/75" />
                    <p className="pt-7 text-base leading-7 text-blue-50 sm:pt-8 sm:text-xl sm:leading-9">
                      {item.quote}
                    </p>
                    <div className="mt-8">
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-blue-200">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
