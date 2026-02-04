
import React from 'react';
import { Raffle } from '../types';
import { Clock, Ticket, Trophy } from 'lucide-react';

interface Props {
  raffle: Raffle;
}

const RaffleCard: React.FC<Props> = ({ raffle }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 hover:border-orange-500/50 transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={raffle.imageUrl} 
          alt={raffle.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
          {raffle.category}
        </div>
        {raffle.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
            GRAN PREMIO
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
          {raffle.title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Trophy className="w-4 h-4 text-orange-500" />
            <span>Valor: <span className="text-white font-bold">{raffle.prizeValue}</span></span>
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <Clock className="w-3 h-3" />
            <span>{raffle.endDate}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Boleto Extra</span>
            <span className="text-lg font-black text-white">${raffle.ticketPrice}</span>
          </div>
          <button className="bg-white/5 hover:bg-orange-500 text-white hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 flex items-center gap-2">
            <Ticket className="w-4 h-4" />
            ENTRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaffleCard;
