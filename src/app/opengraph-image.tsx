import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

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
          background: `linear-gradient(168deg, ${brand.chrome} 0%, ${brand.navy} 55%, ${brand.navySoft} 100%)`,
          color: brand.white,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: brand.lime,
          }}
        >
          PROGESTI
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Le logiciel qui simplifie le nettoyage professionnel
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "#c5d4dc",
              maxWidth: 820,
            }}
          >
            Planning · Pointage · Facturation — 149 € HT/mois · essai 7 jours sans CB
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#e8f0f4" }}>progesti.fr</div>
      </div>
    ),
    { ...size },
  );
}
