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

// Kombi sayfasinda yalnizca ilgili marka adlarini goster.
// Liste yetkili/ureticinin resmi servisi olma iddiasi degildir.
const kombiBrands = [
  "Bosch", "Buderus", "Vaillant", "DemirDöküm", "Baymak", "E.C.A.",
  "Viessmann", "Ariston", "Ferroli", "Protherm", "Warmhaus", "Airfel",
  "Alarko", "Immergas", "Baxi",
];

export default function VoraBrandsMarquee({ service = "all" }: { service?: "all" | "kombi" }) {
  const isKombi = service === "kombi";
  const displayedBrands = isKombi ? kombiBrands : brands;
  return (
    <section
      id="markalar"
      aria-labelledby="markalar-baslik"
      className="relative isolate w-full overflow-hidden border-y border-[#dbe5ee] bg-[#eef5fb] py-12 text-[#0b2343] sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="mb-7 flex flex-col items-start justify-between gap-5 sm:mb-9 lg:flex-row lg:items-end lg:gap-8">
          <div className="min-w-0 max-w-3xl">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.19em] text-[#0068c9] sm:text-xs">
              VORA TEKNİK SERVİS
            </p>
            <h2
              id="markalar-baslik"
              className="text-[clamp(1.65rem,3vw,2.55rem)] font-medium leading-[1.12] tracking-[-0.04em] text-[#0b2343]"
            >
              {isKombi ? "Kombi Servisi" : "Servis Verilen"} <span className="text-[#0068c9]">{isKombi ? "Markaları" : "Markalar"}</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#52657b] sm:text-base">
              {isKombi
                ? "Bosch, Vaillant, Buderus ve diğer kombi markalarında bakım ve arıza tespiti taleplerini marka ve modele göre değerlendiriyoruz."
                : "Kombi, klima ve petek/radyatör sistemleri için marka ve modele göre servis taleplerini değerlendiriyoruz."}
            </p>
          </div>

          <Link
            href="/#servis-talebi"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-[#0b2343]/25 px-5 py-2.5 text-sm font-medium text-[#0b2343] transition hover:border-[#0068c9] hover:bg-[#00d9ff]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068c9]"
          >
            {isKombi ? "Kombi Markamı Sor" : "Markamı Sor"} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Tek şerit: eşit iki kopya ile kesintisiz CSS animasyonu. */}
        <div className="vora-brand-viewport relative w-full min-w-0" aria-label={isKombi ? "Kombi servis markaları" : "Teknik servis markaları"}>
          <div className="vora-brand-track" style={{ animationDuration: isKombi ? "48s" : "85s" }}>
            {[false, true].map((duplicate) => (
              <ul
                key={duplicate ? "tekrar" : "markalar"}
                aria-hidden={duplicate}
                className="vora-brand-cluster"
              >
                {displayedBrands.map((brand) => (
                  <li
                    key={brand}
                    className="flex min-h-16 shrink-0 items-center justify-center whitespace-nowrap border-r border-[#d3deea] px-6 py-3 text-lg font-semibold tracking-tight text-[#243f5b] sm:px-8 sm:text-xl lg:px-10 lg:text-2xl"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-[#dbe5ee] pt-5 sm:flex-row sm:items-center sm:gap-6">
          <p className="max-w-4xl text-xs leading-relaxed text-[#52657b] sm:text-sm">
            Marka isimleri ilgili üreticilere aittir. Listede yer almak yetkili servislik
            veya üretici iş ortaklığı anlamına gelmez. Hizmet kapsamı marka ve modele göre teyit edilir.
          </p>
          <a
            href="tel:+905388188236"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 self-start text-sm font-bold text-[#0068c9] transition-colors hover:text-[#0b2343] sm:self-auto"
          >
            <Phone size={16} aria-hidden="true" /> 0538 818 82 36
          </a>
        </div>
      </div>
    </section>
  );
}
