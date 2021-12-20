import React from 'react';
import {TextInput as Input} from 'react-native';

import {styles} from './styles';

export function TextInput({
  style,
  ...rest
}: React.ComponentProps<typeof Input>) {
  return <Input style={[styles.root, style]} {...rest} />;
}
