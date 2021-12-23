import React from 'react';
import {Product, RESOURCES} from './client/schema';
import {useApiClient} from './client/useApiClient';
import {ID, TradeItem} from './types';
import {mapProductToTradeItem} from './useGetProducts';

export function useGetProduct({id}: {id: ID}): () => Promise<TradeItem> {
  const apiClient = useApiClient();

  return React.useCallback(async () => {
    const response = await apiClient.request<{data: Product}>({
      resource: RESOURCES.GET_PRODUCT,
      pathParams: {id},
    });

    return mapProductToTradeItem(response.data);
  }, [apiClient, id]);
}
