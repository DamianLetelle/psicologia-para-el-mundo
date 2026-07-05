// Fachada de contenido para las páginas. Intenta leer de la base y, si no hay configuración o algo
// falla, cae a la semilla en código: el sitio nunca se cae por la base (P12). Lectura en build-time.
import type { ArticuloContenido, Faq, PlanHonorario, RecursoCrisis } from "@/lib/ports/database";
import { crearSupabaseDatabase } from "@/lib/adapters/supabase/database";
import { supabaseConfigurado } from "@/lib/adapters/supabase/rest";
import { articulos as semilla } from "@/content/articulos";
import { planes as planesSemilla } from "@/content/honorarios";
import { textos as textosSemilla } from "@/content/textos";
import { faqs as faqsSemilla } from "@/content/faqs";
import { recursosCrisis as recursosSemilla } from "@/content/recursosCrisis";

export async function getArticulos(): Promise<ArticuloContenido[]> {
  if (!supabaseConfigurado()) return semilla;
  try {
    const items = await crearSupabaseDatabase().contenido.listarArticulos();
    return items.length ? items : semilla;
  } catch (e) {
    console.warn("[contenido] semilla (no se pudo leer de la base):", (e as Error).message);
    return semilla;
  }
}

export async function getArticulo(slug: string): Promise<ArticuloContenido | null> {
  const desdeSemilla = () => semilla.find((a) => a.slug === slug) ?? null;
  if (!supabaseConfigurado()) return desdeSemilla();
  try {
    const a = await crearSupabaseDatabase().contenido.obtenerArticulo(slug);
    return a ?? desdeSemilla();
  } catch (e) {
    console.warn("[contenido] semilla (no se pudo leer de la base):", (e as Error).message);
    return desdeSemilla();
  }
}

export async function getPlanes(): Promise<PlanHonorario[]> {
  if (!supabaseConfigurado()) return planesSemilla;
  try {
    const items = await crearSupabaseDatabase().contenido.listarPlanes();
    return items.length ? items : planesSemilla;
  } catch (e) {
    console.warn("[contenido] planes semilla:", (e as Error).message);
    return planesSemilla;
  }
}

export async function getTextos(): Promise<Record<string, string>> {
  if (!supabaseConfigurado()) return textosSemilla;
  try {
    const base = await crearSupabaseDatabase().contenido.obtenerTextos();
    return { ...textosSemilla, ...base };
  } catch (e) {
    console.warn("[contenido] textos semilla:", (e as Error).message);
    return textosSemilla;
  }
}

export async function getFaqs(): Promise<Faq[]> {
  if (!supabaseConfigurado()) return faqsSemilla;
  try {
    const items = await crearSupabaseDatabase().contenido.listarFaqs();
    return items.length ? items : faqsSemilla;
  } catch (e) {
    console.warn("[contenido] faqs semilla:", (e as Error).message);
    return faqsSemilla;
  }
}

export async function getRecursosCrisis(): Promise<RecursoCrisis[]> {
  if (!supabaseConfigurado()) return recursosSemilla;
  try {
    const items = await crearSupabaseDatabase().contenido.listarRecursosCrisis();
    return items.length ? items : recursosSemilla;
  } catch (e) {
    console.warn("[contenido] recursos de crisis semilla:", (e as Error).message);
    return recursosSemilla;
  }
}
