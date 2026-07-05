import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Cliente de Supabase para el navegador (área privada). La clave anon es pública; la frontera de
// seguridad real es RLS en la base. Encapsulado acá: si mañana cambiamos de proveedor, se toca un
// solo lugar (P13 sin ataduras, P6 una sola fuente). Se crea perezosamente y solo en el navegador.
let cliente: SupabaseClient | null = null;

export function getSupabaseBrowser(): SupabaseClient {
  if (cliente) return cliente;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      "Faltan NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY en el entorno de build."
    );
  }
  cliente = createClient(url, key, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
  });
  return cliente;
}
