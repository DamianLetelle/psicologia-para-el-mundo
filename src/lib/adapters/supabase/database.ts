import type { DatabasePort } from "@/lib/ports/database";
import { noImplementado } from "@/lib/ports/notImplemented";
import { crearSupabaseContenido } from "./contenido";

// Adapter de Supabase para datos. Contenido: implementado (lectura). Turnos: stub hasta la Fase 5B.
export function crearSupabaseDatabase(): DatabasePort {
  return {
    contenido: crearSupabaseContenido(),
    turnos: {
      async crear() { return noImplementado("Supabase.turnos.crear"); },
      async listarPorPaciente(pacienteId: string) { return noImplementado(`Supabase.turnos.listarPorPaciente (${pacienteId})`); },
    },
  };
}
