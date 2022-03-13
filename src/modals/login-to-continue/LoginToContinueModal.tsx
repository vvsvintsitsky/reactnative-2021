import React from 'react';

import {Modal} from '../../components/modal/Modal';

import AttentionIcon from '../../../assets/icons/Attention.svg';

import {SmartButton} from '../../components/smart-button/SmartButton';
import {PrimaryButtonShadowContainer} from '../../components/shadowed-primary-button/PrimaryButtonShadowContainer';

import {styles} from './styles';
import {useLoginToContinueModal} from './useLoginToContinueModal';

export function LoginToContinueModal() {
  const {loginStatus, onLogin, onLoginSuccess, signUpStatus, onSignUp} =
    useLoginToContinueModal();

  return (
    <Modal
      headerText="Login To Continue"
      contentText={<>Please login to add product{'\n'}in your cart</>}
      icon={<AttentionIcon fill="#FEB96B" />}>
      <PrimaryButtonShadowContainer style={styles.button}>
        <SmartButton
          status={loginStatus}
          onPress={onLogin}
          onSuccess={onLoginSuccess}>
          LOGIN
        </SmartButton>
      </PrimaryButtonShadowContainer>
      <PrimaryButtonShadowContainer>
        <SmartButton status={signUpStatus} onPress={onSignUp}>
          SIGN UP
        </SmartButton>
      </PrimaryButtonShadowContainer>
    </Modal>
  );
}
