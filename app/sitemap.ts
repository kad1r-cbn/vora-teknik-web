import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog-posts";
import { heroSlides } from "./data/hero-slides";
import { istanbulIlceleri } from "./data/istanbul-ilceleri";
import { districtServices } from "./data/service-content";
import { site } from "./lib/seo";

// Update when these pages are revised, rather than reporting every request as a content change.
const pagesRevisedOn = "2026-10-28";
type SitemapEntry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: pagesRevisedOn,
      changeFrequency: "weekly",
      priority: 1,
      images: [...new Set(heroSlides.map((slide) => `${baseUrl}${slide.image}`))],
    },
    {
      url: `${baseUrl}/hizmet-bolgeleri`,
      lastModified: pagesRevisedOn,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${baseUrl}/images/istanbul-hero.webp`],
    },
    {
      url: `${baseUrl}/kombi-servisi`,
      lastModified: pagesRevisedOn,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/images/hizmet-kombi.webp`],
    },
    {
      url: `${baseUrl}/klima-servisi`,
      lastModified: pagesRevisedOn,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/images/hizmet-klima.webp`],
    },
    {
      url: `${baseUrl}/petek-temizligi`,
      lastModified: pagesRevisedOn,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/images/hizmet-petek.webp`],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: pagesRevisedOn,
      changeFrequency: "weekly",
      priority: 0.7,
      images: [...new Set(blogPosts.map((post) => `${baseUrl}${post.image}`))],
    },
  ];

  const districtPages: MetadataRoute.Sitemap = istanbulIlceleri.map(
    (ilce) => ({
      url: `${baseUrl}/istanbul/${ilce.slug}`,
      lastModified: pagesRevisedOn,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${baseUrl}${ilce.image}`],
    })
  );

  const localServicePages: MetadataRoute.Sitemap = istanbulIlceleri.flatMap(
    (district) => districtServices.map((service): SitemapEntry => ({
      url: `${baseUrl}/istanbul/${district.slug}/${service.slug}`,
      lastModified: pagesRevisedOn,
      changeFrequency: "monthly",
      priority: 0.75,
      images: [`${baseUrl}${district.image}`, `${baseUrl}${service.image}`],
    }))
  );

  const articles: MetadataRoute.Sitemap = blogPosts.map((post): SitemapEntry => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
    images: [`${baseUrl}${post.image}`],
  }));

  return [...mainPages, ...districtPages, ...localServicePages, ...articles];
}
