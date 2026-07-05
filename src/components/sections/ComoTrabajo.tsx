import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import { getTextos } from "@/lib/contenido";

export default async function ComoTrabajo() {
  const t = await getTextos();
  const puntos = [
    { titulo: t["home.comoTrabajo.p1.titulo"], texto: t["home.comoTrabajo.p1.texto"] },
    { titulo: t["home.comoTrabajo.p2.titulo"], texto: t["home.comoTrabajo.p2.texto"] },
    { titulo: t["home.comoTrabajo.p3.titulo"], texto: t["home.comoTrabajo.p3.texto"] },
  ];
  return (
    <section className="border-t border-borde/60 bg-superficie/40 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal><h2 className="text-3xl md:text-4xl">{t["home.comoTrabajo.titulo"]}</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {puntos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-borde bg-superficie p-6">
                <h3 className="text-xl">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-tinta-suave">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <TransitionLink href="/como-trabajo" className="mt-8 inline-block font-semibold text-accion hover:underline underline-offset-4">{t["home.comoTrabajo.cta"]}</TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}
