import React from 'react';

import {Modal} from '../../components/modal/Modal';

import AttentionIcon from '../../../assets/icons/Attention.svg';

import {PrimaryButton} from '../../components/primary-button/PrimaryButton';

import {styles} from './styles';
import {useConfirmLogoutModal} from './useConfirmLogoutModal';

export function ConfirmLogoutModal() {
  const {onLogout, onCancel} = useConfirmLogoutModal();

  return (
    <Modal
      headerText="Are you sure you want to logout?"
      icon={<AttentionIcon fill="#FEB96B" />}>
      <PrimaryButton style={styles.button} onPress={onCancel}>
        CANCEL
      </PrimaryButton>
      <PrimaryButton onPress={onLogout}>LOGOUT</PrimaryButton>
    </Modal>
  );
}
