// Puerto de pagos. La app no toca el SDK del proveedor directamente.
export interface CheckoutRequest {
  descripcion: string;
  montoUSD: number;
  referencia: string; // id de turno / paquete
}
export interface CheckoutResult {
  id: string;
  url: string; // link de pago para el paciente
}
export type EstadoPago = "pendiente" | "aprobado" | "rechazado";
export interface PaymentsPort {
  crearCheckout(req: CheckoutRequest): Promise<CheckoutResult>;
  verificarPago(id: string): Promise<EstadoPago>;
}
