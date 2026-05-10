"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", handler);
    };
  }, []);

  const navLinks = [
    { label: "Learn Algo", href: "https://learn-algo.com?utm_source=next-zen.dev" },
    { label: "Diagrammatic", href: "https://diagrammatic.next-zen.dev?utm_source=next-zen.dev" },
    { label: "Orchestrator", href: "https://orchestrator.next-zen.dev?utm_source=next-zen.dev" },
  ];

  return (
    <>
      <style>{`
        .nz-nav-link {
          padding: 8px 16px;
          font-size: 14px;
          color: #8A8A8A;
          text-decoration: none;
          border-radius: 9999px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nz-nav-link:hover {
          color: #F5F5F5;
          background: rgba(255,255,255,0.05);
        }
        .nz-nav-cta {
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #7DD3FC;
          text-decoration: none;
          border-radius: 9999px;
          border: 1px solid rgba(125,211,252,0.2);
          background: rgba(125,211,252,0.08);
          transition: background 0.2s;
          white-space: nowrap;
        }
        .nz-nav-cta:hover {
          background: rgba(125,211,252,0.15);
        }
      `}</style>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "fixed", top: 16, left: 16, right: 16, zIndex: 50 }}
      >
        <nav
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            borderRadius: 9999,
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled ? "rgba(14,14,16,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
            border: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
            boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.25)" : "none",
            transition: "all 0.5s",
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo.png" alt="Next Zen" width={32} height={32} style={{ objectFit: "contain" }} />
            <span style={{ color: "#F5F5F5", fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em" }}>
              Next Zen
            </span>
          </a>

          {/* Center Links - Desktop */}
          {isDesktop && (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="nz-nav-link">
                  {link.label}
                </a>
              ))}
              <a href="https://github.com/satya00089/next-zen" target="_blank" rel="noopener noreferrer" className="nz-nav-link">
                GitHub
              </a>
            </div>
          )}

          {/* CTA - Desktop */}
          {isDesktop && (
            <a href="#products" className="nz-nav-cta">
              Explore Products
            </a>
          )}

          {/* Mobile hamburger */}
          {!isDesktop && (
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display: "flex", flexDirection: "column", gap: 5, padding: 8, background: "none", border: "none", cursor: "pointer" }}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ display: "block", width: 20, height: 2, background: "#F5F5F5", borderRadius: 2 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: "block", width: 20, height: 2, background: "#F5F5F5", borderRadius: 2 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                style={{ display: "block", width: 20, height: 2, background: "#F5F5F5", borderRadius: 2 }}
              />
            </button>
          )}
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && !isDesktop && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: 8,
                marginLeft: 16,
                marginRight: 16,
                borderRadius: 16,
                background: "rgba(14,14,16,0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: 24,
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", padding: "10px 0", fontSize: 17, color: "#8A8A8A", textDecoration: "none" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/satya00089/next-zen"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", padding: "10px 0", fontSize: 17, color: "#8A8A8A", textDecoration: "none" }}
              >
                GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
