import {StyleSheet} from 'react-native';
import {createRgbaColor} from '../../utils/color/createRgbaColor';
import {BACKGROUND_COLOR} from '../text-button/styles';

export const INITIAL_COLOR = BACKGROUND_COLOR;

export const SUCCESS_COLOR = createRgbaColor({g: 255, a: 1});

export const ERROR_COLOR = createRgbaColor({r: 255, a: 1});

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});
