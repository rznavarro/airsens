import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch device or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isCTA = target.closest('[data-cursor="cotizar"], a[href*="wa.me"], a[href*="tel:"], button[type="submit"]');
        setIsHoveringCTA(!!isCTA);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const smoothFollower = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(smoothFollower);
    };
    animationFrameId = requestAnimationFrame(smoothFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* 10px Center Dot */}
      <div
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* 34px Smooth Follower Ring */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-[2px] transition-[width,height,transform,border-color,background-color] duration-200 ease-out ${
          isHoveringCTA
            ? 'w-[74px] h-[74px] border-[#2E7DFF] bg-[#2E7DFF]/25 -translate-x-1/2 -translate-y-1/2 scale-[1.15]'
            : 'w-[34px] h-[34px] -translate-x-1/2 -translate-y-1/2 scale-100'
        }`}
        style={{
          transform: `translate3d(${followerPos.x}px, ${followerPos.y}px, 0) translate(-50%, -50%) ${
            isHoveringCTA ? 'scale(1.15)' : 'scale(1)'
          }`,
        }}
      >
        {isHoveringCTA && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white select-none animate-in-view">
            Cotizar
          </span>
        )}
      </div>
    </div>
  );
};
