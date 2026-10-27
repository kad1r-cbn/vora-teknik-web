"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export function VoraScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
  });
  if (reduceMotion) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="vora-scroll-progress"
      style={{ scaleX }}
    />
  );
}

export function VoraHeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 65]);
  return (
    <div ref={ref} className="hero-photo-scene">
      <motion.div
        className="hero-photo-parallax"
        style={reduceMotion ? undefined : { y }}
      >
        <Image
          src="/images/hizmet-klima.webp"
          alt="Güneş alan bir salonda duvara monte klima ve konforlu yaşam alanı"
          fill
          preload
          sizes="(max-width: 760px) 100vw, 48vw"
          className="hero-photo"
        />
      </motion.div>
      <div className="hero-photo-shade" />
    </div>
  );
}

type VoraRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "fade" | "scale";
};

/** Initial HTML stays visible and usable without JavaScript. */
export function VoraReveal({
  children,
  className = "",
  delay = 0,
  variant = "rise",
}: VoraRevealProps) {
  const reduceMotion = useReducedMotion();
  const reveal = {
    rise: { opacity: [0.35, 1], y: [24, 0] },
    fade: { opacity: [0.25, 1] },
    scale: { opacity: [0.4, 1], scale: [0.97, 1] },
  }[variant];
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : reveal}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
