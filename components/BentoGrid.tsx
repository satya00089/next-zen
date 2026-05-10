"use client";

import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const features = [
  {
    title: "Visual Learning",
    description:
      "Learn algorithms through motion. See sorting, searching, and graph traversal come alive.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M7 16l4-8 4 6 4-10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    span: "col-span-2 row-span-2",
    visual: (
      <div className="flex items-end gap-1 h-16 mt-4">
        {[35, 60, 20, 80, 45, 70, 30, 55].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t bg-accent/40"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with live cursors and instant sync.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
  {
    title: "AI-Powered",
    description: "Smart suggestions and intelligent automation.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
  {
    title: "Infrastructure Automation",
    description:
      "Design cloud architecture visually. Generate Terraform, deploy to AWS, Azure, GCP.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    span: "col-span-2 row-span-1",
    visual: (
      <div className="flex items-center gap-2 mt-4 font-mono text-xs text-accent/60">
        <span className="px-2 py-1 rounded bg-accent/10 border border-accent/20">
          AWS
        </span>
        <span className="text-accent/30">→</span>
        <span className="px-2 py-1 rounded bg-accent-violet/10 border border-accent-violet/20 text-accent-violet/60">
          Azure
        </span>
        <span className="text-accent/30">→</span>
        <span className="px-2 py-1 rounded bg-accent/10 border border-accent/20">
          GCP
        </span>
      </div>
    ),
  },
  {
    title: "Infinite Canvas",
    description: "Zoom, pan, and build without limits.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
  {
    title: "Export Anywhere",
    description: "PNG, SVG, PDF, and code — your work, your format.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
  {
    title: "Guided Help",
    description:
      "Step-by-step walkthroughs from Diagrammatic. Build your first system design in minutes with contextual hints and templates.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16v-4M12 8h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
];

export default function BentoGrid() {
  const isDesktop = useIsDesktop();
  return (
    <section className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Capabilities
          </p>
          <h2 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 700, letterSpacing: "-0.025em" }}>
            Powerful Features
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr", gap: "1rem" }}>
          {features.map((feature, i) => {
            // Determine colspan: first and 4th card span 2 cols
            const wideCard = i === 0 || i === 3;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={wideCard ? { gridColumn: "span 2" } : {}}
                className="glass-card glass-card-hover p-6 transition-all duration-500 group"
              >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Optional visual */}
              {feature.visual && feature.visual}
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
