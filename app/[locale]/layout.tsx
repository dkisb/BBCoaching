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
import { SITE_NAME, SITE_URL, localeAlternates, localeUrl } from "@/lib/site";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// Localized metadata per locale (uses next-intl messages)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });
  const title =
    messages?.metadata?.title ??
    "BB Coaching Professional Motorsport Coaching";
  const description =
    messages?.metadata?.description ??
    "BB Coaching Professional Motorsport Coaching by Bertold Bors";

  const url = localeUrl(locale);

  // OG/Twitter images come from the opengraph-image.tsx file convention.
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: localeAlternates(),
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: locale === "hu" ? "hu_HU" : "en_US",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${font.className} antialiased bg-white`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ResponsiveNav />
          {children}
          <Footer
            footer={
              messages?.footer ?? {
                copyright: "Copyright {year} BB Coaching Professional Motorsport Coaching by Bertold Bors",
                tagline: "",
                cta: "Book a call",
              }
            }
            nav={messages?.nav}
            contact={messages?.contact}
          />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}