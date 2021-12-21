import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import {TradeItem} from '../../api/types';

import ArrowLeftIcon from '../../../assets/icons/ArrowLeft.svg';
import HeartIcon from '../../../assets/icons/Heart.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {Header} from '../header/Header';

import {styles as iconStyles} from '../icon/styles';

import {styles} from './styles';
import {Slider} from '../slider/Slider';
import {TradeItemName} from '../trade-item-name/TradeItemName';
import {TradeItemPrice} from '../trade-item-price/TradeItemPrice';

const item: TradeItem = {
  id: '0',
  name: 'Item_0',
  description: '',
  currentPrice: 1,
  price: 2,
  hasDiscount: true,
  imageSrc: 'https://avatars.githubusercontent.com/u/17836706?v=4',
};

export function ProductDetails() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.root}>
        <Header style={styles.header}>
          <TouchableHighlight>
            <ArrowLeftIcon
              style={iconStyles.root}
              color={styles.headerIcon.color}
            />
          </TouchableHighlight>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight>
              <HeartIcon
                style={iconStyles.root}
                color={styles.headerIcon.color}
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <CartIcon
                style={iconStyles.root}
                color={styles.headerIcon.color}
              />
            </TouchableHighlight>
          </View>
        </Header>
        <View style={styles.search}>
          <Slider itemsQuantity={4} currentItemIndex={1}>
            <Image
              source={{uri: item.imageSrc}}
              style={{width: '80%', aspectRatio: 1}}
            />
          </Slider>
          <TradeItemName name={item.name} />
          <TradeItemPrice tradeItem={item} />
        </View>
        <View style={styles.items}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
