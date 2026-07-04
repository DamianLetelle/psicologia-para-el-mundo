// Puerto de almacenamiento de archivos (imágenes, y más adelante audios de sesión).
export interface StoragePort {
  subir(ruta: string, archivo: ArrayBuffer, contentType?: string): Promise<{ ruta: string }>;
  urlPublica(ruta: string): Promise<string>;
  borrar(ruta: string): Promise<void>;
}
