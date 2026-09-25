import React from 'react';
import { IMAGES, CLIENTS, BUSINESS_INFO } from '../data/airsensData';
import { ShieldCheck, Star, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { ClientLogosGrid } from './ClientLogos';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="confianza"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0D10] border-t border-[#2A2F36]/50"
    >
      {/* Background Image with Dark Scrim */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={IMAGES.certificationsBg}
          alt="airsens-certificaciones-fondo.webp"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10] via-[#0B0D10]/85 to-[#0B0D10]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
            <span>ESTÁNDARES INTERNACIONALES DE GESTIÓN</span>
          </div>
          <h2
            className="text-white font-heading font-bold tracking-tight text-balance"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Calidad, seguridad y medio ambiente certificados
          </h2>
          <p className="text-[#A7AEB8] text-sm sm:text-base mt-4 font-normal max-w-2xl mx-auto leading-relaxed">
            Nuestros procesos de ingeniería, montaje y mantenimiento operan bajo una estricta triple certificación internacional para mitigar riesgos en instalaciones de alta criticidad.
          </p>
        </div>

        {/* 3 Large ISO Badges in Row with Official Seals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* ISO 9001 */}
          <div className="p-8 rounded-3xl bg-[#14181D]/90 backdrop-blur-xl border border-[#2A2F36] hover:border-[#2E7DFF] transition-all flex flex-col items-center text-center group shadow-xl hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(46,125,255,0.2)]">
            <div className="relative w-28 h-28 rounded-2xl p-2 bg-[#0B0D10] border border-[#2A2F36] group-hover:border-[#2E7DFF]/50 flex items-center justify-center mb-6 shadow-inner transition-all group-hover:scale-105">
              <img
                src={IMAGES.iso9001}
                alt="Certificado ISO 9001:2015 Gestión de la Calidad Airsens"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-2xl bg-[#2E7DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <span className="text-[11px] font-mono font-semibold tracking-widest text-[#2E7DFF] uppercase mb-1">
              GESTIÓN DE LA CALIDAD
            </span>
            <h3 className="text-3xl font-heading font-bold text-white tracking-wide mb-1">
              ISO 9001:2015
            </h3>
            <span className="text-xs font-semibold text-white/90 mb-3 px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
              Excelencia en Procesos de Ingeniería
            </span>
            <p className="text-xs text-[#A7AEB8] leading-relaxed">
              Estandarización rigurosa de procesos de diseño, procura de equipamiento industrial, montaje en terreno y postventa garantizada.
            </p>
          </div>

          {/* ISO 14001 */}
          <div className="p-8 rounded-3xl bg-[#14181D]/90 backdrop-blur-xl border border-[#2A2F36] hover:border-[#2E7DFF] transition-all flex flex-col items-center text-center group shadow-xl hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(46,125,255,0.2)]">
            <div className="relative w-28 h-28 rounded-2xl p-2 bg-[#0B0D10] border border-[#2A2F36] group-hover:border-[#2E7DFF]/50 flex items-center justify-center mb-6 shadow-inner transition-all group-hover:scale-105">
              <img
                src={IMAGES.iso14001}
                alt="Certificado ISO 14001:2015 Gestión Ambiental Airsens"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-2xl bg-[#2E7DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <span className="text-[11px] font-mono font-semibold tracking-widest text-[#2E7DFF] uppercase mb-1">
              GESTIÓN AMBIENTAL
            </span>
            <h3 className="text-3xl font-heading font-bold text-white tracking-wide mb-1">
              ISO 14001:2015
            </h3>
            <span className="text-xs font-semibold text-white/90 mb-3 px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
              Sostenibilidad y Eficiencia Energética
            </span>
            <p className="text-xs text-[#A7AEB8] leading-relaxed">
              Protocolos de mitigación de huella de carbono, recuperación responsable de gases refrigerantes y proyectos con tecnología inverter de alta eficiencia.
            </p>
          </div>

          {/* ISO 45001 */}
          <div className="p-8 rounded-3xl bg-[#14181D]/90 backdrop-blur-xl border border-[#2A2F36] hover:border-[#2E7DFF] transition-all flex flex-col items-center text-center group shadow-xl hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(46,125,255,0.2)]">
            <div className="relative w-28 h-28 rounded-2xl p-2 bg-[#0B0D10] border border-[#2A2F36] group-hover:border-[#2E7DFF]/50 flex items-center justify-center mb-6 shadow-inner transition-all group-hover:scale-105">
              <img
                src={IMAGES.iso45001}
                alt="Certificado ISO 45001:2018 Seguridad y Salud en el Trabajo Airsens"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-2xl bg-[#2E7DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <span className="text-[11px] font-mono font-semibold tracking-widest text-[#2E7DFF] uppercase mb-1">
              SEGURIDAD Y SALUD OCUPACIONAL
            </span>
            <h3 className="text-3xl font-heading font-bold text-white tracking-wide mb-1">
              ISO 45001:2018
            </h3>
            <span className="text-xs font-semibold text-white/90 mb-3 px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
              Cero Accidentes en Faena Minera
            </span>
            <p className="text-xs text-[#A7AEB8] leading-relaxed">
              Estándares de prevención activa, análisis de riesgos en caliente y maniobras de izaje para faenas mineras e industriales de alta criticidad en Chile.
            </p>
          </div>
        </div>

        {/* Google Reviews Block */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#14181D]/75 backdrop-blur-md border border-[#2A2F36] flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-heading font-bold text-white">4,6 ★ en Google</span>
                <span className="text-white/40">·</span>
                <span className="text-sm text-[#A7AEB8] font-medium">18 reseñas</span>
              </div>
              <p className="text-xs text-[#A7AEB8] mt-0.5">
                Calificación promedio verificada de clientes corporativos e industriales.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#resenas"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#2E7DFF] hover:bg-[#2563EB] transition-colors"
            >
              <span>Ver opiniones de clientes (4,6 ★)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.googleRating.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium text-white/90 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-colors"
            >
              <span>Ficha oficial en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2E7DFF]" />
            </a>
          </div>
        </div>

        {/* Franja de Clientes con Logos Vectoriales Monocromáticos */}
        <div className="pt-6">
          <div className="text-center mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-[#2E7DFF] font-semibold mb-2">
              SOCIOS COMERCIALES & CLIENTES ESTRATÉGICOS
            </p>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
              Empresas y corporaciones que confían en Airsens
            </h3>
            <p className="text-xs sm:text-sm text-[#A7AEB8] mt-1">
              Operación continua en faenadoras de alimentos, agroindustria y cadenas de televisión y broadcast.
            </p>
          </div>

          <ClientLogosGrid />
        </div>
      </div>
    </section>
  );
};
