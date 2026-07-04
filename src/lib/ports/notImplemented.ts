// Marca una capacidad todavía no conectada (se implementa en la Fase 5). Falla con mensaje claro.
export function noImplementado(que: string): never {
  throw new Error(`${que} todavía no está implementado (se conecta en la Fase 5).`);
}
