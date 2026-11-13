import { ImageResponse } from "next/og";

export const alt = "Renovo Multi Trades — one contractor for every trade";
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
          background: "#121916",
          color: "#f6f1e8",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#c6a15a" }}>
          RENOVO MULTI TRADES
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            maxWidth: 920,
          }}
        >
          One contractor for every trade the building needs.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#e6dfd3" }}>
          Electrical · Mechanical · Plumbing · Fit-out · Maintenance
        </div>
      </div>
    ),
    { ...size },
  );
}
