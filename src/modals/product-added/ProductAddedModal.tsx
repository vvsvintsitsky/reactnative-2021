import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Modal} from '../../components/modal/Modal';

import SuccessIcon from '../../../assets/icons/Success.svg';
import {ShadowedPrimaryButton} from '../../components/shadowed-primary-button/ShadowedPrimaryButton';

export function ProductAddedModal() {
  const navigation = useNavigation();

  const onConfirm = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Modal
      headerText="Product added to your cart"
      icon={<SuccessIcon fill="#A5DC86" />}>
      <ShadowedPrimaryButton onPress={onConfirm}>OK</ShadowedPrimaryButton>
    </Modal>
  );
}
