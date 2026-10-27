import type { MetadataRoute } from "next";
import { istanbulIlceleri } from "./data/istanbul-ilceleri";
import { site } from "./lib/seo";

// Update when these pages are revised, rather than reporting every request as a content change.
const pagesRevisedOn = "2026-10-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: pagesRevisedOn,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseUrl}/images/hizmet-klima.webp`],
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

  return [...mainPages, ...districtPages];
}
