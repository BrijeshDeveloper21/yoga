import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Preloader } from "@/components/layout/Preloader";
import { PranaParticles } from "@/components/layout/PranaParticles";
import { ScrollPath } from "@/components/layout/ScrollPath";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shraddha Se Yoga",
  description: "Transform Your Mind Body & Soul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${playfair.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <CustomCursor />
        <NoiseOverlay />
        <PranaParticles />
        <ScrollPath />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
