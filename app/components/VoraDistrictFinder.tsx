"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { istanbulIlceleri } from "../data/istanbul-ilceleri";

const featured = [
  "bahcelievler",
  "bakirkoy",
  "bagcilar",
  "gungoren",
  "kadikoy",
  "besiktas",
  "uskudar",
  "sisli",
];

export default function VoraDistrictFinder() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLocaleLowerCase("tr-TR");
  const districts = istanbulIlceleri.filter((district) =>
    needle
      ? district.name.toLocaleLowerCase("tr-TR").includes(needle)
      : featured.includes(district.slug),
  );
  return (
    <div className="district-finder">
      <label className="district-search">
        <Search size={19} aria-hidden="true" />
        <span className="sr-only">İlçenizi arayın</span>
        <input
          type="search"
          placeholder="İlçenizi arayın…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <div className="district-grid">
        {districts.map((district) => (
          <Link href={`/istanbul/${district.slug}`} key={district.slug}>
            {district.name}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <p className="district-result" aria-live="polite">
        {needle
          ? districts.length
            ? `${districts.length} hizmet bölgesi bulundu.`
            : "İlçenizi bulamadıysanız servis kapsamını telefonla sorabilirsiniz."
          : "İlçeniz için servis kapsamını ve randevu durumunu birlikte netleştirelim."}
      </p>
    </div>
  );
}
