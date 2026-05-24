import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import SafeImage from "../components/ui/SafeImage";
import { Quote } from "../components/Icons";
import { ChevronLeft, ChevronRight } from "../components/Icons";
import { ArrowRight } from "../components/Icons";
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
        <PageBanner
          image={images.heroClients}
          title="Our Clients"
          subtitle="Trusted by leading enterprises across financial services and corporate India."
        />

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
                  className="w-[min(88vw,420px)] shrink-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950 via-blue-900 to-ink-950 p-6 shadow-card sm:p-8 lg:p-10"
                >
                  <div className="relative">
                    <Quote className="absolute -top-2 left-0 h-10 w-10 text-orange-300/40" />
                    <p className="pt-7 text-base leading-7 text-blue-50 sm:pt-8 sm:text-xl sm:leading-9">
                      {item.quote}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-white/12 ring-1 ring-white/15" />
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="text-sm text-blue-200">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden section-pad">
          <SafeImage
            src={images.conference}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="overlay-hero absolute inset-0" />
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-8 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl"
          />
          <div className="page-container relative z-10 text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Partner with MICEkart
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-blue-100">
              Corporate travel and events - Engineered for impact.
            </p>
            <Link
              to="/contact"
              className="btn-orange mt-8 inline-flex shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-orange-500/30"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
