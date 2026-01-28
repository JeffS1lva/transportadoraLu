"use client";

import { Truck, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TransExpress</span>
            </div>
            <p className="text-slate-400 mb-4">Logística inteligente para o futuro</p>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                className="border-slate-700 hover:border-cyan-500 text-white bg-transparent"
              >
                <Mail className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-slate-700 hover:border-cyan-500 text-white bg-transparent"
              >
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Transporte Rodoviário
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Logística Integrada
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Entrega Expressa
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Comércio Exterior
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Sobre nós
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Carreiras
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Contato
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                0800 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                contato@transexpress.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
          <p>&copy; 2025 TransExpress. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
