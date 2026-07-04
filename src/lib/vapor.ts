// Motor imperativo de vapor + vidrio esmerilado (portado del prototipo oficial).
// No usa React; manipula capas fijas sobre <body>. Solo corre en el navegador (al hacer clic).
type VaporCfg = { dir: string; dur: number; count: number; alpha: number; size: number; dist: number; color: string };
type FrostCfg = { blur: number; frost: number; hold: number; total: number };

let busy = false;

function hexToRgb(h: string): string {
  h = h.trim().replace("#", "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  const n = parseInt(h, 16);
  return ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255);
}

function ensureLayers(): { fx: HTMLElement; frost: HTMLElement } {
  let fx = document.getElementById("ppm-fx");
  if (!fx) {
    fx = document.createElement("div");
    fx.id = "ppm-fx";
    fx.style.cssText = "position:fixed;inset:0;z-index:60;pointer-events:none;";
    document.body.appendChild(fx);
  }
  let frost = document.getElementById("ppm-frost");
  if (!frost) {
    frost = document.createElement("div");
    frost.id = "ppm-frost";
    frost.style.cssText = "position:fixed;inset:0;z-index:40;display:none;pointer-events:none;background:rgba(0,0,0,0);";
    document.body.appendChild(frost);
  }
  return { fx, frost };
}

function emit(cfg: VaporCfg, btn: HTMLElement, layer: HTMLElement): void {
  const lr = layer.getBoundingClientRect(), br = btn.getBoundingClientRect();
  const pos = { x: br.left - lr.left, y: br.top - lr.top, w: br.width, h: br.height };
  const cx = pos.x + pos.w / 2, cy = pos.y + pos.h / 2, rgb = hexToRgb(cfg.color);
  for (let i = 0; i < cfg.count; i++) {
    setTimeout(() => {
      const size = cfg.size * (0.6 + Math.random() * 0.8);
      const dist = cfg.dist * (0.6 + Math.random() * 0.8);
      const ang = Math.random() * Math.PI * 2, r0 = Math.random() * Math.min(pos.w, pos.h) * 0.32;
      const sx = cx + Math.cos(ang) * r0, sy = cy + Math.sin(ang) * r0;
      const dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist;
      const p = document.createElement("div");
      p.style.cssText = "position:absolute;left:" + (sx - size / 2) + "px;top:" + (sy - size / 2) + "px;width:" + size + "px;height:" + size + "px;border-radius:50%;background:rgba(" + rgb + ",1);filter:blur(" + (size * 0.28) + "px);pointer-events:none;";
      layer.appendChild(p);
      const a = (cfg.alpha / 100) * (0.65 + Math.random() * 0.35);
      p.animate(
        [{ transform: "translate(0,0) scale(0.6)", opacity: 0 }, { opacity: a, offset: 0.25 }, { transform: "translate(" + dx + "px," + dy + "px) scale(1.8)", opacity: 0 }],
        { duration: cfg.dur * (0.8 + Math.random() * 0.4), easing: "cubic-bezier(0.16,1,0.3,1)", fill: "forwards" }
      ).onfinish = () => p.remove();
    }, Math.random() * 160);
  }
}

// Reproduce el vapor + el vidrio que cierra sobre el botón; llama onArrive (navegar) al cerrarse.
export function runVaporTransition(btn: HTMLElement, cfg: VaporCfg, frostCfg: FrostCfg, onArrive: () => void): void {
  if (busy) return;
  busy = true;
  const { fx, frost } = ensureLayers();
  emit(cfg, btn, fx);
  const fondo = getComputedStyle(document.documentElement).getPropertyValue("--fondo") || "#FAF6F0";
  const BG = hexToRgb(fondo);
  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
  frost.style.setProperty("--mx", cx + "px");
  frost.style.setProperty("--my", cy + "px");
  const W = window.innerWidth, H = window.innerHeight;
  const maxR = Math.max(Math.hypot(cx, cy), Math.hypot(W - cx, cy), Math.hypot(cx, H - cy), Math.hypot(W - cx, H - cy)) + 120;
  const blurMax = frostCfg.blur, frostOp = frostCfg.frost / 100, total = frostCfg.total;
  const closeEnd = Math.min(0.97, Math.max(0.5, (frostCfg.hold || 86) / 100));
  const maskFor = (r0: number) => "radial-gradient(circle at var(--mx) var(--my), transparent " + r0.toFixed(1) + "px, #000 " + (r0 + 90).toFixed(1) + "px)";
  frost.style.display = "block";
  const start = performance.now();
  let swapped = false;
  function frame(now: number) {
    let t = (now - start) / total; if (t > 1) t = 1;
    let op: number, blur: number, r0: number;
    let ramp = Math.min(1, t / 0.3); ramp = 1 - Math.pow(1 - ramp, 2);
    if (t < closeEnd) { const tc = t / closeEnd; const ec = 1 - Math.pow(1 - tc, 3); r0 = maxR * (1 - ec); op = frostOp * ramp; blur = blurMax * ramp; }
    else { const tr = (t - closeEnd) / (1 - closeEnd); const er = 1 - Math.pow(1 - tr, 2); r0 = 0; op = frostOp * (1 - er); blur = blurMax * (1 - er); }
    frost.style.background = "rgba(" + BG + "," + op.toFixed(3) + ")";
    frost.style.backdropFilter = "blur(" + blur.toFixed(2) + "px)";
    (frost.style as unknown as Record<string, string>).webkitBackdropFilter = "blur(" + blur.toFixed(2) + "px)";
    frost.style.maskImage = maskFor(r0);
    (frost.style as unknown as Record<string, string>).webkitMaskImage = maskFor(r0);
    if (!swapped && t >= closeEnd) { swapped = true; onArrive(); }
    if (t < 1) requestAnimationFrame(frame);
    else { frost.style.display = "none"; frost.style.background = "rgba(" + BG + ",0)"; busy = false; }
  }
  requestAnimationFrame(frame);
}
