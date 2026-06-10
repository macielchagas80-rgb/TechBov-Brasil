import { motion } from 'motion/react';
import { Smartphone, CheckCircle, SmartphoneNfc, AppWindow, ArrowRight } from 'lucide-react';
import { TIMELINE_STEPS } from '../data';
import { CompanyInfo } from '../types';

interface TimelineProps {
  companyInfo: CompanyInfo;
}

export default function Timeline({ companyInfo }: TimelineProps) {
  
  const stepIcons = [
    SmartphoneNfc,
    AppWindow,
    CheckCircle,
    CheckCircle
  ];

  const whatsappGeneralText = "Olá, tenho interesse em testar a TechBov Brasil grátis por 30 dias no meu Android.";
  const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappGeneralText)}`;

  return (
    <section 
      id="como-funciona" 
      className="py-20 sm:py-24 bg-[#05070a] relative overflow-hidden"
    >
      {/* Background radial soft light gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-neon/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="timeline-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <Smartphone className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon">Manejo Descomplicado</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Simples para usar diretamente <span className="text-brand-neon text-glow font-display">no campo</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Sem rotinas complexas ou manuais extensos. A interface da TechBov Brasil foi desenhada exclusivamente para a realidade e simplicidade do dia a dia do produtor rural no celular Android.
          </p>
        </div>

        {/* Steps Grid (Horizontal desktop, Vertical mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" id="timeline-track-content">
          {TIMELINE_STEPS.map((step, idx) => {
            const IconComp = stepIcons[idx] || Smartphone;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#121923]/40 border border-white/5 hover:border-brand-neon/20 transition-all duration-300"
                id={`timeline-step-card-${idx}`}
              >
                <div className="space-y-4">
                  {/* Absolute number overlay background */}
                  <span className="absolute top-4 right-6 text-5xl font-display font-black text-white/[0.03] select-none group-hover:text-brand-neon/[0.05] transition-colors duration-300">
                    0{step.number}
                  </span>

                  {/* Step Icon bubble */}
                  <div className="w-12 h-12 rounded-xl bg-brand-neon/10 border border-brand-neon/20 group-hover:bg-brand-neon/20 group-hover:border-brand-neon/30 flex items-center justify-center transition-colors duration-200">
                    <span className="font-display font-black text-brand-neon text-sm">0{step.number}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-200">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Simulated line connector on desktop */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 h-8 w-8 z-20 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-brand-neon animate-pulse" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Clear Instructions Regarding Direct WhatsApp Guidance */}
        <div className="mt-12 text-center" id="timeline-notice-box">
          <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-2xl mx-auto">
            💡 <strong>Sem downloads forçados:</strong> Para garantir total segurança e transparência com as diretrizes do Google Ads, não há downloads automáticos executados ao clicar. Todo o onboarding e instruções de acesso direto por atalho na tela inicial do navegador são orientados pela nossa equipe pelo WhatsApp.
          </p>
          <div className="mt-6">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-brand-dark bg-brand-neon rounded-xl hover:bg-brand-neon-hover transition-all duration-200 shadow-xl shadow-brand-neon/15 hover:scale-[1.03] cursor-pointer"
            >
              Começar Teste Sem Download Obrigatorio
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
