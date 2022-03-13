import React from 'react';
import {NoNetworkError} from './NoNetworkError';
import {useNetworkConnection} from './useNetworkConnection';

export function useWithNoNetworkHandler<T>({
  callback,
  onNoConnection,
}: {
  callback: () => Promise<T>;
  onNoConnection: () => void;
}): () => Promise<T> {
  const {getIsConnected} = useNetworkConnection();

  return React.useCallback(async () => {
    try {
      return await callback();
    } catch (e) {
      if (!getIsConnected()) {
        onNoConnection();
      }

      throw new NoNetworkError(
        'no network',
        e instanceof Error ? e : undefined,
      );
    }
  }, [callback, onNoConnection, getIsConnected]);
}
