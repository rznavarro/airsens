import React, { useMemo } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/airsensData';
import { SERVICE_PAGES } from '../data/servicePages';
import { SERVICE_SEO, SITE_URL, getServiceSeoById } from '../data/serviceSeo';
import { navigate } from '../lib/router';
import { useSeo } from '../lib/seo';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface ServicePageProps {
  serviceId: string;
  onNavigateHome: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onNavigateHome }) => {
  const content = SERVICE_PAGES[serviceId];
  const seo = getServiceSeoById(serviceId)!;
  const service = SERVICES.find((s) => s.id === serviceId)!;

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: seo.name,
          serviceType: content.h1,
          description: seo.description,
          url: `${SITE_URL}${seo.path}`,
          areaServed: { '@type': 'Country', name: 'Chile' },
          provider: { '@id': `${SITE_URL}/#organization` },
        },
        {
          '@type': 'FAQPage',
          mainEntity: content.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: seo.name, item: `${SITE_URL}${seo.path}` },
          ],
        },
      ],
    }),
    [content, seo]
  );

  useSeo({ title: seo.title, description: seo.description, path: seo.path, jsonLd });

  const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(content.whatsappMessage)}`;
  const relatedServices = SERVICE_SEO.filter((s) => s.id !== serviceId);

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F6F7] selection:bg-[#2E7DFF] selection:text-white flex flex-col font-sans">
      {/* Top Floating Mini-Nav */}
      <header className="sticky top-0 z-40 bg-[#0B0D10]/90 backdrop-blur-xl border-b border-[#2A2F36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A7AEB8] hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#2E7DFF] group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs text-[#A7AEB8]">{content.headerTag}</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#2E7DFF] hover:bg-[#2563EB] shadow-[0_0_16px_rgba(46,125,255,0.4)] transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{content.ctaLabel}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#2A2F36]">
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/95 to-[#0B0D10]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="text-xs text-[#A7AEB8] hover:text-white transition-colors"
              >
                Inicio
              </a>
              <span className="text-[#A7AEB8]/40">/</span>
              <span className="text-xs text-[#A7AEB8]">Servicios</span>
              <span className="text-[#A7AEB8]/40">/</span>
              <span className="text-xs text-[#2E7DFF] font-semibold">{seo.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E7DFF]/10 border border-[#2E7DFF]/30 text-[#2E7DFF] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.eyebrow}</span>
            </div>

            <h1
              className="text-white font-heading font-bold text-left mb-6 tracking-tight text-balance"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0 }}
            >
              {content.h1}
            </h1>

            <p className="text-[#A7AEB8] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-10 text-balance">
              {content.intro}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-[#2E7DFF] hover:bg-[#2563EB] shadow-[0_0_24px_rgba(46,125,255,0.45)] transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Solicitar cotización por WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneMobileRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#2E7DFF]" />
                <span>Hablar con un especialista</span>
              </a>
            </div>

            {/* Key Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              {content.facts.map((fact) => (
                <div key={fact.value}>
                  <span className="text-xl sm:text-2xl font-heading font-bold text-white block">{fact.value}</span>
                  <span className="text-[11px] text-[#A7AEB8] mt-0.5 block">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3 block">
              {content.solutionsEyebrow}
            </span>
            <h2
              className="text-white font-heading font-bold tracking-tight text-balance"
              style={{ fontSize: 'clamp(32px, 4vw, 54px)' }}
            >
              {content.solutionsTitle}
            </h2>
            <p className="text-[#A7AEB8] text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              {content.solutionsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.solutions.map(({ icon: Icon, title, text, bullets }) => (
              <div
                key={title}
                className="p-7 rounded-3xl bg-[#14181D] border border-[#2A2F36] hover:border-[#2E7DFF] transition-all hover:shadow-[0_12px_36px_rgba(46,125,255,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#2E7DFF] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white tracking-wide mb-3">{title}</h3>
                  <p className="text-[#A7AEB8] text-xs sm:text-sm leading-relaxed mb-4">{text}</p>
                </div>
                <ul className="space-y-1.5 pt-4 border-t border-[#2A2F36] text-xs text-[#F5F6F7]/85 font-medium">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7DFF] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Workflow */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0E1217] border-y border-[#2A2F36]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2E7DFF] font-semibold block mb-2">
                METODOLOGÍA DE TRABAJO
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-wide">
                {content.stepsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.steps.map((step, i) => (
                <div key={step.title} className="p-5 rounded-2xl bg-[#14181D] border border-[#2A2F36]">
                  <span className="text-3xl font-heading font-bold text-[#2E7DFF]/40 mb-2 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs text-[#A7AEB8] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E7DFF] font-semibold block mb-2">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-wide">
              Preguntas frecuentes sobre {seo.name}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-[#14181D] border border-[#2A2F36] open:border-[#2E7DFF]/60 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-sm sm:text-base font-semibold text-white">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-[#2E7DFF] shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-sm text-[#A7AEB8] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Direct Contact CTA Box */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#14181D] via-[#101419] to-[#0E1217] border border-[#2A2F36] shadow-2xl relative overflow-hidden text-center sm:text-left">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2E7DFF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2E7DFF] mb-3 block">
                  COTIZACIÓN EN TODO CHILE
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-wide mb-3">
                  {content.ctaTitle}
                </h2>
                <p className="text-[#A7AEB8] text-sm sm:text-base leading-relaxed max-w-xl">{content.ctaText}</p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-full text-sm font-bold text-white bg-[#2E7DFF] hover:bg-[#2563EB] shadow-[0_0_24px_rgba(46,125,255,0.45)] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Cotizar por WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneMobileRaw}`}
                  className="w-full py-3.5 px-6 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#2E7DFF]" />
                  <span>Llamar al {BUSINESS_INFO.phoneMobile}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services (enlazado interno) */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-wide mb-5">
            Otros servicios de Airsens
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <a
                key={s.id}
                href={s.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(s.path);
                }}
                className="group flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl bg-[#14181D] border border-[#2A2F36] hover:border-[#2E7DFF] text-sm font-medium text-white transition-colors"
              >
                <span>{s.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A7AEB8] group-hover:text-[#2E7DFF] transition-colors" />
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer minimal */}
      <footer className="py-8 border-t border-[#2A2F36] text-center text-xs text-[#A7AEB8]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Airsens Ingeniería HVAC&R. {BUSINESS_INFO.address}.</p>
          <button
            onClick={onNavigateHome}
            className="text-white hover:text-[#2E7DFF] transition-colors font-medium cursor-pointer"
          >
            Volver a Airsens Inicio
          </button>
        </div>
      </footer>
    </div>
  );
};
