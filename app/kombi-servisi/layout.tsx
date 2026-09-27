import type { Metadata } from "next";

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
  return children;
}