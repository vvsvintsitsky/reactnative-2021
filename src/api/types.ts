export type ID = string;

export interface Identifiable {
  id: ID;
}

export interface TradeItem extends Identifiable {
  price: number;
  name: string;
  images: string[];
  options: {id: ID; name: string}[];
  currentPrice: number;
  hasDiscount: boolean;
  description: string;
}
