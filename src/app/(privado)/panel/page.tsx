"use client";
import { useAuth } from "@/components/auth/AuthProvider";
import RutaProtegida from "@/components/auth/RutaProtegida";
import { btnBase, btnGhost } from "@/components/ui/buttonStyles";

export default function PanelPage() {
  return (
    <RutaProtegida rol="profesional">
      <Contenido />
    </RutaProtegida>
  );
}

function Contenido() {
  const { cerrarSesion } = useAuth();
  return (
    <main className="mx-auto max-w-4xl px-5 py-20">
      <h1 className="font-serif text-3xl font-semibold text-tinta">Panel</h1>
      <p className="mt-3 leading-relaxed text-tinta-suave">
        Desde acá vas a administrar tu contenido, tus pacientes, turnos y pagos. Lo estamos
        construyendo paso a paso.
      </p>
      <button onClick={() => cerrarSesion()} className={`${btnBase} ${btnGhost} mt-8`}>Cerrar sesión</button>
    </main>
  );
}
