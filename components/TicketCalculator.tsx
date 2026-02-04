
import React, { useState } from 'react';
import { Calculator, Zap, TrendingUp } from 'lucide-react';

const TicketCalculator: React.FC = () => {
  const [amount, setAmount] = useState(10);
  
  const estimateEntries = Math.floor(amount / 1.5) * 2; // Hypothetical math

  return (
    <div className="bg-slate-900/50 border border-white/5 rounded-[3rem] p-10 backdrop-blur-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <TrendingUp className="w-32 h-32 text-orange-500" />
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-orange-600 p-2 rounded-xl">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Calculadora de Suerte</h3>
      </div>

      <p className="text-slate-400 text-sm mb-8 font-medium">
        ¿Cuánto quieres invertir hoy? Mira cuántas participaciones extra puedes conseguir comparado con un usuario estándar.
      </p>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
            <span>Inversión: {amount}€</span>
            <span>Máx: 500€</span>
          </div>
          <input 
            type="range" 
            min="6" 
            max="500" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Usuario Normal</div>
            <div className="text-3xl font-black text-white">{Math.floor(amount / 2)}</div>
            <div className="text-[10px] text-slate-500 font-bold">Participaciones</div>
          </div>
          <div className="bg-orange-600/10 p-6 rounded-2xl border border-orange-500/30 ring-1 ring-orange-500/20">
            <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2 flex items-center gap-1">
              <Zap className="w-3 h-3 fill-orange-500" /> Club Red
            </div>
            <div className="text-3xl font-black text-white">{estimateEntries}</div>
            <div className="text-[10px] text-orange-500 font-bold">Participaciones</div>
          </div>
        </div>

        <button className="w-full py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-xl text-sm uppercase tracking-widest">
          ¡CONSIGUE ESTAS ENTRADAS YA!
        </button>
      </div>
    </div>
  );
};

export default TicketCalculator;
