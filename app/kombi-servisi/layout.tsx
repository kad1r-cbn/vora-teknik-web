import StructuredData from "../components/StructuredData";
import { createPageMetadata, createServiceSchema } from "../lib/seo";

const description =
  "İstanbul'da kombi bakımı, arıza tespiti ve onarım için Vora Teknik. Hizmet bölgelerimizde cihazınıza ve adresinize uygun servis planlaması yapın.";

export const metadata = createPageMetadata({
  title: "İstanbul Kombi Servisi ve Bakımı | Vora Teknik",
  description,
  path: "/kombi-servisi",
});

export default function ServiceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        id="vora-kombi-service-schema"
        data={createServiceSchema({ name: "Kombi servisi ve bakımı", description, path: "/kombi-servisi" })}
      />
      {children}
    </>
  );
}
