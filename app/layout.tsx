import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://praxis.gs"),
  title: "Praxis — Your organization has an operating system.",
  description:
    "The operating system behind your people, processes, and performance. Designed for organizations that outgrow their tools.",
  openGraph: {
    type: "website",
    title: "Praxis — Your organization has an operating system.",
    description:
      "The operating system behind your people, processes, and performance. Designed for organizations that outgrow their tools.",
    siteName: "Praxis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}