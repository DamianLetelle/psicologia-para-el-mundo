import Reveal from "@/components/Reveal";
import VaporCTA from "@/components/VaporCTA";
import TransitionLink from "@/components/motion/TransitionLink";
import { getTextos } from "@/lib/contenido";

export default async function Hero() {
  const t = await getTextos();
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
      <Reveal className="max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-accion">{t["home.hero.eyebrow"]}</p>
        <h1 className="text-4xl leading-[1.12] tracking-tight md:text-6xl">{t["home.hero.titulo"]}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tinta-suave md:text-xl">{t["home.hero.subtitulo"]}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <VaporCTA href="/agendar">{t["home.hero.cta"]}</VaporCTA>
          <TransitionLink href="/como-trabajo" className="text-sm font-semibold text-tinta-suave underline-offset-4 hover:text-tinta hover:underline">{t["home.hero.secundario"]}</TransitionLink>
        </div>
        <p className="mt-4 text-sm text-tinta-suave">{t["home.hero.nota"]}</p>
      </Reveal>
    </section>
  );
}
