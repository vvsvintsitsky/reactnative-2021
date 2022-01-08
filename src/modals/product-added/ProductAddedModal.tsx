import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Modal} from '../../components/modal/Modal';

import SuccessIcon from '../../../assets/icons/Success.svg';
import {PrimaryButton} from '../../components/primary-button/PrimaryButton';

export function ProductAddedModal() {
  const navigation = useNavigation();

  const onConfirm = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Modal
      headerText="Product added to your cart"
      icon={<SuccessIcon fill="#A5DC86" />}>
      <PrimaryButton onPress={onConfirm}>OK</PrimaryButton>
    </Modal>
  );
}
