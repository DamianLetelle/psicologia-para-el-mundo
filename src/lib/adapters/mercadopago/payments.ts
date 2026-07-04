import type { PaymentsPort } from "@/lib/ports/payments";
import { noImplementado } from "@/lib/ports/notImplemented";

// Adapter de Mercado Pago (stub; se implementa en la Fase 5). Stripe entraría como otro adapter.
export function crearMercadoPagoPayments(): PaymentsPort {
  return {
    async crearCheckout(req) { return noImplementado(`MercadoPago.crearCheckout (${req.referencia})`); },
    async verificarPago(id: string) { return noImplementado(`MercadoPago.verificarPago (${id})`); },
  };
}
