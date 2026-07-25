import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@assets/caridad-logo.png';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface LeadGateProps {
  onUnlock: () => void;
}

export function LeadGate({ onUnlock }: LeadGateProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('prospectos_vsl')
        .insert([{ nombre_completo: name, numero_telefono: phone }]);
        
      if (error) {
        console.error('Error insertando a supabase:', error);
        alert('Hubo un error al enviar tus datos. Por favor, intenta nuevamente.');
      } else {
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead');
        }
        onUnlock();
      }
    } catch (err) {
      console.error('Excepción durante el envío:', err);
      alert('Ocurrió un error inesperado. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-red"></div>
        
        <div className="flex justify-center mb-6 mt-2">
          <img src={logo} alt="Caridad Agency" className="h-10 object-contain" />
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-900 leading-tight mb-3">
            Accede al Método Exclusivo de Tranquilidad Financiera
          </h2>
          <p className="text-gray-600 text-sm">
            Ingresa tus datos para ver el video y descargar tu eBook gratuito
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Nombre Completo</label>
            <Input 
              id="name"
              type="text" 
              placeholder="Nombre Completo" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-brand-red focus-visible:border-brand-red"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Número de Teléfono</label>
            <Input 
              id="phone"
              type="tel" 
              placeholder="Número de Teléfono" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="^[0-9+\-\s()]*$"
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-brand-red focus-visible:border-brand-red"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full h-14 text-base font-bold bg-brand-red hover:bg-brand-red/90 text-white rounded-full mt-2 shadow-lg shadow-brand-red/20 transition-all hover:shadow-brand-red/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {isLoading ? 'ENVIANDO...' : <>VER EL VIDEO AHORA &rarr;</>}
          </Button>
          
          <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
            <span>🔒</span> Tu información está 100% segura. Sin spam.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
