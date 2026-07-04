import type { AuthPort } from "@/lib/ports/auth";
import { noImplementado } from "@/lib/ports/notImplemented";

// Adapter de Supabase para login (stub; se implementa en la Fase 5).
export function crearSupabaseAuth(): AuthPort {
  return {
    async sesionActual() { return noImplementado("Supabase.sesionActual"); },
    async iniciarSesion(email: string) { return noImplementado(`Supabase.iniciarSesion (${email})`); },
    async cerrarSesion() { return noImplementado("Supabase.cerrarSesion"); },
  };
}
