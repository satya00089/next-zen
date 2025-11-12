export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Next Zen
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Modern tools for modern developers. Build, automate, and visualize with confidence.
          </p>
        </div>

        {/* Products Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Orchestrator Card */}
          <a
            href="https://orchestrator.next-zen.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-zinc-200 dark:border-zinc-700 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                Orchestrator
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Streamline your workflow with powerful automation and orchestration capabilities. 
                Build complex workflows with ease and boost your team&apos;s productivity.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                Explore Orchestrator
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="group relative bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-zinc-200 dark:border-zinc-700 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                Diagrammatic
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Create beautiful diagrams and visualizations effortlessly. 
                Perfect for system architecture, flowcharts, and technical documentation.
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                Explore Diagrammatic
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-zinc-600 dark:text-zinc-400">
          <p className="mb-2">© 2024 Next Zen. All rights reserved.</p>
          <p className="text-sm">Building the future of development tools.</p>
        </footer>
      </main>
    </div>
  );
}
