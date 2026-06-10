import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BENEFITS_LIST } from '../data';

export default function Benefits() {

  // Dynamic Lucide icon renderer
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-brand-neon" />;
    }
    return <Icons.HelpCircle className="w-5 h-5 text-brand-neon" />;
  };

  return (
    <section 
      id="beneficios" 
      className="py-20 sm:py-24 bg-[#05070a] relative border-t border-white/5 overflow-hidden"
    >
      {/* Decorative Neon Element in Background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="benefits-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <Icons.Sparkles className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon">Vantagens Reais</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Por que escolher a plataforma <span className="text-brand-neon text-glow font-display">TechBov Brasil</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Unimos o melhor da tecnologia visual de monitoramento à simplicidade do campo para modernizar de forma segura e responsável a sua rotina produtiva.
          </p>
        </div>

        {/* 8 Cards Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="benefits-grid-layout">
          {BENEFITS_LIST.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative p-6 rounded-3xl bg-[#121923]/60 border border-white/5 hover:border-brand-neon/20 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-brand-neon/5 hover:-translate-y-1"
              id={`benefit-item-${idx}`}
            >
              <div className="space-y-4">
                
                {/* Glowing Icon Wrapper */}
                <div className="w-10 h-10 rounded-xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center group-hover:bg-brand-neon/20 transition-all duration-300">
                  {renderIcon(benefit.icon)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans group-hover:text-gray-300 transition-colors duration-200">
                    {benefit.description}
                  </p>
                </div>

              </div>

              {/* Decorative Glass Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
