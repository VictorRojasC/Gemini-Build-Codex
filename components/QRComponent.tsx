
import React from 'react';

const QRComponent: React.FC<{ size?: string }> = ({ size = "w-48 h-48" }) => {
  return (
    <div className={`relative ${size} bg-white p-4 rounded-3xl shadow-inner border-2 border-slate-100 flex items-center justify-center overflow-hidden`}>
      {/* Decorative QR Pattern SVG */}
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
        <defs>
          <pattern id="qr-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="black" />
            <rect x="6" y="2" width="2" height="2" fill="black" />
            <rect x="2" y="6" width="3" height="3" fill="black" />
            <rect x="7" y="7" width="2" height="2" fill="black" />
          </pattern>
        </defs>
        
        {/* Main QR Body */}
        <rect x="0" y="0" width="100" height="100" fill="url(#qr-pattern)" />
        
        {/* Three classic QR corners */}
        <path d="M5 5h20v20H5zM10 10h10v10H10z" fill="black" />
        <path d="M75 5h20v20H75zM80 10h10v10H80z" fill="black" />
        <path d="M5 75h20v20H5zM10 80h10v10H10z" fill="black" />
        
        {/* White center clearing for the logo */}
        <rect x="35" y="35" width="30" height="30" fill="white" rx="8" />
      </svg>

      {/* Center Logo Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-slate-950 px-2 py-1 rounded-md flex items-center gap-0.5 shadow-lg border border-white/10 scale-90">
          <span className="text-[8px] font-black text-white uppercase tracking-tighter">Premios</span>
          <span className="bg-orange-600 text-white px-1 py-0.5 rounded text-[8px] font-black tracking-tighter">Red</span>
        </div>
      </div>
      
      {/* Scanning laser effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
      
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { transform: translateY(180px); }
        }
      `}</style>
    </div>
  );
};

export default QRComponent;
