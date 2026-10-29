import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import StructuredData from "../components/StructuredData";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { istanbulIlceleri } from "../data/istanbul-ilceleri";
import VoraHeader from "../components/VoraHeader";
import VoraFooter from "../components/VoraFooter";
import {
  VoraReveal,
  VoraScrollProgress,
} from "../components/VoraScrollEffects";

export const metadata: Metadata = createPageMetadata({
  title: "İstanbul Hizmet Bölgelerimiz | Vora Teknik Servis",
  description:
    "Vora Teknik Servis'in İstanbul genelindeki hizmet bölgelerini inceleyin. Kombi, klima ve petek temizliği servis talepleriniz için ilçe sayfanızı seçin.",
  path: "/hizmet-bolgeleri",
});

export default function HizmetBolgeleriPage() {
  const breadcrumbs = {
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
    ],
  };

  return (
    <>
      <VoraHeader active="bolgeler" />
      <VoraScrollProgress />
      <main
        id="main-content"
        className="vora-secondary bg-[#ffffff] text-[#0b2343]"
      >
        <StructuredData id="regions-breadcrumb-schema" data={breadcrumbs} />
        <section className="px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <nav
              aria-label="Sayfa yolu"
              className="mb-12 flex items-center gap-3 text-xs text-[#52657b]"
            >
              <Link href="/" className="hover:text-[#0b2343]">
                Ana Sayfa
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Hizmet Bölgelerimiz</span>
            </nav>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div>
                <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0068c9]">
                  <span className="h-px w-8 bg-[#0068c9]" aria-hidden="true" />{" "}
                  İSTANBUL / HİZMET AĞIMIZ
                </p>
                <h1 className="text-[clamp(2.8rem,6vw,5.4rem)] font-medium leading-[1.04] tracking-[-0.06em]">
                  İstanbul
                  <br />
                  <span className="text-[#0068c9]">hizmet bölgeleri.</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#52657b] sm:text-lg">
                  İstanbul&apos;un Avrupa ve Anadolu yakasında, aşağıdaki
                  ilçelerde kombi, klima ve petek servisi planlıyoruz. İlçenizi
                  seçin, ihtiyacınız olan hizmeti birlikte belirleyelim.
                </p>
                <a
                  href="#ilceler"
                  className="mt-8 inline-flex min-h-12 items-center gap-6 rounded-full bg-[#0b2343] px-6 py-3 text-sm font-medium text-[#ffffff] transition hover:bg-[#17496b]"
                >
                  Hizmet bölgelerini keşfet <ArrowRight size={17} />
                </a>
              </div>
              <VoraReveal className="relative">
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#e1eaf4]">
                  <Image
                    src="/images/istanbul-hero.webp"
                    alt="İstanbul Boğazı ve şehir manzarası"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl bg-[#ffffff]/95 p-4 text-[#0b2343] backdrop-blur-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00d9ff]">
                      <MapPin size={19} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">
                        İstanbul hizmet bölgeleri
                      </p>
                      <p className="mt-1 text-xs text-[#52657b]">
                        Telefon ve WhatsApp üzerinden servis planlaması
                      </p>
                    </div>
                  </div>
                </div>
              </VoraReveal>
            </div>
          </div>
        </section>

        <section
          id="ilceler"
          className="scroll-mt-28 border-y border-[#dbe5ee] bg-[#eef5fb] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
          aria-labelledby="ilceler-baslik"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0068c9]">
                  HİZMET BÖLGELERİMİZ
                </p>
                <h2
                  id="ilceler-baslik"
                  className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
                >
                  İlçenizi seçin.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#52657b]">
                Servis uygunluğu adres, cihaz tipi ve randevu durumuna göre
                değerlendirilir. Planlama için ekibimizle iletişime
                geçebilirsiniz.
              </p>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
              {istanbulIlceleri.map((ilce, index) => (
                <Link
                  key={ilce.slug}
                  href={`/istanbul/${ilce.slug}`}
                  className="group flex min-h-24 items-center gap-4 border-t border-[#d3deea] py-5 transition hover:border-[#0068c9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068c9]"
                >
                  <span className="text-[10px] font-medium tabular-nums text-[#64748b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-medium tracking-tight">
                      {ilce.name}
                    </span>
                    <span className="mt-1 block text-[11px] text-[#52657b]">
                      Kombi · Klima · Petek
                    </span>
                  </span>
                  <ArrowRight
                    size={19}
                    className="text-[#0068c9] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[#00d9ff] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
          aria-labelledby="bolge-iletisim"
        >
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
                BİRLİKTE PLANLAYALIM
              </p>
              <h2
                id="bolge-iletisim"
                className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl"
              >
                İlçeniz ve cihazınız.
                <br />
                Gerisini birlikte konuşalım.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+905365281116"
                className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#0b2343] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#17496b]"
              >
                <Phone size={17} /> 0536 528 11 16
              </a>
              <Link
                href="/#servis-talebi"
                className="inline-flex min-h-13 items-center justify-center gap-5 rounded-full border border-[#0b2343]/35 px-6 py-3 text-sm font-medium transition hover:bg-white/25"
              >
                Servis talebi oluştur <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <VoraFooter />
    </>
  );
}
