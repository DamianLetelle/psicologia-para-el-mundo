// Puerto de base de datos por repositorios. La app usa estos contratos, no el SDK del proveedor
// (P13 sin ataduras, P14 modularidad). Se amplía por fase.

// --- Contenido editable (biblioteca) ---
export interface HerramientaContenido {
  nombre: string;
  texto: string;
}
export interface ArticuloContenido {
  slug: string;
  tema: string;
  titulo: string;
  resumen: string;
  entrada: string;
  contenido: string[];
  herramienta: HerramientaContenido;
  aviso?: string;
}
export interface PlanHonorario {
  slug: string;
  nombre: string;
  descripcion?: string;
  precioTexto: string;
}
export interface Faq {
  pregunta: string;
  respuesta: string;
}

// --- Recursos de crisis por país (dato del producto, curado central) ---
export interface LineaCrisis {
  nombre: string;
  telefono?: string;
  url?: string;
  nota?: string;
}
export interface RecursoCrisis {
  paisIso: string | null; // null = internacional / fallback
  paisNombre: string;
  lineas: LineaCrisis[];
  directorioUrl?: string;
}

export interface ContenidoRepo {
  listarArticulos(): Promise<ArticuloContenido[]>;
  obtenerArticulo(slug: string): Promise<ArticuloContenido | null>;
  listarPlanes(): Promise<PlanHonorario[]>;
  obtenerTextos(): Promise<Record<string, string>>;
  listarFaqs(): Promise<Faq[]>;
  listarRecursosCrisis(): Promise<RecursoCrisis[]>;
}

// --- Turnos (se implementa en la Fase 5B) ---
export interface Turno {
  id: string;
  pacienteId: string;
  inicio: string; // ISO
  modalidad: "online" | "presencial";
}
export interface TurnosRepo {
  crear(turno: Omit<Turno, "id">): Promise<Turno>;
  listarPorPaciente(pacienteId: string): Promise<Turno[]>;
}

export interface DatabasePort {
  contenido: ContenidoRepo;
  turnos: TurnosRepo;
}
