import React from 'react';
import {Text, View} from 'react-native';

import {TradeItem} from '../../api/types';

import {styles} from './styles';

function padUSD(price: number) {
  return `$${price}`;
}

export function TradeItemPrice({tradeItem}: {tradeItem: TradeItem}) {
  return (
    <View style={styles.root}>
      <Text style={[styles.text, styles.currentPrice]}>
        {padUSD(tradeItem.currentPrice)}
      </Text>
      <Text style={[styles.text, styles.price]}>{padUSD(tradeItem.price)}</Text>
      {tradeItem.hasDiscount && (
        <Text style={[styles.text, styles.discount]}>
          {`${Math.floor(
            (1 - tradeItem.currentPrice / tradeItem.price) * 100,
          )}% Off`}
        </Text>
      )}
    </View>
  );
}
