// Semilla de honorarios (dato inicial y red de seguridad si la base no responde).
import type { PlanHonorario } from "@/lib/ports/database";

export const planes: PlanHonorario[] = [
  { slug: "sesion-individual", nombre: "Sesión individual", precioTexto: "USD 40" },
  { slug: "paquetes", nombre: "Paquetes con descuento", precioTexto: "hasta USD 30 por consulta" },
  { slug: "trabajos-puntuales", nombre: "Trabajos puntuales", precioTexto: "[a definir con Cecilia]" },
];
