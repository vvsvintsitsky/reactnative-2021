import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {SingleSelect} from './SingleSelect';

const options = [
  {id: '1', name: 'name1'},
  {id: '2', name: 'name2'},
];

storiesOf('SingleSelect', module).add('default', () => (
  <SingleSelect
    options={options}
    selectedValue={options[0]}
    onSelect={() => undefined}
  />
));
