import React, { useState } from 'react';
import { Calculator, Zap, ThermometerSnowflake, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/airsensData';

interface FacilityOption {
  id: string;
  name: string;
  btuPerM2: number;
  recommendedSystem: string;
  description: string;
}

const FACILITY_OPTIONS: FacilityOption[] = [
  {
    id: 'data-center',
    name: 'Data Center / Sala Eléctrica / UPS',
    btuPerM2: 850,
    recommendedSystem: 'Equipos de Precisión BlueBox / ETRATECH con control higrométrico',
    description: 'Sensibilidad crítica a temperatura y humedad para evitar paradas en servidores y tableros.',
  },
  {
    id: 'mineria-industria',
    name: 'Planta Industrial / Faena Minera',
    btuPerM2: 700,
    recommendedSystem: 'Paquetes Rooftop Heavy Duty y Chiller Industrial',
    description: 'Sistemas robustos de alta durabilidad para resistir polvo en suspensión y operación 24/7.',
  },
  {
    id: 'agroalimentos',
    name: 'Cámaras Frigoríficas / Agroalimentos',
    btuPerM2: 950,
    recommendedSystem: 'Centrales de Frío & Unidades Condensadoras Herméticas',
    description: 'Refrigeración para conservación y faena con inocuidad y control bacteriológico.',
  },
  {
    id: 'corporativo',
    name: 'Oficinas Corporativas / Edificios',
    btuPerM2: 500,
    recommendedSystem: 'Sistema de Flujo de Refrigerante Variable (VRF / VRV)',
    description: 'Zonificación independiente por piso con máxima eficiencia energética y bajo nivel sonoro.',
  },
  {
    id: 'comercio-retail',
    name: 'Comercio / Malls / Casinos',
    btuPerM2: 600,
    recommendedSystem: 'Rooftops y Unidades Manejadoras de Aire (UMA)',
    description: 'Manejo de alto tráfico de personas y renovación constante de aire exterior.',
  },
];

export const HvacEstimator: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<string>('data-center');
  const [area, setArea] = useState<number>(120);

  const currentOption = FACILITY_OPTIONS.find((f) => f.id === selectedFacility) || FACILITY_OPTIONS[0];

  // Calculations
  // 1 TR (Tonelada de Refrigeración) = 12,000 BTU/h
  const totalBtu = Math.round(area * currentOption.btuPerM2);
  const tonsRefrigeration = (totalBtu / 12000).toFixed(1);

  const whatsappMessage = `Hola Airsens, calculé un requerimiento preliminar para "${currentOption.name}" de ${area} m² (~${tonsRefrigeration} TR / ${totalBtu.toLocaleString('es-CL')} BTU/h). Deseo validar la ingeniería de detalle con su equipo técnico.`;
  const whatsappUrl = `https://wa.me/56975746747?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="estimador" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0E1217] border-t border-[#2A2F36]/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-3">
            <Calculator className="w-4 h-4" />
            <span>HERRAMIENTA TÉCNICA ESTIMATIVA PRELIMINAR</span>
          </div>
          <h2
            className="text-white font-heading font-bold tracking-tight text-balance"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Estimador de Capacidad Térmica HVAC&R
          </h2>
          <p className="text-[#A7AEB8] text-sm sm:text-base mt-2 font-normal max-w-2xl mx-auto leading-relaxed">
            Obtén un dimensionamiento inicial de tonelaje de refrigeración (TR) según el área y perfil de carga de tu instalación.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#14181D] border border-[#2A2F36] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Controls: Select facility & Area slider */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Step 1: Type of Facility */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-3">
                  1. Selecciona el Tipo de Recinto o Aplicación:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FACILITY_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedFacility(opt.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs font-medium transition-all flex flex-col gap-1 ${
                        selectedFacility === opt.id
                          ? 'bg-[#2E7DFF]/15 border-[#2E7DFF] text-white shadow-md'
                          : 'bg-[#0B0D10] border-[#2A2F36] text-[#A7AEB8] hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className="font-bold text-white text-xs sm:text-sm">{opt.name}</span>
                      <span className="text-[11px] text-[#A7AEB8] line-clamp-1">{opt.recommendedSystem}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Area in m2 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="area-slider" className="text-xs uppercase tracking-wider text-white font-semibold">
                    2. Superficie Aproximada:
                  </label>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B0D10] border border-[#2A2F36] text-white text-sm font-bold">
                    <input
                      type="number"
                      min={10}
                      max={5000}
                      value={area}
                      onChange={(e) => setArea(Math.max(10, Math.min(5000, Number(e.target.value) || 10)))}
                      className="w-16 bg-transparent text-right font-mono focus:outline-none text-[#2E7DFF]"
                    />
                    <span className="text-[#A7AEB8] text-xs font-normal">m²</span>
                  </div>
                </div>

                {/* Range Slider */}
                <input
                  id="area-slider"
                  type="range"
                  min={10}
                  max={1500}
                  step={10}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full accent-[#2E7DFF] cursor-pointer h-2 bg-[#0B0D10] rounded-lg border border-[#2A2F36]"
                />
                <div className="flex justify-between text-[11px] text-[#A7AEB8] mt-1.5 font-mono">
                  <span>10 m²</span>
                  <span>500 m²</span>
                  <span>1.000 m²</span>
                  <span>1.500+ m²</span>
                </div>
              </div>

              {/* System Note */}
              <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#2A2F36]/80 text-xs text-[#A7AEB8] leading-relaxed">
                <span className="font-semibold text-white">Criterio de cálculo: </span>
                {currentOption.description}
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0B0D10] border border-[#2A2F36] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2E7DFF]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2E7DFF] font-semibold block mb-2">
                  DIMENSIONAMIENTO PRELIMINAR
                </span>

                <div className="my-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-heading font-bold text-white tabular-nums">
                      {tonsRefrigeration}
                    </span>
                    <span className="text-xl sm:text-2xl font-heading font-semibold text-[#2E7DFF]">
                      TR
                    </span>
                  </div>
                  <span className="text-xs text-[#A7AEB8] block mt-1">
                    Toneladas de Refrigeración (~{totalBtu.toLocaleString('es-CL')} BTU/h)
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#2A2F36]">
                  <div>
                    <span className="text-[11px] font-mono text-[#A7AEB8] uppercase block">
                      Arquitectura Recomendada:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      {currentOption.recommendedSystem}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#A7AEB8] uppercase block">
                      Garantía Operativa:
                    </span>
                    <p className="text-xs text-[#A7AEB8] mt-0.5">
                      Cumplimiento bajo normas ISO 9001, 14001 y 45001.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#2A2F36]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#2E7DFF] hover:bg-[#2563EB] shadow-[0_0_20px_rgba(46,125,255,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Validar ingeniería por WhatsApp</span>
                </a>
                <p className="text-[10px] text-center text-[#A7AEB8] mt-2">
                  *Cálculo estimativo preliminar sujeto a memoria de cálculo térmico formal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
