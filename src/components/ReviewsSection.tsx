import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/airsensData';
import { ReviewItem } from '../types';
import { ChevronLeft, ChevronRight, ExternalLink, MessageSquarePlus, Star, ChevronDown, ChevronUp } from 'lucide-react';

export const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC04"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Cards per view: 3 on desktop, 2 on tablet, 1 on mobile
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, GOOGLE_REVIEWS.length - cardsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay on desktop (>=1024px) every 6s, pauses on mouse hover
  useEffect(() => {
    if (cardsPerView < 3 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [cardsPerView, isPaused, nextSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Number of pages for indicator dots
  const totalPages = maxIndex + 1;

  return (
    <section
      id="resenas"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Reseñas verificadas de clientes en Google"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] border-t border-[#2A2F36]/50 overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-6xl mx-auto">
        {/* 1. Resumen de Calificación (Encabezado) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
              <span>OPINIONES VERIFICADAS EN GOOGLE</span>
            </div>
            <h2
              className="text-white font-heading font-bold text-left tracking-tight text-balance"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-[#A7AEB8] text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Testimonios reales y sin alteraciones registrados directamente en el perfil comercial de Google.
            </p>
          </div>

          {/* Rating Summary Card & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-[#14181D] p-5 sm:p-6 rounded-2xl border border-[#2A2F36]">
            {/* Google Icon & Large Rating */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="text-4xl font-heading font-bold text-white tabular-nums leading-none">
                    4,6
                  </span>
                  {/* 5 Stars with 5th star at 60% partial fill */}
                  <div className="flex items-center gap-1 text-[#FBBC04]" aria-label="Calificación 4,6 de 5 estrellas">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {/* 5th Star: 60% Linear Gradient */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                      <defs>
                        <linearGradient id="star-partial-60" x1="0" x2="100%" y1="0" y2="0">
                          <stop offset="60%" stopColor="#FBBC04" />
                          <stop offset="60%" stopColor="#2A2F36" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star-partial-60)"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs text-[#A7AEB8] mt-1 font-medium">
                  Basado en 18 reseñas de Google
                </span>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-3 sm:pt-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-[#2A2F36]">
              {/* Secondary button: Ver todas las reseñas */}
              <a
                href={BUSINESS_INFO.googleRating.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all hover:border-[#2E7DFF] text-nowrap shadow-sm"
              >
                <span>Ver todas las reseñas en Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2E7DFF]" />
              </a>

              {/* Tertiary button: Dejar una reseña */}
              <a
                href={BUSINESS_INFO.googleRating.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-[#A7AEB8] hover:text-white hover:bg-white/5 transition-colors text-nowrap"
              >
                <MessageSquarePlus className="w-3.5 h-3.5 text-[#2E7DFF]" />
                <span>Dejar una reseña</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView + (cardsPerView > 1 ? 1.5 : 0))}%)`,
              }}
            >
              {GOOGLE_REVIEWS.map((review, idx) => {
                const isExpanded = expandedMap[review.id];
                const initialLetter = review.name.trim().charAt(0).toUpperCase();

                // Compute if text is long (> 160 chars or multiple newlines)
                const isLongText = review.text.length > 160 || (review.text.match(/\n/g) || []).length >= 2;

                return (
                  <div
                    key={review.id}
                    className={`flex-shrink-0 transition-all duration-300 ${
                      cardsPerView === 3
                        ? 'w-[calc((100%-48px)/3)]'
                        : cardsPerView === 2
                        ? 'w-[calc((100%-24px)/2)]'
                        : 'w-[85vw] sm:w-[90%]'
                    }`}
                  >
                    <div className="relative h-full flex flex-col justify-between bg-[#14181D] border border-[#2A2F36] hover:border-[#2E7DFF] hover:-translate-y-1 rounded-[20px] p-7 transition-all duration-300 shadow-xl group">
                      {/* Decorative Quotation Mark in Corner */}
                      <span
                        className="absolute top-4 right-6 text-5xl font-serif text-[#2E7DFF]/25 leading-none select-none pointer-events-none group-hover:text-[#2E7DFF]/40 transition-colors"
                        aria-hidden="true"
                      >
                        “
                      </span>

                      {/* Top: Avatar, Name & Stars */}
                      <div>
                        <div className="flex items-start gap-3.5 mb-4">
                          {/* Circular Avatar 44px (No fake faces, initial only) */}
                          <div className="w-[44px] h-[44px] rounded-full bg-[#2E7DFF] text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-[0_0_12px_rgba(46,125,255,0.35)]">
                            {initialLetter}
                          </div>

                          <div className="flex flex-col pr-8">
                            <h3 className="font-sans font-semibold text-[16px] text-[#F5F6F7] leading-tight">
                              {review.name}
                            </h3>

                            {/* Local Guide Badge */}
                            {review.badge && (
                              <span className="text-[11px] font-medium text-[#A7AEB8] mt-0.5">
                                {review.badge}
                              </span>
                            )}

                            {/* 5 Stars in #FBBC04 + Time Ago in #A7AEB8 */}
                            <div className="flex items-center gap-2 mt-1.5">
                              <div className="flex items-center gap-0.5 text-[#FBBC04]" aria-label="5 de 5 estrellas">
                                {[...Array(review.stars)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className="w-3.5 h-3.5"
                                    viewBox="0 0 24 24"
                                    fill="#FBBC04"
                                    aria-hidden="true"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-[12px] text-[#A7AEB8] font-normal">
                                {review.timeAgo}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Review Exact Literal Text */}
                        <div className="text-[15px] leading-[1.6] text-[#F5F6F7]/90 font-normal whitespace-pre-line mb-3">
                          <p className={!isExpanded && isLongText ? 'line-clamp-5' : ''}>
                            {review.text}
                          </p>
                        </div>

                        {/* Expandable toggle if exceeds lines */}
                        {isLongText && (
                          <button
                            onClick={() => toggleExpand(review.id)}
                            className="text-xs font-semibold text-[#2E7DFF] hover:text-white transition-colors flex items-center gap-1 mb-2"
                          >
                            <span>{isExpanded ? 'Leer menos' : 'Leer más'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}

                        {/* Positive Aspects & Services tags if available */}
                        {review.positiveAspects && review.positiveAspects.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-[#2A2F36]/60 text-xs">
                            <span className="text-[11px] font-semibold text-[#A7AEB8] block mb-1">
                              Aspectos positivos:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {review.positiveAspects.map((aspect, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/90"
                                >
                                  {aspect}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {review.services && (
                          <div className="mt-2 text-xs text-[#A7AEB8]">
                            <span className="font-semibold text-white/80">Servicios: </span>
                            <span className="text-white/70">{review.services}</span>
                          </div>
                        )}

                        {/* Owner Response if available */}
                        {review.ownerResponse && (
                          <div className="mt-3 p-3 rounded-xl bg-[#0B0D10] border-l-2 border-[#2E7DFF] text-xs">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-white text-[11px]">
                                Respuesta del propietario
                              </span>
                              <span className="text-[10px] text-[#A7AEB8]">
                                {review.ownerResponse.timeAgo}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#A7AEB8] leading-relaxed">
                              {review.ownerResponse.text}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Card Footer: Small Google Icon + "Reseña de Google" */}
                      <div className="pt-4 mt-2 border-t border-[#2A2F36] flex items-center justify-between text-xs text-[#A7AEB8]">
                        <div className="flex items-center gap-2">
                          <GoogleIcon className="w-4 h-4" />
                          <span className="font-medium text-[12px]">Reseña de Google</span>
                        </div>
                        {review.featured && (
                          <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#2E7DFF] bg-[#2E7DFF]/10 px-2 py-0.5 rounded-full border border-[#2E7DFF]/30">
                            Destacada
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls (Arrows & Dots) */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#2A2F36]/60">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Ir a la diapositiva ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx
                      ? 'w-8 bg-[#2E7DFF]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#A7AEB8] mr-2 hidden sm:inline-block tabular-nums">
                {String(currentIndex + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </span>

              <button
                onClick={prevSlide}
                aria-label="Reseña anterior"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7DFF]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Siguiente reseña"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#2E7DFF] hover:border-[#2E7DFF] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
