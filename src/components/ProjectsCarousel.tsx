import React, { useRef, useState } from 'react';
import { PROJECTS } from '../data/airsensData';
import { ProjectItem } from '../types';
import { ChevronLeft, ChevronRight, MapPin, Building2, Wrench, ArrowUpRight } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

const CATEGORY_TABS = [
  { id: 'todos', label: 'Todos los Proyectos', count: 13 },
  { id: 'mineria', label: 'Minería e Industria', count: 2 },
  { id: 'agroalimentos', label: 'Agroalimentos & Frío', count: 4 },
  { id: 'broadcast', label: 'Broadcast & Telecom', count: 3 },
  { id: 'comercial', label: 'Comercial & Edificios', count: 4 },
];

export const ProjectsCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = selectedCategory === 'todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    const index = Math.round(scrollLeft / 360);
    setActiveIndex(Math.min(Math.max(index, 0), filteredProjects.length - 1));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="proyectos"
      className="relative py-24 sm:py-32 bg-[#0B0D10] border-t border-[#2A2F36]/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
              <span>OBRAS Y EJECUCIONES EN TERRENO</span>
            </div>
            <h2
              className="text-white font-heading font-bold text-left tracking-tight text-balance"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Proyectos que respaldan nuestra experiencia
            </h2>
            <p className="text-[#A7AEB8] text-sm sm:text-base mt-3 max-w-2xl font-normal leading-relaxed">
              13 obras de referencia con presencia en instalaciones críticas mineras, plantas agroindustriales, cadenas de televisión y centros de datos en Chile.
            </p>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs font-mono text-[#A7AEB8] mr-2 tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Proyecto anterior"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Proyecto siguiente"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-[#2E7DFF] hover:border-[#2E7DFF] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex items-center gap-2 pt-6 sm:pt-8 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedCategory(tab.id);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              className={`flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === tab.id
                  ? 'bg-[#2E7DFF] text-white shadow-[0_0_16px_rgba(46,125,255,0.4)]'
                  : 'bg-white/5 text-[#A7AEB8] hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === tab.id ? 'bg-black/25 text-white' : 'bg-white/10 text-[#A7AEB8]'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-smooth snap-x snap-mandatory pb-8 pt-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="flex-shrink-0 w-[84vw] max-w-[340px] sm:w-[380px] snap-center group rounded-3xl bg-[#14181D] border border-[#2A2F36] hover:border-[#2E7DFF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(46,125,255,0.2)] cursor-pointer"
          >
            {/* Photographic Image Container */}
            <div className="relative aspect-[16/10] bg-[#0E1116] overflow-hidden border-b border-[#2A2F36]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/climatizacion_rooftop_1790194287573.jpg';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full bg-[#0E1217] flex items-center justify-center">
                  <span className="text-xs text-[#A7AEB8]">Registro Airsens</span>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14181D] via-[#14181D]/40 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#2E7DFF] text-white shadow-md">
                  OBRA {String(project.id).padStart(2, '0')}
                </span>
              </div>

              {project.client && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] font-semibold text-white bg-[#0B0D10]/85 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                  <Building2 className="w-3 h-3 text-[#2E7DFF]" />
                  <span>{project.client}</span>
                </div>
              )}

              {/* Hover Quick Action Indicator */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-semibold text-white bg-[#2E7DFF] px-2.5 py-1 rounded-full shadow-lg">
                <span>Ver ficha</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#2E7DFF] font-semibold mb-2">
                  {project.industryLabel || project.category}
                </p>
                <h3 className="text-lg font-heading font-bold text-white tracking-wide leading-snug group-hover:text-[#2E7DFF] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Technical Equipment Pills */}
              {project.equipment && project.equipment.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.equipment.slice(0, 2).map((eq) => (
                    <span
                      key={eq}
                      className="text-[10px] font-medium text-[#A7AEB8] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md line-clamp-1"
                    >
                      {eq}
                    </span>
                  ))}
                  {project.equipment.length > 2 && (
                    <span className="text-[10px] font-medium text-[#2E7DFF] bg-[#2E7DFF]/10 px-1.5 py-0.5 rounded-md">
                      +{project.equipment.length - 2}
                    </span>
                  )}
                </div>
              )}

              {/* Card Footer: Location & Action */}
              <div className="pt-4 mt-4 border-t border-[#2A2F36]/60 flex items-center justify-between text-xs text-[#A7AEB8]">
                {project.location ? (
                  <span className="flex items-center gap-1.5 line-clamp-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2E7DFF] flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </span>
                ) : (
                  <span>Chile</span>
                )}

                <span className="text-[#2E7DFF] font-medium group-hover:underline text-[11px] flex-shrink-0 ml-2">
                  Detalles técnicos →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Guidance */}
      <div className="flex sm:hidden items-center justify-center gap-2 mt-4 text-xs text-[#A7AEB8]">
        <span>← Desliza horizontalmente para explorar las obras →</span>
      </div>

      {/* Technical Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
