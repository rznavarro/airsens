import React from 'react';
import { BUSINESS_INFO } from '../data/airsensData';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <aside aria-label="Contacto flotante" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="cotizar"
          className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-[0_8px_28px_rgba(37,211,102,0.45)] hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Cotizar por WhatsApp con Airsens"
        >
          <MessageSquare className="w-5 h-5 fill-white text-white" />
          <span className="tracking-wide">Cotizar por WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Bar (2 buttons: WhatsApp and Llamar) */}
      <aside
        aria-label="Contacto móvil"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0D10]/92 backdrop-blur-2xl border-t border-white/10 px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgba(0,0,0,0.8)]"
      >
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Button 1: WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
            <span className="truncate">WhatsApp 24/7</span>
          </a>

          {/* Button 2: Llamar */}
          <a
            href={`tel:${BUSINESS_INFO.phoneMobileRaw}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#2E7DFF] hover:bg-[#2563EB] text-white font-bold text-xs shadow-[0_4px_16px_rgba(46,125,255,0.35)] active:scale-95 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">Llamar Ahora</span>
          </a>
        </div>
      </aside>
    </>
  );
};
