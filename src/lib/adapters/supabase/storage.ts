import type { StoragePort } from "@/lib/ports/storage";
import { noImplementado } from "@/lib/ports/notImplemented";

// Adapter de Supabase Storage (stub; se implementa en la Fase 5).
export function crearSupabaseStorage(): StoragePort {
  return {
    async subir(ruta: string) { return noImplementado(`Supabase.storage.subir (${ruta})`); },
    async urlPublica(ruta: string) { return noImplementado(`Supabase.storage.urlPublica (${ruta})`); },
    async borrar(ruta: string) { return noImplementado(`Supabase.storage.borrar (${ruta})`); },
  };
}
