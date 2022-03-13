import React from 'react';
import {useGetProducts} from '../../api/useGetProducts';
import {useRefetch} from '../../api/useRefetch';

export function useMainScreen() {
  const getProducts = useGetProducts();
  const {isLoading, data, refetch} = useRefetch(getProducts);

  const products = React.useMemo(() => data || [], [data]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return {isLoading, products, refetch};
}
