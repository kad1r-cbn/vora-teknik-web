import StructuredData from "../components/StructuredData";
import { createPageMetadata, createServiceSchema } from "../lib/seo";

const description =
  "İstanbul'da petek temizliği, ısınma sorunlarının kontrolü ve ısıtma tesisatı bakımı. Bahçelievler merkezli Vora Teknik ile servis planlaması yapın.";

export const metadata = createPageMetadata({
  title: "İstanbul Petek Temizliği ve Tesisat Bakımı | Vora Teknik",
  description,
  path: "/petek-temizligi",
});

export default function ServiceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        id="vora-petek-service-schema"
        data={createServiceSchema({ name: "Petek temizliği ve tesisat bakımı", description, path: "/petek-temizligi" })}
      />
      {children}
    </>
  );
}
