
import React, { useState, useEffect } from 'react';
import { User, Menu, Shield, X, ChevronRight } from 'lucide-react';
import LoginPortal from './LoginPortal';

interface NavbarProps {
  onLoginSuccess: (user: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginSuccess }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`w-full transition-all duration-500 px-4 md:px-10 ${
          isScrolled 
            ? 'py-2.5 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'py-4 md:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 group cursor-pointer relative z-[110]">
            <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white">
              Premios
            </span>
            <span className="bg-orange-600 text-white px-2.5 py-1 rounded-lg text-xl md:text-2xl font-black tracking-tighter shadow-lg shadow-orange-600/40 group-hover:scale-105 transition-transform duration-300">
              Red
            </span>
            <span className="hidden sm:inline text-xl md:text-2xl font-extrabold tracking-tighter text-white/50">
              .com
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
            {['Packs Promo', 'Sorteos', 'Membresía', 'Ganadores'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-slate-400 hover:text-white transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6 relative z-[110]">
            <div className="hidden xl:flex items-center gap-2.5 text-slate-500 text-[9px] font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5">
              < Shield className="w-3 h-3 text-green-500" /> Verificado
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
            <button 
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-2.5 bg-white hover:bg-orange-600 text-slate-950 hover:text-white px-5 md:px-8 py-2.5 md:py-3 rounded-xl font-black transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95 text-[10px] md:text-xs uppercase tracking-widest"
            >
              <User className="w-4 h-4" />
              <span>Acceso</span>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <LoginPortal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onLoginSuccess={onLoginSuccess}
      />

      <div className={`fixed inset-0 z-[120] bg-slate-950 transition-all duration-500 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 p-3 text-white bg-white/5 rounded-2xl border border-white/10">
            <X className="w-7 h-7" />
          </button>
          <div className="space-y-8">
            {['Packs Promo', 'Sorteos', 'Membresía', 'Ganadores'].map((item, idx) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-3xl font-black text-white uppercase tracking-tighter group"
              >
                {item}
                <ChevronRight className="w-8 h-8 text-orange-600 group-hover:translate-x-3 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
