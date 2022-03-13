import {StyleSheet} from 'react-native';
import {borderColor, paddingHorizontal} from '../text-input/styles';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: borderColor,
    marginRight: paddingHorizontal,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    paddingHorizontal: 0,
  },
});
