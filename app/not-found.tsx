import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import VoraHeader from "./components/VoraHeader";
import VoraFooter from "./components/VoraFooter";

export default function NotFound() {
  return (
    <>
      <VoraHeader active="home" />
      <main
        id="main-content"
        className="bg-[#f6faff] px-5 py-24 text-[#000d26] sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-[#0068c9]">
            <span className="h-px w-8 bg-[#0068c9]" aria-hidden="true" /> 404 /
            SAYFA BULUNAMADI
          </p>
          <h1 className="max-w-3xl text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1.06] tracking-[-0.05em]">
            Burada bir şey yok.
            <br />
            <span className="text-[#0068c9]">Yardım ise yakın.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#52657b]">
            Bağlantı değişmiş veya adres yanlış yazılmış olabilir. Hizmet
            bölgelerimizden ilçenizi seçin ya da servis ihtiyacınız için
            ekibimizle iletişime geçin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/hizmet-bolgeleri"
              className="inline-flex min-h-13 items-center gap-6 rounded-full bg-[#00d9ff] px-6 py-3 text-sm font-semibold transition hover:bg-[#7deaff]"
            >
              Hizmet bölgelerini incele <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+905365281116"
              className="inline-flex min-h-13 items-center gap-3 rounded-full border border-[#000d26]/25 px-6 py-3 text-sm font-medium transition hover:bg-[#000d26]/5"
            >
              <Phone size={17} /> 0536 528 11 16
            </a>
          </div>
        </div>
      </main>
      <VoraFooter />
    </>
  );
}
