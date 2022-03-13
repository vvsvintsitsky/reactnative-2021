import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';
import {PrimaryButton} from './PrimaryButton';

storiesOf('PrimaryButton', module).add('default', () => (
  <PrimaryButton>
    <Text>{text('PrimaryButton', 'PrimaryButton')}</Text>
  </PrimaryButton>
));
