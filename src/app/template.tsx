"use client";
import { useEffect } from "react";
import { useAnimate, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { usePageTransition } from "@/components/motion/PageTransitionProvider";
import { NAV, EASE } from "@/lib/motion";

// En la primera carga no anima (evita ocultar contenido en SSR). En cada navegación posterior:
// la página nueva llega desde abajo, lento (también sirve de "aparición lenta" tras el vapor).
let firstMount = true;

export default function Template({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  const ctx = usePageTransition();
  useEffect(() => {
    const isFirst = firstMount;
    firstMount = false;
    if (!reduce && !isFirst && scope.current) {
      animate(scope.current, { opacity: [0, 1], y: [NAV.dist, 0] }, { duration: NAV.inn, ease: EASE.entrada });
    }
    if (ctx && !reduce) {
      const exit: () => Promise<unknown> = () =>
        animate(scope.current, { opacity: 0, y: -NAV.dist }, { duration: NAV.out, ease: EASE.salida }).finished;
      ctx.registerExit(exit);
      return () => ctx.registerExit(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={scope}>{children}</div>;
}
