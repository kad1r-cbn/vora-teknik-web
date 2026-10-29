import Link from 'next/link';
import Image from 'next/image';
import { VoraReveal, VoraScrollProgress } from '../components/VoraScrollEffects';
import VoraHeader from '../components/VoraHeader';
import VoraFooter from '../components/VoraFooter';
import {
  Phone,
  MapPin,
  Droplets,
  Wrench,
  Clock,
  CheckCircle,
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
  return (
    <>
      <VoraHeader active="petek" />
    <main id="main-content" className="vora-secondary min-h-screen overflow-x-hidden bg-[#000d26] text-white">
      <VoraScrollProgress />

      {/* HEADER + NAVBAR */}

      {/* BREADCRUMB */}
      <nav
        aria-label="Sayfa yolu"
        className="w-full bg-[#000d26] border-b border-[#203b59]"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 py-4 text-sm text-[#a8bed4] sm:px-8 lg:px-12 2xl:px-16">
          <Link
            href="/"
            className="hover:text-[#00d9ff] transition-colors"
          >
            Ana Sayfa
          </Link>

          <span className="mx-2 text-[#52657b]">/</span>

          <span className="text-[#e2e8f0]">
            Petek Temizliği
          </span>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#000d26] px-5 py-14 text-[#ffffff] sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="service-title">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-[#00d9ff]">
              <span className="h-px w-8 bg-[#00d9ff]" aria-hidden="true" /> 03 / TESİSAT & BAKIM
            </p>
            <h1 id="service-title" className="max-w-2xl text-[clamp(2.6rem,5.2vw,5rem)] font-medium leading-[1.04] tracking-[-0.055em]">
              İstanbul<br />Petek temizliği.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#cbd5e1] sm:text-lg">Vora Teknik Servis, İstanbul genelinde petek ve ısıtma tesisatı temizliği için servis planlaması yapar. Peteklerin ısıtma performansındaki sorunların değerlendirilmesi ve tesisatın kontrol edilmesi için teknisyen desteği sağlıyoruz.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/#servis-talebi" className="inline-flex min-h-13 items-center justify-center gap-5 rounded-full bg-[#00d9ff] px-6 py-3 text-sm font-semibold text-[#000d26] transition hover:bg-[#7deaff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9ff]">
                Servis talebi oluştur <ArrowRight size={18} />
              </Link>
              <a href="tel:+905365281116" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium transition hover:bg-white/10">
                <Phone size={17} /> 0536 528 11 16
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs text-[#cbd5e1]">
              <span className="flex items-center gap-2"><CheckCircle size={15} className="text-[#00d9ff]" /> İstanbul genelinde servis planlaması</span>
              <a href="https://wa.me/905365281116" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">WhatsApp üzerinden iletişim</a>
            </div>
          </div>
          <VoraReveal className="relative min-w-0">
            <div className="relative aspect-[4/4.15] overflow-hidden rounded-2xl bg-[#0b2f52]">
              <Image src="/images/hizmet-petek.webp" alt="Aydınlık bir yaşam alanında petek radyatör" fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-7 pb-7 pt-24">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/80">VORA TEKNİK SERVİS</p>
                <p className="mt-3 text-3xl font-medium leading-tight tracking-[-0.04em] text-white">Evin her köşesine<br />dengeli sıcaklık.</p>
              </div>
            </div>
            <p className="mt-4 flex items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#a8bed4]"><span>Petek ve tesisat temizliği</span><span>İstanbul</span></p>
          </VoraReveal>
        </div>
      </section>

      {/* SERVICES */}
      <VoraReveal>
      <section className="bg-[#ffffff] text-[#0b2343] py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Petek ve Isıtma Tesisatı Hizmetleri
            </h2>

            <p className="text-[#52657b] text-lg leading-relaxed">
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
                  className="bg-[#eef5fb] border border-[#dbe5ee] rounded-2xl p-7 hover:border-[#00b8f5] hover:shadow-xl transition-all"
                >

                  <div className="w-14 h-14 rounded-xl bg-[#e1f5fc] text-[#0068c9] flex items-center justify-center mb-5">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#52657b] leading-relaxed">
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
      <section className="bg-[#eef5fb] text-[#0b2343] py-20 border-y border-[#dbe5ee]">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <div className="inline-flex items-center gap-2 text-[#0068c9] font-bold mb-4">
                <AlertTriangle size={20} />
                Sık Karşılaşılan Petek Sorunları
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Peteklerinizde bu sorunlardan biri mi var?
              </h2>

              <p className="text-[#52657b] text-lg leading-relaxed mb-8">
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
                    className="flex items-center gap-3 bg-[#ffffff] border border-[#dbe5ee] rounded-xl p-4 font-bold"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#0068c9] shrink-0"
                    />

                    {problem}
                  </div>

                ))}

              </div>
            </div>

            <div className="bg-[#071e3d] rounded-2xl p-8 lg:p-10 shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-[#00d9ff]/10 text-[#00d9ff] flex items-center justify-center mb-6">
                <Clock size={32} />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Petek Temizliği Servisi Oluşturun
              </h3>

              <p className="text-[#a8bed4] leading-relaxed mb-8">
                Peteklerdeki problemi kısaca anlatabilir veya doğrudan
                servis ekibimizle iletişime geçebilirsiniz. Adres, petek
                sayısı ve sistem bilgilerinize göre servis planlaması yapılır.
              </p>

              <div className="space-y-4">

                <a
                  href="tel:+905365281116"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#0068c9] hover:bg-[#00578d] text-white font-semibold transition-colors"
                >
                  <Phone size={20} />
                  0536 528 11 16
                </a>

                <Link
                  href="/#servis-talebi"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#0b2f52] hover:bg-[#17496b] border border-[#2c4968] text-white font-semibold transition-colors"
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
      <section className="bg-[#ffffff] text-[#0b2343] py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-350 mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Petek Temizliği Servis Süreci
            </h2>

            <p className="text-[#52657b] text-lg">
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
                className="relative border border-[#dbe5ee] rounded-2xl p-8 bg-[#eef5fb]"
              >

                <span className="text-5xl font-semibold text-[#0082b8]">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold mt-4 mb-3">
                  {step.title}
                </h3>

                <p className="text-[#52657b] leading-relaxed">
                  {step.text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>
      </VoraReveal>

      {/* RELATED SERVICES */}
      <section className="bg-[#071e3d] py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Diğer Teknik Servis Hizmetleri
            </h2>

            <p className="text-[#a8bed4] max-w-2xl mx-auto">
              Kombi ve klima servis hizmetlerimizi de inceleyebilirsiniz.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/kombi-servisi"
              className="group bg-[#0b2f52] border border-[#2c4968] rounded-2xl p-7 hover:border-[#00b8f5] hover:-translate-y-1 transition-all"
            >

              <div className="flex items-center justify-between gap-5">

                <div>

                  <div className="text-[#00d9ff] font-bold mb-2">
                    Kombi Servisi
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    İstanbul Kombi Servisi
                  </h3>

                  <p className="text-[#a8bed4]">
                    Kombi bakım, arıza tespiti ve onarım hizmetleri.
                  </p>

                </div>

                <ArrowRight
                  className="text-[#00d9ff] group-hover:translate-x-1 transition-transform"
                  size={25}
                />

              </div>
            </Link>

            <Link
              href="/klima-servisi"
              className="group bg-[#0b2f52] border border-[#2c4968] rounded-2xl p-7 hover:border-[#00b8f5] hover:-translate-y-1 transition-all"
            >

              <div className="flex items-center justify-between gap-5">

                <div>

                  <div className="text-[#00d9ff] font-bold mb-2">
                    Klima Servisi
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    İstanbul Klima Servisi
                  </h3>

                  <p className="text-[#a8bed4]">
                    Klima bakım, arıza tespiti ve montaj hizmetleri.
                  </p>

                </div>

                <ArrowRight
                  className="text-[#00d9ff] group-hover:translate-x-1 transition-transform"
                  size={25}
                />

              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-[#000d26] py-20">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <MapPin className="text-[#00d9ff]" />

                <span className="text-[#00d9ff] font-bold">
                  Servis Bölgesi
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                İstanbul’da Petek Temizliği
              </h2>

              <p className="text-[#a8bed4] leading-relaxed text-lg">
                Vora Teknik Servis, İstanbul&apos;un
                farklı ilçelerinde petek ve ısıtma sistemi servis taleplerini
                planlamaktadır. Servis uygunluğu adres, yoğunluk ve randevu
                durumuna göre değişebilir.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-3">

              {[
                { name: 'Bahçelievler', slug: 'bahcelievler' },
                { name: 'Bakırköy', slug: 'bakirkoy' },
                { name: 'Bağcılar', slug: 'bagcilar' },
                { name: 'Güngören', slug: 'gungoren' },
                { name: 'Esenler', slug: 'esenler' },
                { name: 'Zeytinburnu', slug: 'zeytinburnu' },
                { name: 'Fatih', slug: 'fatih' },
                { name: 'Şişli', slug: 'sisli' },
                { name: 'Beşiktaş', slug: 'besiktas' },
                { name: 'Kağıthane', slug: 'kagithane' },
                { name: 'Kadıköy', slug: 'kadikoy' },
                { name: 'Üsküdar', slug: 'uskudar' },
              ].map((district) => (
                <Link
                  key={district.slug}
                  href={`/istanbul/${district.slug}/petek-temizligi`}
                  className="group flex min-h-12 items-center gap-3 rounded-xl border border-[#203b59] bg-[#071e3d] px-4 py-3 text-sm text-[#cbd5e1] transition hover:border-[#00b8f5] hover:text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d9ff]" />
                  <span className="flex-1">{district.name} petek temizliği</span>
                  <ArrowRight size={15} className="text-[#00d9ff] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}

            </div>

          </div>
        </div>
      </section>

      <section id="petek-sss" className="bg-[#ffffff] px-5 py-20 text-[#0b2343] sm:px-8 lg:px-12 lg:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0068c9]">Aklınızdaki sorular</p>
            <h2 id="faq-heading" className="max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">Petek temizliği hakkında sıkça sorulan sorular</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#52657b]">Tesisatın bakımı, uygulama ve servis planlaması.</p>
          </div>
          <div className="border-t border-[#dbe5ee]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-[#dbe5ee]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-base font-medium leading-relaxed marker:content-none sm:text-lg">
                  <span>{faq.q}</span><span aria-hidden="true" className="text-2xl font-light leading-6 text-[#0068c9] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#52657b]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-[#0068c9] to-[#0b2f52] py-16">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-325 mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-5">
            Petek Temizliği Desteğine mi İhtiyacınız Var?
          </h2>

          <p className="text-[#dcf3ff] text-lg max-w-2xl mx-auto mb-8">
            Peteklerinizdeki problemi anlatın veya doğrudan servis ekibimizle
            iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="tel:+905365281116"
              className="inline-flex items-center justify-center gap-3 bg-[#ffffff] text-[#0b2343] px-8 py-4 rounded-xl font-semibold hover:bg-[#e8f2fa] transition-colors"
            >
              <Phone size={20} />
              0536 528 11 16
            </a>

            <Link
              href="/#servis-talebi"
              className="inline-flex items-center justify-center gap-3 bg-[#071e3d] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0b2f52] transition-colors"
            >
              Online Servis Talebi
              <ArrowRight size={20} />
            </Link>

          </div>
        </div>
      </section>


      {/* WHATSAPP */}
      <a
        href="https://wa.me/905365281116"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden Vora Teknik Servis ile iletişime geç"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-10 bg-[#00d9ff] text-[#000d26] p-4 rounded-full shadow-[0_4px_20px_rgba(0,217,255,0.35)] hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <Phone size={27} />
      </a>

    </main>
      <VoraFooter />
    </>
  );
}