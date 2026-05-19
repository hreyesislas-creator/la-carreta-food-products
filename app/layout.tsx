import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Cormorant_Garamond,
  Italianno,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "La Carreta Mexican Food | La Carreta Tortilleria — Authentic Handmade Tortillas Since 1939",
  description:
    "La Carreta Mexican Food — known locally as La Carreta Tortilleria — has crafted authentic Mexican tortillas, hand-stretched flour tortillas, handmade tamales, and fresh masa from original family recipes since 1939. Made with simple ingredients and no artificial preservatives.",
  keywords: [
    "La Carreta Mexican Food",
    "La Carreta Tortilleria",
    "authentic Mexican tortillas",
    "handmade tortillas",
    "hand-stretched flour tortillas",
    "handmade tamales",
    "fresh masa",
    "masa for tamales",
    "Mexican food products",
    "Montclair tortilleria",
    "no artificial preservatives",
    "naturally prepared tortillas",
    "preservative-free tortillas",
    "traditional nixtamal",
    "simple ingredients",
    "Mexican spices and seasonings",
  ],
  openGraph: {
    title: "La Carreta Mexican Food · La Carreta Tortilleria — Since 1939",
    description:
      "Original family recipes since 1939. Corn tortillas, hand-stretched flour tortillas, handmade tamales, masa, and Mexican spices — made with simple ingredients and no artificial preservatives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${italianno.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
