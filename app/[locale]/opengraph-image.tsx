import { ImageResponse } from "next/og";
import { getMessages } from "next-intl/server";
import { PERSON, SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} – ${PERSON.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Text-only share card until a real trackside photo is chosen for the redesign.
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const eyebrow = messages?.hero?.eyebrow ?? "Motorsport Performance Coaching";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#131313",
          color: "#F8F8F4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#4D84FF", letterSpacing: 4 }}>
          {eyebrow.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>{PERSON.name}</div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#C9C9C2" }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", height: 8, width: 220, background: "#0046E0" }} />
      </div>
    ),
    size
  );
}
