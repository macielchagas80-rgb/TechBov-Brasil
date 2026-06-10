import { motion } from 'motion/react';
import { Info, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ActivePage, CompanyInfo } from '../types';

interface FooterProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  companyInfo: CompanyInfo;
  setCompanyInfo: (info: CompanyInfo) => void;
}

export default function Footer({ activePage, setActivePage, companyInfo, setCompanyInfo }: FooterProps) {

  const handleLinkClick = (sectionId: string) => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappGeneralText = "Olá, tenho interesse em testar a TechBov Brasil grátis por 30 dias no meu Android.";
  const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappGeneralText)}`;

  return (
    <footer 
      id="contato" 
      className="bg-[#05080C] pt-20 pb-12 border-t border-brand-neon/15 relative overflow-hidden"
    >
      {/* Decorative Grid Light Line Accent */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-16" id="footer-main-columns">
          
          {/* Col 1: Brand description and contacts (5 Cols) */}
          <div className="md:col-span-5 space-y-6" id="footer-brand-col">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black border-2 border-brand-neon box-glow font-display font-black text-brand-neon text-lg">
                TB
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  Tech<span className="text-brand-neon text-glow">Bov</span> Brasil
                </span>
                <span className="block text-[8px] text-[#A0AEC0] font-mono tracking-widest uppercase">
                  AGRO INTELLIGENCE
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-sm">
              Tecnologia inovadora para gestão animal móvel, acompanhamento vacinal, alimentar, controle de sanidade e estimativa de peso individual por fotos tiradas no celular.
            </p>

            {/* List Contact Details */}
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-300 font-sans pt-2" id="footer-contacts-list">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                <span className="leading-tight text-gray-400">{companyInfo.endereco}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-neon shrink-0" />
                <span className="text-gray-400">{companyInfo.telefone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-neon shrink-0" />
                <span className="text-gray-400">{companyInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="leading-none font-bold">Atendimento:</p>
                  <p className="text-[11px] text-gray-500 mt-1">{companyInfo.atendimento}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Map Links (3 Cols) */}
          <div className="md:col-span-3 space-y-5" id="footer-navigation-col">
            <h4 className="text-xs uppercase font-mono font-black tracking-widest text-[#A0AEC0] border-l-2 border-brand-neon pl-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li>
                <button onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-neon transition-colors text-left cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('como-funciona')} className="hover:text-brand-neon transition-colors text-left cursor-pointer">
                  Como Funciona
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('gestao-animal')} className="hover:text-brand-neon transition-colors text-left cursor-pointer">
                  Gestão Animal Kompleta
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('estimativa-foto')} className="hover:text-brand-neon transition-colors text-left cursor-pointer">
                  Estimativa de Peso
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('animais-compativeis')} className="hover:text-brand-neon transition-colors text-left cursor-pointer">
                  Espécies Compatíveis
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('planos')} className="hover:text-brand-neon transition-colors text-left cursor-pointer">
                  Planos & Valores
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faq')} className="hover:text-brand-neon transition-colors text-left cursor-pointer">
                  Dúvidas Frequentes FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal compliance links (4 Cols) */}
          <div className="md:col-span-4 space-y-5" id="footer-legal-col">
            <h4 className="text-xs uppercase font-mono font-black tracking-widest text-[#A0AEC0] border-l-2 border-brand-neon pl-3">Páginas Legais</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li>
                <button onClick={() => { setActivePage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-brand-neon transition-colors text-left cursor-pointer ${activePage === 'privacy' ? 'text-brand-neon font-semibold' : ''}`}>
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-brand-neon transition-colors text-left cursor-pointer ${activePage === 'terms' ? 'text-brand-neon font-semibold' : ''}`}>
                  Termos de Uso
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('cookies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-brand-neon transition-colors text-left cursor-pointer ${activePage === 'cookies' ? 'text-brand-neon font-semibold' : ''}`}>
                  Política de Cookies
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer warning row - required by Google Ads */}
        <div id="footer-compliance-row" className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 mb-10 flex items-start space-x-3 text-xs text-gray-400 leading-relaxed font-sans">
          <Info className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
          <span>
            <strong>Aviso de isenção de responsabilidade:</strong> A TechBov Brasil fornece recursos zootécnicos digitais de apoio e visualização. As estimativas volumétricas geradas por imagem podem apresentar margem de variação natural e não substituem sob hipótese alguma as pesagens oficiais em balança mecânica ou eletrônica homologada perante órgãos reguladores federais, estaduais ou comerciais rurais.
          </span>
        </div>

        {/* Footer legal signatures */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs text-gray-500 font-mono" id="footer-legal-signatures-row">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} TechBov Brasil. Todos os direitos reservados de propriedade tecnológica.</p>
            <p className="text-[10px] text-gray-600">
              Razão Social: <span className="text-gray-500">{companyInfo.razaoSocial}</span> | CNPJ: <span className="text-gray-500">{companyInfo.cnpj}</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
