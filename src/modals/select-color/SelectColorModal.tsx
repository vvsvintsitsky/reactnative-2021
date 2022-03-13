import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Modal} from '../../components/modal/Modal';

import ErrorIcon from '../../../assets/icons/Error.svg';
import {ShadowedPrimaryButton} from '../../components/shadowed-primary-button/ShadowedPrimaryButton';

export function SelectColorModal() {
  const navigation = useNavigation();

  const onConfirm = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Modal
      headerText="Select Color"
      contentText={
        <>Please select your color to{'\n'}add this item in your cart</>
      }
      icon={<ErrorIcon fill="#DD6B55" />}>
      <ShadowedPrimaryButton onPress={onConfirm}>OK</ShadowedPrimaryButton>
    </Modal>
  );
}
