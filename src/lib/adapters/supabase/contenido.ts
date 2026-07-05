// Adapter de contenido sobre Supabase (lee lo publicado y lo devuelve con la forma que consumen las
// páginas). Mapea el modelo de la base al contrato del puerto.
import type { ArticuloContenido, ContenidoRepo, Faq, PlanHonorario, RecursoCrisis } from "@/lib/ports/database";
import { supabaseSelect } from "./rest";

type FilaHerramienta = { orden: number; herramienta: { nombre: string; contenido: string } | null };
type FilaArticulo = {
  slug: string;
  titulo: string;
  resumen: string;
  entrada: string;
  cuerpo: string[] | null;
  aviso: string | null;
  tema: { nombre: string } | null;
  enlaces: FilaHerramienta[] | null;
};
type FilaPlan = { slug: string; nombre: string; descripcion: string | null; precio_texto: string };
type FilaTexto = { clave: string; valor: string };
type FilaFaq = { pregunta: string; respuesta: string };
type FilaRecurso = {
  pais_iso: string | null;
  pais_nombre: string;
  lineas: RecursoCrisis["lineas"] | null;
  directorio_url: string | null;
};

const SELECT_ARTICULO =
  "select=slug,titulo,resumen,entrada,cuerpo,aviso,orden," +
  "tema:temas(nombre)," +
  "enlaces:articulo_herramienta(orden,herramienta:herramientas(nombre,contenido))";

function aArticulo(f: FilaArticulo): ArticuloContenido {
  const enlaces = [...(f.enlaces ?? [])].sort((a, b) => a.orden - b.orden);
  const h = enlaces.find((e) => e.herramienta)?.herramienta ?? null;
  return {
    slug: f.slug,
    tema: f.tema?.nombre ?? "",
    titulo: f.titulo,
    resumen: f.resumen,
    entrada: f.entrada,
    contenido: Array.isArray(f.cuerpo) ? f.cuerpo : [],
    herramienta: { nombre: h?.nombre ?? "", texto: h?.contenido ?? "" },
    aviso: f.aviso ?? undefined,
  };
}

export function crearSupabaseContenido(): ContenidoRepo {
  return {
    async listarArticulos() {
      const filas = await supabaseSelect<FilaArticulo[]>(
        `articulos?${SELECT_ARTICULO}&publicado=eq.true&order=orden.asc`,
      );
      return filas.map(aArticulo);
    },
    async obtenerArticulo(slug: string) {
      const filas = await supabaseSelect<FilaArticulo[]>(
        `articulos?${SELECT_ARTICULO}&publicado=eq.true&slug=eq.${encodeURIComponent(slug)}&limit=1`,
      );
      return filas.length ? aArticulo(filas[0]) : null;
    },
    async listarPlanes(): Promise<PlanHonorario[]> {
      const filas = await supabaseSelect<FilaPlan[]>(
        `planes_honorarios?select=slug,nombre,descripcion,precio_texto,orden&publicado=eq.true&order=orden.asc`,
      );
      return filas.map((f) => ({
        slug: f.slug,
        nombre: f.nombre,
        descripcion: f.descripcion ?? undefined,
        precioTexto: f.precio_texto,
      }));
    },
    async obtenerTextos(): Promise<Record<string, string>> {
      const filas = await supabaseSelect<FilaTexto[]>(
        `textos_pagina?select=clave,valor&publicado=eq.true`,
      );
      const out: Record<string, string> = {};
      for (const f of filas) out[f.clave] = f.valor;
      return out;
    },
    async listarFaqs(): Promise<Faq[]> {
      const filas = await supabaseSelect<FilaFaq[]>(
        `faqs?select=pregunta,respuesta,orden&publicado=eq.true&order=orden.asc`,
      );
      return filas.map((f) => ({ pregunta: f.pregunta, respuesta: f.respuesta }));
    },
    async listarRecursosCrisis(): Promise<RecursoCrisis[]> {
      const filas = await supabaseSelect<FilaRecurso[]>(
        `recursos_crisis?select=pais_iso,pais_nombre,lineas,directorio_url,orden&publicado=eq.true&order=orden.asc`,
      );
      return filas.map((f) => ({
        paisIso: f.pais_iso,
        paisNombre: f.pais_nombre,
        lineas: Array.isArray(f.lineas) ? f.lineas : [],
        directorioUrl: f.directorio_url ?? undefined,
      }));
    },
  };
}
