import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Petek Temizliği İstanbul | Vora Teknik Servis",

  description:
    "İstanbul ve Bahçelievler çevresinde petek temizliği, ısıtma sistemi kontrolü ve tesisat servis hizmetleri. Vora Teknik Servis.",

  alternates: {
    canonical: "/petek-temizligi",
  },

  openGraph: {
    title: "Petek Temizliği İstanbul | Vora Teknik Servis",

    description:
      "İstanbul ve Bahçelievler çevresinde petek temizliği, ısıtma sistemi kontrolü ve tesisat servis hizmetleri.",

    url: "https://vorateknik.com/petek-temizligi",

    type: "website",
    locale: "tr_TR",
    siteName: "Vora Teknik Servis",
  },

  twitter: {
    card: "summary",

    title: "Petek Temizliği İstanbul | Vora Teknik Servis",

    description:
      "İstanbul ve Bahçelievler çevresinde petek temizliği, ısıtma sistemi kontrolü ve tesisat servis hizmetleri.",
  },
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": "https://vorateknik.com/petek-temizligi#service",

    name: "Petek Temizliği",

    serviceType: "Petek Temizliği",

    description:
      "İstanbul ve Bahçelievler çevresinde petek temizliği, ısıtma sistemi kontrolü ve tesisat servis hizmetleri.",

    url: "https://vorateknik.com/petek-temizligi",

    provider: {
      "@id": "https://vorateknik.com/#business",
    },

    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
  };

  return (
    <>
      <Script
        id="schema-petek-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      {children}
    </>
  );
}