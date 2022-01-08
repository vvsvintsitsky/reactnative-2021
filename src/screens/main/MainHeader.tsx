import React from 'react';

import BurgerIcon from '../../../assets/icons/Burger.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {DrawerActions, useNavigation} from '@react-navigation/native';
import {IconButton} from '../../components/icon-button/IconButton';

export function MainHeaderLeft() {
  const navigation = useNavigation();
  const onMenuSelect = React.useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  return <IconButton onPress={onMenuSelect} icon={BurgerIcon} />;
}

export const MainHeaderTitle = 'Ecommerce Store';

export function MainHeaderRight() {
  return <IconButton icon={CartIcon} />;
}
