import type { MetadataRoute } from "next";
import { istanbulIlceleri } from "./data/istanbul-ilceleri";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vorateknik.com";

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hizmet-bolgeleri`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/kombi-servisi`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/klima-servisi`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/petek-temizligi`,
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