import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {useAuthenticationState} from '../../authentication/useAuthenticationState';

export function useConfirmLogoutModal() {
  const navigation = useNavigation();
  const {onLogout} = useAuthenticationState();

  const onCancel = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    onLogout,
    onCancel,
  };
}
