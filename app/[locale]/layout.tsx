// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from "@/components/Footer/Footer";

// Adjust to your real domain
const siteUrl = "https://bertoldbors.com";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// Localized metadata per locale (uses next-intl messages)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });
  const title =
    messages?.metadata?.title ??
    "BB Coaching Professional Motorsport Coaching";
  const description =
    messages?.metadata?.description ??
    "BB Coaching Professional Motorsport Coaching by Bertold Bors";

  // Build per-locale URLs
  const url = `${siteUrl}/${locale}`;

  // Build alternates map for hreflang
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${siteUrl}/${l}`;
  }

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${font.className} antialiased bg-white`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ResponsiveNav />
          {children}
          <Footer t={messages?.footer ?? { copyright: "Copyright {year} BB Coaching Professional Motorsport Coaching by Bertold Bors" }} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}