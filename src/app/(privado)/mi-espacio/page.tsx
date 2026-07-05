"use client";
import { useAuth } from "@/components/auth/AuthProvider";
import RutaProtegida from "@/components/auth/RutaProtegida";
import { btnBase, btnGhost } from "@/components/ui/buttonStyles";

export default function MiEspacioPage() {
  return (
    <RutaProtegida rol="paciente">
      <Contenido />
    </RutaProtegida>
  );
}

function Contenido() {
  const { cerrarSesion } = useAuth();
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-serif text-3xl font-semibold text-tinta">Tu espacio</h1>
      <p className="mt-3 leading-relaxed text-tinta-suave">
        Acá vas a encontrar lo que trabajaron juntos, tus herramientas y tus turnos. Lo estamos
        preparando con cuidado; muy pronto.
      </p>
      <button onClick={() => cerrarSesion()} className={`${btnBase} ${btnGhost} mt-8`}>Cerrar sesión</button>
    </main>
  );
}
