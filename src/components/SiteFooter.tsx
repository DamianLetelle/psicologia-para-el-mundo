const links = [
  { href: "#", label: "Contacto" },
  { href: "#", label: "Preguntas frecuentes" },
  { href: "#", label: "Privacidad" },
  { href: "#", label: "Términos" },
];
const avisoUrgencia = "esto no reemplaza una ayuda inmediata.";
const recursos = "[Recursos de ayuda locales — a completar]";

export default function SiteFooter() {
  return (
    <footer className="border-t border-borde bg-superficie">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-tinta-suave">
          {links.map((l) => (<a key={l.label} href={l.href} className="hover:text-tinta">{l.label}</a>))}
        </div>
        <p className="mt-6 max-w-2xl rounded-xl bg-acento-fondo/60 p-4 text-sm leading-relaxed text-acento-texto">
          <strong>Si estás en una crisis o pensás en lastimarte</strong>, {avisoUrgencia}{" "}
          <span className="opacity-80">{recursos}</span>
        </p>
        <p className="mt-6 text-xs text-tinta-suave">© {new Date().getFullYear()} Psicología para el mundo · Cecilia Torres</p>
      </div>
    </footer>
  );
}
