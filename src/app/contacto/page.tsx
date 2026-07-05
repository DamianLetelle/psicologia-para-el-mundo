import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";
import AvisoCrisis from "@/components/AvisoCrisis";
import { getTextos } from "@/lib/contenido";

export const metadata = { title: "Contacto — Psicología para el mundo" };

export default async function ContactoPage() {
  const t = await getTextos();
  return (
    <main>
      <PageHero eyebrow={t["contacto.hero.eyebrow"]} titulo={t["contacto.hero.titulo"]} intro={t["contacto.hero.intro"]} />
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <p className="leading-relaxed text-tinta-suave">Escribime por <span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[medio de contacto — a definir: mail, WhatsApp]</span> y coordinamos. También podés reservar tu primera charla directamente.</p>
          <div className="mt-6"><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal>
          <div className="rounded-xl bg-acento-fondo/60 p-4"><AvisoCrisis /></div>
        </Reveal>
      </section>
    </main>
  );
}
