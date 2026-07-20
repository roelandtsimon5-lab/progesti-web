import { ImageResponse } from "next/og";

export const alt = "PROGESTI — Logiciel de gestion pour entreprises de nettoyage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #0b3d6e 0%, #134a7a 45%, #1565a8 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#1fa86b",
          }}
        >
          PROGESTI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Le logiciel qui simplifie le nettoyage professionnel
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.35, color: "#c5dcf0", maxWidth: 820 }}>
            Planning · Pointage terrain · Facturation — dès 29,99 € HT/mois
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#e8f2fa" }}>progesti.fr</div>
      </div>
    ),
    { ...size },
  );
}
