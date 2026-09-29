import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kombi Servisi İstanbul | Vora Teknik Servis",

  description:
    "İstanbul ve Bahçelievler çevresinde kombi arıza tespiti, bakım ve teknik servis hizmetleri. Vora Teknik Servis ile servis talebi oluşturun.",

  alternates: {
    canonical: "/kombi-servisi",
  },

  openGraph: {
    title: "Kombi Servisi İstanbul | Vora Teknik Servis",

    description:
      "İstanbul ve Bahçelievler çevresinde kombi arıza tespiti, bakım ve teknik servis hizmetleri.",

    url: "https://vorateknik.com/kombi-servisi",

    type: "website",
    locale: "tr_TR",
    siteName: "Vora Teknik Servis",
  },

  twitter: {
    card: "summary",

    title: "Kombi Servisi İstanbul | Vora Teknik Servis",

    description:
      "İstanbul ve Bahçelievler çevresinde kombi arıza tespiti, bakım ve teknik servis hizmetleri.",
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

    "@id": "https://vorateknik.com/kombi-servisi#service",

    name: "Kombi Servisi",

    serviceType: "Kombi Servisi",

    description:
      "İstanbul ve Bahçelievler çevresinde kombi arıza tespiti, bakım ve teknik servis hizmetleri.",

    url: "https://vorateknik.com/kombi-servisi",

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
        id="schema-kombi-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      {children}
    </>
  );
}