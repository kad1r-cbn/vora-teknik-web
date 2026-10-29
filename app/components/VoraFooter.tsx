import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import VoraBrandsMarquee from "./VoraBrandsMarquee";

const services = [
  { href: "/kombi-servisi", label: "Kombi servisi" },
  { href: "/klima-servisi", label: "Klima servisi" },
  { href: "/petek-temizligi", label: "Petek temizliği" },
  { href: "/hizmet-bolgeleri", label: "Tüm hizmet bölgeleri" },
  { href: "/blog", label: "Blog ve bakım rehberleri" },
];

const districts = [
  { slug: "bahcelievler", name: "Bahçelievler" },
  { slug: "bakirkoy", name: "Bakırköy" },
  { slug: "bagcilar", name: "Bağcılar" },
  { slug: "besiktas", name: "Beşiktaş" },
  { slug: "kadikoy", name: "Kadıköy" },
  { slug: "uskudar", name: "Üsküdar" },
];

const linkClass =
  "inline-flex min-h-9 items-center text-sm text-[#f6faff]/65 transition-colors hover:text-[#00d9ff] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]";

export default function VoraFooter() {
  return (
    <>
      <VoraBrandsMarquee />
      <footer className="overflow-hidden bg-[#000d26] text-[#f6faff]">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-7 border-b border-[#f6faff]/15 pb-12 sm:pb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-[#00d9ff] uppercase">
                Bir telefon kadar yakınız
              </p>
              <h2 className="max-w-2xl text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1.05] font-medium tracking-[-0.055em]">
                Evinizin konforu
                <br />
                iyi ellerde olsun.
              </h2>
            </div>
            <Link
              href="/#servis-talebi"
              className="group inline-flex min-h-14 items-center gap-8 rounded-full bg-[#00d9ff] px-6 py-4 text-sm font-semibold text-[#000d26] transition-colors hover:bg-[#7deaff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]"
            >
              Servis talebi oluştur
              <ArrowUpRight
                size={21}
                strokeWidth={1.7}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-10 py-12 sm:py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:gap-12">
            <div className="col-span-2 lg:col-span-1">
              <Link
                href="/"
                aria-label="Vora Teknik ana sayfa"
                className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]"
              >
                <Image
                  src="/images/vora-logo-header.webp"
                  alt="Vora Kombi Klima Teknik Servis"
                  width={900}
                  height={409}
                  sizes="184px"
                  className="h-auto w-[184px] object-contain"
                />
              </Link>
              <p className="mt-5 max-w-[270px] text-sm leading-7 text-[#f6faff]/65">
                Kombi, klima ve petek bakımında, İstanbul&apos;daki evlerin
                konforu için çalışıyoruz.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs text-[#00d9ff]">
                <span
                  className="size-1.5 rounded-full bg-[#00d9ff]"
                  aria-hidden="true"
                />{" "}
                İstanbul geneli servis planlaması
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold tracking-[0.15em] uppercase">
                Hizmetlerimiz
              </h3>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className={linkClass}>
                      {service.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://maps.app.goo.gl/qCyBbZmu6GyEoBWL9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vora Teknik Google yorumlarını görüntüle, yeni sekmede açılır"
                    className={`${linkClass} gap-1.5`}
                  >
                    Yorumları görüntüle
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold tracking-[0.15em] uppercase">
                İstanbul&apos;dayız
              </h3>
              <ul className="space-y-1">
                {districts.map((district) => (
                  <li key={district.slug}>
                    <Link
                      href={`/istanbul/${district.slug}`}
                      className={linkClass}
                    >
                      {district.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h3 className="mb-4 text-[11px] font-semibold tracking-[0.15em] uppercase">
                İletişim
              </h3>
              <address className="space-y-4 not-italic">
                <a
                  href="tel:+905365281116"
                  className="flex w-fit items-center gap-3 text-lg font-medium tracking-[-0.03em] transition-colors hover:text-[#00d9ff] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]"
                >
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> 0536
                  528 11 16
                </a>
                <a
                  href="tel:+905388188236"
                  className="flex w-fit items-center gap-3 text-lg font-medium tracking-[-0.03em] transition-colors hover:text-[#00d9ff] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]"
                >
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> 0538
                  818 82 36
                </a>
                <p className="flex items-start gap-3 pt-1 text-sm leading-7 text-[#f6faff]/65">
                  <MapPin
                    size={17}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-1.5 shrink-0"
                  />
                  <span>
                    Kocasinan Merkez Mah. Irmak Sokak
                    <br />
                    Bahçelievler / İstanbul
                  </span>
                </p>
              </address>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-[#f6faff]/15 py-6 text-[11px] text-[#f6faff]/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Vora Teknik Servis. Tüm hakları
              saklıdır.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <p>Kombi · Klima · Petek</p>
              <Link
                href="/fotograf-kaynaklari.html"
                className="inline-flex min-h-9 items-center gap-1.5 text-[#f6faff]/65 transition-colors hover:text-[#00d9ff] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]"
              >
                Görsel kaynakları <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
