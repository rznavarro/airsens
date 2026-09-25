import React, { useState, useEffect, useRef } from 'react';
import { IMAGES, BUSINESS_INFO, SERVICES } from '../data/airsensData';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send, CheckCircle2, Star, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState(SERVICES[0].title);
  const [submitted, setSubmitted] = useState(false);

  // Lazy load Google Maps iframe
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim()) return;

    const message = `Hola Airsens, soy ${nombre.trim()}, necesito cotizar ${servicio}. Mi teléfono es ${telefono.trim()}.`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/56975746747?text=${encoded}`;

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0D10] border-t border-[#2A2F36]/50"
    >
      {/* Background Image with Dark Scrim */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={IMAGES.contactBg}
          alt="airsens-contacto-planta-nocturna.webp"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10] via-[#0B0D10]/90 to-[#0B0D10]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                <span>ATENCIÓN TÉCNICA INMEDIATA</span>
              </div>
              <h2
                className="text-white font-heading font-bold text-left tracking-tight mb-4 text-balance"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Tu operación no puede detenerse. Nosotros tampoco.
              </h2>
              <p className="text-[#A7AEB8] text-base mb-8 leading-relaxed">
                Cuéntanos qué necesitas y un especialista técnico te contactará a la brevedad.
              </p>

              {/* Contact Data Rows */}
              <div className="flex flex-col gap-5 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2E7DFF] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A7AEB8] font-medium block">
                      Dirección
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {BUSINESS_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2E7DFF] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A7AEB8] font-medium block">
                      Teléfono Fijo
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneLandlineRaw}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#2E7DFF] transition-colors"
                    >
                      {BUSINESS_INFO.phoneLandline}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A7AEB8] font-medium block">
                      WhatsApp / Móvil
                    </span>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#25D366] transition-colors"
                    >
                      {BUSINESS_INFO.phoneMobile}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2E7DFF] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A7AEB8] font-medium block">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#2E7DFF] transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Schedule (Verified from Google Business) */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2E7DFF] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wider text-[#A7AEB8] font-medium">
                        Horario de Atención
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Abierto ahora
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Lun a Jue: 09:00 – 18:00 hrs <span className="text-[#A7AEB8] font-normal">|</span> Vie: 09:00 – 16:30 hrs
                    </div>
                    <div className="text-xs text-[#A7AEB8] flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span>Sábado y Domingo: Cerrado</span>
                      <span className="text-white/20 hidden xs:inline">·</span>
                      <span className="text-[#2E7DFF] font-medium">Guardia técnica 24/7 faenas críticas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Customer Review: Nicolas baeza jakob (Literal copy) */}
              <div className="p-5 rounded-2xl bg-[#14181D]/90 border border-[#2A2F36] relative mb-6">
                <span className="absolute top-3 right-4 text-4xl font-serif text-[#2E7DFF]/25 leading-none select-none">“</span>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#2E7DFF] text-white flex items-center justify-center font-bold text-xs">
                    N
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Nicolas baeza jakob</p>
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-[#FBBC04]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#FBBC04]" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#A7AEB8]">Hace 10 meses</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-[#F5F6F7]/90 whitespace-pre-line">
                  {`Muy buen servicio pre y post venta.
El trato para coordinar visita muy dinámico y los técnicos muy atentos y experimentados.
Totalmente recomendables`}
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#2A2F36] flex items-center justify-between text-[11px] text-[#A7AEB8]">
                  <span>Reseña de Google verificada</span>
                  <a href="#resenas" className="text-[#2E7DFF] hover:underline font-medium">
                    Ver todas las opiniones (18) →
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps (IntersectionObserver lazy loaded) */}
            <div
              ref={mapContainerRef}
              className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#2A2F36] bg-[#14181D] relative shadow-inner group"
            >
              {showMap ? (
                <>
                  <iframe
                    title="Ubicación Airsens en Ñuñoa, Santiago"
                    src="https://maps.google.com/maps?q=Av.+Pedro+de+Valdivia+5453,+%C3%91u%C3%B1oa,+Santiago,+Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
                    loading="lazy"
                    allowFullScreen
                  />
                  <a
                    href={BUSINESS_INFO.googleRating.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#0B0D10]/90 hover:bg-[#2E7DFF] border border-white/20 backdrop-blur-md transition-all shadow-lg"
                  >
                    <span>Abrir en Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-[#A7AEB8]">
                  <span>Cargando mapa de ubicación...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: High-Conversion Form (3 fields + button) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#14181D]/95 backdrop-blur-xl border border-[#2A2F36] shadow-2xl relative">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide mb-2">
                Solicitar Cotización Técnica
              </h3>
              <p className="text-xs sm:text-sm text-[#A7AEB8] mb-6 sm:mb-8 leading-relaxed">
                Completa tus datos para iniciar la conversación directa por WhatsApp con el equipo de ingeniería.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                {/* Field 1: Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-xs uppercase tracking-wider text-white font-semibold mb-2"
                  >
                    Nombre y Apellido *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0D10] border border-[#2A2F36] text-white placeholder-[#A7AEB8]/50 text-base sm:text-sm focus:outline-none focus:border-[#2E7DFF] focus:ring-1 focus:ring-[#2E7DFF] transition-all"
                  />
                </div>

                {/* Field 2: Teléfono */}
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-xs uppercase tracking-wider text-white font-semibold mb-2"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    required
                    placeholder="Ej. +56 9 1234 5678"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0D10] border border-[#2A2F36] text-white placeholder-[#A7AEB8]/50 text-base sm:text-sm focus:outline-none focus:border-[#2E7DFF] focus:ring-1 focus:ring-[#2E7DFF] transition-all"
                  />
                </div>

                {/* Field 3: Selector Tipo de Servicio */}
                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-xs uppercase tracking-wider text-white font-semibold mb-2"
                  >
                    Tipo de Servicio *
                  </label>
                  <select
                    id="servicio"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0D10] border border-[#2A2F36] text-white text-base sm:text-sm focus:outline-none focus:border-[#2E7DFF] focus:ring-1 focus:ring-[#2E7DFF] transition-all cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#14181D] text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  data-cursor="cotizar"
                  className="w-full py-4 rounded-full text-base font-semibold text-white bg-[#2E7DFF] hover:bg-[#2563EB] shadow-[0_0_24px_rgba(46,125,255,0.4)] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Solicitar cotización</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-emerald-400 text-xs animate-in-view">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Redirigiendo a WhatsApp con tu solicitud prellenada...</span>
                  </div>
                )}
              </form>

              <div className="mt-6 pt-6 border-t border-[#2A2F36]/60 text-center">
                <p className="text-[11px] text-[#A7AEB8]">
                  Respuesta inmediata de lunes a domingo para emergencias e instalaciones críticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
