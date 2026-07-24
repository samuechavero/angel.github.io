import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { LeadGate } from '../components/LeadGate';
import { Header } from '../components/Header';
import { EbookSection } from '../components/EbookSection';
import { FloatingButton } from '../components/FloatingButton';
import { AuthorBio } from '../components/AuthorBio';
import logo from '@assets/caridad-logo.png';

export default function VSLPage() {
  const [gateUnlocked, setGateUnlocked] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-background selection:bg-brand-red selection:text-white">
      {/* LeadGate Modal */}
      {!gateUnlocked && (
        <LeadGate onUnlock={() => setGateUnlocked(true)} />
      )}

      {/* Main Page Content */}
      <motion.div
        initial={false}
        animate={{
          filter: gateUnlocked ? 'blur(0px)' : 'blur(8px)',
          opacity: gateUnlocked ? 1 : 0.6,
          pointerEvents: gateUnlocked ? 'auto' : 'none',
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full flex flex-col"
      >
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#0A0A0A] pt-20 pb-16 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-[#0A0A0A] to-[#0A0A0A] opacity-50"></div>
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Descubre el Secreto que los Bancos No Quieren que Sepas: <span className="text-brand-red block mt-2">Cómo Alcanzar la Tranquilidad Financiera en 90 Días o Menos</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 font-medium max-w-3xl mx-auto mb-10">
                24 años de experiencia financiera condensados en un método probado para familias y emprendedores
              </p>
              
              <div className="w-32 h-1.5 bg-brand-red mx-auto mb-12 shadow-[0_0_15px_rgba(255,0,34,0.5)]"></div>

              {/* Video Container */}
              <div className="max-w-4xl mx-auto w-full aspect-video bg-[#111] border-2 border-brand-red rounded-xl shadow-[0_0_30px_rgba(255,0,34,0.15)] relative overflow-hidden">
                <video 
                  src="./videovsl.mp4" 
                  controls 
                  className="w-full h-full object-contain"
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              
              <p className="text-gray-400 text-sm sm:text-base mt-4 flex items-center justify-center gap-2 font-medium">
                <span className="text-brand-red animate-pulse">▶</span> Es para mi un placer conocerte y poder ayudarte en esta etapa de crecimiento
              </p>
            </div>
          </section>

          {/* Ebook Transition Text */}
          <section className="bg-white py-16 text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 flex items-center justify-center flex-col sm:flex-row gap-3">
              <span className="text-brand-red animate-bounce sm:animate-none text-4xl">⬇</span>
              Descarga el eBook abajo
              <span className="text-brand-red animate-bounce sm:animate-none text-4xl hidden sm:inline-block">⬇</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
              Todo lo que ves en el video está documentado en esta guía exclusiva
            </p>
          </section>

          <EbookSection />
          
          <AuthorBio />
          
        </main>

        {/* Footer */}
        <footer className="bg-[#0A0A0A] py-12 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
            <img src={logo} alt="Caridad Agency LLC" className="h-8 mb-6 brightness-0 invert" />
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Caridad Agency LLC. Todos los derechos reservados.
            </p>
          </div>
        </footer>

        {/* Floating Button logic handles its own visibility */}
        {gateUnlocked && <FloatingButton />}
      </motion.div>
    </div>
  );
}
