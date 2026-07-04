"use client";
import { useState } from "react";
import TransitionLink from "@/components/motion/TransitionLink";
import { btnBase, btnPrimary } from "@/components/ui/buttonStyles";

type NavLink = { href: string; label: string };

// Menú de celular: hamburguesa + panel a pantalla completa. Se cierra al elegir una opción.
export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-tinta hover:bg-superficie"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>
      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-fondo px-6 pt-24 pb-10">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <TransitionLink key={l.href} href={l.href} onNavigate={close} className="rounded-lg px-3 py-3 text-lg text-tinta hover:bg-superficie">
                {l.label}
              </TransitionLink>
            ))}
          </nav>
          <TransitionLink href="/agendar" onNavigate={close} className={`${btnBase} ${btnPrimary} mt-6`}>
            Agendar
          </TransitionLink>
        </div>
      ) : null}
    </div>
  );
}
