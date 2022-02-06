import React from 'react';
import {ID, UserProfile} from '../api/types';
import {useStorage} from '../storage/useStorage';
import {createEmptyUser} from '../user-profile/createEmptyUser';
import {getUserFromStorage} from '../user-profile/useUserProfile';
import {AuthenticationState} from './types';

const STUB_USER_ID = 'stub_user_id';
const AUTHENTICATION_STORAGE_KEY = 'authentication';

export function useAuthentication(): AuthenticationState {
  const [user, setUser] = React.useState<UserProfile | null>();

  const storage = useStorage();

  const onLogout = React.useCallback(async () => {
    await storage.setItem(AUTHENTICATION_STORAGE_KEY, null);
    setUser(null);
  }, [storage]);

  React.useEffect(() => {
    (async () => {
      const userId = await storage.getItem<ID>(AUTHENTICATION_STORAGE_KEY);

      if (!userId) {
        return;
      }

      const userFromStorage = await getUserFromStorage(storage, userId);

      if (userFromStorage) {
        return setUser(userFromStorage);
      }

      onLogout();
    })();
  }, [storage, onLogout]);

  const onAuthenticate = React.useCallback(async () => {
    const emptyUser = createEmptyUser(STUB_USER_ID);
    await storage.setItem(AUTHENTICATION_STORAGE_KEY, emptyUser);
    setUser(emptyUser);
  }, [storage]);

  return {user, onAuthenticate, onLogout};
}
