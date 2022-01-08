import React from 'react';
import {TextButton, TextButtonProps} from '../text-button/TextButton';

import {styles} from './styles';

export function PrimaryButton(props: TextButtonProps) {
  return (
    <TextButton {...props} style={{...styles.root, ...(props.style ?? {})}} />
  );
}
