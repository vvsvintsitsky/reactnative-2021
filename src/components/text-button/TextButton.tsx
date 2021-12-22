import React from 'react';
import {TouchableHighlight, ViewStyle, Text} from 'react-native';
import {styles} from './styles';

export function TextButton({
  children,
  style,
}: React.PropsWithChildren<{style?: ViewStyle}>) {
  return (
    <TouchableHighlight style={[styles.root, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
}
