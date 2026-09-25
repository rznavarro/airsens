import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { BUSINESS_INFO } from '../data/airsensData';
import { X, MapPin, Building2, Wrench, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const quoteMessage = `Hola Airsens, me interesa cotizar un proyecto similar a "${project.title}" para mi empresa.`;
  const whatsappUrl = `https://wa.me/56975746747?text=${encodeURIComponent(quoteMessage)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in-view overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#14181D] border border-[#2A2F36] rounded-3xl overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0B0D10]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.alt}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/images/climatizacion_rooftop_1790194287573.jpg';
              }}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#14181D]">
              <span className="text-xs font-mono text-[#A7AEB8]">Registro fotográfico oficial</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14181D] via-[#14181D]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar ficha de proyecto"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#0B0D10]/80 text-white hover:bg-[#2E7DFF] transition-colors border border-white/20 backdrop-blur-md z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight leading-snug"
            >
              {project.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A7AEB8] mt-3">
              {project.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2E7DFF]" />
                  <span>{project.location}</span>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#2E7DFF]" />
                <span>Sector: {project.industryLabel || 'Industrial / Comercial'}</span>
              </span>
            </div>
          </div>

          {/* Engineering Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Challenge */}
            <div className="p-4 rounded-2xl bg-[#0B0D10] border border-[#2A2F36]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Desafío de Ingeniería</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A7AEB8] leading-relaxed">
                {project.challenge ||
                  'Continuidad operativa ininterrumpida bajo condiciones térmicas de alta exigencia y cumplimiento de estrictos estándares normativos.'}
              </p>
            </div>

            {/* Solution */}
            <div className="p-4 rounded-2xl bg-[#0B0D10] border border-[#2A2F36]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Solución & Ejecución Airsens</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A7AEB8] leading-relaxed">
                {project.solution ||
                  'Suministro, montaje especializado y comisionamiento técnico con trazabilidad y garantía de servicio.'}
              </p>
            </div>
          </div>

          {/* Equipment Tags */}
          {project.equipment && project.equipment.length > 0 && (
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2E7DFF] font-semibold block mb-2">
                Equipamiento & Tecnologías Clave:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.equipment.map((eq) => (
                  <span
                    key={eq}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white"
                  >
                    <Wrench className="w-3 h-3 text-[#2E7DFF]" />
                    <span>{eq}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#2A2F36] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#A7AEB8]">
              Obra documentada en los 2.980 proyectos completados por Airsens.
            </span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Cotizar proyecto similar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
