// Semilla de preguntas frecuentes (dato inicial y red de seguridad si la base no responde).
import type { Faq } from "@/lib/ports/database";

export const faqs: Faq[] = [
  { pregunta: "¿Es confidencial?", respuesta: "Sí. Todo lo que compartas queda entre nosotros; es la base de este espacio." },
  { pregunta: "¿Cómo es la primera vez?", respuesta: "Sin presión. Nos conocemos, me contás qué te trae, y vemos juntos cómo seguir. Los primeros 30 minutos son sin costo y sin compromiso." },
  { pregunta: "¿Las sesiones son online o presenciales?", respuesta: "[Confirmar.] Si es online, nos vemos por videollamada, desde donde te sientas cómodo/a." },
  { pregunta: "¿Cuánto dura una sesión?", respuesta: "[~50 min — confirmar.]" },
  { pregunta: "¿Cada cuánto nos vemos?", respuesta: "Lo definimos juntos según lo que necesites. Muchas personas empiezan una vez por semana." },
  { pregunta: "¿Cuánto cuesta?", respuesta: "La sesión individual es USD 40, con paquetes que bajan hasta USD 30 por consulta. Podés ver el detalle en Honorarios." },
  { pregunta: "¿Cómo pago?", respuesta: "[Medios de pago — a definir.]" },
  { pregunta: "¿Y si tengo que cancelar o reprogramar?", respuesta: "Avisá con tranquilidad [política amable — a definir, p. ej. hasta 24 h antes] y lo acomodamos." },
  { pregunta: "¿Y si no sé qué decir, o me da vergüenza?", respuesta: "Es más común de lo que pensás. No tenés que llegar con nada preparado: empezamos por donde estés." },
  { pregunta: "¿La terapia online sirve igual?", respuesta: "Para la mayoría de las consultas funciona muy bien. Lo que importa es el vínculo y el trabajo que hacemos juntos." },
  { pregunta: "¿Y si no puedo sostener el costo?", respuesta: "Escribime igual. Siempre es mejor que hablemos a que te quedes sin este espacio." },
  { pregunta: "¿Esto reemplaza una urgencia?", respuesta: "No. Si estás en una crisis o pensás en lastimarte, buscá ayuda inmediata; abajo, en el pie del sitio, están las líneas de tu país." },
];
