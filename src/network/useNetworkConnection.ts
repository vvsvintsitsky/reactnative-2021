import React from 'react';

import {NetworkConnectionContext} from './NetworkConnectionContext';

export function useNetworkConnection() {
  return React.useContext(NetworkConnectionContext);
}
