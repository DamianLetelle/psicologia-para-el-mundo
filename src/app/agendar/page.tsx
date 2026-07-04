import Link from "next/link";
import VaporCTA from "@/components/VaporCTA";

export const metadata = { title: "Agendar — Psicología para el mundo" };

export default function Agendar() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5 py-16">
      <Link href="/" className="mb-6 text-sm text-tinta-suave hover:text-tinta">&larr; Volver</Link>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-accion">Tu primer paso</p>
      <h1 className="text-3xl md:text-4xl">Elegí un momento para tu primera sesión</h1>
      <p className="mt-4 text-lg leading-relaxed text-tinta-suave">Son 30 minutos, sin costo, para conocernos y ver cómo puedo acompañarte.</p>
      <div className="mt-8"><VaporCTA href="/agendar/listo" preset="agendar" className="px-10 py-5 text-lg">Agendar</VaporCTA></div>
      <p className="mt-4 text-sm text-tinta-suave">(El calendario real se conecta en la próxima etapa.)</p>
    </main>
  );
}
