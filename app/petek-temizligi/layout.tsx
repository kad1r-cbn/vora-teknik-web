import type { Metadata } from "next";

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
  return children;
}