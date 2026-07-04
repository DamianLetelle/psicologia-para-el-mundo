// Espera a que las fuentes estén cargadas antes de una transición, para que la página destino
// no reacomode el texto a mitad del efecto (evita el "salto" de la primera vez).
export function whenFontsReady(cb: () => void): void {
  const d = document as unknown as { fonts?: { ready?: Promise<unknown> } };
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(cb, cb);
  else cb();
}
