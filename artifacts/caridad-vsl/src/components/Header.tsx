import logo from '@assets/caridad-logo.png';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Caridad Agency LLC" className="h-8 sm:h-10 object-contain" />
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium">
            <span className="text-gray-400">¿Dudas? Contáctanos:</span>
            <div className="flex items-center text-brand-red">
              <Phone className="w-4 h-4 mr-1" />
              <span>1-800-CARIDAD</span>
            </div>
          </div>
          <div className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-brand-red/10 text-brand-red">
            <Phone className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
