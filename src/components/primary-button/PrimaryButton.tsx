import React from 'react';
import {TextButton, TextButtonProps} from '../text-button/TextButton';

import {styles} from './styles';

export type PrimaryButtonProps = TextButtonProps & {
  isFullWidth?: boolean;
};

export function PrimaryButton({isFullWidth, ...props}: PrimaryButtonProps) {
  return (
    <TextButton
      {...props}
      style={{
        ...styles.root,
        ...(isFullWidth ? styles.fullWidth : {}),
        ...(props.style ?? {}),
      }}
    />
  );
}
