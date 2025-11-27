'use client';

import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showHeaderShadow, setShowHeaderShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeaderShadow(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-[#ffffff] to-[#f9fafb] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#111827] text-[#111827] dark:text-[#f9fafb] relative overflow-hidden">
      {/* Grid pattern overlay - Full page */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" style={{
        backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        color: '#111827'
      }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 dark:block hidden" style={{
        backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        color: '#f9fafb'
      }} />
      
      {/* Animated Background Architecture Diagram */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] z-0">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="10%" y1="15%" x2="25%" y2="15%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]" opacity="0.6" />
          <line x1="25%" y1="15%" x2="40%" y2="25%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]" opacity="0.6" style={{ animationDelay: '200ms' }} />
          <line x1="40%" y1="25%" x2="60%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#10b981] dark:text-[#34d399]" opacity="0.6" style={{ animationDelay: '400ms' }} />
          <line x1="60%" y1="20%" x2="75%" y2="25%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#10b981] dark:text-[#34d399]" opacity="0.6" style={{ animationDelay: '600ms' }} />
          <line x1="75%" y1="25%" x2="90%" y2="15%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#ec4899] dark:text-[#f472b6]" opacity="0.6" style={{ animationDelay: '800ms' }} />
          <line x1="15%" y1="40%" x2="30%" y2="45%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]" opacity="0.6" style={{ animationDelay: '300ms' }} />
          <line x1="30%" y1="45%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#ec4899] dark:text-[#f472b6]" opacity="0.6" style={{ animationDelay: '500ms' }} />
          <line x1="50%" y1="50%" x2="70%" y2="45%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#10b981] dark:text-[#34d399]" opacity="0.6" style={{ animationDelay: '700ms' }} />
          <line x1="25%" y1="15%" x2="30%" y2="45%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#6366f1] dark:text-[#8b5cf6]" opacity="0.6" style={{ animationDelay: '500ms' }} />
          <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse text-[#10b981] dark:text-[#34d399]" opacity="0.6" style={{ animationDelay: '700ms' }} />
        </svg>

        {/* Floating component nodes */}
        <div className="absolute top-[15%] left-[10%] w-16 h-16 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg">🗄️</div>
        <div className="absolute top-[15%] left-[25%] w-20 h-20 bg-[#ec4899]/20 dark:bg-[#f472b6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">🔐</div>
        <div className="absolute top-[25%] left-[40%] w-16 h-16 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg" style={{ animationDelay: '300ms' }}>⚡</div>
        <div className="absolute top-[20%] left-[60%] w-20 h-20 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">🌐</div>
        <div className="absolute top-[25%] left-[75%] w-16 h-16 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg" style={{ animationDelay: '600ms' }}>⚙️</div>
        <div className="absolute top-[15%] left-[90%] w-20 h-20 bg-[#ec4899]/20 dark:bg-[#f472b6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">📡</div>
        <div className="absolute top-[40%] left-[15%] w-16 h-16 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg" style={{ animationDelay: '400ms' }}>🔗</div>
        <div className="absolute top-[45%] left-[30%] w-20 h-20 bg-[#ec4899]/20 dark:bg-[#f472b6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">💾</div>
        <div className="absolute top-[50%] left-[50%] w-20 h-20 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float shadow-lg" style={{ animationDelay: '500ms' }}>🎯</div>
        <div className="absolute top-[45%] left-[70%] w-20 h-20 bg-[#6366f1]/20 dark:bg-[#8b5cf6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">📊</div>
        <div className="absolute top-[40%] left-[85%] w-16 h-16 bg-[#10b981]/20 dark:bg-[#34d399]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg" style={{ animationDelay: '700ms' }}>🔄</div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#6366f1] to-[#ad63c7] dark:from-[#8b5cf6] dark:to-[#bd6cd5] transition-shadow duration-300 ${showHeaderShadow ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold text-white">Next Zen</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Gradient Background */}
      <section className="relative pt-16 pb-20 z-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#6366f1] to-[#ad63c7] dark:from-[#8b5cf6] dark:to-[#bd6cd5]">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
          
          {/* Animated decorative diagram */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" opacity="0.6" />
              <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" opacity="0.6" style={{ animationDelay: '500ms' }} />
              <line x1="50%" y1="30%" x2="70%" y2="45%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" opacity="0.6" style={{ animationDelay: '1000ms' }} />
              <line x1="70%" y1="45%" x2="90%" y2="25%" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" opacity="0.6" style={{ animationDelay: '1500ms' }} />
            </svg>
            <div className="absolute top-[20%] left-[10%] w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg">🗄️</div>
            <div className="absolute top-[40%] left-[30%] w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">⚡</div>
            <div className="absolute top-[30%] left-[50%] w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg" style={{ animationDelay: '500ms' }}>🔗</div>
            <div className="absolute top-[45%] left-[70%] w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl animate-float-delayed shadow-lg">💾</div>
            <div className="absolute top-[25%] left-[90%] w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float shadow-lg" style={{ animationDelay: '1000ms' }}>📊</div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div className="text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <span className="text-sm font-semibold text-white">
                  Professional Development Tools
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Next Zen
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
                Build faster. Visualize better. Automate smarter.
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
                Professional tools for modern developers — workflow automation and interactive system design in one powerful platform.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2</div>
                  <div className="text-sm text-white/80">Powerful Products</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">1000+</div>
                  <div className="text-sm text-white/80">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">∞</div>
                  <div className="text-sm text-white/80">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Path
          </h2>
          <p className="text-center text-[#6b7280] dark:text-[#9ca3af] mb-16 text-lg max-w-2xl mx-auto">
            Whether you&apos;re automating workflows or designing systems — we&apos;ve got you covered
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Orchestrator Card */}
            <a
              href="https://orchestrator.next-zen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-[#1f2937] rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 p-8 border border-[#e5e7eb] dark:border-[#374151] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#ad63c7] dark:from-[#8b5cf6] dark:to-[#bd6cd5] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#ad63c7] dark:from-[#8b5cf6] dark:to-[#bd6cd5] rounded-2xl flex items-center justify-center text-4xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-[#6366f1] dark:group-hover:text-[#8b5cf6] transition-colors duration-300">
                  Orchestrator
                </h2>
                <p className="text-lg text-[#6b7280] dark:text-[#9ca3af] mb-6 leading-relaxed">
                  Streamline your workflow with powerful automation and orchestration capabilities. 
                  Build complex workflows with ease and boost your team&apos;s productivity.
                </p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center text-sm text-[#6b7280] dark:text-[#d1d5db]">
                    <span className="mr-3 text-xl">⚡</span>{' '}
                    Visual workflow builder
                  </div>
                  <div className="flex items-center text-sm text-[#6b7280] dark:text-[#d1d5db]">
                    <span className="mr-3 text-xl">🔗</span>{' '}
                    Pre-built integrations
                  </div>
                  <div className="flex items-center text-sm text-[#6b7280] dark:text-[#d1d5db]">
                    <span className="mr-3 text-xl">📊</span>{' '}
                    Real-time monitoring
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-[#6366f1] dark:text-[#8b5cf6] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore Orchestrator
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Diagrammatic Card */}
            <a
              href="https://diagrammatic.next-zen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-[#1f2937] rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 p-8 border border-[#e5e7eb] dark:border-[#374151] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-2xl flex items-center justify-center text-4xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-[#10b981] transition-colors duration-300">
                  Diagrammatic
                </h2>
                <p className="text-lg text-[#6b7280] dark:text-[#9ca3af] mb-6 leading-relaxed">
                  Create beautiful diagrams and visualizations effortlessly. 
                  Perfect for system architecture, flowcharts, and technical documentation.
                </p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center text-sm text-[#6b7280] dark:text-[#d1d5db]">
                    <span className="mr-3 text-xl">🧩</span>{' '}
                    75+ diagram components
                  </div>
                  <div className="flex items-center text-sm text-[#6b7280] dark:text-[#d1d5db]">
                    <span className="mr-3 text-xl">🎯</span>{' '}
                    AI-powered assistance
                  </div>
                  <div className="flex items-center text-sm text-[#6b7280] dark:text-[#d1d5db]">
                    <span className="mr-3 text-xl">👥</span>{' '}
                    Real-time collaboration
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-[#10b981] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore Diagrammatic
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#f8f9fa]/30 to-transparent dark:via-[#111111]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-center text-[#6b7280] dark:text-[#9ca3af] mb-16 text-lg max-w-2xl mx-auto">
            Everything you need to build, automate, and visualize your projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group text-center p-8 rounded-3xl bg-white/50 dark:bg-[#1f2937]/50 backdrop-blur-sm hover:bg-white dark:hover:bg-[#1f2937] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-[#6b7280] dark:text-[#d1d5db] leading-relaxed">Optimized performance for seamless workflow</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-white/50 dark:bg-[#1f2937]/50 backdrop-blur-sm hover:bg-white dark:hover:bg-[#1f2937] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-[#6b7280] dark:text-[#d1d5db] leading-relaxed">Enterprise-grade security with data encryption</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-white/50 dark:bg-[#1f2937]/50 backdrop-blur-sm hover:bg-white dark:hover:bg-[#1f2937] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
              <p className="text-[#6b7280] dark:text-[#d1d5db] leading-relaxed">Built for teams with real-time sync</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-white/50 dark:bg-[#1f2937]/50 backdrop-blur-sm hover:bg-white dark:hover:bg-[#1f2937] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">🌓</div>
              <h3 className="text-xl font-bold mb-2">Dark Mode</h3>
              <p className="text-[#6b7280] dark:text-[#d1d5db] leading-relaxed">Beautiful themes for any preference</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-white/50 dark:bg-[#1f2937]/50 backdrop-blur-sm hover:bg-white dark:hover:bg-[#1f2937] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-2">Export & Share</h3>
              <p className="text-[#6b7280] dark:text-[#d1d5db] leading-relaxed">Save and share your work easily</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-white/50 dark:bg-[#1f2937]/50 backdrop-blur-sm hover:bg-white dark:hover:bg-[#1f2937] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-[#6b7280] dark:text-[#d1d5db] leading-relaxed">Smart suggestions and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#6366f1] to-[#ad63c7] dark:from-[#8b5cf6] dark:to-[#bd6cd5] rounded-3xl p-12 relative overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
          
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Next Zen for their workflow automation and system design needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://orchestrator.next-zen.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#6366f1] dark:text-[#8b5cf6] text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Try Orchestrator
              </a>
              <a
                href="https://diagrammatic.next-zen.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#10b981] dark:text-[#34d399] text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Try Diagrammatic
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Trusted by 1000+ developers • AI-powered • Open source
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold">Next Zen</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/satya00089/diagrammatic" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] dark:hover:text-[#8b5cf6] transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/nextzen" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] dark:hover:text-[#8b5cf6] transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <p className="text-[#6b7280] dark:text-[#d1d5db] text-sm text-center mt-6">
            © 2025 Next Zen. Built with ❤️ for developers
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
