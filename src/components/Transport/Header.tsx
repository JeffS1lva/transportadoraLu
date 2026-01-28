"use client";

import { Truck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollY: number;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onQuoteClick: () => void;
}

export function Header({
  scrollY,
  menuOpen,
  setMenuOpen,
  onQuoteClick,
}: HeaderProps) {
  return (
    <header
      className="fixed top-0 w-full z-40 transition-all duration-300"
      style={{
        backgroundColor: scrollY > 50 ? "rgba(15, 23, 42, 0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
      }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TransExpress
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>

        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#services"
            className="text-white hover:text-cyan-400 transition-colors relative group"
          >
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#tracking"
            className="text-white hover:text-cyan-400 transition-colors relative group"
          >
            Rastreamento
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-cyan-400 transition-colors relative group"
          >
            Depoimentos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>
          <Button
            onClick={onQuoteClick}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white"
          >
            Cotação Rápida
          </Button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <a href="#services" className="text-white hover:text-cyan-400 transition-colors">
              Serviços
            </a>
            <a href="#tracking" className="text-white hover:text-cyan-400 transition-colors">
              Rastreamento
            </a>
            <a href="#testimonials" className="text-white hover:text-cyan-400 transition-colors">
              Depoimentos
            </a>
            <Button
              onClick={onQuoteClick}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
            >
              Cotação Rápida
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
