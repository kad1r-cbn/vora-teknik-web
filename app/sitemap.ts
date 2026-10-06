import type { MetadataRoute } from "next";
import { istanbulIlceleri } from "./data/istanbul-ilceleri";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vorateknik.com";

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/kombi-servisi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/klima-servisi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/petek-temizligi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const districtPages: MetadataRoute.Sitemap = istanbulIlceleri.map(
    (ilce) => ({
      url: `${baseUrl}/istanbul/${ilce.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...mainPages, ...districtPages];
}