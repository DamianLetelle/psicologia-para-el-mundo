import Reveal from "@/components/Reveal";

const content = {
  titulo: "Tu inversión en bienestar.",
  texto: "Cuidarte no es un gasto. Mirá con claridad qué incluye cada encuentro, sin sorpresas y a tu medida.",
  link: { href: "#inversion", label: "Ver honorarios →" },
};

export default function Inversion() {
  return (
    <section id="inversion" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{content.titulo}</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta-suave">{content.texto}</p>
          <a href={content.link.href} className="mt-6 inline-block font-semibold text-accion hover:underline underline-offset-4">{content.link.label}</a>
        </Reveal>
      </div>
    </section>
  );
}
