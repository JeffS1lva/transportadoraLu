"use client";

import { BarChart, Clock, Star, TrendingUp, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function DashboardSection() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
            <BarChart className="w-4 h-4 mr-2" />
            Inteligência de Dados
          </Badge>
          <h2 className="text-5xl font-bold mb-4 text-white">Dashboard em Tempo Real</h2>
          <p className="text-xl text-slate-400">
            Visualize e analise todas as suas operações
          </p>
        </div>

        <Card className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-lg border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <BarChart className="w-6 h-6 text-cyan-400" />
              Análise de Performance
            </CardTitle>
            <CardDescription className="text-slate-400">
              Métricas em tempo real das suas entregas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-900">
                <TabsTrigger value="overview" className="text-white data-[state=active]:text-white">
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger value="deliveries" className="text-white data-[state=active]:text-white">
                  Entregas
                </TabsTrigger>
                <TabsTrigger value="analytics" className="text-white data-[state=active]:text-white">
                  Análises
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-slate-900/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Entregas Hoje</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          +12%
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-cyan-400">247</div>
                      <Progress value={78} className="h-2 mt-2" />
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Em Trânsito</span>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          Live
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-cyan-400">89</div>
                      <Progress value={45} className="h-2 mt-2" />
                    </CardContent>
                  </Card>
                </div>

                <Alert className="bg-cyan-500/10 border-cyan-500/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <AlertTitle className="text-white">Desempenho Excelente!</AlertTitle>
                  <AlertDescription className="text-slate-300">
                    Suas entregas estão 15% acima da média mensal. Continue assim!
                  </AlertDescription>
                </Alert>
              </TabsContent>

              <TabsContent value="deliveries" className="mt-6">
                <div className="space-y-3">
                  {[
                    { id: "TR-2847", status: "Entregue", time: "há 2h", progress: 100 },
                    { id: "TR-2848", status: "Em trânsito", time: "há 1h", progress: 65 },
                    { id: "TR-2849", status: "Saiu para entrega", time: "há 30min", progress: 85 },
                    { id: "TR-2850", status: "Coletado", time: "há 15min", progress: 25 },
                  ].map((delivery, idx) => (
                    <Card key={idx} className="bg-slate-900/50 border-slate-700">
                      <CardContent className="pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-mono font-bold text-cyan-400">
                              {delivery.id}
                            </div>
                            <div className="text-sm text-slate-400">{delivery.time}</div>
                          </div>
                          <Badge variant="secondary" className="bg-slate-700 text-white">
                            {delivery.status}
                          </Badge>
                        </div>
                        <Progress value={delivery.progress} className="h-1" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-6">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-slate-900/50 border-slate-700 text-center">
                    <CardContent className="pt-6">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
                      <div className="text-2xl font-bold text-green-400">+23%</div>
                      <div className="text-sm text-slate-400">Crescimento</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-900/50 border-slate-700 text-center">
                    <CardContent className="pt-6">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                      <div className="text-2xl font-bold text-blue-400">2.4h</div>
                      <div className="text-sm text-slate-400">Tempo Médio</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-900/50 border-slate-700 text-center">
                    <CardContent className="pt-6">
                      <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                      <div className="text-2xl font-bold text-yellow-400">4.9</div>
                      <div className="text-sm text-slate-400">Avaliação</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
