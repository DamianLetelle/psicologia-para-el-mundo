import TransitionLink from "@/components/motion/TransitionLink";

export const metadata = { title: "Turno reservado — Psicología para el mundo" };

export default function Listo() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-5 py-16 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-acento text-2xl text-white">&#10003;</div>
      <h1 className="text-3xl md:text-4xl">Tu turno quedó reservado</h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-tinta-suave">Te va a llegar un recordatorio cálido por mail. Cuando llegue el día, este mismo lugar te espera.</p>
      <TransitionLink href="/" className="mt-8 inline-block rounded-2xl border border-borde px-6 py-3 font-semibold hover:bg-superficie">Volver al inicio</TransitionLink>
    </main>
  );
}
