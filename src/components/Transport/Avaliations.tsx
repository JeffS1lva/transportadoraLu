"use client";

import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    company: "Tech Solutions",
    text: "Excelente serviço! Entregas sempre no prazo e equipe muito profissional.",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "João Santos",
    company: "Indústrias XYZ",
    text: "Parceria estratégica que otimizou toda nossa logística. Recomendo!",
    rating: 5,
    avatar: "JS",
  },
  {
    name: "Ana Costa",
    company: "Retail Plus",
    text: "Rastreamento em tempo real fez toda diferença. Transparência total!",
    rating: 5,
    avatar: "AC",
  },
];

interface TestimonialsSectionProps {
  testimonialIndex: number;
  setTestimonialIndex: (index: number) => void;
}

export function TestimonialsSection({
  testimonialIndex,
  setTestimonialIndex,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-slate-400">Histórias reais de sucesso</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  idx === testimonialIndex
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-cyan-500 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white">{testimonial.name}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {testimonial.company}
                        </CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-slate-300 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === testimonialIndex ? "bg-cyan-500 w-8" : "bg-slate-700 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { testimonials };
