import { ImageResponse } from "next/og";
import { getModuleContent } from "@/lib/modules-content";
import { brand } from "@/lib/brand";
import { modules, site } from "@/lib/site";

export const alt = "Module PROGESTI — logiciel propreté";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function ModuleOpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  const content = getModuleContent(slug);

  const title = mod?.title ?? "Module PROGESTI";
  const pillar = content?.pillar ?? "Fonctionnalité";
  const subtitle = mod?.short ?? "Logiciel pour entreprises de nettoyage en France";

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
          background: `linear-gradient(145deg, ${brand.chrome} 0%, ${brand.navy} 48%, ${brand.navySoft} 100%)`,
          color: brand.white,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: brand.lime,
          }}
        >
          {`PROGESTI · ${pillar}`}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 960 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
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
            {subtitle.length > 120 ? `${subtitle.slice(0, 117)}…` : subtitle}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#e8f0f4" }}>
          {`149 € HT/mois · essai ${site.trialDays} j sans CB · progesti.fr`}
        </div>
      </div>
    ),
    { ...size },
  );
}
