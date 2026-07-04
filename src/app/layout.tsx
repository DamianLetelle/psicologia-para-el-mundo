import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

const titulo = `${SITE_NAME} — Cecilia Torres`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE_NAME,
    title: titulo,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: titulo, description: SITE_DESCRIPTION },
};

// Datos estructurados (estáticos, controlados — no hay entrada de usuario).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: titulo,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  areaServed: "Latinoamérica",
  provider: { "@type": "Person", name: "Cecilia Torres", jobTitle: "Psicóloga" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="terracota" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-fondo text-tinta antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
