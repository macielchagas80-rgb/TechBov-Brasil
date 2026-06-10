import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, Calendar, ShieldAlert, Smartphone, Database, TrendingUp, AlertTriangle, MessageSquare, Sparkles, Fingerprint } from 'lucide-react';
import { CompanyInfo } from '../types';

interface HeroProps {
  companyInfo: CompanyInfo;
}

const ANIMALS_SIMULATION = [
  {
    id: 'boi',
    name: 'Bovino (Nelore)',
    weightRange: '480 - 520 kg',
    emoji: '🐂',
    breed: 'Nelore Elite',
    gmd: '+0.85 kg/dia',
    image: 'https://images.pexels.com/photos/10263539/pexels-photo-10263539.jpeg',
    angles: ['Lateral Direita', 'Traseira', 'Superior', 'Frontal']
  },
  {
    id: 'suino',
    name: 'Suíno (Landrace)',
    weightRange: '110 - 125 kg',
    emoji: '🐖',
    breed: 'Landrace Comercial',
    gmd: '+0.92 kg/dia',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600',
    angles: ['Lateral', 'Dorsal']
  },
  {
    id: 'ovino',
    name: 'Ovino (Santa Inês)',
    weightRange: '65 - 72 kg',
    emoji: '🐑',
    breed: 'Santa Inês Pura',
    gmd: '+0.28 kg/dia',
    image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=600',
    angles: ['Perfil', 'Posterior']
  }
];

export default function Hero({ companyInfo }: HeroProps) {
  const [selectedSim, setSelectedSim] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measurementProgress, setMeasurementProgress] = useState(100);
  const [simulatedWeight, setSimulatedWeight] = useState(ANIMALS_SIMULATION[0].weightRange);

  useEffect(() => {
    if (isMeasuring) {
      const interval = setInterval(() => {
        setMeasurementProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsMeasuring(false);
            setSimulatedWeight(ANIMALS_SIMULATION[selectedSim].weightRange);
            return 100;
          }
          return prev + 5;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isMeasuring, selectedSim]);

  const triggerSimulation = (idx: number) => {
    setSelectedSim(idx);
    setIsMeasuring(true);
    setMeasurementProgress(0);
    setSimulatedWeight('Calculando...');
  };

  const whatsappGeneralText = "Olá, tenho interesse em testar a TechBov Brasil grátis por 30 dias no meu Android.";
  const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappGeneralText)}`;
  const waConsultantUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent("Olá, quero tirar dúvidas sobre a TechBov Brasil e entender como funciona a gestão pelo celular Android.")}`;

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden grid-bg"
    >
      {/* Decorative neon blobs in the background */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-neon/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-[450px] h-[450px] rounded-full bg-brand-neon/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Marketing Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6" id="hero-marketing-copy">
            
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center space-x-2 px-3 py-1.5 rounded-full glass-morphism border-brand-neon/30 scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
              <span className="text-xs font-mono font-medium tracking-wide uppercase text-gray-200">
                Pecuária Inteligente 5.0
              </span>
            </motion.div>

            {/* Glowing Big Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1]"
            >
              Gestão animal e <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-brand-neon text-glow">
                estimativa de peso
              </span> <br />
              apenas para celular Android.
            </motion.h1>

            {/* Subtitles */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl font-sans"
            >
              Com a <strong>TechBov Brasil</strong>, você acompanha seus animais, registra informações importantes e usa fotos por diferentes ângulos para gerar uma estimativa inteligente de peso 100% pelo aparelho Android.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-gray-400 border-l-2 border-brand-neon/40 pl-4 font-sans"
            >
              Mais controle para sua fazenda, mais praticidade no manejo e mais dados para tomar decisões assertivas no dia a dia.
            </motion.p>

            {/* Micro animal background indicators */}
            <div className="flex items-center space-x-3.5 pt-2 text-xs font-mono text-gray-400" id="hero-compat-indicator">
              <span className="text-white">Compatível com:</span>
              <div className="flex space-x-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <span title="Bovinos" className="cursor-default">🐂 Bois</span>
                <span className="text-white/20">|</span>
                <span title="Suínos" className="cursor-default">🐖 Porcos</span>
                <span className="text-white/20">|</span>
                <span title="Ovinos" className="cursor-default">🐑 Ovelhas</span>
                <span className="text-white/20">|</span>
                <span title="Caprinos" className="cursor-default">🐐 Cabras</span>
                <span className="text-white/20">|</span>
                <span title="Equinos" className="cursor-default">🐎 Cavalos</span>
              </div>
            </div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-cta-buttons"
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-dark bg-brand-neon rounded-xl hover:bg-brand-neon-hover transition-all duration-200 shadow-xl shadow-brand-neon/20 hover:scale-[1.03] group cursor-pointer"
              >
                Testar grátis por 30 dias
                <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
              </a>
              <a
                href={waConsultantUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#1A2533]/80 hover:bg-[#1A2533] border border-white/10 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-brand-neon" />
                Falar com Consultor
              </a>
            </motion.div>

            {/* Disclaimer notice */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start space-x-2 text-[10px] text-gray-500 max-w-lg pt-4"
              id="hero-disclaimer-panel"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-brand-neon shrink-0 mt-0.5" />
              <span>
                <strong>Aviso discreto:</strong> A estimativa de peso pode variar conforme ângulo, iluminação, distância, qualidade das imagens e características fisiológicas particulares do animal.
              </span>
            </motion.div>

          </div>

          {/* Interactive Mobile Device Simulator Mockup */}
          <div className="lg:col-span-5 relative flex justify-center" id="hero-interactive-mockup">
            
            {/* Grid Halo Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-neon/5 rounded-full border border-brand-neon/10 animate-pulse pointer-events-none" />

            {/* Main Phone Shell */}
            <div className="relative w-80 h-[640px] rounded-[52px] border-[14px] border-[#161D24] bg-[#0E1318] shadow-2xl shadow-black/80 flex flex-col overflow-hidden ring-4 ring-white/5 z-20">
              
              {/* Camera Speaker Notch */}
              <div className="absolute top-0 inset-x-0 h-7 bg-[#161D24] rounded-b-2xl flex justify-center items-center z-40">
                <div className="w-16 h-3.5 bg-black rounded-full flex justify-between px-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                  <div className="w-8 h-1 bg-gray-800 rounded-full" />
                </div>
              </div>

              {/* In App Content */}
              <div className="flex-1 pt-8 px-4 pb-4 flex flex-col justify-between select-none relative bg-[#070A0F]">
                
                {/* Simulated Header */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <div className="flex items-center space-x-1">
                    <Fingerprint className="w-4 h-4 text-brand-neon" />
                    <span className="font-display text-[10px] uppercase font-semibold text-gray-200">TechBov Android</span>
                  </div>
                  <div className="inline-flex items-center px-1.5 py-0.5 rounded bg-brand-neon/15 text-[8px] text-brand-neon font-mono font-bold tracking-widest">
                    ATIVADO
                  </div>
                </div>

                {/* Simulated Camera Window Panel */}
                <div className="relative aspect-square w-full rounded-2xl bg-black border border-white/10 overflow-hidden my-2.5 shadow-inner">
                  
                  {/* Photo of selected animal */}
                  <img 
                    src={ANIMALS_SIMULATION[selectedSim].image} 
                    alt={ANIMALS_SIMULATION[selectedSim].name}
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />

                  {/* Calibration Laser Crosshair lines */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-full h-[1px] bg-brand-neon/60 shadow-[0_0_8px_#39FF14] animate-bounce" />
                    <div className="absolute h-full w-[1px] bg-brand-neon/30" />
                    
                    {/* Corner Reticles */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-neon" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-neon" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-neon" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-neon" />
                  </div>

                  {/* Weight Estimate Banner during calculation */}
                  {isMeasuring && (
                    <div className="absolute inset-x-2 bottom-2 py-1 bg-black/80 rounded border border-brand-neon/30 text-center text-xs font-mono text-brand-neon animate-pulse">
                      Analisando Ângulos: {measurementProgress}%
                    </div>
                  )}

                  {!isMeasuring && (
                    <div className="absolute bottom-1 right-1 py-0.5 px-1.5 bg-[#121923]/90 text-[8px] rounded border border-white/10 font-mono text-gray-400">
                      Distância: 3.8m
                    </div>
                  )}
                </div>

                {/* Simulated Weight Board */}
                <div className="bg-[#121923] p-3 rounded-xl border border-white/5 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-400 font-mono">Estimativa Inteligente:</span>
                    <span className="text-[8px] bg-green-500/20 text-brand-neon px-1 rounded-sm uppercase font-mono font-black" id="sim-status">IA Ativa</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-display font-black text-white text-glow transition-all duration-300" id="simulated-weight-display">
                      {simulatedWeight}
                    </span>
                    <span className="text-[9px] text-gray-400 italic">Var: ±4.2%</span>
                  </div>
                </div>

                {/* Simulated Details Checklist */}
                <div className="flex-1 flex flex-col justify-end space-y-2 py-2">
                  <div className="grid grid-cols-2 gap-2 text-[9px]">
                    <div className="bg-white/5 p-1.5 rounded border border-white/5 flex flex-col">
                      <span className="text-gray-500">Animal ID</span>
                      <strong className="text-white font-mono mt-0.5">#TB-{selectedSim * 243 + 128}</strong>
                    </div>
                    <div className="bg-white/5 p-1.5 rounded border border-white/5 flex flex-col">
                      <span className="text-gray-500">Categoria</span>
                      <strong className="text-white mt-0.5">{ANIMALS_SIMULATION[selectedSim].name.split(' ')[0]}</strong>
                    </div>
                    <div className="bg-white/5 p-1.5 rounded border border-white/5 flex flex-col">
                      <span className="text-gray-500">Média GMD</span>
                      <strong className="text-brand-neon font-mono mt-0.5">{ANIMALS_SIMULATION[selectedSim].gmd}</strong>
                    </div>
                    <div className="bg-white/5 p-1.5 rounded border border-white/5 flex flex-col">
                      <span className="text-gray-500">Raça Sugerida</span>
                      <strong className="text-white mt-0.5">{ANIMALS_SIMULATION[selectedSim].breed.split(' ')[0]}</strong>
                    </div>
                  </div>

                  {/* Switch animal simulation selector buttons inside application mockup */}
                  <div className="pt-2">
                    <p className="text-[8px] text-gray-400 uppercase font-bold tracking-wider mb-1">Simular outro animal:</p>
                    <div className="grid grid-cols-3 gap-1">
                      {ANIMALS_SIMULATION.map((anim, idx) => (
                        <button
                          key={anim.id}
                          onClick={() => triggerSimulation(idx)}
                          className={`py-1 text-[9px] rounded-lg border font-medium transition-all ${
                            selectedSim === idx
                              ? 'bg-brand-neon/25 text-brand-neon border-brand-neon/80'
                              : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10'
                          }`}
                        >
                          {anim.emoji} {anim.id.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fake Footer Home Indicator */}
                <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-2" />

              </div>
            </div>

            {/* Floating Glassmorphic Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-12 top-10 flex items-center space-x-2 p-2.5 rounded-xl glass-morphism shadow-lg z-30 hidden sm:flex max-w-[170px]"
            >
              <div className="p-1 rounded-lg bg-brand-neon/15 border border-brand-neon/40">
                <Camera className="w-4 h-4 text-brand-neon" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white leading-tight">Estimativa por Foto</p>
                <p className="text-[8px] text-gray-400 font-mono">Diferentes ângulos</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-12 top-1/4 flex items-center space-x-2 p-2.5 rounded-xl glass-morphism shadow-lg z-30 hidden sm:flex max-w-[170px]"
            >
              <div className="p-1 rounded-lg bg-brand-neon/15 border border-brand-neon/40">
                <Database className="w-4 h-4 text-brand-neon" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white leading-tight">Gestão do rebanho</p>
                <p className="text-[8px] text-gray-400 font-mono">Controle integrado</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-14 bottom-1/4 flex items-center space-x-2 p-2.5 rounded-xl glass-morphism shadow-lg z-30 hidden sm:flex max-w-[180px]"
            >
              <div className="p-1 rounded-lg bg-brand-neon/15 border border-brand-neon/40">
                <ShieldAlert className="w-4 h-4 text-brand-neon" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white leading-tight">Vacinas e lembretes</p>
                <p className="text-[8px] text-gray-400 font-mono">Alertas automáticos</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute -right-16 bottom-[15%] flex items-center space-x-2 p-2.5 rounded-xl glass-morphism shadow-lg z-30 hidden sm:flex max-w-[185px]"
            >
              <div className="p-1 rounded-lg bg-brand-neon/15 border border-brand-neon/40">
                <TrendingUp className="w-4 h-4 text-brand-neon" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white leading-tight">Histórico do animal</p>
                <p className="text-[8px] text-gray-400 font-mono">Acompanhamento diário</p>
              </div>
            </motion.div>

            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-400 z-30 whitespace-nowrap">
              <Smartphone className="w-3.5 h-3.5 text-brand-neon" />
              <span>Gestão exclusiva para celular e telefone Android</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
