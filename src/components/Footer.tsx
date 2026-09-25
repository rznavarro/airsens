import React from 'react';
import { SERVICES, EQUIPMENT, BUSINESS_INFO } from '../data/airsensData';
import { ShieldCheck, MapPin, Phone, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { AirsensLogo } from './AirsensLogo';

interface FooterProps {
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080A0C] border-t border-[#2A2F36] pt-16 pb-24 md:pb-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#2A2F36]">
          {/* Col 1: Brand & ISO (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <AirsensLogo size="md" showSubtitle />
              </div>

              <p className="text-xs sm:text-sm text-[#A7AEB8] leading-relaxed mb-6 font-normal">
                Ingeniería HVAC&R, climatización, refrigeración, electricidad y salas técnicas para minería, industria y comercio en Chile. Más de 16 años de continuidad operativa.
              </p>

              {/* ISO Certification Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {BUSINESS_INFO.certifications.map((iso) => (
                  <span
                    key={iso}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-white"
                  >
                    <ShieldCheck className="w-3 h-3 text-[#2E7DFF]" />
                    <span>{iso}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#2E7DFF] font-semibold mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#A7AEB8]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors">
                  Proyectos Destacados
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-white transition-colors">
                  Certificaciones & Clientes
                </a>
              </li>
              <li>
                <a href="#resenas" className="hover:text-white transition-colors">
                  Reseñas en Google (4,6 ★)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#2E7DFF] font-semibold mb-4">
              Servicios Críticos
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#A7AEB8]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      if (s.id === 'red-de-incendio' && onSelectService) {
                        e.preventDefault();
                        onSelectService('red-de-incendio');
                      }
                    }}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-[#2A2F36]/60">
              <span className="text-[11px] text-white font-semibold block mb-1">Equipos:</span>
              <div className="flex flex-wrap gap-2 text-[11px] text-[#A7AEB8]">
                {EQUIPMENT.map((eq) => (
                  <a key={eq.name} href={eq.href} className="hover:text-[#2E7DFF]">
                    {eq.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Contact Specs (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#2E7DFF] font-semibold mb-4">
              Contacto Directo
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#A7AEB8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2E7DFF] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2E7DFF] flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneLandlineRaw}`} className="hover:text-white">
                  {BUSINESS_INFO.phoneLandline}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {BUSINESS_INFO.phoneMobile} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2E7DFF] flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7AEB8]">
          <p>© 2026 Airsens. Todos los derechos reservados. Ingeniería HVAC&R en Chile.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#2E7DFF] transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
