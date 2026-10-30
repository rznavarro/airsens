/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FloatingActions } from './components/FloatingActions';
import { getServiceSeoById, getServiceSeoByPath } from './data/serviceSeo';
import { navigate, usePathname } from './lib/router';
import { useSeo } from './lib/seo';

const AboutSection = React.lazy(() => import('./components/AboutSection').then((m) => ({ default: m.AboutSection })));
const ServicesSection = React.lazy(() => import('./components/ServicesSection').then((m) => ({ default: m.ServicesSection })));
const ProjectsCarousel = React.lazy(() => import('./components/ProjectsCarousel').then((m) => ({ default: m.ProjectsCarousel })));
const CertificationsSection = React.lazy(() => import('./components/CertificationsSection').then((m) => ({ default: m.CertificationsSection })));
const ReviewsSection = React.lazy(() => import('./components/ReviewsSection').then((m) => ({ default: m.ReviewsSection })));
const FaqSection = React.lazy(() => import('./components/FaqSection').then((m) => ({ default: m.FaqSection })));
const ContactSection = React.lazy(() => import('./components/ContactSection').then((m) => ({ default: m.ContactSection })));
const Footer = React.lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));
const RedDeIncendioPage = React.lazy(() => import('./components/RedDeIncendioPage').then((m) => ({ default: m.RedDeIncendioPage })));
const ServicePage = React.lazy(() => import('./components/ServicePage').then((m) => ({ default: m.ServicePage })));

const HOME_SEO = {
  title: 'Airsens | Ingeniería HVAC, Climatización y Refrigeración Industrial en Chile',
  description:
    'Climatización, refrigeración, electricidad y salas técnicas para minería, industria y comercio. 16 años, 2.980 proyectos y certificación ISO 9001, 14001 y 45001. Cotiza por WhatsApp.',
  path: '/',
};

const HomeSeo: React.FC = () => {
  useSeo(HOME_SEO);
  return null;
};

export default function App() {
  const pathname = usePathname();
  const servicePage = getServiceSeoByPath(pathname);

  const goHome = () => navigate('/');

  const handleSelectService = (serviceId: string) => {
    const target = getServiceSeoById(serviceId);
    if (target) navigate(target.path);
  };

  if (servicePage) {
    return (
      <div className="min-h-screen bg-[#0B0D10] text-[#F5F6F7] selection:bg-[#2E7DFF] selection:text-white flex flex-col font-sans">
        <Suspense fallback={<div className="min-h-screen" />}>
        {servicePage.id === 'red-de-incendio' ? (
          <RedDeIncendioPage onNavigateHome={goHome} />
        ) : (
          <ServicePage key={servicePage.id} serviceId={servicePage.id} onNavigateHome={goHome} />
        )}
        </Suspense>
        <FloatingActions />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F6F7] selection:bg-[#2E7DFF] selection:text-white flex flex-col font-sans">
      <HomeSeo />

      {/* Floating Pill Top Navigation */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 4.1 Hero Section (Pantalla Completa) */}
        <HeroSection />

        <Suspense fallback={<div className="min-h-[200vh]" />}>
        {/* 4.2 Quiénes Somos (Compromiso Operativo 24/7) */}
        <AboutSection />

        {/* 4.3 Servicios (8 Áreas Críticas + Equipos) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4.4 Proyectos Destacados (13 Obras Reales con Filtros y Fichas) */}
        <ProjectsCarousel />

        {/* 4.5 Confianza y Certificaciones (ISO 9001/14001/45001 + Clientes) */}
        <CertificationsSection />

        {/* 4.6 Reseñas Verificadas (4,6★ en Google) */}
        <ReviewsSection />

        {/* 4.7 Preguntas Frecuentes (GEO Search Grounding) */}
        <FaqSection />

        {/* 4.8 Contacto / Cierre (Formulario WhatsApp + Mapa Lazy) */}
        <ContactSection />
        </Suspense>
      </main>

      {/* 4.9 Footer */}
      <Suspense fallback={null}>
        <Footer onSelectService={handleSelectService} />
      </Suspense>

      {/* Fixed Conversion Actions (WhatsApp Floating Desktop + Mobile Bottom Bar) */}
      <FloatingActions />
    </div>
  );
}
