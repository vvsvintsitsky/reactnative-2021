import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import {UserProfile} from '../../api/types';
import {useUserProfile} from '../../user-profile/useUserProfile';
import {shallowEqual} from '../../utils/shallowEqual';

import {ProfileForm, ProfileFormProps} from './ProfileForm';
import {styles} from './styles';

export function ProfileScreen({user}: {user: UserProfile}) {
  const [profileToEdit, setProfileToEdit] = React.useState(user);

  const {saveUser, deleteUser, isLoadingUserProfile, userProfile} =
    useUserProfile(user.id);

  React.useEffect(() => {
    if (userProfile) {
      setProfileToEdit(userProfile);
    }
  }, [userProfile]);

  const onUpdate = React.useCallback(
    () => saveUser(profileToEdit),
    [profileToEdit, saveUser],
  );

  const createChangeListener: ProfileFormProps['createChangeListener'] =
    React.useCallback((key: keyof UserProfile) => {
      return function onChangeListener(e) {
        const {
          nativeEvent: {text},
        } = e;
        setProfileToEdit(prevProfile => ({
          ...prevProfile,
          [key]: text,
        }));
      };
    }, []);

  const onPhotoPress = React.useCallback(() => undefined, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.root}>
        {isLoadingUserProfile ? (
          <Text>Loading</Text>
        ) : (
          <ProfileForm
            userProfile={profileToEdit}
            onLogout={deleteUser}
            onUpdate={
              !shallowEqual(userProfile, profileToEdit) ? onUpdate : undefined
            }
            createChangeListener={createChangeListener}
            onPhotoPress={onPhotoPress}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
