import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Preguntas frecuentes — Psicología para el mundo" };

const faqs = [
  { q: "¿Es confidencial?", a: "Sí. Todo lo que compartas queda entre nosotros; es la base de este espacio." },
  { q: "¿Cómo es la primera vez?", a: "Sin presión. Nos conocemos, me contás qué te trae, y vemos juntos cómo seguir. Los primeros 30 minutos son sin costo y sin compromiso." },
  { q: "¿Las sesiones son online o presenciales?", a: "[Confirmar.] Si es online, nos vemos por videollamada, desde donde te sientas cómodo/a." },
  { q: "¿Cuánto dura una sesión?", a: "[~50 min — confirmar.]" },
  { q: "¿Cada cuánto nos vemos?", a: "Lo definimos juntos según lo que necesites. Muchas personas empiezan una vez por semana." },
  { q: "¿Cuánto cuesta?", a: "La sesión individual es USD 40, con paquetes que bajan hasta USD 30 por consulta. Podés ver el detalle en Honorarios." },
  { q: "¿Cómo pago?", a: "[Medios de pago — a definir.]" },
  { q: "¿Y si tengo que cancelar o reprogramar?", a: "Avisá con tranquilidad [política amable — a definir, p. ej. hasta 24 h antes] y lo acomodamos." },
  { q: "¿Y si no sé qué decir, o me da vergüenza?", a: "Es más común de lo que pensás. No tenés que llegar con nada preparado: empezamos por donde estés." },
  { q: "¿La terapia online sirve igual?", a: "Para la mayoría de las consultas funciona muy bien. Lo que importa es el vínculo y el trabajo que hacemos juntos." },
  { q: "¿Y si no puedo sostener el costo?", a: "Escribime igual. Siempre es mejor que hablemos a que te quedes sin este espacio." },
  { q: "¿Esto reemplaza una urgencia?", a: "No. Si estás en una crisis o pensás en lastimarte, buscá ayuda inmediata: [recursos de ayuda locales]." },
];

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="Preguntas frecuentes" titulo="Lo que quizás te estás preguntando" />
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 3) * 0.05}>
              <div className="rounded-2xl border border-borde bg-superficie p-6">
                <h2 className="text-lg">{f.q}</h2>
                <p className="mt-2 leading-relaxed text-tinta-suave">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
