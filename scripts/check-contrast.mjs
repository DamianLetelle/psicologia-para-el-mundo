// Control automático de contraste WCAG AA (Principio 18). Lee las paletas de src/styles/theme.css.
import { readFileSync } from "node:fs";
const css = readFileSync(new URL("../src/styles/theme.css", import.meta.url), "utf8");
const lum = (h) => { const c = h.replace("#", ""); const v = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4))); return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]; };
const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); };
const pairs = [["tinta", "fondo"], ["tinta-suave", "fondo"], ["accion-texto", "accion"], ["acento-texto", "acento-fondo"], ["accion", "fondo"]];
const MIN = 4.5;
let fails = 0;
for (const m of css.matchAll(/\[data-theme="([a-z]+)"\]\s*\{([^}]*)\}/g)) {
  const name = m[1]; const roles = {};
  for (const r of m[2].matchAll(/--([a-z-]+):\s*(#[0-9a-fA-F]{6})/g)) roles[r[1]] = r[2];
  const out = pairs.map(([fg, bg]) => { const v = ratio(roles[fg], roles[bg]); if (v < MIN) fails++; return `${fg}/${bg}=${v.toFixed(2)}${v < MIN ? " FALLA" : ""}`; });
  console.log(name.padEnd(10) + " " + out.join("  "));
}
console.log(fails === 0 ? "OK: todas las paletas cumplen AA (>=4.5)" : `FALLA: ${fails} par(es) por debajo de ${MIN}`);
process.exit(fails === 0 ? 0 : 1);
