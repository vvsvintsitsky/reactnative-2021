import React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';

import {TradeItem} from '../../api/types';

import {TradeItemPrice} from '../trade-item-price/TradeItemPrice';

import {styles} from './styles';

export function TradeItemOverview({
  tradeItem,
  style,
}: {
  tradeItem: TradeItem;
  style: ViewStyle;
}) {
  return (
    <View style={[styles.root, style]}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: tradeItem.imageSrc,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>{tradeItem.name}</Text>
      <TradeItemPrice tradeItem={tradeItem} />
    </View>
  );
}
