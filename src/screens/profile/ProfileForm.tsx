import React from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
  Image,
} from 'react-native';

import {UserProfile} from '../../api/types';

import {PrimaryButton} from '../../components/primary-button/PrimaryButton';
import {TextInput} from '../../components/text-input/TextInput';
import {IconButton} from '../../components/icon-button/IconButton';

import PhotoIcon from '../../../assets/icons/Photo.svg';

import {styles} from './styles';
import {InteractiveContent} from '../../components/interactive-content/InteractiveContent';

export interface ProfileFormProps {
  userProfile: UserProfile;
  onLogout: () => void;
  onUpdate?: () => void;
  createChangeListener: (
    key: keyof UserProfile,
  ) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onPhotoPress: () => void;
}

export function ProfileForm({
  userProfile,
  onLogout,
  onUpdate,
  createChangeListener,
  onPhotoPress,
}: ProfileFormProps) {
  const {name, phoneNumber, city, locality, flatNumber, imageUrl} = userProfile;

  return (
    <View>
      <View style={styles.formInputs}>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChange={createChangeListener('name')}
          containerStyle={styles.input}
          defaultValue={name}
        />

        {imageUrl ? (
          <InteractiveContent
            onPress={onPhotoPress}
            style={[styles.photo, styles.input]}>
            <Image style={styles.photo} source={{uri: imageUrl}} />
          </InteractiveContent>
        ) : (
          <IconButton
            icon={PhotoIcon}
            style={[styles.photoButton, styles.photo, styles.input]}
            iconStyle={styles.photoIcon}
            viewBox="0 0 50 46"
            onPress={onPhotoPress}
          />
        )}

        <TextInput
          placeholder="Mobile Number"
          value={phoneNumber}
          onChange={createChangeListener('phoneNumber')}
          containerStyle={styles.input}
          defaultValue={phoneNumber}
        />
        <TextInput
          placeholder="City"
          value={city}
          onChange={createChangeListener('city')}
          containerStyle={styles.input}
          defaultValue={city}
        />
        <TextInput
          placeholder="Locality, area of street"
          value={locality}
          onChange={createChangeListener('locality')}
          containerStyle={styles.input}
          defaultValue={locality}
        />
        <TextInput
          placeholder="Flat no., Building name"
          value={flatNumber}
          onChange={createChangeListener('flatNumber')}
          containerStyle={styles.input}
          defaultValue={flatNumber}
        />
      </View>

      {onUpdate && (
        <PrimaryButton
          onPress={onUpdate}
          key="profile.form.update"
          isFullWidth
          style={styles.button}>
          UPDATE
        </PrimaryButton>
      )}
      <PrimaryButton
        onPress={onLogout}
        key="profile.form.logout"
        isFullWidth
        style={styles.button}>
        LOGOUT
      </PrimaryButton>
    </View>
  );
}
