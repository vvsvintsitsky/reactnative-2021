import React from 'react';
import {Image, View, ViewStyle} from 'react-native';

import {TradeItem} from '../../api/types';
import {TradeItemName} from '../trade-item-name/TradeItemName';

import {TradeItemPrice} from '../trade-item-price/TradeItemPrice';

import {styles} from './styles';

export function TradeItemPreview({
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
      <TradeItemName style={styles.name} name={tradeItem.name} />
      <TradeItemPrice tradeItem={tradeItem} />
    </View>
  );
}
