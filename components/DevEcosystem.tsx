"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

// ── Mini-preview visuals (lightweight versions of the ProductScroll visuals) ──

function AlgoPreview() {
  const bars = [55, 30, 80, 20, 65, 40, 90, 35, 70, 50];
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem", padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "#7DD3FC", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Quicksort — step 4 / 12
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {["DSA", "ML", "AI"].map((t) => (
            <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, border: "1px solid rgba(125,211,252,0.25)", color: "rgba(125,211,252,0.6)", fontFamily: "var(--font-geist-mono)" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 5 }}>
        {bars.map((h, i) => {
          const isPivot = i === 3;
          const isSorted = i < 3;
          return (
            <motion.div key={i} style={{ flex: 1, borderRadius: "3px 3px 0 0" }}
              animate={{ height: [`${h}%`, `${((h + 30) % 70) + 20}%`, `${h}%`] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
              initial={{ height: `${h}%` }}>
              <div style={{
                width: "100%", height: "100%", borderRadius: "3px 3px 0 0",
                background: isPivot ? "rgba(167,139,250,0.9)" : isSorted ? "rgba(125,211,252,0.35)" : "rgba(125,211,252,0.7)",
                boxShadow: isPivot ? "0 0 12px rgba(167,139,250,0.5)" : undefined,
              }} />
            </motion.div>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#A78BFA" }} />
        <span style={{ fontSize: 11, color: "#8A8A8A", fontFamily: "var(--font-geist-mono)" }}>Pivot element</span>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(125,211,252,0.4)", marginLeft: 12 }} />
        <span style={{ fontSize: 11, color: "#8A8A8A", fontFamily: "var(--font-geist-mono)" }}>Sorted</span>
      </div>
    </div>
  );
}

function DiagramPreview() {
  const nodes = [
    { id: "User",  x: 80,  y: 80,  color: "#7DD3FC" },
    { id: "API",   x: 230, y: 50,  color: "#A78BFA" },
    { id: "Auth",  x: 380, y: 80,  color: "#7DD3FC" },
    { id: "DB",    x: 230, y: 180, color: "#A78BFA" },
    { id: "Cache", x: 380, y: 180, color: "#7DD3FC" },
  ];
  const edges: [number, number][] = [[0,1],[1,2],[1,3],[2,4],[3,4]];

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "1rem", padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "#A78BFA", letterSpacing: "0.1em", textTransform: "uppercase" }}>System architecture</span>
        <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, border: "1px solid rgba(167,139,250,0.25)", color: "rgba(167,139,250,0.6)", fontFamily: "var(--font-geist-mono)" }}>AI-generated</span>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <svg viewBox="0 0 460 240" style={{ width: "100%", height: "100%" }}>
          {edges.map(([a, b], i) => (
            <motion.line key={i}
              x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="rgba(167,139,250,0.25)" strokeWidth="1.5" strokeDasharray="4 4"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15 }} />
          ))}
          {edges.slice(0, 3).map(([a, b], i) => (
            <motion.circle key={`f${i}`} r="3" fill="#A78BFA"
              animate={{ cx: [nodes[a].x, nodes[b].x], cy: [nodes[a].y, nodes[b].y] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }} />
          ))}
          {nodes.map((n, i) => (
            <g key={n.id}>
              <motion.rect x={n.x-32} y={n.y-16} width={64} height={32} rx={8}
                fill="rgba(255,255,255,0.03)" stroke={`${n.color}50`} strokeWidth="1.5"
                initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }} />
              <motion.text x={n.x} y={n.y+5} textAnchor="middle"
                fill={n.color} fontSize="11" fontFamily="var(--font-geist-mono)"
                initial={{ opacity:0 }} animate={{ opacity:1 }}
                transition={{ delay: 0.3 + i * 0.1 }}>{n.id}</motion.text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function OrchestratorPreview() {
  const stages = [
    { label: "Plan",   status: "done",    icon: "✓" },
    { label: "VPC",    status: "done",    icon: "✓" },
    { label: "EC2",    status: "active",  icon: "↻" },
    { label: "RDS",    status: "pending", icon: "·" },
    { label: "Deploy", status: "pending", icon: "·" },
  ];
  const resources = [
    { name: "aws_vpc.main",             type: "VPC",    region: "us-east-1" },
    { name: "aws_instance.web",         type: "EC2 t3", region: "us-east-1" },
    { name: "aws_db_instance.postgres", type: "RDS",    region: "us-east-1" },
  ];

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "1.25rem", padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "#7DD3FC", letterSpacing: "0.1em", textTransform: "uppercase" }}>Deploying — AWS</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}
            style={{ width: 7, height: 7, borderRadius: "50%", background: "#7DD3FC" }} />
          <span style={{ fontSize: 11, color: "#7DD3FC", fontFamily: "var(--font-geist-mono)" }}>live</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        {stages.map((s, i) => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <motion.div
                animate={s.status === "active" ? { boxShadow: ["0 0 0 rgba(125,211,252,0)", "0 0 12px rgba(125,211,252,0.6)", "0 0 0 rgba(125,211,252,0)"] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  width: 28, height: 28, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12,
                  background: s.status === "done" ? "rgba(125,211,252,0.15)" : s.status === "active" ? "rgba(125,211,252,0.08)" : "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${s.status === "done" ? "rgba(125,211,252,0.6)" : s.status === "active" ? "rgba(125,211,252,0.4)" : "rgba(255,255,255,0.1)"}`,
                  color: s.status === "pending" ? "#4A4A4A" : "#7DD3FC",
                }}>
                {s.status === "active"
                  ? <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>{s.icon}</motion.span>
                  : s.icon}
              </motion.div>
              <span style={{ fontSize: 10, color: s.status === "pending" ? "#4A4A4A" : "#8A8A8A", fontFamily: "var(--font-geist-mono)" }}>{s.label}</span>
            </div>
            {i < stages.length - 1 && (
              <div style={{ flex: 1, height: 1, background: s.status === "done" ? "rgba(125,211,252,0.3)" : "rgba(255,255,255,0.06)", marginBottom: 18 }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {resources.map((r, i) => (
          <motion.div key={r.name}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "8px 12px", borderRadius: 8,
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
            }}>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "#F5F5F5" }}>{r.name}</span>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ fontSize: 10, color: "#7DD3FC", fontFamily: "var(--font-geist-mono)" }}>{r.type}</span>
              <span style={{ fontSize: 10, color: "#4A4A4A", fontFamily: "var(--font-geist-mono)" }}>{r.region}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Tab data ──────────────────────────────────────────────────────────────────

const TABS = [
  {
    id: "learn-algo",
    label: "Learn Algo",
    accent: "#7DD3FC",
    tagline: "Watch algorithms think.",
    description:
      "Step through every comparison, swap, and recursion. Understand DSA, ML, and AI algorithms by seeing them run — not reading about them.",
    Preview: AlgoPreview,
  },
  {
    id: "diagrammatic",
    label: "Diagrammatic",
    accent: "#A78BFA",
    tagline: "Ideas become architecture.",
    description:
      "Drag, connect, and build system diagrams with AI assistance. Export to any format, collaborate in real time, and never start from a blank canvas.",
    Preview: DiagramPreview,
  },
  {
    id: "orchestrator",
    label: "Orchestrator",
    accent: "#7DD3FC",
    tagline: "Deploy without the guesswork.",
    description:
      "Design cloud infrastructure visually. Orchestrator generates production-ready Terraform and deploys to AWS, Azure, or GCP — live status included.",
    Preview: OrchestratorPreview,
  },
];

// ── Section ───────────────────────────────────────────────────────────────────

export default function DevEcosystem() {
  const isDesktop = useIsDesktop();
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#7DD3FC",
            marginBottom: "1rem",
          }}>
            The Ecosystem
          </p>
          <h2 style={{
            fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "#F5F5F5",
          }}>
            Three tools. One vision.
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                border: `1px solid ${active === i ? `${t.accent}50` : "rgba(255,255,255,0.08)"}`,
                background: active === i ? `${t.accent}12` : "transparent",
                color: active === i ? t.accent : "#8A8A8A",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                fontFamily: "inherit",
              }}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: "3rem",
              alignItems: "center",
            }}>
              {/* Left — text */}
              <div>
                <p style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: tab.accent,
                  marginBottom: "1rem",
                }}>
                  {tab.label}
                </p>
                <h3 style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#F5F5F5",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}>
                  {tab.tagline}
                </h3>
                <p style={{
                  fontSize: "1.0625rem",
                  color: "#8A8A8A",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  maxWidth: "32rem",
                }}>
                  {tab.description}
                </p>

                {/* Progress dots acting as sub-nav */}
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {TABS.map((t, i) => (
                    <button
                      key={t.id}
                      onClick={() => setActive(i)}
                      style={{
                        height: 6,
                        width: i === active ? 28 : 6,
                        borderRadius: 999,
                        border: "none",
                        background: i === active ? tab.accent : "rgba(255,255,255,0.15)",
                        cursor: "pointer",
                        padding: 0,
                        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right — live preview */}
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${tab.accent}18`,
                  borderRadius: 24,
                  overflow: "hidden",
                  height: isDesktop ? 320 : 280,
                  position: "relative",
                }}
              >
                {/* Top bar */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.015)",
                }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,99,99,0.5)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,189,68,0.5)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(76,217,100,0.5)" }} />
                  </div>
                  <span style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 11,
                    color: "#4A4A4A",
                  }}>
                    next-zen / {tab.id}
                  </span>
                  <div style={{ width: 44 }} />
                </div>

                {/* Preview content */}
                <div style={{ height: "calc(100% - 37px)" }}>
                  <tab.Preview />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
