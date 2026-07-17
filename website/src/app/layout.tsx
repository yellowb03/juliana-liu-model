import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { LocaleProvider } from "@/context/locale-context";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Juliana Liu · Model · Taiwan",
    template: "%s · Juliana Liu",
  },
  description:
    "Editorial presence. Natural confidence. Taiwan-based model available for fashion, beauty, lifestyle, and creative collaborations.",
  openGraph: {
    title: "Juliana Liu · Model · Taiwan",
    description:
      "Premium modeling portfolio. Fashion, beauty, lifestyle, and creative collaborations.",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 334, height: 506, alt: "Juliana Liu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juliana Liu · Model · Taiwan",
    description:
      "Premium modeling portfolio. Fashion, beauty, lifestyle, and creative collaborations.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-ivory">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
