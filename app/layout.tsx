import type { Metadata, Viewport } from "next";
import StructuredData from "./components/StructuredData";
import { site } from "./lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Vora Teknik Servis",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Ev ve teknik servis hizmetleri",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000d26",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/vora-logo-header.webp`,
        width: 900,
        height: 409,
      },
      description:
        "İstanbul genelinde kombi servisi, klima bakım ve onarımı ile petek temizliği hizmetleri.",
      telephone: site.phones,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kocasinan Merkez Mah. Irmak Sokak",
        addressLocality: "Bahçelievler",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
      areaServed: { "@type": "City", name: "İstanbul" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Teknik servis hizmetleri",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kombi servisi",
              url: `${site.url}/kombi-servisi`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Klima servisi",
              url: `${site.url}/klima-servisi`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Petek temizliği",
              url: `${site.url}/petek-temizligi`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "tr-TR",
      publisher: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <a href="#main-content" className="vora-skip-link">
          Ana içeriğe geç
        </a>
        <StructuredData id="vora-business-schema" data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
