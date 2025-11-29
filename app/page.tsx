"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { FaAws, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiGooglecloud,
  SiAmazonec2,
  SiGooglecloudstorage,
  SiAwselasticloadbalancing,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

interface FloatingIconProps {
  icon: React.ReactNode;
  delay: number;
  duration: number;
  x: string;
  y: string;
  style?: React.CSSProperties;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  delay,
  duration,
  x,
  y,
  style = {},
}) => {
  const { theme } = useThemeContext();
  return (
    <div
      suppressHydrationWarning
      className="text-white"
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity: style.opacity ?? (theme === "dark" ? 0.08 : 0.15),
        zIndex: style.zIndex ?? undefined,
        fontSize: "64px",
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {icon}
    </div>
  );
};

export default function Home() {
  const { theme } = useThemeContext();
  const [showHeaderShadow, setShowHeaderShadow] = useState(false);

  const orchestratorImg = useMemo(
    () =>
      theme === "dark" ? "/orchestrator-dark.png" : "/orchestrator-light.png",
    [theme]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeaderShadow(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-linear-to-br bg-background text-foreground relative overflow-hidden">
      {/* Grid pattern overlay - Full page */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          color: "#111827",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 dark:block hidden"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          color: "#f9fafb",
        }}
      />

      {/* Animated Background Architecture Diagram */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] z-0">
        {/* Connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line
            x1="10%"
            y1="15%"
            x2="25%"
            y2="15%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]"
            opacity="0.6"
          />
          <line
            x1="25%"
            y1="15%"
            x2="40%"
            y2="25%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]"
            opacity="0.6"
            style={{ animationDelay: "200ms" }}
          />
          <line
            x1="40%"
            y1="25%"
            x2="60%"
            y2="20%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#10b981] dark:text-[#34d399]"
            opacity="0.6"
            style={{ animationDelay: "400ms" }}
          />
          <line
            x1="60%"
            y1="20%"
            x2="75%"
            y2="25%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#10b981] dark:text-[#34d399]"
            opacity="0.6"
            style={{ animationDelay: "600ms" }}
          />
          <line
            x1="75%"
            y1="25%"
            x2="90%"
            y2="15%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#ec4899] dark:text-[#f472b6]"
            opacity="0.6"
            style={{ animationDelay: "800ms" }}
          />
          <line
            x1="15%"
            y1="40%"
            x2="30%"
            y2="45%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]"
            opacity="0.6"
            style={{ animationDelay: "300ms" }}
          />
          <line
            x1="30%"
            y1="45%"
            x2="50%"
            y2="50%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#ec4899] dark:text-[#f472b6]"
            opacity="0.6"
            style={{ animationDelay: "500ms" }}
          />
          <line
            x1="50%"
            y1="50%"
            x2="70%"
            y2="45%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#10b981] dark:text-[#34d399]"
            opacity="0.6"
            style={{ animationDelay: "700ms" }}
          />
          <line
            x1="25%"
            y1="15%"
            x2="30%"
            y2="45%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]"
            opacity="0.6"
            style={{ animationDelay: "500ms" }}
          />
          <line
            x1="50%"
            y1="20%"
            x2="50%"
            y2="50%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse text-[#10b981] dark:text-[#34d399]"
            opacity="0.6"
            style={{ animationDelay: "700ms" }}
          />
        </svg>

        {/* Floating component nodes */}
        <div className="absolute top-[15%] left-[10%] w-16 h-16 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg">
          🗄️
        </div>
        <div className="absolute top-[15%] left-[25%] w-20 h-20 bg-[#ec4899]/20 dark:bg-[#f472b6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">
          🔐
        </div>
        <div
          className="absolute top-[25%] left-[40%] w-16 h-16 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg"
          style={{ animationDelay: "300ms" }}
        >
          ⚡
        </div>
        <div className="absolute top-[20%] left-[60%] w-20 h-20 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">
          🌐
        </div>
        <div
          className="absolute top-[25%] left-[75%] w-16 h-16 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg"
          style={{ animationDelay: "600ms" }}
        >
          ⚙️
        </div>
        <div className="absolute top-[15%] left-[90%] w-20 h-20 bg-[#ec4899]/20 dark:bg-[#f472b6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">
          📡
        </div>
        <div
          className="absolute top-[40%] left-[15%] w-16 h-16 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg"
          style={{ animationDelay: "400ms" }}
        >
          🔗
        </div>
        <div className="absolute top-[45%] left-[30%] w-20 h-20 bg-[#ec4899]/20 dark:bg-[#f472b6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">
          💾
        </div>
        <div
          className="absolute top-[50%] left-[50%] w-20 h-20 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float shadow-lg"
          style={{ animationDelay: "500ms" }}
        >
          🎯
        </div>
        <div className="absolute top-[45%] left-[70%] w-20 h-20 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">
          📊
        </div>
        <div
          className="absolute top-[40%] left-[85%] w-16 h-16 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg"
          style={{ animationDelay: "700ms" }}
        >
          🔄
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-[#6366f1] to-[#ad63c7] dark:from-[#8b5cf6] dark:to-[#bd6cd5] transition-shadow duration-300 ${
          showHeaderShadow ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Gradient Background */}
      <section className="relative pt-16 pb-20 z-10 text-(--hero-text)">
        <div className="relative overflow-hidden bg-linear-to-br from-[#6366f1] to-[#ec4899] dark:from-[#8b5cf6] dark:to-[#f472b6]">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Floating Icons in Hero */}
          <FloatingIcon
            icon={<FaAws size={64} />}
            delay={0}
            duration={8}
            x="20%"
            y="10%"
            style={{ opacity: 0.25, zIndex: 50 }}
          />

          <FloatingIcon
            icon={<SiGooglecloudstorage size={42} />}
            delay={1}
            duration={9}
            x="10%"
            y="45%"
            style={{ opacity: 0.25, zIndex: 50 }}
          />

          <FloatingIcon
            icon={<SiAmazonec2 size={42} />}
            delay={1}
            duration={9}
            x="15%"
            y="75%"
            style={{ opacity: 0.25, zIndex: 50 }}
          />

          <FloatingIcon
            icon={<SiGooglecloud size={64} />}
            delay={2}
            duration={10}
            x="75%"
            y="15%"
            style={{ opacity: 0.25, zIndex: 50 }}
          />

          <FloatingIcon
            icon={<SiAwselasticloadbalancing size={42} />}
            delay={1}
            duration={9}
            x="85%"
            y="45%"
            style={{ opacity: 0.25, zIndex: 50 }}
          />

          <FloatingIcon
            icon={<VscAzure size={64} />}
            delay={1}
            duration={9}
            x="80%"
            y="75%"
            style={{ opacity: 0.25, zIndex: 50 }}
          />

          {/* Animated decorative diagram */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10%"
                y1="20%"
                x2="30%"
                y2="40%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                opacity="0.6"
              />
              <line
                x1="30%"
                y1="40%"
                x2="50%"
                y2="30%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                opacity="0.6"
                style={{ animationDelay: "500ms" }}
              />
              <line
                x1="50%"
                y1="30%"
                x2="70%"
                y2="45%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                opacity="0.6"
                style={{ animationDelay: "1000ms" }}
              />
              <line
                x1="70%"
                y1="45%"
                x2="90%"
                y2="25%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                opacity="0.6"
                style={{ animationDelay: "1500ms" }}
              />
            </svg>
            <div className="absolute top-[20%] left-[10%] w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg">
              🗄️
            </div>
            <div className="absolute top-[40%] left-[30%] w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">
              ⚡
            </div>
            <div
              className="absolute top-[30%] left-[50%] w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg"
              style={{ animationDelay: "500ms" }}
            >
              🔗
            </div>
            <div className="absolute top-[45%] left-[70%] w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">
              💾
            </div>
            <div
              className="absolute top-[25%] left-[90%] w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg"
              style={{ animationDelay: "1000ms" }}
            >
              📊
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div className="text-center">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-(--hero-text)/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg">
                  Next-Gen Developer Toolkit&apos;s
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Next Zen.dev
                <br />
                Empower Your Ideas.
              </h1>
              <p className="text-3xl md:text-2xl font-semibold text-(--hero-text)/90 mb-4">
                Build faster. Visualize better. Automate smarter.
              </p>
              <p className="text-lg text-(--hero-text)/80 max-w-2xl mx-auto mb-8">
                All-in-one platform for workflow automation and interactive
                system design.
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { icon: "🚀", value: "2", label: "Powerful Products" },
                  { icon: "👥", value: "1000+", label: "Active Users" },
                  { icon: "✨", value: "∞", label: "Possibilities" },
                ].map((stat, index) => {
                  const getDelayClass = () => {
                    if (index === 0) return "fade-in-up-delay-100";
                    if (index === 1) return "fade-in-up-delay-200";
                    return "fade-in-up-delay-300";
                  };
                  return (
                    <div
                      key={stat.label}
                      className={`text-center transition-all duration-500 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 hover:bg-white/20 hover:scale-105 shadow-lg ${getDelayClass()}`}
                      style={{
                        animation: "fade-in-up 0.8s",
                        animationDelay: `${0.1 * (index + 1)}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-row sm:flex-col gap-4 justify-center items-center">
                <button
                  type="button"
                  onClick={() => navigate("https://diagrammatic.next-zen.dev/")}
                  className="group relative px-8 py-4 bg-(--hero-text) text-(--brand) text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Diagrammatic{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("https://orchestrator.next-zen.dev/")}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Orchestrator{" "}
                  <span className="inline-block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Products to Elevate Your Development
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 text-lg max-w-2xl mx-auto">
            Whether you&apos;re automating workflows or designing systems —
            we&apos;ve got you covered
          </p>
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {/* Diagrammatic Card */}
            <a
              href="https://diagrammatic.next-zen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-[550px]">
                {/* Full-width Image */}
                <Image
                  src={
                    theme === "dark"
                      ? "/diagrammatic-dark.png"
                      : "/diagrammatic-light.png"
                  }
                  alt="Diagrammatic Preview"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                />

                {/* Fade overlay - last 30% */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent from-50% to-background" />

                {/* Content Section - positioned on top right */}
                <div className="absolute right-0 top-0 bottom-0 w-[30%] p-6 flex flex-col justify-center bg-background/30 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <Image
                          src="/diagrammatic-logo.png"
                          alt="Diagrammatic Logo"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-2 group-hover:text-[#10b981] dark:group-hover:text-[#34d399] transition-colors duration-300">
                      Diagrammatic
                    </h2>

                    <p className="text-s text-[var(--text-secondary)] mb-3 leading-relaxed">
                      Create beautiful diagrams and visualizations effortlessly.
                      Perfect for system architecture, flowcharts, and technical
                      documentation.
                    </p>

                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">🧩</span> 75+ diagram
                        components
                      </div>
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">⚡</span> AI-powered
                        assistance
                      </div>
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">🎯</span> Problem
                        solving
                      </div>
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">👥</span> Real-time
                        collaboration
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs text-[#10b981] dark:text-[#34d399] font-semibold">
                      Explore →
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Orchestrator Card */}
            <a
              href="https://orchestrator.next-zen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-[550px]">
                {/* Full-width Image */}
                <Image
                  key={orchestratorImg}
                  src={orchestratorImg}
                  alt="Orchestrator Preview"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  priority
                />

                {/* Fade overlay - last 30% */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent from-50% to-background" />

                {/* Content Section - positioned on top right */}
                <div className="absolute right-0 top-0 bottom-0 w-[30%] p-6 flex flex-col justify-center bg-background/30 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#ad63c7] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <Image
                          src="/orchestrator-logo.png"
                          alt="Orchestrator Logo"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] dark:group-hover:text-[#8b5cf6] transition-colors duration-300">
                      Orchestrator
                    </h2>

                    <p className="text-s text-[var(--text-secondary)] mb-3 leading-relaxed">
                      A visual drag-and-drop platform for designing cloud
                      infrastructure across AWS, Azure, and GCP. Generate
                      production-ready Terraform code instantly.
                    </p>

                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">🎨</span> Visual Canvas
                        Design
                      </div>
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">🔗</span> Smart
                        Resource Linking
                      </div>
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">⚡</span> Instant
                        Terraform Export
                      </div>
                      <div className="flex items-center text-s text-[var(--text-muted)]">
                        <span className="mr-2 text-base">☁️</span> Multi-Cloud
                        Support
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs text-[#6366f1] dark:text-[#8b5cf6] font-semibold">
                      Explore →
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 text-lg max-w-2xl mx-auto">
            Everything you need to build, automate, and visualize your projects
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-3xl bg-[var(--card-bg)] backdrop-blur-sm hover:bg-[var(--card-bg-hover)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Optimized performance for seamless workflow
              </p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-[var(--card-bg)] backdrop-blur-sm hover:bg-[var(--card-bg-hover)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Enterprise-grade security with data encryption
              </p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-[var(--card-bg)] backdrop-blur-sm hover:bg-[var(--card-bg-hover)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Built for teams with real-time sync
              </p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-[var(--card-bg)] backdrop-blur-sm hover:bg-[var(--card-bg-hover)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">🌓</div>
              <h3 className="text-xl font-bold mb-2">Dark Mode</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Beautiful themes for any preference
              </p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-[var(--card-bg)] backdrop-blur-sm hover:bg-[var(--card-bg-hover)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-2">Export & Share</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Save and share your work easily
              </p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-[var(--card-bg)] backdrop-blur-sm hover:bg-[var(--card-bg-hover)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Smart suggestions and automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#6366f1] to-[#ad63c7] dark:from-[#8b5cf6] dark:to-[#bd6cd5] rounded-3xl p-12 relative overflow-hidden">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Next Zen for their workflow
              automation and system design needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://diagrammatic.next-zen.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--background)]/80 backdrop-blur-sm text-[var(--accent)] text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Try Diagrammatic
              </a>
              <a
                href="https://orchestrator.next-zen.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--background)]/80 backdrop-blur-sm text-[var(--brand)] text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Try Orchestrator
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Trusted by 1000+ developers • AI-powered • Open source
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 shadow-[var(--shadow-footer)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row md:flex-col justify-between items-center gap-4">
            <div className="flex items-center justify-start w-full md:w-auto">
              <Image
                src="/logo-brand.png"
                alt="Logo"
                width={180}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-end w-full md:w-auto space-x-6">
              <a
                href="https://github.com/satya00089/next-zen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand)] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/next-zen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand)] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-[var(--text-muted)] text-sm text-center mt-6">
            © 2025 Next Zen. Built with ❤️ for developers
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 12s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
