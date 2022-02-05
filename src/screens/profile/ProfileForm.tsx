import React from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';

import {UserProfile} from '../../api/types';

import {PrimaryButton} from '../../components/primary-button/PrimaryButton';
import {TextInput} from '../../components/text-input/TextInput';
import {IconButton} from '../../components/icon-button/IconButton';

import PhotoIcon from '../../../assets/icons/Photo.svg';

import {styles} from './styles';

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
  const {name, phoneNumber, city, locality, flatNumber} = userProfile;

  return (
    <View>
      <View style={styles.formInputs}>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChange={createChangeListener('name')}
          style={styles.input}
          defaultValue={name}
        />

        <IconButton
          icon={PhotoIcon}
          style={[styles.photoButton, styles.input]}
          iconStyle={styles.photoIcon}
          viewBox="0 0 50 46"
          onPress={onPhotoPress}
        />

        <TextInput
          placeholder="Mobile Number"
          value={phoneNumber}
          onChange={createChangeListener('phoneNumber')}
          style={styles.input}
          defaultValue={phoneNumber}
        />
        <TextInput
          placeholder="City"
          value={city}
          onChange={createChangeListener('city')}
          style={styles.input}
          defaultValue={city}
        />
        <TextInput
          placeholder="Locality, area of street"
          value={locality}
          onChange={createChangeListener('locality')}
          style={styles.input}
          defaultValue={locality}
        />
        <TextInput
          placeholder="Flat no., Building name"
          value={flatNumber}
          onChange={createChangeListener('flatNumber')}
          style={styles.input}
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
