import React, { useState, useEffect } from 'react';
import { SERVICES, EQUIPMENT, BUSINESS_INFO } from '../data/airsensData';
import { ChevronDown, Menu, X, PhoneCall } from 'lucide-react';
import { AirsensLogo } from './AirsensLogo';

interface NavbarProps {
  onSelectService?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectService }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['inicio', 'nosotros', 'servicios', 'proyectos', 'confianza', 'resenas', 'faq', 'contacto'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-5 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-4 w-full max-w-6xl px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0D10]/85 backdrop-blur-xl border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.6)]'
            : 'bg-white/[0.08] backdrop-blur-md border border-white/20'
        }`}
      >
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('inicio');
          }}
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7DFF] rounded-lg"
          aria-label="Airsens - Ir al inicio"
        >
          <AirsensLogo size="sm" />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => scrollTo('inicio')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
              activeSection === 'inicio'
                ? 'bg-white text-black font-semibold'
                : 'text-[#A7AEB8] hover:text-white hover:bg-white/5'
            }`}
          >
            Inicio
          </button>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => scrollTo('servicios')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeSection === 'servicios'
                  ? 'bg-white text-black font-semibold'
                  : 'text-[#A7AEB8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Servicios</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {/* Dropdown panel */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[420px]">
                <div className="bg-[#14181D]/95 backdrop-blur-xl border border-[#2A2F36] rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-3 text-left animate-in-view">
                  <div className="col-span-2 pb-2 border-b border-[#2A2F36]/60">
                    <p className="text-[10px] uppercase tracking-wider text-[#A7AEB8] font-semibold">
                      Soluciones Especializadas
                    </p>
                  </div>
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        if (onSelectService) {
                          onSelectService(s.id);
                        } else {
                          scrollTo('servicios');
                        }
                      }}
                      className="group flex flex-col text-left p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="text-xs text-white group-hover:text-[#2E7DFF] font-medium transition-colors">
                        {s.title}
                      </span>
                      <span className="text-[10px] text-[#A7AEB8] line-clamp-1">
                        {s.description}
                      </span>
                    </button>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-[#2A2F36]/60 flex items-center justify-between text-[11px] text-[#A7AEB8]">
                    <span className="font-semibold text-white">Equipos:</span>
                    <div className="flex gap-2">
                      {EQUIPMENT.map((eq) => (
                        <span key={eq.name} className="hover:text-[#2E7DFF] cursor-pointer">
                          {eq.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollTo('proyectos')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
              activeSection === 'proyectos'
                ? 'bg-white text-black font-semibold'
                : 'text-[#A7AEB8] hover:text-white hover:bg-white/5'
            }`}
          >
            Proyectos
          </button>

          <button
            onClick={() => scrollTo('nosotros')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
              activeSection === 'nosotros'
                ? 'bg-white text-black font-semibold'
                : 'text-[#A7AEB8] hover:text-white hover:bg-white/5'
            }`}
          >
            Nosotros
          </button>

          <button
            onClick={() => scrollTo('contacto')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
              activeSection === 'contacto'
                ? 'bg-white text-black font-semibold'
                : 'text-[#A7AEB8] hover:text-white hover:bg-white/5'
            }`}
          >
            Contacto
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="cotizar"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#2E7DFF] hover:bg-[#2563EB] shadow-[0_0_15px_rgba(46,125,255,0.4)] transition-all"
          >
            <span>Cotizar</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="p-1.5 md:hidden text-white/80 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7DFF]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop blur overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            aria-hidden="true"
          />

          <div className="pointer-events-auto md:hidden fixed inset-x-3 sm:inset-x-4 top-20 bg-[#14181D]/98 border border-[#2A2F36] rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl animate-in-view z-50 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => scrollTo('inicio')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollTo('servicios')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Servicios (8 áreas críticas)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectService?.('red-de-incendio');
                }}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>Red de Incendio</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">NFPA</span>
              </button>
              <button
                onClick={() => scrollTo('proyectos')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Proyectos Destacados (13 obras)
              </button>
              <button
                onClick={() => scrollTo('estimador')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>Estimador de Capacidad HVAC</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2E7DFF]/20 text-[#2E7DFF] font-semibold">TR / BTU</span>
              </button>
              <button
                onClick={() => scrollTo('nosotros')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollTo('confianza')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Certificaciones ISO
              </button>
              <button
                onClick={() => scrollTo('resenas')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>Opiniones en Google (4,6 ★)</span>
                <span className="text-xs text-[#2E7DFF] font-semibold">18 reseñas</span>
              </button>
              <button
                onClick={() => scrollTo('faq')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Preguntas Frecuentes
              </button>
              <button
                onClick={() => scrollTo('contacto')}
                className="text-left py-2.5 px-3.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Contacto
              </button>

              <div className="pt-3 mt-1 border-t border-[#2A2F36] flex flex-col gap-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-center text-xs font-semibold bg-[#2E7DFF] text-white shadow-lg active:scale-98 transition-transform"
                >
                  Solicitar cotización por WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneMobileRaw}`}
                  className="w-full py-3 rounded-full text-center text-xs font-semibold border border-white/20 text-white bg-white/5 flex items-center justify-center gap-2 active:scale-98 transition-transform"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#2E7DFF]" />
                  <span>Llamar al +56 9 7574 6747</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
