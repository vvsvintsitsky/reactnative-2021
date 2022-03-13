import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Modal} from '../../components/modal/Modal';

import AttentionIcon from '../../../assets/icons/Attention.svg';

import {useAuthenticationState} from '../../authentication/useAuthenticationState';

import {styles} from './styles';
import {ShadowedPrimaryButton} from '../../components/shadowed-primary-button/ShadowedPrimaryButton';

export function LoginToContinueModal() {
  const navigation = useNavigation();
  const {onAuthenticate} = useAuthenticationState();

  const onLogin = React.useCallback(async () => {
    await onAuthenticate(true);
    navigation.goBack();
  }, [navigation, onAuthenticate]);

  return (
    <Modal
      headerText="Login To Continue"
      contentText={<>Please login to add product{'\n'}in your cart</>}
      icon={<AttentionIcon fill="#FEB96B" />}>
      <ShadowedPrimaryButton
        onPress={onLogin}
        shadowContainerStyle={styles.button}>
        LOGIN
      </ShadowedPrimaryButton>
      <ShadowedPrimaryButton onPress={onLogin}>SIGN UP</ShadowedPrimaryButton>
    </Modal>
  );
}
