import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";
import { getTextos } from "@/lib/contenido";

export const metadata = { title: "Cómo trabajo — Psicología para el mundo" };

export default async function ComoTrabajoPage() {
  const t = await getTextos();
  const puntos = [
    { titulo: t["comoTrabajo.p1.titulo"], texto: t["comoTrabajo.p1.texto"] },
    { titulo: t["comoTrabajo.p2.titulo"], texto: t["comoTrabajo.p2.texto"] },
    { titulo: t["comoTrabajo.p3.titulo"], texto: t["comoTrabajo.p3.texto"] },
  ];
  const pasos = [t["comoTrabajo.paso1"], t["comoTrabajo.paso2"], t["comoTrabajo.paso3"]];
  return (
    <main>
      <PageHero eyebrow={t["comoTrabajo.hero.eyebrow"]} titulo={t["comoTrabajo.hero.titulo"]} intro={t["comoTrabajo.hero.intro"]} />
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          {puntos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-borde bg-superficie p-6">
                <h2 className="text-xl">{p.titulo}</h2>
                <p className="mt-2 leading-relaxed text-tinta-suave">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl">{t["comoTrabajo.pasos.titulo"]}</h2>
          <ul className="mt-5 space-y-3">
            {pasos.map((s) => (
              <li key={s} className="flex gap-3 leading-relaxed text-tinta-suave"><span className="mt-1 h-2 w-2 flex-none rounded-full bg-acento" />{s}</li>
            ))}
          </ul>
          <p className="mt-5 text-tinta-suave">{t["comoTrabajo.nota"]}</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></Reveal>
      </section>
    </main>
  );
}
