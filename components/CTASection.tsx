"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent-violet/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-bold tracking-tight mb-8 leading-[1.05]"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          Build the future
          <br />
          <span
            style={{
              color: "#ea580c",
            }}
          >
            visually.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted max-w-2xl mx-auto mb-12"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
        >
          Join thousands of developers who trust Next Zen for algorithms,
          workflow automation, and system design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="https://learn-algo.com?utm_source=next-zen.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300"
          >
            Start Building
          </a>
          <a
            href="https://github.com/satya00089/next-zen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/15 text-foreground font-medium rounded-full hover:bg-white/5 transition-all duration-300"
          >
            View Source
          </a>
        </motion.div>
      </div>
    </section>
  );
}
