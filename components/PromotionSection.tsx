
import React from 'react';
import { PROMOTION_PACKS } from '../constants';
import { Gift, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import QRComponent from './QRComponent';
import TicketCalculator from './TicketCalculator';

const PromotionSection: React.FC = () => {
  return (
    <section id="promociones" className="py-12 md:py-16 px-4 md:px-6 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-tight">
            EL PACK PERFECTO PARA <span className="text-orange-500">TU AHORRO</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="w-full md:w-auto bg-purple-600/20 border border-purple-500/30 text-purple-400 py-2 px-6 rounded-xl font-bold text-xs backdrop-blur-md flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping shrink-0"></span>
              Producto Solidario: Apoyo contra el Cáncer
            </div>
            <div className="w-full md:w-auto bg-orange-600/20 border border-orange-500/30 text-orange-500 py-2 px-6 rounded-xl font-bold text-xs backdrop-blur-md flex items-center justify-center">
              Sorteo Especial 20.000€ Incluido
            </div>
          </div>
        </div>

        {/* Dynamic Pack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {PROMOTION_PACKS.map((pack) => (
            <div 
              key={pack.id} 
              className={`pack-card relative group flex flex-col bg-[#050b1a] border border-white/5 rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden backdrop-blur-xl shadow-2xl`}
            >
              <div className={`${pack.color} p-3 px-6 flex justify-between items-center`}>
                <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest">{pack.title}</span>
                <span className="bg-white/20 text-white text-[8px] font-black px-3 py-1 rounded-full backdrop-blur-md border border-white/20 uppercase">MAX AHORRO</span>
              </div>

              <div className="p-5 md:p-7 flex flex-col flex-grow">
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center md:items-start text-center md:text-left">
                  {/* Container de logo más ajustado y pequeño */}
                  <div className="relative group/logo shrink-0">
                    <div className="absolute -inset-1 bg-blue-500/10 rounded-3xl blur-sm group-hover/logo:bg-blue-500/30 transition-all"></div>
                    <div className="relative w-28 h-28 md:w-36 md:h-36 bg-[#0a1226] border border-blue-500/30 rounded-3xl p-5 md:p-6 flex items-center justify-center overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                      <img 
                        src={pack.logoUrl} 
                        alt={pack.brand} 
                        className="max-h-full max-w-full object-contain relative z-10 brightness-0 invert opacity-90 group-hover/logo:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>

                  {/* Benefits Content */}
                  <div className="flex-1 w-full">
                    <div className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">BENEFICIOS DEL PACK:</div>
                    <ul className="space-y-2 md:space-y-3">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-[12px] text-slate-300 leading-snug text-left">
                          <Zap className="w-3 h-3 text-orange-500 fill-orange-500 mt-0.5 shrink-0" />
                          <span className="font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-0.5">PRECIO PACK</span>
                    <div className="flex items-baseline justify-center sm:justify-start gap-1">
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">{pack.price}</span>
                      <span className="text-lg md:text-xl font-bold text-orange-500">€</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full max-w-xs">
                    <div className="bg-orange-600/10 p-3 md:p-4 rounded-xl border border-orange-500/20 flex items-center gap-3 group/gift">
                      <div className="bg-orange-600 p-2 rounded-lg shadow-lg shadow-orange-600/40 group-hover/gift:rotate-12 transition-transform shrink-0">
                        <Gift className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-[8px] md:text-[9px] font-black text-orange-500 leading-tight uppercase tracking-wide text-left">
                        {pack.raffleEntries}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-white hover:bg-orange-500 text-slate-950 hover:text-white py-5 text-sm md:text-base font-black transition-all flex items-center justify-center gap-3 group-hover:bg-orange-600 uppercase tracking-widest">
                COMPRAR Y PARTICIPAR <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Center Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
           <TicketCalculator />
           <div className="bg-slate-900/50 border border-white/5 rounded-[1.8rem] md:rounded-[2.2rem] p-6 md:p-8 backdrop-blur-xl flex flex-col items-center justify-center text-center">
              <h3 className="text-lg md:text-xl font-black mb-3 uppercase tracking-tighter">Soporte Express AI</h3>
              <p className="text-slate-500 text-xs md:text-sm mb-6 max-w-sm">¿Dudas sobre cómo comprar? Nuestro asesor AI está listo para guiarte en cada paso.</p>
              <a href="#advisor" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-xs">
                 HABLAR CON ASESOR <ArrowRight className="w-3.5 h-3.5" />
              </a>
           </div>
        </div>

        {/* Realistic Scan Unit */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-1 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/5">
            <div className="bg-slate-950 rounded-[1.9rem] md:rounded-[2.4rem] p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-orange-500 font-black text-[9px] uppercase tracking-[0.3em] mb-3">
                   <ShieldCheck className="w-4 h-4" /> 100% SEGURO Y LEGAL
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">
                  TU PUERTA A<br className="hidden md:block"/>LOS <span className="text-orange-500">20.000€</span>
                </h3>
                <p className="text-slate-400 text-xs md:text-sm font-medium mb-6 leading-relaxed">
                  Escanea el código para acceder a nuestra pasarela oficial. El sistema verificará tu pack y te enviará un comprobante digital al instante.
                </p>
                <div className="flex gap-4 opacity-30 justify-center md:justify-start grayscale">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3.5 invert" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 invert" />
                </div>
              </div>
              
              <div className="relative group w-full md:w-auto flex justify-center">
                <div className="absolute -inset-6 bg-orange-600/20 blur-2xl group-hover:bg-orange-600/30 transition-all rounded-full animate-pulse"></div>
                <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-orange-600 p-2 rounded-t-xl md:rounded-t-2xl text-white font-black text-[8px] md:text-[9px] uppercase tracking-[0.2em] px-5 md:px-7 mb-[-6px] relative z-10">
                       SCANNER RED
                    </div>
                    <QRComponent size="w-40 h-40 md:w-48 md:h-48" />
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-slate-400 text-[8px] font-black uppercase tracking-widest mt-3">
                       CÓDIGO OFICIAL ZONA 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest leading-loose max-w-2xl mx-auto px-4">
              Promoción de combinación aleatoria con fines publicitarios, conforme a la Ley 13/2011. 
              Sorteo ante notario el 22/12/2026. PremiosRed.com | +18.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
