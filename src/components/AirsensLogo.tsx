import React from 'react';

interface AirsensLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

/**
 * Airsens Brand Wordmark
 * Logo oficial en PNG (public/logos/airsens.png).
 */
export const AirsensLogo: React.FC<AirsensLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const sizeConfig = {
    sm: {
      logo: 'h-6',
      subGap: 'gap-2.5',
      subText: 'text-[10px]',
      subLabel: 'text-[8.5px]',
    },
    md: {
      logo: 'h-7 sm:h-9',
      subGap: 'gap-3',
      subText: 'text-[11px]',
      subLabel: 'text-[9.5px]',
    },
    lg: {
      logo: 'h-9 sm:h-12',
      subGap: 'gap-4',
      subText: 'text-xs',
      subLabel: 'text-[10px]',
    },
  }[size];

  return (
    <div className={`inline-flex items-center ${sizeConfig.subGap} select-none group ${className}`}>
      {/* Wordmark: logo oficial */}
      <img
        src="/logos/airsens.png"
        alt="Airsens"
        className={`${sizeConfig.logo} w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]`}
      />

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
