import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sparq Creations | Igniting Brands, Unleashing Growth",
  description: "We are a forward-thinking brand and creative agency dedicated to helping businesses build authentic connections with their customers and audiences.",
  keywords: ["branding", "creative agency", "brand strategy", "packaging design", "campaign creative", "Africa", "Lagos"],
  authors: [{ name: "Sparq Creations" }],
  openGraph: {
    title: "Sparq Creations | Igniting Brands, Unleashing Growth",
    description: "World-class brand development, built for Africa and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${notoSans.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
