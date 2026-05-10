"use client";

import { useEffect, useRef } from "react";

// ── Types ─────────────────────────────────────────────────────────────────

interface Slab {
  x: number; y: number; z: number;
  w: number; h: number;
  rotY: number; rotSpd: number;
  vx: number; vy: number;
  phase: number;
  r: number; g: number; b: number;
}

interface SlabMetrics { cx: number; cy: number; vw: number; vh: number; }
interface SlabColors  { r: number; g: number; b: number; }
type Pt = { x: number; y: number };

// ── Factory ───────────────────────────────────────────────────────────────

function makeSlab(
  x: number, y: number, z: number,
  w: number, h: number,
  rotY: number, violet: boolean
): Slab {
  return {
    x, y, z, w, h, rotY,
    rotSpd: (0.022 + Math.random() * 0.036) * (Math.random() > 0.5 ? 1 : -1),
    vx: (Math.random() - 0.5) * 0.005,
    vy: (Math.random() - 0.5) * 0.0025,
    phase: Math.random() * Math.PI * 2,
    r: violet ? 167 : 125,
    g: violet ? 139 : 211,
    b: violet ? 250 : 252,
  };
}

// ── Geometry helpers ──────────────────────────────────────────────────────

function corners(m: SlabMetrics, sk: number): Pt[] {
  const hw = m.vw / 2;
  const hh = m.vh / 2;
  return [
    { x: m.cx - hw + sk, y: m.cy - hh }, // TL
    { x: m.cx + hw + sk, y: m.cy - hh }, // TR
    { x: m.cx + hw - sk, y: m.cy + hh }, // BR
    { x: m.cx - hw - sk, y: m.cy + hh }, // BL
  ];
}

function trace(ctx: CanvasRenderingContext2D, pts: Pt[]) {
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.closePath();
}

// ── Draw passes ───────────────────────────────────────────────────────────

function drawBody(ctx: CanvasRenderingContext2D, pts: Pt[], m: SlabMetrics, alpha: number) {
  const topY = m.cy - m.vh / 2;
  const botY = m.cy + m.vh / 2;
  const gr = ctx.createLinearGradient(0, topY, 0, botY);
  gr.addColorStop(0,   `rgba(10,15,28,${alpha * 0.85})`);
  gr.addColorStop(0.5, `rgba(6,10,20,${alpha})`);
  gr.addColorStop(1,   `rgba(3,5,12,${alpha * 1.1})`);
  trace(ctx, pts);
  ctx.fillStyle = gr;
  ctx.fill();
}

function drawOverlays(ctx: CanvasRenderingContext2D, pts: Pt[], m: SlabMetrics, col: SlabColors, depth: number) {
  const topY = m.cy - m.vh / 2;
  ctx.save();
  trace(ctx, pts);
  ctx.clip();

  // Top reflection
  const rg = ctx.createLinearGradient(0, topY, 0, topY + m.vh * 0.38);
  rg.addColorStop(0, `rgba(255,255,255,${0.022 + depth * 0.06})`);
  rg.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = rg;
  ctx.fillRect(m.cx - m.vw, topY, m.vw * 2, m.vh * 0.38);

  // Vertical light streak
  const sx = pts[0].x + (pts[1].x - pts[0].x) * 0.18;
  const sg = ctx.createLinearGradient(sx - 12, 0, sx + 12, 0);
  sg.addColorStop(0,   `rgba(${col.r},${col.g},${col.b},0)`);
  sg.addColorStop(0.5, `rgba(${col.r},${col.g},${col.b},${depth * 0.14})`);
  sg.addColorStop(1,   `rgba(${col.r},${col.g},${col.b},0)`);
  ctx.fillStyle = sg;
  ctx.fillRect(sx - 12, topY, 24, m.vh);

  ctx.restore();
}

function drawEdge(ctx: CanvasRenderingContext2D, pts: Pt[], col: SlabColors, depth: number) {
  // Full outline
  trace(ctx, pts);
  ctx.strokeStyle = `rgba(${col.r},${col.g},${col.b},${0.055 + depth * 0.17})`;
  ctx.lineWidth = 0.4 + depth * 0.6;
  ctx.stroke();

  // Brighter top edge (catches the "light")
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  ctx.lineTo(pts[1].x, pts[1].y);
  ctx.strokeStyle = `rgba(${col.r},${col.g},${col.b},${0.1 + depth * 0.28})`;
  ctx.lineWidth = 0.7 + depth * 0.5;
  ctx.stroke();
}

function drawGlow(ctx: CanvasRenderingContext2D, m: SlabMetrics, col: SlabColors, depth: number) {
  const botY = m.cy + m.vh / 2;
  const gr = ctx.createRadialGradient(m.cx, botY, 0, m.cx, botY, m.vw);
  gr.addColorStop(0, `rgba(${col.r},${col.g},${col.b},${depth * 0.07})`);
  gr.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`);
  ctx.fillStyle = gr;
  ctx.fillRect(m.cx - m.vw, botY - 15, m.vw * 2, 70);
}

function drawSlab(ctx: CanvasRenderingContext2D, s: Slab, W: number, H: number) {
  const scale = 0.28 + s.z * 0.72;
  const m: SlabMetrics = {
    cx: s.x * W,
    cy: s.y * H,
    vw: s.w * scale * Math.max(0.06, Math.abs(Math.cos(s.rotY))),
    vh: s.h * scale,
  };
  const sk    = Math.sin(s.rotY) * m.vh * 0.12;
  const alpha = 0.16 + s.z * 0.4;
  const blur  = (1 - s.z) * 3;
  const col: SlabColors = { r: s.r, g: s.g, b: s.b };
  const pts = corners(m, sk);

  ctx.filter = blur > 0.5 ? `blur(${blur.toFixed(1)}px)` : "none";
  drawGlow(ctx, m, col, s.z);
  drawBody(ctx, pts, m, alpha);
  drawOverlays(ctx, pts, m, col, s.z);
  drawEdge(ctx, pts, col, s.z);
  ctx.filter = "none";
}

// ── Fog vignette ──────────────────────────────────────────────────────────

function drawFog(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const gr = ctx.createRadialGradient(W / 2, H * 0.5, 0, W / 2, H * 0.5, Math.max(W, H) * 0.72);
  gr.addColorStop(0,    "rgba(5,8,16,0)");
  gr.addColorStop(0.55, "rgba(5,8,16,0.1)");
  gr.addColorStop(1,    "rgba(3,5,12,0.68)");
  ctx.fillStyle = gr;
  ctx.fillRect(0, 0, W, H);
}

// ── Physics ───────────────────────────────────────────────────────────────

function updateSlab(s: Slab, dt: number) {
  s.rotY += s.rotSpd * dt;
  s.x    += s.vx * dt;
  s.y    += s.vy * dt;
  if (s.x < -0.15)      s.vx =  Math.abs(s.vx);
  else if (s.x > 1.15)  s.vx = -Math.abs(s.vx);
  if (s.y < -0.08)      s.vy =  Math.abs(s.vy);
  else if (s.y > 1.08)  s.vy = -Math.abs(s.vy);
}

// ── Component ─────────────────────────────────────────────────────────────

export default function FloatingMonoliths() {
  const cvs = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const canvasOrNull = cvs.current;
    if (!canvasOrNull) return;
    const canvas: HTMLCanvasElement = canvasOrNull;
    const ctxOrNull = canvas.getContext("2d");
    if (!ctxOrNull) return;
    const ctx: CanvasRenderingContext2D = ctxOrNull;

    let W = 0, H = 0;

    function resize() {
      const dpr = globalThis.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Slabs — initial positions spread wide so none block the hero text center
    const slabs: Slab[] = [
      makeSlab(0.1,  0.5,  0.5,  145, 400,  0.3,  false), // left, mid
      makeSlab(0.78, 0.42, 0.88, 190, 500, -0.22, true),  // right, upper, close
      makeSlab(0.4,  0.68, 0.28, 110, 300,  0.52, false), // center-left, lower, far
      makeSlab(0.92, 0.58, 0.42, 135, 360, -0.38, true),  // far right
      makeSlab(0.05, 0.72, 0.18,  90, 260,  0.58, false), // far left, lower, very far
      makeSlab(0.62, 0.26, 0.65, 170, 440, -0.14, true),  // center-right, upper
      makeSlab(0.28, 0.82, 0.35, 120, 340,  0.44, false), // center-left, low
    ];

    // Draw far-to-close so close slabs paint on top
    slabs.sort((a, b) => a.z - b.z);

    let prev = 0;

    function frame(ts: number) {
      const dt = Math.min((ts - prev) / 1000, 0.05);
      prev = ts;
      ctx.clearRect(0, 0, W, H);
      for (const s of slabs) {
        updateSlab(s, dt);
        drawSlab(ctx, s, W, H);
      }
      drawFog(ctx, W, H);
      raf.current = requestAnimationFrame(frame);
    }

    raf.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={cvs}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
