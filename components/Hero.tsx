
import React from 'react';
import { ArrowDownCircle, ChevronRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-12 md:pt-16 pb-8 md:pb-12 px-4 md:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] md:h-[800px] -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.2),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 px-4 md:px-5 py-1.5 md:py-2 rounded-full mb-6 md:mb-8 backdrop-blur-md group cursor-help hover:bg-white/10 transition-all">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[8px] md:text-[9px] font-black tracking-[0.2em] md:tracking-[0.3em] text-slate-200 uppercase">Sorteo Verificado por Notario</span>
          <ChevronRight className="w-3 h-3 text-slate-500 group-hover:translate-x-1 transition-transform" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter uppercase">
          LA RED QUE<br/>LO <span className="text-orange-500">CAMBIA</span> TODO
        </h1>
        
        <p className="text-sm md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium px-4">
          Multiplica tu capital de ahorro en nuestras marcas aliadas y participa automáticamente en el mayor sorteo de <span className="text-white font-bold">20.000€</span> en efectivo.
        </p>
        
        <div className="mb-10 md:mb-14 w-full px-2">
          <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">Tiempo restante para el gran sorteo</p>
          <CountdownTimer />
        </div>

        <div className="flex flex-col items-center gap-6 w-full max-w-lg px-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href="#promociones" className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-black px-6 py-4 md:py-5 rounded-[1.2rem] md:rounded-2xl shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 text-sm md:text-base">
              PACKS DE AHORRO <ArrowDownCircle className="w-5 h-5" />
            </a>
            <button className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-4 md:py-5 rounded-[1.2rem] md:rounded-2xl font-black transition-all text-sm md:text-base backdrop-blur-sm">
              CÓMO FUNCIONA
            </button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-8 md:mt-12 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Galp_Logo.svg" alt="GALP" className="h-6 md:h-8 invert" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-4 md:h-6 invert" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-4 md:h-6 invert" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" alt="Zara" className="h-2 md:h-3 invert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
