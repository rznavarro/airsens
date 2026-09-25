import type { LucideIcon } from 'lucide-react';
import {
  Server,
  Thermometer,
  Activity,
  ShieldCheck,
  Wrench,
  Gauge,
  Wind,
  Building2,
  Home,
  Layers,
  Snowflake,
  Filter,
  Zap,
  Cpu,
  FileCheck2,
  PlugZap,
  Lightbulb,
  Flame,
  Droplets,
  ClipboardCheck,
  Factory,
  Mountain,
  Truck,
  Boxes,
  Warehouse,
} from 'lucide-react';
import type { FaqItem } from '../types';

export interface ServiceSolution {
  icon: LucideIcon;
  title: string;
  text: string;
  bullets: [string, string];
}

export interface ServicePageContent {
  id: string;
  eyebrow: string;
  h1: string;
  intro: string;
  headerTag: string;
  ctaLabel: string;
  facts: { value: string; label: string }[];
  solutionsEyebrow: string;
  solutionsTitle: string;
  solutionsIntro: string;
  solutions: ServiceSolution[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  whatsappMessage: string;
}

const ISO_FACT = { value: 'TRIPLE ISO', label: '9001 · 14001 · 45001' };
const SUPPORT_FACT = { value: '24/7', label: 'Guardia técnica para faenas críticas' };
const YEARS_FACT = { value: '16 AÑOS', label: '2.980 proyectos completados' };

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  'hvac-salas-tecnicas': {
    id: 'hvac-salas-tecnicas',
    eyebrow: 'CLIMATIZACIÓN DE PRECISIÓN · DATA CENTER',
    h1: 'Climatización de Precisión para Data Centers y Salas Técnicas',
    intro:
      'Diseñamos, instalamos y mantenemos sistemas HVAC de precisión para data centers, salas eléctricas, UPS, salas de baterías y salas de control. Temperatura y humedad estables las 24 horas, con redundancia para que una falla de un equipo nunca detenga tu operación.',
    headerTag: 'HVAC de misión crítica',
    ctaLabel: 'Cotizar HVAC sala técnica',
    facts: [
      { value: 'N+1', label: 'Redundancia de equipos de respaldo' },
      { value: 'ASHRAE', label: 'Rangos térmicos TC 9.9 para TI' },
      SUPPORT_FACT,
      ISO_FACT,
    ],
    solutionsEyebrow: 'SOLUCIONES PARA SALAS CRÍTICAS',
    solutionsTitle: '6 Soluciones de Control Térmico para Infraestructura Crítica',
    solutionsIntro:
      'Desde el cálculo de carga térmica hasta la puesta en marcha y el monitoreo remoto, cubrimos todo el ciclo de vida del sistema de climatización de tu sala técnica.',
    solutions: [
      {
        icon: Server,
        title: 'Equipos de Precisión para Data Center',
        text: 'Unidades de climatización de precisión (CRAC / CRAH) con control fino de temperatura y humedad relativa, diseñadas para operar en régimen continuo 24/7/365.',
        bullets: ['Control de humedad y temperatura', 'Operación continua sin paradas'],
      },
      {
        icon: Layers,
        title: 'Enfriamiento In-Row y Pasillos Confinados',
        text: 'Equipos in-row entre racks y confinamiento de pasillo frío o caliente para llevar el aire frío exactamente donde se genera la carga y eliminar puntos calientes.',
        bullets: ['Mayor eficiencia energética (PUE)', 'Eliminación de hot spots'],
      },
      {
        icon: Zap,
        title: 'Climatización de Salas Eléctricas y UPS',
        text: 'Control térmico para salas eléctricas, UPS y salas de baterías, donde el exceso de temperatura acorta la vida útil de los equipos y aumenta el riesgo de fallas.',
        bullets: ['Protección de baterías y tableros', 'Extracción y ventilación forzada'],
      },
      {
        icon: ShieldCheck,
        title: 'Redundancia N+1 y 2N',
        text: 'Diseño con equipos de respaldo y rotación automática, para que la falla o mantención de una unidad no afecte la temperatura de la sala.',
        bullets: ['Rotación y respaldo automático', 'Continuidad ante fallas'],
      },
      {
        icon: Activity,
        title: 'Monitoreo Remoto y Alarmas',
        text: 'Sensores de temperatura, humedad y detección de fugas de agua integrados a BMS o a alertas remotas, para actuar antes de que un problema afecte a los equipos.',
        bullets: ['Integración BMS / Modbus / SNMP', 'Alertas tempranas'],
      },
      {
        icon: Wrench,
        title: 'Mantención Preventiva y Correctiva',
        text: 'Planes de mantención periódica, respuesta ante emergencias y reparación de equipos de precisión, con informes técnicos de cada visita.',
        bullets: ['Contratos de mantención a medida', 'Atención de emergencias 24/7'],
      },
    ],
    stepsTitle: 'Del Cálculo de Carga Térmica a la Puesta en Marcha',
    steps: [
      { title: 'Levantamiento y Carga Térmica', text: 'Medición en terreno de la disipación de equipos, dimensiones de la sala y condiciones de diseño.' },
      { title: 'Ingeniería y Redundancia', text: 'Selección de equipos, esquema de redundancia y distribución de aire según la criticidad de la sala.' },
      { title: 'Montaje sin Detener la Operación', text: 'Instalación planificada por etapas para no interrumpir los equipos que ya están en servicio.' },
      { title: 'Puesta en Marcha y Mantención', text: 'Pruebas de funcionamiento, entrega documentada y plan de mantención preventiva.' },
    ],
    faqs: [
      {
        question: '¿Qué temperatura debe tener un data center o sala de servidores?',
        answer:
          'Como referencia, ASHRAE (TC 9.9) recomienda mantener el aire de entrada a los equipos TI entre 18 °C y 27 °C, con humedad controlada. Evaluamos tu sala para definir el rango adecuado según tus equipos.',
      },
      {
        question: '¿Por qué no basta un aire acondicionado de confort en una sala técnica?',
        answer:
          'Los equipos de confort no están diseñados para operar 24/7 ni para controlar la humedad con precisión. Un equipo de precisión mantiene condiciones estables y cuenta con respaldo ante fallas.',
      },
      {
        question: '¿Pueden instalar el sistema sin detener mi operación?',
        answer:
          'Sí. Planificamos el montaje por etapas y, si es necesario, instalamos climatización temporal para que tus equipos sigan funcionando durante la obra.',
      },
      {
        question: '¿Ofrecen contratos de mantención?',
        answer:
          'Sí, con visitas preventivas periódicas, informes técnicos y atención de emergencias 24/7 para salas críticas.',
      },
    ],
    ctaTitle: '¿Tu sala técnica necesita climatización de precisión?',
    ctaText:
      'Cuéntanos el tamaño de tu sala y la carga de tus equipos. Un ingeniero te preparará una propuesta técnica con la solución y el nivel de redundancia adecuados.',
    whatsappMessage:
      'Hola Airsens, necesito una cotización de climatización de precisión para una sala técnica / data center.',
  },

  climatizacion: {
    id: 'climatizacion',
    eyebrow: 'AIRE ACONDICIONADO · CLIMATIZACIÓN',
    h1: 'Aire Acondicionado y Climatización para Empresas, Comercio y Hogares',
    intro:
      'Instalamos, mantenemos y reparamos sistemas de aire acondicionado de todas las escalas: desde equipos Split para oficinas y hogares hasta sistemas VRF-VRV, Rooftop y Chiller para edificios, malls, industria y comercio en todo Chile.',
    headerTag: 'Climatización comercial e industrial',
    ctaLabel: 'Cotizar climatización',
    facts: [
      { value: 'SPLIT · VRF', label: 'Rooftop, Chiller y Fan Coil' },
      YEARS_FACT,
      SUPPORT_FACT,
      ISO_FACT,
    ],
    solutionsEyebrow: 'SOLUCIONES DE CLIMATIZACIÓN',
    solutionsTitle: '6 Soluciones de Aire Acondicionado para cada Proyecto',
    solutionsIntro:
      'Seleccionamos la tecnología adecuada según el tamaño, uso y eficiencia energética que necesita tu espacio, y la instalamos con un equipo técnico propio.',
    solutions: [
      {
        icon: Home,
        title: 'Aire Acondicionado Split y Multi Split',
        text: 'Instalación de equipos Split muro, cassette, piso-cielo y ducto para hogares, oficinas y locales comerciales, con tecnología inverter de bajo consumo.',
        bullets: ['Tecnología inverter eficiente', 'Instalación limpia y estética'],
      },
      {
        icon: Building2,
        title: 'Sistemas VRF-VRV',
        text: 'Sistemas de volumen de refrigerante variable para edificios y oficinas, con control independiente por zona y alta eficiencia en carga parcial.',
        bullets: ['Control individual por recinto', 'Ideal para edificios y oficinas'],
      },
      {
        icon: Wind,
        title: 'Equipos Rooftop',
        text: 'Montaje y mantención de equipos Rooftop para supermercados, malls, bodegas y naves industriales, incluyendo izaje, ductos y difusión de aire.',
        bullets: ['Montaje con izaje certificado', 'Ductos y difusión de aire'],
      },
      {
        icon: Snowflake,
        title: 'Chiller y Fan Coil',
        text: 'Plantas de agua helada con Chiller, bombas y fan coils para grandes edificios, hospitales, industria y procesos que requieren enfriamiento centralizado.',
        bullets: ['Enfriamiento centralizado', 'Mantención de plantas de agua helada'],
      },
      {
        icon: Filter,
        title: 'Ventilación y Calidad de Aire',
        text: 'Inyección y extracción de aire, recuperadores de calor y filtración para asegurar renovación de aire y confort en espacios ocupados.',
        bullets: ['Recuperadores de calor', 'Filtración y renovación de aire'],
      },
      {
        icon: Wrench,
        title: 'Mantención y Reparación',
        text: 'Mantención preventiva, limpieza, carga de refrigerante, diagnóstico y reparación de equipos de todas las marcas, con informe técnico.',
        bullets: ['Planes de mantención periódica', 'Diagnóstico y reparación de fallas'],
      },
    ],
    stepsTitle: 'De la Visita Técnica a la Entrega del Sistema',
    steps: [
      { title: 'Visita y Cálculo Térmico', text: 'Evaluamos el espacio, la orientación, la ocupación y el uso para dimensionar correctamente la capacidad.' },
      { title: 'Propuesta y Selección de Equipos', text: 'Te recomendamos la tecnología más conveniente en eficiencia, costo de operación y mantención.' },
      { title: 'Instalación Profesional', text: 'Montaje con técnicos propios, prueba de hermeticidad, vacío y carga de refrigerante según fabricante.' },
      { title: 'Puesta en Marcha y Garantía', text: 'Pruebas de funcionamiento, capacitación de uso y plan de mantención para cuidar tu inversión.' },
    ],
    faqs: [
      {
        question: '¿Qué capacidad de aire acondicionado necesito?',
        answer:
          'Depende de los metros cuadrados, la orientación, las ventanas, la cantidad de personas y los equipos que generan calor. Hacemos un cálculo térmico en la visita técnica para no sobredimensionar ni quedarnos cortos.',
      },
      {
        question: '¿Cuál es la diferencia entre un Split, un VRF y un Rooftop?',
        answer:
          'El Split climatiza uno o pocos recintos; el VRF-VRV permite controlar muchas zonas de un edificio con una sola unidad exterior; y el Rooftop es un equipo compacto para grandes superficies como supermercados o naves.',
      },
      {
        question: '¿Cada cuánto se debe hacer mantención al aire acondicionado?',
        answer:
          'Recomendamos al menos una mantención al año en equipos residenciales y cada 3 a 6 meses en equipos comerciales o de uso intensivo.',
      },
      {
        question: '¿Instalan en regiones?',
        answer: 'Sí. Tenemos base en Santiago y ejecutamos proyectos en distintas regiones de Chile.',
      },
    ],
    ctaTitle: '¿Necesitas instalar o mantener tu aire acondicionado?',
    ctaText:
      'Envíanos los metros cuadrados y el tipo de espacio. Te respondemos con una recomendación técnica y una cotización formal.',
    whatsappMessage: 'Hola Airsens, quiero cotizar la instalación o mantención de aire acondicionado.',
  },

  electricidad: {
    id: 'electricidad',
    eyebrow: 'TABLEROS ELÉCTRICOS · INSTALACIONES SEC',
    h1: 'Tableros Eléctricos e Instalaciones Eléctricas Industriales',
    intro:
      'Fabricamos tableros eléctricos a medida y ejecutamos instalaciones eléctricas industriales y comerciales conforme a la normativa de la Superintendencia de Electricidad y Combustibles (SEC), incluyendo la alimentación y el control de sistemas HVAC, bombas y equipos de proceso.',
    headerTag: 'Ingeniería eléctrica SEC',
    ctaLabel: 'Cotizar electricidad',
    facts: [
      { value: 'SEC', label: 'Instalaciones según pliegos RIC' },
      { value: 'TE1', label: 'Declaración de instalación eléctrica' },
      YEARS_FACT,
      ISO_FACT,
    ],
    solutionsEyebrow: 'SOLUCIONES ELÉCTRICAS',
    solutionsTitle: '6 Soluciones Eléctricas para Industria y Comercio',
    solutionsIntro:
      'Ingeniería, fabricación, montaje y certificación eléctrica con un mismo equipo, coordinado con los sistemas de climatización, bombeo y refrigeración de tu instalación.',
    solutions: [
      {
        icon: Cpu,
        title: 'Tableros Eléctricos a Medida',
        text: 'Diseño y fabricación de tableros de distribución, fuerza y control, armados con componentes normalizados y documentación completa de planos y diagramas.',
        bullets: ['Tableros de fuerza y control', 'Planos unilineales y diagramas'],
      },
      {
        icon: Gauge,
        title: 'Tableros de Control HVAC y Bombas',
        text: 'Tableros con variadores de frecuencia, partidores y PLC para comandar sistemas de climatización, salas de bombas y refrigeración.',
        bullets: ['Variadores de frecuencia (VDF)', 'Automatización con PLC'],
      },
      {
        icon: PlugZap,
        title: 'Instalaciones Eléctricas Industriales',
        text: 'Canalizaciones, alimentadores, malla a tierra y montaje eléctrico en plantas industriales, bodegas, centros comerciales y faenas.',
        bullets: ['Canalizaciones y alimentadores', 'Mallas y sistemas de puesta a tierra'],
      },
      {
        icon: FileCheck2,
        title: 'Regularización y Declaración TE1 (SEC)',
        text: 'Levantamiento, proyecto y declaración de instalaciones eléctricas ante la SEC, para que tu instalación cumpla la normativa vigente.',
        bullets: ['Proyectos y planos eléctricos', 'Declaración TE1 ante la SEC'],
      },
      {
        icon: Lightbulb,
        title: 'Iluminación y Eficiencia Energética',
        text: 'Recambio a iluminación LED, corrección de factor de potencia y medición de consumos para reducir el costo eléctrico de tu operación.',
        bullets: ['Recambio a tecnología LED', 'Corrección de factor de potencia'],
      },
      {
        icon: Wrench,
        title: 'Mantención Eléctrica y Termografía',
        text: 'Mantención preventiva de tableros, reapriete de conexiones e inspección termográfica para detectar puntos calientes antes de que provoquen una falla.',
        bullets: ['Inspección termográfica', 'Mantención preventiva de tableros'],
      },
    ],
    stepsTitle: 'Del Levantamiento a la Declaración ante la SEC',
    steps: [
      { title: 'Levantamiento y Cálculo', text: 'Revisión de cargas, empalme, protecciones y condiciones de la instalación existente.' },
      { title: 'Proyecto Eléctrico', text: 'Planos, cuadros de carga y especificación de tableros según normativa SEC.' },
      { title: 'Fabricación y Montaje', text: 'Armado de tableros en taller y montaje en terreno con personal calificado.' },
      { title: 'Pruebas y Certificación', text: 'Mediciones de aislación y puesta a tierra, pruebas de funcionamiento y declaración TE1.' },
    ],
    faqs: [
      {
        question: '¿Qué es la declaración TE1?',
        answer:
          'Es la declaración de una instalación eléctrica interior ante la SEC, que debe realizar un instalador eléctrico autorizado para acreditar que la instalación cumple la normativa.',
      },
      {
        question: '¿Fabrican tableros eléctricos a medida?',
        answer:
          'Sí, diseñamos y armamos tableros de distribución, fuerza y control según los requerimientos de cada proyecto, con su documentación técnica.',
      },
      {
        question: '¿Pueden hacer la parte eléctrica de un proyecto de climatización?',
        answer:
          'Sí. Ejecutamos la alimentación eléctrica, los tableros y el control de equipos HVAC, bombas y refrigeración, coordinando todo en un solo contrato.',
      },
    ],
    ctaTitle: '¿Necesitas un tablero o una instalación eléctrica certificada?',
    ctaText:
      'Envíanos los planos o una descripción de tu requerimiento y te prepararemos una propuesta técnica y económica.',
    whatsappMessage: 'Hola Airsens, necesito cotizar un tablero eléctrico / instalación eléctrica.',
  },

  'sala-de-calderas': {
    id: 'sala-de-calderas',
    eyebrow: 'CALDERAS · AGUA CALIENTE Y VAPOR',
    h1: 'Instalación, Mantención y Reparación de Calderas y Salas de Calderas',
    intro:
      'Instalamos, mantenemos y reparamos calderas de agua caliente y vapor, quemadores y salas de calderas completas para edificios, hospitales, hoteles e industria, cumpliendo el Reglamento de Calderas (D.S. N°10 del MINSAL) y la normativa de gas de la SEC.',
    headerTag: 'Salas térmicas seguras',
    ctaLabel: 'Cotizar calderas',
    facts: [
      { value: 'D.S. N°10', label: 'Reglamento de calderas MINSAL' },
      { value: 'GAS · DIÉSEL', label: 'Quemadores y combustión' },
      SUPPORT_FACT,
      ISO_FACT,
    ],
    solutionsEyebrow: 'SOLUCIONES EN SALAS TÉRMICAS',
    solutionsTitle: '6 Servicios para Calderas y Sistemas Térmicos',
    solutionsIntro:
      'Cuidamos la seguridad y la eficiencia de tu sala de calderas: desde el montaje hasta las pruebas reglamentarias y la mantención periódica.',
    solutions: [
      {
        icon: Flame,
        title: 'Instalación de Calderas',
        text: 'Montaje de calderas de agua caliente y vapor, chimeneas, estanques y redes de distribución para calefacción y agua caliente sanitaria.',
        bullets: ['Calderas de agua caliente y vapor', 'Chimeneas y redes de distribución'],
      },
      {
        icon: Gauge,
        title: 'Quemadores y Análisis de Combustión',
        text: 'Instalación, regulación y mantención de quemadores a gas o diésel, con análisis de gases para optimizar el consumo de combustible y reducir emisiones.',
        bullets: ['Regulación de quemadores', 'Análisis de gases de combustión'],
      },
      {
        icon: ClipboardCheck,
        title: 'Pruebas Reglamentarias',
        text: 'Apoyo en pruebas hidrostáticas, revisión de válvulas de seguridad y documentación exigida por la autoridad sanitaria para la operación de calderas.',
        bullets: ['Pruebas hidrostáticas', 'Válvulas de seguridad'],
      },
      {
        icon: Droplets,
        title: 'Tratamiento de Agua',
        text: 'Ablandadores y control de la calidad del agua de alimentación para evitar incrustaciones y corrosión que reducen la vida útil de la caldera.',
        bullets: ['Ablandadores de agua', 'Prevención de incrustaciones'],
      },
      {
        icon: Thermometer,
        title: 'Agua Caliente Sanitaria y Calefacción',
        text: 'Intercambiadores de calor, acumuladores y bombas de circulación para sistemas centrales de agua caliente y calefacción en edificios.',
        bullets: ['Intercambiadores y acumuladores', 'Bombas de recirculación'],
      },
      {
        icon: Wrench,
        title: 'Mantención y Reparación',
        text: 'Mantención preventiva, limpieza de fuegos y humos, cambio de refractarios y reparación de fallas para mantener tu sala de calderas operativa.',
        bullets: ['Mantención preventiva periódica', 'Atención de emergencias'],
      },
    ],
    stepsTitle: 'Operación Segura de tu Sala de Calderas',
    steps: [
      { title: 'Inspección Inicial', text: 'Revisión del estado de la caldera, quemador, válvulas de seguridad y sala térmica.' },
      { title: 'Diagnóstico y Propuesta', text: 'Informe técnico con los trabajos necesarios para operar en forma segura y eficiente.' },
      { title: 'Ejecución de Trabajos', text: 'Montaje, reparación o mantención con personal calificado y protocolos de seguridad.' },
      { title: 'Pruebas y Registro', text: 'Pruebas de funcionamiento, análisis de combustión y registro de cada intervención.' },
    ],
    faqs: [
      {
        question: '¿Qué normativa regula las calderas en Chile?',
        answer:
          'Las calderas se rigen por el D.S. N°10 del Ministerio de Salud (Reglamento de Calderas, Autoclaves y Equipos que utilizan Vapor de Agua). Las instalaciones de gas, además, deben cumplir la normativa de la SEC.',
      },
      {
        question: '¿Cada cuánto se debe mantener una caldera?',
        answer:
          'Depende del tipo de caldera y de sus horas de uso, pero recomendamos mantenciones preventivas periódicas y una revisión completa al menos una vez al año.',
      },
      {
        question: '¿Trabajan con calderas a gas y a diésel?',
        answer: 'Sí, instalamos y mantenemos calderas y quemadores a gas natural, gas licuado y diésel.',
      },
    ],
    ctaTitle: '¿Tu sala de calderas necesita mantención o una nueva instalación?',
    ctaText:
      'Cuéntanos el tipo de caldera, su capacidad y el problema o proyecto. Un especialista te contactará con una propuesta.',
    whatsappMessage: 'Hola Airsens, necesito cotizar instalación o mantención de calderas.',
  },

  'sala-de-bombas': {
    id: 'sala-de-bombas',
    eyebrow: 'SALAS DE BOMBAS · PRESURIZACIÓN',
    h1: 'Salas de Bombas y Sistemas de Presurización de Agua',
    intro:
      'Diseñamos, montamos y mantenemos salas de bombas y sistemas de presurización para edificios, industria, comercio y minería. Presión y caudal estables, con equipos de respaldo y control automático para que el agua nunca falte.',
    headerTag: 'Bombeo y presurización',
    ctaLabel: 'Cotizar sala de bombas',
    facts: [
      { value: 'VDF', label: 'Bombeo con variador de frecuencia' },
      { value: 'RESPALDO', label: 'Bombas en alternancia y reserva' },
      SUPPORT_FACT,
      ISO_FACT,
    ],
    solutionsEyebrow: 'SOLUCIONES DE BOMBEO',
    solutionsTitle: '6 Soluciones para Salas de Bombas',
    solutionsIntro:
      'Desde el cálculo hidráulico hasta la automatización y la mantención, entregamos sistemas de bombeo confiables y eficientes.',
    solutions: [
      {
        icon: Building2,
        title: 'Presurización de Agua Potable',
        text: 'Equipos de presurización para edificios y condominios, con bombas en paralelo, estanques hidroneumáticos y control automático de presión.',
        bullets: ['Bombas en paralelo con alternancia', 'Estanques hidroneumáticos'],
      },
      {
        icon: Gauge,
        title: 'Bombeo con Variador de Frecuencia',
        text: 'Sistemas de presión constante con variadores de frecuencia que ajustan la velocidad de las bombas a la demanda real y reducen el consumo eléctrico.',
        bullets: ['Presión constante', 'Ahorro de energía'],
      },
      {
        icon: Factory,
        title: 'Bombeo Industrial y de Procesos',
        text: 'Bombas para agua de proceso, circuitos de agua helada y caliente, torres de enfriamiento y transferencia de fluidos en plantas industriales.',
        bullets: ['Circuitos de agua helada y caliente', 'Agua de proceso industrial'],
      },
      {
        icon: Droplets,
        title: 'Aguas Servidas y Drenaje',
        text: 'Plantas elevadoras de aguas servidas y bombas de drenaje para subterráneos, estacionamientos y pozos de acumulación.',
        bullets: ['Plantas elevadoras', 'Drenaje de subterráneos'],
      },
      {
        icon: Cpu,
        title: 'Tableros y Automatización',
        text: 'Tableros de control con alternancia automática, protección contra funcionamiento en seco, alarmas y monitoreo remoto del sistema.',
        bullets: ['Alternancia automática', 'Alarmas y monitoreo remoto'],
      },
      {
        icon: Wrench,
        title: 'Mantención y Reparación',
        text: 'Mantención preventiva, cambio de sellos y rodamientos, alineamiento de ejes y reparación de bombas para evitar cortes de suministro.',
        bullets: ['Mantención preventiva', 'Reparación de bombas'],
      },
    ],
    stepsTitle: 'Del Cálculo Hidráulico a la Operación Continua',
    steps: [
      { title: 'Levantamiento y Demanda', text: 'Determinamos caudales, presiones requeridas y condiciones de la instalación existente.' },
      { title: 'Cálculo Hidráulico', text: 'Selección de bombas, estanques y control según la curva de demanda real.' },
      { title: 'Montaje y Automatización', text: 'Instalación de bombas, piping, válvulas y tablero de control.' },
      { title: 'Puesta en Marcha', text: 'Ajuste de presiones, pruebas de alternancia y plan de mantención preventiva.' },
    ],
    faqs: [
      {
        question: '¿Qué es un sistema de presurización de agua?',
        answer:
          'Es un conjunto de bombas, estanques y controles que mantiene una presión de agua adecuada y estable en todos los pisos de un edificio o instalación.',
      },
      {
        question: '¿Qué ventajas tiene usar variador de frecuencia?',
        answer:
          'Las bombas trabajan solo a la velocidad necesaria, lo que mantiene la presión constante, reduce el consumo eléctrico y disminuye el desgaste de los equipos.',
      },
      {
        question: '¿Hacen mantención a salas de bombas existentes?',
        answer:
          'Sí, realizamos mantención preventiva y correctiva a salas de bombas de cualquier marca, con informe técnico del estado de los equipos.',
      },
    ],
    ctaTitle: '¿Necesitas diseñar o mantener tu sala de bombas?',
    ctaText:
      'Cuéntanos el tipo de instalación y el problema o proyecto. Te enviaremos una propuesta técnica.',
    whatsappMessage: 'Hola Airsens, necesito cotizar una sala de bombas / sistema de presurización.',
  },

  refrigeracion: {
    id: 'refrigeracion',
    eyebrow: 'REFRIGERACIÓN INDUSTRIAL · CADENA DE FRÍO',
    h1: 'Refrigeración Industrial, Cámaras de Frío y Frigoríficos',
    intro:
      'Diseñamos, instalamos y mantenemos sistemas de refrigeración comercial e industrial: cámaras de frío y congelado, túneles de congelado y centrales de frío para plantas de alimentos, faenadoras, farmacia y centros de distribución.',
    headerTag: 'Cadena de frío asegurada',
    ctaLabel: 'Cotizar refrigeración',
    facts: [
      { value: 'FRÍO · CONGELADO', label: 'Conservación de alimentos' },
      { value: 'CADENA', label: 'Frío continuo y monitoreado' },
      SUPPORT_FACT,
      ISO_FACT,
    ],
    solutionsEyebrow: 'SOLUCIONES DE REFRIGERACIÓN',
    solutionsTitle: '6 Soluciones para tu Cadena de Frío',
    solutionsIntro:
      'Un corte de frío significa pérdida de producto. Por eso diseñamos sistemas con respaldo, monitoreo y soporte técnico 24/7.',
    solutions: [
      {
        icon: Warehouse,
        title: 'Cámaras de Frío y Congelado',
        text: 'Construcción de cámaras de conservación y congelado con paneles aislantes, puertas frigoríficas y equipos de refrigeración dimensionados para cada producto.',
        bullets: ['Paneles y puertas frigoríficas', 'Conservación y congelado'],
      },
      {
        icon: Snowflake,
        title: 'Túneles de Congelado',
        text: 'Sistemas de congelado rápido para plantas de alimentos y faenadoras, que preservan la calidad del producto y aumentan la capacidad de proceso.',
        bullets: ['Congelado rápido', 'Plantas de alimentos y faenadoras'],
      },
      {
        icon: Boxes,
        title: 'Centrales de Frío',
        text: 'Centrales de compresores en paralelo para supermercados y plantas industriales, con mayor eficiencia y respaldo ante fallas de un compresor.',
        bullets: ['Compresores en paralelo', 'Respaldo ante fallas'],
      },
      {
        icon: Truck,
        title: 'Frío para Logística y Farmacia',
        text: 'Climatización y refrigeración de centros de distribución, andenes y bodegas con control de temperatura para productos farmacéuticos y perecibles.',
        bullets: ['Andenes y centros de distribución', 'Productos farmacéuticos'],
      },
      {
        icon: Activity,
        title: 'Monitoreo de Temperatura',
        text: 'Registro continuo de temperatura y alarmas remotas para detectar desviaciones antes de que afecten al producto y respaldar auditorías.',
        bullets: ['Registro continuo', 'Alarmas remotas'],
      },
      {
        icon: Wrench,
        title: 'Mantención y Emergencias 24/7',
        text: 'Mantención preventiva de compresores, condensadores y evaporadores, detección de fugas y atención de emergencias para no romper la cadena de frío.',
        bullets: ['Detección de fugas', 'Atención de emergencias 24/7'],
      },
    ],
    stepsTitle: 'Del Diseño de la Cámara a la Operación Continua',
    steps: [
      { title: 'Requerimientos del Producto', text: 'Definimos temperaturas, volúmenes, rotación y tiempos de enfriamiento de tu producto.' },
      { title: 'Cálculo de Carga Frigorífica', text: 'Dimensionamiento de aislación, equipos y respaldo según la operación.' },
      { title: 'Montaje e Instalación', text: 'Construcción de cámaras, montaje de equipos, piping de refrigeración y tableros.' },
      { title: 'Puesta en Marcha y Soporte', text: 'Pruebas de temperatura, entrega documentada y soporte técnico 24/7.' },
    ],
    faqs: [
      {
        question: '¿Qué diferencia hay entre una cámara de frío y una de congelado?',
        answer:
          'La cámara de frío conserva productos sobre 0 °C (por ejemplo, frutas, lácteos o carnes refrigeradas), mientras que la de congelado los mantiene bajo cero, habitualmente cerca de −18 °C o menos.',
      },
      {
        question: '¿Qué pasa si falla el equipo de refrigeración?',
        answer:
          'Diseñamos sistemas con respaldo y monitoreo remoto, y contamos con guardia técnica 24/7 para responder rápido y proteger tu producto.',
      },
      {
        question: '¿Trabajan con plantas de alimentos y faenadoras?',
        answer:
          'Sí, tenemos experiencia en plantas agroindustriales, faenadoras y frigoríficos, donde la continuidad del frío es crítica.',
      },
    ],
    ctaTitle: '¿Necesitas una cámara de frío o mantención de tu sistema de refrigeración?',
    ctaText:
      'Cuéntanos qué producto necesitas conservar, el volumen y la temperatura. Te enviaremos una propuesta técnica.',
    whatsappMessage: 'Hola Airsens, necesito cotizar refrigeración industrial / cámara de frío.',
  },

  'mineria-e-industria': {
    id: 'mineria-e-industria',
    eyebrow: 'MINERÍA · INDUSTRIA PESADA',
    h1: 'Climatización y Presurización para Minería e Industria',
    intro:
      'Ejecutamos proyectos HVAC en faenas mineras y plantas industriales: climatización y presurización de salas eléctricas y de control, filtración de polvo y equipos preparados para altura geográfica y ambientes corrosivos, con estrictos estándares de seguridad.',
    headerTag: 'HVAC para faenas críticas',
    ctaLabel: 'Cotizar proyecto minero',
    facts: [
      { value: 'ISO 45001', label: 'Seguridad y salud en faena' },
      { value: 'ALTURA', label: 'Equipos para gran altitud' },
      SUPPORT_FACT,
      YEARS_FACT,
    ],
    solutionsEyebrow: 'SOLUCIONES PARA FAENA',
    solutionsTitle: '6 Soluciones HVAC para Minería e Industria',
    solutionsIntro:
      'En faena, una sala eléctrica sin climatización o con ingreso de polvo puede detener la producción. Diseñamos para las condiciones más exigentes.',
    solutions: [
      {
        icon: Zap,
        title: 'Salas Eléctricas y de Control',
        text: 'Climatización de salas eléctricas, CCM y salas de control para proteger variadores, PLC y equipos electrónicos del calor.',
        bullets: ['Protección de CCM y variadores', 'Operación continua 24/7'],
      },
      {
        icon: ShieldCheck,
        title: 'Presurización y Filtración',
        text: 'Sistemas de presurización con aire filtrado que mantienen sobrepresión en las salas y evitan el ingreso de polvo y contaminantes.',
        bullets: ['Sobrepresión controlada', 'Filtración de polvo en suspensión'],
      },
      {
        icon: Mountain,
        title: 'Equipos para Altura Geográfica',
        text: 'Selección y ajuste de capacidad de equipos para faenas en altura, donde la menor densidad del aire reduce el rendimiento de los sistemas.',
        bullets: ['Corrección de capacidad por altura', 'Condiciones climáticas extremas'],
      },
      {
        icon: Factory,
        title: 'Climatización de Naves y Plantas',
        text: 'Ventilación, extracción y climatización de naves industriales, talleres y plantas de proceso para proteger a las personas y los equipos.',
        bullets: ['Ventilación y extracción industrial', 'Confort para trabajadores'],
      },
      {
        icon: Layers,
        title: 'Equipos para Ambientes Corrosivos',
        text: 'Equipos y recubrimientos preparados para ambientes salinos, químicos o con alta carga de polvo, que prolongan la vida útil de la instalación.',
        bullets: ['Protección anticorrosiva', 'Mayor vida útil de equipos'],
      },
      {
        icon: Wrench,
        title: 'Mantención en Faena',
        text: 'Contratos de mantención preventiva y correctiva en faena, con cuadrillas acreditadas y respuesta ante emergencias las 24 horas.',
        bullets: ['Cuadrillas acreditadas', 'Respuesta de emergencias 24/7'],
      },
    ],
    stepsTitle: 'Metodología para Proyectos en Faena',
    steps: [
      { title: 'Visita y Condiciones de Sitio', text: 'Levantamiento de altura, temperatura extrema, polvo y restricciones de acceso de la faena.' },
      { title: 'Ingeniería de Detalle', text: 'Selección de equipos, presurización y filtración según la criticidad de cada sala.' },
      { title: 'Montaje con Estándar Minero', text: 'Cuadrillas con inducción, procedimientos de trabajo seguro y cumplimiento ISO 45001.' },
      { title: 'Entrega y Mantención', text: 'Pruebas, carpeta de entrega y plan de mantención con soporte 24/7.' },
    ],
    faqs: [
      {
        question: '¿Por qué hay que presurizar una sala eléctrica en minería?',
        answer:
          'Mantener una leve sobrepresión con aire filtrado impide que el polvo entre a la sala. El polvo acumulado en tableros y variadores provoca fallas y paradas de producción.',
      },
      {
        question: '¿Los equipos de climatización rinden igual en altura?',
        answer:
          'No. En altura el aire es menos denso y la capacidad de los equipos disminuye, por lo que deben seleccionarse y corregirse para esas condiciones.',
      },
      {
        question: '¿Tienen personal acreditado para trabajar en faena?',
        answer:
          'Sí, trabajamos con cuadrillas con inducción minera y procedimientos de seguridad bajo nuestro sistema certificado ISO 45001.',
      },
    ],
    ctaTitle: '¿Tienes un proyecto HVAC en faena o planta industrial?',
    ctaText:
      'Envíanos las especificaciones técnicas o bases de licitación. Nuestro equipo de ingeniería preparará una propuesta formal.',
    whatsappMessage: 'Hola Airsens, necesito cotizar un proyecto HVAC para minería / industria.',
  },
};
