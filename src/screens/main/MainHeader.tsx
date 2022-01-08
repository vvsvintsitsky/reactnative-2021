import React from 'react';

import BurgerIcon from '../../../assets/icons/Burger.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {styles as iconStyles} from '../../components/icon/styles';

import {InteractiveContent} from '../../components/interactive-content/InteractiveContent';
import {styles} from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export function MainHeaderLeft() {
  const navigation = useNavigation();
  const onMenuSelect = React.useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  return (
    <InteractiveContent onPress={onMenuSelect}>
      <BurgerIcon style={iconStyles.root} color={styles.headerIcon.color} />
    </InteractiveContent>
  );
}

export const MainHeaderTitle = 'Ecommerce Store';

export function MainHeaderRight() {
  return (
    <InteractiveContent>
      <CartIcon style={iconStyles.root} color={styles.headerIcon.color} />
    </InteractiveContent>
  );
}
