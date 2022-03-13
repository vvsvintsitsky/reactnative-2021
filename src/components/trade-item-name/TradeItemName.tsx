import React from 'react';
import {Text, TextStyle} from 'react-native';

import {styles} from './styles';

export function TradeItemName({
  name,
  style,
}: {
  name: string;
  style?: TextStyle;
}) {
  return (
    <Text style={[styles.root, style]} numberOfLines={1}>
      {name}
    </Text>
  );
}
