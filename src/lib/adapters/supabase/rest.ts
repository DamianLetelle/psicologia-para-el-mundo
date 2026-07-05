// Cliente REST mínimo para Supabase (PostgREST). Encapsula la URL y la clave pública en un solo
// lugar: si mañana pasamos al SDK oficial, se toca solo acá (P13 sin ataduras, P6 una sola fuente).
import { loadConfig } from "@/lib/config";

/** ¿Hay configuración de Supabase? Si no, el sitio usa la semilla en código (red de seguridad). */
export function supabaseConfigurado(): boolean {
  const c = loadConfig();
  return Boolean(c.SUPABASE_URL && c.SUPABASE_ANON_KEY);
}

/** SELECT contra PostgREST. La clave usada es pública (anon); RLS limita a lo publicado.
 *  force-cache: el contenido se hornea al construir el sitio (modelo build-time). */
export async function supabaseSelect<T>(path: string): Promise<T> {
  const c = loadConfig();
  const key = c.SUPABASE_ANON_KEY as string;
  const res = await fetch(`${c.SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error(`Supabase REST ${res.status}: ${await res.text()}`);
  }
  return (await res.json()) as T;
}
