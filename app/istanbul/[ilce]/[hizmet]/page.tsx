import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  MapPin,
  Phone,
} from "lucide-react";
import { istanbulIlceleri } from "../../../data/istanbul-ilceleri";
import { istanbulMahalleleri } from "../../../data/istanbul-mahalleleri";
import {
  districtServices,
  getDistrictService,
} from "../../../data/service-content";
import { createPageMetadata, site } from "../../../lib/seo";
import DistrictHeroImage from "../../../components/DistrictHeroImage";
import StructuredData from "../../../components/StructuredData";
import VoraHeader from "../../../components/VoraHeader";
import VoraFooter from "../../../components/VoraFooter";
import {
  VoraReveal,
  VoraScrollProgress,
} from "../../../components/VoraScrollEffects";

type Props = { params: Promise<{ ilce: string; hizmet: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return istanbulIlceleri.flatMap((district) =>
    districtServices.map((service) => ({
      ilce: district.slug,
      hizmet: service.slug,
    })),
  );
}

const metadataDescriptions = {
  "kombi-servisi":
    "kombi servisi için bakım, arıza tespiti ve ısıtma kontrolü. Vora Teknik ile mahallenize uygun kapsamı ve servis randevunuzu planlayın.",
  "klima-servisi":
    "klima servisi için bakım, soğutma kontrolü ve montaj değerlendirmesi. Vora Teknik ile adresinize uygun servis kapsamını ve randevuyu planlayın.",
  "petek-temizligi":
    "petek temizliği için ısı dağılımı ve tesisat kontrolü. Vora Teknik ile mahallenize uygun temizlik kapsamını ve servis randevusunu görüşün.",
};

const articleLinks = {
  "kombi-servisi": [
    {
      slug: "kombi-bakimi-ne-zaman-yapilmali",
      title: "Kombi bakımı ne zaman yapılmalı?",
    },
    {
      slug: "kombi-su-basinci-neden-duser",
      title: "Kombi su basıncı neden düşer?",
    },
  ],
  "klima-servisi": [
    {
      slug: "klima-neden-yeterince-sogutmaz",
      title: "Klima neden yeterince soğutmaz?",
    },
    {
      slug: "klima-temizligi-ne-zaman-yapilmali",
      title: "Klima temizliği ne zaman yapılmalı?",
    },
  ],
  "petek-temizligi": [
    {
      slug: "peteklerin-alti-neden-soguk",
      title: "Peteklerin altı neden soğuk kalır?",
    },
    {
      slug: "kis-oncesi-kombi-petek-kontrol-listesi",
      title: "Kış öncesi kombi ve petek kontrol listesi",
    },
  ],
};

function resolvePage(ilce: string, hizmet: string) {
  const district = istanbulIlceleri.find((item) => item.slug === ilce);
  const service = getDistrictService(hizmet);
  if (!district || !service) notFound();
  return { district, service };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce, hizmet } = await params;
  const { district, service } = resolvePage(ilce, hizmet);
  return createPageMetadata({
    title: `${district.name} ${service.title} | Vora Teknik`,
    description: `${district.name} ${metadataDescriptions[service.slug]}`,
    path: `/istanbul/${district.slug}/${service.slug}`,
  });
}

export default async function DistrictServicePage({ params }: Props) {
  const { ilce, hizmet } = await params;
  const { district, service } = resolvePage(ilce, hizmet);
  const neighborhoods = istanbulMahalleleri[district.slug] ?? [];
  const localTitle = `${district.name} ${service.title}`;
  const path = `/istanbul/${district.slug}/${service.slug}`;
  const pageUrl = `${site.url}${path}`;
  const active = {
    "kombi-servisi": "kombi",
    "klima-servisi": "klima",
    "petek-temizligi": "petek",
  } as const;
  const localFaqs = [
    ...service.faqs,
    {
      q: `${district.name} bölgesinde hangi mahalleler için servis talebi iletebilirim?`,
      a: `${district.name} ilçesindeki ${neighborhoods.slice(0, 4).join(", ")} ve sayfada listelenen diğer mahalleler için talebinizi paylaşabilirsiniz. Adres, cihaz bilgileri, iş kapsamı ve randevu durumuna göre servis uygunluğu iletişim sırasında doğrulanır.`,
    },
    {
      q: `${district.name} ${service.title.toLocaleLowerCase("tr-TR")} ücreti nasıl belirlenir?`,
      a: "Cihazın veya tesisatın durumu, inceleme kapsamı, işçilik ve varsa parça ihtiyacı birlikte değerlendirilir. Talebinizi iletirken servis koşullarını sorun; yapılacak işlem ve maliyet hakkında bilgi almadan karar vermeniz beklenmez.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: localTitle,
        serviceType: service.title,
        description: `${district.name} ${metadataDescriptions[service.slug]}`,
        url: pageUrl,
        image: `${site.url}${service.image}`,
        provider: { "@id": `${site.url}/#business` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: district.name,
          containedInPlace: { "@type": "City", name: "İstanbul" },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: `${site.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hizmet Bölgeleri",
            item: `${site.url}/hizmet-bolgeleri`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: district.name,
            item: `${site.url}/istanbul/${district.slug}`,
          },
          { "@type": "ListItem", position: 4, name: localTitle, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: localFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <VoraScrollProgress />
      <VoraHeader active={active[service.slug]} />
      <main
        id="main-content"
        className="vora-local-service bg-[#f4f8fd] text-[#000d26]"
      >
        <StructuredData id="local-service-schema" data={schema} />
        <section
          className="relative isolate overflow-hidden bg-[#000d26] text-white"
          aria-labelledby="local-service-heading"
        >
          <div className="absolute inset-0 -z-10 opacity-25">
            <DistrictHeroImage
              src={district.image}
              districtName={district.name}
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#000d26] via-[#000d26]/85 to-[#000d26]/40" />
          <div className="vora-container py-8 sm:py-10">
            <nav
              aria-label="Sayfa yolu"
              className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] leading-6 text-slate-300"
            >
              <Link href="/" className="hover:text-white">
                Ana sayfa
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/hizmet-bolgeleri" className="hover:text-white">
                Hizmet bölgeleri
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={`/istanbul/${district.slug}`}
                className="hover:text-white"
              >
                {district.name}
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-cyan-200">
                {service.title}
              </span>
            </nav>
            <div className="grid items-center gap-12 pb-14 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
              <div>
                <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.16em] text-cyan-200">
                  <span className="h-px w-8 bg-cyan-300" aria-hidden="true" />
                  {district.name} / {service.eyebrow}
                </p>
                <h1
                  id="local-service-heading"
                  className="text-[clamp(2.65rem,6vw,5.6rem)] font-medium leading-[1.05] tracking-[-.055em]"
                >
                  {district.name}{" "}
                  <em
                    className="mt-2 block text-cyan-300"
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontWeight: 400,
                    }}
                  >
                    {service.title}
                  </em>
                </h1>
                <p className="mt-7 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                  {district.name} ilçesindeki eviniz veya iş yeriniz için{" "}
                  {service.title.toLocaleLowerCase("tr-TR")} talebinizi
                  dinliyor, cihaz ve adres bilgilerinize uygun servis sürecini
                  birlikte planlıyoruz.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#servis-talebi"
                    className="vora-button bg-cyan-300 text-[#000d26] hover:bg-cyan-200"
                  >
                    Servis talebi oluştur <ArrowUpRight size={19} />
                  </Link>
                  <a
                    href="tel:+905365281116"
                    className="inline-flex min-h-13 items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
                  >
                    <Phone size={16} />
                    0536 528 11 16
                  </a>
                </div>
                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} />
                    {neighborhoods.length} mahalle için talep değerlendirmesi
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Check size={14} />
                    İşlem öncesi bilgilendirme
                  </span>
                </div>
              </div>
              <VoraReveal variant="scale" className="min-w-0">
                <div className="relative aspect-[4/3.8] overflow-hidden rounded-xl border border-white/15 bg-[#102846]">
                  <Image
                    src={service.image}
                    alt={`${service.title} kapsamında değerlendirilen ev tipi ${service.shortTitle.toLocaleLowerCase("tr-TR")} sistemi`}
                    fill
                    preload
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-[#000d26]/95 to-transparent px-6 pb-6 pt-20">
                    <span className="max-w-52 text-2xl font-medium leading-tight tracking-[-.04em]">
                      {district.name} için
                      <br />
                      yerinde bir çözüm.
                    </span>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/40">
                      <ArrowUpRight size={24} strokeWidth={1.4} />
                    </span>
                  </div>
                </div>
                <p className="mt-4 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[.12em] text-slate-300">
                  <span>{service.title}</span>
                  <Link
                    href={`/istanbul/${district.slug}`}
                    className="inline-flex items-center gap-2 hover:text-cyan-200"
                  >
                    {district.name}
                    <ArrowUpRight size={13} />
                  </Link>
                </p>
              </VoraReveal>
            </div>
          </div>
        </section>

        <section
          className="py-16 sm:py-24"
          aria-labelledby="local-scope-heading"
        >
          <div className="vora-container">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
              <VoraReveal>
                <span className="eyebrow text-[#0068c9]">
                  01 / İHTİYACINIZI ANLAYALIM
                </span>
                <h2
                  id="local-scope-heading"
                  className="mt-5 text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.12] tracking-[-.05em]"
                >
                  {district.name} için
                  <br />
                  <em
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    özenli {service.shortTitle.toLocaleLowerCase("tr-TR")}{" "}
                    desteği.
                  </em>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-8 text-[#52657b]">
                  {service.intro}
                </p>
              </VoraReveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.checks.map((item, index) => (
                  <VoraReveal
                    key={item.title}
                    delay={index * 0.05}
                    className="rounded-xl border border-[#d5e2ef] bg-white p-6"
                  >
                    <span className="text-[10px] font-semibold tracking-[.12em] text-[#0068c9]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-5 text-xl font-medium tracking-[-.035em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#52657b]">
                      {item.body}
                    </p>
                  </VoraReveal>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-3 border-t border-[#d5e2ef] pt-6 sm:grid-cols-3">
              {service.benefits.map((benefit) => (
                <p
                  key={benefit}
                  className="flex items-start gap-2.5 text-[12px] leading-6 text-[#52657b]"
                >
                  <Check size={16} className="mt-1 shrink-0 text-[#0068c9]" />
                  {benefit}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-y border-[#d5e2ef] bg-white py-16 sm:py-20"
          aria-labelledby="local-symptoms-heading"
        >
          <div className="vora-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="eyebrow text-[#0068c9]">
                02 / NE ZAMAN SERVİS?
              </span>
              <h2
                id="local-symptoms-heading"
                className="mt-5 text-[clamp(2rem,3.7vw,3rem)] font-medium leading-tight tracking-[-.05em]"
              >
                Bu belirtileri
                <br />
                birlikte değerlendirelim.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-8 text-[#52657b]">
                Belirtinin tek bir nedeni olmayabilir. {district.name} adresiniz
                için servis talebi oluştururken cihazın marka/modelini,
                gözlemlediğiniz durumu ve varsa hata kodunu paylaşın.
              </p>
            </div>
            <ul className="divide-y divide-[#d5e2ef] border-y border-[#d5e2ef]">
              {service.symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex items-start justify-between gap-5 py-5 text-sm leading-7"
                >
                  <span>{symptom}</span>
                  <ArrowUpRight
                    size={17}
                    className="mt-1 shrink-0 text-[#0068c9]"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="bg-[#000d26] py-16 text-white sm:py-24"
          aria-labelledby="local-process-heading"
        >
          <div className="vora-container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="eyebrow text-cyan-200">
                  03 / SERVİS SÜRECİ
                </span>
                <h2
                  id="local-process-heading"
                  className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-tight tracking-[-.05em]"
                >
                  Önce konuşalım.
                  <br />
                  <em
                    className="text-cyan-300"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    Sonra doğru adımı atalım.
                  </em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-slate-300">
                {district.name} için randevu ve hizmet kapsamı, adresinize ve
                cihazınızın ihtiyacına göre netleştirilir.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <VoraReveal
                  key={step.title}
                  delay={index * 0.06}
                  className="border-t border-white/20 pt-6"
                >
                  <span className="text-xs text-cyan-200">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-slate-300">
                    {step.body}
                  </p>
                </VoraReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="mahalleler"
          className="py-16 sm:py-24"
          aria-labelledby="local-neighborhood-heading"
        >
          <div className="vora-container">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow text-[#0068c9]">
                  04 / MAHALLENİZDE SERVİS PLANLAMASI
                </span>
                <h2
                  id="local-neighborhood-heading"
                  className="mt-5 text-[clamp(2rem,3.7vw,3rem)] font-medium leading-tight tracking-[-.05em]"
                >
                  {district.name} mahallelerinde
                  <br />
                  {service.title.toLocaleLowerCase("tr-TR")}.
                </h2>
                <p className="mt-5 text-sm leading-8 text-[#52657b]">
                  Aşağıdaki mahalleler için adresinizi ve cihaz bilgilerinizi
                  paylaşabilirsiniz. Servis kapsamı ve randevu uygunluğu
                  talebiniz sırasında teyit edilir; mahalle listesi her adrese
                  koşulsuz hizmet sözü değildir.
                </p>
              </div>
              <span className="w-fit rounded-full border border-[#cbdbea] bg-white px-4 py-2 text-xs text-[#52657b]">
                {neighborhoods.length} mahalle
              </span>
            </div>
            <ul className="grid gap-x-7 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.slice(0, 12).map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 border-b border-[#d5e2ef] py-3 text-xs leading-6"
                >
                  <span className="size-1 shrink-0 rounded-full bg-[#0068c9]" />
                  {name} Mahallesi
                </li>
              ))}
            </ul>
            {neighborhoods.length > 12 && (
              <details className="group mt-6 rounded-xl border border-[#d5e2ef] bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                  Diğer {neighborhoods.length - 12} mahalleyi göster
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-5 grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3">
                  {neighborhoods.slice(12).map((name) => (
                    <li
                      key={name}
                      className="border-b border-[#d5e2ef] py-3 text-xs leading-6"
                    >
                      {name} Mahallesi
                    </li>
                  ))}
                </ul>
              </details>
            )}
            <a href="tel:+905365281116" className="vora-text-link mt-6">
              Adresiniz için kapsamı sorun <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section
          className="border-y border-[#d5e2ef] bg-white py-16 sm:py-20"
          aria-labelledby="local-faq-heading"
        >
          <div className="vora-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="eyebrow text-[#0068c9]">
                05 / SIK SORULANLAR
              </span>
              <h2
                id="local-faq-heading"
                className="mt-5 text-[clamp(2rem,3.7vw,3rem)] font-medium leading-tight tracking-[-.05em]"
              >
                {localTitle}
                <br />
                <em style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  hakkında merak edilenler.
                </em>
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#52657b]">
                Genel bilgilendirmeler cihazınıza özel teknik incelemenin yerini
                almaz. Emin olmadığınız durumda cihazı zorlamadan destek
                isteyin.
              </p>
            </div>
            <div className="divide-y divide-[#d5e2ef] border-y border-[#d5e2ef]">
              {localFaqs.map((faq) => (
                <details className="group" key={faq.q}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-sm font-medium leading-7">
                    {faq.q}
                    <ChevronDown
                      size={19}
                      className="shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-6 pr-5 text-[13px] leading-8 text-[#52657b]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-16 sm:py-20"
          aria-labelledby="local-related-heading"
        >
          <div className="vora-container">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <span className="eyebrow text-[#0068c9]">
                  BİLGİYLE DAHA İYİ KARARLAR
                </span>
                <h2
                  id="local-related-heading"
                  className="mt-4 text-3xl font-medium tracking-[-.04em]"
                >
                  Servis öncesi okuyun.
                </h2>
              </div>
              <Link href="/blog" className="vora-text-link">
                Tüm yazılar <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {articleLinks[service.slug].map((article) => (
                <Link
                  href={`/blog/${article.slug}`}
                  key={article.slug}
                  className="group flex items-center justify-between gap-6 rounded-xl border border-[#d5e2ef] bg-white p-6 transition-colors hover:border-[#00b8f5]"
                >
                  <h3 className="text-lg font-medium leading-7 tracking-tight">
                    {article.title}
                  </h3>
                  <ArrowUpRight
                    size={21}
                    className="shrink-0 text-[#0068c9] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#d5e2ef] pt-6">
              {districtServices
                .filter((other) => other.slug !== service.slug)
                .map((other) => (
                  <Link
                    href={`/istanbul/${district.slug}/${other.slug}`}
                    key={other.slug}
                    className="inline-flex items-center gap-3 text-sm font-medium hover:text-[#0068c9]"
                  >
                    {district.name} {other.title}
                    <ArrowRight size={16} />
                  </Link>
                ))}
              <Link
                href={`/istanbul/${district.slug}`}
                className="inline-flex items-center gap-3 text-sm font-medium hover:text-[#0068c9]"
              >
                {district.name} tüm hizmetler
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-200/10 bg-[#071e3d] py-14 text-white sm:py-20">
          <div className="vora-container flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="eyebrow text-cyan-200">
                VORA TEKNİK / İSTANBUL
              </span>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,3.7vw,3.4rem)] font-medium leading-tight tracking-[-.05em]">
                {district.name} için
                <br />
                <em
                  className="text-cyan-300"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  servis talebinizi dinleyelim.
                </em>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+905365281116"
                className="vora-button bg-cyan-300 text-[#000d26] hover:bg-cyan-200"
              >
                Hemen arayın <Phone size={18} />
              </a>
              <a
                href={`https://wa.me/905365281116?text=${encodeURIComponent(`Merhaba, ${district.name} ${service.title.toLocaleLowerCase("tr-TR")} hakkında bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="vora-button border border-white/25 text-white hover:bg-white/10"
              >
                WhatsApp’tan yazın <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <VoraFooter />
    </>
  );
}
