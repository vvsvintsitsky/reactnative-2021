import React from 'react';

import {useNavigation} from '@react-navigation/native';

import ArrowLeftIcon from '../../../assets/icons/ArrowLeft.svg';
import HeartIcon from '../../../assets/icons/Heart.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {styles as iconStyles} from '../../components/icon/styles';

import {InteractiveContent} from '../../components/interactive-content/InteractiveContent';

import {styles} from './styles';

export function ProductDetailsHeaderLeft() {
  const navigation = useNavigation();

  return (
    <InteractiveContent onPress={navigation.goBack}>
      <ArrowLeftIcon style={iconStyles.root} color={styles.headerIcon.color} />
    </InteractiveContent>
  );
}

export function ProductDetailsHeaderRight() {
  return (
    <>
      <InteractiveContent>
        <HeartIcon style={iconStyles.root} color={styles.headerIcon.color} />
      </InteractiveContent>
      <InteractiveContent interactiveStyle={styles.cartButton}>
        <CartIcon style={iconStyles.root} color={styles.headerIcon.color} />
      </InteractiveContent>
    </>
  );
}
