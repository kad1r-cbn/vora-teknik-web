"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FocusEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { HERO_SLIDE_INTERVAL, heroSlides } from "../data/hero-slides";

export default function VoraHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reducedMotion = useReducedMotion();
  const slide = heroSlides[active];

  useEffect(() => {
    const updateVisibility = () => setHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || hidden || reducedMotion) return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % heroSlides.length),
      HERO_SLIDE_INTERVAL,
    );
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, hidden, reducedMotion]);

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  }

  function togglePlayback() {
    setPaused((value) => !value);
    setFocused(false);
    setHovered(false);
  }

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="slayt gösterisi"
      aria-label="Kombi, klima ve petek hizmetleri"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={handleBlur}
    >
      <div className="hero-photo-scene">
        {heroSlides.map((item, index) => (
          <div
            className={`hero-carousel-image ${index === active ? "is-active" : ""}`}
            key={item.image}
            aria-hidden={index !== active}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              preload={index === 0}
              sizes="(max-width: 760px) 100vw, 48vw"
              className="hero-photo"
              style={{ objectPosition: item.position }}
            />
          </div>
        ))}
        <div className="hero-photo-shade" />
      </div>
      <div className="hero-image-label">
        <span className="status-dot" />
        {slide.label}
      </div>
      <div className="hero-visual-bottom" aria-live="off">
        <div key={active} className="hero-slide-caption">
          <span>{slide.title}</span>
          <em>{slide.subtitle}</em>
        </div>
        <Link
          href={slide.href}
          className="hero-round-mark"
          aria-label={`${slide.label.toLocaleLowerCase("tr-TR")} hizmetini inceleyin`}
        >
          <ArrowUpRight size={30} strokeWidth={1.3} />
        </Link>
      </div>
      <div className="hero-carousel-controls">
        <div className="hero-slide-dots" aria-label="Görsel seçimi">
          {heroSlides.map((item, index) => (
            <button
              type="button"
              className="hero-slide-dot"
              aria-label={`${index + 1}. görsel: ${item.label.toLocaleLowerCase("tr-TR")}`}
              aria-pressed={active === index}
              key={item.image}
              onClick={() => {
                setActive(index);
                setPaused(true);
              }}
            >
              <span />
            </button>
          ))}
        </div>
        <span className="hero-slide-count" aria-hidden="true">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(heroSlides.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          className="hero-slide-toggle"
          onClick={togglePlayback}
          aria-pressed={paused}
          aria-label={
            paused
              ? "Otomatik görsel geçişini başlat"
              : "Otomatik görsel geçişini duraklat"
          }
        >
          {paused ? (
            <Play size={16} aria-hidden="true" className="pointer-events-none" />
          ) : (
            <Pause size={16} aria-hidden="true" className="pointer-events-none" />
          )}
        </button>
      </div>
    </div>
  );
}
