import { ImageResponse } from "next/og";
import { IDENTITY } from "@/data/identity";

export const alt = `${IDENTITY.name} — Fullstack & GenAI Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Monochrome OG card matching the site aesthetic: off-white ground, ink text,
// a single emerald accent. Generated at build time from the canonical IDENTITY.
export default function Image() {
  const bg = "#FAFAFA";
  const ink = "#171717";
  const inkSoft = "#525252";
  const accent = "#059669";
  const rule = "#E5E5E5";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          color: ink,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: "0.12em",
            color: inkSoft,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: accent,
            }}
          />
          <span>Portfolio · Bali, Indonesia</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            {IDENTITY.name}
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              fontSize: 40,
              color: inkSoft,
              letterSpacing: "-0.01em",
            }}
          >
            <span>Fullstack</span>
            <span style={{ color: accent }}>&</span>
            <span>GenAI Software Engineer</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${rule}`,
            paddingTop: 28,
            fontSize: 24,
            color: inkSoft,
          }}
        >
          <span>ariellesmana.dev</span>
          <span>RAG · LLM Integration · Next.js · FastAPI</span>
        </div>
      </div>
    ),
    size,
  );
}
