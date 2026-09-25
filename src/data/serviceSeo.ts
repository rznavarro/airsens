/**
 * Metadatos SEO de cada página de servicio.
 * Sin dependencias: lo usa la app (título/meta en el navegador) y vite.config.ts
 * (genera un index.html por ruta con sus metas y el sitemap.xml al compilar).
 */

export const SITE_URL = 'https://www.airsens.cl';

export interface ServiceSeo {
  id: string;
  path: string;
  name: string;
  title: string;
  description: string;
}

export const SERVICE_SEO: ServiceSeo[] = [
  {
    id: 'hvac-salas-tecnicas',
    path: '/hvac-salas-tecnicas',
    name: 'HVAC Salas Técnicas',
    title: 'Climatización de Precisión para Data Center y Salas Eléctricas | Airsens',
    description:
      'Climatización de precisión 24/7 para data centers, salas eléctricas, UPS y salas de control. Diseño, montaje y mantención con redundancia N+1 en todo Chile. Certificación ISO.',
  },
  {
    id: 'climatizacion',
    path: '/aire-acondicionado',
    name: 'Climatización',
    title: 'Aire Acondicionado y Climatización Comercial e Industrial en Chile | Airsens',
    description:
      'Instalación, mantención y reparación de aire acondicionado: Split, VRF-VRV, Rooftop y Chiller para oficinas, comercio, industria y hogares. Cotiza por WhatsApp.',
  },
  {
    id: 'electricidad',
    path: '/electricidad',
    name: 'Electricidad',
    title: 'Tableros Eléctricos e Instalaciones Eléctricas Industriales SEC | Airsens',
    description:
      'Fabricación de tableros eléctricos a medida, instalaciones eléctricas industriales y comerciales, y declaraciones TE1 ante la SEC. Ingeniería certificada ISO en Chile.',
  },
  {
    id: 'sala-de-calderas',
    path: '/calderas',
    name: 'Sala de Calderas',
    title: 'Instalación y Mantención de Calderas y Salas de Calderas | Airsens',
    description:
      'Instalación, mantención preventiva y reparación de calderas de agua caliente y vapor, quemadores y salas de calderas, según el D.S. N°10 del MINSAL. Servicio en todo Chile.',
  },
  {
    id: 'sala-de-bombas',
    path: '/sala-de-bombas',
    name: 'Sala de Bombas',
    title: 'Salas de Bombas y Sistemas de Presurización de Agua | Airsens',
    description:
      'Diseño, montaje y mantención de salas de bombas, equipos de presurización y bombeo con variador de frecuencia para edificios, industria y minería en Chile.',
  },
  {
    id: 'refrigeracion',
    path: '/refrigeracion',
    name: 'Refrigeración',
    title: 'Refrigeración Industrial, Cámaras de Frío y Frigoríficos | Airsens',
    description:
      'Cámaras de frío, túneles de congelado y centrales de refrigeración para alimentos, farmacia y logística. Montaje, mantención y soporte 24/7 para tu cadena de frío.',
  },
  {
    id: 'mineria-e-industria',
    path: '/mineria-e-industria',
    name: 'Minería e Industria',
    title: 'HVAC para Minería e Industria: Salas Eléctricas y Presurización | Airsens',
    description:
      'Climatización, presurización y filtración para salas eléctricas y de control en faenas mineras e industriales. Equipos para altura y ambientes corrosivos. ISO 45001.',
  },
  {
    id: 'red-de-incendio',
    path: '/red-de-incendio',
    name: 'Red de Incendio',
    title: 'Red de Incendio: Diseño, Montaje y Certificación NFPA | Airsens',
    description:
      'Redes húmedas y secas, rociadores, salas de bombas contra incendio, detección y extinción bajo normas NFPA y OGUC. Ingeniería, montaje y certificación en Chile.',
  },
];

export const getServiceSeoByPath = (path: string) =>
  SERVICE_SEO.find((s) => s.path === path.replace(/\/+$/, '').toLowerCase());

export const getServiceSeoById = (id: string) => SERVICE_SEO.find((s) => s.id === id);
