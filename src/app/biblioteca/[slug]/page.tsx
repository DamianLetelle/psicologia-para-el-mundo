import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";
import TransitionLink from "@/components/motion/TransitionLink";
import { articulos } from "@/content/articulos";

export function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articulos.find((x) => x.slug === slug);
  return { title: (a ? a.titulo : "Artículo") + " — Psicología para el mundo" };
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articulos.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <main className="mx-auto max-w-2xl px-5 pt-16 pb-24 md:pt-20">
      <Reveal>
        <TransitionLink href="/biblioteca" className="text-sm text-tinta-suave hover:text-tinta">&larr; Biblioteca</TransitionLink>
        <span className="mt-6 inline-block w-fit rounded-full bg-acento-fondo px-3 py-1 text-xs font-semibold text-acento-texto">{a.tema}</span>
        <h1 className="mt-3 text-3xl leading-tight md:text-4xl">{a.titulo}</h1>
        <p className="mt-5 text-lg leading-relaxed text-tinta-suave">{a.entrada}</p>
      </Reveal>
      <Reveal>
        <h2 className="mt-10 text-xl">En esta guía</h2>
        <ul className="mt-4 space-y-3">
          {a.contenido.map((c) => (
            <li key={c} className="flex gap-3 leading-relaxed text-tinta-suave"><span className="mt-1 h-2 w-2 flex-none rounded-full bg-acento" />{c}</li>
          ))}
        </ul>
      </Reveal>
      <Reveal>
        <div className="mt-10 rounded-2xl border border-borde bg-superficie p-6">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-accion">Herramienta para llevar</p>
          <h3 className="mt-2 text-xl">{a.herramienta.nombre}</h3>
          <p className="mt-2 leading-relaxed text-tinta-suave">{a.herramienta.texto}</p>
        </div>
      </Reveal>
      {a.aviso ? (
        <Reveal>
          <p className="mt-6 rounded-xl bg-acento-fondo/60 p-4 text-sm leading-relaxed text-acento-texto">{a.aviso}</p>
        </Reveal>
      ) : null}
      <Reveal>
        <div className="mt-10"><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></div>
      </Reveal>
    </main>
  );
}
