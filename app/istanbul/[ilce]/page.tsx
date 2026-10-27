import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo";
import StructuredData from "../../components/StructuredData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { istanbulIlceleri } from "../../data/istanbul-ilceleri";
import { istanbulMahalleleri } from "../../data/istanbul-mahalleleri";
import DistrictHeroImage from "../../components/DistrictHeroImage";
import {
  VoraReveal,
  VoraScrollProgress,
} from "../../components/VoraScrollEffects";
import VoraHeader from "../../components/VoraHeader";
import VoraFooter from "../../components/VoraFooter";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce: slug } = await params;

  const ilce = istanbulIlceleri.find((item) => item.slug === slug);

  if (!ilce) {
    return {
      title: "Hizmet bölgesi bulunamadı | Vora Teknik",
      description:
        "Aradığınız hizmet bölgesi bulunamadı. İstanbul hizmet bölgelerimizi inceleyebilirsiniz.",
      alternates: { canonical: null },
      robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
      openGraph: null,
      twitter: null,
    };
  }

  const title = `${ilce.name} Kombi, Klima ve Petek Servisi | Vora Teknik Servis`;
  const description = `${ilce.name} ve çevresinde kombi servisi, klima servisi ve petek temizliği. Vora Teknik Servis ile telefon veya WhatsApp üzerinden servis talebi oluşturun.`;

  return createPageMetadata({
    title,
    description,
    path: `/istanbul/${ilce.slug}`,
  });
}

export default async function IlcePage({ params }: Props) {
  const { ilce: slug } = await params;

  const ilce = istanbulIlceleri.find((item) => item.slug === slug);

  if (!ilce) {
    notFound();
  }

  const pageUrl = `https://vorateknik.com/istanbul/${ilce.slug}`;
  const mahalleler = istanbulMahalleleri[ilce.slug] ?? [];

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
    mainEntity: faqItems.map((faq) => ({
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
    <>
      <VoraHeader active="ilce" />
      <main
        id="main-content"
        className="vora-secondary min-h-screen bg-[#000d26] text-white"
      >
        <VoraScrollProgress />
        <StructuredData id="district-faq-schema" data={faqJsonLd} />
        <StructuredData
          id="district-breadcrumb-schema"
          data={breadcrumbJsonLd}
        />

        {/* NAVBAR */}

        {/* HERO */}
        <section className="relative isolate flex min-h-[600px] items-end overflow-hidden bg-[#000d26] sm:min-h-[620px] lg:min-h-[680px]">
          {/* ARKA PLAN GÖRSELİ */}
          <div className="absolute inset-0">
            <DistrictHeroImage src={ilce.image} districtName={ilce.name} />

            {/* Koyu katman */}
            <div className="absolute inset-0 bg-[#000d26]/20 lg:bg-[#000d26]/50" />

            {/* Alt gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#000d26] via-[#000d26]/45 to-transparent lg:from-[#000d26] lg:via-[#000d26]/55 lg:to-[#000d26]/10" />

            {/* Sağ taraf gradient */}
            <div className="absolute inset-0 hidden bg-linear-to-r from-[#000d26]/90 via-[#000d26]/40 to-transparent lg:block" />
          </div>

          {/* HERO İÇERİK */}
          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-14 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-48 2xl:px-16">
            <div className="max-w-275">
              <nav
                aria-label="Sayfa yolu"
                className="mb-7 flex flex-wrap items-center gap-2 text-xs text-[#cbd5e1]"
              >
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/hizmet-bolgeleri" className="hover:text-white">
                  Hizmet Bölgeleri
                </Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{ilce.name}</span>
              </nav>
              {/* ÜST ETİKET */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#00b8f5]/30 bg-[#00d9ff]/10 backdrop-blur-md text-[#00d9ff] text-[clamp(0.75rem,1vw,0.95rem)] font-semibold mb-7">
                <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
                İSTANBUL / {ilce.name.toLocaleUpperCase("tr-TR")}
              </div>

              {/* BAŞLIK */}
              <h1 className="break-words text-[clamp(2.5rem,9vw,4rem)] font-medium leading-[1.04] tracking-[-0.055em] text-white sm:text-[clamp(3.5rem,6vw,5.5rem)] lg:text-[clamp(4rem,5.2vw,6.5rem)]">
                {ilce.name}

                <span className="mt-2 block text-[#00d9ff]">
                  teknik servis.
                </span>
              </h1>

              {/* AÇIKLAMA */}
              <p className="mt-6 max-w-190 text-base leading-relaxed text-[#e2e8f0] sm:mt-8 sm:text-lg lg:text-[1.35rem]">
                {ilce.name} ve çevresinde kombi servisi, klima servisi ve petek
                temizliği için profesyonel teknik destek.
              </p>

              {/* BUTONLAR */}
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <a
                  href="tel:+905365281116"
                  className="inline-flex items-center justify-center gap-2 bg-[#00d9ff] hover:bg-[#00d9ff] text-[#000d26] font-bold px-[clamp(22px,2vw,32px)] py-[clamp(13px,1vw,18px)] text-[clamp(0.95rem,1vw,1.1rem)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00b8f5]/20"
                >
                  <Phone size={19} />
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905365281116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-[#ffffff]/5 hover:bg-[#ffffff]/10 backdrop-blur-md text-white font-semibold px-[clamp(22px,2vw,32px)] py-[clamp(13px,1vw,18px)] text-[clamp(0.95rem,1vw,1.1rem)] rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  WhatsApp&apos;tan Yaz
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* GÜVEN BİLGİLERİ */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-9 text-sm text-[#cbd5e1]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
                  İstanbul geneli hizmet
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
                  Kombi & Klima
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
                  Petek temizliği
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İLÇE İÇERİĞİ */}
        <section className="border-t border-[#203b59] bg-[#ffffff] text-[#0b2343]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <VoraReveal className="max-w-4xl">
              <p className="text-[#0068c9] font-bold tracking-wide mb-3">
                {ilce.name} TEKNİK SERVİS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {ilce.name} kombi, klima ve petek servisi
              </h2>
              <p className="mt-6 text-[#52657b] text-lg leading-relaxed">
                Vora Teknik Servis, {ilce.name} ve çevresindeki servis talepleri
                için kombi, klima ve petek hizmetlerini tek noktadan planlar.
                Arıza tespiti, bakım ve temizlik ihtiyaçlarında cihazın durumuna
                göre uygun servis işlemi belirlenir.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[
                  `${ilce.name} kombi servisi`,
                  `${ilce.name} klima servisi`,
                  `${ilce.name} petek temizliği`,
                  "Telefon ve WhatsApp üzerinden servis talebi",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#dbe5ee] bg-[#eef5fb] p-4"
                  >
                    <CheckCircle2
                      className="text-[#0068c9] shrink-0"
                      size={20}
                    />
                    <span className="font-semibold text-[#0b2343]">{item}</span>
                  </div>
                ))}
              </div>
            </VoraReveal>
          </div>
        </section>

        {/* MAHALLELER — tüm isimler ilk HTML yanıtında yer alır. */}
        <section
          id="mahalleler"
          className="border-t border-[#dbe5ee] bg-[#eef5fb] text-[#0b2343]"
          aria-labelledby="mahalleler-baslik"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-xs font-bold tracking-[0.16em] text-[#0068c9]">
                  MAHALLE BAZINDA SERVİS PLANLAMASI
                </p>
                <h2
                  id="mahalleler-baslik"
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                >
                  {ilce.name} mahallelerinde servis planlaması
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#52657b]">
                  Mahallenizi aşağıdaki listede bulabilirsiniz. Adresinize uygun
                  kombi, klima ve petek servisi kapsamını ve randevu durumunu
                  telefonla birlikte netleştirelim.
                </p>
              </div>
              <span className="inline-flex w-fit shrink-0 rounded-full border border-[#0068c9]/20 bg-white px-4 py-2 text-sm font-semibold">
                {mahalleler.length} mahalle
              </span>
            </div>
            <ul
              className="mt-9 grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3"
              aria-label={`${ilce.name} mahalleleri`}
            >
              {mahalleler.slice(0, 12).map((mahalle) => (
                <li
                  key={mahalle}
                  className="flex min-h-12 items-center gap-3 border-b border-[#dbe5ee] py-3 text-sm"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b8f5]"
                    aria-hidden="true"
                  />
                  {mahalle} Mahallesi
                </li>
              ))}
            </ul>
            {mahalleler.length > 12 && (
              <details className="group mt-5 rounded-xl border border-[#dbe5ee] bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#0068c9]">
                  Diğer {mahalleler.length - 12} mahalleyi göster
                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <ul
                  className="mt-5 grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3"
                  aria-label={`${ilce.name} diğer mahalleleri`}
                >
                  {mahalleler.slice(12).map((mahalle) => (
                    <li
                      key={mahalle}
                      className="flex min-h-12 items-center gap-3 border-b border-[#dbe5ee] py-3 text-sm"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b8f5]"
                        aria-hidden="true"
                      />
                      {mahalle} Mahallesi
                    </li>
                  ))}
                </ul>
              </details>
            )}
            <a
              href="tel:+905365281116"
              className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#000d26] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0b2f52]"
            >
              <Phone size={17} />
              Mahalleniz için bilgi alın
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* HİZMETLER */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-2xl mb-14">
            <p className="text-[#00d9ff] font-semibold mb-3">HİZMETLERİMİZ</p>

            <h2 className="text-3xl md:text-4xl font-bold">
              {ilce.name} Teknik Servis Hizmetleri
            </h2>
          </div>

          <VoraReveal className="grid gap-6 md:grid-cols-3">
            <Link
              href="/kombi-servisi"
              className="group rounded-2xl border border-[#203b59] bg-[#071e3d] p-7 hover:border-[#00b8f5]/50 transition-all"
            >
              <h3 className="text-xl font-bold">Kombi Servisi</h3>

              <p className="text-[#a8bed4] mt-3 leading-relaxed">
                Kombi arıza tespiti, bakım ve teknik servis hizmetleri.
              </p>

              <span className="inline-flex items-center gap-2 text-[#00d9ff] font-semibold mt-6">
                Hizmeti İncele
                <ArrowRight size={17} />
              </span>
            </Link>

            <Link
              href="/klima-servisi"
              className="group rounded-2xl border border-[#203b59] bg-[#071e3d] p-7 hover:border-[#00b8f5]/50 transition-all"
            >
              <h3 className="text-xl font-bold">Klima Servisi</h3>

              <p className="text-[#a8bed4] mt-3 leading-relaxed">
                Klima bakım, arıza tespiti ve teknik servis hizmetleri.
              </p>

              <span className="inline-flex items-center gap-2 text-[#00d9ff] font-semibold mt-6">
                Hizmeti İncele
                <ArrowRight size={17} />
              </span>
            </Link>

            <Link
              href="/petek-temizligi"
              className="group rounded-2xl border border-[#203b59] bg-[#071e3d] p-7 hover:border-[#00b8f5]/50 transition-all"
            >
              <h3 className="text-xl font-bold">Petek Temizliği</h3>

              <p className="text-[#a8bed4] mt-3 leading-relaxed">
                Petek temizliği ve ısıtma sistemi kontrol hizmetleri.
              </p>

              <span className="inline-flex items-center gap-2 text-[#00d9ff] font-semibold mt-6">
                Hizmeti İncele
                <ArrowRight size={17} />
              </span>
            </Link>
          </VoraReveal>
        </section>

        {/* SSS */}
        <section className="border-t border-[#203b59] bg-[#ffffff] text-[#0b2343]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
            <div className="max-w-2xl mb-12">
              <p className="text-[#0068c9] font-semibold mb-3">
                SIK SORULAN SORULAR
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {ilce.name} servis hizmetleri hakkında
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#dbe5ee] bg-[#eef5fb] overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 font-bold text-lg flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <ArrowRight
                      className="shrink-0 text-[#0068c9] transition-transform group-open:rotate-90"
                      size={20}
                    />
                  </summary>
                  <div className="px-6 pb-6 text-[#52657b] leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* DİĞER HİZMETLER */}
        <section className="bg-[#000d26] border-t border-[#203b59]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[#00d9ff] font-semibold mb-3">
                  VORA TEKNİK SERVİS
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Diğer hizmetlerimizi inceleyin
                </h2>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#00d9ff] font-semibold hover:text-[#00d9ff]"
              >
                Ana sayfaya dön <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <Link
                href="/kombi-servisi"
                className="rounded-2xl border border-[#203b59] bg-[#071e3d] p-6 hover:border-[#00b8f5]/50 transition-colors"
              >
                <h3 className="text-xl font-bold">Kombi Servisi</h3>
                <p className="text-[#a8bed4] mt-2">
                  İstanbul geneli kombi bakım ve teknik servis.
                </p>
              </Link>
              <Link
                href="/klima-servisi"
                className="rounded-2xl border border-[#203b59] bg-[#071e3d] p-6 hover:border-[#00b8f5]/50 transition-colors"
              >
                <h3 className="text-xl font-bold">Klima Servisi</h3>
                <p className="text-[#a8bed4] mt-2">
                  Klima bakım, arıza tespiti ve teknik destek.
                </p>
              </Link>
              <Link
                href="/petek-temizligi"
                className="rounded-2xl border border-[#203b59] bg-[#071e3d] p-6 hover:border-[#00b8f5]/50 transition-colors"
              >
                <h3 className="text-xl font-bold">Petek Temizliği</h3>
                <p className="text-[#a8bed4] mt-2">
                  Petek temizliği ve ısıtma sistemi kontrolü.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#203b59] bg-[#071e3d]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {ilce.name} için servis talebiniz mi var?
            </h2>

            <p className="text-[#a8bed4] mt-4">
              Vora Teknik Servis ile iletişime geçin.
            </p>

            <a
              href="tel:+905365281116"
              className="inline-flex items-center gap-2 mt-8 bg-[#00d9ff] hover:bg-[#00d9ff] text-[#000d26] font-bold px-7 py-4 rounded-xl transition-colors"
            >
              <Phone size={19} />
              0536 528 11 16
            </a>
            <a
              href="tel:+905388188236"
              className="ml-0 mt-3 inline-flex items-center gap-2 rounded-xl border border-[#00b8f5]/50 bg-[#0b2f52] px-7 py-4 font-bold text-white transition-colors hover:bg-[#0d3f67] sm:ml-3"
            >
              <Phone size={19} />
              0538 818 82 36
            </a>
          </div>
        </section>
      </main>
      <VoraFooter />
    </>
  );
}
