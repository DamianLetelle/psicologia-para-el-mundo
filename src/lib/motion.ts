// Fuente única de los tokens de movimiento (Sistema de movimiento — Principio 4).
export const DUR = { rapido: 0.2, medio: 0.45, lento: 0.8 } as const;
export const EASE = {
  entrada: [0.16, 1, 0.3, 1] as [number, number, number, number],
  recorrido: [0.65, 0, 0.35, 1] as [number, number, number, number],
  salida: [0.4, 0, 1, 1] as [number, number, number, number],
};
// Transición direccional entre páginas: la que se va sube y se esfuma; la nueva llega desde abajo, lento.
export const NAV = { dist: 48, out: 0.8, inn: 1.15 };
// Reveal al hacer scroll: viaje largo y lento; se repite y es bidireccional (baja y sube).
export const REVEAL = { dist: 56, dur: 1.3 };
// Vapor + vidrio esmerilado (solo botones especiales). Presets imagen 1 / imagen 2.
export const VAPOR = {
  lead: { dir: "radial", dur: 2600, count: 20, alpha: 55, size: 34, dist: 110, color: "#C06A4E" },
  agendar: { dir: "radial", dur: 2600, count: 23, alpha: 70, size: 42, dist: 240, color: "#C06A4E" },
};
export const FROST = { blur: 10, frost: 60, hold: 86, total: 2800 };
