// app/[locale]/page.tsx
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Home from "@/components/Home";
import AllSchema from "./AllSchema";
import type { Messages } from "@/types/messages";

export const revalidate = 3600; // ISR: regenerate up to once per hour

// TODO: set your real domain and absolute logo URL
const SITE_URL = "https://bertoldbors.com";
const LOGO_URL = "https://bertoldbors.com/images/logoDark.png";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = (await getMessages({ locale })) as Messages;

  return (
    <>
      <AllSchema
        locale={locale}
        t={messages}
        siteUrl={SITE_URL}
        logoUrl={LOGO_URL}
        social={[
          "https://www.instagram.com/borsberti/",
          "https://www.facebook.com/robinagyker/",
          "https://www.tiktok.com/robinagyker/",
          "https://www.linkedin.com/in/döme-marcell-kisbalázs",
        ]}
        person={{
          name: "Bertold Bors",
          jobTitle: "Motorsport Performance Analyst & Driver Coach",
          imageUrl: "https://bertoldbors.com/images/bertold-bors.jpg",
        }}
        address={{
          streetAddress: "",
          addressLocality: "Budapest",
          addressCountry: "HU",
          postalCode: "",
        }}
      />
      <Home t={messages} />
    </>
  );
}