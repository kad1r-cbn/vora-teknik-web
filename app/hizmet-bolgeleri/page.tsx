import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { istanbulIlceleri } from "../data/istanbul-ilceleri";
import VoraHeader from "../components/VoraHeader";
import { VoraScrollProgress } from "../components/VoraScrollEffects";

export const metadata: Metadata = {
  title: "İstanbul Hizmet Bölgelerimiz | Vora Teknik Servis",
  description:
    "Vora Teknik Servis'in İstanbul genelindeki hizmet bölgelerini inceleyin. Kombi, klima ve petek temizliği servis talepleriniz için ilçe sayfanızı seçin.",
  alternates: { canonical: "/hizmet-bolgeleri" },
  openGraph: {
    title: "İstanbul Hizmet Bölgelerimiz | Vora Teknik Servis",
    description: "İstanbul'da kombi, klima ve petek temizliği servis hizmeti sunduğumuz ilçeler.",
    url: "https://vorateknik.com/hizmet-bolgeleri",
    locale: "tr_TR",
    type: "website",
    siteName: "Vora Teknik Servis",
  },
};

export default function HizmetBolgeleriPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://vorateknik.com/" },
      { "@type": "ListItem", position: 2, name: "Hizmet Bölgelerimiz", item: "https://vorateknik.com/hizmet-bolgeleri" },
    ],
  };

  return (
    <main className="min-h-screen bg-vora-bg text-white">
      <VoraScrollProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <VoraHeader active="bolgeler" />
      <section className="relative overflow-hidden border-b border-cyan-400/10 bg-vora-bg px-5 pb-16 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Sayfa yolu" className="mb-7 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-vora-cyan">Ana Sayfa</Link><span aria-hidden="true">/</span><span className="text-cyan-200">Hizmet Bölgelerimiz</span>
          </nav>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <MapPin size={17} /> İstanbul Geneli
          </div>
          <h1 className="max-w-4xl text-[clamp(2.65rem,6vw,5.6rem)] font-black leading-[1.04] tracking-[-0.04em]">
            Hizmet <span className="text-vora-cyan">Bölgelerimiz</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Vora Teknik Servis, İstanbul'un farklı ilçelerinde kombi, klima ve petek temizliği servis taleplerini planlar. İlçenizi seçerek hizmet bilgilerini inceleyebilirsiniz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3"><MapPin size={17} className="text-vora-cyan" /> {istanbulIlceleri.length} ilçe</span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3"><Clock3 size={17} className="text-vora-cyan" /> Her gün 00:00–23:59</span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3"><CheckCircle2 size={17} className="text-vora-cyan" /> Telefon ve WhatsApp ile talep</span>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8FF] px-5 py-16 text-slate-900 sm:px-8 lg:px-12 lg:py-20" aria-labelledby="ilceler-baslik">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-cyan-700">İstanbul hizmet ağı</p>
              <h2 id="ilceler-baslik" className="text-3xl font-black tracking-tight sm:text-4xl">İlçenizi seçin</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">İlçe sayfasında kombi, klima ve petek temizliği talepleriyle ilgili detaylara ulaşabilirsiniz.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            {istanbulIlceleri.map((ilce) => (
              <Link
                key={ilce.slug}
                href={`/istanbul/${ilce.slug}`}
                className="group flex min-h-18 items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 sm:px-5"
              >
                <span className="min-w-0 wrap-break-word text-sm font-extrabold text-slate-800 sm:text-base">{ilce.name}</span>
                <ArrowRight size={18} className="shrink-0 text-cyan-700 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#06182F] px-5 py-16 sm:px-8 lg:px-12" aria-labelledby="bolge-iletisim">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="bolge-iletisim" className="text-3xl font-black tracking-tight sm:text-4xl">Servis talebi oluşturun</h2>
            <p className="mt-3 max-w-xl text-slate-300">İlçeniz ve cihazınız hakkında bilgi vermek için çağrı hatlarımızdan birini arayabilir veya WhatsApp üzerinden yazabilirsiniz.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="tel:+905365281116" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-vora-cyan px-5 py-3 font-extrabold text-vora-bg transition hover:bg-cyan-200"><Phone size={18} /> 0536 528 11 16</a>
            <a href="tel:+905388188236" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-slate-800 px-5 py-3 font-extrabold text-white transition hover:bg-slate-700"><Phone size={18} /> 0538 818 82 36</a>
            <a href="https://wa.me/905365281116" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold text-white transition hover:border-cyan-300">WhatsApp <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Vora Teknik Servis • İstanbul / Bahçelievler • Her gün 00:00–23:59</p>
      </footer>
    </main>
  );
}
