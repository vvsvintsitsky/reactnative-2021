import React from 'react';
import {ID, UserProfile} from '../api/types';
import {AsyncStorage} from '../storage/types';
import {useStorage} from '../storage/useStorage';

const USER_PROFILE_STORAGE_KEY = 'user-profile';

async function getUsersFromStorage(storage: AsyncStorage) {
  const users = await storage.getItem<UserProfile[]>(USER_PROFILE_STORAGE_KEY);
  return users ?? [];
}

export async function getUserFromStorage(storage: AsyncStorage, id: ID) {
  const users = await getUsersFromStorage(storage);
  return users.find(user => user.id === id);
}

export function useUserProfile(id: ID) {
  const storage = useStorage();

  const [userProfile, setUserProfile] = React.useState<UserProfile>();
  const [isLoadingUserProfile, setIsLoadingUserProfile] = React.useState(true);

  const getUsers = React.useCallback(
    () => getUsersFromStorage(storage),
    [storage],
  );

  const getUser = React.useCallback(
    async () => getUserFromStorage(storage, id),
    [storage, id],
  );

  const updateUsers = React.useCallback(
    async (updater: (users: UserProfile[]) => UserProfile[]) => {
      const users = await getUsers();

      return storage.setItem(USER_PROFILE_STORAGE_KEY, updater(users));
    },
    [getUsers, storage],
  );

  const loadUser = React.useCallback(async () => {
    setIsLoadingUserProfile(true);
    setUserProfile(undefined);

    try {
      setUserProfile(await getUser());
    } catch (err) {
    } finally {
      setIsLoadingUserProfile(false);
    }
  }, [getUser]);

  const saveUser = React.useCallback(
    async (userToSave: UserProfile) => {
      await updateUsers(users => {
        const userIndex = users.findIndex(user => user.id === userToSave.id);

        if (userIndex >= 0) {
          users = [];
        } else {
          users.push(userToSave);
        }

        return users;
      });

      return loadUser();
    },
    [updateUsers, loadUser],
  );

  const deleteUser = React.useCallback(() => {
    return updateUsers(users => users.filter(user => user.id === id));
  }, [updateUsers, id]);

  React.useEffect(() => {
    loadUser();
  }, [loadUser, id]);

  return {
    userProfile,
    saveUser,
    isLoadingUserProfile,
    deleteUser,
  };
}
