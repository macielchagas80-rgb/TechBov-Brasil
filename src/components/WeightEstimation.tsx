import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Camera, Database, BarChart4, ChevronRight, CheckCircle2, AlertOctagon, HelpCircle, Sparkles } from 'lucide-react';
import { CompanyInfo } from '../types';

interface WeightEstimationProps {
  companyInfo: CompanyInfo;
}

const STEPS_DATA = [
  {
    number: "01",
    title: "Escolha o animal",
    description: "Selecione um animal já cadastrado em seu sistema TechBov Brasil ou cadastre um novo exemplar na mesma hora definindo lote e espécie.",
    icon: Database,
    subText: "Cadastre em menos de 20 segundos.",
    badge: "Cadastro Integrado",
    visual: "sim-step-1"
  },
  {
    number: "02",
    title: "Tire fotos guiadas",
    description: "Nosso motor de calibragem orienta você a posicionar a câmera e tirar fotos em ângulos limpos (lateral, superior e posterior) para identificar proporções.",
    icon: Camera,
    subText: "Sobreposição inteligente de guias visuais.",
    badge: "Câmera Autocorretiva",
    visual: "sim-step-2"
  },
  {
    number: "03",
    title: "Informe dados complementares",
    description: "Adicione informações simples como espécie específica, raça, porte geral do animal, e altura aproximada ou condições do terreno para calibração fina.",
    icon: Target,
    subText: "Ajuste fino de características fisiológicas.",
    badge: "Fórmula de Refinamento",
    visual: "sim-step-3"
  },
  {
    number: "04",
    title: "Receba uma estimativa",
    description: "Nossa tecnologia correlaciona a escala visual fotográfica e as métricas para apresentar em segundos uma estimativa de peso individual de apoio.",
    icon: BarChart4,
    subText: "Sincronização imediata em seu painel.",
    badge: "Estimativa Zootécnica",
    visual: "sim-step-4"
  }
];

export default function WeightEstimation({ companyInfo }: WeightEstimationProps) {
  const [activeStep, setActiveStep] = useState(0);

  const whatsappGeneralText = "Olá, tenho interesse em testar a TechBov Brasil grátis por 30 dias no meu Android.";
  const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappGeneralText)}`;

  return (
    <section 
      id="estimativa-foto" 
      className="py-20 sm:py-24 bg-[#05070a] relative overflow-hidden grid-bg"
    >
      {/* Background Neon Glow Element */}
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-brand-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4" id="estimativa-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <Camera className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon">Algoritmo Visual</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Estime o peso dos animais usando <span className="text-brand-neon text-glow font-display">fotos pelo celular Android</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
            O recurso inovador de estimativa por imagem permite que você registre fotos de diferentes ângulos para auxiliar no cálculo de uma estimativa de peso ágil e sem estressar a criação.
          </p>
        </div>

        {/* Visual Columns: Steps vs Live Mockup Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="estimativa-columns-grid">
          
          {/* Column 1: Interactive Flow Menu buttons (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4" id="estimativa-flow-selectors">
            {STEPS_DATA.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                    isActive
                      ? 'bg-brand-slate border-brand-neon/40 shadow-lg shadow-brand-neon/5'
                      : 'bg-[#121923]/40 border-white/5 hover:border-white/10 hover:bg-[#121923]/60'
                  }`}
                  id={`estimativa-step-row-${idx}`}
                >
                  {/* Number bubble */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-all ${
                    isActive 
                      ? 'bg-brand-neon text-brand-dark' 
                      : 'bg-white/5 text-gray-400'
                  }`}>
                    {step.number}
                  </div>

                  {/* Descriptions */}
                  <div className="flex-grow space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className={`text-base sm:text-lg font-display font-bold transition-all ${
                        isActive ? 'text-brand-neon' : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      {isActive && (
                        <span className="text-[10px] bg-brand-neon/15 text-brand-neon px-2 py-0.5 rounded-full font-mono uppercase font-black">
                          {step.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-all ${
                      isActive ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>

                    {isActive && (
                      <p className="text-xs text-brand-neon font-sans flex items-center space-x-1 pt-1 opacity-90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>{step.subText}</span>
                      </p>
                    )}
                  </div>

                  {/* Arrow Indicator */}
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'text-brand-neon translate-x-1' : 'text-gray-600'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Column 2: Simulated Step Screen Graphics Mockup (5 Cols) */}
          <div className="lg:col-span-5" id="estimativa-mockup-graphics">
            <div className="relative p-6 rounded-3xl bg-[#0F151C] border border-white/10 shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* Internal abstract visual corresponding to active step */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex-grow flex flex-col justify-between space-y-6"
                >
                  {/* Visual Header */}
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
                      <span>Interface Android - Passo {activeStep + 1}</span>
                    </span>
                    <span className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded font-mono">
                      Offline OK
                    </span>
                  </div>

                  {/* Step Specific illustrative graphics rendering */}
                  {activeStep === 0 && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Últimos bovinos de corte editados:</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-brand-neon/30">
                            <span className="text-xs font-mono text-white">🐂 Nelore ID #3812</span>
                            <span className="text-[10px] text-brand-neon font-mono">Fase: Engorda</span>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5">
                            <span className="text-xs font-mono text-white">🐂 Nelore ID #3815</span>
                            <span className="text-[10px] text-gray-400 font-mono font-medium">Fase: Cria</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center p-4">
                        <div className="inline-flex h-9 items-center justify-center bg-brand-neon/20 hover:bg-brand-neon/30 rounded-xl px-4 text-xs font-bold text-brand-neon border border-brand-neon/50">
                          + Cadastrar Novo Animal
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-4 relative">
                      <div className="relative aspect-video w-full rounded-xl border-2 border-brand-neon bg-black flex items-center justify-center overflow-hidden">
                        {/* Simulated livestock silhouette overlay */}
                        <img 
                          src="https://images.pexels.com/photos/2191432/pexels-photo-2191432.jpeg?auto=compress&cs=tinysrgb&w=800" 
                          alt="Bovino no pasto para estimativa" 
                          className="w-full h-full object-cover opacity-60"
                          referrerPolicy="no-referrer"
                        />
                        {/* Guideline laser grid overlay */}
                        <div className="absolute inset-x-4 inset-y-4 border border-dashed border-brand-neon/60 rounded flex items-center justify-center">
                          <span className="text-[9px] text-brand-neon font-mono text-glow animate-pulse">ALINHAMENTO ENCONTRADO</span>
                        </div>
                        {/* Angle checkbox overlays */}
                        <div className="absolute top-2 left-2 flex flex-col space-y-1">
                          <span className="text-[8px] bg-brand-neon text-black font-bold uppercase rounded px-1 tracking-wider">✓ Lateral</span>
                          <span className="text-[8px] bg-brand-neon text-black font-bold uppercase rounded px-1 tracking-wider">✓ Traseira</span>
                          <span className="text-[8px] bg-white/20 text-white font-bold uppercase rounded px-1 tracking-wider">● Superior</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 text-center font-mono">Nosso sistema ajuda você a ajustar a câmera perfeitamente no curral.</p>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400 font-sans">Cadastrando dados corporais de calibração:</p>
                      <div className="space-y-2 text-[11px] font-mono text-gray-200">
                        <div className="flex justify-between py-1.5 border-b border-white/5">
                          <span>Raça do Animal:</span>
                          <span className="text-brand-neon">Nelore Puro</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/5">
                          <span>Grupo / Lote:</span>
                          <span className="text-white">Confinamento Lote B</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/5">
                          <span>Altura da Garupa:</span>
                          <span className="text-white">~ 1.45 metros</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/5">
                          <span>Sexo Fisiológico:</span>
                          <span className="text-white">Macho</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-brand-neon/10 border-2 border-brand-neon flex items-center justify-center mx-auto box-glow shadow-brand-neon/30">
                        <CheckCircle2 className="w-8 h-8 text-brand-neon" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase text-gray-400 font-mono tracking-widest">Resultado Calculado</p>
                        <p className="text-3xl font-display font-black text-white text-glow">512,50 kg</p>
                        <p className="text-[10px] text-brand-neon font-mono font-bold uppercase leading-relaxed">Estimativa de Apoio Concluída</p>
                      </div>
                      <p className="text-[9px] text-gray-500 italic max-w-xs mx-auto">
                        A estimativa visual de apoio foi salva no histórico do lote Nelore Ativos.
                      </p>
                    </div>
                  )}

                  {/* Common indicator bottom bar in mockup */}
                  <div className="bg-[#121923] p-3 rounded-xl border border-white/5 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gray-400">Status do Processamento:</span>
                    <span className="text-brand-neon font-bold flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-ping mr-1" />
                      Apoio Ativo
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Dynamic Transparency Disclaimer Card - Mandatory for Google Ads / Legal */}
        <div id="estimativa-transparecia-card" className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#121923]/60 border border-brand-neon/20 hover:border-brand-neon/40 transition-colors duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 max-w-3xl">
            <h4 className="font-display font-bold text-lg text-white flex items-center space-x-2">
              <AlertOctagon className="w-5 h-5 text-brand-neon mr-2" />
              <span>Transparência & Uso Responsável</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              A TechBov Brasil fornece estimativas tecnológicas concebidas para apoiar e otimizar o manejo cotidiano. O peso apresentado baseia-se em análise de proporção visual e dados zootécnicos. Por isso, <strong>o resultado pode apresentar variação natural e não substitui pesagem oficial</strong> em balança mecânica ou eletrônica de precisão quando esta for exigida por órgãos legais, fiscais, comerciais, sanitários, securitários ou contratuais.
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center px-6 py-3.5 text-xs font-bold text-brand-dark bg-brand-neon hover:bg-brand-neon-hover rounded-xl transition-all duration-200 box-glow w-full md:w-auto hover:scale-[1.02]"
          >
            Quero testar essa tecnologia
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
