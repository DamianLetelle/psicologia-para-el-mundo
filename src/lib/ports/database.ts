// Puerto de base de datos por repositorios. Se amplía en la Fase 5 (contenidos, pacientes, pagos,
// sesiones, transcripciones, guía de estilo). La app usa estos contratos, no el SDK del proveedor.
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
  turnos: TurnosRepo;
}
