import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Klima Servisi İstanbul | Vora Teknik Servis",

  description:
    "İstanbul ve Bahçelievler çevresinde klima bakım, arıza tespiti, soğutmama problemleri ve montaj hizmetleri. Vora Teknik Servis.",

  alternates: {
    canonical: "/klima-servisi",
  },

  openGraph: {
    title: "Klima Servisi İstanbul | Vora Teknik Servis",

    description:
      "İstanbul ve Bahçelievler çevresinde klima bakım, arıza tespiti, soğutmama problemleri ve montaj hizmetleri.",

    url: "https://vorateknik.com/klima-servisi",

    type: "website",
    locale: "tr_TR",
    siteName: "Vora Teknik Servis",
  },

  twitter: {
    card: "summary",

    title: "Klima Servisi İstanbul | Vora Teknik Servis",

    description:
      "İstanbul ve Bahçelievler çevresinde klima bakım, arıza tespiti, soğutmama problemleri ve montaj hizmetleri.",
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

    "@id": "https://vorateknik.com/klima-servisi#service",

    name: "Klima Servisi",

    serviceType: "Klima Servisi",

    description:
      "İstanbul ve Bahçelievler çevresinde klima bakım, arıza tespiti, soğutmama problemleri ve montaj hizmetleri.",

    url: "https://vorateknik.com/klima-servisi",

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
        id="schema-klima-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      {children}
    </>
  );
}