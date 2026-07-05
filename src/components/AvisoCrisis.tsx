"use client";
import { usePais } from "@/components/pais/PaisProvider";
import SelectorPais from "@/components/pais/SelectorPais";
import { nombrePais } from "@/lib/paises";

function telHref(t: string): string {
  return "tel:" + t.replace(/[^+\d*]/g, "");
}

export default function AvisoCrisis({ conSelector = false }: { conSelector?: boolean }) {
  const { pais, recursos } = usePais();
  const internacional = recursos.find((r) => !r.paisIso) ?? null;
  const local = pais ? recursos.find((r) => r.paisIso === pais) ?? null : null;
  const mostrar = local ?? internacional;

  const directorio = pais
    ? local?.directorioUrl ?? `https://findahelpline.com/es-ES/countries/${pais.toLowerCase()}`
    : internacional?.directorioUrl ?? "https://findahelpline.com/es-ES";

  return (
    <div className="text-sm leading-relaxed text-acento-texto">
      <p>
        <strong>Si estás en una crisis o pensás en lastimarte</strong>, esto no reemplaza una ayuda inmediata.
      </p>
      {mostrar && mostrar.lineas.length > 0 ? (
        <ul className="mt-2 space-y-1">
          {mostrar.lineas.map((l, i) => (
            <li key={i}>
              <span className="font-semibold">{l.nombre}</span>
              {l.telefono ? (
                <>: <a className="underline underline-offset-2" href={telHref(l.telefono)}>{l.telefono}</a></>
              ) : null}
              {l.url ? (
                <> — <a className="underline underline-offset-2" href={l.url} target="_blank" rel="noopener noreferrer">web</a></>
              ) : null}
              {l.nota ? <span className="opacity-80"> ({l.nota})</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-2">
        {pais && local ? `Recursos en ${nombrePais(pais)}. ` : null}
        <a className="underline underline-offset-2" href={directorio} target="_blank" rel="noopener noreferrer">
          {pais ? `Ver todas las líneas de ${nombrePais(pais) || "tu país"}` : "Buscar líneas en tu país"}
        </a>{" "}(Find A Helpline).
      </p>
      {conSelector ? <div className="mt-3"><SelectorPais /></div> : null}
    </div>
  );
}
