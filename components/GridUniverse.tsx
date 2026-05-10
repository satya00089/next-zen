"use client";

import { useEffect, useRef } from "react";

const CY = "125,211,252"; // cyan
const VI = "167,139,250"; // violet
const COLS = 22;
const ROWS = 16;
const LABELS = [
  { r: 3, c: 5, t: "[0,0]" },
  { r: 6, c: 10, t: "[1,3]" },
  { r: 9, c: 16, t: "[3,6]" },
  { r: 11, c: 3, t: "[5,1]" },
  { r: 4, c: 18, t: "[2,7]" },
  { r: 7, c: 8, t: "[2,4]" },
];

interface Nd { r: number; c: number; age: number; life: number; }
interface WF { pts: Array<{ r: number; c: number }>; age: number; life: number; }
interface Scene { vpx: number; vpy: number; W: number; H: number; }
type Pt = { x: number; y: number };

function gp(row: number, col: number, sc: Scene): Pt {
  const d = (row / (ROWS - 1)) ** 2;
  return { x: sc.vpx + (col / (COLS - 1) - 0.5) * sc.W * 1.6 * d, y: sc.vpy + (sc.H - sc.vpy) * d };
}

function calcFade(prog: number, enter: number, exit: number): number {
  if (prog < enter) return prog / enter;
  if (prog > exit) return (1 - prog) / (1 - exit);
  return 1;
}

function drawGrid(ctx: CanvasRenderingContext2D, sc: Scene) {
  for (let c = 0; c < COLS; c++) {
    const isCenter = c === Math.floor(COLS / 2);
    const dfc = Math.abs(c / (COLS - 1) - 0.5) * 2;
    const a = isCenter ? 0.1 : 0.022 + (1 - dfc) * 0.038;
    const top = gp(0.01, c, sc);
    const bot = gp(ROWS - 1, c, sc);
    ctx.beginPath(); ctx.moveTo(top.x, top.y); ctx.lineTo(bot.x, bot.y);
    ctx.strokeStyle = `rgba(${CY},${a})`; ctx.lineWidth = isCenter ? 0.9 : 0.5; ctx.stroke();
  }
  for (let r = 1; r < ROWS; r++) {
    const d = r / (ROWS - 1);
    const L = gp(r, 0, sc); const R = gp(r, COLS - 1, sc);
    ctx.beginPath(); ctx.moveTo(L.x, L.y); ctx.lineTo(R.x, R.y);
    ctx.strokeStyle = `rgba(${CY},${0.01 + d * 0.075})`; ctx.lineWidth = 0.35 + d * 0.65; ctx.stroke();
  }
  ctx.font = "8.5px 'Courier New',monospace"; ctx.fillStyle = `rgba(${CY},0.2)`;
  for (const lb of LABELS) {
    if (lb.r >= ROWS || lb.c >= COLS) continue;
    const p = gp(lb.r, lb.c, sc);
    ctx.fillText(lb.t, p.x + 5, p.y - 5);
  }
}

function tickNodes(ctx: CanvasRenderingContext2D, nodes: Nd[], dt: number, cdRef: { v: number }, sc: Scene) {
  cdRef.v -= dt;
  if (cdRef.v < 0 && nodes.length < 4) {
    cdRef.v = 1.5 + Math.random() * 2.5;
    nodes.push({ r: 2 + Math.floor(Math.random() * (ROWS - 4)), c: 2 + Math.floor(Math.random() * (COLS - 4)), age: 0, life: 3 + Math.random() * 2 });
  }
  for (let i = nodes.length - 1; i >= 0; i--) {
    const n = nodes[i]; n.age += dt;
    if (n.age > n.life) { nodes.splice(i, 1); continue; }
    const pt = gp(n.r, n.c, sc);
    const fade = calcFade(n.age / n.life, 0.15, 0.85);
    const pulse = Math.sin(n.age * 5) * 0.5 + 0.5;
    ctx.beginPath(); ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2); ctx.fillStyle = `rgba(${CY},${fade * 0.9})`; ctx.fill();
    for (let k = 0; k < 2; k++) {
      const rt = (pulse + k * 0.5) % 1;
      ctx.beginPath(); ctx.arc(pt.x, pt.y, 8 + rt * 22, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${CY},${fade * (1 - rt) * 0.35})`; ctx.lineWidth = 0.8; ctx.stroke();
    }
    for (let j = 0; j < nodes.length; j++) {
      if (j === i) continue;
      const op = gp(nodes[j].r, nodes[j].c, sc);
      const d = Math.hypot(op.x - pt.x, op.y - pt.y);
      if (d < 260) { ctx.beginPath(); ctx.moveTo(pt.x, pt.y); ctx.lineTo(op.x, op.y); ctx.strokeStyle = `rgba(${VI},${fade * (1 - d / 260) * 0.28})`; ctx.lineWidth = 0.6; ctx.stroke(); }
    }
  }
}

function tickWFs(ctx: CanvasRenderingContext2D, wfs: WF[], dt: number, cdRef: { v: number }, sc: Scene) {
  cdRef.v -= dt;
  if (cdRef.v < 0 && wfs.length < 2) {
    cdRef.v = 3.5 + Math.random() * 3;
    const n = 3 + (Math.random() > 0.5 ? 1 : 0);
    wfs.push({ pts: Array.from({ length: n }, () => ({ r: 3 + Math.floor(Math.random() * (ROWS - 5)), c: 2 + Math.floor(Math.random() * (COLS - 4)) })), age: 0, life: 2.2 + Math.random() * 1.5 });
  }
  for (let i = wfs.length - 1; i >= 0; i--) {
    const wf = wfs[i]; wf.age += dt;
    if (wf.age > wf.life) { wfs.splice(i, 1); continue; }
    const fade = calcFade(wf.age / wf.life, 0.2, 0.8);
    const sp = wf.pts.map(p => gp(p.r, p.c, sc));
    ctx.beginPath(); ctx.moveTo(sp[0].x, sp[0].y);
    for (let k = 1; k < sp.length; k++) ctx.lineTo(sp[k].x, sp[k].y);
    ctx.closePath(); ctx.strokeStyle = `rgba(${VI},${fade * 0.28})`; ctx.lineWidth = 0.8; ctx.stroke();
    ctx.fillStyle = `rgba(${VI},${fade * 0.035})`; ctx.fill();
    for (const p of sp) { ctx.beginPath(); ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2); ctx.fillStyle = `rgba(${VI},${fade * 0.55})`; ctx.fill(); }
  }
}

export default function GridUniverse() {
  const cvs = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const raf = useRef(0);

  useEffect(() => {
    const canvas = cvs.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = 0, H = 0;

    function resize() {
      const dpr = globalThis.devicePixelRatio || 1;
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function onMouse(e: Event) {
      const me = e as MouseEvent;
      mouse.current = { x: me.clientX / W, y: me.clientY / H };
    }
    globalThis.addEventListener("mousemove", onMouse);

    const nodes: Nd[] = [], wfs: WF[] = [];
    const nodeCd = { v: 0 }, wfCd = { v: 0 };
    let prev = 0;

    function frame(ts: number) {
      const dt = Math.min((ts - prev) / 1000, 0.05); prev = ts;
      const sc: Scene = {
        vpx: W * 0.5 + (mouse.current.x - 0.5) * 55,
        vpy: H * 0.32 + (mouse.current.y - 0.5) * 28,
        W, H,
      };
      ctx.clearRect(0, 0, W, H);
      drawGrid(ctx, sc);
      tickNodes(ctx, nodes, dt, nodeCd, sc);
      tickWFs(ctx, wfs, dt, wfCd, sc);
      raf.current = requestAnimationFrame(frame);
    }
    raf.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
      globalThis.removeEventListener("mousemove", onMouse);
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
