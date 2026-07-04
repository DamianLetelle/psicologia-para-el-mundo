import VaporCTA from "@/components/VaporCTA";
import TransitionLink from "@/components/motion/TransitionLink";
import MobileMenu from "@/components/MobileMenu";

const brand = "Psicología para el mundo";
const links = [
  { href: "/como-trabajo", label: "Cómo trabajo" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/honorarios", label: "Honorarios" },
  { href: "/sobre", label: "Sobre Cecilia" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-borde/70 bg-fondo/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <TransitionLink href="/" className="font-serif text-lg font-semibold">{brand}</TransitionLink>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <TransitionLink key={l.href} href={l.href} className="text-sm text-tinta-suave transition-colors hover:text-tinta">{l.label}</TransitionLink>
          ))}
        </div>
        <div className="hidden md:block">
          <VaporCTA href="/agendar" className="px-5 py-2.5 text-sm">Agendar</VaporCTA>
        </div>
        <MobileMenu links={links} />
      </nav>
    </header>
  );
}
