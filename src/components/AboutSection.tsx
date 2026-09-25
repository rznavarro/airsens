import React, { useState, useEffect, useRef } from 'react';
import { IMAGES, BUSINESS_INFO } from '../data/airsensData';
import { ShieldCheck, CheckCircle2, Award, Users, HardHat } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [countYears, setCountYears] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countPartners, setCountPartners] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCountYears(Math.floor(easeOut * BUSINESS_INFO.stats.yearsExperience));
            setCountProjects(Math.floor(easeOut * BUSINESS_INFO.stats.completedProjects));
            setCountPartners(Math.floor(easeOut * BUSINESS_INFO.stats.commercialPartners));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCountYears(BUSINESS_INFO.stats.yearsExperience);
              setCountProjects(BUSINESS_INFO.stats.completedProjects);
              setCountPartners(BUSINESS_INFO.stats.commercialPartners);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] border-t border-[#2A2F36]/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Lead Tag */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
          <span>QUIÉNES SOMOS · COMPROMISO OPERATIVO 24/7</span>
        </div>

        {/* Grid Layout: Image 4:5 on Left/Right, Content on other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Vertical 4:5 Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#2A2F36] bg-[#14181D]">
              <img
                src={IMAGES.technician}
                alt="airsens-tecnico-especialista.webp"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge at Bottom of Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#14181D]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2E7DFF]/20 flex items-center justify-center text-[#2E7DFF]">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Especialistas Técnicos Calificados</p>
                    <p className="text-[11px] text-[#A7AEB8]">Ingeniería en terreno con certificación ISO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative blue glow */}
            <div className="absolute -inset-4 bg-[#2E7DFF]/10 rounded-3xl blur-2xl -z-10 opacity-50" />
          </div>

          {/* Text and Numbers Content */}
          <div className="lg:col-span-7 flex flex-col">
            <h2
              className="text-white font-heading font-bold text-left mb-6 tracking-tight text-balance"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Tu operación no se detiene. Nosotros nos encargamos.
            </h2>

            {/* Visible first paragraph for GEO & AI search grounding */}
            <p className="text-white font-medium text-base sm:text-lg leading-relaxed mb-4 text-balance">
              Airsens es una empresa chilena de ingeniería HVAC&R con 16 años de experiencia, especializada en climatización, refrigeración, electricidad y salas técnicas para minería, industria y comercio, con certificación ISO 9001, 14001 y 45001.
            </p>

            {/* Second core paragraph */}
            <p className="text-[#A7AEB8] text-base leading-relaxed mb-10 font-normal">
              Somos el aliado técnico que asegura que tu operación nunca se detenga. Diseñamos, mantenemos y optimizamos climatización, electricidad y sistemas críticos para minería, industria, comercio y residencias en todo Chile, con un equipo de profesionales altamente calificados y un servicio técnico ágil y preventivo.
            </p>

            {/* Animated Counters with Inter 200 */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-white/15 mb-10">
              <div className="flex flex-col">
                <span
                  className="font-light text-white tracking-tight tabular-nums"
                  style={{ fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1, fontFamily: 'Inter', fontWeight: 200 }}
                >
                  {countYears}
                </span>
                <span className="text-xs sm:text-sm text-[#A7AEB8] font-medium mt-2">
                  Años de experiencia
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  className="font-light text-white tracking-tight tabular-nums"
                  style={{ fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1, fontFamily: 'Inter', fontWeight: 200 }}
                >
                  {countProjects.toLocaleString('es-CL')}
                </span>
                <span className="text-xs sm:text-sm text-[#A7AEB8] font-medium mt-2">
                  Proyectos completados
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  className="font-light text-white tracking-tight tabular-nums"
                  style={{ fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1, fontFamily: 'Inter', fontWeight: 200 }}
                >
                  {countPartners}
                </span>
                <span className="text-xs sm:text-sm text-[#A7AEB8] font-medium mt-2">
                  Socios comerciales
                </span>
              </div>
            </div>

            {/* Formato "Dato → Valor" */}
            <div className="flex flex-col divide-y divide-white/10">
              <div className="flex items-center justify-between py-3 text-sm">
                <span className="font-semibold text-white">Cobertura</span>
                <span className="text-[#A7AEB8]">Minería, industria, comercio y residencias en todo Chile</span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <span className="font-semibold text-white">Certificaciones</span>
                <span className="text-[#2E7DFF] font-medium">ISO 9001 · ISO 14001 · ISO 45001</span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <span className="font-semibold text-white">Reputación Google</span>
                <span className="text-white">4,6 ★ (18 reseñas verificadas)</span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <span className="font-semibold text-white">Sede Central</span>
                <span className="text-[#A7AEB8]">Av. Pedro de Valdivia 5453, Ñuñoa, Santiago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
