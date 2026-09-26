import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vora Teknik Servis | İstanbul Kombi, Klima ve Petek Servisi",

  description:
    "Vora Teknik Servis; Bahçelievler ve İstanbul çevresinde kombi servisi, klima servisi, petek temizliği, bakım ve onarım hizmetleri sunar.",

  authors: [{ name: "Vora Teknik Servis" }],
  creator: "Vora Teknik Servis",
  publisher: "Vora Teknik Servis",

  openGraph: {
    title: "Vora Teknik Servis | İstanbul Kombi ve Klima Servisi",

    description:
      "Kombi servisi, klima servisi, petek temizliği, bakım ve onarım hizmetleri.",

    type: "website",
    locale: "tr_TR",
    siteName: "Vora Teknik Servis",
  },

  twitter: {
    card: "summary",
    title: "Vora Teknik Servis | İstanbul Kombi ve Klima Servisi",

    description:
      "Kombi, klima ve petek servisi için Vora Teknik Servis.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",

  name: "Vora Teknik Servis",

  description:
    "Bahçelievler ve İstanbul çevresinde kombi, klima ve petek temizliği servisi.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Kocasinan Merkez Mah. Irmak Sokak",
    addressLocality: "Bahçelievler",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },

  telephone: "+905365281116",

  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },

  priceRange: "₺₺",

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],

      opens: "08:00",
      closes: "23:59",
    },

    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: "Sunday",

      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}