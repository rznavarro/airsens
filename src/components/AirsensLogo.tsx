import React from 'react';

interface AirsensLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

/**
 * Airsens Brand Wordmark
 * Clean, bold, modern typography ("airsens" in lowercase)
 * Designed for high legibility, balanced geometry and a premium engineering aesthetic.
 */
export const AirsensLogo: React.FC<AirsensLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const sizeConfig = {
    sm: {
      text: 'text-2xl tracking-[-0.045em]',
      subGap: 'gap-2.5',
      subText: 'text-[10px]',
      subLabel: 'text-[8.5px]',
    },
    md: {
      text: 'text-3xl sm:text-4xl tracking-[-0.045em]',
      subGap: 'gap-3',
      subText: 'text-[11px]',
      subLabel: 'text-[9.5px]',
    },
    lg: {
      text: 'text-4xl sm:text-5xl tracking-[-0.05em]',
      subGap: 'gap-4',
      subText: 'text-xs',
      subLabel: 'text-[10px]',
    },
  }[size];

  return (
    <div className={`inline-flex items-center ${sizeConfig.subGap} select-none group ${className}`}>
      {/* Wordmark: pure "airsens" typography */}
      <span
        className={`${sizeConfig.text} font-sans font-black text-white lowercase leading-none transition-all duration-200 group-hover:text-blue-50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]`}
      >
        airsens
      </span>

      {/* Subtitle tag (HVAC&R Ingeniería) when enabled */}
      {showSubtitle && (
        <div className="flex flex-col border-l border-white/20 pl-2.5 sm:pl-3 justify-center">
          <span className={`${sizeConfig.subText} font-mono font-bold tracking-widest text-[#2E7DFF] uppercase leading-none`}>
            HVAC&R
          </span>
          <span className={`${sizeConfig.subLabel} font-mono text-[#A7AEB8] tracking-wider uppercase leading-tight mt-1`}>
            Ingeniería
          </span>
        </div>
      )}
    </div>
  );
};
