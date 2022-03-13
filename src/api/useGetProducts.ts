import React from 'react';
import {Product, RESOURCES} from './client/schema';
import {useApiClient} from './client/useApiClient';
import {TradeItem} from './types';

export function mapProductToTradeItem({
  id,
  attributes,
  relationships,
}: Product): TradeItem {
  const price = Number(attributes.price);
  const currentPrice = Number(attributes.compare_at_price ?? 0);

  return {
    id,
    description: attributes.description,
    name: attributes.name,
    price: Number(attributes.price),
    images: Array.from(
      {length: 5},
      () => `https://picsum.photos/id/${id}/200/200`,
    ),
    options: relationships.option_types.data.map(option => ({
      id: option.id,
      name: option.id,
    })),
    currentPrice: Number(attributes.price),
    hasDiscount: !!currentPrice && currentPrice - price < 0,
  };
}

export function useGetProducts(): () => Promise<TradeItem[]> {
  const apiClient = useApiClient();

  return React.useCallback(async () => {
    const response = await apiClient.request<{data: Product[]}>({
      resource: RESOURCES.GET_PRODUCTS,
    });

    return response.data.map(mapProductToTradeItem);
  }, [apiClient]);
}
