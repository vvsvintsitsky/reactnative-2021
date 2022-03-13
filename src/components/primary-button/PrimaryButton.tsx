import React from 'react';
import {TextButton, TextButtonProps} from '../text-button/TextButton';

import {styles} from './styles';

export type PrimaryButtonProps = TextButtonProps;

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <TextButton {...props} style={{...styles.root, ...(props.style ?? {})}} />
  );
}
