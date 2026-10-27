import type { MetadataRoute } from "next";
import { istanbulIlceleri } from "./data/istanbul-ilceleri";
import { site } from "./lib/seo";

// Update when these pages are revised, rather than reporting every request as a content change.
const mainPagesRevisedOn = "2026-10-27";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: mainPagesRevisedOn,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hizmet-bolgeleri`,
      lastModified: mainPagesRevisedOn,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/kombi-servisi`,
      lastModified: mainPagesRevisedOn,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/klima-servisi`,
      lastModified: mainPagesRevisedOn,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/petek-temizligi`,
      lastModified: mainPagesRevisedOn,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const districtPages: MetadataRoute.Sitemap = istanbulIlceleri.map(
    (ilce) => ({
      url: `${baseUrl}/istanbul/${ilce.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...mainPages, ...districtPages];
}
