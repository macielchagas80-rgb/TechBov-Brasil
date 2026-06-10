import { Smartphone, Sparkles, MessageSquare, ClipboardCheck, ArrowRight } from 'lucide-react';
import { CompanyInfo } from '../types';

interface ConversionCTAProps {
  companyInfo: CompanyInfo;
  onNavigateToPlans: () => void;
}

export default function ConversionCTA({ companyInfo, onNavigateToPlans }: ConversionCTAProps) {
  
  const whatsappGeneralText = "Olá, tenho interesse em testar a TechBov Brasil grátis por 30 dias no meu Android.";
  const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappGeneralText)}`;
  const waConsultantText = "Olá, quero tirar dúvidas sobre a TechBov Brasil e entender como funciona a gestão pelo celular Android.";
  const waConsultantUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(waConsultantText)}`;

  return (
    <section 
      id="conversao-final" 
      className="py-20 sm:py-24 bg-[#05070a] relative overflow-hidden"
    >
      {/* Decorative background visual elements */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-neon/5 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-neon/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main interactive big CTA Card */}
        <div className="glass-morphism rounded-[32px] p-8 sm:p-14 border-2 border-brand-neon/30 box-glow text-center space-y-8 relative overflow-hidden" id="cta-card-canvas">
          
          {/* Cyber lines and grids absolute elements */}
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          
          {/* Floating tiny animals styles info */}
          <div className="absolute -top-10 -left-10 text-brand-neon/5 font-display font-black text-9xl select-none leading-none pointer-events-none uppercase">🐂</div>
          <div className="absolute -bottom-10 -right-10 text-brand-neon/5 font-display font-black text-9xl select-none leading-none pointer-events-none uppercase">🐄</div>

          <div className="space-y-4 max-w-2xl mx-auto">
            
            {/* Action Icon Wrapper */}
            <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center mx-auto box-glow shadow-brand-neon/20">
              <Sparkles className="w-6 h-6 text-brand-neon animate-pulse" />
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none">
              Quer testar a <span className="text-brand-neon text-glow font-display">TechBov Brasil</span> na sua criação?
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 font-sans">
              Fale com nossa equipe zootécnica pelo WhatsApp, tire todas as suas dúvidas práticas sobre nosso aplicativo móvel e comece seu teste inteiramente funcional por 30 dias.
            </p>

          </div>

          {/* Bullet highlights inside card row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs font-mono text-gray-400 py-4 border-y border-white/5" id="cta-card-bullets">
            <div className="flex items-center justify-center space-x-2">
              <ClipboardCheck className="w-4 h-4 text-brand-neon" />
              <span>30 Dias Gratuitos</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ClipboardCheck className="w-4 h-4 text-brand-neon" />
              <span>Sem Adesão Forçada</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ClipboardCheck className="w-4 h-4 text-brand-neon" />
              <span>Suporte pelo WhatsApp</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ClipboardCheck className="w-4 h-4 text-brand-neon" />
              <span>Onboarding Assistido</span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto pt-4" id="cta-action-buttons">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold text-brand-dark bg-brand-neon rounded-xl hover:bg-brand-neon-hover transition-all duration-200 shadow-xl shadow-brand-neon/20 hover:scale-[1.03] cursor-pointer"
            >
              Testar Grátis Agora
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <a
              href={waConsultantUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-brand-neon" />
              Conversar no WhatsApp
            </a>

            <button
              onClick={onNavigateToPlans}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Conhecer planos
              <span className="text-brand-neon ml-1 text-xs">→</span>
            </button>
          </div>

          {/* Security footnote reminder */}
          <p className="text-[10px] text-gray-500 font-sans italic max-w-md mx-auto">
            *Nenhum compromisso ou faturamento inicial é exigido. Após o término do teste, escolha livremente o melhor plano ou cancele sem qualquer multa.
          </p>

        </div>

      </div>
    </section>
  );
}
