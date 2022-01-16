import React from 'react';
import {
  PrimaryButton,
  PrimaryButtonProps,
} from '../primary-button/PrimaryButton';
import {
  PrimaryButtonShadowContainer,
  PrimaryButtonShadowContainerProps,
} from './PrimaryButtonShadowContainer';

export type ShadowedPrimaryButtonProps = PrimaryButtonProps & {
  shadowContainerStyle?: PrimaryButtonShadowContainerProps['style'];
};

export function ShadowedPrimaryButton({
  shadowContainerStyle,
  ...props
}: ShadowedPrimaryButtonProps) {
  return (
    <PrimaryButtonShadowContainer style={shadowContainerStyle}>
      <PrimaryButton {...props} />
    </PrimaryButtonShadowContainer>
  );
}
