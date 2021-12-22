import React from 'react';
import {ScrollView, View, TouchableHighlight, Text} from 'react-native';

import {TradeItem} from '../../api/types';

import BurgerIcon from '../../../assets/icons/Burger.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {Header} from '../header/Header';
import {Search} from '../search/Search';
import {TradeItemPreview} from '../trade-item-preview/TradeItemPreview';

import {styles as iconStyles} from '../icon/styles';

import {styles} from './styles';

const items: TradeItem[] = Array.from({length: 3}, (_, index) => ({
  id: String(index),
  name: `Item_${index}`,
  description: '',
  currentPrice: 1,
  price: 2,
  hasDiscount: true,
  imageSrc: 'https://avatars.githubusercontent.com/u/17836706?v=4',
}));

export function Main() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.root}>
      <Header style={styles.header}>
        <TouchableHighlight>
          <BurgerIcon style={iconStyles.root} color={styles.headerIcon.color} />
        </TouchableHighlight>
        <Text style={styles.headerText}>Ecommerce Store</Text>
        <TouchableHighlight>
          <CartIcon style={iconStyles.root} color={styles.headerIcon.color} />
        </TouchableHighlight>
      </Header>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.items}>
        {items.map(item => (
          <TradeItemPreview
            tradeItem={item}
            key={item.id}
            style={styles.item}
          />
        ))}
      </View>
    </ScrollView>
  );
}
