export type ID = string;

export interface Identifiable {
  id: ID;
}

export interface TradeItemOption extends Identifiable {
  name: string;
}

export interface TradeItem extends Identifiable {
  price: number;
  name: string;
  images: string[];
  options: TradeItemOption[];
  currentPrice: number;
  hasDiscount: boolean;
  description: string;
}

export interface UserProfile extends Identifiable {
  name: string;
  phoneNumber: string;
  city: string;
  locality: string;
  flatNumber: string;
  imageUrl: string;
}
