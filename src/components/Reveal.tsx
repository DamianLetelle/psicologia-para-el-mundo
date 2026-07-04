"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { REVEAL, EASE } from "@/lib/motion";

// Descubre el contenido al entrar en pantalla. Se repite cada vez (no una sola vez) y es
// bidireccional: al bajar llega desde abajo; al subir, desde arriba.
export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"below" | "above" | "in">("below");
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) setPhase("in");
        else setPhase(e.boundingClientRect.top > 0 ? "below" : "above");
      },
      { threshold: 0.15, rootMargin: "-6% 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);
  if (reduce) return <div className={className}>{children}</div>;
  const variants = {
    below: { opacity: 0, y: REVEAL.dist },
    above: { opacity: 0, y: -REVEAL.dist },
    in: { opacity: 1, y: 0 },
  };
  return (
    <motion.div ref={ref} className={className} initial="below" animate={phase} variants={variants} transition={{ duration: REVEAL.dur, ease: EASE.entrada, delay }}>
      {children}
    </motion.div>
  );
}
