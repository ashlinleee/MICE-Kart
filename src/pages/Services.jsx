import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import SafeImage from "../components/ui/SafeImage";
import { images, services } from "../data/siteContent";

const loopedServices = [...services, ...services, ...services];

export default function Services() {
  const scrollRef = useRef(null);
  const isAdjustingRef = useRef(false);

  const adjustLoop = () => {
    const container = scrollRef.current;
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
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      container.scrollLeft = maxScroll / 2;
    }
  }, []);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const delta = direction === "left" ? -360 : 360;
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
    window.setTimeout(adjustLoop, 350);
  };

  return (
    <div>
      <PageBanner
        image={images.heroProducts}
        title="Services"
        subtitle="Turnkey services and packages tailored for corporate travel and MICE programs."
      />

      <section className="relative overflow-hidden bg-ink-50 py-16 sm:py-20 lg:py-24">
        <div className="page-container">
          <div className="max-w-3xl">
            <SectionHeading
              label="What We Do"
              title="Services"
              subtitle="Turnkey services and packages tailored for corporate travel and MICE programs."
            />
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-ink-50 via-ink-50/90 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-ink-50 via-ink-50/90 to-transparent sm:w-24" />
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-ink-200 bg-white/90 p-2 text-ink-700 shadow-card transition hover:bg-white sm:left-4"
            aria-label="Scroll services left"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-ink-200 bg-white/90 p-2 text-ink-700 shadow-card transition hover:bg-white sm:right-4"
            aria-label="Scroll services right"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

          <div
            ref={scrollRef}
            onScroll={adjustLoop}
            className="flex items-stretch gap-6 overflow-x-auto px-4 pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex w-max items-stretch gap-6">
              {loopedServices.map((s, i) => (
                <motion.article
                  key={`${s.title}-${i}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotateX: 8, rotateY: -8, y: -10, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="perspective-1000 h-full w-[84vw] max-w-[340px] shrink-0 sm:max-w-none sm:w-[420px] lg:w-[460px]"
                >
                  <div className="group h-full overflow-hidden rounded-3xl border border-ink-200/80 bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover [transform-style:preserve-3d]">
                    <div className="relative min-h-[240px] overflow-hidden">
                      <SafeImage
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        Service
                      </span>
                    </div>
                    <div className="p-6 sm:p-7">
                      <h3 className="font-display text-xl font-bold text-ink-950">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-ink-600">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[420px] overflow-hidden py-24">
        <SafeImage
          src={images.heroContact}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="page-container relative z-10 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Need a custom package?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            We'll tailor scope, travel, venue and production to your goals.
          </p>
          <Link to="/contact" className="btn-orange mt-8 inline-flex">
            Request Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
