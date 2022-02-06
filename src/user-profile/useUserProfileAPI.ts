import React from 'react';
import {ID, UserProfile} from '../api/types';
import {useStorage} from '../storage/useStorage';

const USER_PROFILE_STORAGE_KEY = 'user-profile';

export function useUserProfileAPI() {
  const storage = useStorage();

  const getUsers = React.useCallback(async () => {
    const users = await storage.getItem<UserProfile[]>(
      USER_PROFILE_STORAGE_KEY,
    );
    return users ?? [];
  }, [storage]);

  const getUser = React.useCallback(
    async (id: ID) => {
      const users = await getUsers();
      return users.find(user => user.id === id);
    },
    [getUsers],
  );

  const updateUsers = React.useCallback(
    async (updater: (users: UserProfile[]) => UserProfile[]) => {
      const users = await getUsers();

      return storage.setItem(USER_PROFILE_STORAGE_KEY, updater(users));
    },
    [getUsers, storage],
  );

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
    },
    [updateUsers],
  );

  const deleteUser = React.useCallback(
    (id: ID) => {
      return updateUsers(users => users.filter(user => user.id === id));
    },
    [updateUsers],
  );

  return {
    saveUser,
    deleteUser,
    getUser,
    getUsers,
  };
}
