import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getLocalBusinessJsonLd } from "@/lib/jsonld";
import { rootMetadata } from "@/lib/metadata";
import { DM_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="en-NZ" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD for SEO
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-20 rounded bg-navy px-4 py-2 text-white no-underline focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
