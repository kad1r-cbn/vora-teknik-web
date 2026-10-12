"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  districtName: string;
};

/**
 * Displays the district photograph when available.
 * If the image is missing, replaces it with an illustrated Istanbul backdrop
 * rather than leaving a broken or empty hero section.
 */
export default function DistrictHeroImage({ src, districtName }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#081a2b]">
      {/* Fallback is always underneath the image, avoiding blank flashes. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 72% 28%, rgba(8,145,178,.36) 0%, transparent 70%), linear-gradient(135deg, #071726 0%, #104563 52%, #071726 100%)",
        }}
        aria-hidden="true"
      />

      <svg
        className="absolute inset-x-0 bottom-0 h-[65%] w-full text-[#09283e] opacity-80"
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
        className="pointer-events-none absolute left-[6%] right-[6%] top-[27%] block max-w-full wrap-break-word text-[clamp(2.8rem,9vw,9rem)] font-black leading-none tracking-tight text-cyan-100/15"
        aria-hidden="true"
      >
        {districtName.toLocaleUpperCase("tr-TR")}
      </span>

      {!imageFailed && (
        <Image
          src={src}
          alt={`${districtName} ilçe manzarası`}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
}
