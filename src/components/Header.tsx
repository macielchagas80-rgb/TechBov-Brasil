import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ShieldAlert, Navigation } from 'lucide-react';
import { ActivePage, CompanyInfo } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  companyInfo: CompanyInfo;
}

export default function Header({ activePage, setActivePage, companyInfo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (activePage !== 'home') {
      setActivePage('home');
      // Let home render first, then scroll
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

  const handleLogoClick = () => {
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappGeneralText = "Olá, tenho interesse em testar a TechBov Brasil grátis por 30 dias no meu Android.";
  const waUrl = `https://wa.me/${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappGeneralText)}`;

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/45 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand with Neon Indicator */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-2.5 cursor-pointer group"
            id="nav-logo-btn"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-dark border-2 border-brand-neon box-glow transition-all duration-300 group-hover:scale-105">
              <span className="font-display font-black text-brand-neon text-lg tracking-tighter">TB</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-neon animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-neon" />
            </div>
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-brand-neon transition-colors duration-200">
                Tech<span className="text-brand-neon text-glow">Bov</span> <span className="text-sm font-light text-gray-400">Brasil</span>
              </span>
              <span className="block text-[8px] text-[#A0AEC0] font-mono tracking-widest uppercase">
                ANDROID MOBILE AGRO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" id="desktop-nav">
            <button
              onClick={() => handleLogoClick()}
              className={`font-sans text-sm font-medium transition-colors hover:text-brand-neon cursor-pointer ${
                activePage === 'home' ? 'text-brand-neon' : 'text-gray-300'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('como-funciona')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-brand-neon cursor-pointer"
            >
              Como Funciona
            </button>
            <button
              onClick={() => handleNavClick('gestao-animal')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-brand-neon cursor-pointer"
            >
              Gestão Animal
            </button>
            <button
              onClick={() => handleNavClick('estimativa-foto')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-brand-neon cursor-pointer"
            >
              Estimativa por Foto
            </button>
            <button
              onClick={() => handleNavClick('animais-compativeis')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-brand-neon cursor-pointer"
            >
              Animais
            </button>
            <button
              onClick={() => handleNavClick('planos')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-brand-neon cursor-pointer"
            >
              Planos
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-brand-neon cursor-pointer"
            >
              Dúvidas
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-brand-neon cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3" id="desktop-actions">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-brand-neon" />
              WhatsApp
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-brand-dark bg-brand-neon rounded-xl hover:bg-brand-neon-hover transition-all duration-200 box-glow hover:scale-[1.02]"
            >
              Teste Grátis 30 Dias
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center" id="mobile-menu-toggle-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-200"
              aria-expanded="false"
              id="mobile-menu-btn"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X className="h-6 w-6 text-brand-neon" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-5" id="mobile-drawer">
          <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6">
            <button
              onClick={() => { setIsOpen(false); handleLogoClick(); }}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold text-white hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('como-funciona')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Como Funciona
            </button>
            <button
              onClick={() => handleNavClick('gestao-animal')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Gestão Animal
            </button>
            <button
              onClick={() => handleNavClick('estimativa-foto')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Estimativa por Foto
            </button>
            <button
              onClick={() => handleNavClick('animais-compativeis')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Animais Compatíveis
            </button>
            <button
              onClick={() => handleNavClick('planos')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Planos & Tarifas
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Dúvidas Frequentes
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-brand-neon/10 hover:text-brand-neon transition-all"
            >
              Contato & Localização
            </button>
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-bold text-brand-dark bg-brand-neon rounded-xl hover:bg-brand-neon-hover transition-all duration-200 text-center shadow-lg shadow-brand-neon/10"
              >
                Teste Grátis por 30 Dias
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-brand-neon" />
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
