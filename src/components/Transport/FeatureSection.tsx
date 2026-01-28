"use client";

import React from "react";
import { Shield, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Feature {
  icon: React.ReactElement;
  title: string;
  text: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <Shield />,
    title: "Segurança Garantida",
    text: "Seguro total e rastreamento 24/7",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Clock />,
    title: "Pontualidade",
    text: "98% de entregas no prazo",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Users />,
    title: "Suporte Dedicado",
    text: "Equipe disponível para você",
    color: "from-orange-500 to-red-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Por que nos escolher?</h2>
          <p className="text-xl text-slate-400">Diferenciais que fazem a diferença</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="group bg-slate-800/50 border-slate-700 hover:border-cyan-500 transition-all text-center hover:scale-105"
            >
              <CardHeader>
                <div
                  className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}
                >
                  {React.cloneElement(
                    feature.icon,
                    { className: "w-10 h-10 text-white" } as any   // or as React.SVGProps<SVGSVGElement>
                  )}
                </div>
                <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
