import React from 'react';
import {GestureResponderEvent, TouchableHighlight, View} from 'react-native';

export function InteractiveContent({
  onPress,
  children,
  style,
  interactiveStyle,
}: React.PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  interactiveStyle?: React.ComponentProps<typeof TouchableHighlight>['style'];
  style?: React.ComponentProps<typeof View>['style'];
}>) {
  return (
    <TouchableHighlight
      underlayColor="white"
      onPress={onPress}
      style={interactiveStyle}>
      <View style={style}>{children}</View>
    </TouchableHighlight>
  );
}
