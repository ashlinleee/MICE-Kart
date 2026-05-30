import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SafeImage from "./ui/SafeImage";

export default function PageBanner({
  image,
  title,
  subtitle,
  children,
  tall = false,
  center = false,
  galleryImages = [],
}) {
  const hasGallery = galleryImages.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);

  const displayGallery = useMemo(() => {
    if (!hasGallery) return [];
    return [
      galleryImages[
        (activeIndex - 2 + galleryImages.length) % galleryImages.length
      ],
      galleryImages[
        (activeIndex - 1 + galleryImages.length) % galleryImages.length
      ],
      galleryImages[activeIndex % galleryImages.length],
      galleryImages[(activeIndex + 1) % galleryImages.length],
      galleryImages[(activeIndex + 2) % galleryImages.length],
    ];
  }, [activeIndex, galleryImages, hasGallery]);

  useEffect(() => {
    if (!hasGallery) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [hasGallery, galleryImages.length]);

  const renderGalleryCard = (imageSrc, offset) => {
    const isActive = offset === 2;
    const distance = Math.abs(offset - 2);
    const scale = distance === 0 ? 1.08 : distance === 1 ? 0.94 : 0.8;
    const translateX = (offset - 2) * 102;
    const opacity = distance === 0 ? 1 : distance === 1 ? 0.9 : 0.65;

    return (
      <motion.div
        key={`${imageSrc}-${offset}`}
        className="absolute top-1/2 overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.28)] backdrop-blur-xl"
        animate={{
          x: translateX,
          y: "-50%",
          scale,
          opacity,
          zIndex: isActive ? 30 : 20 - distance,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        style={{ left: "50%", width: 164, height: 260 }}
      >
        <SafeImage
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover"
        />
        {isActive && <div className="absolute inset-0 ring-2 ring-white/45" />}
      </motion.div>
    );
  };

  return (
    <section
      className={`relative flex items-end overflow-hidden bg-blue-950 ${
        tall
          ? "min-h-[48vh] sm:min-h-[54vh] lg:min-h-[62vh]"
          : "min-h-[36vh] sm:min-h-[42vh] lg:min-h-[48vh]"
      }`}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <SafeImage src={image} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="overlay-hero absolute inset-0" />
      <div className="absolute inset-0 bg-blue-950/20" />

      <div
        className={
          center
            ? "page-container relative z-10 w-full flex min-h-full items-center justify-center text-center"
            : hasGallery
              ? "page-container relative z-10 grid w-full gap-10 pb-6 pt-12 sm:pb-10 sm:pt-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:items-center lg:gap-14 lg:pt-20"
              : "page-container relative z-10 w-full pb-6 pt-12 sm:pb-10 sm:pt-16 lg:pt-20"
        }
      >
        <div className={hasGallery && !center ? "max-w-3xl" : ""}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={
              center
                ? "max-w-[80%] font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
                : "max-w-[36rem] font-display text-3xl font-bold leading-[1.08] text-white sm:max-w-4xl sm:text-5xl lg:text-6xl"
            }
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-xl text-base text-blue-100 sm:mt-5 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {children}
            </motion.div>
          )}
        </div>

        {hasGallery && !center && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="relative hidden h-[390px] w-full lg:block"
          >
            <div className="absolute inset-0 rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.01)_100%)] shadow-[0_25px_80px_rgba(8,15,31,0.35)] backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="relative h-[300px] w-[100%] max-w-[560px] overflow-hidden">
                {displayGallery.map((imageSrc, offset) =>
                  renderGalleryCard(imageSrc, offset),
                )}
              </div>
            </div>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() =>
                setActiveIndex(
                  (current) =>
                    (current - 1 + galleryImages.length) % galleryImages.length,
                )
              }
              className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md lg:flex"
            >
              <span className="text-2xl leading-none">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() =>
                setActiveIndex(
                  (current) => (current + 1) % galleryImages.length,
                )
              }
              className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md lg:flex"
            >
              <span className="text-2xl leading-none">›</span>
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={`banner-dot-${index}`}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-orange-500"
                      : "w-2.5 bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function BannerCTA({ to, label, variant = "orange" }) {
  const cls =
    variant === "outline"
      ? "btn-outline"
      : variant === "primary"
        ? "btn-primary"
        : "btn-orange";
  return (
    <Link to={to} className={cls}>
      {label}
    </Link>
  );
}
