// app/[locale]/page.tsx
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Home from "@/components/Home";
import AllSchema from "./AllSchema";
import type { Messages } from "@/types/messages";

export const revalidate = 3600; // ISR: regenerate up to once per hour

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
      <AllSchema locale={locale} t={messages} />
      <Home t={messages} />
    </>
  );
}
