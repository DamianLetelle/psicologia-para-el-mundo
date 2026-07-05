import type { AuthPort, Sesion, Rol } from "@/lib/ports/auth";
import { getSupabaseBrowser } from "@/lib/adapters/supabase/browserClient";

// Adapter de Supabase Auth (GoTrue) detrás del puerto. El rol y el profesional del usuario salen de
// la tabla `cuentas` (permisos como dato; RLS deja ver solo la fila propia). GoTrue guarda la
// contraseña hasheada y maneja expiración/refresh de sesión.

async function resolverSesion(userId: string | undefined): Promise<Sesion | null> {
  if (!userId) return null;
  const sb = getSupabaseBrowser();
  const { data, error } = await sb
    .from("cuentas")
    .select("rol, profesional_id")
    .eq("user_id", userId)
    .maybeSingle();
  if (error || !data) return null; // usuario sin cuenta asignada -> no hay sesión de app válida
  return { userId, rol: data.rol as Rol, profesionalId: data.profesional_id as string };
}

export function crearSupabaseAuth(): AuthPort {
  return {
    async sesionActual() {
      const sb = getSupabaseBrowser();
      const { data } = await sb.auth.getSession();
      return resolverSesion(data.session?.user?.id);
    },
    async iniciarSesion(email: string, password: string) {
      const sb = getSupabaseBrowser();
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (error || !data.user) throw new Error("EMAIL_O_PASSWORD_INVALIDO");
      const sesion = await resolverSesion(data.user.id);
      if (!sesion) {
        await sb.auth.signOut(); // autenticado pero sin cuenta: no lo dejamos pasar
        throw new Error("CUENTA_SIN_ASIGNAR");
      }
      return sesion;
    },
    async cerrarSesion() {
      const sb = getSupabaseBrowser();
      await sb.auth.signOut();
    },
    suscribirse(cb) {
      const sb = getSupabaseBrowser();
      const { data } = sb.auth.onAuthStateChange(async (_evento, session) => {
        cb(await resolverSesion(session?.user?.id));
      });
      return () => data.subscription.unsubscribe();
    },
  };
}
