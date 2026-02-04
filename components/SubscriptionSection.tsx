
import React from 'react';
import { TIERS } from '../constants';
import { Check, Zap, Crown, Award } from 'lucide-react';

const SubscriptionSection: React.FC = () => {
  return (
    <div className="py-16 md:py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3">ELIGE TU NIVEL DE <span className="text-orange-500">SUERTE</span></h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">Nuestros miembros anuales reciben beneficios masivos y acceso priorizado a los sorteos más grandes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative flex flex-col p-6 md:p-8 rounded-[1.8rem] glass-card transition-all hover:-translate-y-2 ${tier.id === 'pro' ? 'border-orange-500/50 ring-1 ring-orange-500/20 scale-105 z-10' : ''}`}
            >
              {tier.id === 'pro' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg shadow-orange-500/30">
                  MÁS POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">${tier.price}</span>
                  <span className="text-slate-500 text-xs font-semibold">/año</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <div className="text-xs">
                    <div className="text-white font-bold">{tier.ticketsPerMonth} boletos</div>
                    <div className="text-slate-500">Acreditados mensualmente</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Award className="w-4 h-4 text-orange-500" />
                  <div className="text-xs">
                    <div className="text-white font-bold">Multiplicador x{tier.multiplier}</div>
                    <div className="text-slate-500">En compras adicionales</div>
                  </div>
                </div>
                <ul className="space-y-2 pt-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3.5 rounded-xl font-black text-xs transition-all ${
                tier.id === 'pro' 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}>
                SUSCRIBIRSE AHORA
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
