import React from 'react';
import {Text, View, ViewStyle} from 'react-native';

import {TradeItem} from '../../api/types';

import {styles} from './styles';

function padUSD(price: number) {
  return `$${price}`;
}

export function TradeItemPrice({
  tradeItem,
  style,
}: {
  tradeItem: TradeItem;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.root, style]}>
      <Text style={[styles.text, styles.currentPrice]}>
        {padUSD(tradeItem.currentPrice)}
      </Text>
      {tradeItem.currentPrice !== tradeItem.price && (
        <Text style={[styles.text, styles.price]}>
          {padUSD(tradeItem.price)}
        </Text>
      )}
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
