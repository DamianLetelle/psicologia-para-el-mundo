import { z } from "zod";

// Validación de configuración (Regla: config validada al arrancar; si falta algo, falla temprano con
// un mensaje claro). Hoy el sitio es estático y no usa ninguna: todo es opcional. En la Fase 5, cuando
// entren los servicios, se marcan como requeridas y cada adapter exige lo suyo con requireEnv().
const schema = z.object({
  // Supabase (base de datos, login, storage de archivos/audios)
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(), // solo servidor — nunca al cliente
  // Mercado Pago (pagos)
  MERCADOPAGO_ACCESS_TOKEN: z.string().optional(),
  // Resend (mail)
  RESEND_API_KEY: z.string().optional(),
  // Selección de proveedor por pieza (cambiar de proveedor = cambiar un dato)
  DB_PROVIDER: z.enum(["supabase"]).default("supabase"),
  PAYMENTS_PROVIDER: z.enum(["mercadopago", "stripe"]).default("mercadopago"),
  MAILER_PROVIDER: z.enum(["resend"]).default("resend"),
  STORAGE_PROVIDER: z.enum(["supabase"]).default("supabase"),
});

export type AppConfig = z.infer<typeof schema>;

let cache: AppConfig | null = null;

export function loadConfig(env: Record<string, string | undefined> = process.env): AppConfig {
  if (cache) return cache;
  const parsed = schema.safeParse(env);
  if (!parsed.success) {
    const detalle = parsed.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join("\n");
    throw new Error("Configuración inválida (revisá las variables de entorno):\n" + detalle);
  }
  cache = parsed.data;
  return cache;
}

// Exige una variable cuando un adapter la necesita (falla temprano, mensaje claro).
export function requireEnv(config: AppConfig, key: keyof AppConfig): string {
  const val = config[key];
  if (val === undefined || val === "") {
    throw new Error(`Falta la configuración requerida: ${String(key)}. Definila en las variables de entorno.`);
  }
  return String(val);
}
