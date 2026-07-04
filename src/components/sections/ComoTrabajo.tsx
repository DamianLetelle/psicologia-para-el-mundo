import Reveal from "@/components/Reveal";

const content = {
  titulo: "Cómo trabajo",
  puntos: [
    { titulo: "Sin juzgar", texto: "Un lugar seguro para mirar lo que sentís, con calma." },
    { titulo: "A tu ritmo", texto: "Vamos paso a paso; no hay una forma “correcta” de sentirse." },
    { titulo: "Con herramientas", texto: "Te llevás recursos para tus días, no solo la hora de sesión." },
  ],
  link: { href: "/agendar", label: "Cómo trabajo →" },
};

export default function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="border-t border-borde/60 bg-superficie/40 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal><h2 className="text-3xl md:text-4xl">{content.titulo}</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.puntos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-borde bg-superficie p-6">
                <h3 className="text-xl">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-tinta-suave">{p.texto}</p>
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
