import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";

export const metadata = { title: "Contacto — Psicología para el mundo" };

export default function ContactoPage() {
  return (
    <main>
      <PageHero eyebrow="Contacto" titulo="Cuando quieras, hablamos" intro="El primer paso puede ser un mensaje. Los primeros 30 minutos son sin costo y sin compromiso." />
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <p className="leading-relaxed text-tinta-suave">Escribime por <span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[medio de contacto — a definir: mail, WhatsApp]</span> y coordinamos. También podés reservar tu primera charla directamente.</p>
          <div className="mt-6"><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal>
          <p className="rounded-xl bg-acento-fondo/60 p-4 text-sm leading-relaxed text-acento-texto"><strong>Si estás en una crisis o pensás en lastimarte</strong>, esto no reemplaza una ayuda inmediata. Buscá ayuda ahora: <span className="opacity-80">[recursos de ayuda locales — a completar]</span></p>
        </Reveal>
      </section>
    </main>
  );
}
