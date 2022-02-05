import React from 'react';
import {ID, UserProfile} from '../api/types';
import {useStorage} from '../storage/useStorage';

const USER_PROFILE_STORAGE_KEY = 'user-profile';

export function useUserProfile(id: ID) {
  const storage = useStorage();

  const [userProfile, setUserProfile] = React.useState<UserProfile>();
  const [isLoadingUserProfile, setIsLoadingUserProfile] = React.useState(true);

  const getUsers = React.useCallback(async () => {
    const users = await storage.getItem<UserProfile[]>(
      USER_PROFILE_STORAGE_KEY,
    );
    return users ?? [];
  }, [storage]);

  const getUser = React.useCallback(async () => {
    const users = await getUsers();
    return users.find(user => user.id === id);
  }, [getUsers, id]);

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
  }, [loadUser]);

  return {
    userProfile,
    saveUser,
    isLoadingUserProfile,
    deleteUser,
  };
}
