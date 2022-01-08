import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Modal} from '../../components/modal/Modal';

import AttentionIcon from '../../../assets/icons/Attention.svg';
import {PrimaryButton} from '../../components/primary-button/PrimaryButton';

import {styles} from './styles';
import {useAuthenticationState} from '../../authentication/useAuthenticationState';

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
      <PrimaryButton onPress={onLogin} style={styles.button}>
        LOGIN
      </PrimaryButton>
      <PrimaryButton onPress={onLogin}>SIGN UP</PrimaryButton>
    </Modal>
  );
}
