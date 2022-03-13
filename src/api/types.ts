export type ID = string;

export interface Identifiable {
  id: ID;
}

export interface TradeItemOption {
  id: ID;
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
