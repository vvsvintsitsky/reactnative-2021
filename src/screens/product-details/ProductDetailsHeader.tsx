import React from 'react';

import {View} from 'react-native';

import ArrowLeftIcon from '../../../assets/icons/ArrowLeft.svg';
import HeartIcon from '../../../assets/icons/Heart.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {Header} from '../../components/header/Header';

import {styles as iconStyles} from '../../components/icon/styles';

import {InteractiveContent} from '../../components/interactive-content/InteractiveContent';

import {styles} from './styles';

export function ProductDetailsHeader() {
  return (
    <Header style={styles.header}>
      <InteractiveContent>
        <ArrowLeftIcon
          style={iconStyles.root}
          color={styles.headerIcon.color}
        />
      </InteractiveContent>
      <View style={styles.headerControls}>
        <InteractiveContent>
          <HeartIcon style={iconStyles.root} color={styles.headerIcon.color} />
        </InteractiveContent>
        <InteractiveContent interactiveStyle={styles.cartButton}>
          <CartIcon style={iconStyles.root} color={styles.headerIcon.color} />
        </InteractiveContent>
      </View>
    </Header>
  );
}
