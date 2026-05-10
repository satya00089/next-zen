"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductScroll from "@/components/ProductScroll";
import BentoGrid from "@/components/BentoGrid";
import DevEcosystem from "@/components/DevEcosystem";
import Metrics from "@/components/Metrics";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground relative">
        <Navbar />
        <Hero />
        <ProductScroll />
        <BentoGrid />
        <DevEcosystem />
        <Metrics />
        <CTASection />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
