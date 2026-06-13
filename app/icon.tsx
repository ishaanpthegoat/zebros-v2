import { ImageResponse } from "next/og";

// Branded favicon: navy "Z" on the team pink. Replaces the default Next favicon.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#DC4F72",
          color: "#141E42",
          fontSize: 24,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        Z
      </div>
    ),
    { ...size },
  );
}
