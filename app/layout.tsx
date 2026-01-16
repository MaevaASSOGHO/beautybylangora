import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const brand = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty by Langora",
  description: "Prestations maquillage à Abidjan — naturel, glam, bridal, shooting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${brand.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
