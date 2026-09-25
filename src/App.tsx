/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'red-de-incendio'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('red-de-incendio')) {
        setCurrentRoute('red-de-incendio');
      } else {
        setCurrentRoute('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (route: 'home' | 'red-de-incendio') => {
    if (route === 'red-de-incendio') {
      window.location.hash = '#/red-de-incendio';
      setCurrentRoute('red-de-incendio');
    } else {
      window.location.hash = '';
      setCurrentRoute('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    if (serviceId === 'red-de-incendio') {
      navigateTo('red-de-incendio');
    } else {
      const el = document.getElementById('servicios');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentRoute === 'red-de-incendio') {
    return (
      <div className="min-h-screen bg-[#0B0D10] text-[#F5F6F7] selection:bg-[#2E7DFF] selection:text-white flex flex-col font-sans">
        <RedDeIncendioPage onNavigateHome={() => navigateTo('home')} />
        <FloatingActions />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F6F7] selection:bg-[#2E7DFF] selection:text-white flex flex-col font-sans">
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
