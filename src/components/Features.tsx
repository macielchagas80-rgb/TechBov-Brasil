import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { FEATURES_LIST } from '../data';

export default function Features() {

  // Dynamic Lucide icon lookup helper
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-brand-neon" />;
    }
    return <Icons.HelpCircle className="w-6 h-6 text-brand-neon" />;
  };

  return (
    <section 
      id="gestao-animal" 
      className="py-20 bg-[#05070a] relative border-y border-white/5 overflow-hidden"
    >
      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading info */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="features-header-info">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <Icons.Layers className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon">Controle Centralizado</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight"
          >
            Muito mais que estimar peso: uma <br className="hidden sm:inline" />
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-brand-neon">gestão animal completa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-300 font-sans"
          >
            A TechBov Brasil ajuda produtores, fazendas e criadores a organizarem informações importantes de seus animais em um só lugar de maneira fácil e interativa.
          </motion.p>
        </div>

        {/* Six Feature Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="features-interactive-cards-grid">
          {FEATURES_LIST.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-[#121923]/60 border border-white/5 hover:border-brand-neon/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-neon/5 hover:-translate-y-1.5 flex flex-col justify-between"
              id={`feature-card-${index}`}
            >
              <div className="space-y-4">
                {/* Glowing neon block icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center group-hover:bg-brand-neon/20 group-hover:border-brand-neon/40 transition-all duration-300">
                  {renderIcon(feat.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-200">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                  {feat.description}
                </p>
              </div>

              {/* Aesthetic indicator decoration dots */}
              <div className="flex items-center space-x-1.5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase font-mono font-black text-brand-neon tracking-wider">Disponível para Android</span>
                <Icons.ArrowUpRight className="w-3.5 h-3.5 text-brand-neon" />
              </div>

              {/* Glass subtle card linear gradient backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
