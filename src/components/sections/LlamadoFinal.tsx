import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";
import { getTextos } from "@/lib/contenido";

export default async function LlamadoFinal() {
  const t = await getTextos();
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl">{t["home.final.titulo"]}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{t["home.final.texto"]}</p>
          <div className="mt-8"><VaporCTA href="/agendar">{t["home.final.cta"]}</VaporCTA></div>
        </Reveal>
      </div>
    </section>
  );
}
