import VaporCTA from "@/components/VaporCTA";

const brand = "Psicología para el mundo";
const links = [
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#herramientas", label: "Herramientas" },
  { href: "#inversion", label: "Honorarios" },
  { href: "#sobre", label: "Sobre Cecilia" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-borde/70 bg-fondo/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <span className="font-serif text-lg font-semibold">{brand}</span>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-tinta-suave transition-colors hover:text-tinta">{l.label}</a>
          ))}
        </div>
        <VaporCTA href="/agendar" className="px-5 py-2.5 text-sm">Agendar</VaporCTA>
      </nav>
    </header>
  );
}
