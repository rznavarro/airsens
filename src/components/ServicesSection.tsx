import React from 'react';
import { SERVICES } from '../data/airsensData';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] border-t border-[#2A2F36]/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
              <span>CAPACIDADES TÉCNICAS · INGENIERÍA APLICADA</span>
            </div>
            <h2
              className="text-white font-heading font-bold text-left tracking-tight text-balance max-w-2xl"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Soluciones integrales para instalaciones críticas
            </h2>
          </div>
          <p className="text-[#A7AEB8] text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Ingeniería de precisión, dimensionamiento térmico y soporte preventivo y correctivo con continuidad operativa asegurada 24/7 en todo Chile.
          </p>
        </div>

        {/* 8 Services Grid: 4x2 desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative flex flex-col bg-[#14181D] rounded-2xl border border-[#2A2F36] hover:border-[#2E7DFF] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_12px_32px_rgba(46,125,255,0.18)]"
              >
                {/* 16:9 Image container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0D10]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14181D] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white tracking-wide mb-2 group-hover:text-[#2E7DFF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#A7AEB8] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Internal Link */}
                  <div className="pt-3 border-t border-[#2A2F36]/60 flex items-center justify-between">
                    <a
                      href={service.href}
                      onClick={(e) => {
                        if (onSelectService) {
                          e.preventDefault();
                          onSelectService(service.id);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#2E7DFF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2E7DFF]"
                    >
                      <span>Ver servicio</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
