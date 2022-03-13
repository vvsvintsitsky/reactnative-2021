import React from 'react';

import {StorageContext} from './StorageContext';

export function useStorage() {
  return React.useContext(StorageContext)();
}
