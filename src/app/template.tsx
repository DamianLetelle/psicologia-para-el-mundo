"use client";
import { useEffect } from "react";
import { useAnimate, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { navMode } from "@/lib/navMode";
import { NAV, EASE } from "@/lib/motion";

// Primera carga: no anima (no oculta contenido en SSR). Navegación normal: la página nueva llega
// desde abajo, lento. Navegación por vapor: no hace entrada propia (el vidrio la revela de a poco).
let firstMount = true;

export default function Template({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  useEffect(() => {
    const isFirst = firstMount;
    firstMount = false;
    const isVapor = navMode.vapor;
    navMode.vapor = false;
    if (!reduce && !isFirst && !isVapor && scope.current) {
      animate(scope.current, { opacity: [0, 1], y: [NAV.dist, 0] }, { duration: NAV.inn, ease: EASE.entrada });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={scope}>{children}</div>;
}
