import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Modal} from '../../components/modal/Modal';

import AttentionIcon from '../../../assets/icons/Attention.svg';

import {useAuthenticationState} from '../../authentication/useAuthenticationState';

import {
  SmartButton,
  SmartButtonStatus,
} from '../../components/smart-button/SmartButton';
import {PrimaryButtonShadowContainer} from '../../components/shadowed-primary-button/PrimaryButtonShadowContainer';

import {styles} from './styles';

export function LoginToContinueModal() {
  const navigation = useNavigation();
  const {onAuthenticate} = useAuthenticationState();

  const [loginStatus, setLoginStatus] = React.useState<SmartButtonStatus>();

  const onLogin = React.useCallback(async () => {
    try {
      await onAuthenticate(true);
    } catch (e) {
      return setLoginStatus(SmartButtonStatus.ERROR);
    }

    setLoginStatus(SmartButtonStatus.SUCCESS);
  }, [onAuthenticate]);

  const onLoginSuccess = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const [signUpStatus, setSignUpStatus] = React.useState<SmartButtonStatus>();

  const onSignUp = React.useCallback(() => {
    setSignUpStatus(SmartButtonStatus.ERROR);
  }, []);

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
