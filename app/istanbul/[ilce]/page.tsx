import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { istanbulIlceleri } from "../../data/istanbul-ilceleri";
import DistrictHeroImage from "../../components/DistrictHeroImage";
import { VoraReveal, VoraScrollProgress } from "../../components/VoraScrollEffects";
import VoraHeader from "../../components/VoraHeader";

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

  const title = `${ilce.name} Kombi, Klima ve Petek Servisi | Vora Teknik Servis`;
  const description =
    `${ilce.name} ve çevresinde kombi servisi, klima servisi ve petek temizliği. Vora Teknik Servis ile telefon veya WhatsApp üzerinden servis talebi oluşturun.`;

  return {
    title,
    description,
    keywords: [
      `${ilce.name} kombi servisi`,
      `${ilce.name} klima servisi`,
      `${ilce.name} petek temizliği`,
      `${ilce.name} teknik servis`,
      `${ilce.name} kombi bakım`,
      `${ilce.name} klima bakım`,
      `İstanbul ${ilce.name} servis`,
    ],
    alternates: {
      canonical: `/istanbul/${ilce.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://vorateknik.com/istanbul/${ilce.slug}`,
      type: "website",
      locale: "tr_TR",
      siteName: "Vora Teknik Servis",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

  const pageUrl = `https://vorateknik.com/istanbul/${ilce.slug}`;

  const faqItems = [
    {
      question: `${ilce.name} kombi servisi yapıyor musunuz?`,
      answer: `Evet. Vora Teknik Servis, ${ilce.name} ve çevresinde kombi arıza tespiti, bakım ve teknik servis taleplerini planlamaktadır. Servis için 0536 528 11 16 veya 0538 818 82 36 numaralarından iletişime geçebilirsiniz.`,
    },
    {
      question: `${ilce.name} klima servisi hizmeti veriyor musunuz?`,
      answer: `Evet. ${ilce.name} bölgesinde klima bakım, arıza tespiti ve teknik servis hizmetleri için servis talebi oluşturabilirsiniz.`,
    },
    {
      question: `${ilce.name} petek temizliği yapıyor musunuz?`,
      answer: `Evet. ${ilce.name} ve çevresinde petek temizliği ile ısıtma sistemi kontrolü için servis planlaması yapılmaktadır.`,
    },
    {
      question: `${ilce.name} servis talebi nasıl oluşturulur?`,
      answer: `Telefon üzerinden 0536 528 11 16 numarasını arayarak veya WhatsApp üzerinden mesaj göndererek ${ilce.name} için servis talebinizi iletebilirsiniz.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://vorateknik.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmet Bölgelerimiz",
        item: "https://vorateknik.com/hizmet-bolgeleri",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: ilce.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <VoraScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* NAVBAR */}
      <VoraHeader active="ilce" />

     {/* HERO */}
<section className="relative isolate flex min-h-[610px] items-end overflow-hidden bg-vora-bg sm:min-h-[660px] lg:min-h-[calc(100svh-85px)]">

  {/* ARKA PLAN GÖRSELİ */}
  <div 
  
   className="absolute inset-0">
   <DistrictHeroImage src={ilce.image} districtName={ilce.name} />




    {/* Koyu katman */}
    <div className="absolute inset-0 bg-slate-950/20 lg:bg-slate-950/50" />

    {/* Alt gradient */}
    <div className="absolute inset-0 bg-linear-to-t from-vora-bg via-vora-bg/45 to-transparent lg:from-slate-950 lg:via-slate-950/55 lg:to-slate-950/10" />

    {/* Sağ taraf gradient */}
    <div className="absolute inset-0 hidden bg-linear-to-r from-slate-950/90 via-slate-950/40 to-transparent lg:block" />

  </div>


  {/* HERO İÇERİK */}
  <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-14 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-48 2xl:px-16">

    <div className="max-w-275">

      {/* ÜST ETİKET */}
<div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md text-cyan-300 text-[clamp(0.75rem,1vw,0.95rem)] font-semibold mb-7">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

        İSTANBUL / {ilce.name.toUpperCase()}

      </div>


      {/* BAŞLIK */}
      <h1 className="break-words text-[clamp(2.25rem,9vw,3.75rem)] font-extrabold leading-[1.07] tracking-[-0.04em] text-white sm:text-[clamp(3.5rem,6vw,5.5rem)] lg:text-[clamp(4rem,5.2vw,6.5rem)]">

        {ilce.name}

        <span className="block text-cyan-400 mt-2">
          Kombi, Klima ve Petek Servisi
        </span>

      </h1>


      {/* AÇIKLAMA */}
      <p className="mt-6 max-w-190 text-base leading-relaxed text-slate-200 sm:mt-8 sm:text-lg lg:text-[1.35rem]">

        {ilce.name} ve çevresinde kombi servisi, klima servisi
        ve petek temizliği için profesyonel teknik destek.

      </p>


      {/* BUTONLAR */}
      <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">

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


      {/* İLÇE İÇERİĞİ */}
      <section className="border-t border-slate-800 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <VoraReveal className="max-w-4xl">
            <p className="text-cyan-600 font-bold tracking-wide mb-3">
              {ilce.name} TEKNİK SERVİS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {ilce.name} kombi, klima ve petek servisi
            </h2>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Vora Teknik Servis, {ilce.name} ve çevresindeki servis talepleri için kombi, klima ve petek hizmetlerini tek noktadan planlar. Arıza tespiti, bakım ve temizlik ihtiyaçlarında cihazın durumuna göre uygun servis işlemi belirlenir.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                `${ilce.name} kombi servisi`,
                `${ilce.name} klima servisi`,
                `${ilce.name} petek temizliği`,
                "Telefon ve WhatsApp üzerinden servis talebi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="text-cyan-600 shrink-0" size={20} />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </VoraReveal>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="max-w-2xl mb-14">
          <p className="text-cyan-400 font-semibold mb-3">
            HİZMETLERİMİZ
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            {ilce.name} Teknik Servis Hizmetleri
          </h2>
        </div>

        <VoraReveal className="grid gap-6 md:grid-cols-3">

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

        </VoraReveal>
      </section>

      {/* SSS */}
      <section className="border-t border-slate-800 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-2xl mb-12">
            <p className="text-cyan-600 font-semibold mb-3">SIK SORULAN SORULAR</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {ilce.name} servis hizmetleri hakkında
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-5 font-bold text-lg flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <ArrowRight className="shrink-0 text-cyan-600 transition-transform group-open:rotate-90" size={20} />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DİĞER HİZMETLER */}
      <section className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-cyan-400 font-semibold mb-3">VORA TEKNİK SERVİS</p>
              <h2 className="text-3xl md:text-4xl font-bold">Diğer hizmetlerimizi inceleyin</h2>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300">
              Ana sayfaya dön <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            <Link href="/kombi-servisi" className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-xl font-bold">Kombi Servisi</h3>
              <p className="text-slate-400 mt-2">İstanbul geneli kombi bakım ve teknik servis.</p>
            </Link>
            <Link href="/klima-servisi" className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-xl font-bold">Klima Servisi</h3>
              <p className="text-slate-400 mt-2">Klima bakım, arıza tespiti ve teknik destek.</p>
            </Link>
            <Link href="/petek-temizligi" className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-xl font-bold">Petek Temizliği</h3>
              <p className="text-slate-400 mt-2">Petek temizliği ve ısıtma sistemi kontrolü.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">

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
          <a
            href="tel:+905388188236"
            className="ml-0 mt-3 inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-slate-800 px-7 py-4 font-bold text-white transition-colors hover:bg-slate-700 sm:ml-3"
          >
            <Phone size={19} />
            0538 818 82 36
          </a>

        </div>
      </section>

    </main>
  );
}