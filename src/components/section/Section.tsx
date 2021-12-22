import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {styles} from './styles';

export function Section({
  children,
  title,
  style,
}: React.PropsWithChildren<{style?: ViewStyle; title: string}>) {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}
