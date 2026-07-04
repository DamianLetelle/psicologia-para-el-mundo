import Reveal from "@/components/Reveal";

const content = {
  titulo: "Entender lo que te pasa ya es parte del cambio.",
  texto: "Historias y guías para poner en palabras eso que a veces cuesta nombrar.",
  tag: "Psicoeducación",
  piezas: [
    "Cuando el cuerpo se adelanta: los ataques de pánico",
    "La ansiedad, explicada con calma",
    "Cuando cuesta hasta salir de la cama",
  ],
  link: { href: "#biblioteca", label: "Ver la biblioteca →" },
};

export default function Psicoeducacion() {
  return (
    <section id="biblioteca" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{content.titulo}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{content.texto}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.piezas.map((t, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-borde bg-superficie p-6">
                <span className="mb-6 inline-block w-fit rounded-full bg-acento-fondo px-3 py-1 text-xs font-semibold text-acento-texto">{content.tag}</span>
                <h3 className="text-lg leading-snug">{t}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <a href={content.link.href} className="mt-8 inline-block font-semibold text-accion hover:underline underline-offset-4">{content.link.label}</a>
        </Reveal>
      </div>
    </section>
  );
}
