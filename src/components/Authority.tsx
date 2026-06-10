import { motion } from 'motion/react';
import { Target, Shield, HeartPulse, Sparkles, Smartphone, Award, Quote } from 'lucide-react';

export default function Authority() {

  const cards = [
    { title: "Gestão digital", desc: "Substitua de vez anotações antigas por um controle corporativo na nuvem.", icon: Shield },
    { title: "Controle animal", desc: "Monitore gado bovino, porcos, carneiros, caprinos e cavalos em um só painel.", icon: Target },
    { title: "Estimativa por imagem", desc: "Aproveite fotos de celular em vários ângulos para calcular pesos informativos.", icon: Sparkles },
    { title: "Acompanhamento de saúde", desc: "Verifique e catalogue o status médico, histórico de partos e sanidade sanitária.", icon: HeartPulse },
    { title: "Lembretes automáticos", desc: "Receba alertas no seu celular sobre vacinas obrigatórias e tarefas de pique.", icon: Award },
    { title: "Uso no Android", desc: "Baixe o aplicativo celular exclusivo para aparelhos Android com instalação rápida e leve.", icon: Smartphone }
  ];

  return (
    <section 
      id="autoridade" 
      className="py-20 bg-[#05070a] relative border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Description Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16" id="authority-grid-intro">
          
          <div className="lg:col-span-6 space-y-4" id="authority-intro-text">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
              <Award className="w-3.5 h-3.5 text-brand-neon" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon">Zootecnia & Tecnologia</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Criado para modernizar a <span className="text-brand-neon text-glow font-display">gestão no campo</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              A <strong>TechBov Brasil</strong> foi desenvolvida focando nas dores reais do homem do campo. Buscamos ajudar produtores, capatazes, zootecnistas e criadores de todos os portes a acompanharem seus animais com muito mais organização, transparência, praticidade e tecnologia confiável.
            </p>
          </div>

          {/* Slogan Banner Card Accent */}
          <div className="lg:col-span-6" id="authority-intro-banner">
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-neon/5 border border-brand-neon/25 relative overflow-hidden">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-brand-neon/[0.04] pointer-events-none" />
              <p className="font-sans text-brand-neon font-black text-xs uppercase tracking-widest font-mono mb-2">Nosso Posicionamento</p>
              <p className="text-lg font-display font-bold text-white leading-relaxed">
                “Acreditamos na digitalização de apoio zootécnico sem complicação. Queremos levar a estimativa visual de peso de forma honesta, acessível e segura a cada curral do Brasil.”
              </p>
            </div>
          </div>

        </div>

        {/* 6 Authority cards list (small grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="authority-purposes-cards">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#121923]/40 border border-white/5 hover:border-brand-neon/15 hover:bg-[#121923]/60 transition-all duration-300 flex items-start space-x-4"
                id={`auth-card-${idx}`}
              >
                <div className="p-2.5 rounded-xl bg-brand-neon/10 border border-brand-neon/20 shrink-0">
                  <Icon className="w-5 h-5 text-brand-neon" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-display font-bold text-white">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials Placeholder section - compliance-focused, no fake quotes */}
        <div className="mt-16 pt-12 border-t border-white/5" id="authority-testimonials-placeholder">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121923]/40 border border-white/5 text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-block py-1 px-2.5 bg-white/5 text-[9px] uppercase font-mono font-bold tracking-widest text-[#A0AEC0] rounded">Fase de Onboarding</span>
            <h3 className="text-lg font-display font-bold text-white">Depoimentos de Usuários</h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-md mx-auto leading-relaxed">
              Respeitamos as regras do Google Ads. Só disponibilizaremos depoimentos homologados e com auditoria de dados real. Em breve, publicaremos as histórias de sucesso de nossos pioneiros agropecuários aqui.
            </p>
            <div className="pt-2 text-[10px] text-gray-500 font-mono">
              ★ ★ ★ ★ ★ — Depoimentos de usuários reais autorizados em breve.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
