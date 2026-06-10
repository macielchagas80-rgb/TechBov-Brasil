import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Sparkles, MessageSquare, Edit3, Save } from 'lucide-react';
import { CompanyInfo } from '../types';

interface PlansProps {
  companyInfo: CompanyInfo;
}

export default function Plans({ companyInfo }: PlansProps) {
  // Configurable state prices that can be edited live right on the screen
  const [isEditing, setIsEditing] = useState(false);
  const [inicialPrice, setInicialPrice] = useState('97,00');
  const [fazendaPrice, setFazendaPrice] = useState('197,00');

  const planos = [
    {
      name: "Plano Inicial",
      price: isEditing ? null : `R$ ${inicialPrice} / mês`,
      subtitle: "Indicado para pequenos criadores e produtores familiares.",
      features: [
        "Acesso completo à plataforma móvel",
        "Cadastro de até 50 animais ativos",
        "Gestão básica de rebanho e categorias",
        "Histórico individual de vacinas e saúde",
        "Suporte por WhatsApp em horário comercial"
      ],
      btnText: "Conhecer Plano Inicial",
      whatsAppMsg: `Olá, quero conhecer o Plano Inicial (R$ ${inicialPrice}/mês) da TechBov Brasil e obter meus 30 dias grátis no meu Android.`,
      popular: false,
      inputId: "inicial"
    },
    {
      name: "Plano Fazenda",
      price: isEditing ? null : `R$ ${fazendaPrice} / mês`,
      badge: "MAIS RECOMENDADO",
      subtitle: "Ideal para fazendas de médio porte e criadores em franco crescimento.",
      features: [
        "Tudo incluído no Plano Inicial",
        "Cadastro de até 500 animais ativos",
        "Estimativa de peso por foto ilimitada",
        "Calendário sanitário com notificações",
        "Controle nutricional de lote avançado",
        "Relatórios de ganho de peso (GMD)",
        "Suporte prioritário via WhatsApp"
      ],
      btnText: "Quero testar esse plano",
      whatsAppMsg: `Olá, quero testar grátis por 30 dias o Plano Fazenda (R$ ${fazendaPrice}/mês) da TechBov Brasil no meu Android.`,
      popular: true,
      inputId: "fazenda"
    },
    {
      name: "Plano Profissional",
      price: "Sob Consulta",
      subtitle: "Indicado para grandes operações, consultores zootécnicos e equipes.",
      features: [
        "Tudo incluído no Plano Fazenda",
        "Cadastro ilimitado de animais ativos",
        "Múltiplos usuários com níveis de permissão",
        "Painéis analíticos customizados (BI)",
        "Gerente de conta zootécnico exclusivo",
        "Suporte prioritário 24/7 via WhatsApp",
        "Condições especiais de pagamento anual"
      ],
      btnText: "Solicitar proposta",
      whatsAppMsg: "Olá, quero conhecer os planos da TechBov Brasil e solicitar um orçamento personalizado para o Plano Profissional Android.",
      popular: false
    }
  ];

  return (
    <section 
      id="planos" 
      className="py-20 sm:py-24 bg-[#05070a] relative border-y border-white/5 overflow-hidden"
    >
      {/* Decorative background visual elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-brand-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Edit State Control Button */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="plans-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-neon font-display">Tabela de Preços</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Planos para cada <span className="text-brand-neon text-glow font-display">tipo de criação</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Comece hoje com nosso teste gratuito de 30 dias. Escolha o plano ideal e mude o preço no painel de configuração para ajustar à realidade de sua operação.
          </p>

          {/* Real-time configuration tool: Edit Prices LIVE right on the screen */}
          <div className="pt-4 flex justify-center" id="plans-live-editor-button">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono border border-white/10 text-gray-300 transition-colors"
            >
              {isEditing ? (
                <>
                  <Save className="w-3.5 h-3.5 text-brand-neon" />
                  <span>Salvar Preços Editados</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5 text-brand-neon animate-pulse" />
                  <span>Editar Preços dos Planos (Preencher depois)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live editing form overlay if activated */}
        {isEditing && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 max-w-xl mx-auto p-5 rounded-2xl bg-[#121923] border border-brand-neon/30 space-y-4"
            id="pricing-editor-overlay-form"
          >
            <h4 className="text-xs font-mono uppercase font-black tracking-wider text-brand-neon flex items-center space-x-1.5">
              <span>Painel de Ajuste Rápido de Preços</span>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-gray-400 font-mono uppercase mb-1">Preço Plano Inicial (R$)</label>
                <input 
                  type="text" 
                  value={inicialPrice}
                  onChange={(e) => setInicialPrice(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 text-white rounded px-3 py-1.5 font-mono text-sm focus:border-brand-neon focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 font-mono uppercase mb-1">Preço Plano Fazenda (R$)</label>
                <input 
                  type="text" 
                  value={fazendaPrice}
                  onChange={(e) => setFazendaPrice(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 text-white rounded px-3 py-1.5 font-mono text-sm focus:border-brand-neon focus:outline-none"
                />
              </div>
            </div>
            <p className="text-[10px] text-gray-500 font-mono italic">
              *Digite os valores desejados. Eles serão salvos nas variáveis de exibição e estarão visíveis instantaneamente.
            </p>
          </motion.div>
        )}

        {/* 3 cards grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="pricing-plans-cards-grid">
          {planos.map((plano, idx) => {
            const hasBadge = plano.badge;
            const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(plano.whatsAppMsg)}`;

            return (
              <motion.div
                key={plano.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  plano.popular
                    ? 'bg-[#121923] border-2 border-brand-neon box-glow scale-[1.03] shadow-lg shadow-brand-neon/5 z-20'
                    : 'bg-[#121923]/50 border border-white/5 hover:border-white/10 z-10'
                }`}
                id={`pricing-plan-card-${idx}`}
              >
                {/* Popularity Badge */}
                {hasBadge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-neon text-brand-dark font-display font-black text-[10px] tracking-widest px-4 py-1.5 rounded-full uppercase shadow">
                    {plano.badge}
                  </span>
                )}

                {/* Plan Header */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-black text-white">{plano.name}</h3>
                  <p className="text-xs text-gray-400 font-sans min-h-[32px]">{plano.subtitle}</p>
                  
                  {/* Price info displays */}
                  <div className="py-4 border-y border-white/5 min-h-[90px] flex items-center">
                    {plano.price ? (
                      <div>
                        {plano.name !== "Plano Profissional" && (
                          <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-[#A0AEC0] mb-0.5">Teste Grátis por 30 dias</span>
                        )}
                        <span className={`text-3xl font-display font-black text-white ${plano.popular ? 'text-brand-neon' : ''}`}>
                          {plano.price}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full space-y-2">
                        <span className="block text-[10px] text-brand-neon font-mono uppercase font-black">Preencha o valor acima</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-400 font-mono">R$</span>
                          <input
                            type="text"
                            value={plano.inputId === 'inicial' ? inicialPrice : fazendaPrice}
                            onChange={(e) => {
                              if (plano.inputId === 'inicial') {
                                setInicialPrice(e.target.value);
                              } else {
                                setFazendaPrice(e.target.value);
                              }
                            }}
                            className="bg-black/80 border border-brand-neon text-white text-lg font-mono font-bold w-24 rounded px-1.5 text-center focus:outline-none"
                            placeholder="Preço"
                          />
                          <span className="text-xs text-gray-400 font-mono">/ mês</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bullet features list */}
                  <ul className="space-y-3 pt-4 text-xs sm:text-sm text-gray-300 font-sans">
                    {plano.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                        <span className={`${plano.popular ? 'text-gray-200 font-medium' : 'text-gray-400'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Main WhatsApp Button */}
                <div className="pt-8">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center w-full py-4 text-xs font-bold rounded-xl transition-all duration-200 text-center ${
                      plano.popular
                        ? 'bg-brand-neon text-brand-dark hover:bg-brand-neon-hover box-glow hover:scale-[1.02]'
                        : 'bg-transparent text-white border border-white/20 hover:bg-white/5 hover:scale-[1.01]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-2" />
                    {plano.btnText}
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Limit Warning Disclaimer for compliance */}
        <div className="mt-12 text-center text-xs text-gray-500 flex items-center justify-center space-x-1 font-sans" id="plans-disclaimer-footnote">
          <Info className="w-4 h-4 text-brand-neon shrink-0" />
          <span>
            * Valores, limites fiscais de gado e recursos do aplicativo podem variar conforme volume do rebanho gerido, usuários adicionais e preferências selecionadas.
          </span>
        </div>

      </div>
    </section>
  );
}
