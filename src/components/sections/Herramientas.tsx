import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import { getTextos } from "@/lib/contenido";

export default async function Herramientas() {
  const t = await getTextos();
  return (
    <section className="border-y border-borde/60 bg-superficie/40 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{t["home.herramientas.titulo"]}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{t["home.herramientas.texto"]}</p>
          <TransitionLink href="/herramientas" className="mt-6 inline-block font-semibold text-accion hover:underline underline-offset-4">{t["home.herramientas.cta"]}</TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}
