import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";

export const metadata = { title: "Agendar — Psicología para el mundo" };

export default function Agendar() {
  return (
    <main>
      <PageHero eyebrow="Tu primer paso" titulo="Elegí un momento para tu primera sesión" intro="Son 30 minutos, sin costo, para conocernos y ver cómo puedo acompañarte." />
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal>
          <VaporCTA href="/agendar/listo" preset="agendar" className="px-10 py-5 text-lg">Agendar</VaporCTA>
          <p className="mt-4 text-sm text-tinta-suave">(El calendario real se conecta en la próxima etapa.)</p>
        </Reveal>
      </section>
    </main>
  );
}
