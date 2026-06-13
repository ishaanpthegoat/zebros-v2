import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

// Branded social share image (PRD §7), used for every page via the file
// convention. Dark background, pink accent — on brand.
export const alt = `${siteConfig.teamName} — ${siteConfig.program} Team #${siteConfig.teamNumber}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#181318",
          color: "#FFFDFE",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#DC4F72" }}>
          {`#${siteConfig.teamNumber}`}
        </div>
        <div
          style={{
            fontSize: 128,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginTop: 8,
          }}
        >
          {siteConfig.teamName}
        </div>
        <div style={{ fontSize: 34, color: "#b9b1b5", marginTop: 24 }}>
          {`${siteConfig.program} · ${siteConfig.location}`}
        </div>
        <div
          style={{
            marginTop: 44,
            height: 8,
            width: 220,
            background: "#DC4F72",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
