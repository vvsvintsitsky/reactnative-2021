import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

export function TrashScreen() {
  const navigation = useNavigation();

  return <Button onPress={navigation.goBack} title="Back" />;
}
