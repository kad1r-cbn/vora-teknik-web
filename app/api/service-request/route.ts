import { getSupabaseClient } from "@/utils/supabase";

export const runtime = "nodejs";

const services = new Set(["Kombi", "Klima", "Petek", "Diğer"]);
const unavailable =
  "Şu anda form üzerinden talep alamıyoruz. Lütfen bizi arayın veya WhatsApp üzerinden yazın.";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const source = new URL(origin);
      // Next can bind request.url to 0.0.0.0 behind a proxy; Host is the address the browser used.
      const host = request.headers.get("host") ?? new URL(request.url).host;
      if (
        !["https:", "http:"].includes(source.protocol) ||
        source.host !== host
      ) {
        return Response.json(
          { message: "Bu istek kabul edilemedi." },
          { status: 403 },
        );
      }
    } catch {
      return Response.json(
        { message: "Bu istek kabul edilemedi." },
        { status: 403 },
      );
    }
  }

  let data: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 4096)
      return Response.json({ message: "Talep çok uzun." }, { status: 413 });
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Invalid body");
    data = parsed as Record<string, unknown>;
  } catch {
    return Response.json(
      { message: "Talep bilgileri okunamadı." },
      { status: 400 },
    );
  }

  const fullName =
    typeof data.fullName === "string"
      ? data.fullName.trim().replace(/\s+/g, " ")
      : "";
  const phone =
    typeof data.phone === "string" ? data.phone.replace(/[\s()+.-]/g, "") : "";
  const deviceType = typeof data.deviceType === "string" ? data.deviceType : "";
  const validPhone = /^(?:0[2-5]\d{9}|90[2-5]\d{9}|[2-5]\d{9})$/.test(phone);

  if (
    fullName.length < 2 ||
    fullName.length > 100 ||
    !validPhone ||
    !services.has(deviceType) ||
    data.consent !== true ||
    Boolean(data.website)
  ) {
    return Response.json(
      {
        message:
          "Adınızı, geçerli telefon numaranızı ve hizmet seçiminizi kontrol edip iletişim onayını işaretleyin.",
      },
      { status: 422 },
    );
  }

  try {
    const supabase = getSupabaseClient();
    if (!supabase)
      return Response.json({ message: unavailable }, { status: 503 });
    const { error } = await supabase.from("web_requests").insert({
      full_name: fullName,
      phone_number: phone,
      device_type: deviceType,
    });
    if (error) return Response.json({ message: unavailable }, { status: 502 });
    return Response.json(
      {
        message:
          "Talebiniz bize ulaştı. Servis planlaması için sizinle iletişime geçeceğiz.",
      },
      { status: 201 },
    );
  } catch {
    return Response.json({ message: unavailable }, { status: 503 });
  }
}
