
export interface Raffle {
  id: string;
  title: string;
  category: string;
  prizeValue: string;
  endDate: string;
  imageUrl: string;
  ticketPrice: number;
  featured?: boolean;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  ticketsPerMonth: number;
  multiplier: number;
  features: string[];
  color: string;
}

export interface Winner {
  id: string;
  name: string;
  prize: string;
  date: string;
}

export interface PromotionPack {
  id: string;
  title: string;
  brand: string;
  logoUrl: string;
  price: number;
  color: string;
  borderColor: string;
  features: string[];
  raffleEntries: string;
}
