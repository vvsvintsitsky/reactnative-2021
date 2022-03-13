import React from 'react';

import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import ArrowLeftIcon from '../../../assets/icons/ArrowLeft.svg';
import HeartIcon from '../../../assets/icons/Heart.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {IconButton} from '../../components/icon-button/IconButton';

import {styles} from './styles';

export function ProductDetailsHeaderLeft() {
  const navigation = useNavigation();

  return <IconButton onPress={navigation.goBack} icon={ArrowLeftIcon} />;
}

export function ProductDetailsHeaderRight() {
  return (
    <View style={styles.headerControls}>
      <IconButton icon={HeartIcon} />
      <IconButton icon={CartIcon} />
    </View>
  );
}
