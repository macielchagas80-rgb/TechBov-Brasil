import { motion } from 'motion/react';
import { Milk, Sparkles, AlertCircle, Compass, ShieldCheck, HeartPulse, Zap } from 'lucide-react';
import { ANIMAL_CATEGORIES } from '../data';

export default function CompatibleAnimals() {
  
  // Icon mapper helper to guarantee absolute stability across Lucide builds
  const getAnimalIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cow':
        return <Milk className="w-8 h-8 text-brand-neon" />;
      case 'PiggyBank':
        return <HeartPulse className="w-8 h-8 text-brand-neon" />;
      case 'Sheep':
        return <ShieldCheck className="w-8 h-8 text-brand-neon" />;
      case 'Binary':
        return <Sparkles className="w-8 h-8 text-brand-neon" />;
      case 'Activity':
        return <Zap className="w-8 h-8 text-brand-neon" />;
      default:
        return <Compass className="w-8 h-8 text-brand-neon" />;
    }
  };

  return (
    <section 
      id="animais-compativeis" 
      className="py-20 sm:py-24 bg-[#05070a] relative border-t border-white/5 overflow-hidden"
    >
      {/* Decorative Blur Background Block */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header info */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="compat-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <Compass className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon">Multiespécie</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight"
          >
            Tecnologia para diferentes <span className="text-brand-neon text-glow font-display">tipos de criação</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-300 font-sans"
          >
            A plataforma TechBov Brasil foi desenhada de forma universal para auxiliar no controle, sanidade e acompanhamento zootécnico de múltiplos tipos de animais de criação.
          </motion.p>
        </div>

        {/* Animals Grid Layout (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="compat-animal-cards-grid">
          {ANIMAL_CATEGORIES.map((animal, idx) => {
            return (
              <motion.div
                key={animal.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-[#121923]/60 border border-white/5 hover:border-brand-neon/20 hover:bg-[#121923]/80 transition-all duration-300 hover:shadow-xl hover:shadow-brand-neon/5 flex flex-col justify-between"
                id={`animal-compat-card-${animal.id}`}
              >
                <div className="space-y-5">
                  
                  {/* Card Icon & Scientific Name Badge */}
                  <div className="flex justify-between items-center">
                    <div className="w-14 h-14 rounded-2xl bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {getAnimalIcon(animal.iconName)}
                    </div>
                    {animal.scientificName && (
                      <span className="text-[10px] font-mono font-medium text-gray-500 italic bg-white/5 px-2 py-1 rounded">
                        {animal.scientificName}
                      </span>
                    )}
                  </div>

                  {/* Animal Info details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-200">
                      {animal.name}
                    </h3>
                    <p className="text-xs text-brand-neon font-mono font-semibold uppercase tracking-wider">
                      Gestão, histórico e acompanhamento móvel.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {animal.description}
                    </p>
                  </div>

                  {/* Bullet specifics */}
                  <ul className="space-y-1.5 pt-3 border-t border-white/5 text-[11px] text-gray-400 font-sans">
                    {animal.features.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Mobile indicators */}
                <div className="flex items-center space-x-1.5 pt-5 text-[10px] text-gray-500 font-mono">
                  <span>Monitoramento Ativo</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
                </div>

                {/* Subtle glass effect accent */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Global disclaimer note - Important for Google Ads / Ads Compliance */}
        <div className="mt-10 flex items-center justify-center space-x-2 text-xs text-gray-500 text-center max-w-2xl mx-auto font-sans" id="compat-global-label">
          <AlertCircle className="w-4 h-4 text-brand-neon shrink-0" />
          <span>
            <strong>Observação geral:</strong> A disponibilidade de recursos dedicados de análise e estimativas pode variar conforme o tipo de animal, maturidade corporal e configuração ativa da plataforma.
          </span>
        </div>

      </div>
    </section>
  );
}
