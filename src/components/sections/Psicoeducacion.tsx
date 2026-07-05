import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import { getArticulos, getTextos } from "@/lib/contenido";

export default async function Psicoeducacion() {
  const [t, articulos] = await Promise.all([getTextos(), getArticulos()]);
  const destacados = articulos.slice(0, 3);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{t["home.psico.titulo"]}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{t["home.psico.texto"]}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {destacados.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <TransitionLink href={`/biblioteca/${a.slug}`} className="flex h-full flex-col justify-between rounded-2xl border border-borde bg-superficie p-6 transition-colors hover:border-accion">
                <span className="mb-6 inline-block w-fit rounded-full bg-acento-fondo px-3 py-1 text-xs font-semibold text-acento-texto">{t["home.psico.tag"]}</span>
                <h3 className="text-lg leading-snug">{a.titulo}</h3>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <TransitionLink href="/biblioteca" className="mt-8 inline-block font-semibold text-accion hover:underline underline-offset-4">{t["home.psico.cta"]}</TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}
