import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";

export const metadata = { title: "Sobre Cecilia — Psicología para el mundo" };

export default function SobrePage() {
  return (
    <main>
      <PageHero eyebrow="Quién te acompaña" titulo="Sobre Cecilia" intro="Soy Cecilia, psicóloga. Acompaño a personas que atraviesan ansiedad, cambios y momentos difíciles." />
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-tinta-suave">
            <p><span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[Formación y experiencia — a completar con Cecilia]</span></p>
            <p><span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[Una o dos líneas personales, en su voz: su forma de acompañar.]</span></p>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></Reveal>
      </section>
    </main>
  );
}
