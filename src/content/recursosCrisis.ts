// Semilla de recursos de crisis (dato inicial y red de seguridad si la base no responde).
// Curado central; la fuente "siempre actualizada" por país es Find A Helpline (directorioUrl).
import type { RecursoCrisis } from "@/lib/ports/database";

export const recursosCrisis: RecursoCrisis[] = [
  { paisIso: "AR", paisNombre: "Argentina", directorioUrl: "https://findahelpline.com/es-ES/countries/ar", lineas: [
    { nombre: "Centro de Asistencia al Suicida", telefono: "135", nota: "CABA y GBA, gratis" },
    { nombre: "Centro de Asistencia al Suicida (todo el país)", telefono: "0800 345 1435", url: "https://www.asistenciaalsuicida.org.ar/ayuda" },
  ] },
  { paisIso: "ES", paisNombre: "España", directorioUrl: "https://findahelpline.com/es-ES/countries/es", lineas: [
    { nombre: "Línea de atención a la conducta suicida", telefono: "024", nota: "gratis, 24 h" },
  ] },
  { paisIso: "MX", paisNombre: "México", directorioUrl: "https://findahelpline.com/es-ES/countries/mx", lineas: [
    { nombre: "Línea de la Vida", telefono: "800 911 2000", nota: "gratis, 24 h" },
  ] },
  { paisIso: "CL", paisNombre: "Chile", directorioUrl: "https://findahelpline.com/es-ES/countries/cl", lineas: [
    { nombre: "Línea Prevención del Suicidio (Salud Responde)", telefono: "*4141", nota: "gratis, 24 h" },
  ] },
  { paisIso: "CO", paisNombre: "Colombia", directorioUrl: "https://findahelpline.com/es-ES/countries/co", lineas: [
    { nombre: "Línea 106 (Bogotá)", telefono: "106", nota: "varía por ciudad; ver directorio" },
  ] },
  { paisIso: "PE", paisNombre: "Perú", directorioUrl: "https://findahelpline.com/es-ES/countries/pe", lineas: [
    { nombre: "Línea 113 Salud, opción 5 (MINSA)", telefono: "113", nota: "salud mental" },
  ] },
  { paisIso: "US", paisNombre: "Estados Unidos", directorioUrl: "https://findahelpline.com/es-ES/countries/us", lineas: [
    { nombre: "988 Suicide & Crisis Lifeline", telefono: "988", nota: "disponible en español" },
  ] },
  { paisIso: null, paisNombre: "Internacional", directorioUrl: "https://findahelpline.com/es-ES", lineas: [
    { nombre: "Find A Helpline — 175+ países", url: "https://findahelpline.com/es-ES" },
    { nombre: "Emergencias", telefono: "112 / 911", nota: "según tu país" },
  ] },
];
