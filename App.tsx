
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RaffleCard from './components/RaffleCard';
import SubscriptionSection from './components/SubscriptionSection';
import PromotionSection from './components/PromotionSection';
import GeminiAdvisor from './components/GeminiAdvisor';
import Footer from './components/Footer';
import AdminDashboard from './components/dashboards/AdminDashboard';
import { RAFFLES, WINNERS } from './constants';
import { Trophy, ArrowRight, Target } from 'lucide-react';

export type UserRole = 'ADMIN' | 'CLIENTE' | 'EMPRESA' | 'PROMOTOR';

interface UserSession {
  name: string;
  email: string;
  role: UserRole;
}

const App: React.FC = () => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % WINNERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Si hay usuario logueado, mostramos el Dashboard correspondiente
  if (user) {
    if (user.role === 'ADMIN') return <AdminDashboard user={user} onLogout={() => setUser(null)} />;
    
    // Fallback temporal para otros roles
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-10 text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-black text-white mb-4 uppercase">Panel de {user.role}</h1>
          <p className="text-slate-400 mb-8">Esta área privada está siendo configurada por el equipo técnico de Premios Red. Estará lista en breve.</p>
          <button onClick={() => setUser(null)} className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold">CERRAR SESIÓN</button>
        </div>
      </div>
    );
  }

  // Landing Page estándar
  return (
    <div className="min-h-screen selection:bg-orange-600 selection:text-white overflow-x-hidden bg-slate-950">
      <header className="fixed top-0 w-full z-[100] pointer-events-none">
        <div className="bg-slate-950/95 backdrop-blur-xl py-2 overflow-hidden whitespace-nowrap relative border-b border-white/5 pointer-events-auto">
          <div className="flex items-center animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-6">
                <span className="flex items-center gap-3 text-slate-300 text-[8px] md:text-[10px] font-black uppercase tracking-[0.35em]">
                  <Trophy className="w-3.5 h-3.5 text-orange-500" /> 
                  GANADOR: <span className="text-white">{WINNERS[tickerIndex].name}</span> 
                  <span className="text-slate-600 hidden sm:inline">—</span> 
                  PREMIO: <span className="text-orange-500">{WINNERS[tickerIndex].prize}</span>
                </span>
                <span className="w-1.5 h-1.5 bg-orange-500/30 rounded-full"></span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pointer-events-auto">
          <Navbar onLoginSuccess={(u: UserSession) => setUser(u)} />
        </div>
      </header>
      
      <main className="pt-[110px] md:pt-[130px]"> 
        <Hero />
        <div id="packs-promo" className="relative">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
           <PromotionSection />
        </div>

        <section id="sorteos" className="py-12 md:py-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-2">
                <Target className="w-4 h-4" /> Premios de Temporada
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">RED <span className="text-orange-500">SELECTION</span></h2>
            </div>
            <button className="group flex items-center gap-3 text-slate-500 hover:text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all border-b-2 border-transparent hover:border-orange-500 pb-2 self-start md:self-auto">
              Ver Catálogo Completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {RAFFLES.map((raffle) => (
              <RaffleCard key={raffle.id} raffle={raffle} />
            ))}
          </div>
        </section>

        <div id="membresía">
          <SubscriptionSection />
        </div>

        <div id="advisor" className="py-10">
           <GeminiAdvisor />
        </div>

        <section className="py-16 md:py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto bg-orange-600 rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center relative z-10 shadow-[0_40px_80px_-20px_rgba(234,88,12,0.4)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-none tracking-tighter uppercase">
                ÚNETE AL CLUB<br/>DE GANADORES
              </h2>
              <p className="text-white/80 text-sm md:text-lg mb-8 md:mb-10 max-w-xl mx-auto font-medium">
                Crea tu cuenta hoy y recibe un multiplicador x2 en tu primer Pack de Ahorro.
              </p>
              <button className="w-full sm:w-auto bg-slate-950 text-white px-8 md:px-12 py-5 md:py-6 rounded-[1.2rem] md:rounded-[1.5rem] text-base md:text-lg font-black shadow-2xl hover:scale-105 transition-all transform active:scale-95 group">
                 EMPEZAR AHORA <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
