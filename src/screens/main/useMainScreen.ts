import React from 'react';
import {useGetProducts} from '../../api/useGetProducts';
import {useRefetch} from '../../api/useRefetch';
import {useWithNoNetworkHandler} from '../../network/useWithNoNetworkHandler';

export function useMainScreen() {
  const getProducts = useGetProducts();
  const {isLoading, data, refetch} = useRefetch(getProducts);

  const products = React.useMemo(() => data || [], [data]);

  const [hasNetworkError, setHasNetworkError] = React.useState(false);

  const onNetworkError = React.useCallback(() => setHasNetworkError(true), []);
  const resetNetworkError = React.useCallback(
    () => setHasNetworkError(false),
    [],
  );

  const withNetworkHandlerRefetch = useWithNoNetworkHandler({
    callback: refetch,
    onNoConnection: onNetworkError,
  });

  const loadData = React.useCallback(() => {
    resetNetworkError();
    return withNetworkHandlerRefetch();
  }, [withNetworkHandlerRefetch, resetNetworkError]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    isLoading,
    products,
    refetch: loadData,
    hasNetworkError,
    resetNetworkError,
  };
}
