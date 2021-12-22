import {Methods} from './types';

export interface Product {
  id: string;
  attributes: {
    description: string;
    price: string;
    name: string;
    compare_at_price: string | null;
  };
}

export const RESOURCES = {
  GET_PRODUCTS: {
    method: Methods.Get,
    path: 'api/v2/storefront/products/',
  },
  GET_PRODUCT: {
    method: Methods.Get,
    path: '/api/v2/storefront/products/',
  },
};
