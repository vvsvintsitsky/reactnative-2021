import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {useAuthenticationState} from '../../authentication/useAuthenticationState';

import {SmartButtonStatus} from '../../components/smart-button/SmartButton';

export function useLoginToContinueModal() {
  const navigation = useNavigation();
  const {onAuthenticate} = useAuthenticationState();

  const [loginStatus, setLoginStatus] = React.useState<SmartButtonStatus>();

  const onLogin = React.useCallback(async () => {
    try {
      await onAuthenticate();
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

  return {
    onSignUp,
    signUpStatus,
    onLoginSuccess,
    loginStatus,
    onLogin,
  };
}
