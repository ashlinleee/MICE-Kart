import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const cleanNumber = (raw) => {
  const digits = `${raw}`.replace(/\D/g, "");
  return Number.parseInt(digits || "0", 10);
};

const toDigits = (num, minLength = 1) => {
  const base = Math.max(minLength, `${num}`.length);
  return `${num}`.padStart(base, "0").split("").map(Number);
};

function RollingDigit({ digit, direction, order = 0, active, extraLoops = 0 }) {
  const [strip, setStrip] = useState([digit]);
  const [fromY, setFromY] = useState(0);
  const [toY, setToY] = useState(0);
  const [duration, setDuration] = useState(0.5);
  const previousRef = useRef(digit);
  const extraLoopUsedRef = useRef(false);

  useEffect(() => {
    const previous = previousRef.current;
    if (!active) {
      previousRef.current = digit;
      extraLoopUsedRef.current = false;
      setStrip([digit]);
      setFromY(0);
      setToY(0);
      return;
    }

    if (previous === digit && extraLoops === 0) {
      setStrip([digit]);
      setFromY(0);
      setToY(0);
      return;
    }

    const isAscending = direction >= 0;
    const stepCount = isAscending
      ? (digit - previous + 10) % 10
      : (previous - digit + 10) % 10;
    const usableExtraLoops = extraLoopUsedRef.current
      ? 0
      : Math.max(0, extraLoops);
    const totalSteps = stepCount + usableExtraLoops * 10;

    if (totalSteps === 0) {
      previousRef.current = digit;
      setStrip([digit]);
      setFromY(0);
      setToY(0);
      return;
    }

    const nextStrip = Array.from({ length: totalSteps + 1 }, (_, index) => {
      if (isAscending) return (previous + index) % 10;
      return (digit + index) % 10;
    });

    setStrip(nextStrip);

    const travel = (totalSteps / (totalSteps + 1)) * 100;
    if (isAscending) {
      setFromY(0);
      setToY(-travel);
    } else {
      setFromY(-travel);
      setToY(0);
    }

    // Keep each digit transition brief so counters can settle quickly.
    setDuration(Math.min(0.28, 0.14 + totalSteps * 0.012));
    previousRef.current = digit;
    extraLoopUsedRef.current = true;
  }, [active, digit, direction, extraLoops]);

  return (
    <span className="relative inline-block h-[1.45em] w-[0.9em] overflow-hidden rounded-[0.28em] border border-orange-200/35 bg-gradient-to-b from-orange-300/45 via-orange-400/20 to-orange-950/18 shadow-[inset_0_1px_0_rgba(255,240,220,0.55),inset_0_-12px_18px_rgba(120,53,15,0.26),0_10px_22px_rgba(14,23,48,0.34)] backdrop-blur-xl sm:h-[1.5em] sm:w-[0.95em]">
      <span className="pointer-events-none absolute inset-x-[10%] top-[10%] h-[1px] rounded-full bg-orange-100/55" />
      <span className="pointer-events-none absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-slate-900/25" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-orange-100/25 to-transparent" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange-950/24 to-transparent" />

      <motion.span
        key={`${digit}-${strip.join("")}`}
        initial={{ y: `${fromY}%`, rotateX: direction >= 0 ? -7 : 7 }}
        animate={{ y: `${toY}%`, rotateX: 0 }}
        transition={{
          duration,
          delay: order * 0.04,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-[1] block"
      >
        {strip.map((n, idx) => (
          <span
            key={`${n}-${idx}`}
            className="flex h-[1.45em] items-center justify-center font-display text-[0.95em] font-bold leading-none tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] sm:h-[1.5em]"
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function AnimatedCounter({
  value,
  suffix = "",
  className = "",
  animate: shouldAnimate = true,
  extraSpins = 0,
}) {
  const targetNumber = useMemo(() => cleanNumber(value), [value]);
  const [started, setStarted] = useState(!shouldAnimate);
  const [digitCount, setDigitCount] = useState(() => `${targetNumber}`.length);
  const [currentNumber, setCurrentNumber] = useState(() =>
    shouldAnimate ? 0 : targetNumber,
  );
  const [displayDigits, setDisplayDigits] = useState(() =>
    toDigits(shouldAnimate ? 0 : targetNumber, `${targetNumber}`.length),
  );
  const [digitDirections, setDigitDirections] = useState(() =>
    toDigits(0, `${targetNumber}`.length).map((_, idx) =>
      idx % 2 === 0 ? 1 : -1,
    ),
  );
  const ref = useRef(null);
  const previousDisplayNumberRef = useRef(shouldAnimate ? 0 : targetNumber);
  const animationFromRef = useRef(shouldAnimate ? 0 : targetNumber);

  useEffect(() => {
    setDigitCount((current) => Math.max(current, `${targetNumber}`.length));
  }, [targetNumber]);

  useEffect(() => {
    if (!shouldAnimate) {
      setStarted(true);
      setCurrentNumber(targetNumber);
      setDisplayDigits(toDigits(targetNumber, digitCount));
      setDigitDirections(
        toDigits(targetNumber, digitCount).map((_, idx) =>
          idx % 2 === 0 ? 1 : -1,
        ),
      );
      previousDisplayNumberRef.current = targetNumber;
      animationFromRef.current = targetNumber;
      return;
    }

    // If the element is already in the viewport on mount, start immediately.
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setStarted(true);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [digitCount, shouldAnimate, targetNumber]);

  useEffect(() => {
    if (!shouldAnimate) return;
    if (!started) return;

    const from = animationFromRef.current;
    const to = targetNumber;
    if (from === to) return;

    let rafId = 0;
    let startTime = 0;
    const distance = Math.abs(to - from);
    const maxTotalMs = 2000;
    const settleBudgetMs = 450;
    const countDurationCapMs = maxTotalMs - settleBudgetMs;
    const duration = Math.min(countDurationCapMs, 700 + distance * 2);
    const visualSteps = Math.max(8, Math.min(18, Math.round(distance / 130)));

    const easeOutCubic = (t) => 1 - (1 - t) ** 3;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const stepped =
        progress < 1 ? Math.round(eased * visualSteps) / visualSteps : 1;
      const nextValue = Math.round(from + (to - from) * stepped);

      setCurrentNumber((prev) => (prev === nextValue ? prev : nextValue));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        animationFromRef.current = to;
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [shouldAnimate, started, targetNumber]);

  useEffect(() => {
    const nextDigits = toDigits(currentNumber, digitCount);
    const previousDigits = toDigits(
      previousDisplayNumberRef.current,
      digitCount,
    );

    setDigitDirections(
      nextDigits.map((nextDigit, index) => {
        const prevDigit = previousDigits[index] ?? 0;
        const upSteps = (nextDigit - prevDigit + 10) % 10;
        const downSteps = (prevDigit - nextDigit + 10) % 10;
        const shortestDirection = upSteps <= downSteps ? 1 : -1;
        return index % 2 === 0 ? shortestDirection : -shortestDirection;
      }),
    );
    setDisplayDigits(nextDigits);
    previousDisplayNumberRef.current = currentNumber;
  }, [currentNumber, digitCount]);

  if (!shouldAnimate) {
    return (
      <span
        className={`font-display text-3xl font-bold text-white sm:text-4xl ${className}`}
      >
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`inline-flex items-end gap-[0.12em] font-display text-3xl font-bold text-white sm:gap-[0.16em] sm:text-4xl ${className}`}
      aria-label={`${targetNumber}${suffix}`}
    >
      {displayDigits.map((digit, index) => (
        <RollingDigit
          key={`digit-${index}`}
          digit={digit}
          direction={digitDirections[index] ?? 1}
          order={index}
          active={started}
          extraLoops={extraSpins}
        />
      ))}
      {suffix ? (
        <span className="ml-[0.12em] text-[0.82em] text-white/90">
          {suffix}
        </span>
      ) : null}
    </span>
  );
}
