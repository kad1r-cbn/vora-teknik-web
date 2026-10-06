
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  MapPin,
  Wind,
  Wrench,
  Clock,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Settings,
  Snowflake,
  Menu,
  X,
} from 'lucide-react';
import { istanbulIlceleri } from "../../data/istanbul-ilceleri";


type Props = {
  params: Promise<{
    ilce: string;
  }>;
};

export function generateStaticParams() {
  return istanbulIlceleri.map((ilce) => ({
    ilce: ilce.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { ilce: slug } = await params;

  const ilce = istanbulIlceleri.find(
    (item) => item.slug === slug
  );

  if (!ilce) {
    return {};
  }

  return {
    title: `${ilce.name} Kombi, Klima ve Petek Servisi | Vora Teknik Servis`,
    description:
      `${ilce.name} ve çevresinde kombi servisi, klima servisi ve petek temizliği hizmetleri. Vora Teknik Servis.`,
    alternates: {
      canonical: `/istanbul/${ilce.slug}`,
    },
    openGraph: {
      title: `${ilce.name} Kombi, Klima ve Petek Servisi | Vora Teknik Servis`,
      description:
        `${ilce.name} ve çevresinde kombi, klima ve petek servis hizmetleri.`,
      url: `https://vorateknik.com/istanbul/${ilce.slug}`,
      type: "website",
      locale: "tr_TR",
      siteName: "Vora Teknik Servis",
    },
  };
}

export default async function IlcePage({ params }: Props) {
  const { ilce: slug } = await params;

  const ilce = istanbulIlceleri.find(
    (item) => item.slug === slug
  );

  if (!ilce) {
    notFound();
  }



  return (
    <main className="min-h-screen bg-slate-950 text-white">

       {/* HEADER + NAVBAR */}
      <header className="w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-100">

        <div className="w-full px-6 lg:px-20 2xl:px-32 py-4">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white"
            >
              Vora<span className="text-cyan-500">Teknik</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2">

              <Link
                href="/"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Ana Sayfa
              </Link>

              <Link
                href="/kombi-servisi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Kombi Servisi
              </Link>

              <Link
                href="/klima-servisi"
                className="px-4 py-2.5 rounded-lg text-white bg-slate-800 hover:bg-slate-700 font-semibold transition-colors"
              >
                Klima Servisi
              </Link>

              <Link
                href="/petek-temizligi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Petek Temizliği
              </Link>

              <a
                href="/#servis-talebi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                İletişim
              </a>

            </nav>

            {/* DESKTOP PHONE */}
            <div className="hidden lg:flex items-center gap-4">

              <a
                href="tel:+905365281116"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-bold"
              >
                <Phone size={18} className="text-cyan-500" />
                0536 528 11 16
              </a>

              <a
                href="tel:+905365281116"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-lg font-black transition-colors"
              >
                <Phone size={17} />
                Hemen Ara
              </a>

            </div>

            </div>

        </div>
      </header>

     {/* HERO */}
<section className="relative min-h-[calc(100svh-85px)] flex items-end overflow-hidden">

  {/* ARKA PLAN GÖRSELİ */}
  <div className="absolute inset-0">

    <Image
      src={ilce.image}
      alt={`${ilce.name} İstanbul`}
      fill
      priority
      sizes="100vw"
      className="object-cover scale-105"
    />

    {/* Koyu katman */}
    <div className="absolute inset-0 bg-slate-950/55" />

    {/* Alt gradient */}
    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />

    {/* Sağ taraf gradient */}
    <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

  </div>


  {/* HERO İÇERİK */}
  <div className="relative z-10 w-full max-w-[1800px] mx-auto px-[clamp(24px,5vw,96px)] pb-[clamp(60px,9vh,120px)] pt-[clamp(120px,18vh,220px)]">

    <div className="max-w-300">

      {/* ÜST ETİKET */}
<div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md text-cyan-300 text-[clamp(0.75rem,1vw,0.95rem)] font-semibold mb-7">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

        İSTANBUL / {ilce.name.toUpperCase()}

      </div>


      {/* BAŞLIK */}
      <h1 className="text-[clamp(3rem,5.2vw,6.5rem)] font-bold tracking-[-0.04em] leading-[0.95] text-white">

        {ilce.name}

        <span className="block text-cyan-400 mt-2">
          Kombi, Klima ve Petek Servisi
        </span>

      </h1>


      {/* AÇIKLAMA */}
      <p className="mt-8 text-[clamp(1.05rem,1.35vw,1.5rem)] text-slate-200 leading-relaxed max-w-190">

        {ilce.name} ve çevresinde kombi servisi, klima servisi
        ve petek temizliği için profesyonel teknik destek.

      </p>


      {/* BUTONLAR */}
      <div className="flex flex-col sm:flex-row gap-4 mt-9">

        <a
          href="tel:+905365281116"
className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-[clamp(22px,2vw,32px)] py-[clamp(13px,1vw,18px)] text-[clamp(0.95rem,1vw,1.1rem)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"        >

          <Phone size={19} />

          Hemen Ara

        </a>


        <a
          href="https://wa.me/905365281116"
          target="_blank"
          rel="noopener noreferrer"
className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold px-[clamp(22px,2vw,32px)] py-[clamp(13px,1vw,18px)] text-[clamp(0.95rem,1vw,1.1rem)] rounded-xl transition-all duration-300 hover:-translate-y-1"        >

          WhatsApp'tan Yaz

          <ArrowRight size={18} />

        </a>

      </div>


      {/* GÜVEN BİLGİLERİ */}
      <div className="flex flex-wrap gap-x-8 gap-y-3 mt-9 text-sm text-slate-300">

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          İstanbul geneli hizmet
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          Kombi & Klima
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          Petek temizliği
        </div>

      </div>

    </div>

  </div>


  {/* AŞAĞI KAYDIR */}
  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-slate-400">

    <span className="text-xs uppercase tracking-[0.25em]">
      Keşfet
    </span>

    <div className="w-6 h-10 rounded-full border border-slate-500 flex justify-center pt-2">

      <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />

    </div>

  </div>

</section>


      {/* HİZMETLER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="max-w-4xl mb-14">
          <p className="text-cyan-400 font-semibold mb-3">
            HİZMETLERİMİZ
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            {ilce.name} Teknik Servis Hizmetleri
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/kombi-servisi"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 hover:border-cyan-500/50 transition-all"
          >
            <h3 className="text-xl font-bold">
              Kombi Servisi
            </h3>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Kombi arıza tespiti, bakım ve teknik servis hizmetleri.
            </p>

            <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold mt-6">
              Hizmeti İncele
              <ArrowRight size={17} />
            </span>
          </Link>

          <Link
            href="/klima-servisi"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 hover:border-cyan-500/50 transition-all"
          >
            <h3 className="text-xl font-bold">
              Klima Servisi
            </h3>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Klima bakım, arıza tespiti ve teknik servis hizmetleri.
            </p>

            <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold mt-6">
              Hizmeti İncele
              <ArrowRight size={17} />
            </span>
          </Link>

          <Link
            href="/petek-temizligi"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 hover:border-cyan-500/50 transition-all"
          >
            <h3 className="text-xl font-bold">
              Petek Temizliği
            </h3>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Petek temizliği ve ısıtma sistemi kontrol hizmetleri.
            </p>

            <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold mt-6">
              Hizmeti İncele
              <ArrowRight size={17} />
            </span>
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900">
        <div className="w-full max-w-[1800px] mx-auto px-[clamp(24px,5vw,96px)] py-20 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            {ilce.name} için servis talebiniz mi var?
          </h2>

          <p className="text-slate-400 mt-4">
            Vora Teknik Servis ile iletişime geçin.
          </p>

          <a
            href="tel:+905365281116"
            className="inline-flex items-center gap-2 mt-8 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-colors"
          >
            <Phone size={19} />
            0536 528 11 16
          </a>

        </div>
      </section>

    </main>
  );
}