"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// Ana sayfadaki ilerleme cubugu (GPU dostu scaleX animasyonu).
export function VoraScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-150 h-0.75 origin-left bg-vora-cyan shadow-[0_0_14px_rgba(0,217,255,0.5)]"
      style={{ scaleX }}
    />
  );
}

// Sadece gorseli kaydir: metin ve form sabit kalir, LCP icin next/image priority kullanilir.


export function VoraHeroBackground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "2%"]
  );

  const parallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.02]
  );

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-vora-bg"
    >
      {/* MOBİL: Kontrollü yükseklikte İstanbul manzarası */}
      <div className="absolute inset-x-0 top-0 h-85 overflow-hidden sm:h-97.5 lg:hidden">
        <Image
          src="/images/istanbul-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />

        <div className="absolute inset-0 bg-linear-to-r from-vora-bg/65 via-vora-bg/35 to-vora-bg/15" />

        <div className="absolute inset-0 bg-linear-to-b from-vora-bg/20 via-vora-bg/40 to-vora-bg" />
      </div>

      {/* MASAÜSTÜ: Mevcut parallax görünümü */}
      <motion.div
        className="absolute inset-[-3%] hidden lg:block"
        style={
          reduceMotion
            ? undefined
            : {
                y: parallaxY,
                scale: parallaxScale,
              }
        }
      >
        <Image
          src="/images/istanbul-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_53%]"
        />
      </motion.div>

      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,13,38,0.90)_0%,rgba(0,13,38,0.72)_30%,rgba(0,13,38,0.25)_65%,rgba(0,13,38,0.12)_100%)] lg:block" />

      <div className="absolute inset-0 hidden bg-linear-to-t from-vora-bg/55 via-transparent to-vora-bg/10 lg:block" />
    </div>
  );
}


type VoraRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// Eleman viewport'a ilk girdiginde fade + hafif yukari hareket.
export function VoraReveal({ children, className = "", delay = 0 }: VoraRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -25px 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.62,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
