
import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Ticket, Settings, LogOut, 
  Search, Bell, ShieldCheck, TrendingUp, DollarSign,
  UserCheck, AlertCircle, Building2, ChevronRight, Eye, Trash2,
  Package, Edit3, Save, X as CloseIcon, Plus, Briefcase, Zap, 
  Handshake, Activity, FileText, CheckCircle2, Clock, QrCode, CreditCard,
  UserPlus, MousePointer2, Filter, Phone, Mail, MoreVertical, Image as ImageIcon,
  Info, Globe, Gift, ExternalLink, Percent, ShieldAlert,
  // Fix: Added missing FileUp icon import
  FileUp
} from 'lucide-react';
import { PROMOTION_PACKS, RAFFLES } from '../../constants';
import { PromotionPack, Raffle } from '../../types';

interface Props {
  user: any;
  onLogout: () => void;
}

const AdminDashboard: React.FC<Props> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [packs, setPacks] = useState<PromotionPack[]>(PROMOTION_PACKS);
  const [raffles, setRaffles] = useState<Raffle[]>(RAFFLES);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editForm, setEditForm] = useState<any>({});

  // Mock Data enriquecida
  const stats = [
    { label: 'Facturación Mensual', value: '€42.850,00', trend: '+22%', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Leads (Escaneos)', value: '1.284', trend: '+15%', icon: QrCode, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: 'Suscripciones Activas', value: '856', trend: '+8%', icon: ShieldCheck, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Tasa de Conversión', value: '14.2%', trend: '+3.5%', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ];

  const agreements = [
    { id: 'AG-1', brand: 'GALP', benefit: '12 cts/litro ahorro Directo', category: 'Combustible', status: 'Activo', commissions: '2.5%', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Galp_Logo.svg' },
    { id: 'AG-2', brand: 'AMAZON', benefit: '5% Tarjetas Regalo', category: 'Marketplace', status: 'Activo', commissions: '1.0%', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { id: 'AG-3', brand: 'ZARA', benefit: '10% Descuento Temporada', category: 'Moda', status: 'Pausado', commissions: '5.0%', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' },
  ];

  const handleEditOpen = (item: any, type: string) => {
    setEditingItem({ ...item, _type: type });
    setEditForm({ ...item });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8 animate-fade-in">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-[2rem] backdrop-blur-md relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform ${stat.color}`}>
                    <stat.icon className="w-20 h-20" />
                  </div>
                  <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} w-fit mb-4`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black">{stat.value}</span>
                    <span className="text-[10px] font-bold text-green-500">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2 bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-2">
                    <Activity className="text-orange-500" /> Rendimiento Global
                  </h3>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-black uppercase outline-none">
                    <option>Últimos 30 días</option>
                    <option>Últimos 7 días</option>
                  </select>
                </div>
                <div className="h-64 flex items-end gap-3 px-2">
                  {[35, 65, 45, 85, 55, 95, 75, 40, 80, 60, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group">
                      <div 
                        className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-xl transition-all duration-1000 group-hover:from-orange-500 group-hover:to-orange-300" 
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[9px] font-black text-slate-500 uppercase tracking-widest px-1">
                  <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
                </div>
              </div>

              {/* Status Board */}
              <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8">
                <h3 className="text-lg font-black uppercase tracking-tighter mb-6">Estado del Sistema</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Pasarela Stripe', status: 'Online', color: 'text-green-500' },
                    { label: 'Servidor Gemini AI', status: 'Online', color: 'text-green-500' },
                    { label: 'API Notarial (Sorteos)', status: 'Delay (200ms)', color: 'text-yellow-500' },
                    { label: 'Webhook GALP', status: 'Syncing', color: 'text-blue-500' },
                  ].map((sys, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{sys.label}</span>
                      <span className={`text-[10px] font-black uppercase ${sys.color}`}>{sys.status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-orange-600/10 border border-orange-500/20 rounded-2xl">
                   <div className="flex items-center gap-3 text-orange-500 mb-2">
                     <ShieldAlert className="w-5 h-5" />
                     <span className="text-xs font-black uppercase">Alerta Legal</span>
                   </div>
                   <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                     Faltan 12 días para el reporte trimestral ante la DGOJ. Asegúrate de que todas las actas estén firmadas.
                   </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'packs':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Administrador de Packs</h2>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Configuración técnica de promociones y beneficios</p>
              </div>
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-orange-600/20 flex items-center gap-2">
                <Plus className="w-4 h-4" /> Nuevo Pack Promocional
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {packs.map((p) => (
                <div key={p.id} className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 flex flex-col xl:flex-row gap-8 items-center group hover:border-orange-500/20 transition-all">
                  {/* Image/Logo Block */}
                  <div className="flex gap-4">
                    <div className="w-32 h-32 bg-white rounded-3xl p-6 flex items-center justify-center relative shadow-2xl">
                      <img src={p.logoUrl} alt={p.brand} className="max-h-full max-w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                      <div className="absolute -bottom-2 -right-2 bg-slate-900 p-2 rounded-xl border border-white/10">
                        <ImageIcon className="w-4 h-4 text-orange-500" />
                      </div>
                    </div>
                  </div>

                  {/* Info Block */}
                  <div className="flex-1 text-center xl:text-left">
                    <div className="flex flex-col xl:flex-row xl:items-center gap-2 mb-2">
                      <h3 className="text-xl font-black uppercase tracking-tighter">{p.title}</h3>
                      <span className="bg-orange-600/10 text-orange-500 px-3 py-1 rounded-lg text-[9px] font-black uppercase border border-orange-500/20 w-fit mx-auto xl:mx-0">
                        {p.brand}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[8px] font-black text-slate-500 uppercase mb-1">Precio</div>
                        <div className="text-lg font-black text-orange-500">{p.price}€</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[8px] font-black text-slate-500 uppercase mb-1">Participaciones</div>
                        <div className="text-lg font-black text-white">{p.raffleEntries.split(' ')[0]}</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[8px] font-black text-slate-500 uppercase mb-1">Estado</div>
                        <div className="text-[10px] font-black text-green-500 uppercase mt-2">Publicado</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[8px] font-black text-slate-500 uppercase mb-1">Ventas Hoy</div>
                        <div className="text-lg font-black text-white">42</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Block */}
                  <div className="flex flex-col gap-2 shrink-0">
                    <button 
                      onClick={() => handleEditOpen(p, 'pack')}
                      className="bg-white/5 hover:bg-orange-600 text-slate-400 hover:text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <Edit3 className="w-4 h-4" /> Editar Pack
                    </button>
                    <button className="bg-white/5 hover:bg-red-600 text-slate-400 hover:text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/10 transition-all flex items-center justify-center gap-2">
                      <Trash2 className="w-4 h-4" /> Eliminar
                    </button>
                    <button className="p-3 text-slate-500 hover:text-white flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'agreements':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Convenios de Marca</h2>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Gestión de alianzas estratégicas y beneficios</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-2">
                <Handshake className="w-4 h-4" /> Nuevo Convenio
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {agreements.map((ag) => (
                <div key={ag.id} className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white p-4 rounded-2xl w-20 h-20 flex items-center justify-center shadow-2xl">
                      <img src={ag.logo} alt={ag.brand} className="max-h-full max-w-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase border ${
                      ag.status === 'Activo' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {ag.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-1">{ag.brand}</h3>
                  <div className="text-[10px] font-black text-slate-500 uppercase mb-6">{ag.category}</div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[9px] font-black text-slate-500 uppercase">Beneficio</span>
                      <span className="text-[10px] font-bold text-white">{ag.benefit}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[9px] font-black text-slate-500 uppercase">Comisión</span>
                      <span className="text-[10px] font-black text-orange-500">{ag.commissions}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/5 border border-white/10 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Configurar</button>
                    <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-500 hover:text-white"><Eye className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'raffles':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Control de Sorteos</h2>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Monitoreo de premios y tickets emitidos</p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-2">
                <Gift className="w-4 h-4" /> Configurar Gran Premio
              </button>
            </div>

            <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                  <tr>
                    <th className="p-6">Premio / Categoría</th>
                    <th className="p-6">Valor Estimado</th>
                    <th className="p-6">Tickets Emitidos</th>
                    <th className="p-6">Progreso</th>
                    <th className="p-6">Cierre</th>
                    <th className="p-6 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {raffles.map((r) => (
                    <tr key={r.id} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <img src={r.imageUrl} className="w-14 h-14 rounded-2xl object-cover shadow-2xl" />
                          <div>
                            <div className="text-xs font-black uppercase text-white group-hover:text-orange-500 transition-colors">{r.title}</div>
                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{r.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 font-black text-orange-500">{r.prizeValue}</td>
                      <td className="p-6">
                         <div className="text-xs font-bold text-white">14.280</div>
                         <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">Participaciones</div>
                      </td>
                      <td className="p-6">
                        <div className="w-32">
                          <div className="flex justify-between text-[8px] font-black uppercase mb-1.5">
                            <span className="text-slate-500">Capacidad</span>
                            <span className="text-white">72%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-600 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-black uppercase">{r.endDate}</span>
                        </div>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2.5 bg-white/5 rounded-xl text-slate-500 hover:text-white transition-all"><Edit3 className="w-4 h-4" /></button>
                          <button className="p-2.5 bg-white/5 rounded-xl text-slate-500 hover:text-white transition-all"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 mb-8">
              <Activity className="w-16 h-16 text-orange-500 animate-pulse" />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Módulo en Desarrollo</h2>
            <p className="text-slate-500 max-w-sm mx-auto text-sm mt-4 font-medium italic">
              Estamos configurando el motor de {activeTab.toUpperCase()} para sincronización masiva de datos.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900/60 border-r border-white/5 flex flex-col p-8 sticky top-0 h-screen shrink-0 overflow-y-auto backdrop-blur-3xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-orange-600 p-2.5 rounded-2xl shadow-xl shadow-orange-600/30">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter block leading-none">MASTER</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Premios Red AI</span>
          </div>
        </div>

        <nav className="space-y-2 flex-grow">
          <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4 px-4">Administración</div>
          {[
            { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'users', label: 'Usuarios y Leads', icon: Users },
            { id: 'companies', label: 'Empresas Auditoría', icon: Building2 },
            { id: 'promoters', label: 'Red Promotores', icon: MousePointer2 },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest ${
                activeTab === item.id 
                  ? 'bg-orange-600 text-white shadow-2xl shadow-orange-600/20' 
                  : 'text-slate-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}

          <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mt-10 mb-4 px-4">Operativa Catálogo</div>
          {[
            { id: 'packs', label: 'Gestión de Packs', icon: Package },
            { id: 'agreements', label: 'Convenios Marcas', icon: Handshake },
            { id: 'raffles', label: 'Sorteos Activos', icon: Gift },
            { id: 'entries', label: 'Participaciones', icon: Ticket },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest ${
                activeTab === item.id 
                  ? 'bg-orange-600 text-white shadow-2xl shadow-orange-600/20' 
                  : 'text-slate-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/5 space-y-4">
          <button className="w-full flex items-center gap-4 px-5 py-3 text-slate-500 hover:text-white text-[11px] font-black uppercase tracking-widest transition-all">
            <Settings className="w-4 h-4" /> Configuración
          </button>
          <button onClick={onLogout} className="w-full flex items-center gap-4 px-5 py-3 text-red-500/70 hover:text-red-500 text-[11px] font-black uppercase tracking-widest transition-all">
            <LogOut className="w-4 h-4" /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 overflow-y-auto">
        <header className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase leading-none mb-2">{activeTab.replace('-', ' ')}</h1>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Servidor Activo
              </span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">v2.4.0 Build 2026</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-orange-500 transition-colors" />
              <input type="text" placeholder="Buscar en la red..." className="bg-slate-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-xs text-white focus:outline-none focus:border-orange-500 transition-all w-72 backdrop-blur-xl" />
            </div>
            <button className="relative p-4 bg-slate-900/50 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
              <Bell className="w-6 h-6 text-slate-400" />
              <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-orange-600 rounded-full border-2 border-slate-900"></span>
            </button>
            <div className="flex items-center gap-3 p-1.5 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-black text-white shadow-lg">AD</div>
              <div className="hidden xl:block pr-4">
                <div className="text-[10px] font-black uppercase tracking-widest">Administrador</div>
                <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Super User Root</div>
              </div>
            </div>
          </div>
        </header>

        {renderContent()}

        {/* Modal de Edición Contextual */}
        {editingItem && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
            <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setEditingItem(null)}></div>
            <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[3rem] p-12 shadow-2xl animate-scale-up">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                    <Edit3 className="text-orange-500" /> Editor de {editingItem._type === 'pack' ? 'Pack Promo' : 'Sorteo'}
                  </h3>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Modificando ID: {editingItem.id}</p>
                </div>
                <button onClick={() => setEditingItem(null)} className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all">
                  <CloseIcon className="w-6 h-6 text-slate-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1">Título del Pack</label>
                  <input 
                    type="text" 
                    value={editForm.title}
                    onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-xs font-bold text-white outline-none focus:border-orange-500 transition-all" 
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1">Precio (€)</label>
                  <input 
                    type="number" 
                    value={editForm.price}
                    onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-xs font-bold text-white outline-none focus:border-orange-500 transition-all" 
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1">Beneficios (Desglose por líneas)</label>
                  <textarea 
                    rows={4}
                    value={editForm.features?.join('\n')}
                    onChange={(e) => setEditForm({...editForm, features: e.target.value.split('\n')})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-xs font-medium text-slate-300 outline-none focus:border-orange-500 transition-all resize-none" 
                  />
                </div>
                <div className="col-span-2 flex flex-col sm:flex-row gap-4 items-center p-6 bg-white/5 rounded-[2rem] border border-white/5">
                   <div className="w-20 h-20 bg-white rounded-2xl p-4 flex items-center justify-center relative shadow-xl overflow-hidden group">
                      <img src={editForm.logoUrl} className="max-h-full max-w-full grayscale opacity-50" />
                      <div className="absolute inset-0 bg-orange-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                         <FileUp className="w-5 h-5 text-white" />
                      </div>
                   </div>
                   <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-xs font-black uppercase text-white mb-1">Imagen de Identidad (Logo)</h4>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">Formatos aceptados: PNG, SVG, JPG. Tamaño recomendado: 512x512px.</p>
                      <button className="mt-3 text-[9px] font-black text-orange-500 uppercase border-b border-orange-500 pb-1">Cambiar activo visual</button>
                   </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <button 
                  onClick={() => setEditingItem(null)}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  Descartar
                </button>
                <button 
                  onClick={() => {
                    if (editingItem._type === 'pack') setPacks(packs.map(p => p.id === editingItem.id ? editForm : p));
                    setEditingItem(null);
                  }}
                  className="flex-1 bg-orange-600 hover:bg-orange-500 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-orange-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" /> Guardar Configuración
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
