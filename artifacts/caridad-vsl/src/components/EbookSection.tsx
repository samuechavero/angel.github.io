import { CheckCircle2 } from 'lucide-react';

export function EbookSection() {
  return (
    <section id="ebook-section" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Column 1: eBook Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              {/* Shadow/Glow behind book */}
              <div className="absolute -inset-4 bg-brand-red/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative w-72 sm:w-80 aspect-[2/3] bg-gradient-to-br from-brand-red to-[#8B0000] rounded-r-xl rounded-l-sm shadow-2xl transform perspective-1000 rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-500 overflow-hidden border border-red-400/30 flex flex-col items-center justify-between p-8 text-center">
                {/* Book spine simulation */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
                
                <div className="w-full">
                  <p className="text-white/80 text-xs font-bold tracking-widest uppercase mb-6 border-b border-white/20 pb-2">
                    Método Exclusivo
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                    El Código de la Tranquilidad Financiera
                  </h3>
                </div>
                
                <div className="w-full">
                  <div className="h-px w-12 mx-auto bg-brand-red mb-4" />
                  <p className="text-white font-semibold text-lg tracking-wide">
                    Ángel Caridad
                  </p>
                  <p className="text-white/70 text-sm mt-1 uppercase tracking-wider">
                    Guía de Libertad Financiera
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Persuasive Copy */}
          <div className="w-full lg:w-7/12">
            <p className="text-brand-red font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-red" />
              Para ti que estás luchando con tus finanzas
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              El Sistema Que Cambió la Vida Financiera de Más de 3,000 Familias
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                "Aprende a eliminar deudas sin sacrificar tu calidad de vida",
                "Descubre cómo generar un colchón de seguridad en 90 días",
                "El método exacto que los asesores financieros cobran miles por enseñar",
                "Estrategias probadas para familias con ingresos variables"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-red mr-3 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <p className="text-amber-800 font-bold flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                Disponible de forma GRATUITA por tiempo limitado
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="./Tranquilidadfinanciera.pdf" 
                download="Tranquilidad_Financiera.pdf"
                className="block w-full sm:w-auto text-center bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg py-4 sm:px-10 rounded-full shadow-lg shadow-brand-red/25 transition-all hover:-translate-y-1 hover:shadow-brand-red/40"
              >
                📥 Descargar eBook GRATIS
              </a>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 font-medium">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-1" /> Descarga inmediata</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-1" /> Sin registro adicional</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-1" /> 100% Gratuito</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
