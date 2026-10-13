'use client';

import Link from 'next/link';
import Image from 'next/image';
import { VoraReveal, VoraScrollProgress } from '../components/VoraScrollEffects';
import VoraHeader from '../components/VoraHeader';
import { useState } from 'react';
import {
  Phone,
  MapPin,
  Droplets,
  Wrench,
  Clock,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Settings,
  Thermometer,
} from 'lucide-react';

const faqs = [
  {
    q: 'Petek temizliği ne zaman yapılmalıdır?',
    a: 'Peteklerin ısınma performansının düştüğü, bazı peteklerin diğerlerine göre daha soğuk kaldığı veya ısıtma sisteminin verimli çalışmadığı durumlarda tesisatın kontrol edilmesi ve gerekirse petek temizliği yapılması değerlendirilebilir.',
  },
  {
    q: 'Peteklerin üstü sıcak, altı soğuksa ne yapılmalıdır?',
    a: 'Peteklerdeki sıcaklık dağılımının farklı olması hava, tesisat akışı, kirlenme veya başka teknik nedenlerle ilişkili olabilir. Kesin nedenin belirlenmesi için sistemin ve peteklerin kontrol edilmesi gerekir.',
  },
  {
    q: 'Petek temizliği kombiye zarar verir mi?',
    a: 'Uygun ekipman ve doğru uygulama ile yapılan temizlik işlemi sistemin bakımına yardımcı olabilir. Kullanılacak yöntem tesisatın durumuna göre belirlenmelidir.',
  },
  {
    q: 'Petek temizliği kaç saat sürer?',
    a: 'İşlem süresi petek sayısı, tesisatın durumu ve sistemin yapısına göre değişebilir. Servis öncesinde mevcut sistem değerlendirilerek yaklaşık işlem süresi hakkında bilgi verilebilir.',
  },
  {
    q: 'Petek temizliği kombi bakımının yerine geçer mi?',
    a: 'Hayır. Petek ve tesisat temizliği ile kombi bakımı farklı işlemlerdir. Petek temizliği ısıtma tesisatının durumuna odaklanırken kombi bakımı cihazın kendi çalışma ve güvenlik kontrollerini kapsar.',
  },
];

export default function PetekTemizligiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-vora-bg text-white">
      <VoraScrollProgress />

      {/* HEADER + NAVBAR */}
      <VoraHeader active="petek" />

      {/* BREADCRUMB */}
      <nav
        aria-label="Sayfa yolu"
        className="w-full bg-slate-950 border-b border-slate-800"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 py-4 text-sm text-slate-400 sm:px-8 lg:px-12 2xl:px-16">
          <Link
            href="/"
            className="hover:text-cyan-400 transition-colors"
          >
            Ana Sayfa
          </Link>

          <span className="mx-2 text-slate-600">/</span>

          <span className="text-slate-200">
            Petek Temizliği
          </span>
        </div>
      </nav>

      {/* HERO - VORA_SERVIS_HERO_V2 */}
      <section className="relative isolate overflow-hidden bg-vora-bg">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-24 top-4 h-80 w-80 rounded-full bg-vora-primary/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-vora-cyan/10 blur-3xl" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#05132B]/85" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-14 lg:px-12 lg:py-24 2xl:px-16">
          <div className="min-w-0 max-w-[780px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#071B36]/80 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 backdrop-blur-sm sm:text-sm">
              <Droplets size={17} className="text-vora-cyan" />
              İstanbul Petek Temizliği
            </div>
            <h1 className="text-[clamp(2.35rem,5vw,4.7rem)] font-black leading-[1.06] tracking-[-0.04em] text-white">
              İstanbul Petek Temizliği
              <span className="mt-3 block text-vora-cyan">Isıtma Sistemleri İçin Bakım ve Temizlik</span>
            </h1>
            <p className="mt-7 max-w-[700px] text-base font-medium leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              Vora Teknik Servis, İstanbul genelinde petek ve ısıtma tesisatı temizliği için servis planlaması yapar. Peteklerin ısıtma performansındaki sorunların değerlendirilmesi ve tesisatın kontrol edilmesi için teknisyen desteği sağlıyoruz.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:+905365281116" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-vora-cyan px-6 py-3 text-base font-extrabold text-vora-bg shadow-lg shadow-cyan-950/20 transition hover:bg-[#72edff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Phone size={19} /> Petek Servisi Ara
              </a>
              <a href="https://wa.me/905365281116" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-cyan-400/60 bg-vora-bg/65 px-6 py-3 text-base font-bold text-white transition hover:bg-cyan-900/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                WhatsApp'tan Yazın <ArrowRight size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-200">
              Alternatif çağrı hattı: <a href="tel:+905388188236" className="text-vora-cyan underline-offset-4 hover:underline">0538 818 82 36</a>
            </p>
            <p className="mt-7 flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle size={18} className="shrink-0 text-vora-cyan" />
              İstanbul genelinde telefon ve WhatsApp üzerinden servis talebi
            </p>
          </div>

          <VoraReveal className="w-full min-w-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/20 bg-white/10 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.32)]">
              <div className="relative h-[250px] overflow-hidden rounded-[22px] bg-[#142d46] sm:h-[365px] lg:h-[470px] xl:h-[490px]">
                <Image src="/images/hizmet-petek.webp" alt="Modern yaşam alanındaki petek ve radyatör sistemi" fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-vora-bg/75 via-vora-bg/15 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-[#00142C]/70 px-4 py-3 backdrop-blur-md sm:right-auto">
                <p className="text-xs font-semibold tracking-widest text-cyan-200">VORA TEKNİK SERVİS</p>
                <p className="mt-1 text-base font-bold text-white">Petek ve Tesisat Temizliği</p>
              </div>
            </div>
          </VoraReveal>
        </div>
      </section>

      {/* SERVICES */}
      <VoraReveal>
      <section className="bg-white text-slate-900 py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Petek ve Isıtma Tesisatı Hizmetleri
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Peteklerin çalışma durumuna ve tesisatın ihtiyaçlarına göre
              kontrol, temizlik ve servis planlaması yapılabilir.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Droplets,
                title: 'Petek Temizliği',
                text: 'Petek ve ısıtma tesisatının durumuna göre temizlik işleminin planlanması.',
              },
              {
                icon: Wrench,
                title: 'Tesisat Kontrolü',
                text: 'Isıtma sistemindeki akış ve çalışma problemlerinin teknik olarak incelenmesi.',
              },
              {
                icon: Thermometer,
                title: 'Isınma Problemleri',
                text: 'Peteklerin yeterince ısınmaması veya düzensiz ısınması gibi problemlerin değerlendirilmesi.',
              },
              {
                icon: Settings,
                title: 'Sistem Kontrolü',
                text: 'Petek, bağlantılar ve ısıtma sisteminin genel çalışma durumunun kontrol edilmesi.',
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-cyan-300 hover:shadow-xl transition-all"
                >

                  <div className="w-14 h-14 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-5">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>
      </VoraReveal>

      {/* COMMON PROBLEMS */}
      <VoraReveal>
      <section className="bg-slate-50 text-slate-900 py-20 border-y border-slate-200">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <div className="inline-flex items-center gap-2 text-cyan-600 font-bold mb-4">
                <AlertTriangle size={20} />
                Sık Karşılaşılan Petek Sorunları
              </div>

              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Peteklerinizde bu sorunlardan biri mi var?
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Peteklerin yeterince ısınmaması veya ısı dağılımının
                düzensiz olması farklı nedenlerden kaynaklanabilir. Sorunun
                kaynağını belirlemek için peteklerin ve ısıtma sisteminin
                kontrol edilmesi gerekir.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  'Petekler ısınmıyor',
                  'Peteklerin altı soğuk',
                  'Peteklerin üstü soğuk',
                  'Bazı petekler ısınmıyor',
                  'Peteklerde dengesiz ısı',
                  'Kombi çalışıyor ancak ev ısınmıyor',
                  'Tesisatta ses oluşuyor',
                  'Isıtma performansı düştü',
                ].map((problem) => (

                  <div
                    key={problem}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 font-bold"
                  >
                    <CheckCircle
                      size={18}
                      className="text-cyan-500 shrink-0"
                    />

                    {problem}
                  </div>

                ))}

              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <Clock size={32} />
              </div>

              <h3 className="text-2xl font-black text-white mb-4">
                Petek Temizliği Servisi Oluşturun
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8">
                Peteklerdeki problemi kısaca anlatabilir veya doğrudan
                servis ekibimizle iletişime geçebilirsiniz. Adres, petek
                sayısı ve sistem bilgilerinize göre servis planlaması yapılır.
              </p>

              <div className="space-y-4">

                <a
                  href="tel:+905365281116"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-black transition-colors"
                >
                  <Phone size={20} />
                  0536 528 11 16
                </a>

                <Link
                  href="/#servis-talebi"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-black transition-colors"
                >
                  Online Servis Talebi
                  <ArrowRight size={20} />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
      </VoraReveal>

      {/* PROCESS */}
      <VoraReveal>
      <section className="bg-white text-slate-900 py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-350 mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Petek Temizliği Servis Süreci
            </h2>

            <p className="text-slate-600 text-lg">
              Servis talebinden tesisat kontrolüne kadar temel süreç.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                number: '01',
                title: 'Servis Talebi',
                text: 'Telefon, WhatsApp veya servis talep formu üzerinden petek ve ısıtma sistemi hakkında bilgi verilir.',
              },
              {
                number: '02',
                title: 'Sistem Kontrolü',
                text: 'Peteklerin çalışma durumu, tesisat yapısı ve belirtilen ısınma problemi değerlendirilir.',
              },
              {
                number: '03',
                title: 'Temizlik ve Servis',
                text: 'Gerekli işlem hakkında bilgi verildikten sonra uygun temizlik veya servis işlemi planlanır.',
              },
            ].map((step) => (

              <div
                key={step.number}
                className="relative border border-slate-200 rounded-2xl p-8 bg-slate-50"
              >

                <span className="text-5xl font-black text-cyan-100">
                  {step.number}
                </span>

                <h3 className="text-xl font-black mt-4 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {step.text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>
      </VoraReveal>

      {/* RELATED SERVICES */}
      <section className="bg-slate-900 py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Diğer Teknik Servis Hizmetleri
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Kombi ve klima servis hizmetlerimizi de inceleyebilirsiniz.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/kombi-servisi"
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-cyan-500 hover:-translate-y-1 transition-all"
            >

              <div className="flex items-center justify-between gap-5">

                <div>

                  <div className="text-cyan-400 font-bold mb-2">
                    Kombi Servisi
                  </div>

                  <h3 className="text-xl font-black text-white mb-2">
                    İstanbul Kombi Servisi
                  </h3>

                  <p className="text-slate-400">
                    Kombi bakım, arıza tespiti ve onarım hizmetleri.
                  </p>

                </div>

                <ArrowRight
                  className="text-cyan-500 group-hover:translate-x-1 transition-transform"
                  size={25}
                />

              </div>
            </Link>

            <Link
              href="/klima-servisi"
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-cyan-500 hover:-translate-y-1 transition-all"
            >

              <div className="flex items-center justify-between gap-5">

                <div>

                  <div className="text-cyan-400 font-bold mb-2">
                    Klima Servisi
                  </div>

                  <h3 className="text-xl font-black text-white mb-2">
                    İstanbul Klima Servisi
                  </h3>

                  <p className="text-slate-400">
                    Klima bakım, arıza tespiti ve montaj hizmetleri.
                  </p>

                </div>

                <ArrowRight
                  className="text-cyan-500 group-hover:translate-x-1 transition-transform"
                  size={25}
                />

              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-slate-950 py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <MapPin className="text-cyan-500" />

                <span className="text-cyan-400 font-bold">
                  Servis Bölgesi
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                Bahçelievler ve İstanbul'da Petek Temizliği
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg">
                Vora Teknik Servis, İstanbul'un
                farklı ilçelerinde petek ve ısıtma sistemi servis taleplerini
                planlamaktadır. Servis uygunluğu adres, yoğunluk ve randevu
                durumuna göre değişebilir.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-3">

              {[
                'Bahçelievler',
                'Bakırköy',
                'Bağcılar',
                'Güngören',
                'Esenler',
                'Zeytinburnu',
                'Fatih',
                'Şişli',
                'Beşiktaş',
                'Kâğıthane',
                'Kadıköy',
                'Üsküdar',
              ].map((district) => (

                <div
                  key={district}
                  className="flex items-center gap-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3"
                >

                  <span className="w-2 h-2 rounded-full bg-cyan-500" />

                  {district} petek temizliği

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white text-slate-900 py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-275 mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Petek Temizliği Hakkında Sıkça Sorulan Sorular
            </h2>

            <p className="text-slate-500">
              Petek temizliği ve ısıtma sistemi hakkında sık sorulan sorular.
            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="border border-slate-200 rounded-2xl overflow-hidden"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="w-full p-5 flex items-center justify-between gap-5 text-left font-bold hover:bg-slate-50 transition-colors"
                  >

                    <span>{faq.q}</span>

                    <ChevronDown
                      size={22}
                      className={`shrink-0 transition-transform ${
                        isOpen
                          ? 'rotate-180 text-cyan-500'
                          : 'text-slate-400'
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-cyan-700 to-cyan-600 py-16">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-325 mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
            Petek Temizliği Desteğine mi İhtiyacınız Var?
          </h2>

          <p className="text-cyan-50 text-lg max-w-2xl mx-auto mb-8">
            Peteklerinizdeki problemi anlatın veya doğrudan servis ekibimizle
            iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="tel:+905365281116"
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-black hover:bg-slate-100 transition-colors"
            >
              <Phone size={20} />
              0536 528 11 16
            </a>

            <Link
              href="/#servis-talebi"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-slate-800 transition-colors"
            >
              Online Servis Talebi
              <ArrowRight size={20} />
            </Link>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <div>

              <Link
                href="/"
                className="text-2xl font-extrabold text-white"
              >
                Vora<span className="text-cyan-500">Teknik</span>
              </Link>

              <p className="text-slate-500 text-sm mt-3">
                İstanbul kombi, klima ve petek servis hizmetleri.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href="tel:+905365281116" className="inline-flex items-center gap-2 text-slate-300 hover:text-vora-cyan"><Phone size={16} /> 0536 528 11 16</a>
                <a href="tel:+905388188236" className="inline-flex items-center gap-2 text-slate-300 hover:text-vora-cyan"><Phone size={16} /> 0538 818 82 36</a>
                <span className="text-xs font-semibold text-cyan-200">Her gün 00:00–23:59</span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm">

              <Link
                href="/"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Ana Sayfa
              </Link>

              <Link
                href="/kombi-servisi"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Kombi Servisi
              </Link>

              <Link
                href="/klima-servisi"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Klima Servisi
              </Link>

              <Link
                href="/petek-temizligi"
                className="text-cyan-400 font-semibold transition-colors"
              >
                Petek Temizliği
              </Link>

              <Link
                href="/#servis-talebi"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                İletişim
              </Link>

              <Link href="/hizmet-bolgeleri" className="text-slate-400 hover:text-vora-cyan transition-colors">Hizmet Bölgelerimiz</Link>
              </div>

          </div>

          <div className="border-t border-slate-800 mt-8 pt-6">

            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Vora Teknik Servis. Tüm hakları
              saklıdır.
            </p>

          </div>

        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/905365281116"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden Vora Teknik Servis ile iletişime geç"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <Phone size={27} />
      </a>

    </main>
  );
}