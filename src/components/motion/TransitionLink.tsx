"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";
import { whenFontsReady } from "@/lib/ready";

// Enlace interno: precarga el destino, respeta modificadores (nueva pestaña), no rompe al tocar la
// misma página, y avisa (onNavigate) para poder cerrar el menú móvil.
export default function TransitionLink({ href, className = "", children, onNavigate }: { href: string; className?: string; children: ReactNode; onNavigate?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => { router.prefetch(href); }, [href, router]);
  const norm = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) onNavigate();
    if (norm(href) === norm(pathname || "")) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    whenFontsReady(() => router.push(href));
  };
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
