import type { Metadata } from "next";

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
  return children;
}