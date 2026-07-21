export function AuthorBio() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Conoce a Tu Mentor
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Column */}
          <div className="w-full md:w-5/12 flex flex-col items-center">
            <div className="relative mb-6 group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-gray-900 to-brand-red rounded-full opacity-70 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-b from-gray-800 to-brand-red flex items-center justify-center border-4 border-white shadow-2xl">
                <span className="text-7xl font-black text-white tracking-tighter shadow-sm">
                  ÁC
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Ángel Caridad</h3>
              <p className="text-gray-500 font-medium mt-1">Experto Financiero Certificado</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-7/12">
            <p className="text-brand-red font-bold text-sm tracking-widest uppercase mb-3">
              24 Años de Trayectoria
            </p>
            
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-6">
              El Hombre que Ha Ayudado a Más de 3,000 Familias a Recuperar su Libertad Financiera
            </h3>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                Ángel Caridad es un reconocido experto financiero con más de 24 años de experiencia ayudando a familias y emprendedores a transformar su relación con el dinero.
              </p>
              <p>
                Fundador de Caridad Agency LLC, ha desarrollado un método único que combina estrategias probadas de gestión patrimonial con psicología del comportamiento financiero, logrando resultados extraordinarios incluso en contextos económicos difíciles.
              </p>
              <p>
                Su enfoque directo y sin tecnicismos ha posicionado a Ángel como una de las voces más confiables en finanzas personales para la comunidad hispana en Estados Unidos.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-brand-red/20 rounded-full text-brand-red font-bold text-sm">
                <span className="text-lg">🏆</span> 24 Años de Experiencia
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-brand-red/20 rounded-full text-brand-red font-bold text-sm">
                <span className="text-lg">👨‍👩‍👧‍👦</span> +3,000 Familias Ayudadas
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-brand-red/20 rounded-full text-brand-red font-bold text-sm">
                <span className="text-lg">🎓</span> Experto Certificado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
