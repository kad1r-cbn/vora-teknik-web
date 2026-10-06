'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Phone,
  MapPin,
  Flame,
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
} from 'lucide-react';

const faqs = [
  {
    q: 'Kombi bakımı ne zaman yapılmalıdır?',
    a: 'Kombi bakımının düzenli olarak yapılması, cihazın çalışma durumunun kontrol edilmesi ve olası sorunların erken fark edilmesi açısından önemlidir. Özellikle kış sezonu öncesinde bakım planlanabilir.',
  },
  {
    q: 'Kombi arızasında servis süreci nasıl ilerler?',
    a: 'Servis talebiniz alındıktan sonra cihazın bulunduğu adres ve arıza bilgisi değerlendirilir. Teknisyen tarafından cihaz kontrol edilir, arıza tespiti yapılır ve gerekli işlem hakkında bilgi verilir.',
  },
  {
    q: 'Kombi su akıtıyorsa ne yapılmalıdır?',
    a: 'Kombinin su basıncı, bağlantıları ve ilgili parçaları kontrol edilmelidir. Su kaçağının kaynağı bilinmeden cihaz üzerinde parça değişimi yapılması önerilmez.',
  },
  {
    q: 'Kombi neden çalışmıyor olabilir?',
    a: 'Elektrik beslemesi, gaz bağlantısı, su basıncı, ateşleme sistemi veya cihazın güvenlik sensörleri gibi farklı nedenler kombinin çalışmamasına yol açabilir. Kesin neden için teknik kontrol gerekir.',
  },
  {
    q: 'Hangi kombi markalarına servis veriyorsunuz?',
    a: 'Vora Teknik Servis olarak servis planlamamız kapsamında Bosch, Vaillant, Demirdöküm, Baymak, E.C.A. ve Buderus gibi markalarla çalışıyoruz. Marka ve modele göre servis kapsamını önceden teyit edebilirsiniz.',
  },
];

export default function KombiServisiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* HEADER + NAVBAR */}
      <header className="w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-100">

        <div className="w-full px-6 lg:px-20 2xl:px-32 py-4">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white"
            >
              Vora<span className="text-cyan-500">Teknik</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2">

              <Link
                href="/"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Ana Sayfa
              </Link>

              <Link
                href="/kombi-servisi"
                className="px-4 py-2.5 rounded-lg text-white bg-slate-800 hover:bg-slate-700 font-semibold transition-colors"
              >
                Kombi Servisi
              </Link>

              <Link
                href="/klima-servisi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Klima Servisi
              </Link>

              <Link
                href="/petek-temizligi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Petek Temizliği
              </Link>

              <a
                href="/#servis-talebi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                İletişim
              </a>

            </nav>

            {/* DESKTOP PHONE */}
            <div className="hidden lg:flex items-center gap-4">

              <a
                href="tel:+905365281116"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-bold"
              >
                <Phone size={18} className="text-cyan-500" />
                0536 528 11 16
              </a>

              <a
                href="tel:+905365281116"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-lg font-black transition-colors"
              >
                <Phone size={17} />
                Hemen Ara
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'
              }
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

          {/* MOBILE NAV */}
          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-2 border-t border-slate-800 mt-4">

              <nav className="flex flex-col gap-2">

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-bold transition-colors"
                >
                  Ana Sayfa
                </Link>

                <Link
                  href="/kombi-servisi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-slate-800 text-white font-bold"
                >
                  Kombi Servisi
                </Link>

                <Link
                  href="/klima-servisi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-slate-800 text-white font-bold"
                >
                  Klima Servisi
                </Link>

                <Link
                  href="/petek-temizligi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-bold transition-colors"
                >
                  Petek Temizliği
                </Link>

                <a
                  href="/#servis-talebi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-bold transition-colors"
                >
                  İletişim
                </a>

                <a
                  href="tel:+905365281116"
                  className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-3 rounded-xl font-black mt-2"
                >
                  <Phone size={18} />
                  0536 528 11 16
                </a>

              </nav>

            </div>
          )}

        </div>
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
          <span className="text-slate-200">Kombi Servisi</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-6 lg:px-20 2xl:px-32 py-16 lg:py-24 max-w-[1800px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-cyan-950/70 border border-cyan-800 text-cyan-400 px-4 py-2 rounded-full text-sm font-bold mb-7">
              <Flame size={17} />
              İstanbul Kombi Servisi
            </div>

            <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-black leading-tight mb-7">
              İstanbul Kombi Servisi
              <br />
              <span className="text-cyan-500">
                Bakım, Arıza Tespiti ve Onarım
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Vora Teknik Servis, Bahçelievler merkezli olarak İstanbul
              genelinde kombi bakım, arıza tespiti ve onarım hizmetleri için
              servis planlaması yapar. Kombinizde yaşadığınız sorunu
              teknisyen kontrolüyle değerlendirerek uygun servis sürecini
              oluşturuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:+905365281116"
                className="inline-flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-7 py-4 rounded-xl font-black transition-all shadow-lg shadow-cyan-500/20"
              >
                <Phone size={20} />
                Kombi Servisi Ara
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

      {/* SERVICE FEATURES */}
      <section className="bg-white text-slate-900 py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Kombi Servis Hizmetleri
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Kombinizin bakım ve onarım ihtiyacına göre farklı servis
              işlemleri planlanabilir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: 'Arıza Tespiti',
                text: 'Çalışmama, ateşleme, basınç ve benzeri sorunların teknik kontrolü.',
              },
              {
                icon: Settings,
                title: 'Kombi Bakımı',
                text: 'Cihazın çalışma durumunun ve temel bileşenlerinin kontrol edilmesi.',
              },
              {
                icon: Flame,
                title: 'Isıtma Sorunları',
                text: 'Kombinin yeterli ısıtmaması veya sıcak suyla ilgili problemlerin incelenmesi.',
              },
              {
                icon: ShieldCheck,
                title: 'Parça Değişimi',
                text: 'Arızalı parçaların tespit edilmesi ve uygun parça değişiminin planlanması.',
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

                  <h3 className="text-xl font-black mb-3">{item.title}</h3>

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
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold mb-4">
                <AlertTriangle size={20} />
                Sık Karşılaşılan Kombi Sorunları
              </div>

              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Kombinizde bu sorunlardan biri mi var?
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Kombilerde aynı belirti farklı teknik nedenlerden
                kaynaklanabilir. Bu nedenle yalnızca hata koduna bakarak parça
                değişimi yapmak yerine cihazın kontrol edilmesi gerekir.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Kombi çalışmıyor',
                  'Kombi su akıtıyor',
                  'Petekler ısınmıyor',
                  'Sıcak su gelmiyor',
                  'Kombi basıncı düşüyor',
                  'Ateşleme problemi',
                  'Kombi ses yapıyor',
                  'Hata kodu veriyor',
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
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                <Clock size={32} />
              </div>

              <h3 className="text-2xl font-black text-white mb-4">
                Servis Talebinizi Oluşturun
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8">
                Kombinizdeki problemi kısaca anlatabilir veya doğrudan
                servis ekibimizle iletişime geçebilirsiniz. Adres ve cihaz
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

      {/* HOW IT WORKS */}
      <section className="bg-white text-slate-900 py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Kombi Servis Süreci
            </h2>

            <p className="text-slate-600 text-lg">
              Servis talebinden işlem tamamlanmasına kadar temel süreç.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Servis Talebi',
                text: 'Telefon, WhatsApp veya servis talep formu üzerinden iletişime geçilir.',
              },
              {
                number: '02',
                title: 'Teknik Kontrol',
                text: 'Cihazın durumu ve belirtilen arıza teknisyen tarafından değerlendirilir.',
              },
              {
                number: '03',
                title: 'İşlem ve Bilgilendirme',
                text: 'Gerekli işlem ve maliyet hakkında bilgi verildikten sonra servis işlemi planlanır.',
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
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Servis Verilen Kombi Markaları
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              Marka ve modele göre servis kapsamını önceden teyit ederek
              planlama yapabilirsiniz.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                'BOSCH',
                'Vaillant',
                'DemirDöküm',
                'BAYMAK',
                'E.C.A.',
                'Buderus',
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
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="text-cyan-500" />
                <span className="text-cyan-400 font-bold">
                  Servis Bölgesi
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                Bahçelievler ve İstanbul'da Kombi Servisi
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg">
                Vora Teknik Servis, Bahçelievler merkezli olarak İstanbul'un
                farklı ilçelerinde kombi servis taleplerini planlamaktadır.
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
                  {district} kombi servisi
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
              Kombi Servisi Hakkında Sıkça Sorulan Sorular
            </h2>

            <p className="text-slate-500">
              Kombi bakım ve onarım süreciyle ilgili sık sorulan sorular.
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
            Kombinizle İlgili Servis Desteğine mi İhtiyacınız Var?
          </h2>

          <p className="text-cyan-50 text-lg max-w-2xl mx-auto mb-8">
            Arızayı kısaca anlatın veya doğrudan servis ekibimizle iletişime
            geçin.
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
                href="/klima-servisi"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Klima Servisi
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