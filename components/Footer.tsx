
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                Premios
              </span>
              <span className="bg-white text-slate-950 px-2 py-0.5 rounded-md text-2xl font-black tracking-tighter">
                Red
              </span>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                .com
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              La comunidad más grande de sorteos por suscripción anual. Transparencia, legalidad y premios épicos entregados cada mes en PremiosRed.com.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-slate-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-slate-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-slate-500 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">PLATAFORMA</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Sorteos Activos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membresía Anual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonios Reales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog de Ganadores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">AYUDA</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soporte Red 24/7</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metodos de Pago</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">LEGALIDAD</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad de Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Responsabilidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificaciones</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © 2024 PremiosRed.com - LA SUERTE ESTÁ EN LA RED.
          </p>
          <div className="flex items-center gap-6 grayscale opacity-40 hover:grayscale-0 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
