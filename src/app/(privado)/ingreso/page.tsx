"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { btnBase, btnPrimary } from "@/components/ui/buttonStyles";

export default function IngresoPage() {
  const { iniciarSesion } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setEnviando(true);
    try {
      const sesion = await iniciarSesion(email.trim(), password);
      router.replace(sesion.rol === "profesional" ? "/panel" : "/mi-espacio");
    } catch (err) {
      const code = err instanceof Error ? err.message : "";
      setError(
        code === "CUENTA_SIN_ASIGNAR"
          ? "Tu cuenta todavía no está habilitada. Escribinos y lo resolvemos."
          : "El email o la contraseña no coinciden. Probá de nuevo."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-5 py-20">
      <h1 className="font-serif text-3xl font-semibold text-tinta">Ingresá a tu espacio</h1>
      <p className="mt-3 leading-relaxed text-tinta-suave">
        Tu lugar para volver a lo que trabajaron juntos, con calma y cuando lo necesites.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="block text-sm text-tinta-suave">Email</label>
          <input
            id="email" type="email" autoComplete="email" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-borde bg-superficie px-4 py-3 text-tinta outline-none focus:border-accion"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-tinta-suave">Contraseña</label>
          <input
            id="password" type="password" autoComplete="current-password" required value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-borde bg-superficie px-4 py-3 text-tinta outline-none focus:border-accion"
          />
        </div>
        {error && (
          <p role="alert" className="rounded-lg bg-acento-fondo px-3 py-2 text-sm text-acento-texto">{error}</p>
        )}
        <button type="submit" disabled={enviando} className={`${btnBase} ${btnPrimary} w-full disabled:opacity-70`}>
          {enviando ? "Ingresando…" : "Ingresar"}
        </button>
      </form>
      <p className="mt-6 text-sm text-tinta-suave">
        ¿Todavía no tenés acceso? Tu psicóloga te habilita el ingreso.
      </p>
    </main>
  );
}
