"use client";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { Sesion } from "@/lib/ports/auth";
import { crearSupabaseAuth } from "@/lib/adapters/supabase/auth";

type Estado = {
  sesion: Sesion | null;
  cargando: boolean;
  iniciarSesion: (email: string, password: string) => Promise<Sesion>;
  cerrarSesion: () => Promise<void>;
};

const AuthContext = createContext<Estado | null>(null);

export function useAuth(): Estado {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const authRef = useRef(crearSupabaseAuth());
  const [sesion, setSesion] = useState<Sesion | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const auth = authRef.current;
    let vivo = true;
    auth
      .sesionActual()
      .then((s) => { if (vivo) { setSesion(s); setCargando(false); } })
      .catch(() => { if (vivo) { setSesion(null); setCargando(false); } });
    const desuscribir = auth.suscribirse((s) => { if (vivo) setSesion(s); });
    return () => { vivo = false; desuscribir(); };
  }, []);

  const valor = useMemo<Estado>(
    () => ({
      sesion,
      cargando,
      iniciarSesion: (email, password) => authRef.current.iniciarSesion(email, password),
      cerrarSesion: () => authRef.current.cerrarSesion(),
    }),
    [sesion, cargando]
  );

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}
