"use client";

import React from "react";
import { Truck, Package, Zap, Globe, ChevronRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "Transporte Rodoviário",
    description: "Frota moderna e rastreada para entregas em todo território nacional",
    features: ["Rastreamento em tempo real", "Frota refrigerada", "Cargas especiais"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    title: "Logística Integrada",
    description: "Soluções completas de armazenagem e distribuição",
    features: ["Armazéns estratégicos", "Cross-docking", "Gestão de estoque"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Entrega Expressa",
    description: "Urgência e agilidade para suas entregas prioritárias",
    features: ["Same day delivery", "Entregas programadas", "Coleta rápida"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Comércio Exterior",
    description: "Importação e exportação com expertise internacional",
    features: ["Desembaraço aduaneiro", "Multimodal", "Seguro internacional"],
    color: "from-green-500 to-emerald-500",
  },
];

interface ServicesSectionProps {
  activeService: number;
  setActiveService: (index: number) => void;
}

export function ServicesSection({ activeService, setActiveService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Nossos Serviços</h2>
          <p className="text-xl text-slate-400">
            Soluções completas para todas as suas necessidades logísticas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className={`group bg-slate-800/50 backdrop-blur-lg border transition-all duration-500 cursor-pointer hover:scale-105 relative ${
                activeService === idx ? "border-cyan-500" : "border-slate-700"
              }`}
              onMouseEnter={() => setActiveService(idx)}
            >
              <CardHeader>
                <div
                  className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-slate-400">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center text-slate-300 group-hover:translate-x-2 transition-transform"
                      style={{ transitionDelay: `${fIdx * 50}ms` }}
                    >
                      <div className="bg-cyan-500/20 p-1 rounded-full mr-3">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-cyan-400 hover:text-cyan-300 group-hover:gap-2 transition-all"
                >
                  Saiba mais
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>

              {activeService === idx && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-0"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
