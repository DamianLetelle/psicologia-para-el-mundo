"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { REVEAL, EASE } from "@/lib/motion";

// Descubre el contenido al entrar en pantalla. Evalúa de inmediato tras el layout (así el contenido
// visible al cargar se muestra sí o sí), y se repite: al bajar llega desde abajo; al subir, desde arriba.
export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"below" | "above" | "in">("below");
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const evaluate = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      const inView = r.top < vh * 0.9 && r.bottom > vh * 0.1;
      setPhase(inView ? "in" : r.top >= vh * 0.5 ? "below" : "above");
    };
    const raf = requestAnimationFrame(evaluate); // evaluación inmediata tras el layout
    const io = new IntersectionObserver(evaluate, { threshold: [0, 0.15, 0.5, 1] }); // cambios al scrollear
    io.observe(el);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
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
