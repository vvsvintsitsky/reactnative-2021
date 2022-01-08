import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  option: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  unselected: {
    backgroundColor: '#F7F7F7',
  },
  optionText: {
    color: '#4A4A4A',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0,
  },
});
