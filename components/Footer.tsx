"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function Footer() {
  const isDesktop = useIsDesktop();
  const productLinks = [
    {
      label: "Learn Algo",
      href: "https://learn-algo.com?utm_source=next-zen.dev",
    },
    {
      label: "Diagrammatic",
      href: "https://diagrammatic.next-zen.dev?utm_source=next-zen.dev",
    },
    {
      label: "Orchestrator",
      href: "https://orchestrator.next-zen.dev?utm_source=next-zen.dev",
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/satya00089/next-zen",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/next-zen",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div style={{ display: "flex", flexDirection: isDesktop ? "row" : "column", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Next Zen"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-foreground font-semibold tracking-tight">
              Next Zen
            </span>
          </div>

          {/* Product links */}
          <div className="flex items-center gap-6">
            {productLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-muted/60">
            © {new Date().getFullYear()} Next Zen. Built with precision for
            developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
