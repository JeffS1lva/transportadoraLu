"use client";

import React from "react";
import {
  Truck,
  Package,
  ChevronDown,
  ArrowRight,
  Star,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Stat {
  value: string;
  label: string;
  icon: React.ReactElement;
  trend: string;
}

interface HeroSectionProps {
  onQuoteClick: () => void;
}

const stats: Stat[] = [
  { value: "15+", label: "Anos de Experiência", icon: <TrendingUp />, trend: "+12%" },
  { value: "500+", label: "Veículos na Frota", icon: <Truck />, trend: "+25%" },
  { value: "10k+", label: "Entregas Mensais", icon: <Package />, trend: "+18%" },
  { value: "99.8%", label: "Taxa de Satisfação", icon: <Star />, trend: "+2%" },
];

export function HeroSection({ onQuoteClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Tecnologia de ponta em logística
          </Badge>

          <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white">
            Logística que{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Move o Brasil
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 mb-8">
            Soluções inteligentes de transporte com IA e rastreamento em tempo real
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={onQuoteClick}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
            >
              <ChevronDown className="w-5 h-5 mr-2 animate-bounce" />
              Explorar Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, idx) => (
              <Card
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-cyan-500 transition-all hover:scale-105 cursor-pointer"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    {React.cloneElement(
                      stat.icon as React.ReactElement<{ className?: string }>,
                      { className: "w-8 h-8" }
                    )}
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-400 border-green-500/30"
                    >
                      {stat.trend}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
}
