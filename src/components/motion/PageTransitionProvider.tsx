"use client";
import { createContext, useContext, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

type ExitFn = () => Promise<unknown>;
type Ctx = { registerExit: (fn: ExitFn | null) => void; navigate: (href: string) => void };

const PageTransitionCtx = createContext<Ctx | null>(null);
export const usePageTransition = () => useContext(PageTransitionCtx);

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const exitRef = useRef<ExitFn | null>(null);
  const registerExit = useCallback((fn: ExitFn | null) => { exitRef.current = fn; }, []);
  const navigate = useCallback(
    (href: string) => {
      (async () => {
        if (exitRef.current) { try { await exitRef.current(); } catch { /* noop */ } }
        router.push(href);
      })();
    },
    [router]
  );
  return <PageTransitionCtx.Provider value={{ registerExit, navigate }}>{children}</PageTransitionCtx.Provider>;
}
