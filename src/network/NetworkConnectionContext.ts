import React from 'react';

export const NetworkConnectionContext = React.createContext<{
  isConnected: boolean;
  getIsConnected: () => boolean;
}>({
  isConnected: false,
  getIsConnected: () => {
    throw new Error('not implemented');
  },
});
