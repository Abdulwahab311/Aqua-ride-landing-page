import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Cormorant_Garamond, Manrope, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aquaride.com"),
  title: {
    default: "AquaRide – On-Demand Water Tanker Delivery in Ghana | Accra, Kumasi, Takoradi",
    template: "%s | AquaRide Ghana",
  },
  description:
    "AquaRide is Ghana's leading on-demand water tanker delivery platform. Order GWCL certified clean water in Accra, Kumasi & Takoradi with real-time tracking, smart matching, and scheduled refills. Bulk & emergency water delivery available.",
  keywords: [
    "water delivery Ghana",
    "water tanker Accra",
    "on-demand water delivery",
    "AquaRide Ghana",
    "clean water delivery Kumasi",
    "water supply Takoradi",
    "GWCL certified water",
    "bulk water delivery",
    "emergency water delivery Ghana",
    "water tanker delivery",
    "Ghana water supply",
  ],
  authors: [{ name: "AquaRide", url: "https://aquaride.com" }],
  creator: "AquaRide",
  publisher: "AquaRide",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aquaride.com",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://aquaride.com",
    siteName: "AquaRide",
    title: "AquaRide – On-Demand Water Tanker Delivery in Ghana",
    description:
      "Order clean water delivery in Accra, Kumasi & Takoradi. GWCL certified, real-time tracking, bulk & emergency water tanker service.",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "AquaRide – On-Demand Water Tanker Delivery in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaRide – On-Demand Water Tanker Delivery in Ghana",
    description:
      "Order clean water delivery in Accra, Kumasi & Takoradi. GWCL certified, real-time tracking, bulk & emergency water tanker service.",
    images: ["/brand/og-image.png"],
    creator: "@aquaride",
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${cormorant.variable} ${manrope.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
