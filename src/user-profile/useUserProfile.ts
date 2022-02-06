import React from 'react';
import {ID, UserProfile} from '../api/types';
import {useUserProfileAPI} from './useUserProfileAPI';

export function useUserProfile(id: ID) {
  const {getUser, saveUser} = useUserProfileAPI();

  const [userProfile, setUserProfile] = React.useState<UserProfile>();
  const [isLoadingUserProfile, setIsLoadingUserProfile] = React.useState(true);

  const loadUser = React.useCallback(async () => {
    setIsLoadingUserProfile(true);
    setUserProfile(undefined);

    try {
      setUserProfile(await getUser(id));
    } catch (err) {
    } finally {
      setIsLoadingUserProfile(false);
    }
  }, [getUser, id]);

  const onSave = React.useCallback(
    async (user: UserProfile) => {
      await saveUser(user);
      setUserProfile(user);
    },
    [saveUser],
  );

  React.useEffect(() => {
    loadUser();
  }, [loadUser]);

  return {
    userProfile,
    saveUser: onSave,
    isLoadingUserProfile,
  };
}
