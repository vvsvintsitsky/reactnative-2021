import React from 'react';
import {ViewStyle, Text, TextStyle} from 'react-native';
import {InteractiveContent} from '../interactive-content/InteractiveContent';
import {styles} from './styles';

export type TextButtonProps = React.PropsWithChildren<{
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}>;

export function TextButton({
  children,
  style,
  textStyle,
  onPress,
}: TextButtonProps) {
  return (
    <InteractiveContent style={[styles.root, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </InteractiveContent>
  );
}
