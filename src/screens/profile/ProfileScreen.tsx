import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

import {UserProfile} from '../../api/types';
import {DrawerRoutes} from '../../navigation/DrawerRoutes';
import {useUserProfile} from '../../user-profile/useUserProfile';
import {shallowEqual} from '../../utils/shallowEqual';

import {ProfileForm, ProfileFormProps} from './ProfileForm';
import {styles} from './styles';

const IMAGE_PICKER_OPTIONS: ImageLibraryOptions = {
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: true,
};

export function ProfileScreen({
  user,
  navigation,
}: {
  user: UserProfile;
  navigation: DrawerScreenProps<
    {[DrawerRoutes.ConfirmLogout]: {}},
    DrawerRoutes.ConfirmLogout
  >['navigation'];
}) {
  const [profileToEdit, setProfileToEdit] = React.useState(user);

  const {saveUser, isLoadingUserProfile, userProfile} = useUserProfile(user.id);

  React.useEffect(() => {
    if (userProfile) {
      setProfileToEdit(userProfile);
    }
  }, [userProfile]);

  const onUpdate = React.useCallback(
    () => saveUser(profileToEdit),
    [profileToEdit, saveUser],
  );

  const onLogout = React.useCallback(() => {
    navigation.navigate(DrawerRoutes.ConfirmLogout, {});
  }, [navigation]);

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

  const onPhotoPress = React.useCallback(async () => {
    const {didCancel, errorCode, assets} = await launchImageLibrary(
      IMAGE_PICKER_OPTIONS,
    );
    if (didCancel || errorCode || !assets) {
      return;
    }

    const imageData = assets[0]?.base64;
    if (!imageData) {
      return;
    }

    setProfileToEdit(prevProfile => ({
      ...prevProfile,
      imageUrl: `data:image/jpeg;base64,${imageData}`,
    }));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.root}>
        {isLoadingUserProfile ? (
          <Text>Loading</Text>
        ) : (
          <ProfileForm
            userProfile={profileToEdit}
            onLogout={onLogout}
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
