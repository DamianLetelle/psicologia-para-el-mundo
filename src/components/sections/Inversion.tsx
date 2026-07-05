import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import { getTextos } from "@/lib/contenido";

export default async function Inversion() {
  const textos = await getTextos();
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{textos["home.inversion.titulo"]}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{textos["home.inversion.texto"]}</p>
          <TransitionLink href="/honorarios" className="mt-6 inline-block font-semibold text-accion hover:underline underline-offset-4">{textos["home.inversion.cta"]}</TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}
