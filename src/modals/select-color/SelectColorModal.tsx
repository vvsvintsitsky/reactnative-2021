import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {ShadowedPrimaryButton} from '../../components/shadowed-primary-button/ShadowedPrimaryButton';

import {ErrorModal} from '../error/ErrorModal';

export function SelectColorModal() {
  const navigation = useNavigation();

  const onConfirm = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ErrorModal
      headerText="Select Color"
      contentText={
        <>Please select your color to{'\n'}add this item in your cart</>
      }>
      <ShadowedPrimaryButton onPress={onConfirm}>OK</ShadowedPrimaryButton>
    </ErrorModal>
  );
}
