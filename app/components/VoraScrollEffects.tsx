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

// VORA_CINEMATIC_CORPORATE_V3: mevcut Istanbul fotografinin yavas sinematik hareketi.
// Video, yeni gorsel veya ek animasyon kutuphanesi kullanilmaz.
// Hero metni, butonlar ve form sabit kalir. Reduced-motion'a saygi duyulur.
export function VoraHeroBackground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end start"],
  });
  const scrollLift = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const scrollZoom = useTransform(scrollYProgress, [0, 1], [1, 1.085]);

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#041126]"
    >
      {/* Mobilde yalnizca hafif ve yavas panorama. */}
      <motion.div
        className="absolute inset-x-[-9%] -top-10 h-[460px] sm:h-[540px] lg:hidden"
        animate={reduceMotion ? undefined : { x: ["-1%", "1.2%", "-1%"], scale: [1.035, 1.07, 1.035] }}
        transition={reduceMotion ? undefined : { duration: 32, ease: "easeInOut", repeat: Infinity }}
      >
        <Image
          src="/images/istanbul-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
      </motion.div>

      {/* Masaustunde scroll derinligi ve bagimsiz yavas kamera hareketi. */}
      <motion.div
        className="absolute inset-[-12%] hidden lg:block"
        style={reduceMotion ? undefined : { y: scrollLift, scale: scrollZoom }}
      >
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { x: ["-1.1%", "1.4%", "-1.1%"], scale: [1.035, 1.105, 1.035] }}
          transition={reduceMotion ? undefined : { duration: 38, ease: "easeInOut", repeat: Infinity }}
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
      </motion.div>

      {/* Fotografi gorunur birakirken baslik ve formun kontrastini korur. */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,12,32,0.57)_0%,rgba(2,12,32,0.70)_37%,rgba(2,12,32,0.96)_94%)] lg:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(2,11,29,0.91)_0%,rgba(2,13,32,0.72)_31%,rgba(2,13,32,0.38)_58%,rgba(2,13,32,0.70)_100%)] lg:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(2,12,32,0.05)_35%,rgba(2,12,32,0.85)_100%)] lg:block" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_73%_20%,rgba(10,173,215,0.11)_0%,transparent_48%)]" />
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
