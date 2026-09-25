/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { CertificationsSection } from './components/CertificationsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { RedDeIncendioPage } from './components/RedDeIncendioPage';
import { ServicePage } from './components/ServicePage';
import { getServiceSeoById, getServiceSeoByPath } from './data/serviceSeo';
import { navigate, usePathname } from './lib/router';
import { useSeo } from './lib/seo';

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
        {servicePage.id === 'red-de-incendio' ? (
          <RedDeIncendioPage onNavigateHome={goHome} />
        ) : (
          <ServicePage key={servicePage.id} serviceId={servicePage.id} onNavigateHome={goHome} />
        )}
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
      </main>

      {/* 4.9 Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Fixed Conversion Actions (WhatsApp Floating Desktop + Mobile Bottom Bar) */}
      <FloatingActions />
    </div>
  );
}
