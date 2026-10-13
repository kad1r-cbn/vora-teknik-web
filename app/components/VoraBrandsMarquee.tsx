import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

// Ayni isim tekrarlanmasin: kombi, klima ve radyator markalari tek listede.
// Marka/model bazinda servis kapsami musteri ile ayrica teyit edilir.
const brands = [
  "Bosch", "Buderus", "Vaillant", "DemirDöküm", "Baymak", "E.C.A.",
  "Viessmann", "Ariston", "Ferroli", "Protherm", "Warmhaus", "Airfel",
  "Alarko", "Immergas", "Baxi", "Daikin", "Mitsubishi Electric",
  "Mitsubishi Heavy Industries", "LG", "Samsung", "Arçelik", "Beko",
  "Vestel", "Midea", "Gree", "Toshiba", "Panasonic", "Fujitsu",
  "General", "Carrier", "Haier", "Sanica", "Copa", "Purmo",
  "Termo Teknik", "Kermi", "Korado",
];

export default function VoraBrandsMarquee() {
  return (
    <section
      id="markalar"
      aria-labelledby="markalar-baslik"
      className="relative isolate w-full overflow-hidden border-y border-cyan-400/10 bg-[#061426] py-11 text-white sm:py-14 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="mb-7 flex flex-col items-start justify-between gap-5 sm:mb-9 lg:flex-row lg:items-end lg:gap-8">
          <div className="min-w-0 max-w-3xl">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.19em] text-cyan-300 sm:text-xs">
              VORA TEKNİK SERVİS
            </p>
            <h2
              id="markalar-baslik"
              className="text-[clamp(1.65rem,3vw,2.55rem)] font-black leading-[1.12] tracking-tight text-white"
            >
              Servis Verilen <span className="text-vora-cyan">Markalar</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Kombi, klima ve petek/radyatör sistemleri için marka ve modele göre servis
              taleplerini değerlendiriyoruz.
            </p>
          </div>

          <Link
            href="/#servis-talebi"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Markamı Sor <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Tek şerit: eşit iki kopya ile kesintisiz CSS animasyonu. */}
        <div className="vora-brand-viewport relative w-full min-w-0" aria-label="Teknik servis markaları">
          <div className="vora-brand-track" style={{ animationDuration: "85s" }}>
            {[false, true].map((duplicate) => (
              <ul
                key={duplicate ? "tekrar" : "markalar"}
                aria-hidden={duplicate}
                className="vora-brand-cluster"
              >
                {brands.map((brand) => (
                  <li
                    key={brand}
                    className="flex min-h-15 shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold tracking-tight text-slate-100 shadow-sm transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white sm:min-h-17 sm:rounded-2xl sm:px-7 sm:text-base lg:px-8 lg:text-lg"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:gap-6">
          <p className="max-w-4xl text-xs leading-relaxed text-slate-400 sm:text-sm">
            Marka isimleri ilgili üreticilere aittir. Listede yer almak yetkili servislik
            veya üretici iş ortaklığı anlamına gelmez. Hizmet kapsamı marka ve modele göre teyit edilir.
          </p>
          <a
            href="tel:+905388188236"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 self-start text-sm font-bold text-cyan-200 transition-colors hover:text-white sm:self-auto"
          >
            <Phone size={16} aria-hidden="true" /> 0538 818 82 36
          </a>
        </div>
      </div>
    </section>
  );
}
