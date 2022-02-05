import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {UserProfile} from '../../api/types';
import {shallowEqual} from '../../utils/shallowEqual';

import {ProfileForm, ProfileFormProps} from './ProfileForm';
import {styles} from './styles';

const userProfile: UserProfile = {
  id: '',
  city: '',
  flatNumber: '',
  locality: '',
  name: '',
  phoneNumber: '',
  imageUrl: '',
};

export function ProfileScreen() {
  const onLogout = React.useCallback(() => undefined, []);
  const onUpdate = React.useCallback(() => undefined, []);

  const [profileToEdit, setProfileToEdit] = React.useState(userProfile);

  const createChangeListener: ProfileFormProps['createChangeListener'] =
    React.useCallback((key: keyof UserProfile) => {
      return function onChangeListener(e) {
        setProfileToEdit(prevProfile => ({
          ...prevProfile,
          [key]: e.nativeEvent.text,
        }));
      };
    }, []);

  const onPhotoPress = React.useCallback(() => undefined, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.root}>
        <ProfileForm
          userProfile={profileToEdit}
          onLogout={onLogout}
          onUpdate={
            !shallowEqual(userProfile, profileToEdit) ? onUpdate : undefined
          }
          createChangeListener={createChangeListener}
          onPhotoPress={onPhotoPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
