import React from 'react';
import {ViewStyle} from 'react-native';

import SearchIcon from '../../../assets/icons/Search.svg';

import {styles as iconStyles} from '../icon/styles';

import {TextInput} from '../text-input/TextInput';

import {styles} from './styles';

export function Search({style}: {style?: ViewStyle}) {
  return (
    <TextInput placeholder="Type something" containerStyle={style}>
      <SearchIcon style={[iconStyles.root, styles.icon]} />
    </TextInput>
  );
}
