import React from 'react';
import {ViewStyle} from 'react-native';
import {
  PrimaryButton,
  PrimaryButtonProps,
} from '../primary-button/PrimaryButton';
import {ShadowContainer} from '../shadow-container/ShadowContainer';

export type ShadowedPrimaryButtonProps = PrimaryButtonProps & {
  shadowContainerStyle?: ViewStyle;
};

export function ShadowedPrimaryButton({
  shadowContainerStyle,
  ...props
}: ShadowedPrimaryButtonProps) {
  return (
    <ShadowContainer
      distance={4}
      startColor="#0000004D"
      sides={['bottom']}
      corners={[]}
      containerViewStyle={shadowContainerStyle}>
      <PrimaryButton {...props} />
    </ShadowContainer>
  );
}
