import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";
import Footer from "../../components/Home/Footer/Footer";
const font = Inter({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BB Coaching Professional Motorsport Coaching",
  description: "BB Coaching Professional Motorsport Coaching by Bertold Bors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-white`}
      >
        <ResponsiveNav />
        {children}
        <Footer />  
        <Analytics />
      </body>
    </html> 
  );
}
