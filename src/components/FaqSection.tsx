import React, { useState } from 'react';
import { FAQS } from '../data/airsensData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] border-t border-[#2A2F36]/50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
            <span>RESPUESTAS DIRECTAS & TRANSPARENCIA TÉCNICA</span>
          </div>
          <h2
            className="text-white font-heading font-bold tracking-tight text-balance"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Preguntas frecuentes
          </h2>
          <p className="text-[#A7AEB8] text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Información clave sobre nuestra cobertura operativa, certificaciones y canales de contacto directo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14181D] border-[#2E7DFF]/70 shadow-[0_8px_24px_rgba(46,125,255,0.12)]'
                    : 'bg-[#14181D]/60 border-[#2A2F36] hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7DFF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#2E7DFF] text-white' : 'bg-white/5 text-[#A7AEB8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#A7AEB8] leading-relaxed border-t border-[#2A2F36]/60 animate-in-view">
                    <p className="font-normal">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
