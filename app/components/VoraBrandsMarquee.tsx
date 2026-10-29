"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { serviceBrands } from "../data/brands";
import styles from "./VoraBrandsMarquee.module.css";

export default function VoraBrandsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="markalar"
      className={styles.section}
      aria-labelledby="markalar-baslik"
      data-paused={paused}
    >
      <div className={`vora-container ${styles.heading}`}>
        <div>
          <p className="eyebrow">TANIDIĞINIZ MARKALAR</p>
          <h2 id="markalar-baslik">
            Marka değişir. <em>Özenimiz değişmez.</em>
          </h2>
        </div>
        <div className={styles.actions}>
          <Link href="/#servis-talebi" className={styles.link}>
            Cihazınız için bize danışın{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className={styles.pauseControl}
            aria-label={
              paused ? "Marka akışını sürdür" : "Marka akışını durdur"
            }
            aria-pressed={paused}
            aria-controls="vora-markalar-seridi"
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <Play size={16} aria-hidden="true" />
            ) : (
              <Pause size={16} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="vora-markalar-seridi"
        className={styles.viewport}
        tabIndex={0}
        aria-label={`Servis talepleri değerlendirilen ${serviceBrands.length} marka`}
      >
        <div className={styles.track}>
          {[false, true].map((duplicate) => (
            <ul
              className={styles.cluster}
              key={duplicate ? "duplicate" : "brands"}
              aria-hidden={duplicate}
            >
              {serviceBrands.map((brand) => (
                <li
                  className={`${styles.wordmark} ${styles[brand.style]}`}
                  key={brand.name}
                >
                  {brand.wordmark}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <p className={`vora-container ${styles.note}`}>
        Kombi, klima ve petek sistemleri için marka ve modele göre özel servis
        talepleri değerlendirilir. Marka adları ilgili üreticilere aittir;
        yetkili servislik veya üretici iş ortaklığı ifade etmez.
      </p>
    </section>
  );
}
