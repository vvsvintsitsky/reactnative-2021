import {StyleSheet} from 'react-native';

export const borderColor = '#8F8F8F';
export const paddingHorizontal = 14;

export const height = 40;

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal,
    borderColor,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    height,
  },
  input: {
    color: '#1C1F27',
    flex: 1,
    borderWidth: 0,
  },
  placeholder: {
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
});
