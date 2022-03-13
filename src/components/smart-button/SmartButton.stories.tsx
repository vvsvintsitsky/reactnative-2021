import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';
import {SmartButton, SmartButtonStatus} from './SmartButton';

storiesOf('SmartButton', module).add('error status', () => (
  <SmartButton status={SmartButtonStatus.ERROR}>
    <Text>{text('ErrorSmartButton', 'ErrorSmartButton')}</Text>
  </SmartButton>
));
