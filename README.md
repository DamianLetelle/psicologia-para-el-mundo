# Psicología para el mundo — sitio web

Sitio de Cecilia Torres. **Fase 4 (MVP público).** Stack: Next.js 16 + React 19 + Tailwind v4 +
framer-motion, exportado como sitio **estático** (`output: export`).

## Estructura (una responsabilidad por archivo)

- `src/app/` — páginas (una por ruta), `layout.tsx` (marca + menú + pie globales) y `template.tsx`
  (transición de entrada entre páginas).
- `src/components/` — piezas de UI: secciones de la home, header/footer, menú móvil, botones, y el
  movimiento (`Reveal`, `VaporCTA`, `motion/TransitionLink`).
- `src/lib/` — motor de vapor, tokens de movimiento, y la **capa de servicios (sin ataduras)**:
  - `config.ts` — validación de variables de entorno con zod (falla temprano si falta algo).
  - `ports/` — contratos de lo externo: `auth`, `database`, `payments`, `mailer`, `storage`.
  - `adapters/` — implementaciones por proveedor (hoy *stubs*; se conectan en la Fase 5).
  - `services.ts` — registro: valida la config y elige el adapter activo. La app usa los **puertos**,
    nunca el SDK del proveedor → cambiar de proveedor es cambiar un adapter.
- `src/content/` — contenido como dato (biblioteca). `src/styles/theme.css` — las 6 paletas como dato.
- `scripts/check-contrast.mjs` — control automático de contraste (WCAG AA).

## Desarrollo

- `npm install` y `npm run dev`.
- `npm run build` genera el sitio estático en `out/`.
- `npm run check:contrast` valida el contraste de todas las paletas.

## Publicar

Cloudflare Pages: deploy de `out/` (o auto-deploy conectando este repositorio).

Lo externo (Supabase, Mercado Pago, Resend) entra en la **Fase 5** detrás de `src/lib/ports`.
