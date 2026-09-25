import React from 'react';
import LogoLoop, { LogoItem } from './LogoLoop';

export interface ClientBrand {
  name: string;
  tagline: string;
  industry: string;
  svg: React.ReactNode;
}

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    name: 'Warner Bros',
    tagline: 'Corporativo & Estudios',
    industry: 'Broadcast / Entretenimiento',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Gold Shield with Stepped Shoulders */}
        <path
          d="M50 7.5 C60 9.5 70 14 74 16.5 L74 21.5 L79 23 L79 29.5 L88 34.5 C88 56 73 78 50 94.5 C27 78 12 56 12 34.5 L21 29.5 L21 23 L26 21.5 L26 16.5 C30 14 40 9.5 50 7.5 Z"
          fill="#F5B81C"
        />
        {/* Inner Deep Blue Shield */}
        <path
          d="M50 12.5 C58 14 65 18 69 20 L69 24.5 L74 26 L74 31.5 L82 36 C82 53.5 69 73 50 87.5 C31 73 18 53.5 18 36 L26 31.5 L26 26 L31 24.5 L31 20 C35 18 42 14 50 12.5 Z"
          fill="#1C2D80"
        />
        {/* Stylized WB Gold Monogram */}
        {/* Left 'W' Diagonal 1 */}
        <path
          d="M22.5 37.5 L27 35.5 C29 44 33 55 35 62 L39 60.5 L33 30.5 L38 28.5 L43 53 L45 52 L44 26.5 L49 25.5 L50 74 L45 74 L42 59 L40 60.5 L36 71 L31 72 C28 62 24.5 49 22.5 37.5 Z"
          fill="#F5B81C"
        />
        {/* 'B' Right Lobes */}
        <path
          d="M50 25.5 H60 C68 25.5 73.5 31.5 73.5 38.5 C73.5 44 69.5 48.5 63 50 C71 52 75.5 57.5 75.5 64.5 C75.5 71.5 69.5 74 60 74 H50 V25.5 Z M55 31 V46 H59.5 C64 46 67.5 43 67.5 38.5 C67.5 34 64 31 59.5 31 H55 Z M55 51 V68.5 H60 C65 68.5 69.5 65.5 69.5 60 C69.5 54.5 65 51 60 51 H55 Z"
          fill="#F5B81C"
        />
      </svg>
    ),
  },
  {
    name: 'Chilevisión',
    tagline: 'Planta Transmisión Broadcast',
    industry: 'Televisión & Medios',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Top: Stylized Angled Crest & Horizontal Brow */}
        <path d="M46 10 L72 29.5 V38 H28 V29.5 H60.5 L46 18.5 Z" />
        {/* Middle: Eyes (Two Horizontal Blocks) */}
        <path d="M28 47.5 H45.5 V56 H28 Z M54.5 47.5 H72 V56 H54.5 Z" />
        {/* Bottom: Wide Semicircular Smile */}
        <path d="M28 65.5 A22 22 0 0 0 72 65.5 H63.5 A13.5 13.5 0 0 1 36.5 65.5 Z" />
      </svg>
    ),
  },
  {
    name: 'Agrosuper',
    tagline: 'Plantas Agroindustriales',
    industry: 'Alimentos & Faenadoras',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 12c-18 0-32 14-32 32 0 24 32 44 32 44s32-20 32-44c0-18-14-32-32-32zm0 46c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z" />
        <path d="M50 20v24l16 8" fill="none" stroke="#0B0D10" strokeWidth="4" />
      </svg>
    ),
  },
  {
    name: 'Sopraval',
    tagline: 'Cámaras y Frigoríficos',
    industry: 'Procesamiento Avícola',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20 50a30 30 0 0 1 60 0c0 16-14 32-30 36-16-4-30-20-30-36z" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M38 48c0-8 5-14 12-14s12 6 12 14c0 10-12 16-12 16s-12-6-12-16z" />
      </svg>
    ),
  },
];

export const ClientLogosGrid: React.FC = () => {
  const logos: LogoItem[] = CLIENT_BRANDS.map((brand) => ({
    title: brand.name,
    node: (
      <div className="group flex items-center gap-4 py-4 px-6 rounded-2xl bg-[#14181D]/90 border border-[#2A2F36] hover:border-[#2E7DFF] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(46,125,255,0.2)] text-left cursor-default min-w-[280px] sm:min-w-[320px] backdrop-blur-md">
        {/* Logo Monocromático de alta fidelidad */}
        <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#A7AEB8] group-hover:text-[#2E7DFF] group-hover:bg-[#2E7DFF]/10 transition-colors duration-300 shrink-0">
          {brand.svg}
        </div>

        {/* Text Details */}
        <div className="flex flex-col min-w-0">
          <span className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-wider group-hover:text-white transition-colors truncate">
            {brand.name}
          </span>
          <span className="text-xs font-mono text-[#A7AEB8] group-hover:text-[#F5F6F7]/90 transition-colors truncate">
            {brand.tagline}
          </span>
          <span className="text-[10px] text-[#A7AEB8]/70 mt-0.5 truncate">
            {brand.industry}
          </span>
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full relative py-4 overflow-hidden">
      <LogoLoop
        logos={logos}
        speed={60}
        direction="left"
        gap={24}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#0B0D10"
        ariaLabel="Empresas y corporaciones que confían en Airsens"
      />
    </div>
  );
};
