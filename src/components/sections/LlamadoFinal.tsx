import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

const content = {
  titulo: "El primer paso puede ser hoy.",
  texto: "Cuando quieras, lo damos juntos.",
  cta: "Agendá tu primera charla",
};

export default function LlamadoFinal() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl">{content.titulo}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{content.texto}</p>
          <div className="mt-8"><Button href="/agendar">{content.cta}</Button></div>
        </Reveal>
      </div>
    </section>
  );
}
