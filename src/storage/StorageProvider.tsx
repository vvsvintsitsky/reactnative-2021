import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {Storage} from './Storage';
import {StorageContext} from './StorageContext';

export function StorageProvider({
  children,
  storageKey,
  asyncStorage = AsyncStorage,
}: React.PropsWithChildren<{
  storageKey: string;
  asyncStorage?: AsyncStorageStatic;
}>) {
  const [storage] = useState(() => new Storage(storageKey, asyncStorage));

  const getStorage = React.useCallback(() => storage, [storage]);

  return (
    <StorageContext.Provider value={getStorage}>
      {children}
    </StorageContext.Provider>
  );
}
