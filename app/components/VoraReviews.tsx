import { ArrowUpRight, MapPin, MessageSquareText, Star } from "lucide-react";
import { VoraReveal } from "./VoraScrollEffects";

// Public Google business profile verified on 2026-10-27 against its name,
// Irmak Sokak address, and 0536 528 11 16 phone number. The score is a dated
// snapshot; the external profile remains the source for current reviews.
const googleReviews = {
  url: "https://maps.app.goo.gl/qCyBbZmu6GyEoBWL9",
  rating: "5,0",
  count: 11,
  checkedAt: "27 Ekim 2026",
};

export default function VoraReviews() {
  return (
    <section
      id="musteri-yorumlari"
      aria-labelledby="reviews-heading"
      className="section-space border-y border-cyan-300/15 bg-[#06172b] text-white"
    >
      <div className="vora-container grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-24">
        <VoraReveal className="flex flex-col items-start gap-6">
          <span className="eyebrow text-cyan-200">MÜŞTERİ DENEYİMLERİ</span>
          <h2 id="reviews-heading">
            İyi hizmet,
            <br />
            <em className="text-cyan-200">iz bırakır.</em>
          </h2>
          <p className="max-w-md text-sm leading-7 text-slate-300 sm:text-base">
            Vora Teknik deneyimini, müşterilerimizin Google’da paylaştığı
            değerlendirmelerden inceleyin.
          </p>
          <span className="inline-flex items-center gap-2.5 text-xs text-slate-400">
            <MapPin size={16} aria-hidden="true" /> Bahçelievler / İstanbul
          </span>
        </VoraReveal>

        <VoraReveal className="flex flex-col gap-7 rounded-2xl border border-cyan-200/20 bg-[#0b2541] p-6 sm:p-9">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold tracking-wide text-white">
                Google müşteri yorumları
              </span>
              <span className="text-xs text-slate-400">
                VORA Kombi Klima Servisi
              </span>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-cyan-200/20 text-cyan-200">
              <MessageSquareText size={20} aria-hidden="true" />
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span
              className="text-6xl leading-none font-medium tracking-[-0.06em] text-white"
              aria-label="5 üzerinden 5 puan"
            >
              {googleReviews.rating}
              <span aria-hidden="true" className="ml-1 text-xl text-slate-400">
                /5
              </span>
            </span>
            <div className="flex flex-col gap-2">
              <span aria-hidden="true" className="flex gap-1 text-cyan-200">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" strokeWidth={1} />
                ))}
              </span>
              <span className="text-sm text-slate-300">
                {googleReviews.count} Google değerlendirmesi
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 border-t border-cyan-200/15 pt-6">
            <p className="text-xs leading-6 text-slate-400">
              Google profilindeki görünüm · {googleReviews.checkedAt}
              <br />
              Güncel puan ve yorumlar için işletme profilimizi ziyaret edin.
            </p>
            <a
              href={googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vora Teknik Google yorumlarını görüntüle, yeni sekmede açılır"
              className="inline-flex min-h-12 w-full items-center justify-between gap-5 rounded-lg bg-cyan-300 px-5 py-3.5 text-sm font-semibold text-[#06172b] transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:w-auto"
            >
              Yorumları görüntüle
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </VoraReveal>
      </div>
    </section>
  );
}
