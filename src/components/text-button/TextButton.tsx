import React from 'react';
import {TouchableHighlight, ViewStyle, Text, TextStyle} from 'react-native';
import {styles} from './styles';

export function TextButton({
  children,
  style,
  textStyle,
}: React.PropsWithChildren<{style?: ViewStyle; textStyle?: TextStyle}>) {
  return (
    <TouchableHighlight style={[styles.root, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableHighlight>
  );
}
