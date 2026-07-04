import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import { articulos } from "@/content/articulos";

export const metadata = { title: "Herramientas — Psicología para el mundo" };

export default function HerramientasPage() {
  return (
    <main>
      <PageHero eyebrow="Recursos" titulo="Algo para tener a mano." intro="Ejercicios simples para los momentos difíciles, y para conversar en tu próxima sesión. Cada uno sale de una guía de la biblioteca." />
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <div className="space-y-5">
          {articulos.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 0.06}>
              <div className="rounded-2xl border border-borde bg-superficie p-6">
                <h2 className="text-xl">{a.herramienta.nombre}</h2>
                <p className="mt-2 leading-relaxed text-tinta-suave">{a.herramienta.texto}</p>
                <TransitionLink href={`/biblioteca/${a.slug}`} className="mt-4 inline-block text-sm font-semibold text-accion hover:underline underline-offset-4">Ver la guía: {a.tema} →</TransitionLink>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
