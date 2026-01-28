"use client";

import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CTASectionProps {
  onQuoteClick: () => void;
}

export function CTASection({ onQuoteClick }: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge className="mb-6 px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
          <Sparkles className="w-4 h-4 mr-2" />
          Comece Hoje Mesmo
        </Badge>
        <h2 className="text-5xl font-bold mb-6 text-white">Pronto para começar?</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Solicite uma cotação gratuita e descubra como podemos otimizar sua logística
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={onQuoteClick}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white"
          >
            Solicitar Cotação Gratuita
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
}
