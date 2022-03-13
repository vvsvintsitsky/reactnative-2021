import React from 'react';
import {ID, UserProfile} from '../api/types';
import {useStorage} from '../storage/useStorage';
import {createEmptyUser} from '../user-profile/createEmptyUser';
import {useUserProfileAPI} from '../user-profile/useUserProfileAPI';
import {AuthenticationState} from './types';

const STUB_USER_ID = 'stub_user_id';
const AUTHENTICATION_STORAGE_KEY = 'authentication';

export function useAuthentication(): AuthenticationState {
  const [user, setUser] = React.useState<UserProfile | null>();

  const storage = useStorage();
  const {getUser, saveUser, deleteUser} = useUserProfileAPI();

  const onLogout = React.useCallback(async () => {
    await storage.setItem(AUTHENTICATION_STORAGE_KEY, null);

    if (user) {
      setUser(null);
      deleteUser(user!.id);
    }
  }, [storage, user, deleteUser]);

  React.useEffect(() => {
    (async () => {
      const userId = await storage.getItem<ID>(AUTHENTICATION_STORAGE_KEY);

      if (!userId) {
        return;
      }

      const userFromStorage = await getUser(userId);

      if (userFromStorage) {
        return setUser(userFromStorage);
      }
    })();
  }, [storage, getUser]);

  const onAuthenticate = React.useCallback(async () => {
    const emptyUser = createEmptyUser(STUB_USER_ID);
    await saveUser(emptyUser);
    await storage.setItem(AUTHENTICATION_STORAGE_KEY, STUB_USER_ID);
    setUser(emptyUser);
  }, [storage, saveUser]);

  return {user, onAuthenticate, onLogout};
}
