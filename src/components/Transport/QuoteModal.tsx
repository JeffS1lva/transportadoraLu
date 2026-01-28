"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [quoteStep, setQuoteStep] = useState(1);
  const [formData, setFormData] = useState({
    origem: "",
    destino: "",
    peso: "",
    tipo: "",
    nome: "",
    email: "",
    telefone: "",
  });

  const handleSubmit = () => {
    alert("Cotação enviada com sucesso! Entraremos em contato em breve.");
    onOpenChange(false);
    setQuoteStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[500px] bg-slate-900 border-slate-700"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Cotação Inteligente
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Preencha os dados para receber sua cotação personalizada
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <Progress value={(quoteStep / 3) * 100} className="h-2" />
          <div className="text-xs text-slate-400 text-right">Etapa {quoteStep} de 3</div>
        </div>

        <Tabs value={`step${quoteStep}`} className="w-full">
          <TabsContent value="step1" className="space-y-4 mt-0">
            <div className="space-y-2">
              <Label htmlFor="origem" className="text-white">
                Origem
              </Label>
              <Input
                id="origem"
                placeholder="CEP ou Cidade"
                value={formData.origem}
                onChange={(e) => setFormData({ ...formData, origem: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destino" className="text-white">
                Destino
              </Label>
              <Input
                id="destino"
                placeholder="CEP ou Cidade"
                value={formData.destino}
                onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
          </TabsContent>

          <TabsContent value="step2" className="space-y-4 mt-0">
            <div className="space-y-2">
              <Label htmlFor="peso" className="text-white">
                Peso aproximado (kg)
              </Label>
              <Input
                id="peso"
                type="number"
                placeholder="Ex: 50"
                value={formData.peso}
                onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo" className="text-white">
                Tipo de carga
              </Label>
              <Select
                value={formData.tipo}
                onValueChange={(value) => setFormData({ ...formData, tipo: value })}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="geral" className="text-white">
                    Carga Geral
                  </SelectItem>
                  <SelectItem value="refrigerada" className="text-white">
                    Refrigerada
                  </SelectItem>
                  <SelectItem value="perigosa" className="text-white">
                    Perigosa
                  </SelectItem>
                  <SelectItem value="fragil" className="text-white">
                    Frágil
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="step3" className="space-y-4 mt-0">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-white">
                Nome
              </Label>
              <Input
                id="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-white">
                Telefone
              </Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3">
          {quoteStep > 1 && (
            <Button
              variant="outline"
              onClick={() => setQuoteStep(quoteStep - 1)}
              className="flex-1 border-slate-700 text-white hover:bg-slate-800"
            >
              Voltar
            </Button>
          )}
          <Button
            onClick={quoteStep === 3 ? handleSubmit : () => setQuoteStep(quoteStep + 1)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white"
          >
            {quoteStep === 3 ? "Enviar Cotação" : "Próximo"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
