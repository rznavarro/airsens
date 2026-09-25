import React, { useEffect, useRef } from 'react';
import { IMAGES, BUSINESS_INFO } from '../data/airsensData';
import { MessageSquare, PhoneCall, Mail, ShieldCheck, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser low-power mode; poster remains visible
      });
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Video / Image with Scrim Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.hero}
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <source src="/videos/hero-video.mp4.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
          <img
            src={IMAGES.hero}
            alt="airsens-hero-ingenieria-hvac-industrial.webp"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </video>
        {/* Measured Scrim Gradient for Contrast WCAG AA */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/60 via-[#0B0D10]/75 to-[#0B0D10]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0D10]/50 to-[#0B0D10]/95" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-6 sm:py-12 flex flex-col items-start">
        {/* H1 Headline */}
        <h1
          className="text-white font-heading font-bold text-left mb-4 sm:mb-6 text-balance max-w-5xl tracking-tight text-[36px] sm:text-[clamp(52px,8.5vw,130px)] leading-[0.96] sm:leading-[0.94]"
        >
          Ingeniería HVAC&R para Minería, Industria y Comercio
        </h1>

        {/* Subtitle */}
        <p className="text-[#A7AEB8] text-sm sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-6 sm:mb-10 text-balance">
          {BUSINESS_INFO.subheadline}
        </p>

        {/* CTAs Block */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto mb-6 sm:mb-8">
          {/* Primary CTA */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="cotizar"
            className="flex items-center justify-center gap-2.5 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-[#2E7DFF] hover:bg-[#2563EB] shadow-[0_0_24px_rgba(46,125,255,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
            <span>Solicitar cotización por WhatsApp</span>
          </a>

          {/* Secondary CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phoneMobileRaw}`}
            data-cursor="cotizar"
            className="flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3 sm:py-4 rounded-full text-xs sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7DFF]"
          >
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E7DFF] shrink-0" />
            <span>Hablar con un especialista</span>
          </a>

          {/* Tertiary Text CTA */}
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center justify-center sm:justify-start gap-2 px-3 py-1.5 text-xs sm:text-base font-medium text-[#A7AEB8] hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E7DFF] shrink-0" />
            <span>Enviar correo</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Bar with 3 verified facts */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 sm:pt-8 sm:border-t sm:border-white/15">
        {/* Mobile Compact High-Tech Strip (< sm) */}
        <div className="sm:hidden grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-left">
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold text-white tracking-wide leading-none">
              16 AÑOS
            </span>
            <span className="text-[10px] text-[#A7AEB8] font-light mt-1 leading-tight">
              Continuidad 24/7
            </span>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-2">
            <span className="text-lg font-heading font-bold text-white tracking-wide leading-none">
              2.980+
            </span>
            <span className="text-[10px] text-[#A7AEB8] font-light mt-1 leading-tight">
              Proyectos
            </span>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-2">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7DFF] shrink-0" />
              <span className="text-lg font-heading font-bold text-white tracking-wide leading-none">
                TRIPLE ISO
              </span>
            </div>
            <span className="text-[10px] text-[#A7AEB8] font-light mt-1 leading-tight truncate">
              9001·14001·45001
            </span>
          </div>
        </div>

        {/* Desktop Grid Layout (sm and up - 100% identical to original desktop) */}
        <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8 text-left">
          {/* Fact 1 */}
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
              16 AÑOS
            </span>
            <span className="text-xs sm:text-sm text-[#A7AEB8] font-light mt-1">
              Continuidad operativa ininterrumpida en Chile
            </span>
          </div>

          {/* Fact 2 */}
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
              2.980 PROYECTOS
            </span>
            <span className="text-xs sm:text-sm text-[#A7AEB8] font-light mt-1">
              Completados en minería, industria y comercio
            </span>
          </div>

          {/* Fact 3 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2E7DFF]" />
              <span className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
                ISO 9001 · 14001 · 45001
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#A7AEB8] font-light mt-1">
              Calidad, medio ambiente y seguridad certificados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
