import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";
import { getTextos } from "@/lib/contenido";

export const metadata = { title: "Sobre Cecilia — Psicología para el mundo" };

export default async function SobrePage() {
  const t = await getTextos();
  return (
    <main>
      <PageHero eyebrow={t["sobre.hero.eyebrow"]} titulo={t["sobre.hero.titulo"]} intro={t["sobre.hero.intro"]} />
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-tinta-suave">
            <p>{t["sobre.formacion"]}</p>
            <p>{t["sobre.personal"]}</p>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></Reveal>
      </section>
    </main>
  );
}
