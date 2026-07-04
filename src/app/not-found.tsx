import Link from "next/link";

export const metadata = { title: "Página no encontrada — Psicología para el mundo" };

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-accion">Página no encontrada</p>
      <h1 className="mt-3 text-3xl md:text-4xl">Esta página se nos escapó</h1>
      <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-tinta-suave">No encontramos lo que buscabas, pero no pasa nada. Volvé al inicio y seguimos desde ahí.</p>
      <Link href="/" className="mt-8 inline-block rounded-2xl bg-accion px-6 py-3 font-semibold text-accion-texto transition hover:brightness-95">Volver al inicio</Link>
    </main>
  );
}
