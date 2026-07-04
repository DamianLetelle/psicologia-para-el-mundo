import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";

const content = {
  eyebrow: "Psicología cálida, a tu ritmo",
  titulo: "Un espacio para entender lo que te pasa, y empezar a sentirte mejor.",
  subtitulo: "Psicología cálida y a tu ritmo. El primer paso puede ser hoy, y no tenés que darlo solo/a.",
  cta: "Agendá tu primera charla",
  secundario: "Conocer cómo trabajo",
  nota: "Los primeros 30 minutos son sin costo. Sin compromiso.",
};

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
      <Reveal className="max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-accion">{content.eyebrow}</p>
        <h1 className="text-4xl leading-[1.12] tracking-tight md:text-6xl">{content.titulo}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tinta-suave md:text-xl">{content.subtitulo}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <VaporCTA href="/agendar">{content.cta}</VaporCTA>
          <a href="#como-trabajo" className="text-sm font-semibold text-tinta-suave underline-offset-4 hover:text-tinta hover:underline">{content.secundario}</a>
        </div>
        <p className="mt-4 text-sm text-tinta-suave">{content.nota}</p>
      </Reveal>
    </section>
  );
}
