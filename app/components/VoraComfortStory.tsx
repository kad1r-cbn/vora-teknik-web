"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Önce sizi dinleriz.",
    text: "Kombinizin sesi mi değişti, klimanız eskisi gibi soğutmuyor mu? Cihazınızı ve yaşadığınız sorunu birlikte değerlendiririz.",
    detail: "İhtiyaca göre değerlendirme",
    image: "/images/hizmet-kombi.webp",
    alt: "Duvara monte kombi ve düzenli tesisat bağlantıları",
  },
  {
    number: "02",
    title: "Her adım net olsun.",
    text: "Servis kapsamını, uygun randevuyu ve işlem koşullarını sizinle konuşuruz. Yapılacak işlem hakkında bilgi sahibi olarak karar verirsiniz.",
    detail: "İşlem öncesi bilgilendirme",
    image: "/images/hizmet-klima.webp",
    alt: "Konforlu bir yaşam alanında klima sistemi",
  },
  {
    number: "03",
    title: "Konfor yerine gelsin.",
    text: "Bakım, arıza tespiti veya temizlik; ihtiyacınıza uygun işlemi planlarız. Amacımız, evinizin günlük düzenine özen gösteren bir servis deneyimi.",
    detail: "Özenli teknik servis",
    image: "/images/hizmet-petek.webp",
    alt: "Aydınlık bir odada temiz panel radyatör",
  },
];

function StoryStep({
  index,
  active,
  onActive,
}: {
  index: number;
  active: boolean;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6, margin: "-15% 0px -15% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  const step = steps[index];
  return (
    <div ref={ref} className={`comfort-step ${active ? "is-active" : ""}`}>
      <span className="comfort-step-number">{step.number}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <span className="comfort-step-detail">
          <Check size={15} />
          {step.detail}
        </span>
      </div>
    </div>
  );
}

export default function VoraComfortStory() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const onActive = useCallback((index: number) => setActive(index), []);
  return (
    <section
      className="vora-comfort"
      id="servis-sureci"
      aria-labelledby="comfort-heading"
    >
      <div className="vora-container">
        <div className="comfort-heading">
          <span className="eyebrow">02 / VORA YAKLAŞIMI</span>
          <h2 id="comfort-heading">
            İşini iyi yapan servis.
            <br />
            <em>İçiniz rahat etsin.</em>
          </h2>
          <p>
            Sadece cihazlarla değil,
            <br />
            evinizin konforuyla ilgileniyoruz.
          </p>
        </div>
        <div className="comfort-layout">
          <div className="comfort-visual">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={active}
                className="comfort-image"
                initial={{ opacity: reduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: reduceMotion ? 1 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.5 }}
              >
                <Image
                  src={steps[active].image}
                  alt={steps[active].alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 45vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="comfort-image-caption">
              <span>DAHA İYİ BİR SERVİS DENEYİMİ</span>
              <span>0{active + 1} / 03</span>
            </div>
            <div className="comfort-progress" aria-hidden="true">
              {steps.map((step, index) => (
                <span
                  className={active === index ? "is-active" : ""}
                  key={step.number}
                />
              ))}
            </div>
          </div>
          <div className="comfort-steps">
            {steps.map((step, index) => (
              <StoryStep
                key={step.number}
                index={index}
                active={active === index}
                onActive={onActive}
              />
            ))}
            <a href="#servis-talebi" className="vora-text-link">
              Tanışalım, talebinizi dinleyelim <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
