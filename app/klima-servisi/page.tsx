'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Phone,
  MapPin,
  Wind,
  ShieldCheck,
  Wrench,
  Clock,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Settings,
  Menu,
  X,
  Snowflake,
} from 'lucide-react';

const faqs = [
  {
    q: 'Klima bakımı ne zaman yapılmalıdır?',
    a: 'Klima bakımının kullanım yoğunluğuna ve cihazın çalışma koşullarına göre düzenli olarak yapılması önerilir. Özellikle yoğun yaz ve kış kullanımı öncesinde cihazın kontrol edilmesi faydalı olabilir.',
  },
  {
    q: 'Klima neden yeterince soğutmuyor?',
    a: 'Yetersiz soğutmanın filtrelerin kirli olması, hava akışının engellenmesi, teknik bir arıza veya soğutucu akışkanla ilgili bir problem gibi farklı nedenleri olabilir. Kesin neden için cihazın kontrol edilmesi gerekir.',
  },
  {
    q: 'Klima gazı eksildiği nasıl anlaşılır?',
    a: 'Klimanın yeterli soğutmaması, çalışma performansının düşmesi veya bazı durumlarda borularda buzlanma görülmesi soğutucu akışkanla ilgili bir probleme işaret edebilir. Kesin tespit için teknik kontrol gerekir.',
  },
  {
    q: 'Klima montajı için servis veriyor musunuz?',
    a: 'Cihazın modeli, montaj yapılacak alan ve mevcut tesisata göre montaj hizmeti planlanabilir. Uygunluk bilgisi servis öncesinde teyit edilebilir.',
  },
  {
    q: 'Hangi klima markalarına servis veriyorsunuz?',
    a: 'Servis planlamamız kapsamında Daikin ve farklı klima markaları için bakım, arıza tespiti ve onarım talepleri değerlendirilmektedir. Marka ve modele göre servis kapsamını önceden teyit edebilirsiniz.',
  },
];

export default function KlimaServisiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-[110] w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="w-full px-6 lg:px-20 2xl:px-32 py-4 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-extrabold tracking-tight shrink-0"
          >
            Vora<span className="text-cyan-500">Teknik</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold" aria-label="Ana menü">
            <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/kombi-servisi" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Kombi Servisi
            </Link>
            <Link href="/klima-servisi" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Klima Servisi
            </Link>
            <Link href="/petek-temizligi" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Petek Temizliği
            </Link>
            <Link href="/#servis-talebi" className="text-slate-300 hover:text-cyan-400 transition-colors">
              İletişim
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+905365281116"
              className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 transition-colors font-bold"
            >
              <Phone size={18} className="text-cyan-500" />
              <span className="hidden xl:inline">0536 528 11 16</span>
            </a>
            <a
              href="tel:+905365281116"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2.5 rounded-xl font-black transition-all shadow-lg shadow-cyan-500/20"
            >
              <Phone size={17} />
              Hemen Ara
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-11 h-11 rounded-xl border border-slate-700 bg-slate-800 text-white flex items-center justify-center hover:border-cyan-500 transition-colors"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950">
            <nav className="px-6 py-4 space-y-1" aria-label="Mobil menü">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-bold">
                Ana Sayfa
              </Link>
              <Link href="/kombi-servisi" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-bold">
                Kombi Servisi
              </Link>
              <Link href="/klima-servisi" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-bold">
                Klima Servisi
              </Link>
              <Link href="/petek-temizligi" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-bold">
                Petek Temizliği
              </Link>
              <Link href="/#servis-talebi" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-bold">
                İletişim
              </Link>
              <a href="tel:+905365281116" className="mt-2 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-3 rounded-xl font-black transition-colors">
                <Phone size={18} />
                0536 528 11 16 — Hemen Ara
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* BREADCRUMB */}
      <nav
        aria-label="Sayfa yolu"
        className="w-full bg-slate-950 border-b border-slate-800"
      >
        <div className="w-full px-6 lg:px-20 2xl:px-32 py-4 text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Ana Sayfa
          </Link>

          <span className="mx-2 text-slate-600">/</span>

          <span className="text-slate-200">Klima Servisi</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-6 lg:px-20 2xl:px-32 py-16 lg:py-24 max-w-[1800px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-800 text-cyan-400 px-4 py-2 rounded-full text-sm font-bold mb-7">
              <Wind size={17} />
              İstanbul Klima Servisi
            </div>

            <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-black leading-tight mb-7">
              İstanbul Klima Servisi
              <br />
              <span className="text-cyan-500">
                Bakım, Arıza ve Montaj Hizmeti
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Vora Teknik Servis, Bahçelievler merkezli olarak İstanbul
              genelinde klima bakım, arıza tespiti, onarım ve montaj talepleri
              için servis planlaması yapar. Klimanızdaki problemi
              değerlendirmek ve uygun servis sürecini oluşturmak için
              teknisyen desteği sağlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:+905365281116"
                className="inline-flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-7 py-4 rounded-xl font-black transition-all shadow-lg shadow-cyan-500/20"
              >
                <Phone size={20} />
                Klima Servisi Ara
              </a>

              <a
                href="https://wa.me/905365281116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-7 py-4 rounded-xl font-black transition-all"
              >
                WhatsApp'tan Yazın
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white text-slate-900 py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Klima Servis Hizmetleri
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Klimanızın ihtiyacına göre bakım, arıza tespiti, onarım ve
              montaj işlemleri için servis planlaması yapılabilir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: 'Klima Arıza Tespiti',
                text: 'Çalışmama, ses, performans ve benzeri problemlerin teknik olarak incelenmesi.',
              },
              {
                icon: Settings,
                title: 'Klima Bakımı',
                text: 'Filtre, iç ünite, dış ünite ve çalışma durumunun kontrol edilmesine yönelik bakım.',
              },
              {
                icon: Snowflake,
                title: 'Soğutmama Problemi',
                text: 'Klimanın yeterli soğutmaması durumunda olası nedenlerin kontrol edilmesi.',
              },
              {
                icon: Wind,
                title: 'Klima Montajı',
                text: 'Cihaz ve montaj alanının uygunluğuna göre klima montaj hizmetinin planlanması.',
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

      {/* COMMON PROBLEMS */}
      <section className="bg-slate-50 text-slate-900 py-20 border-y border-slate-200">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-600 font-bold mb-4">
                <AlertTriangle size={20} />
                Sık Karşılaşılan Klima Sorunları
              </div>

              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Klimanızda bu sorunlardan biri mi var?
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Klima performansındaki düşüş farklı teknik nedenlerden
                kaynaklanabilir. Sorunun kaynağını belirlemek için cihazın
                çalışma koşullarının ve ilgili bileşenlerin kontrol edilmesi
                gerekir.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Klima soğutmuyor',
                  'Klima yeterince ısıtmıyor',
                  'Klima su akıtıyor',
                  'Klima ses yapıyor',
                  'Klima çalışmıyor',
                  'Klimadan kötü koku geliyor',
                  'İç ünite buzlanıyor',
                  'Dış ünite sorunları',
                ].map((problem) => (
                  <div
                    key={problem}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 font-bold"
                  >
                    <CheckCircle
                      size={18}
                      className="text-cyan-500 flex-shrink-0"
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
                Klima Servis Talebi Oluşturun
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8">
                Klimanızdaki problemi kısaca anlatabilir veya doğrudan servis
                ekibimizle iletişime geçebilirsiniz. Adres, cihaz ve arıza
                bilgilerinize göre servis planlaması yapılır.
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

      {/* PROCESS */}
      <section className="bg-white text-slate-900 py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Klima Servis Süreci
            </h2>

            <p className="text-slate-600 text-lg">
              Servis talebinden teknik kontrole kadar temel süreç.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Servis Talebi',
                text: 'Telefon, WhatsApp veya servis talep formu üzerinden klima problemi hakkında bilgi verilir.',
              },
              {
                number: '02',
                title: 'Cihaz Kontrolü',
                text: 'Klimanın çalışma durumu, cihaz tipi ve belirtilen problem teknisyen tarafından değerlendirilir.',
              },
              {
                number: '03',
                title: 'Servis İşlemi',
                text: 'Gerekli işlem ve maliyet hakkında bilgi verildikten sonra uygun servis işlemi planlanır.',
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

      {/* BRANDS */}
      <section className="bg-slate-900 py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1500px] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Servis Verilen Klima Markaları
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              Marka ve modele göre servis kapsamını önceden teyit ederek
              planlama yapabilirsiniz.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                'DAIKIN',
                'BOSCH',
                'Mitsubishi Electric',
                'BAYMAK',
                'E.C.A.',
                'Vaillant',
              ].map((brand) => (
                <div
                  key={brand}
                  className="px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-black"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-slate-950 py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="text-cyan-500" />
                <span className="text-cyan-400 font-bold">
                  Servis Bölgesi
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                Bahçelievler ve İstanbul'da Klima Servisi
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg">
                Vora Teknik Servis, Bahçelievler merkezli olarak İstanbul'un
                farklı ilçelerinde klima servis taleplerini planlamaktadır.
                Servis uygunluğu adres, yoğunluk ve randevu durumuna göre
                değişebilir.
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
                  {district} klima servisi
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white text-slate-900 py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Klima Servisi Hakkında Sıkça Sorulan Sorular
            </h2>

            <p className="text-slate-500">
              Klima bakım, arıza ve montaj süreçleriyle ilgili sık sorulan
              sorular.
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
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 flex items-center justify-between gap-5 text-left font-bold hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>

                    <ChevronDown
                      size={22}
                      className={`flex-shrink-0 transition-transform ${
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
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-600 py-16">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1300px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
            Klima Servis Desteğine mi İhtiyacınız Var?
          </h2>

          <p className="text-cyan-50 text-lg max-w-2xl mx-auto mb-8">
            Klimanızdaki problemi anlatın veya doğrudan servis ekibimizle
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
              href="/"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-slate-800 transition-colors"
            >
              Ana Sayfaya Dön
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
                href="/petek-temizligi"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Petek Temizliği
              </Link>

              <a
                href="tel:+905365281116"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                İletişim
              </a>
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