// Puerto de mail. La app depende de esta interfaz, no de un proveedor concreto.
export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
}
export interface MailerPort {
  send(message: EmailMessage): Promise<void>;
}
