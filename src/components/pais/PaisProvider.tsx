"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { RecursoCrisis } from "@/lib/ports/database";

type Ctx = {
  pais: string | null;                 // ISO del país elegido o detectado
  elegirPais: (iso: string | null) => void;
  recursos: RecursoCrisis[];
};
const PaisCtx = createContext<Ctx | null>(null);

export function usePais(): Ctx {
  const c = useContext(PaisCtx);
  if (!c) throw new Error("usePais debe usarse dentro de PaisProvider");
  return c;
}

export default function PaisProvider({
  recursos,
  children,
}: {
  recursos: RecursoCrisis[];
  children: React.ReactNode;
}) {
  const [pais, setPais] = useState<string | null>(null);

  useEffect(() => {
    let vivo = true;
    (async () => {
      await Promise.resolve(); // difiere: no setear estado de forma síncrona en el efecto
      let iso: string | null = null;
      try { iso = window.localStorage.getItem("pais"); } catch {}
      if (!iso) {
        // Detección por IP vía Cloudflare (solo el país; no se guarda nada)
        try {
          const t = await fetch("/cdn-cgi/trace").then((r) => r.text());
          const m = t.match(/^loc=([A-Z]{2})/m);
          iso = m ? m[1] : null;
        } catch {}
      }
      if (vivo && iso) setPais(iso);
    })();
    return () => { vivo = false; };
  }, []);

  const elegirPais = (iso: string | null) => {
    setPais(iso);
    try {
      if (iso) window.localStorage.setItem("pais", iso);
      else window.localStorage.removeItem("pais");
    } catch {}
  };

  return <PaisCtx.Provider value={{ pais, elegirPais, recursos }}>{children}</PaisCtx.Provider>;
}
