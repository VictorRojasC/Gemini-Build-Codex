
import React, { useState } from 'react';
import { getRaffleAdvice } from '../services/geminiService';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';

const GeminiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAnswer(null);
    const result = await getRaffleAdvice(query);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <div className="py-12 md:py-16 px-6 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-600/5 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px]"></div>

      <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-[1.8rem] md:rounded-[2.2rem] p-6 md:p-10 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black">RED ADVISOR AI</h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest italic">Optimiza tu suerte con inteligencia</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative mb-6">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pregunta sobre probabilidades, planes o sorteos..."
            className="w-full bg-slate-950 border border-white/10 rounded-xl py-4 px-6 pr-14 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 transition-all text-base shadow-inner"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-orange-600 hover:bg-orange-500 rounded-lg transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 text-white" />}
          </button>
        </form>

        {loading && (
          <div className="flex items-center gap-3 text-slate-400 italic bg-white/5 p-4 rounded-xl border border-white/5 animate-pulse text-sm">
            <Sparkles className="w-4 h-4 text-orange-500" />
            Consultando la red de ganadores...
          </div>
        )}

        {answer && (
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 leading-relaxed text-slate-300 text-sm">
            <div className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Respuesta de Premios Red AI
            </div>
            {answer}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {['¿Mejor plan anual?', '¿Cómo funcionan los multiplicadores?', '¿Qué sorteo tiene más chances hoy?'].map((q, i) => (
            <button 
              key={i}
              onClick={() => setQuery(q)}
              className="text-[9px] font-bold text-slate-500 hover:text-white bg-white/5 hover:bg-orange-600/20 px-3 py-1.5 rounded-full transition-all border border-white/5"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;
