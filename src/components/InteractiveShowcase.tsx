import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Camera, LayoutGrid, BarChart3, ShieldCheck, HeartPulse, Sparkles, Sliders, Calendar } from 'lucide-react';

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<'field' | 'tech' | 'dashboard'>('tech');

  const showCases = {
    field: {
      title: "Produtor usando celular no campo",
      description: "Acesse e preencha dados zootécnicos diretamente no piquete ou mangueiro, inclusive estando off-line. Simplicidade pura adaptada às mãos sob sol intenso.",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=700",
      features: [
        "Sincronização assimétrica na nuvem",
        "Registro veloz de manejos e vacinações",
        "Controles simples por polegar com letra grande",
        "Modo de uso noturno e alto contraste para luz solar"
      ],
      badge: "SaaS Mobilidade"
    },
    tech: {
      title: "Boi no pasto com calibração digital de peso",
      description: "O sensor fotométrico lê os perímetros do boi por múltiplos overlays, relacionando proporcionalidade zootécnica ao peso real em tempo recorde.",
      image: "https://images.pexels.com/photos/2191432/pexels-photo-2191432.jpeg",
      features: [
        "Estimação com menos estresse no rebanho",
        "Diferentes ângulos fotográficos automáticos",
        "Linhas virtuais digitais reguladoras",
        "Relatórios de calibragem imediata"
      ],
      badge: "Inovação IA Agro"
    },
    dashboard: {
      title: "Dashboard Agro de Controle Central",
      description: "Tenha a visão analítica completa da sua fazenda. Totalize animais ativos, mortes, nascimentos, tratamentos veterinários pendentes e metas de arrobas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700",
      features: [
        "Gráficos interativos de ganho de peso (GMD)",
        "Notificações de datas críticas de vacinação obrigatória",
        "Histórico de movimentações de piquetes",
        "Exportação facilitada de relatórios PDF/Excel"
      ],
      badge: "Controle & Relatórios"
    }
  };

  return (
    <section 
      id="como-funciona-pratica" 
      className="py-20 sm:py-24 bg-[#05070a] relative overflow-hidden"
    >
      {/* Absolute blur background blob */}
      <div className="absolute top-1/2 left-1/10 w-96 h-96 rounded-full bg-brand-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header info */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="showcase-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <LayoutGrid className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon font-display">Showcase Prático</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Tecnologia, campo e gestão em <span className="text-brand-neon text-glow font-display">um só lugar</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Veja na prática como o aplicativo TechBov Brasil une as necessidades do produtor e do zootecnista diretamente na palma da mão em aparelhos Android.
          </p>
        </div>

        {/* Custom Tab Selector Menu Header */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12" id="showcase-tabs-links">
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-5 py-3 rounded-2xl flex items-center space-x-2 text-xs font-semibold cursor-pointer border transition-all ${
              activeTab === 'tech'
                ? 'bg-brand-neon text-brand-dark border-brand-neon box-glow'
                : 'bg-white/5 text-gray-300 border-white/5 hover:bg-white/10'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Estimativa Inteligente</span>
          </button>
          <button
            onClick={() => setActiveTab('field')}
            className={`px-5 py-3 rounded-2xl flex items-center space-x-2 text-xs font-semibold cursor-pointer border transition-all ${
              activeTab === 'field'
                ? 'bg-brand-neon text-brand-dark border-brand-neon box-glow'
                : 'bg-white/5 text-gray-300 border-white/5 hover:bg-white/10'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Manejo Móvel de Campo</span>
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-5 py-3 rounded-2xl flex items-center space-x-2 text-xs font-semibold cursor-pointer border transition-all ${
              activeTab === 'dashboard'
                ? 'bg-brand-neon text-brand-dark border-brand-neon box-glow'
                : 'bg-white/5 text-gray-300 border-white/5 hover:bg-white/10'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard Agro</span>
          </button>
        </div>

        {/* Tab Content Display Container */}
        <div id="showcase-content-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121923]/40 p-6 sm:p-10 rounded-3xl border border-white/5 hover:border-brand-neon/15 transition-all duration-300"
            >
              
              {/* Left Column: Image with Calibration lines overlays (5 Cols) */}
              <div className="lg:col-span-5 relative" id="tab-visual-column">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-brand-neon/30 hover:border-brand-neon/50 transition-all duration-300 shadow-xl group">
                  <img 
                    src={showCases[activeTab].image} 
                    alt={showCases[activeTab].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Neon HUD line indicators on image overlays */}
                  {activeTab === 'tech' && (
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Vertical calibrating laser scan lines */}
                      <div className="absolute h-full w-[2px] bg-brand-neon shadow-[0_0_12px_#39FF14] left-1/3 top-0 animate-pulse" />
                      <div className="absolute h-full w-[2px] bg-brand-neon shadow-[0_0_12px_#39FF14] right-1/3 top-0 animate-pulse" />
                      
                      {/* Multi-angle target circles */}
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-dashed border-brand-neon/80 rounded-full flex items-center justify-center animate-spin">
                        <div className="w-2 h-2 rounded-full bg-brand-neon" />
                      </div>
                      
                      <div className="absolute bottom-4 left-4 py-1 px-2.5 bg-black/80 rounded border border-brand-neon text-[9px] font-mono text-brand-neon">
                        MÉTRICA ATIVA: NELORE ELITE
                      </div>
                    </div>
                  )}

                  {activeTab === 'field' && (
                    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="self-end bg-brand-neon text-black text-[9px] font-mono font-bold rounded px-1.5 py-0.5 uppercase tracking-widest">
                        MODO OFF-LINE SEGURO
                      </div>
                      <div className="space-y-1 text-white">
                        <p className="text-xs font-bold font-mono">Nelore Vacinas Ativas</p>
                        <p className="text-[10px] text-gray-400">Piquete 4 - Realizado por João Pereira</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'dashboard' && (
                    <div className="absolute inset-0 pointer-events-none bg-[#0a0e12]/10 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-2 p-4 bg-black/80 rounded-xl border border-white/10 max-w-xs text-center">
                        <div className="p-2 border-r border-white/5">
                          <p className="text-[10px] text-gray-400 uppercase font-mono">GMD Médio</p>
                          <p className="text-sm font-black text-brand-neon font-mono">+0,89 kg</p>
                        </div>
                        <div className="p-2">
                          <p className="text-[10px] text-gray-400 uppercase font-mono">Acurácia Sinc</p>
                          <p className="text-sm font-black text-white font-mono">98,2%</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Key details, copy, features list (7 Cols) */}
              <div className="lg:col-span-7 space-y-6" id="tab-copy-column">
                <div className="space-y-2">
                  <span className="text-xs bg-brand-neon/15 text-brand-neon font-mono font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {showCases[activeTab].badge}
                  </span>
                  <h3 className="text-2xl font-display font-black text-white pt-2">
                    {showCases[activeTab].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                    {showCases[activeTab].description}
                  </p>
                </div>

                {/* Bullets feature lines */}
                <div className="space-y-3 pt-2" id="tab-bullets">
                  {showCases[activeTab].features.map((feat, index) => (
                    <div key={index} className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 font-sans">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Micro indicators icons panel row */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-gray-500">
                  <div className="flex items-center space-x-1.5">
                    <HeartPulse className="w-4 h-4 text-brand-neon shrink-0" />
                    <span>Controle de Sanidade</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4 text-brand-neon shrink-0" />
                    <span>Notificações de Lote</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Sliders className="w-4 h-4 text-brand-neon shrink-0" />
                    <span>Calibragem Customizada</span>
                  </div>
                </div>

              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
