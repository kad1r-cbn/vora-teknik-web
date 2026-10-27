import { ImageResponse } from "next/og";

export const alt = "Vora Teknik — İstanbul kombi, klima ve petek servisi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 68px",
          background: "#000d26",
          color: "#f6faff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3, width: 41, height: 41, transform: "rotate(-8deg)" }}>
              <div style={{ width: 19, height: 19, borderTopLeftRadius: 16, background: "#f6faff" }} />
              <div style={{ width: 19, height: 19, borderTopRightRadius: 16, background: "#f6faff" }} />
              <div style={{ width: 19, height: 19, borderBottomLeftRadius: 16, background: "#f6faff" }} />
              <div style={{ width: 19, height: 19, borderBottomRightRadius: 16, background: "#00d9ff" }} />
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -2 }}>VORA TEKNİK</div>
          </div>
          <div style={{ fontSize: 21, color: "#bfd0e1" }}>İSTANBUL GENELİ SERVİS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 78, fontWeight: 700, letterSpacing: -4, lineHeight: 1.1 }}>
          <div>Evinizin konforu.</div>
          <div style={{ color: "#00d9ff" }}>Her mevsim, Vora.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #35516c", paddingTop: 26 }}>
          <div style={{ display: "flex", gap: 28, fontSize: 25 }}>
            <span>Kombi servisi</span>
            <span>Klima bakımı</span>
            <span>Petek temizliği</span>
          </div>
          <div style={{ fontSize: 23, color: "#00d9ff" }}>vorateknik.com</div>
        </div>
      </div>
    ),
    size,
  );
}
