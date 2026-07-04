import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { articulos } from "@/content/articulos";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["/", "/como-trabajo", "/biblioteca", "/herramientas", "/honorarios", "/faq", "/contacto", "/sobre", "/legales", "/agendar"];
  const now = new Date();
  const paginas: MetadataRoute.Sitemap = rutas.map((r) => ({
    url: SITE_URL + r,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : 0.7,
  }));
  const guias: MetadataRoute.Sitemap = articulos.map((a) => ({
    url: `${SITE_URL}/biblioteca/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...paginas, ...guias];
}
