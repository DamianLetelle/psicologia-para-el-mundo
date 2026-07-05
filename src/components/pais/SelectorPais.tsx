"use client";
import { usePais } from "./PaisProvider";
import { PAISES } from "@/lib/paises";

export default function SelectorPais({ className = "" }: { className?: string }) {
  const { pais, elegirPais } = usePais();
  return (
    <label className={`flex items-center gap-1.5 text-sm text-tinta-suave ${className}`}>
      <span aria-hidden>🌎</span>
      <span className="sr-only">Elegí tu país</span>
      <select
        value={pais ?? ""}
        onChange={(e) => elegirPais(e.target.value || null)}
        className="rounded-md border border-borde bg-superficie px-2 py-1 text-sm text-tinta"
      >
        <option value="">País…</option>
        {PAISES.map((p) => (
          <option key={p.iso} value={p.iso}>{p.nombre}</option>
        ))}
      </select>
    </label>
  );
}
