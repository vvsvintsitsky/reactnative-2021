import {StyleSheet} from 'react-native';
import {convertRgbaColorToString} from '../../utils/color/convertRgbaColorToString';
import {createRgbaColor} from '../../utils/color/createRgbaColor';

export const BACKGROUND_COLOR = createRgbaColor({
  r: 0,
  g: 138,
  b: 206,
  a: 1,
});

export const styles = StyleSheet.create({
  root: {
    backgroundColor: convertRgbaColorToString(BACKGROUND_COLOR),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 16,
    color: '#FFFFFF',
    letterSpacing: 1.25,
  },
});
