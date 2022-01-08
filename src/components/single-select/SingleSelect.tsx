import React from 'react';
import {View} from 'react-native';
import {TextButton} from '../text-button/TextButton';
import {styles} from './styles';

function getOptionKeyStub(index: number) {
  return String(index);
}

interface Option {
  id: string;
  name: string;
}

export function SingleSelect({
  options,
  getOptionKey = getOptionKeyStub,
  onSelect,
  selectedValue,
}: {
  options: Option[];
  getOptionKey?: (index: number) => string;
  onSelect: (option: Option) => void;
  selectedValue?: Option;
}) {
  return (
    <View style={styles.root}>
      {options.map((option, index) => {
        const isSelected = selectedValue === option;

        return (
          <TextButton
            onPress={() => onSelect(option)}
            key={getOptionKey(index)}
            style={{...styles.option, ...(isSelected ? {} : styles.unselected)}}
            textStyle={isSelected ? undefined : styles.optionText}>
            {option.name}
          </TextButton>
        );
      })}
    </View>
  );
}
