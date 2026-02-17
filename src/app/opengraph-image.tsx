import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sathi Group — We Build AI Tools For Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF7F2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 14,
            fontWeight: 500,
            color: "#8C8577",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
          }}
        >
          SATHI GROUP
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1C1917",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            We build AI tools
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1C1917",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            for your business.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#8C8577",
              maxWidth: "600px",
              lineHeight: 1.5,
            }}
          >
            Custom AI agents that replace expensive software, automate
            operations, and give your team leverage that compounds every day.
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#A8A196",
              letterSpacing: "0.05em",
            }}
          >
            sathigroup.ai
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
