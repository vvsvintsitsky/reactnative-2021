import React from 'react';

import NetInfo from '@react-native-community/netinfo';

import {NetworkConnectionContext} from './NetworkConnectionContext';

export function NetworkConnectionProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [isConnected, setIsConnected] = React.useState(false);

  React.useEffect(() => {
    return NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
    });
  }, []);

  const isConnectedRef = React.useRef(isConnected);
  const getIsConnected = React.useCallback(() => {
    return isConnectedRef.current;
  }, []);

  return (
    <NetworkConnectionContext.Provider value={{isConnected, getIsConnected}}>
      {children}
    </NetworkConnectionContext.Provider>
  );
}
