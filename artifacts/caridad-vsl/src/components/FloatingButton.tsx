import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('ebook-section');
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when ebook section is NOT in viewport
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollToEbook = () => {
    const section = document.getElementById('ebook-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={scrollToEbook}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 bg-brand-red text-white font-bold py-4 px-8 rounded-full shadow-2xl shadow-brand-red/30 hover:bg-brand-red/90 transition-colors flex items-center gap-2 group overflow-hidden"
        >
          {/* Subtle pulse animation element */}
          <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-20 group-hover:opacity-0" />
          
          <span className="text-xl">📖</span>
          <span className="tracking-wide">eBook Gratuito</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
