import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";

export const metadata = { title: "Cómo trabajo — Psicología para el mundo" };

const puntos = [
  { titulo: "Sin juzgar", texto: "Un lugar seguro para mirar lo que sentís, con calma. No hay temas prohibidos ni respuestas “correctas”: empezamos por donde estés." },
  { titulo: "A tu ritmo", texto: "Vamos paso a paso, sin apurar procesos. La terapia no es una carrera; es un espacio para entenderte con tiempo." },
  { titulo: "Con herramientas", texto: "Te llevás recursos concretos para tus días —ejercicios, ideas para observarte— y no solo la hora de sesión." },
];

const pasos = [
  "Nos conocemos y me contás qué te trae, sin presión.",
  "Vemos juntos qué necesitás y cómo podemos trabajarlo.",
  "Vas probando herramientas entre sesiones, a tu ritmo.",
];

export default function ComoTrabajoPage() {
  return (
    <main>
      <PageHero eyebrow="La terapia" titulo="Cómo trabajo" intro="Un encuentro tranquilo, a tu ritmo. Escucho sin apurar y vamos armando, juntos, un espacio de confianza." />
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          {puntos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-borde bg-superficie p-6">
                <h2 className="text-xl">{p.titulo}</h2>
                <p className="mt-2 leading-relaxed text-tinta-suave">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl">Qué esperar de la primera vez</h2>
          <ul className="mt-5 space-y-3">
            {pasos.map((s) => (
              <li key={s} className="flex gap-3 leading-relaxed text-tinta-suave"><span className="mt-1 h-2 w-2 flex-none rounded-full bg-acento" />{s}</li>
            ))}
          </ul>
          <p className="mt-5 text-tinta-suave">Los primeros 30 minutos son sin costo y sin compromiso.</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></Reveal>
      </section>
    </main>
  );
}
