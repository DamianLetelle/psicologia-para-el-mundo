// Puerto de autenticación / sesión (multiusuario: paciente y psicólogo).
export type Rol = "paciente" | "psicologo";
export interface Sesion {
  userId: string;
  rol: Rol;
}
export interface AuthPort {
  sesionActual(): Promise<Sesion | null>;
  iniciarSesion(email: string, password: string): Promise<Sesion>;
  cerrarSesion(): Promise<void>;
}
