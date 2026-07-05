"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import type { Rol } from "@/lib/ports/auth";

// Guarda del área privada: sin sesión válida, redirige a /ingreso; con rol distinto, al espacio que
// corresponde. La seguridad REAL la impone la base (RLS); esta guarda es de experiencia (no mostrar
// pantallas que no corresponden).
export default function RutaProtegida({ rol, children }: { rol?: Rol; children: React.ReactNode }) {
  const { sesion, cargando } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (cargando) return;
    if (!sesion) { router.replace("/ingreso"); return; }
    if (rol && sesion.rol !== rol) {
      router.replace(sesion.rol === "profesional" ? "/panel" : "/mi-espacio");
    }
  }, [cargando, sesion, rol, router]);

  if (cargando || !sesion || (rol && sesion.rol !== rol)) return <PantallaCargando />;
  return <>{children}</>;
}

function PantallaCargando() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 text-center text-tinta-suave">
      <p>Un momento…</p>
    </main>
  );
}
