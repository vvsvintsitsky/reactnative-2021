import React from 'react';

export function useRefetch<T>(loadData: () => Promise<T>) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<T>();

  const refetch = React.useCallback(() => {
    setIsLoading(true);

    return loadData()
      .then(setData)
      .finally(() => setIsLoading(false));
  }, [loadData]);

  return {isLoading, data, refetch};
}
