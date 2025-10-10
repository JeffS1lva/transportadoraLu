import React, { useState, useEffect } from 'react';
import { Truck, Package, MapPin, Clock, Shield, Zap, Globe, Users, ChevronRight, Menu, X, ArrowRight, Check, Star, TrendingUp, Phone, Mail, ChevronDown, Search, BarChart, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

export const TransportPlatform = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trackingCode, setTrackingCode] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteStep, setQuoteStep] = useState(1);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  
  interface TrackingResult {
    code: string;
    status: string;
    location: string;
    progress: number;
    estimatedDelivery: string;
    timeline: Array<{
      status: string;
      date: string;
      completed: boolean;
    }>;
  }
  
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);

  const phrases = ["Move o Brasil", "Conecta Empresas", "Entrega Resultados", "Impulsiona Negócios"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Efeito de digitação
  useEffect(() => {
    let charIndex = 0;
    const currentPhrase = phrases[phraseIndex];
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const erasingInterval = setInterval(() => {
            if (charIndex > 0) {
              setTypedText(currentPhrase.slice(0, charIndex));
              charIndex--;
            } else {
              clearInterval(erasingInterval);
              setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [phraseIndex]);

  // Cursor piscante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transporte Rodoviário",
      description: "Frota moderna e rastreada para entregas em todo território nacional",
      features: ["Rastreamento em tempo real", "Frota refrigerada", "Cargas especiais"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Logística Integrada",
      description: "Soluções completas de armazenagem e distribuição",
      features: ["Armazéns estratégicos", "Cross-docking", "Gestão de estoque"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrega Expressa",
      description: "Urgência e agilidade para suas entregas prioritárias",
      features: ["Same day delivery", "Entregas programadas", "Coleta rápida"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Comércio Exterior",
      description: "Importação e exportação com expertise internacional",
      features: ["Desembaraço aduaneiro", "Multimodal", "Seguro internacional"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    { name: "Maria Silva", company: "Tech Solutions", text: "Excelente serviço! Entregas sempre no prazo e equipe muito profissional.", rating: 5, avatar: "MS" },
    { name: "João Santos", company: "Indústrias XYZ", text: "Parceria estratégica que otimizou toda nossa logística. Recomendo!", rating: 5, avatar: "JS" },
    { name: "Ana Costa", company: "Retail Plus", text: "Rastreamento em tempo real fez toda diferença. Transparência total!", rating: 5, avatar: "AC" }
  ];

  const stats = [
    { value: "15+", label: "Anos de Experiência", icon: <TrendingUp />, trend: "+12%" },
    { value: "500+", label: "Veículos na Frota", icon: <Truck />, trend: "+25%" },
    { value: "10k+", label: "Entregas Mensais", icon: <Package />, trend: "+18%" },
    { value: "99.8%", label: "Taxa de Satisfação", icon: <Star />, trend: "+2%" }
  ];

  const handleTracking = () => {
    if (trackingCode.trim()) {
      setIsTracking(true);
      setTimeout(() => {
        setIsTracking(false);
        setTrackingResult({
          code: trackingCode,
          status: "Em Trânsito",
          location: "São Paulo, SP",
          progress: 65,
          estimatedDelivery: "2 dias",
          timeline: [
            { status: "Coletado", date: "08/10/2025 14:30", completed: true },
            { status: "Em trânsito", date: "09/10/2025 09:15", completed: true },
            { status: "Centro de distribuição", date: "10/10/2025 07:00", completed: true },
            { status: "Saiu para entrega", date: "Previsto", completed: false },
            { status: "Entregue", date: "Previsto", completed: false }
          ]
        });
      }, 2000);
    }
  };

  const QuoteModal = () => {
    const [formData, setFormData] = useState({
      origem: '', destino: '', peso: '', tipo: '', nome: '', email: '', telefone: ''
    });

    const handleSubmit = () => {
      setShowQuoteModal(false);
      setQuoteStep(1);
    };

    return (
      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-700 text-white">
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
            <TabsContent value="step1" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="origem">Origem</Label>
                <Input
                  id="origem"
                  placeholder="CEP ou Cidade"
                  value={formData.origem}
                  onChange={(e) => setFormData({...formData, origem: e.target.value})}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destino">Destino</Label>
                <Input
                  id="destino"
                  placeholder="CEP ou Cidade"
                  value={formData.destino}
                  onChange={(e) => setFormData({...formData, destino: e.target.value})}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
            </TabsContent>

            <TabsContent value="step2" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="peso">Peso aproximado (kg)</Label>
                <Input
                  id="peso"
                  type="number"
                  placeholder="Ex: 50"
                  value={formData.peso}
                  onChange={(e) => setFormData({...formData, peso: e.target.value})}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de carga</Label>
                <Select value={formData.tipo} onValueChange={(value) => setFormData({...formData, tipo: value})}>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="geral">Carga Geral</SelectItem>
                    <SelectItem value="refrigerada">Refrigerada</SelectItem>
                    <SelectItem value="perigosa">Perigosa</SelectItem>
                    <SelectItem value="fragil">Frágil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="step3" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex gap-3">
            {quoteStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setQuoteStep(quoteStep - 1)}
                className="flex-1 border-slate-700"
              >
                Voltar
              </Button>
            )}
            <Button
              onClick={quoteStep === 3 ? handleSubmit : () => setQuoteStep(quoteStep + 1)}
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
            >
              {quoteStep === 3 ? 'Enviar Cotação' : 'Próximo'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Cursor personalizado */}
      <div
        className="hidden lg:block fixed w-8 h-8 rounded-full border-2 border-cyan-500 pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-40 transition-all duration-300" style={{
        backgroundColor: scrollY > 50 ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
      }}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TransExpress
            </span>
          </div>
          
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="hover:text-cyan-400 transition-colors relative group">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#tracking" className="hover:text-cyan-400 transition-colors relative group">
              Rastreamento
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors relative group">
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
            <Button
              onClick={() => setShowQuoteModal(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
            >
              Cotação Rápida
            </Button>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a href="#services" className="hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#tracking" className="hover:text-cyan-400 transition-colors">Rastreamento</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Depoimentos</a>
              <Button onClick={() => setShowQuoteModal(true)} className="bg-gradient-to-r from-blue-500 to-cyan-500">
                Cotação Rápida
              </Button>
            </div>
          </div>
        )}
      </header>

      <QuoteModal />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Tecnologia de ponta em logística
            </Badge>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              Logística que{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {typedText}
                <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8">
              Soluções inteligentes de transporte com IA e rastreamento em tempo real
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => setShowQuoteModal(true)}
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                <ChevronDown className="w-5 h-5 mr-2 animate-bounce" />
                Explorar Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, idx) => (
                <Card key={idx} className="group bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-cyan-500 transition-all hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                        {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
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

      {/* Rastreamento */}
      <section id="tracking" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-cyan-500 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">Rastreamento em Tempo Real</CardTitle>
                    <CardDescription>Acompanhe sua carga com precisão GPS</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <Input
                    placeholder="Digite o código de rastreamento"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="flex-1 bg-slate-800 border-slate-700"
                    onKeyPress={(e) => e.key === 'Enter' && handleTracking()}
                  />
                  <Button
                    onClick={handleTracking}
                    disabled={isTracking}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500"
                  >
                    {isTracking ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Buscando...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Rastrear
                      </>
                    )}
                  </Button>
                </div>

                {trackingResult && (
                  <Alert className="bg-slate-800/50 border-cyan-500">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <AlertTitle>Pedido Rastreado</AlertTitle>
                    <AlertDescription>
                      <div className="mt-4 space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-white">Status: {trackingResult.status}</div>
                            <div className="text-sm">Localização: {trackingResult.location}</div>
                          </div>
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                            {trackingResult.estimatedDelivery}
                          </Badge>
                        </div>
                        
                        <Progress value={trackingResult.progress} className="h-2" />
                        
                        <div className="space-y-3">
                          {trackingResult.timeline.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.completed ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                                {item.completed && <Check className="w-4 h-4" />}
                              </div>
                              <div className="flex-1">
                                <div className={`font-medium ${item.completed ? 'text-white' : 'text-slate-400'}`}>
                                  {item.status}
                                </div>
                                <div className="text-sm text-slate-500">{item.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6 text-center">
                      <Clock className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                      <div className="text-sm text-slate-400">Atualização</div>
                      <div className="font-bold">Tempo real</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6 text-center">
                      <Shield className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                      <div className="text-sm text-slate-400">Segurança</div>
                      <div className="font-bold">100% Seguro</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6 text-center">
                      <Zap className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                      <div className="text-sm text-slate-400">Notificações</div>
                      <div className="font-bold">Instantâneas</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-slate-400">Soluções completas para todas as suas necessidades logísticas</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className={`group bg-slate-800/50 backdrop-blur-lg border transition-all duration-500 cursor-pointer hover:scale-105 ${
                  activeService === idx ? 'border-cyan-500' : 'border-slate-700'
                }`}
                onMouseEnter={() => setActiveService(idx)}
              >
                <CardHeader>
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-slate-300 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: `${fIdx * 50}ms` }}>
                        <div className="bg-cyan-500/20 p-1 rounded-full mr-3">
                          <Check className="w-4 h-4 text-cyan-400" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 group-hover:gap-2 transition-all">
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

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-xl text-slate-400">Histórias reais de sucesso</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    idx === testimonialIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-cyan-500 transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <CardTitle>{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.company}</CardDescription>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-slate-300 italic">"{testimonial.text}"</p>
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
                      idx === testimonialIndex ? 'bg-cyan-500 w-8' : 'bg-slate-700 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Por que nos escolher?</h2>
            <p className="text-xl text-slate-400">Diferenciais que fazem a diferença</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield />, title: "Segurança Garantida", text: "Seguro total e rastreamento 24/7", color: "from-blue-500 to-cyan-500" },
              { icon: <Clock />, title: "Pontualidade", text: "98% de entregas no prazo", color: "from-purple-500 to-pink-500" },
              { icon: <Users />, title: "Suporte Dedicado", text: "Equipe disponível para você", color: "from-orange-500 to-red-500" }
            ].map((feature, idx) => (
              <Card key={idx} className="group bg-slate-800/50 border-slate-700 hover:border-cyan-500 transition-all text-center hover:scale-105">
                <CardHeader>
                  <div className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    {React.cloneElement(feature.icon, { className: "w-10 h-10" })}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
              <BarChart className="w-4 h-4 mr-2" />
              Inteligência de Dados
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Dashboard em Tempo Real</h2>
            <p className="text-xl text-slate-400">Visualize e analise todas as suas operações</p>
          </div>

          <Card className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-lg border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="w-6 h-6 text-cyan-400" />
                Análise de Performance
              </CardTitle>
              <CardDescription>Métricas em tempo real das suas entregas</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-900">
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                  <TabsTrigger value="deliveries">Entregas</TabsTrigger>
                  <TabsTrigger value="analytics">Análises</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-slate-900/50 border-slate-700">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Entregas Hoje</span>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">+12%</Badge>
                        </div>
                        <div className="text-3xl font-bold text-cyan-400">247</div>
                        <Progress value={78} className="h-2 mt-2" />
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-900/50 border-slate-700">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Em Trânsito</span>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Live</Badge>
                        </div>
                        <div className="text-3xl font-bold text-cyan-400">89</div>
                        <Progress value={45} className="h-2 mt-2" />
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Alert className="bg-cyan-500/10 border-cyan-500/30">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <AlertTitle>Desempenho Excelente!</AlertTitle>
                    <AlertDescription>
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
                      { id: "TR-2850", status: "Coletado", time: "há 15min", progress: 25 }
                    ].map((delivery, idx) => (
                      <Card key={idx} className="bg-slate-900/50 border-slate-700">
                        <CardContent className="pt-4">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-mono font-bold text-cyan-400">{delivery.id}</div>
                              <div className="text-sm text-slate-400">{delivery.time}</div>
                            </div>
                            <Badge variant="secondary" className="bg-slate-700">
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge className="mb-6 px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
            <Sparkles className="w-4 h-4 mr-2" />
            Comece Hoje Mesmo
          </Badge>
          <h2 className="text-5xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Solicite uma cotação gratuita e descubra como podemos otimizar sua logística
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowQuoteModal(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
            >
              Solicitar Cotação Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
              <Phone className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">TransExpress</span>
              </div>
              <p className="text-slate-400 mb-4">Logística inteligente para o futuro</p>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="border-slate-700 hover:border-cyan-500">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-slate-700 hover:border-cyan-500">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Transporte Rodoviário</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Logística Integrada</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Entrega Expressa</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Comércio Exterior</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Sobre nós</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Carreiras</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contato</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
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
              <a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

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
};

export default TransportPlatform;