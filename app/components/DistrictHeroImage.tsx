"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  districtName: string;
};

/** Existing licensed photos are preserved; newly generated district scenes are identified. */
const originalDistrictPhotos = new Set([
  "/images/istanbul/uskudar.webp",
  "/images/istanbul/kadikoy.webp",
  "/images/istanbul/bakirkoy.webp",
  "/images/istanbul/besiktas.webp",
  "/images/istanbul/bagcilar.webp",
]);

export default function DistrictHeroImage({ src, districtName }: Props) {
  const [imageFailed, setImageFailed] = useState(false);
  const isGenerated = !originalDistrictPhotos.has(src);
  const imageSrc = imageFailed ? "/images/istanbul-hero.webp" : src;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#000d26]">
      {/* Fallback is always underneath the image, avoiding blank flashes. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 72% 28%, rgba(0,184,245,.2) 0%, transparent 70%), linear-gradient(135deg, #000d26 0%, #0c446a 52%, #000d26 100%)",
        }}
        aria-hidden="true"
      />

      <svg
        className="absolute inset-x-0 bottom-0 h-[65%] w-full text-[#0b2d52] opacity-80"
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYMax slice"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 290h80v-75h35v75h85V155h60v135h45V185h50v105h70V95h54v195h33v-135h57v135h92V197h52v93h92v-88h63v88h41V135h66v155h71v-64h71v64h39V177h55v113h76v-90h54v90h68V140h63v150h60v210H0Z" />
        <path d="M810 298v-78c0-60 45-103 105-107 60 4 105 47 105 107v78Z" />
        <path d="M905 116V40h20v76ZM795 299V74h13v225ZM1027 299V74h13v225Z" />
        <path d="M0 360q180-65 360 0t360 0 360 0 360 0v140H0Z" opacity=".75" />
      </svg>

      <span
        className="pointer-events-none absolute left-[6%] right-[6%] top-[27%] block max-w-full wrap-break-word text-[clamp(2.8rem,9vw,9rem)] font-black leading-none tracking-tight text-[#00d9ff]/15"
        aria-hidden="true"
      >
        {districtName.toLocaleUpperCase("tr-TR")}
      </span>

      {/* Telefonda fotografi uzun hero boyunca esnetme: ustte sinirli yukseklikte goster. */}
      <>
        <div className="absolute inset-x-0 top-0 h-102.5 overflow-hidden sm:h-127.5 lg:inset-0 lg:h-full">
          <Image
            src={imageSrc}
            alt={imageFailed ? "İstanbul Boğazı ve şehir manzarası" : isGenerated ? `${districtName} ilçesinden ilham alan yapay zekâ ile oluşturulmuş temsili manzara` : `${districtName} ilçe manzarası`}
            fill
            preload
            sizes="100vw"
            className="object-cover object-center lg:scale-[1.02]"
            onError={() => setImageFailed(true)}
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#000d26]/10 via-[#000d26]/25 to-[#000d26] lg:hidden" />
        </div>
        {isGenerated && !imageFailed && <span className="absolute right-4 top-4 z-20 max-w-48 rounded-md border border-white/20 bg-[#000d26]/85 px-3 py-2 text-[9px] leading-relaxed text-[#c4f5ff] backdrop-blur-sm sm:right-6 sm:top-6">Yapay zekâyla oluşturulmuş<br />temsili ilçe görseli</span>}
      </>
    </div>
  );
}
