import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Privacidad y términos — Psicología para el mundo" };

export default function LegalesPage() {
  return (
    <main>
      <PageHero eyebrow="Privacidad y términos" titulo="Cómo cuidamos tus datos" intro="Textos en lenguaje claro. Son un punto de partida y serán revisados con un profesional y adaptados a la jurisdicción que corresponda." />
      <section className="mx-auto max-w-3xl px-5 pb-24 space-y-8">
        <Reveal>
          <h2 className="text-xl">Aviso de no-urgencia</h2>
          <p className="mt-2 leading-relaxed text-tinta-suave">Si estás pasando una crisis o pensás en lastimarte, por favor buscá ayuda inmediata: <span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[líneas de ayuda locales / emergencias]</span>. Este espacio te acompaña, pero no reemplaza una atención de urgencia.</p>
        </Reveal>
        <Reveal>
          <h2 className="text-xl">Alcance del contenido</h2>
          <p className="mt-2 leading-relaxed text-tinta-suave">La información de esta web (artículos, herramientas) es orientativa y busca ayudarte a entender lo que te pasa. No reemplaza una consulta ni un tratamiento personalizado.</p>
        </Reveal>
        <Reveal>
          <h2 className="text-xl">Privacidad de datos de salud</h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-tinta-suave">
            <li><strong className="text-tinta">Qué datos guardamos:</strong> los que nos das para contactarte y coordinar y, si sos paciente, lo necesario para tu seguimiento. Pedimos solo lo necesario.</li>
            <li><strong className="text-tinta">Para qué:</strong> para brindarte el servicio (turnos, seguimiento, pagos) y nada más.</li>
            <li><strong className="text-tinta">Consentimiento:</strong> te pedimos tu acuerdo claro antes de guardar datos sensibles.</li>
            <li><strong className="text-tinta">Cómo los cuidamos:</strong> acceso restringido y cifrado; nunca se venden ni se comparten, salvo tu consentimiento o una obligación legal.</li>
            <li><strong className="text-tinta">Tus derechos:</strong> podés pedir ver, corregir o borrar tus datos cuando quieras.</li>
            <li><strong className="text-tinta">Contacto de privacidad:</strong> <span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[correo de contacto]</span>.</li>
          </ul>
          <p className="mt-3 text-sm text-tinta-suave">(Requiere revisión legal y adaptación a la normativa local.)</p>
        </Reveal>
        <Reveal>
          <h2 className="text-xl">Términos de uso</h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-tinta-suave">
            <li>El contenido es de Cecilia; no puede reproducirse sin permiso.</li>
            <li>El sitio se ofrece “tal cual”, con la mejor intención de ser útil y cuidado.</li>
            <li><span className="rounded bg-acento-fondo px-1.5 py-0.5 text-sm text-acento-texto">[Otros puntos según revisión legal.]</span></li>
          </ul>
        </Reveal>
      </section>
    </main>
  );
}
