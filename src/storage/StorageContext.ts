import React from 'react';

import {AsyncStorage} from './types';

export const StorageContext = React.createContext<() => AsyncStorage>(() => {
  throw new Error('not implemented');
});
