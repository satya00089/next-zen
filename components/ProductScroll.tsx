"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

// ── KNN Visual ───────────────────────────────────────────────────────────────

function AlgoVisual() {
  const classA = [
    { x: 72, y: 48 },
    { x: 95, y: 88 },
    { x: 58, y: 120 },
    { x: 112, y: 62 },
    { x: 88, y: 145 },
    { x: 130, y: 105 },
    { x: 50, y: 70 },
    { x: 105, y: 130 },
  ];
  const classB = [
    { x: 220, y: 55 },
    { x: 255, y: 90 },
    { x: 240, y: 135 },
    { x: 285, y: 65 },
    { x: 270, y: 155 },
    { x: 300, y: 110 },
    { x: 230, y: 170 },
    { x: 310, y: 145 },
  ];
  const query = { x: 168, y: 112 };
  const neighbors = [
    { x: 130, y: 105 },
    { x: 112, y: 62 },
    { x: 105, y: 130 },
  ];

  return (
    <div style={{ width: "100%", height: 260, position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 8,
          background:
            "linear-gradient(105deg, rgba(125,211,252,0.04) 48%, rgba(167,139,250,0.04) 52%)",
        }}
      />
      <svg
        viewBox="0 0 370 210"
        style={{ width: "100%", height: "calc(100% - 44px)" }}
      >
        <motion.line
          x1="178"
          y1="0"
          x2="158"
          y2="210"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />

        {neighbors.map((n, i) => {
          const dx = query.x - n.x,
            dy = query.y - n.y;
          const r = Math.sqrt(dx * dx + dy * dy);
          return (
            <motion.circle
              key={`ring-${i}`}
              cx={query.x}
              cy={query.y}
              r={r}
              fill="none"
              stroke="rgba(125,211,252,0.12)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
            />
          );
        })}

        {neighbors.map((n, i) => (
          <motion.line
            key={`l-${i}`}
            x1={query.x}
            y1={query.y}
            x2={n.x}
            y2={n.y}
            stroke="rgba(125,211,252,0.35)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
          />
        ))}

        {classA.map((p, i) => {
          const isNeighbor = neighbors.some((n) => n.x === p.x && n.y === p.y);
          return (
            <motion.circle
              key={`a-${i}`}
              cx={p.x}
              cy={p.y}
              r={isNeighbor ? 7 : 5}
              fill={
                isNeighbor ? "rgba(125,211,252,0.9)" : "rgba(125,211,252,0.35)"
              }
              stroke={isNeighbor ? "#7DD3FC" : "rgba(125,211,252,0.5)"}
              strokeWidth={isNeighbor ? 1.5 : 1}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            />
          );
        })}

        {classB.map((p, i) => (
          <motion.rect
            key={`b-${i}`}
            x={p.x - 4.5}
            y={p.y - 4.5}
            width={9}
            height={9}
            rx={2}
            fill="rgba(167,139,250,0.35)"
            stroke="rgba(167,139,250,0.5)"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.12 + i * 0.07 }}
          />
        ))}

        <motion.circle
          cx={query.x}
          cy={query.y}
          r={9}
          fill="rgba(125,211,252,0.2)"
          stroke="#7DD3FC"
          strokeWidth="2"
          animate={{ r: [9, 13, 9], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx={query.x} cy={query.y} r={4} fill="#7DD3FC" />
      </svg>

      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "center",
          padding: "8px 12px",
          marginTop: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" fill="rgba(125,211,252,0.7)" />
          </svg>
          <span
            style={{
              color: "#8A8A8A",
              fontSize: 12,
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Class A
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <rect
              x="4"
              y="4"
              width="8"
              height="8"
              rx="1.5"
              fill="rgba(167,139,250,0.7)"
            />
          </svg>
          <span
            style={{
              color: "#8A8A8A",
              fontSize: 12,
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Class B
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" fill="#7DD3FC" />
          </svg>
          <span
            style={{
              color: "#8A8A8A",
              fontSize: 12,
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Query (k=3 → A)
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Microservices Visual ──────────────────────────────────────────────────────

function DiagramVisual() {
  type Node = { id: string; x: number; y: number; color: string; w: number };
  const nodes: Node[] = [
    { id: "Client", x: 38, y: 100, color: "#7DD3FC", w: 52 },
    { id: "CDN", x: 118, y: 52, color: "#A78BFA", w: 44 },
    { id: "API GW", x: 118, y: 148, color: "#7DD3FC", w: 52 },
    { id: "Gateway", x: 205, y: 100, color: "#A78BFA", w: 56 },
    { id: "Playback", x: 290, y: 52, color: "#7DD3FC", w: 62 },
    { id: "Recommend", x: 290, y: 100, color: "#7DD3FC", w: 74 },
    { id: "Auth", x: 290, y: 148, color: "#7DD3FC", w: 44 },
    { id: "Cassandra", x: 390, y: 100, color: "#A78BFA", w: 68 },
  ];
  type Edge = [string, string, string];
  const edges: Edge[] = [
    ["Client", "CDN", "#7DD3FC"],
    ["Client", "API GW", "#7DD3FC"],
    ["CDN", "Gateway", "#A78BFA"],
    ["API GW", "Gateway", "#7DD3FC"],
    ["Gateway", "Playback", "#7DD3FC"],
    ["Gateway", "Recommend", "#A78BFA"],
    ["Gateway", "Auth", "#7DD3FC"],
    ["Recommend", "Cassandra", "#A78BFA"],
    ["Playback", "Cassandra", "#7DD3FC"],
  ];

  const byId = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div style={{ width: "100%", height: 220 }}>
      <svg viewBox="0 0 450 210" style={{ width: "100%", height: "100%" }}>
        {edges.map(([a, b, color], i) => {
          const na = byId(a),
            nb = byId(b);
          return (
            <motion.line
              key={`e${i}`}
              x1={na.x + na.w / 2}
              y1={na.y}
              x2={nb.x - nb.w / 2}
              y2={nb.y}
              stroke={`${color}30`}
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            />
          );
        })}

        {edges.slice(0, 6).map(([a, b, color], i) => {
          const na = byId(a),
            nb = byId(b);
          return (
            <motion.circle
              key={`p${i}`}
              r="3"
              fill={color}
              animate={{
                cx: [na.x + na.w / 2, nb.x - nb.w / 2],
                cy: [na.y, nb.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.45,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.rect
              x={n.x - n.w / 2}
              y={n.y - 13}
              width={n.w}
              height={26}
              rx={6}
              fill="rgba(255,255,255,0.03)"
              stroke={`${n.color}45`}
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            />
            <motion.text
              x={n.x}
              y={n.y + 4.5}
              textAnchor="middle"
              fill={n.color}
              fontSize="9.5"
              fontFamily="var(--font-geist-mono)"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.07 }}
            >
              {n.id}
            </motion.text>
          </g>
        ))}

        <text
          x="225"
          y="207"
          textAnchor="middle"
          fill="rgba(255,255,255,0.15)"
          fontSize="8.5"
          fontFamily="var(--font-geist-mono)"
        >
          Microservices Architecture
        </text>
      </svg>
    </div>
  );
}

// ── Orchestrator Visual ───────────────────────────────────────────────────────

function OrchestratorVisual() {
  // Pure HTML/CSS version of the SVG diagram, now using CSS grid for perfect alignment
  const layers = [
    {
      label: "EDGE",
      color: "#7DD3FC",
      services: ["Route 53", "CloudFront", "WAF"],
    },
    {
      label: "COMPUTE",
      color: "#A78BFA",
      services: ["EKS Nodes", "Lambda", "Auto Scaling"],
    },
    {
      label: "DATA",
      color: "#7DD3FC",
      services: ["RDS Aurora", "ElastiCache", "S3"],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 220,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          gridTemplateColumns: "70px 1fr 1fr 1fr",
          gap: "0 16px",
          width: "100%",
          height: 170,
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {layers.map((layer, rowIdx) => [
          // Layer label
          <span
            key={layer.label}
            style={{
              color: `${layer.color}B0`,
              fontSize: 10,
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: 2,
              textTransform: "uppercase",
              textAlign: "left",
              opacity: 0.8,
              gridRow: rowIdx + 1,
              gridColumn: 1,
              alignSelf: "center",
              justifySelf: "start",
              minWidth: 50,
            }}
          >
            {layer.label}
          </span>,
          // Service chips
          ...layer.services.map((svc, colIdx) => (
            <div
              key={svc}
              style={{
                display: "inline-block",
                padding: "10px 18px",
                background: "rgba(255,255,255,0.03)",
                border: `1.5px solid ${layer.color}40`,
                borderRadius: 6,
                color: layer.color,
                fontFamily: "var(--font-geist-mono)",
                fontSize: 14,
                textAlign: "center",
                fontWeight: 500,
                letterSpacing: 0.5,
                boxSizing: "border-box",
                gridRow: rowIdx + 1,
                gridColumn: colIdx + 2,
                alignSelf: "center",
                whiteSpace: "nowrap",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {svc}
            </div>
          )),
        ])}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.15)",
          fontSize: 11,
          fontFamily: "var(--font-geist-mono)",
          textAlign: "center",
        }}
      >
        Cloud Infrastructure — 3-tier architecture
      </div>
    </div>
  );
}

// ── Products data ─────────────────────────────────────────────────────────────

const products = [
  {
    id: "learn-algo",
    title: "Learn Algo",
    subtitle: "Learn algorithms visually.",
    description:
      "Watch K-Nearest Neighbors classify in real time. See decision boundaries form, neighbor distances animate, and predictions update — across 20+ algorithms from DSA to ML.",
    url: "https://learn-algo.com?utm_source=next-zen.dev",
    features: [
      "KNN, Quicksort & 18 more",
      "ML & AI Included",
      "Step-by-step mode",
    ],
    accent: "#7DD3FC",
    Visual: AlgoVisual,
  },
  {
    id: "diagrammatic",
    title: "Diagrammatic",
    subtitle: "Visualize complex systems.",
    description:
      "Build production-grade architecture diagrams in minutes. Drag services, connect flows, and let AI generate the full system — from microservices to CDN edges.",
    url: "https://diagrammatic.next-zen.dev?utm_source=next-zen.dev",
    features: [
      "AI-generated diagrams",
      "AWS, GCP & 50+ templates",
      "Real-time Collab",
    ],
    accent: "#A78BFA",
    Visual: DiagramVisual,
  },
  {
    id: "orchestrator",
    title: "Orchestrator",
    subtitle: "Automate infrastructure.",
    description:
      "Design cloud infrastructure visually — Route 53, CloudFront, EKS, Aurora and more. Generate Terraform, apply live, and watch your stack deploy in real time.",
    url: "https://orchestrator.next-zen.dev?utm_source=next-zen.dev",
    features: ["Multi-Cloud", "Terraform Gen", "Live deploy status"],
    accent: "#7DD3FC",
    Visual: OrchestratorVisual,
  },
];

// ── Product card ──────────────────────────────────────────────────────────────

function ProductCard({
  product,
  index,
  total,
  progress,
  isDesktop,
}: {
  product: (typeof products)[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
  isDesktop: boolean;
}) {
  const n = Math.max(total - 1, 1);

  const yProgress0 = index === 0 ? 0 : (index - 1) / n;
  const yProgress1 = index === 0 ? 1 : index / n;
  const y = useTransform(
    progress,
    [yProgress0, yProgress1],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"],
  );

  const hasNext = index < total - 1;
  const scale = useTransform(
    progress,
    [hasNext ? index / n : 0, hasNext ? (index + 1) / n : 1],
    [1, hasNext ? 0.92 : 1],
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        y,
        scale,
        zIndex: index + 1,
        transformOrigin: "top center",
        willChange: "transform",
        background: "#080810",
        borderTop: `1px solid ${product.accent}20`,
      }}
    >
      <div
        style={{
          height: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5.5rem 0 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: product.accent,
            }}
          >
            {String(index + 1).padStart(2, "0")} — {product.id}
          </span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {Array.from({ length: total }).map((_, di) => (
              <div
                key={di}
                style={{
                  height: 6,
                  width: di === index ? 22 : 6,
                  borderRadius: 999,
                  background:
                    di === index ? product.accent : "rgba(255,255,255,0.15)",
                  transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* main content */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: "3rem",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#F5F5F5",
                lineHeight: 1.04,
                marginBottom: "0.75rem",
              }}
            >
              {product.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                color: product.accent,
                fontWeight: 500,
                marginBottom: "1.25rem",
              }}
            >
              {product.subtitle}
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#8A8A8A",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "34rem",
              }}
            >
              {product.description}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: "2.5rem",
              }}
            >
              {product.features.map((f) => (
                <span
                  key={f}
                  style={{
                    padding: "6px 16px",
                    fontSize: 11,
                    borderRadius: 999,
                    border: `1px solid ${product.accent}35`,
                    color: product.accent,
                    background: `${product.accent}0D`,
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 30px",
                borderRadius: 999,
                background: "#F5F5F5",
                color: "#050505",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Explore {product.title} →
            </a>
          </div>

          {isDesktop && (
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 28,
                padding: "2.5rem",
                overflow: "hidden",
              }}
            >
              <product.Visual />
            </div>
          )}
        </div>

        {index === 0 && (
          <div
            style={{
              textAlign: "center",
              paddingBottom: "2rem",
              flexShrink: 0,
            }}
          >
            <motion.p
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "#8A8A8A",
                textTransform: "uppercase",
              }}
            >
              scroll to explore
            </motion.p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function ProductScroll() {
  const isDesktop = useIsDesktop();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="products" style={{ position: "relative" }}>
      <div style={{ textAlign: "center", padding: "8rem 1.5rem 5rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#7DD3FC",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Products
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "#F5F5F5",
          }}
        >
          The Product Journey
        </motion.h2>
      </div>

      <div
        ref={containerRef}
        style={{ position: "relative", height: `${products.length * 100}vh` }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              total={products.length}
              progress={scrollYProgress}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
