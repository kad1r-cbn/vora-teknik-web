import Link from 'next/link';
import Image from 'next/image';
import { VoraReveal, VoraScrollProgress } from '../components/VoraScrollEffects';
import VoraHeader from '../components/VoraHeader';
import VoraFooter from '../components/VoraFooter';
import { KombiV3QuickNav, KombiV3Insights } from '../components/VoraKombiV3'; // VORA_KOMBI_V3
import {
  Phone,
  MapPin,
  Flame,
  ShieldCheck,
  Wrench,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Settings,
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
  return (
    <>
      <VoraHeader active="kombi" />
    <main id="main-content" className="vora-secondary min-h-screen overflow-x-hidden bg-[#000d26] text-white">
      <VoraScrollProgress />
      {/* HEADER + NAVBAR */}

      {/* BREADCRUMB */}
      <nav
        aria-label="Sayfa yolu"
        className="w-full bg-[#000d26] border-b border-[#203b59]"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 py-4 text-sm text-[#a8bed4] sm:px-8 lg:px-12 2xl:px-16">
          <Link href="/" className="hover:text-[#00d9ff] transition-colors">
            Ana Sayfa
          </Link>
          <span className="mx-2 text-[#52657b]">/</span>
          <span className="text-[#e2e8f0]">Kombi Servisi</span>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#000d26] px-5 py-14 text-[#ffffff] sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="service-title">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-[#00d9ff]">
              <span className="h-px w-8 bg-[#00d9ff]" aria-hidden="true" /> 01 / ISITMA SİSTEMLERİ
            </p>
            <h1 id="service-title" className="max-w-2xl text-[clamp(2.6rem,5.2vw,5rem)] font-medium leading-[1.04] tracking-[-0.055em]">
              İstanbul<br />Kombi servisi.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#cbd5e1] sm:text-lg">Vora Teknik Servis, İstanbul genelinde kombi bakım, arıza tespiti ve onarım hizmetleri için servis planlaması yapar. Kombinizde yaşadığınız sorunu teknisyen kontrolüyle değerlendirerek uygun servis sürecini oluşturuyoruz.</p>
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
              <Image src="/images/hizmet-kombi.webp" alt="Modern bir evde duvara monte kombi" fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-7 pb-7 pt-24">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/80">VORA TEKNİK SERVİS</p>
                <p className="mt-3 text-3xl font-medium leading-tight tracking-[-0.04em] text-white">Sıcak bir ev,<br />özenli bir servis.</p>
              </div>
            </div>
            <p className="mt-4 flex items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#a8bed4]"><span>Kombi bakım ve onarım</span><span>İstanbul</span></p>
          </VoraReveal>
        </div>
      </section>

      <KombiV3QuickNav />

      {/* SERVICE FEATURES */}
      <VoraReveal>
      <section id="kombi-hizmetler"  className="bg-[#ffffff] text-[#0b2343] py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Kombi Servis Hizmetleri
            </h2>

            <p className="text-[#52657b] text-lg leading-relaxed">
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
                  className="bg-[#eef5fb] border border-[#dbe5ee] rounded-2xl p-7 hover:border-[#00b8f5] hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#e1f5fc] text-[#0068c9] flex items-center justify-center mb-5">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

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
      <section id="kombi-arizalar"  className="bg-[#eef5fb] text-[#0b2343] py-20 border-y border-[#dbe5ee]">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold mb-4">
                <AlertTriangle size={20} />
                Sık Karşılaşılan Kombi Sorunları
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Kombinizde bu sorunlardan biri mi var?
              </h2>

              <p className="text-[#52657b] text-lg leading-relaxed mb-8">
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
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                <Clock size={32} />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Servis Talebinizi Oluşturun
              </h3>

              <p className="text-[#a8bed4] leading-relaxed mb-8">
                Kombinizdeki problemi kısaca anlatabilir veya doğrudan
                servis ekibimizle iletişime geçebilirsiniz. Adres ve cihaz
                bilgilerinize göre servis planlaması yapılır.
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

      <KombiV3Insights />

      {/* HOW IT WORKS */}
      <VoraReveal>
      <section id="kombi-servis-sureci"  className="bg-[#ffffff] text-[#0b2343] py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-375 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Kombi Servis Süreci
            </h2>

            <p className="text-[#52657b] text-lg">
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

      {/* BRANDS - VORA_KOMBI_MARKA_SERIDI_V3_1 */}

      {/* LOCAL SEO */}
      <section className="bg-[#000d26] py-20">
        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="text-[#00d9ff]" />
                <span className="text-[#00d9ff] font-bold">
                  Servis Bölgesi
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                İstanbul’da Kombi Servisi
              </h2>

              <p className="text-[#a8bed4] leading-relaxed text-lg">
                Vora Teknik Servis, İstanbul&apos;un
                farklı ilçelerinde kombi servis taleplerini planlamaktadır.
                Servis uygunluğu adres, yoğunluk ve randevu durumuna göre
                değişebilir.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {name: 'Bahçelievler', slug: 'bahcelievler'},
                {name: 'Bakırköy', slug: 'bakirkoy'},
                {name: 'Bağcılar', slug: 'bagcilar'},
                {name: 'Güngören', slug: 'gungoren'},
                {name: 'Esenler', slug: 'esenler'},
                {name: 'Zeytinburnu', slug: 'zeytinburnu'},
                {name: 'Fatih', slug: 'fatih'},
                {name: 'Şişli', slug: 'sisli'},
                {name: 'Beşiktaş', slug: 'besiktas'},
                {name: 'Kağıthane', slug: 'kagithane'},
                {name: 'Kadıköy', slug: 'kadikoy'},
                {name: 'Üsküdar', slug: 'uskudar'},
              ].map((district) => (
                <Link
                  key={district.slug}
                  href={`/istanbul/${district.slug}/kombi-servisi`}
                  className="group flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#071e3d] px-4 py-3 text-sm font-semibold text-[#e2e8f0] transition hover:border-[#00b8f5]/35 hover:bg-[#00d9ff]/10 hover:text-white"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#00d9ff]" />
                  <span className="flex-1">{district.name} kombi servisi</span>
                  <ArrowRight size={15} className="text-[#00d9ff] opacity-65 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kombi-sss" className="bg-[#ffffff] px-5 py-20 text-[#0b2343] sm:px-8 lg:px-12 lg:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0068c9]">Aklınızdaki sorular</p>
            <h2 id="faq-heading" className="max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">Kombi servisi hakkında sıkça sorulan sorular</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#52657b]">Bakım, arıza ve servis süreciyle ilgili merak ettikleriniz.</p>
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
            Kombinizle İlgili Servis Desteğine mi İhtiyacınız Var?
          </h2>

          <p className="text-[#dcf3ff] text-lg max-w-2xl mx-auto mb-8">
            Arızayı kısaca anlatın veya doğrudan servis ekibimizle iletişime
            geçin.
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
              href="/"
              className="inline-flex items-center justify-center gap-3 bg-[#071e3d] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0b2f52] transition-colors"
            >
              Ana Sayfaya Dön
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