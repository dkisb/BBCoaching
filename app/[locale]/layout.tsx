import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import Footer from '@/components/Home/Footer/Footer';

const font = Inter({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BB Coaching Professional Motorsport Coaching",
  description: "BB Coaching Professional Motorsport Coaching by Bertold Bors",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}>) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });
  
  return (
    <html lang={locale}>
      <body
        className={`${font.className} antialiased bg-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ResponsiveNav />
          {children}
          <Footer />  
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html> 
  );
}
