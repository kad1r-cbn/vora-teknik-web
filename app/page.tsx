import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Snowflake,
  Waves,
} from "lucide-react";
import VoraHeader from "./components/VoraHeader";
import VoraFooter from "./components/VoraFooter";
import VoraServiceForm from "./components/VoraServiceForm";
import VoraDistrictFinder from "./components/VoraDistrictFinder";
import VoraComfortStory from "./components/VoraComfortStory";
import VoraReviews from "./components/VoraReviews";
import {
  VoraHeroBackground,
  VoraReveal,
  VoraScrollProgress,
} from "./components/VoraScrollEffects";
import StructuredData from "./components/StructuredData";
import { createPageMetadata } from "./lib/seo";

export const metadata = createPageMetadata({
  title: "İstanbul Kombi, Klima ve Petek Servisi | Vora Teknik",
  description:
    "Evinizin konforu için kombi servisi, klima bakımı ve petek temizliği. Bahçelievler merkezli Vora Teknik ile İstanbul genelinde servis talebi oluşturun.",
  path: "/",
});

const services = [
  {
    number: "01",
    name: "Kombi servisi",
    tagline: "Sıcak bir ev. Rahat bir kış.",
    description:
      "Bakım, arıza tespiti ve ısıtma sorunları için cihazınıza uygun servis desteği.",
    href: "/kombi-servisi",
    image: "/images/hizmet-kombi.webp",
    alt: "Duvara monte modern kombi ve tesisat bağlantıları",
    Icon: Flame,
    tags: ["Bakım", "Arıza tespiti", "Onarım"],
  },
  {
    number: "02",
    name: "Klima servisi",
    tagline: "İyi hava, iyi hissettirir.",
    description:
      "Klima bakımı, montaj ve soğutma sorunları için ihtiyacınıza göre planlama.",
    href: "/klima-servisi",
    image: "/images/hizmet-klima.webp",
    alt: "Aydınlık bir oturma odasında duvara monte klima",
    Icon: Snowflake,
    tags: ["Temizlik", "Montaj", "Teknik kontrol"],
  },
  {
    number: "03",
    name: "Petek temizliği",
    tagline: "Isı, evin her köşesine.",
    description:
      "Dengesiz ısınan petekler ve tesisat akışı için sisteminize uygun değerlendirme.",
    href: "/petek-temizligi",
    image: "/images/hizmet-petek.webp",
    alt: "Güneş alan bir odada beyaz panel radyatör",
    Icon: Waves,
    tags: ["Sistem kontrolü", "Temizlik", "Isı dengesi"],
  },
];

const faqs = [
  {
    q: "Kombi bakımı ne zaman yapılmalı?",
    a: "Bakım aralığı cihazın modeline, kullanım koşullarına ve üreticinin önerilerine göre değişir. Yoğun kış kullanımı başlamadan önce kontrol planlamak, olası sorunları erkenden fark etmenize yardımcı olur. Cihazınıza uygun bakım kapsamını birlikte netleştirebiliriz.",
  },
  {
    q: "Klimam çalışıyor ama yeterince soğutmuyor. Ne yapmalıyım?",
    a: "Önce çalışma modu, sıcaklık ayarı ve filtre temizliği kontrol edilebilir. Kirli filtreler, hava akışındaki engeller veya teknik arızalar soğutmayı etkileyebilir. Sorun devam ediyorsa cihazı zorlamadan teknik kontrol talep edin; gaz dolumu her sorunun çözümü değildir.",
  },
  {
    q: "Peteklerin altı soğuksa temizlik gerekir mi?",
    a: "Dengesiz ısınma; tesisatta birikinti, hava, vana ayarı veya su dolaşımı gibi farklı nedenlerden kaynaklanabilir. Temizlik kararı vermeden önce sistemin değerlendirilmesi gerekir. Böylece ihtiyaç olmayan bir işlem yerine sorunun kaynağına odaklanılabilir.",
  },
  {
    q: "Servis ücreti nasıl belirleniyor?",
    a: "Cihazın türü, arıza veya bakım kapsamı, gereken işçilik ve varsa parça ihtiyacı ücreti etkiler. Talebinizi ilettiğinizde servis koşulları ve değerlendirme süreci hakkında bilgi alabilirsiniz. İşlem kapsamı netleşmeden kesin fiyat veya tasarruf sözü vermiyoruz.",
  },
  {
    q: "İstanbul’un hangi bölgelerinde hizmet veriyorsunuz?",
    a: "Bahçelievler merkezli olarak İstanbul’un farklı ilçelerinden kombi, klima ve petek servisi taleplerini değerlendiriyoruz. Hizmet bölgeleri sayfamızdan ilçenizi inceleyebilir, adresinize uygun servis kapsamını ve randevu durumunu telefonla teyit edebilirsiniz.",
  },
];

export default function Home() {
  return (
    <>
      <VoraScrollProgress />
      <VoraHeader active="home" />
      <main id="main-content" className="vora-home">
        <section className="vora-hero" aria-labelledby="hero-heading">
          <div className="vora-container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow hero-eyebrow">
                  <span className="status-dot" /> İSTANBUL’UN TEKNİK SERVİSİ
                </span>
                <h1 id="hero-heading">
                  Evinizin
                  <br />
                  konforuna
                  <br />
                  <em>iyi bakalım.</em>
                </h1>
                <p className="hero-description">
                  Kombi, klima ve petek servisi.
                  <br />
                  İhtiyacınızı anlayan, işini özenle yapan
                  <br className="hidden sm:block" /> bir ekiple tanışın.
                </p>
                <div className="hero-actions">
                  <a
                    href="#servis-talebi"
                    className="vora-button vora-button-dark"
                  >
                    Servis talebi oluştur <ArrowUpRight size={20} />
                  </a>
                  <a href="tel:+905365281116" className="hero-phone">
                    <Phone size={17} />
                    <span>0536 528 11 16</span>
                  </a>
                </div>
                <div className="hero-reassurance">
                  <Check size={15} />
                  <span>İhtiyaca uygun hizmet.</span>
                  <span className="reassurance-dot" />{" "}
                  <span>Açık iletişim.</span>
                </div>
                <a href="#hizmetler" className="hero-discover">
                  <span>
                    <ArrowDown size={19} />
                  </span>
                  <span>EVİNİZ İÇİN NELER YAPIYORUZ?</span>
                </a>
              </div>
              <div className="hero-visual">
                <VoraHeroBackground />
                <div className="hero-image-label">
                  <span className="status-dot" /> HER MEVSİM, EVİNİZDE.
                </div>
                <div className="hero-visual-bottom">
                  <span>
                    Doğru bakım.
                    <br />
                    <em>Daha iyi bir yaşam alanı.</em>
                  </span>
                  <span className="hero-round-mark" aria-hidden="true">
                    <ArrowUpRight size={31} strokeWidth={1.3} />
                  </span>
                </div>
                <div className="hero-side-note" aria-hidden="true">
                  VORA TEKNİK / KONFORUNUZ İÇİN
                </div>
              </div>
            </div>
            <div className="hero-promise">
              <span>
                <MapPin size={16} /> Bahçelievler’den İstanbul’a
              </span>
              <span>
                <Check size={16} /> İşlem öncesi bilgilendirme
              </span>
              <span>
                <Check size={16} /> Randevuya göre servis planlaması
              </span>
              <a href="#servis-sureci">
                Vora yaklaşımı <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="hizmetler"
          className="vora-services section-space"
          aria-labelledby="services-heading"
        >
          <div className="vora-container">
            <VoraReveal className="section-heading">
              <div>
                <span className="eyebrow">01 / HİZMETLERİMİZ</span>
                <h2 id="services-heading">
                  Her mevsim,
                  <br />
                  <em>yerinde bir çözüm.</em>
                </h2>
              </div>
              <p>
                Evinizin sıcaklığı, havası ve dengesi için.
                <br />
                Üç temel hizmet, aynı özenli yaklaşım.
              </p>
            </VoraReveal>
            <div className="service-card-grid">
              {services.map((service, index) => (
                <VoraReveal key={service.href} delay={index * 0.08}>
                  <Link className="service-card" href={service.href}>
                    <div className="service-card-image">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 760px) 100vw, 32vw"
                      />
                      <span className="service-card-index">
                        {service.number}
                      </span>
                      <span className="service-card-icon">
                        <service.Icon size={23} strokeWidth={1.4} />
                      </span>
                    </div>
                    <div className="service-card-title">
                      <h3>{service.name}</h3>
                      <span>
                        <ArrowUpRight size={23} strokeWidth={1.5} />
                      </span>
                    </div>
                    <h4>{service.tagline}</h4>
                    <p>{service.description}</p>
                    <div className="service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </Link>
                </VoraReveal>
              ))}
            </div>
          </div>
        </section>

        <VoraComfortStory />

        <section
          className="vora-regions section-space"
          aria-labelledby="regions-heading"
        >
          <div className="vora-container regions-layout">
            <VoraReveal className="regions-copy">
              <span className="eyebrow">03 / HİZMET BÖLGELERİ</span>
              <h2 id="regions-heading">
                Bu şehrin
                <br />
                <em>evlerini biliyoruz.</em>
              </h2>
              <p>
                Merkezimiz Bahçelievler. İstanbul’un farklı ilçelerinde,
                evinizin ihtiyacına göre servis planlaması yapıyoruz.
              </p>
              <Link href="/hizmet-bolgeleri" className="vora-text-link">
                Tüm hizmet bölgeleri <ArrowUpRight size={19} />
              </Link>
              <div className="regions-location">
                <MapPin size={19} />
                <div>
                  <strong>Vora Teknik Servis</strong>
                  <span>
                    Kocasinan Merkez Mah. Irmak Sokak
                    <br />
                    Bahçelievler / İstanbul
                  </span>
                </div>
              </div>
            </VoraReveal>
            <VoraReveal className="regions-panel">
              <div className="regions-photo">
                <Image
                  src="/images/istanbul-hero.webp"
                  alt="Boğaz ve İstanbul’un iki yakasının akşam manzarası"
                  fill
                  sizes="(max-width: 760px) 100vw, 48vw"
                />
                <span>İKİ YAKA. AYNI ÖZEN.</span>
              </div>
              <VoraDistrictFinder />
            </VoraReveal>
          </div>
        </section>

        <section className="vora-brands" aria-label="Marka ve model kapsamı">
          <div className="vora-container">
            <div className="brands-intro">
              <span className="eyebrow">TANIDIĞINIZ MARKALAR</span>
              <span>Marka değişir. Özenimiz değişmez.</span>
            </div>
            <div
              className="home-brand-names"
              aria-label="Servis talepleri değerlendirilen markalardan bazıları"
            >
              <span>BOSCH</span>
              <span>Vaillant</span>
              <span>DemirDöküm</span>
              <span>Baymak</span>
              <span>DAIKIN</span>
              <span>Buderus</span>
            </div>
            <p>
              Marka ve modele göre özel servis hizmeti. Marka adları ilgili
              üreticilere aittir; yetkili servislik ilişkisi ifade etmez.
            </p>
          </div>
        </section>

        <VoraReviews />

        <section
          className="vora-faq section-space"
          aria-labelledby="faq-heading"
        >
          <div className="vora-container faq-layout">
            <VoraReveal className="faq-intro">
              <span className="eyebrow">04 / AKLINIZDA KALMASIN</span>
              <h2 id="faq-heading">
                İyi hizmet,
                <br />
                <em>doğru bilgiyle başlar.</em>
              </h2>
              <p>
                Sık sorulanları yanıtladık.
                <br />
                Cihazınıza özel sorular için buradayız.
              </p>
              <a href="tel:+905365281116" className="vora-text-link">
                Bize danışın <ArrowUpRight size={19} />
              </a>
            </VoraReveal>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="vora-faq-item">
                  <summary>
                    <span className="faq-number">0{index + 1}</span>
                    <h3>{faq.q}</h3>
                    <ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servis-talebi"
          className="vora-contact section-space"
          aria-labelledby="contact-heading"
        >
          <div className="vora-container contact-layout">
            <VoraReveal className="contact-copy">
              <span className="eyebrow">BİR TELEFON KADAR YAKIN</span>
              <h2 id="contact-heading">
                Konforunuzu
                <br />
                <em>ertelemeyin.</em>
              </h2>
              <p>
                Bir bakım zamanı, beklenmedik bir arıza ya da aklınızdaki bir
                soru. Önce konuşalım, ihtiyacınızı birlikte netleştirelim.
              </p>
              <a className="contact-phone" href="tel:+905365281116">
                0536 528 11 16 <ArrowUpRight size={30} />
              </a>
              <div className="contact-alternatives">
                <a
                  href="https://wa.me/905365281116?text=Merhaba%2C%20servis%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={19} /> WhatsApp’tan yazın{" "}
                  <ArrowUpRight size={15} />
                </a>
                <a href="tel:+905388188236">
                  <Phone size={17} /> 0538 818 82 36
                </a>
              </div>
              <div className="contact-note">
                <span className="status-dot" />
                <p>
                  Servis kapsamı ve randevu durumu
                  <br />
                  talebinize göre birlikte planlanır.
                </p>
              </div>
            </VoraReveal>
            <VoraReveal>
              <VoraServiceForm />
            </VoraReveal>
          </div>
        </section>
        <div className="vora-mobile-contact">
          <a href="tel:+905365281116">
            <Phone size={18} /> Hemen arayın
          </a>
          <a href="#servis-talebi">
            Servis talebi <ArrowRight size={18} />
          </a>
        </div>
      </main>
      <VoraFooter />
      <StructuredData
        id="home-faq-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </>
  );
}
