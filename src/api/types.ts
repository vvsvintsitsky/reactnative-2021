export type ID = string;

export interface Identifiable {
  id: ID;
}

export interface TradeItem extends Identifiable {
  price: number;
  name: string;
  imageSrc: string;
  currentPrice: number;
  hasDiscount: boolean;
  description: string;
}
