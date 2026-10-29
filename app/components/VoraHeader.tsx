"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

type Active =
  | "home"
  | "kombi"
  | "klima"
  | "petek"
  | "bolgeler"
  | "ilce"
  | "blog";

const links = [
  { href: "/kombi-servisi", label: "Kombi servisi", active: "kombi" },
  { href: "/klima-servisi", label: "Klima servisi", active: "klima" },
  { href: "/petek-temizligi", label: "Petek temizliği", active: "petek" },
  { href: "/hizmet-bolgeleri", label: "Hizmet bölgeleri", active: "bolgeler" },
  { href: "/blog", label: "Blog", active: "blog" },
] as const;

export default function VoraHeader({ active }: { active: Active }) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const frame = requestAnimationFrame(() => {
      menuRef.current
        ?.querySelector<HTMLAnchorElement>("a")
        ?.focus({ preventScroll: true });
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutsidePointer = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutsidePointer);
    desktop.addEventListener("change", onResize);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutsidePointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-100 w-full border-b border-white/10 bg-[#000d26]/97 text-[#f6faff] backdrop-blur-xl"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="flex h-[76px] items-center justify-between gap-6 xl:h-[88px]">
          <Link
            href="/"
            aria-label="Vora Teknik, ana sayfa"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-[#00d9ff]"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/vora-logo-header.webp"
              alt="Vora Kombi Klima Teknik Servis"
              width={900}
              height={409}
              sizes="(max-width: 639px) 128px, 154px"
              className="vora-nav-logo h-[58px] w-[128px] object-contain brightness-[0.88] saturate-[0.9] xl:h-[70px] xl:w-[154px]"
            />
          </Link>

          <nav
            aria-label="Ana menü"
            className="hidden items-center gap-5 xl:flex xl:gap-8"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active === item.active ? "page" : undefined}
                className={`group relative py-3 text-[13px] font-medium transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff] ${active === item.active ? "text-[#00d9ff]" : "text-white/75 hover:text-white"}`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute right-0 bottom-1 left-0 h-px origin-left bg-[#00d9ff] transition-transform duration-300 motion-reduce:transition-none ${active === item.active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href="tel:+905365281116"
              aria-label="Vora Teknik'i ara: 0536 528 11 16"
              className="group inline-flex size-11 items-center justify-center gap-2.5 rounded-full bg-[#00d9ff] text-[13px] font-semibold text-[#000d26] transition-colors hover:bg-[#8aefff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff] sm:min-h-12 sm:w-auto sm:px-5"
            >
              <Phone size={15} strokeWidth={1.7} aria-hidden="true" />
              <span className="hidden sm:inline">0536 528 11 16</span>
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="hidden transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none xl:block"
              />
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-controls="vora-mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff] xl:hidden"
            >
              {isOpen ? (
                <X size={21} aria-hidden="true" />
              ) : (
                <Menu size={21} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav
          ref={menuRef}
          id="vora-mobile-menu"
          aria-label="Mobil menü"
          hidden={!isOpen}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-y border-white/15 bg-[#000d26] px-5 pb-6 shadow-xl sm:px-8 xl:hidden"
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            aria-current={active === "home" ? "page" : undefined}
            className="flex min-h-12 items-center justify-between border-b border-white/15 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d9ff]"
          >
            Ana sayfa <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              aria-current={active === item.active ? "page" : undefined}
              className="flex min-h-12 items-center justify-between border-b border-white/15 py-3 text-sm font-medium transition-colors hover:text-[#00d9ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d9ff]"
            >
              {item.label} <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          ))}
          <Link
            href="/#servis-talebi"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-[#00d9ff] px-4 text-sm font-semibold text-[#000d26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]"
          >
            Servis talebi oluştur <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <p className="mt-4 text-xs text-white/65">
            İstanbul genelinde servis planlaması.
          </p>
        </nav>
      </div>
    </header>
  );
}
