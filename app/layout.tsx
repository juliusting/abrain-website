import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: "Abrain — Malaysia's Stainless Steel Smart Lock",
    template: "%s | Abrain Smart Lock",
  },
  description:
    "Abrain designs and builds 304 stainless steel smart door locks in Malaysia — fully-automatic keyless entry for wooden, security, grille and glass doors. Anti-pry, anti-drill, app-controlled. Installed nationwide.",
  keywords: [
    "smart lock Malaysia",
    "digital door lock",
    "stainless steel smart lock",
    "keyless entry",
    "fingerprint door lock",
    "grille door smart lock",
    "Abrain",
  ],
  authors: [{ name: "AHD Distributions (M) Sdn. Bhd." }],
  metadataBase: new URL("https://abrain.com.my"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://abrain.com.my",
    siteName: "Abrain Smart Lock",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abrain — Malaysia's Stainless Steel Smart Lock" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://abrain.com.my" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
