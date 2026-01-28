"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Transport/Header";
import { HeroSection } from "@/components/Transport/HeroSection";
import { ServicesSection } from "@/components/Transport/ServicesSection";
import { TestimonialsSection, testimonials } from "@/components/Transport/Avaliations";
import { FeaturesSection } from "@/components/Transport/FeatureSection";
import { DashboardSection } from "@/components/Transport/DashboardSection";
import { CTASection } from "@/components/Transport/Orcamento";
import { Footer } from "@/components/Transport/Footer";
import { QuoteModal } from "@/components/Transport/QuoteModal";
import { CustomCursor } from "@/components/Transport/CustomCursor";

export function TransportPlatform() {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <CustomCursor mousePosition={mousePosition} />

      <Header
        scrollY={scrollY}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onQuoteClick={() => setShowQuoteModal(true)}
      />

      <QuoteModal open={showQuoteModal} onOpenChange={setShowQuoteModal} />

      <HeroSection onQuoteClick={() => setShowQuoteModal(true)} />

      <section id="tracking" className="relative">
        <div className="container mx-auto px-6">
          {/* Tracking section placeholder - can be expanded */}
        </div>
      </section>

      <ServicesSection
        activeService={activeService}
        setActiveService={setActiveService}
      />

      <TestimonialsSection
        testimonialIndex={testimonialIndex}
        setTestimonialIndex={setTestimonialIndex}
      />

      <FeaturesSection />

      <DashboardSection />

      <CTASection onQuoteClick={() => setShowQuoteModal(true)} />

      <Footer />

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}

export default TransportPlatform;
