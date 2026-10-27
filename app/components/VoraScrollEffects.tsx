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
};

/** Initial HTML stays visible and usable without JavaScript. */
export function VoraReveal({
  children,
  className = "",
  delay = 0,
}: VoraRevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: [0.3, 1], y: [24, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
