import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vorateknik.com"),

  title: "Vora Teknik Servis | Garantili Kombi ve Klima Tamiri",

  description:
    "İstanbul geneli uzman teknisyenlerle kombi, klima bakım, onarım ve petek temizliği. Randevu saatine sadık, temiz işçilik.",

  keywords: [
    "kombi servisi",
    "klima tamiri",
    "petek temizliği",
    "İstanbul kombi servisi",
    "İstanbul klima servisi",
    "İstanbul petek temizliği",
    "İstanbul acil servis",
    "Bahçelievler kombi servisi",
    "Bosch kombi servisi",
    "Demirdöküm servisi",
    "Vaillant servisi",
    "Daikin klima tamiri",
    "klima montajı",
  ],

  authors: [{ name: "Vora Teknik Servis" }],
  creator: "Vora Teknik Servis",
  publisher: "Vora Teknik Servis",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Vora Teknik Servis | Kombi, Klima ve Petek Servisi",
    description:
      "İstanbul geneli kombi, klima bakım ve onarımı ile petek temizliği hizmetleri.",
    url: "https://vorateknik.com/",
    siteName: "Vora Teknik Servis",
    type: "website",
    locale: "tr_TR",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vora Teknik Servis | Kombi ve Klima Servisi",
    description:
      "İstanbul geneli kombi, klima ve petek temizliği servis hizmetleri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://vorateknik.com/#business",

    "name": "Vora Teknik Servis",

    "url": "https://vorateknik.com/",

    "description":
      "İstanbul geneli profesyonel kombi, klima ve petek temizliği servis hizmetleri.",

    "telephone": "+905365281116",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Irmak Sokak",
      "addressLocality": "Bahçelievler",
      "addressRegion": "İstanbul",
      "addressCountry": "TR",
    },

    "areaServed": {
      "@type": "City",
      "name": "İstanbul",
    },

    "priceRange": "₺₺",

    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
  };

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