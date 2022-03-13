import React from 'react';
import {View, ViewStyle} from 'react-native';

import SearchIcon from '../../../assets/icons/Search.svg';

import {styles as iconStyles} from '../icon/styles';

import {TextInput} from '../text-input/TextInput';
import {styles as textInputStyles} from '../text-input/styles';

import {styles} from './styles';

export function Search({style}: {style?: ViewStyle}) {
  return (
    <View style={[textInputStyles.root, styles.root, style]}>
      <SearchIcon style={[iconStyles.root, styles.icon]} />
      <TextInput style={styles.input} placeholder="Type something" />
    </View>
  );
}
