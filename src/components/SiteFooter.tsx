import TransitionLink from "@/components/motion/TransitionLink";
import AvisoCrisis from "@/components/AvisoCrisis";

const links = [
  { href: "/contacto", label: "Contacto" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/legales", label: "Privacidad" },
  { href: "/legales", label: "Términos" },
  { href: "/ingreso", label: "Ingresar" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-borde bg-superficie">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-tinta-suave">
          {links.map((l) => (<TransitionLink key={l.label} href={l.href} className="hover:text-tinta">{l.label}</TransitionLink>))}
        </div>
        <div className="mt-6 max-w-2xl rounded-xl bg-acento-fondo/60 p-4">
          <AvisoCrisis conSelector />
        </div>
        <p className="mt-6 text-xs text-tinta-suave">© {new Date().getFullYear()} Psicología para el mundo · Cecilia Torres</p>
      </div>
    </footer>
  );
}
