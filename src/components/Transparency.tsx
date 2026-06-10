import { ShieldCheck, Scale, AlertTriangle, Eye, Sparkles } from 'lucide-react';

export default function Transparency() {
  return (
    <section 
      id="transparencia-tecnologica" 
      className="py-16 sm:py-20 bg-[#05070a] relative overflow-hidden"
    >
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-neon/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Transparent Main Box Wrapper with Neon border limits */}
        <div className="glass-morphism rounded-3xl p-8 sm:p-12 border-2 border-brand-neon/20 shadow-2xl space-y-8" id="transparency-main-panel">
          
          {/* Header info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand-neon" />
              </div>
              <div>
                <h2 className="font-display font-black text-xl sm:text-2xl text-white">
                  Tecnologia com Transparência
                </h2>
                <p className="text-xs text-brand-neon font-mono font-medium uppercase tracking-wider">
                  Postura Ética e Compromisso Agropecuário
                </p>
              </div>
            </div>
            
            {/* Visual Safe Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-[11px] text-brand-neon font-bold">
              <Eye className="w-3.5 h-3.5" />
              <span>Foco em Gestão e Apoio</span>
            </div>
          </div>

          {/* Copy columns structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-gray-300 font-sans" id="transparency-texts-block">
            
            <div className="space-y-4">
              <p className="leading-relaxed text-gray-300">
                A <strong>TechBov Brasil</strong> utiliza fotos capturadas pelo próprio celular Android, dados detalhados do animal e análise visual volumétrica para estimar o peso dos espécimes rurais rondonistas.
              </p>
              <p className="leading-relaxed text-gray-400">
                Esse resultado atua como uma <strong>estimativa inteligente de apoio</strong>, cuja consistência está diretamente ligada à exatidão das informações, enquadramentos, luz e nitidez das fotos. Quanto mais precisos forem os inputs, melhor tende a ser a nossa estimativa.
              </p>
            </div>

            <div className="space-y-4">
              <p className="leading-relaxed text-gray-300">
                Nossos modelos estimativos zootécnicos foram criados para gerar <strong>mais praticidade no manejo diário</strong> e menor dependência da balança física tradicional em todos os lotes, minimizando o estresse e desbaste do rebanho no curral.
              </p>
              <p className="leading-relaxed text-gray-400 font-medium">
                Sempre incentivamos preencher a ficha individual do animal com o máximo de capricho, incluindo raça exata, porte aproximado de garupa e idade corrigida para otimizar os cálculos do sensor.
              </p>
            </div>

          </div>

          {/* Golden Highlights Caution Card Block (Anti-AI-Slop and Safe Positioning) */}
          <div className="p-6 rounded-2xl bg-brand-neon/5 border border-brand-neon/30 flex flex-col sm:flex-row items-start sm:items-center gap-4" id="transparency-warning-callout">
            <div className="p-2.5 rounded-xl bg-brand-neon/25 border border-brand-neon flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6 text-brand-neon" />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-mono font-black text-brand-neon uppercase tracking-wide flex items-center">
                <AlertTriangle className="w-4 h-4 mr-1 text-brand-neon" />
                AVISO DE RESPONSABILIDADE COLETIVA
              </p>
              <p className="text-sm font-bold text-white">
                A TechBov Brasil não promete peso exato de 100% de acurácia e NÃO substitui a pesagem física oficial em balança calibrada homologada quando ela for por lei exigida para transações legais, fins sanitários, fiscais, comerciais ou securitários rurais.
              </p>
            </div>
          </div>

          {/* Safe Comparison Rules List footer */}
          <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-gray-500" id="transparency-safe-features">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
              <span>Apoio à gestão diária</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
              <span>Acompanhamento preventivo</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
              <span>Estudo do GMD integrado</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
