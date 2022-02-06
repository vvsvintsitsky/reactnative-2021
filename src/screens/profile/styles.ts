import {StyleSheet} from 'react-native';

import {BACKGROUND_COLOR} from '../../components/text-button/styles';
import {convertRgbaColorToString} from '../../utils/color/convertRgbaColorToString';

const PHOTO_BUTTON_SIZE = 120;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  root: {
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 25,
  },
  photo: {
    alignSelf: 'center',
    borderRadius: PHOTO_BUTTON_SIZE / 2,
    width: PHOTO_BUTTON_SIZE,
    height: PHOTO_BUTTON_SIZE,
  },
  photoButton: {
    backgroundColor: convertRgbaColorToString(BACKGROUND_COLOR),
  },
  photoIcon: {
    width: 50,
    height: 45,
  },
  formInputs: {
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
  },
});
