"use client";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { VAPOR, FROST, DUR, EASE } from "@/lib/motion";
import { runVaporTransition } from "@/lib/vapor";
import { btnBase, btnPrimary } from "@/components/ui/buttonStyles";

// Botón que lleva a agendar: al presionar echa vapor + vidrio esmerilado y luego navega.
export default function VaporCTA({ href, preset = "lead", className = "", children }: { href: string; preset?: "lead" | "agendar"; className?: string; children: ReactNode }) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (reduce) { router.push(href); return; }
    runVaporTransition(e.currentTarget as unknown as HTMLElement, VAPOR[preset], FROST, () => router.push(href));
  };
  const hover = reduce ? {} : { y: -1, scale: 1.02 };
  const tap = reduce ? {} : { scale: 0.97 };
  return (
    <motion.a href={href} onClick={onClick} whileHover={hover} whileTap={tap} transition={{ duration: DUR.rapido, ease: EASE.entrada }} className={`${btnBase} ${btnPrimary} ${className}`}>
      {children}
    </motion.a>
  );
}
