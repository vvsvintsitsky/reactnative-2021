import React from 'react';
import {View} from 'react-native';
import {TextButton} from '../text-button/TextButton';
import {styles} from './styles';

function getOptionKeyStub(index: number) {
  return String(index);
}

export function SingleSelect({
  options,
  getOptionKey = getOptionKeyStub,
}: {
  options: React.ReactNode[];
  getOptionKey?: (index: number) => string;
}) {
  return (
    <View style={styles.root}>
      {options.map((option, index) => (
        <TextButton
          key={getOptionKey(index)}
          style={styles.option}
          textStyle={styles.optionText}>
          {option}
        </TextButton>
      ))}
    </View>
  );
}
