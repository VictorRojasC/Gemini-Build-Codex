
import { Raffle, SubscriptionTier, Winner, PromotionPack } from './types';

export const RAFFLES: Raffle[] = [
  {
    id: '1',
    title: 'Porsche 911 GT3 RS',
    category: 'Automotive',
    prizeValue: '$225,000',
    endDate: '2024-12-31',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    ticketPrice: 50,
    featured: true,
  },
  {
    id: '2',
    title: 'Maldives Private Island Villa',
    category: 'Travel',
    prizeValue: '$45,000',
    endDate: '2024-11-15',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    ticketPrice: 25,
  },
  {
    id: '3',
    title: 'Custom Rolex GMT-Master II',
    category: 'Luxury',
    prizeValue: '$32,000',
    endDate: '2024-10-20',
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=800',
    ticketPrice: 15,
  },
  {
    id: '4',
    title: 'Tech Setup: Mac Studio & Pro Display',
    category: 'Electronics',
    prizeValue: '$12,000',
    endDate: '2024-09-30',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    ticketPrice: 10,
  }
];

export const TIERS: SubscriptionTier[] = [
  {
    id: 'basic',
    name: 'Explorer',
    price: 19.99,
    ticketsPerMonth: 5,
    multiplier: 1,
    features: ['Access to Basic Draws', 'Monthly Newsletter', '1% Cashback on extra tickets'],
    color: 'slate-400'
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 49.99,
    ticketsPerMonth: 20,
    multiplier: 1.5,
    features: ['Access to Exclusive Draws', 'AI Strategy Advisor', 'Early Access to New Raffles', '5% Cashback on tickets'],
    color: 'orange-500'
  },
  {
    id: 'elite',
    name: 'Elite Club',
    price: 149.99,
    ticketsPerMonth: 75,
    multiplier: 2.5,
    features: ['Access to VIP Grand Prizes', 'Dedicated Account Manager', 'Annual Gala Invitation', '10% Cashback on tickets', 'Custom Profile Badge'],
    color: 'purple-500'
  }
];

export const WINNERS: Winner[] = [
  { id: 'w1', name: 'Marco S.', prize: 'Tesla Model S Plaid', date: '2 days ago' },
  { id: 'w2', name: 'Elena R.', prize: 'Luxury Cruise for 2', date: '5 days ago' },
  { id: 'w3', name: 'Jonathan D.', prize: 'iPhone 15 Pro Max', date: '1 week ago' },
];

export const PROMOTION_PACKS: PromotionPack[] = [
  {
    id: 'tech',
    title: 'PACK TECNOLOGÍA',
    brand: 'APPLE',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    price: 6,
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    features: [
      '2 Códigos de Ahorro de (12 Cent € /L) en combustible en las GASOLINERAS GALP.com',
      '1 Bono de 2 Noches de hotel Valido para 2 Pers (Solo Alojamiento gratuito)',
      '1 Cupón Desc. Del 5% en Web/Tienda en APPLE.com'
    ],
    raffleEntries: '2 Participaciones gratis para el SORTEO de productos valorados en 3500€ a consumir en APPLE.com'
  },
  {
    id: 'moda',
    title: 'PACK MODA',
    brand: 'ZARA',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg',
    price: 7,
    color: 'bg-green-600',
    borderColor: 'border-green-600',
    features: [
      '3 Códigos de Ahorro de (12 Cent € /L) en combustible en las GASOLINERAS GALP.com',
      '2 Bonos de 2 Noches de hotel Valido para 2 Pers (Solo Alojamiento gratuito)',
      '1 Cupón Desc. Del 5% en Web/Tienda en ZARA.com'
    ],
    raffleEntries: '3 Participaciones gratis para el SORTEO de productos valorados en 4500€ a consumir en ZARA.com'
  },
  {
    id: 'cosmetica',
    title: 'PACK COSMETICA',
    brand: 'DRUNI',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Logo_Druni.png',
    price: 8,
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    features: [
      '4 Códigos de Ahorro de (12 Cent € /L) en combustible en las GASOLINERAS GALP.com',
      '3 Bonos de 2 Noches de hotel Valido para 2 Pers (Solo Alojamiento gratuito)',
      '1 Cupón Desc. Del 5% en Web/Tienda en DRUNI.com'
    ],
    raffleEntries: '4 Participaciones gratis para el SORTEO de productos valorados en 5500€ a consumir en DRUNI.com'
  },
  {
    id: 'caribe',
    title: 'PACK CARIBE Todo Incluido 7 noches/9 dias 2 pers',
    brand: 'RIU',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Riu_Hotels_Logo.svg',
    price: 9,
    color: 'bg-red-600',
    borderColor: 'border-red-600',
    features: [
      '5 Códigos de Ahorro de (12 Cent € /L) en combustible en las GASOLINERAS GALP.com',
      '4 Bonos de 2 Noches de hotel Valido para 2 Pers (Solo Alojamiento gratuito)',
      '1 Cupón Desc. Del 5% en Web/Tienda en RIU.com'
    ],
    raffleEntries: '5 Participaciones gratis para el SORTEO de productos valorados en 6500€ a consumir en RIU.com'
  }
];
