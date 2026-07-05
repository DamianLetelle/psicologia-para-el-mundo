import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getFaqs } from "@/lib/contenido";

export const metadata = { title: "Preguntas frecuentes — Psicología para el mundo" };

export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <main>
      <PageHero eyebrow="Preguntas frecuentes" titulo="Lo que quizás te estás preguntando" />
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.pregunta} delay={(i % 3) * 0.05}>
              <div className="rounded-2xl border border-borde bg-superficie p-6">
                <h2 className="text-lg">{f.pregunta}</h2>
                <p className="mt-2 leading-relaxed text-tinta-suave">{f.respuesta}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
