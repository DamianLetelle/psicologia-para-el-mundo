// Lista de países (andamiaje del selector de región; base para i18n futuro). Una sola fuente.
export type Pais = { iso: string; nombre: string };

export const PAISES: Pais[] = [
  { iso: "AR", nombre: "Argentina" },
  { iso: "BO", nombre: "Bolivia" },
  { iso: "CL", nombre: "Chile" },
  { iso: "CO", nombre: "Colombia" },
  { iso: "CR", nombre: "Costa Rica" },
  { iso: "CU", nombre: "Cuba" },
  { iso: "DO", nombre: "República Dominicana" },
  { iso: "EC", nombre: "Ecuador" },
  { iso: "ES", nombre: "España" },
  { iso: "GT", nombre: "Guatemala" },
  { iso: "GQ", nombre: "Guinea Ecuatorial" },
  { iso: "HN", nombre: "Honduras" },
  { iso: "MX", nombre: "México" },
  { iso: "NI", nombre: "Nicaragua" },
  { iso: "PA", nombre: "Panamá" },
  { iso: "PY", nombre: "Paraguay" },
  { iso: "PE", nombre: "Perú" },
  { iso: "PR", nombre: "Puerto Rico" },
  { iso: "SV", nombre: "El Salvador" },
  { iso: "US", nombre: "Estados Unidos" },
  { iso: "UY", nombre: "Uruguay" },
  { iso: "VE", nombre: "Venezuela" },
];

export function nombrePais(iso: string | null): string {
  if (!iso) return "";
  return PAISES.find((p) => p.iso === iso)?.nombre ?? iso;
}
