import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {useAuthenticationState} from '../../authentication/useAuthenticationState';

export function useConfirmLogoutModal() {
  const navigation = useNavigation();
  const {onLogout} = useAuthenticationState();

  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onLogoutHandler = React.useCallback(() => {
    onLogout();
    goBack();
  }, [onLogout, goBack]);

  return {
    onLogout: onLogoutHandler,
    onCancel: goBack,
  };
}
