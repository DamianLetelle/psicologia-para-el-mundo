// Puerto de autenticación / sesión (multiusuario: paciente y profesional).
// La app usa SIEMPRE este puerto, nunca el SDK de un proveedor (P13 sin ataduras).
export type Rol = "paciente" | "profesional";

export interface Sesion {
  userId: string;
  rol: Rol;
  profesionalId: string;
}

export interface AuthPort {
  sesionActual(): Promise<Sesion | null>;
  iniciarSesion(email: string, password: string): Promise<Sesion>;
  cerrarSesion(): Promise<void>;
  // Notifica cambios de sesión (login / logout / refresh). Devuelve función para desuscribir.
  suscribirse(cb: (sesion: Sesion | null) => void): () => void;
}
