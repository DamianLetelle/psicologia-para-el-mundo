import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: "Psicología para el mundo — Cecilia Torres",
  description:
    "Un espacio cálido para entender lo que te pasa y empezar a sentirte mejor. Psicología a tu ritmo, con Cecilia Torres.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="terracota" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-fondo text-tinta antialiased">{children}</body>
    </html>
  );
}
