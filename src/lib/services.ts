// Registro de servicios: valida la config y elige el adapter activo por pieza. La app usa SIEMPRE
// estos puertos, nunca el SDK de un proveedor — así cambiar de proveedor es cambiar un adapter.
import { loadConfig, type AppConfig } from "@/lib/config";
import type { AuthPort } from "@/lib/ports/auth";
import type { DatabasePort } from "@/lib/ports/database";
import type { PaymentsPort } from "@/lib/ports/payments";
import type { MailerPort } from "@/lib/ports/mailer";
import type { StoragePort } from "@/lib/ports/storage";
import { crearSupabaseAuth } from "@/lib/adapters/supabase/auth";
import { crearSupabaseDatabase } from "@/lib/adapters/supabase/database";
import { crearSupabaseStorage } from "@/lib/adapters/supabase/storage";
import { crearMercadoPagoPayments } from "@/lib/adapters/mercadopago/payments";
import { crearResendMailer } from "@/lib/adapters/resend/mailer";

export interface Servicios {
  config: AppConfig;
  auth: AuthPort;
  db: DatabasePort;
  storage: StoragePort;
  payments: PaymentsPort;
  mailer: MailerPort;
}

export function crearServicios(env?: Record<string, string | undefined>): Servicios {
  const config = loadConfig(env); // valida al arrancar; si falta algo, falla temprano
  return {
    config,
    auth: crearSupabaseAuth(),
    db: crearSupabaseDatabase(),
    storage: crearSupabaseStorage(),
    payments: crearMercadoPagoPayments(),
    mailer: crearResendMailer(),
  };
}
