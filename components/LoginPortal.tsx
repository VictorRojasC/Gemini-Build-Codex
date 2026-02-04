
import React, { useState, useRef } from 'react';
import { X, User, ShieldCheck, Briefcase, Zap, ArrowRight, Lock, Mail, Loader2, Phone, CreditCard, FileUp, Building2, CheckCircle2, Info, ScrollText } from 'lucide-react';

type Role = 'ADMIN' | 'CLIENTE' | 'EMPRESA' | 'PROMOTOR';

interface LoginPortalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
}

const LoginPortal: React.FC<LoginPortalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [view, setView] = useState<'login' | 'register'>('login');
  const [selectedRole, setSelectedRole] = useState<Role>('CLIENTE');
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (view === 'register' && !acceptedTerms) {
      alert("Debes aceptar los términos y condiciones específicos para tu perfil.");
      return;
    }
    
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      // Simulación de detección de rol basada en email para pruebas rápidas
      let roleToLogin: Role = selectedRole;
      if (email.toLowerCase().includes('admin')) roleToLogin = 'ADMIN';
      if (email.toLowerCase().includes('empresa')) roleToLogin = 'EMPRESA';
      if (email.toLowerCase().includes('promotor')) roleToLogin = 'PROMOTOR';

      if (view === 'register' && (roleToLogin === 'EMPRESA' || roleToLogin === 'PROMOTOR')) {
        alert(`¡Registro enviado! Tu documentación de ${roleToLogin} ha sido recibida para auditoría manual. Recibirás una confirmación por correo.`);
        onClose();
      } else {
        onLoginSuccess({
          name: email.split('@')[0],
          email: email,
          role: roleToLogin
        });
        onClose();
      }
    }, 1500);
  };

  const roles = [
    { id: 'CLIENTE', label: 'Cliente', icon: User },
    { id: 'EMPRESA', label: 'Empresa', icon: Briefcase },
    { id: 'PROMOTOR', label: 'Promotor', icon: Zap },
    { id: 'ADMIN', label: 'Admin', icon: ShieldCheck },
  ];

  const getTermsText = () => {
    switch (selectedRole) {
      case 'EMPRESA': return "Acepto los términos de Partner Comercial y la veracidad de los documentos legales (CIF/RIF).";
      case 'PROMOTOR': return "Acepto el contrato de promoción y el sistema de comisiones auditadas.";
      case 'ADMIN': return "Declaro poseer credenciales de seguridad autorizadas.";
      default: return "Acepto los términos de participación y la política de privacidad.";
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] md:max-h-none overflow-y-auto md:overflow-visible">
        
        {/* Left Side: Dynamic Branding */}
        <div className="w-full md:w-5/12 bg-orange-600 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">
              {view === 'login' ? 'ACCESO AL\nCENTRO RED' : 'CREAR NUEVA\nIDENTIDAD RED'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <Info className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <p className="text-white/90 text-[10px] font-medium leading-relaxed uppercase tracking-wider">
                  {view === 'login' 
                    ? 'Tu sesión está protegida por encriptación bancaria SSL de 256 bits.' 
                    : 'Los perfiles de Empresa y Promotor son auditados manualmente en 24h.'}
                </p>
              </div>
              {view === 'login' && (
                <div className="text-white/60 text-[8px] font-bold uppercase tracking-widest mt-2 p-3 border border-white/10 rounded-xl bg-slate-900/20">
                  Tip: Usa "admin@test.com" para entrar como administrador general.
                </div>
              )}
            </div>
          </div>
          
          <div className="relative z-10 pt-6 border-t border-white/10 mt-8">
            <p className="text-[9px] text-white/80 font-black uppercase tracking-[0.2em] mb-2">Plataforma Segura</p>
            <div className="flex items-center gap-4 grayscale opacity-40">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2.5 invert" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 invert" />
            </div>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-7/12 p-6 md:p-12 bg-slate-900 overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-20">
            <X className="w-6 h-6" />
          </button>

          <div className="flex gap-8 mb-8 border-b border-white/5">
            <button 
              onClick={() => setView('login')}
              className={`pb-4 text-xs md:text-sm font-black uppercase tracking-widest transition-all ${view === 'login' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-slate-500 hover:text-white'}`}
            >
              Iniciar Sesión
            </button>
            <button 
              onClick={() => setView('register')}
              className={`pb-4 text-xs md:text-sm font-black uppercase tracking-widest transition-all ${view === 'register' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-slate-500 hover:text-white'}`}
            >
              Registrarse
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-5">
            {view === 'register' && (
              <div className="space-y-5 animate-fade-in">
                <div className="space-y-2">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Tipo de Perfil:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id as Role)}
                        className={`flex flex-col items-center p-2 rounded-xl border transition-all ${
                          selectedRole === role.id 
                            ? 'bg-orange-600/10 border-orange-500 text-orange-500' 
                            : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10'
                        }`}
                      >
                        <role.icon className="w-4 h-4 mb-1" />
                        <span className="text-[8px] font-black uppercase">{role.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                    <input type="text" placeholder={selectedRole === 'EMPRESA' ? "Nombre Empresa / CIF" : "Nombre Completo"} required className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-all" />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                    <input type="tel" placeholder="Móvil" required className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-all" />
                  </div>
                </div>

                {(selectedRole === 'EMPRESA' || selectedRole === 'PROMOTOR') && (
                  <div className="space-y-3 p-4 bg-orange-600/5 border border-orange-500/20 rounded-2xl">
                    <label className="block text-[9px] font-black text-orange-500 uppercase tracking-widest">
                      {selectedRole === 'EMPRESA' ? 'Adjuntar CIF / Registro Mercantil' : 'Adjuntar DNI / Certificado'}
                    </label>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.jpg,.png" />
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className={`w-full border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all ${
                        fileName ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 hover:border-orange-500/50'
                      }`}
                    >
                      {fileName ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-xs font-bold text-white truncate max-w-[200px]">{fileName}</span>
                        </>
                      ) : (
                        <>
                          <FileUp className="w-5 h-5 text-slate-500" />
                          <span className="text-[10px] font-bold text-slate-400">Seleccionar Documento (PDF/IMG)</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo Electrónico" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-all" 
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-all" 
                />
              </div>
            </div>

            {view === 'login' && (
              <div className="flex justify-end">
                <button type="button" className="text-[10px] font-bold text-slate-500 hover:text-orange-500 uppercase tracking-widest transition-colors">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            {view === 'register' && (
              <label className="flex items-start gap-3 cursor-pointer group pt-2">
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    checked={acceptedTerms}
                    onChange={() => setAcceptedTerms(!acceptedTerms)}
                    className="peer h-5 w-5 appearance-none rounded-lg border border-white/20 bg-white/5 checked:bg-orange-600 checked:border-orange-500 transition-all"
                  />
                  <CheckCircle2 className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 left-1 transition-all" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium leading-relaxed group-hover:text-slate-300">
                  {getTermsText()} <button type="button" onClick={() => setShowTermsModal(true)} className="text-orange-500 font-bold hover:underline">Políticas Legales.</button>
                </span>
              </label>
            )}

            <button 
              disabled={loading || (view === 'register' && !acceptedTerms)}
              className="w-full bg-white hover:bg-orange-600 text-slate-950 hover:text-white py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {view === 'login' ? 'ENTRAR AL PANEL' : 'ENVIAR SOLICITUD'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* MODAL DE POLÍTICAS */}
      {showTermsModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setShowTermsModal(false)}></div>
          <div className="relative w-full max-w-2xl bg-[#0a1226] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-orange-600 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <ScrollText className="w-6 h-6" />
                <h3 className="font-black uppercase tracking-tighter text-lg">Términos Legales</h3>
              </div>
              <button onClick={() => setShowTermsModal(false)}><X className="w-6 h-6" /></button>
            </div>
            <div className="p-8 max-h-[60vh] overflow-y-auto text-slate-300 space-y-4 text-sm">
              <p>Contenido legal para el perfil de {selectedRole}...</p>
              <p>Por la presente el usuario acepta la auditoría manual de sus documentos fiscales y de identidad por parte de PremiosRed.com.</p>
            </div>
            <div className="p-6 bg-slate-900 border-t border-white/5 flex justify-center">
              <button onClick={() => { setAcceptedTerms(true); setShowTermsModal(false); }} className="bg-orange-600 text-white font-black px-10 py-3 rounded-xl uppercase tracking-widest text-xs">ACEPTAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPortal;
