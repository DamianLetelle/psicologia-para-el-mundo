"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";
import { usePageTransition } from "@/components/motion/PageTransitionProvider";
import { whenFontsReady } from "@/lib/ready";

// Enlace interno con la transición direccional (la página se va y la nueva llega).
export default function TransitionLink({ href, className = "", children }: { href: string; className?: string; children: ReactNode }) {
  const ctx = usePageTransition();
  const router = useRouter();
  useEffect(() => { router.prefetch(href); }, [href, router]); // precarga la página destino
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ctx) return;
    e.preventDefault();
    whenFontsReady(() => ctx.navigate(href));
  };
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
