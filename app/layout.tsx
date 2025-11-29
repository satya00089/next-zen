import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://next-zen.dev'),
  title: {
    default: 'Next Zen - Modern Development Tools for Workflow Automation & Visual Diagramming',
    template: '%s | Next Zen'
  },
  description: "Discover Next Zen's suite of professional development tools: Orchestrator for powerful workflow automation and Diagrammatic for interactive system design diagrams. Build faster, visualize better, and streamline your development process.",
  keywords: [
    "Next Zen",
    "Orchestrator",
    "Diagrammatic",
    "workflow automation",
    "system design diagrams",
    "ER diagrams",
    "UML diagrams",
    "developer tools",
    "software architecture",
    "diagram creator",
    "workflow builder",
    "visual development tools",
    "system design tool",
    "architecture visualization"
  ],
  authors: [{ name: "Next Zen", url: "https://next-zen.dev" }],
  creator: "Next Zen",
  publisher: "Next Zen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://next-zen.dev",
    siteName: "Next Zen",
    title: "Next Zen - Modern Development Tools for Workflow Automation & Visual Diagramming",
    description: "Professional tools for modern developers. Orchestrator for workflow automation and Diagrammatic for system design visualization.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next Zen - Development Tools Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Zen - Modern Development Tools",
    description: "Professional workflow automation and visual diagramming tools for developers.",
    images: ["/twitter-image.png"],
    creator: "@nextzen",
  },
  alternates: {
    canonical: "https://next-zen.dev",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Next Zen",
              "url": "https://next-zen.dev",
              "logo": "https://next-zen.dev/logo.png",
              "description": "Modern development tools for workflow automation and visual diagramming",
              "foundingDate": "2024",
              "sameAs": [
                "https://github.com/nextzen",
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Next Zen Products",
                "itemListElement": [
                  {
                    "@type": "Product",
                    "name": "Orchestrator",
                    "description": "Powerful workflow automation and orchestration platform",
                    "url": "https://orchestrator.next-zen.dev",
                  },
                  {
                    "@type": "Product",
                    "name": "Diagrammatic",
                    "description": "Interactive system design and diagram creation tool",
                    "url": "https://diagrammatic.next-zen.dev",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
