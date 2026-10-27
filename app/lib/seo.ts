import type { Metadata } from "next";

export const site = {
  name: "Vora Teknik Servis",
  url: "https://vorateknik.com",
  phones: ["+905365281116", "+905388188236"],
} as const;

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      type: "website",
      locale: "tr_TR",
      siteName: site.name,
      images: [{
        url: `${site.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Vora Teknik — İstanbul kombi, klima ve petek servisi",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}

export function createServiceSchema({
  name,
  description,
  path,
}: Omit<PageMetadata, "title"> & { name: string }) {
  const url = `${site.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType: name,
        description,
        url,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "City", name: "İstanbul" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };
}
