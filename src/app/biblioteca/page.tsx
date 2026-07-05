import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import { getArticulos } from "@/lib/contenido";

export const metadata = { title: "Biblioteca — Psicología para el mundo" };

export default async function BibliotecaPage() {
  const articulos = await getArticulos();
  return (
    <main>
      <PageHero eyebrow="Biblioteca" titulo="Entender lo que te pasa ya es parte del cambio." intro="Historias y guías para poner en palabras eso que a veces cuesta nombrar. Cada una viene con una herramienta para llevar." />
      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {articulos.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 0.08}>
              <TransitionLink href={`/biblioteca/${a.slug}`} className="flex h-full flex-col rounded-2xl border border-borde bg-superficie p-6 transition-colors hover:border-accion">
                <span className="mb-4 inline-block w-fit rounded-full bg-acento-fondo px-3 py-1 text-xs font-semibold text-acento-texto">{a.tema}</span>
                <h2 className="text-xl leading-snug">{a.titulo}</h2>
                <p className="mt-2 leading-relaxed text-tinta-suave">{a.resumen}</p>
                <span className="mt-4 text-sm font-semibold text-accion">Leer →</span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
