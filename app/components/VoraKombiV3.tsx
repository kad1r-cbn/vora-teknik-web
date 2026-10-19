import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleGauge,
  Droplets,
  Flame,
  Gauge,
  Phone,
  ShieldCheck,
  ThermometerSun,
  Waves,
} from "lucide-react";

// VORA_KOMBI_V3 — Mevcut kombi sayfasina eklenen, bagimsiz teknik bilgilendirme bolumleri.
// Fiyat, sure, garanti veya yetkili servis iddiasi bulunmaz.

const quickLinks = [
  { href: "#kombi-hizmetler", label: "Hizmetler" },
  { href: "#kombi-arizalar", label: "Arıza Belirtileri" },
  { href: "#kombi-teknik-rehber", label: "Teknik Rehber" },
  { href: "#kombi-servis-sureci", label: "Servis Süreci" },
  { href: "#kombi-sss", label: "Sık Sorulanlar" },
];

export function KombiV3QuickNav() {
  return (
    <nav aria-label="Kombi servisi içerik rehberi" className="relative z-10 border-y border-white/10 bg-[#071b32] text-white">
      <div className="mx-auto flex max-w-[1600px] items-center gap-4 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12 2xl:px-16">
        <span className="hidden shrink-0 border-r border-cyan-300/20 pr-5 text-[10px] font-extrabold tracking-[0.22em] text-cyan-300 lg:block">
          İÇERİĞİ KEŞFEDİN
        </span>
        {quickLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group inline-flex min-h-9 shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:bg-cyan-300/10 hover:text-white sm:text-sm"
          >
            {item.label}
            <ArrowRight size={13} className="text-cyan-300 transition-transform group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </nav>
  );
}

const problems = [
  {
    number: "01",
    title: "Kombi basıncı sürekli düşüyor",
    category: "Basınç / tesisat",
    icon: Gauge,
    description: "Tesisat bağlantıları, olası su kayıpları veya genleşme tankı gibi farklı noktalar etkili olabilir. Tek başına bir belirtiyle arızalı parça belirlenemez.",
  },
  {
    number: "02",
    title: "Sıcak su düzensiz geliyor",
    category: "Sıcak su",
    icon: Droplets,
    description: "Su akışı, sıcaklık algılayıcıları veya eşanjör tarafında inceleme gerekebilir. Sorunun koşulları ve cihaz modeli değerlendirilmelidir.",
  },
  {
    number: "03",
    title: "Petekler yeterince ısınmıyor",
    category: "Isıtma verimi",
    icon: ThermometerSun,
    description: "Sirkülasyon, tesisattaki hava, vana ayarları veya sistem kirlenmesi gibi etkenler araştırılabilir. Kombi ile tesisat birlikte ele alınır.",
  },
  {
    number: "04",
    title: "Ateşleme veya hata kodu oluşuyor",
    category: "Çalışma güvenliği",
    icon: Flame,
    description: "Hata kodunun anlamı marka ve modele göre değişir. Gaz ve yanma sistemleri dahil gerekli kontroller yetkin teknisyen tarafından yapılmalıdır.",
  },
];

const maintenance = [
  { title: "Çalışma ve hata durumu", detail: "Cihazın bildirdiği arızalar, çalışma davranışı ve kullanıcıdan alınan belirtiler değerlendirilir.", icon: CircleGauge },
  { title: "Isıtma devresi", detail: "Tesisat basıncı, dolaşım ve ilgili bileşenlerin durumu cihazın gerekliliklerine göre incelenir.", icon: Waves },
  { title: "Bağlantı ve sızdırmazlık", detail: "Su bağlantıları ve güvenlikle ilgili kontrol noktaları yetkin personel tarafından değerlendirilir.", icon: ShieldCheck },
  { title: "İşlem ve maliyet bilgisi", detail: "Tespit sonrası önerilen işlem, kapsam ve ücret konusunda müşteriye bilgi verilir.", icon: CheckCircle2 },
];

export function KombiV3Insights() {
  return (
    <>
      <section
        id="kombi-teknik-rehber"
        aria-labelledby="vora-kombi-teknik-baslik"
        className="scroll-mt-32 relative overflow-hidden bg-[#06162c] py-20 text-white sm:py-24 lg:py-28"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-64 top-0 h-[550px] w-[550px] rounded-full bg-cyan-400/[0.055] blur-[95px]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_95%,rgba(22,146,191,0.08),transparent_35%)]" />
        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 2xl:px-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[820px]">
              <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                <span className="h-px w-9 bg-cyan-300/70" /> Teknik Bilgi Merkezi
              </div>
              <h2 id="vora-kombi-teknik-baslik" className="max-w-[800px] text-[clamp(2rem,4.2vw,3.8rem)] font-black leading-[1.08] tracking-[-0.045em]">
                Aynı belirti, <span className="text-cyan-300">farklı bir arızadan</span> kaynaklanabilir.
              </h2>
              <p className="mt-5 max-w-[790px] text-base leading-8 text-slate-300 sm:text-lg">
                Kombi arızalarında tek bir hata koduna veya belirtiye göre parça değişimi önerilmez. Aşağıdaki başlıklar sık görülen sorunları anlamaya yardımcı olur; kesin neden, cihazın teknik kontrolüyle belirlenir.
              </p>
            </div>
            <Link
              href="/#servis-talebi"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-5 py-3 text-sm font-extrabold text-cyan-100 transition hover:bg-cyan-300/20 lg:mb-1"
            >
              Servis Talebi Oluştur <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.number} className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075] sm:p-7">
                  <div className="mb-9 flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-[15px] border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                    <span className="text-4xl font-black tracking-[-0.07em] text-white/10">{item.number}</span>
                  </div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-cyan-200">{item.category}</p>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-amber-400/25 bg-amber-400/[0.075] p-5 sm:flex-row sm:items-start sm:gap-4 sm:p-6">
            <ShieldCheck size={23} className="shrink-0 text-amber-200" />
            <p className="text-sm leading-7 text-slate-200">
              <strong className="text-white">Gaz kokusu alıyorsanız:</strong> Cihazı kullanmayın, elektrik düğmelerine dokunmayın, güvenli şekilde ortamdan uzaklaşın ve dışarıdan 187 Doğalgaz Acil hattını arayın. Gaz ve yanma sistemlerine kullanıcı müdahalesi yapmayın.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="vora-kombi-bakim-baslik" className="relative bg-[#f3f7fb] py-20 text-[#081b34] sm:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16 lg:px-12 2xl:px-16">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-800">
              <span className="h-px w-9 bg-cyan-600/70" /> Planlı Teknik Kontrol
            </div>
            <h2 id="vora-kombi-bakim-baslik" className="text-[clamp(2rem,3.5vw,3.2rem)] font-black leading-[1.09] tracking-[-0.045em]">
              Kombi bakımında <span className="text-cyan-700">neler değerlendirilir?</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Kontrol kapsamı kombinin marka, model, çalışma koşulları ve arıza durumuna göre belirlenir. Amaç, sorunu tespit etmek ve uygun işlemi müşteriye anlaşılır biçimde açıklamaktır.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+905365281116" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#08253e] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#0e3b5b]"><Phone size={17} /> Servis İçin Ara</a>
              <Link href="/hizmet-bolgeleri" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-[#08253e] transition hover:border-cyan-600">Hizmet Bölgeleri <ArrowRight size={17} /></Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {maintenance.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(10,31,59,0.045)] sm:p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f6fb] text-cyan-700"><Icon size={23} strokeWidth={1.8} /></div>
                    <span className="text-xs font-black tracking-widest text-slate-300">0{index+1}</span>
                  </div>
                  <h3 className="text-lg font-black tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
