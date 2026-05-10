"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingMonoliths from "@/components/FloatingMonoliths";

// ── Headline lines ───────────────────────────────────────────────────────────
const HEADLINE = [
  { words: ["Empower", "Ideas."],          gradient: false },
  { words: ["Build",   "Systems."],        gradient: false },
  { words: ["Visualize", "Intelligence."], gradient: false },
] as const;

// ── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Framer Motion reads native scroll events — Lenis (via ReactLenis root)
  // has already smoothed them, so this parallax is buttery with zero extra config.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY       = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating Monoliths in Space */}
        <FloatingMonoliths />

        {/* Breathing cyan orb — center */}
        <div
          style={{
            position: "absolute",
            width: 900,
            height: 900,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
            borderRadius: "50%",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.10, 0.05] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(125,211,252,0.9) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Breathing violet orb — top-right */}
        <div
          style={{
            position: "absolute",
            width: 550,
            height: 550,
            top: "20%",
            right: "8%",
            borderRadius: "50%",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(167,139,250,0.9) 0%, transparent 65%)",
            }}
          />
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          x: "-50%",
          zIndex: 20,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 24,
            height: 40,
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 999,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 6,
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              borderRadius: 999,
              background: "rgba(255,255,255,0.4)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge — Geist Mono, monospaced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: "2rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              fontSize: 13,
              color: "#8A8A8A",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.06em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#7DD3FC",
                boxShadow: "0 0 8px rgba(125,211,252,0.9)",
                display: "inline-block",
              }}
            />
            next-zen.dev
          </span>
        </motion.div>

        {/* Headline — word by word, blur-unmask — Geist Sans */}
        <div
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "2rem",
          }}
        >
          {HEADLINE.map((line, li) => (
            <div key={li}>
              {line.words.map((word, wi) => (
                <motion.span
                  key={`${li}-${wi}`}
                  initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.4 + li * 0.22 + wi * 0.11,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={line.gradient ? "gradient-text" : "text-foreground"}
                  style={{ display: "inline-block", marginRight: "0.28em", ...(li === 1 ? { color: "#ea580c" } : {}) }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#8A8A8A",
            maxWidth: "38rem",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Three powerful tools to amplify your development — algorithms,
          diagrams, and infrastructure — unified in one ecosystem.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#products"
            style={{
              padding: "15px 32px",
              background: "#F5F5F5",
              color: "#050505",
              fontWeight: 600,
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 15,
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Explore Products →
          </a>
          <a
            href="https://github.com/satya00089/next-zen"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "15px 32px",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#F5F5F5",
              fontWeight: 500,
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 15,
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            View on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
