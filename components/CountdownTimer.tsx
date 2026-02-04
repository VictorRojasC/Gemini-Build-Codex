
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0, horas: 0, minutos: 0, segundos: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-12-22T12:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-white/5 border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-2">
            <span className="text-2xl md:text-3xl font-black text-orange-500 tracking-tighter">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
