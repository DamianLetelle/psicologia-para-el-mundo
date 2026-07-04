"use client";
import type { ReactNode, MouseEvent } from "react";
import { usePageTransition } from "@/components/motion/PageTransitionProvider";

// Enlace interno que usa la transición direccional (la página se va y la nueva llega).
export default function TransitionLink({ href, className = "", children }: { href: string; className?: string; children: ReactNode }) {
  const ctx = usePageTransition();
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ctx) return;
    e.preventDefault();
    ctx.navigate(href);
  };
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
