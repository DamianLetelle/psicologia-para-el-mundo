import Reveal from "@/components/Reveal";
import type { ReactNode } from "react";

// Encabezado de página reusable (eyebrow + título + intro).
export default function PageHero({ eyebrow, titulo, intro }: { eyebrow: string; titulo: string; intro?: ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-3xl px-5 pt-16 pb-8 md:pt-20">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-accion">{eyebrow}</p>
      <h1 className="text-4xl leading-[1.12] md:text-5xl">{titulo}</h1>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-tinta-suave">{intro}</p> : null}
    </Reveal>
  );
}
