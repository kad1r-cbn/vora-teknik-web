import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Clock3 } from "lucide-react";
import VoraHeader from "../components/VoraHeader";
import VoraFooter from "../components/VoraFooter";
import StructuredData from "../components/StructuredData";
import {
  VoraReveal,
  VoraScrollProgress,
} from "../components/VoraScrollEffects";
import { blogCategories, blogPosts } from "../data/blog-posts";
import { createPageMetadata, site } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Kombi, Klima ve Petek Rehberleri | Vora Teknik Blog",
  description:
    "Kombi bakımı, klima kullanımı ve petek temizliği hakkında anlaşılır rehberler. Güvenli kullanıcı kontrollerini ve teknik destek gereken durumları keşfedin.",
  path: "/blog",
});

const categoryIds: Record<string, string> = {
  Kombi: "kombi-rehberleri",
  Klima: "klima-rehberleri",
  Petek: "petek-rehberleri",
  Rehber: "kullanim-rehberleri",
};

export default function BlogPage() {
  return (
    <>
      <VoraHeader active="blog" />
      <VoraScrollProgress />
      <main id="main-content" className="bg-[#f4f8fd] text-[#000d26]">
        <section className="border-b border-white/10 bg-[#000d26] px-5 pb-16 pt-7 text-white sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-[1360px]">
            <nav
              aria-label="Sayfa yolu"
              className="mb-12 flex flex-wrap items-center gap-3 text-xs text-slate-400"
            >
              <Link href="/" className="transition hover:text-cyan-200">
                Ana sayfa
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-slate-200">
                Blog
              </span>
            </nav>
            <div className="grid gap-9 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
              <div>
                <span className="eyebrow mb-6 text-cyan-200">
                  VORA BLOG / EVİNİZ İÇİN İYİ BİLGİ
                </span>
                <h1 className="text-[clamp(2.65rem,5.8vw,5.7rem)] font-medium leading-[1.05] tracking-[-0.06em]">
                  Kombi, klima ve petek.
                  <br />
                  <em
                    className="font-normal text-cyan-200"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Konforun rehberi.
                  </em>
                </h1>
              </div>
              <div className="max-w-md">
                <p className="text-sm leading-8 text-slate-300 sm:text-base">
                  Cihazınızı daha iyi tanıyın. Bakım zamanından günlük
                  kullanıma, aklınızdaki sorulara sade ve uygulanabilir
                  yanıtlar.
                </p>
                <a
                  href="#rehberler"
                  className="mt-7 inline-flex min-h-11 items-center gap-4 border-b border-cyan-200/50 pb-2 text-xs font-semibold text-cyan-200"
                >
                  Rehberleri keşfedin <ArrowDown size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="rehberler"
          className="scroll-mt-28 px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
          aria-labelledby="articles-heading"
        >
          <div className="mx-auto max-w-[1360px]">
            <div className="mb-12 flex flex-col gap-6 border-b border-[#000d26]/15 pb-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="eyebrow text-[#0068c9]">
                  BİLGİYİ İHTİYACINIZA GÖRE SEÇİN
                </span>
                <h2
                  id="articles-heading"
                  className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl"
                >
                  Kısa sorular. Açıklayıcı rehberler.
                </h2>
              </div>
              <nav aria-label="Blog konuları" className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <a
                    key={category}
                    href={`#${categoryIds[category]}`}
                    className="inline-flex min-h-11 items-center gap-3 rounded-full border border-[#000d26]/20 px-5 py-2 text-xs font-semibold transition hover:border-[#0068c9] hover:bg-[#00d9ff]/15"
                  >
                    {category}
                    <span className="text-[10px] font-normal text-[#52657b]">
                      {
                        blogPosts.filter((post) => post.category === category)
                          .length
                      }
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-16 sm:space-y-20">
              {blogCategories.map((category, categoryIndex) => (
                <section
                  key={category}
                  id={categoryIds[category]}
                  className="scroll-mt-28"
                  aria-labelledby={`${categoryIds[category]}-heading`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-[10px] font-medium tabular-nums text-[#0068c9]">
                      0{categoryIndex + 1}
                    </span>
                    <h3
                      id={`${categoryIds[category]}-heading`}
                      className="text-2xl font-medium tracking-[-0.04em]"
                    >
                      {category === "Rehber"
                        ? "Günlük kullanım ve servis rehberleri"
                        : `${category} rehberleri`}
                    </h3>
                    <span className="h-px flex-1 bg-[#000d26]/15" />
                  </div>
                  <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
                    {blogPosts
                      .filter((post) => post.category === category)
                      .map((post, index) => (
                        <VoraReveal
                          key={post.slug}
                          delay={index * 0.08}
                          variant="scale"
                        >
                          <article className="group h-full">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-[#0068c9]"
                            >
                              <div className="relative aspect-[1.85] overflow-hidden rounded-xl bg-[#dfeaf3]">
                                <Image
                                  src={post.image}
                                  alt={post.imageAlt}
                                  fill
                                  sizes="(max-width: 767px) 100vw, 48vw"
                                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none"
                                  preload={categoryIndex === 0 && index === 0}
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-[#000d26]/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-cyan-200">
                                  {post.category}
                                </span>
                              </div>
                              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-[#52657b]">
                                <span className="inline-flex items-center gap-1.5">
                                  <Clock3 size={13} /> {post.readMinutes} dakika
                                  okuma
                                </span>
                                <time dateTime={post.updatedAt}>
                                  28 Ekim 2026
                                </time>
                              </div>
                              <div className="mt-3 flex items-start justify-between gap-5">
                                <h4 className="max-w-xl text-[clamp(1.35rem,2.1vw,1.8rem)] font-medium leading-[1.3] tracking-[-0.035em]">
                                  {post.title}
                                </h4>
                                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-[#000d26]/20 transition group-hover:border-[#00b8f5] group-hover:bg-[#00d9ff]">
                                  <ArrowUpRight size={20} />
                                </span>
                              </div>
                              <p className="mt-3 max-w-xl text-sm leading-7 text-[#52657b]">
                                {post.description}
                              </p>
                              <span className="mt-5 inline-flex items-center gap-3 border-b border-[#000d26]/25 pb-1.5 text-xs font-semibold">
                                Rehberi okuyun <ArrowUpRight size={15} />
                              </span>
                            </Link>
                          </article>
                        </VoraReveal>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#000d26]/10 bg-[#e4f7ff] px-5 py-14 sm:px-8 lg:px-10"
          aria-labelledby="blog-contact-heading"
        >
          <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <span className="eyebrow text-[#0068c9]">
                CİHAZINIZA ÖZEL DEĞERLENDİRME
              </span>
              <h2
                id="blog-contact-heading"
                className="mt-3 text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl"
              >
                Okudunuz. Şimdi birlikte netleştirelim.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#52657b]">
                Rehberler genel bilgi verir. Cihazınızın durumu, adresiniz ve
                ihtiyaç duyduğunuz işlem için servis planlaması yapabiliriz.
              </p>
            </div>
            <Link
              href="/#servis-talebi"
              className="vora-button vora-button-dark shrink-0"
            >
              Servis talebi oluştur <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <VoraFooter />
      <StructuredData
        id="blog-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${site.url}/blog#collection`,
          name: "Vora Teknik Blog — Kombi, Klima ve Petek Rehberleri",
          url: `${site.url}/blog`,
          inLanguage: "tr-TR",
          publisher: { "@id": `${site.url}/#business` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: blogPosts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: post.title,
              url: `${site.url}/blog/${post.slug}`,
            })),
          },
        }}
      />
      <StructuredData
        id="blog-breadcrumb-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ana Sayfa",
              item: `${site.url}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${site.url}/blog`,
            },
          ],
        }}
      />
    </>
  );
}
