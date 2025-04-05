import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Krypto - NFT Marketplace",
  description: "The most secure marketplace for buying and selling unique crypto assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${roboto.variable} antialiased bg-background min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
