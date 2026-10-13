"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

type Active = "home" | "kombi" | "klima" | "petek" | "bolgeler" | "ilce";

const links = [
  { href: "/", text: "Ana Sayfa", mobile: "Ana Sayfa", active: "home" },
  { href: "/kombi-servisi", text: "Kombi Servisi", mobile: "🔥 Kombi Servisi", active: "kombi" },
  { href: "/klima-servisi", text: "Klima Servisi", mobile: "❄️ Klima Servisi", active: "klima" },
  { href: "/petek-temizligi", text: "Petek Temizliği", mobile: "💧 Petek Temizliği", active: "petek" },
  { href: "/hizmet-bolgeleri", text: "Hizmet Bölgelerimiz", mobile: "📍 Hizmet Bölgelerimiz", active: "bolgeler" },
  { href: "/#servis-talebi", text: "İletişim", mobile: "📞 İletişim", active: "iletisim" },
];

export default function VoraHeader({ active }: { active: Active }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 w-full border-b border-cyan-400/10 bg-vora-bg/95 text-white backdrop-blur-lg">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-3.5 sm:px-7 xl:px-8 2xl:px-12">
        <div className="flex min-h-11 items-center justify-between gap-3">
          <Link href="/" className="shrink-0 whitespace-nowrap text-[22px] font-extrabold tracking-tight text-white 2xl:text-[27px]" aria-label="Vora Teknik Servis ana sayfa">
            VORA <span className="text-vora-cyan">TEKNİK</span>
          </Link>

          <nav aria-label="Ana menü" className="hidden min-w-0 items-center gap-0.5 xl:flex">
            {links.map((item) => {
              const selected = active === item.active;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={selected ? "page" : undefined}
                  className={`whitespace-nowrap rounded-lg px-2.5 py-2.5 text-[13px] font-semibold transition-colors 2xl:px-3 2xl:text-sm ${selected ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}
                >
                  {item.text}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <div className="hidden flex-col gap-0.5 2xl:flex">
              <a href="tel:+905365281116" className="text-xs font-semibold text-slate-200 transition hover:text-vora-cyan">0536 528 11 16</a>
              <a href="tel:+905388188236" className="text-xs font-semibold text-slate-200 transition hover:text-vora-cyan">0538 818 82 36</a>
            </div>
            <a href="tel:+905365281116" aria-label="0536 528 11 16 numarasını ara" className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-xl bg-vora-cyan px-4 py-2.5 text-sm font-extrabold text-vora-bg transition hover:bg-cyan-200">
              <Phone size={17} /> Hemen Ara
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a href="tel:+905365281116" aria-label="0536 528 11 16 numarasını ara" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vora-cyan text-vora-bg">
              <Phone size={19} />
            </a>
            <button
              type="button"
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-controls="vora-mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-white"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav id="vora-mobile-menu" aria-label="Mobil menü" className="mt-4 border-t border-slate-700/70 pt-3 xl:hidden">
            <div className="flex flex-col gap-1">
              {links.map((item) => {
                const selected = active === item.active;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={selected ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${selected ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}
                  >
                    {item.mobile}
                  </Link>
                );
              })}
            </div>
            <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-wider text-cyan-200">7/24 Telefon Hatlarımız</p>
            <div className="grid gap-2 p-2 sm:grid-cols-2">
              <a href="tel:+905365281116" className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-vora-cyan px-3 py-3 text-sm font-bold text-vora-bg"><Phone size={17} /> 0536 528 11 16</a>
              <a href="tel:+905388188236" className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-slate-800 px-3 py-3 text-sm font-bold text-white"><Phone size={17} /> 0538 818 82 36</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
