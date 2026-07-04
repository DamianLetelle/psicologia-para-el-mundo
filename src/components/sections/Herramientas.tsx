import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";

const content = {
  titulo: "Algo para tener a mano.",
  texto: "Ejercicios simples para los momentos difíciles, y para conversar en tu próxima sesión.",
  link: { href: "/herramientas", label: "Ver herramientas →" },
};

export default function Herramientas() {
  return (
    <section className="border-y border-borde/60 bg-superficie/40 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{content.titulo}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{content.texto}</p>
          <TransitionLink href={content.link.href} className="mt-6 inline-block font-semibold text-accion hover:underline underline-offset-4">{content.link.label}</TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}
