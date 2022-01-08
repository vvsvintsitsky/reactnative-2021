import React from 'react';
import {Text} from 'react-native';

import BurgerIcon from '../../../assets/icons/Burger.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {styles as iconStyles} from '../../components/icon/styles';

import {Header} from '../../components/header/Header';
import {InteractiveContent} from '../../components/interactive-content/InteractiveContent';
import {styles} from './styles';

export function MainHeader() {
  return (
    <Header style={styles.header}>
      <InteractiveContent>
        <BurgerIcon style={iconStyles.root} color={styles.headerIcon.color} />
      </InteractiveContent>
      <Text style={styles.headerText}>Ecommerce Store</Text>
      <InteractiveContent>
        <CartIcon style={iconStyles.root} color={styles.headerIcon.color} />
      </InteractiveContent>
    </Header>
  );
}
