import React from 'react';

import {ShadowedPrimaryButton} from '../../components/shadowed-primary-button/ShadowedPrimaryButton';
import {ErrorModal} from '../error/ErrorModal';

import {styles} from './styles';

export function NetworkErrorModal({
  onTryAgain,
  onCancel,
}: {
  onTryAgain: () => void;
  onCancel: () => void;
}) {
  return (
    <ErrorModal
      headerText="Network error occured"
      contentText={<>Would you like to try again?</>}>
      <ShadowedPrimaryButton
        onPress={onTryAgain}
        shadowContainerStyle={styles.button}>
        Try again
      </ShadowedPrimaryButton>
      <ShadowedPrimaryButton onPress={onCancel}>Cancel</ShadowedPrimaryButton>
    </ErrorModal>
  );
}
