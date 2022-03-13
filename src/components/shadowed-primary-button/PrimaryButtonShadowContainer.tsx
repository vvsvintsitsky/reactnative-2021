import React from 'react';
import {ViewStyle} from 'react-native';

import {ShadowContainer} from '../shadow-container/ShadowContainer';

export type PrimaryButtonShadowContainerProps = {
  style?: ViewStyle;
};

export function PrimaryButtonShadowContainer({
  style,
  ...props
}: React.PropsWithChildren<PrimaryButtonShadowContainerProps>) {
  return (
    <ShadowContainer
      distance={4}
      startColor="#0000004D"
      sides={['bottom']}
      corners={[]}
      containerViewStyle={style}
      {...props}
    />
  );
}
