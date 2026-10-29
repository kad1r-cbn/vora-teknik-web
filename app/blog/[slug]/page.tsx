import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Phone,
} from "lucide-react";
import VoraHeader from "../../components/VoraHeader";
import VoraFooter from "../../components/VoraFooter";
import StructuredData from "../../components/StructuredData";
import {
  VoraReveal,
  VoraScrollProgress,
} from "../../components/VoraScrollEffects";
import { blogPosts, findBlogPost } from "../../data/blog-posts";
import { createPageMetadata, site } from "../../lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post)
    return {
      title: "Rehber bulunamadı | Vora Teknik",
      robots: { index: false, follow: false },
    };
  const title = post.seoTitle;
  return {
    ...createPageMetadata({
      title,
      description: post.description,
      path: `/blog/${post.slug}`,
    }),
    openGraph: {
      title,
      description: post.description,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      locale: "tr_TR",
      siteName: site.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [`${site.url}/`],
      section: post.category,
      images: [
        {
          url: `${site.url}${post.image}`,
          width: 900,
          height: 900,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [`${site.url}${post.image}`],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) notFound();
  const related = [
    ...blogPosts.filter(
      (item) => item.slug !== post.slug && item.category === post.category,
    ),
    ...blogPosts.filter(
      (item) => item.slug !== post.slug && item.category !== post.category,
    ),
  ].slice(0, 3);
  const url = `${site.url}/blog/${post.slug}`;

  return (
    <>
      <VoraHeader active="blog" />
      <VoraScrollProgress />
      <main id="main-content" className="bg-[#f4f8fd] text-[#000d26]">
        <section className="border-b border-[#000d26]/10 px-5 pb-14 pt-7 sm:px-8 sm:pb-20 lg:px-10">
          <div className="mx-auto max-w-[1360px]">
            <nav
              aria-label="Sayfa yolu"
              className="mb-11 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#52657b]"
            >
              <Link href="/" className="hover:text-[#0068c9]">
                Ana sayfa
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-[#0068c9]">
                Blog
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[#000d26]">
                {post.category} rehberi
              </span>
            </nav>
            <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <span className="eyebrow text-[#0068c9]">
                  VORA BLOG / {post.category.toLocaleUpperCase("tr-TR")}
                </span>
                <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,4.5vw,4.4rem)] font-medium leading-[1.08] tracking-[-0.055em]">
                  {post.title}
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-[#52657b] sm:text-base">
                  {post.description}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#000d26]/15 pt-5 text-[10px] text-[#52657b]">
                  <span className="font-semibold text-[#000d26]">
                    Vora Teknik Editoryal
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={13} />
                    {post.readMinutes} dakika okuma
                  </span>
                  <span>
                    Güncelleme:{" "}
                    <time dateTime={post.updatedAt}>28 Ekim 2026</time>
                  </span>
                </div>
              </div>
              <div className="relative aspect-[1.2] overflow-hidden rounded-xl bg-[#dfeaf3]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  preload
                  sizes="(max-width: 1023px) 100vw, 44vw"
                  className="object-cover"
                />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#000d26]/90 px-4 py-2 text-[9px] font-semibold tracking-[0.1em] text-cyan-200">
                  BİLGİYLE BAŞLAYAN KONFOR
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto grid max-w-[1360px] items-start gap-10 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-20 xl:gap-28">
            <article className="min-w-0 max-w-[820px]">
              <details className="mb-10 rounded-xl border border-[#000d26]/15 bg-white p-5 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  Bu rehberde neler var?
                  <ChevronDown size={18} />
                </summary>
                <ol className="mt-4 space-y-3">
                  {post.sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="flex gap-3 text-sm leading-6 text-[#52657b] hover:text-[#0068c9]"
                      >
                        <span className="text-[10px] tabular-nums text-[#0068c9]">
                          0{index + 1}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
              <div className="space-y-11">
                {post.sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                    aria-labelledby={`${section.id}-heading`}
                  >
                    <span className="text-[10px] font-medium tracking-[0.12em] text-[#0068c9]">
                      0{index + 1} / REHBER
                    </span>
                    <h2
                      id={`${section.id}-heading`}
                      className="mt-3 max-w-3xl text-[clamp(1.65rem,2.5vw,2.25rem)] font-medium leading-[1.25] tracking-[-0.04em]"
                    >
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[15px] leading-[1.95] text-[#52657b] sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.checklist && (
                      <ul className="mt-6 space-y-3 rounded-xl border border-[#cde4f0] bg-[#eaf6fc] p-5 sm:p-6">
                        {section.checklist.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-[#25425e]"
                          >
                            <Check
                              size={16}
                              className="mt-1.5 shrink-0 text-[#0068c9]"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <section
                className="mt-14 border-t border-[#000d26]/15 pt-10"
                aria-labelledby="article-faq-heading"
              >
                <span className="eyebrow text-[#0068c9]">
                  AKLINIZDA KALMASIN
                </span>
                <h2
                  id="article-faq-heading"
                  className="mb-7 mt-3 text-3xl font-medium tracking-[-0.04em]"
                >
                  Sık sorulan sorular
                </h2>
                {post.faqs.map((faq) => (
                  <details
                    className="group border-t border-[#000d26]/15 last:border-b"
                    key={faq.q}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-7">
                      <h3>{faq.q}</h3>
                      <ChevronDown
                        size={18}
                        className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="pb-6 pr-6 text-sm leading-8 text-[#52657b]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </section>

              <div className="mt-10 border-t border-[#000d26]/15 pt-6">
                <p className="text-xs leading-7 text-[#52657b]">
                  Bu içerik genel bilgilendirme amacı taşır. Cihazınıza özgü
                  kullanım ve güvenlik adımlarında üreticinin kılavuzunu
                  izleyin; belirtilerin nedeni için gerektiğinde teknik
                  değerlendirme isteyin.
                </p>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex min-h-11 items-center gap-3 text-xs font-semibold text-[#0068c9]"
                >
                  <ArrowLeft size={16} />
                  Tüm rehberlere dönün
                </Link>
              </div>
            </article>

            <aside
              className="space-y-6 lg:sticky lg:top-28"
              aria-label="Rehber bağlantıları"
            >
              <div className="hidden rounded-xl border border-[#000d26]/15 bg-white p-6 lg:block">
                <p className="eyebrow mb-5 text-[#0068c9]">BU REHBERDE</p>
                <ol className="space-y-4">
                  {post.sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="flex gap-3 text-xs leading-6 text-[#52657b] transition hover:text-[#0068c9]"
                      >
                        <span className="mt-0.5 text-[9px] tabular-nums text-[#0068c9]">
                          0{index + 1}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-xl bg-[#000d26] p-6 text-white">
                <span className="eyebrow text-cyan-200">
                  CİHAZINIZI KONUŞALIM
                </span>
                <h2 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.04em]">
                  İhtiyacınız için
                  <br />
                  <em
                    className="font-normal text-cyan-200"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    bir sonraki adım.
                  </em>
                </h2>
                <p className="mt-4 text-xs leading-7 text-slate-300">
                  Hizmet kapsamını ve uygun servis planını birlikte
                  netleştirelim.
                </p>
                <Link
                  href={post.serviceHref}
                  className="mt-5 flex min-h-11 items-center justify-between gap-4 border-b border-white/20 py-2 text-xs font-semibold text-cyan-200"
                >
                  {post.serviceLabel}
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/hizmet-bolgeleri"
                  className="flex min-h-11 items-center justify-between gap-4 border-b border-white/20 py-2 text-xs text-slate-200"
                >
                  İlçenizdeki hizmetleri bulun
                  <ArrowUpRight size={16} />
                </Link>
                <a
                  href="tel:+905365281116"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
                >
                  <Phone size={15} />
                  0536 528 11 16
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="border-t border-[#000d26]/15 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
          aria-labelledby="related-articles-heading"
        >
          <div className="mx-auto max-w-[1360px]">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <span className="eyebrow text-[#0068c9]">
                  OKUMAYA DEVAM EDİN
                </span>
                <h2
                  id="related-articles-heading"
                  className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl"
                >
                  Biraz daha iyi bilgi.
                </h2>
              </div>
              <Link href="/blog" className="vora-text-link">
                Tüm yazılar
                <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((item, index) => (
                <VoraReveal
                  key={item.slug}
                  delay={index * 0.07}
                  variant="scale"
                >
                  <Link href={`/blog/${item.slug}`} className="group block">
                    <div className="relative aspect-[1.7] overflow-hidden rounded-lg bg-[#dfeaf3]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, 31vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none"
                      />
                    </div>
                    <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#0068c9]">
                      {item.category} / {item.readMinutes} DAKİKA
                    </p>
                    <h3 className="mt-2 text-xl font-medium leading-[1.4] tracking-[-0.035em]">
                      {item.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-3 text-xs font-semibold text-[#0068c9]">
                      Rehberi okuyun
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </VoraReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <VoraFooter />
      <StructuredData
        id="article-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${url}#article`,
          headline: post.title,
          description: post.description,
          image: [`${site.url}${post.image}`],
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: {
            "@id": `${site.url}/#business`,
            "@type": "Organization",
            name: site.name,
          },
          publisher: { "@id": `${site.url}/#business` },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          inLanguage: "tr-TR",
          articleSection: post.category,
          wordCount: post.wordCount,
        }}
      />
      <StructuredData
        id="article-breadcrumb-schema"
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
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }}
      />
      <StructuredData
        id="article-faq-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </>
  );
}
