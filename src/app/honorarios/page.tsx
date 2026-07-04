import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";

export const metadata = { title: "Honorarios — Psicología para el mundo" };

const opciones = [
  { t: "Sesión individual", p: "USD 40" },
  { t: "Paquetes con descuento", p: "hasta USD 30 por consulta" },
  { t: "Trabajos puntuales", p: "[a definir con Cecilia]" },
];

export default function HonorariosPage() {
  return (
    <main>
      <PageHero eyebrow="La inversión" titulo="Tu inversión en bienestar" intro="Pedir ayuda ya es un paso valiente. Acá vas a ver con claridad qué incluye cada encuentro, para que decidas con tranquilidad y sin sorpresas." />
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl">Qué incluye una sesión</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">Cada sesión son <span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[~50 min — confirmar]</span> pensados para vos. No es solo el tiempo que compartimos: también la preparación de cada encuentro y el seguimiento entre sesiones. Modalidad: <span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[online / presencial — confirmar]</span>.</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {opciones.map((o) => (
              <div key={o.t} className="rounded-2xl border border-borde bg-superficie p-5">
                <h3 className="text-base">{o.t}</h3>
                <p className="mt-2 text-lg font-bold text-accion">{o.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-tinta-suave">Los valores y paquetes son configurables; se editan como dato, sin tocar la página.</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-8">
        <Reveal>
          <div className="rounded-2xl bg-acento-fondo/50 p-6">
            <h2 className="text-xl text-acento-texto">¿Y si hoy no podés sostenerlo?</h2>
            <p className="mt-2 leading-relaxed text-acento-texto/90">Escribime igual. Siempre es mejor que hablemos a que te quedes sin este espacio.</p>
          </div>
          <p className="mt-6 leading-relaxed text-tinta-suave"><strong className="text-tinta">Medios de pago:</strong> <span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[A definir: Mercado Pago, transferencia, medios internacionales…]</span></p>
          <p className="mt-6 text-lg leading-relaxed text-tinta">Nada es caro cuando se trata de tu salud mental. Y el primer paso —esos primeros 30 minutos— no tiene costo.</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal><VaporCTA href="/agendar">Agendá tu primera charla</VaporCTA></Reveal>
      </section>
    </main>
  );
}
