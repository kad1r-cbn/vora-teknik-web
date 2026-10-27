import StructuredData from "../components/StructuredData";
import { createPageMetadata, createServiceSchema } from "../lib/seo";

const description =
  "İstanbul'da klima bakımı, arıza tespiti, onarım ve montaj hizmetleri. Vora Teknik ile cihazınızın ihtiyacını belirleyin, servis talebinizi kolayca iletin.";

export const metadata = createPageMetadata({
  title: "İstanbul Klima Servisi, Bakım ve Montaj | Vora Teknik",
  description,
  path: "/klima-servisi",
});

export default function ServiceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        id="vora-klima-service-schema"
        data={createServiceSchema({ name: "Klima servisi, bakım ve montaj", description, path: "/klima-servisi" })}
      />
      {children}
    </>
  );
}
