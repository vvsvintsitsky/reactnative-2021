import React from 'react';
import {View, ViewStyle} from 'react-native';

import {styles} from './styles';

export function Header({
  children,
  style,
}: React.PropsWithChildren<{style?: ViewStyle}>) {
  return <View style={[styles.root, style]}>{children}</View>;
}
