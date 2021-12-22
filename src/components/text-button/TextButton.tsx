import React from 'react';
import {ViewStyle, Text, TextStyle} from 'react-native';
import {InteractiveContent} from '../interactive-content/InteractiveContent';
import {styles} from './styles';

export function TextButton({
  children,
  style,
  textStyle,
}: React.PropsWithChildren<{style?: ViewStyle; textStyle?: TextStyle}>) {
  return (
    <InteractiveContent style={[styles.root, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </InteractiveContent>
  );
}
