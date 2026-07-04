import type { DatabasePort } from "@/lib/ports/database";
import { noImplementado } from "@/lib/ports/notImplemented";

// Adapter de Supabase para datos (stub; se implementa en la Fase 5).
export function crearSupabaseDatabase(): DatabasePort {
  return {
    turnos: {
      async crear() { return noImplementado("Supabase.turnos.crear"); },
      async listarPorPaciente(pacienteId: string) { return noImplementado(`Supabase.turnos.listarPorPaciente (${pacienteId})`); },
    },
  };
}
