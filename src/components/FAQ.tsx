import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQ_LIST } from '../data';
import { CompanyInfo } from '../types';

interface FAQProps {
  companyInfo: CompanyInfo;
}

export default function FAQ({ companyInfo }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("p1");

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  const whatsappGeneralText = "Olá, quero tirar dúvidas sobre a TechBov Brasil e entender como funciona a gestão pelo celular Android.";
  const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappGeneralText)}`;

  return (
    <section 
      id="faq" 
      className="py-20 sm:py-24 bg-[#05070a] relative overflow-hidden grid-bg"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4" id="faq-header-info">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <HelpCircle className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon font-display">Respostas Rápidas</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Dúvidas <span className="text-brand-neon text-glow font-display">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans max-w-2xl mx-auto">
            Tem alguma pergunta sobre a estimativa por foto ou a compatibilidade de animais? Encontre as respostas rápidas abaixo.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4" id="faq-accordions-container">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121923] border-brand-neon/30 shadow-lg shadow-brand-neon/5'
                    : 'bg-[#121923]/40 border-white/5 hover:border-white/10'
                }`}
                id={`accordion-faq-${faq.id}`}
              >
                {/* Trigger Button Row */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-white hover:text-brand-neon transition-colors">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-neon" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Content Box with transition */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Question conversion CTA line */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-[#121923]/40 border border-white/5 max-w-2xl mx-auto space-y-4" id="faq-tail-redirect">
          <p className="text-sm text-gray-300 font-sans">
            Ainda tem dúvidas sobre como funciona a gestão pelo celular Android na sua fazenda?
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-brand-dark bg-brand-neon hover:bg-brand-neon-hover rounded-xl transition-all duration-200 box-glow"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-2" />
            Tirar Dúvidas com Especialista no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
