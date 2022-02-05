import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import {ID, UserProfile} from '../../api/types';
import {useUserProfile} from '../../user-profile/useUserProfile';
import {shallowEqual} from '../../utils/shallowEqual';

import {ProfileForm, ProfileFormProps} from './ProfileForm';
import {styles} from './styles';

function createEmptyUser(id: ID = ''): UserProfile {
  return {
    id,
    city: '',
    flatNumber: '',
    locality: '',
    name: '',
    phoneNumber: '',
    imageUrl: '',
  };
}

const EMPTY_USER = createEmptyUser();

export function ProfileScreen({id = 'stub_id'}: {id?: ID}) {
  const [profileToEdit, setProfileToEdit] = React.useState(() =>
    createEmptyUser(id),
  );

  const {saveUser, deleteUser, isLoadingUserProfile, userProfile} =
    useUserProfile(id);

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
              !shallowEqual(userProfile ?? EMPTY_USER, profileToEdit)
                ? onUpdate
                : undefined
            }
            createChangeListener={createChangeListener}
            onPhotoPress={onPhotoPress}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
