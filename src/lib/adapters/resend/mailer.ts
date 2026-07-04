import type { MailerPort } from "@/lib/ports/mailer";
import { noImplementado } from "@/lib/ports/notImplemented";

// Adapter de Resend (stub; se implementa en la Fase 5).
export function crearResendMailer(): MailerPort {
  return {
    async send(message) { return noImplementado(`Resend.send (a ${message.to})`); },
  };
}
