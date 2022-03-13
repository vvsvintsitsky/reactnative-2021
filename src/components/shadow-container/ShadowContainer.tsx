import React from 'react';
import {Shadow, ShadowProps} from 'react-native-shadow-2';

export function ShadowContainer({
  children,
  ...rest
}: React.PropsWithChildren<ShadowProps>) {
  return <Shadow {...rest}>{children}</Shadow>;
}
