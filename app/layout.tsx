import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Zen - Modern Development Tools",
  description: "Discover Next Zen's innovative products: Orchestrator for workflow automation and Diagrammatic for visual diagram creation. Professional tools for modern developers.",
  keywords: ["Next Zen", "Orchestrator", "Diagrammatic", "workflow automation", "diagram tools", "developer tools"],
  authors: [{ name: "Next Zen" }],
  openGraph: {
    title: "Next Zen - Modern Development Tools",
    description: "Discover Next Zen's innovative products: Orchestrator and Diagrammatic",
    type: "website",
    url: "https://next-zen.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
