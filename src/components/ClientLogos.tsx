import React from 'react';
import LogoLoop, { LogoItem } from './LogoLoop';

const CLIENT_LOGOS: LogoItem[] = [
  { src: '/logos/clientes/warner-bros.png', alt: 'Warner Bros', title: 'Warner Bros' },
  { src: '/logos/clientes/chilevision.png', alt: 'Chilevisión', title: 'Chilevisión' },
  { src: '/logos/clientes/agrosuper.png', alt: 'Agrosuper', title: 'Agrosuper' },
  { src: '/logos/clientes/sopraval.png', alt: 'Sopraval', title: 'Sopraval' },
];

export const ClientLogosGrid: React.FC = () => {
  return (
    <div className="w-full relative py-4 overflow-hidden">
      <LogoLoop
        logos={CLIENT_LOGOS}
        speed={60}
        direction="left"
        logoHeight={72}
        gap={96}
        pauseOnHover={false}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#0B0D10"
        ariaLabel="Empresas y corporaciones que confían en Airsens"
      />
    </div>
  );
};
