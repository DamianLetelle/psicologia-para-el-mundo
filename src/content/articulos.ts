// Piezas semilla de la biblioteca: dato inicial y red de seguridad si la base no responde.
// El tipo vive una sola vez en el puerto (P6): la semilla y la base comparten la misma forma.
import type { ArticuloContenido } from "@/lib/ports/database";
export type Articulo = ArticuloContenido;

export const articulos: Articulo[] = [
  {
    slug: "ataques-de-panico",
    tema: "Ataques de pánico",
    titulo: "Cuando el cuerpo se adelanta: los ataques de pánico",
    resumen: "Qué es un ataque de pánico y qué podés hacer en el momento.",
    entrada:
      "Late fuerte el corazón, falta el aire, parece que algo malo va a pasar. Si lo viviste, sabés lo asustador que es. Dos cosas para empezar: no estás en peligro y no estás solo/a. Tu cuerpo activó una alarma sin que haya incendio, y hay formas de calmarla.",
    contenido: [
      "Qué pasa en el cuerpo (la alarma).",
      "Por qué se siente tan real.",
      "Qué pasa y no es peligroso.",
      "Cuándo conviene consultar.",
    ],
    herramienta: {
      nombre: "Respirá para bajar la alarma",
      texto: "Exhalá más largo de lo que inhalás (inhalá en 4, exhalá en 6). Repetí unas veces. La exhalación larga le avisa a tu cuerpo que puede aflojar.",
    },
    aviso: "Si los ataques se repiten o te limitan, hablarlo en sesión ayuda mucho.",
  },
  {
    slug: "la-ansiedad-explicada",
    tema: "Ansiedad",
    titulo: "La ansiedad, explicada con calma",
    resumen: "Qué es la ansiedad, por qué aparece y cómo empezar a manejarla.",
    entrada:
      "La ansiedad no es tu enemiga: es una parte tuya que intenta cuidarte, aunque a veces se pase de vueltas. Entenderla es el primer paso para que no maneje ella.",
    contenido: [
      "Para qué sirve la ansiedad.",
      "Cuándo se vuelve un problema.",
      "El círculo de evitar lo que da miedo.",
      "Pequeños pasos que ayudan.",
    ],
    herramienta: {
      nombre: "Nombrar la ola",
      texto: "Cuando sientas que sube, ponele nombre (“esto es ansiedad”) y anclá en el presente: 5 cosas que ves, 4 que tocás, 3 que oís, 2 que olés, 1 que saboreás.",
    },
  },
  {
    slug: "cuando-cuesta-salir-de-la-cama",
    tema: "Estado de ánimo",
    titulo: "Cuando cuesta hasta salir de la cama",
    resumen: "Sobre esos días grises y cómo empezar, de a poco.",
    entrada:
      "Hay días en que todo pesa y hasta lo simple parece imposible. No es pereza ni falta de ganas: a veces el ánimo baja y cuesta arrancar. Ser amable con vos mismo/a también es parte del camino.",
    contenido: [
      "La diferencia entre un día gris y algo más largo.",
      "Por qué “esperar a tener ganas” no siempre funciona.",
      "El valor de los pasos mínimos.",
    ],
    herramienta: {
      nombre: "Un paso muy chico",
      texto: "Elegí una sola acción mínima (abrir la ventana, tomar agua, una cuadra de caminata). No tenés que hacer todo; alcanza con empezar.",
    },
    aviso: "Si esto se sostiene en el tiempo o aparecen pensamientos de lastimarte, buscá apoyo: hablarlo con un profesional ayuda, y ante una crisis, [recursos de ayuda locales].",
  },
  {
    slug: "el-sueno-que-no-llega",
    tema: "Sueño y descanso",
    titulo: "El sueño que no llega",
    resumen: "Por qué a veces no podemos dormir y qué ayuda.",
    entrada:
      "Dar vueltas en la cama con la cabeza a mil es agotador. Muchas veces el problema no es “no poder dormir”, sino todo lo que llevamos a la almohada.",
    contenido: [
      "El cuerpo necesita señales de calma.",
      "La cama es para descansar, no para pelear con la mente.",
      "Rutinas simples que ayudan.",
    ],
    herramienta: {
      nombre: "Descargar la cabeza",
      texto: "Antes de dormir, escribí en un papel lo que te da vueltas. No para resolverlo ahora, sino para soltarlo hasta mañana.",
    },
  },
];
